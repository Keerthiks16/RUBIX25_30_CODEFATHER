import bcryptjs from "bcryptjs";
import User from "../models/users.model.js";
import { generateToken } from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (phone.length < 10) {
      return res
        .status(400)
        .json({ message: "Phone number must be at least 10 digits" });
    }
    if (role !== "buyer" && role !== "seller" && role !== "agent") {
      return res.status(400).json({ message: "Invalid role" });
    }
    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "User By this email already exists" });
    }
    const existingUserByPhone = await User.findOne({ phone: phone });
    if (existingUserByPhone) {
      return res
        .status(400)
        .json({ message: "User By this phone no already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(password, salt);
    const user = await new User({
      name,
      email,
      phone,
      password: hashedpassword,
      role,
    });
    generateToken(user._id, res);
    await user.save();
    user.password = undefined;
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(`Error in signup ${error}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateToken(user._id, res);
    user.password = undefined;
    return res.status(200).json({ message: "Login Successfil", user });
  } catch (error) {
    console.log(`Error in Login: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("housing-token");
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    console.log(`Error in Logout: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const authCheck = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(`Error is AuthCheck: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
