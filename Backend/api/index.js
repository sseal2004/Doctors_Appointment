import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import serverless from "serverless-http";
import "dotenv/config";

import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";

import adminRouter from "../routes/adminRouter.js";
import doctorRouter from "../routes/doctorRouter.js";
import userRouter from "../routes/userRouter.js";

const app = express();

const allowedOrigins = [
  "https://medcare-main.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect ONCE (NOT per request)
let isConnected = false;

const init = async () => {
  if (!isConnected) {
    await connectDB();
    await connectCloudinary();
    isConnected = true;
    console.log("✅ DB Connected");
  }
};

await init();

// routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(500).json({ success: false, message: err.message });
});

export default serverless(app);