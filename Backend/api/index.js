import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";

import adminRouter from "../routes/adminRouter.js";
import doctorRouter from "../routes/doctorRouter.js";
import userRouter from "../routes/userRouter.js";

const app = express();

// ✅ IMPORTANT: global connection flag
let isConnected = false;

// ✅ middleware
const allowedOrigins = [
  "https://medcare-main.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// ✅ test route
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

app.get("/test-db", (req, res) => {
  const state = mongoose.connection.readyState;
  res.send(`DB State: ${state}`);
});


// ✅🔥 FINAL SERVERLESS HANDLER (MOST IMPORTANT)
export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await connectDB();
      await connectCloudinary();
      isConnected = true;
      console.log("✅ DB Connected");
    } catch (err) {
      console.error("❌ DB ERROR:", err);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }

  return app(req, res);
}