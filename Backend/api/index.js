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

// ✅ create app
const app = express();

// ✅ Allowed origins
const allowedOrigins = [
  "https://medcare-main.vercel.app",
  "http://localhost:5173"
];

// ✅ CORS fix
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect DB (with caching)
let isConnected = false;

const init = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      await connectCloudinary();
      isConnected = true;
      console.log("✅ DB + Cloudinary Connected");
    } catch (err) {
      console.error("❌ Init Error:", err);
    }
  }
};

// ✅ middleware to ensure DB connection
app.use(async (req, res, next) => {
  await init();
  next();
});

// ✅ routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// ✅ test routes
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

app.get("/test-db", (req, res) => {
  const state = mongoose.connection.readyState;
  res.send(`DB State: ${state}`); // 1 = connected
});

// ✅ export handler (IMPORTANT for Vercel)
export default serverless(app);