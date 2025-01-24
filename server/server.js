import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import properties from "./data/properties.json" assert { type: "json" };

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello from server");
});
app.get("/api/properties", (req, res) => {
  res.json(properties);
});
app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(`Error in db connection ${err}`));
  console.log("server is running on port 5000");
});
