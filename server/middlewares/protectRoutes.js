import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
export const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies["housing-token"];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: "Unauthorized" });
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in protectRoutes: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
