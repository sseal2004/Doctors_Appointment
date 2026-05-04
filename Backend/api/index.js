import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
import adminRouter from "../routes/adminRouter.js";
import doctorRouter from "../routes/doctorRouter.js";
import userRouter from "../routes/userRouter.js";

const app = express();

// ── CORS ──────────────────────────────────────────────
const allowedOrigins = [
  "https://medcare-main.vercel.app",
  "https://medcare-admin-theta.vercel.app",   // removed trailing slash
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server / curl (no origin header)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────
app.use("/api/admin",  adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user",   userRouter);

app.get("/", (_req, res) => res.send("API Working ✅"));

// ── DB connection — cached across warm invocations ───
let dbConnected = false;

async function ensureDB() {
  if (dbConnected) return;
  await connectDB();
  await connectCloudinary();
  dbConnected = true;
}

// ── Serverless handler ────────────────────────────────
export default async function handler(req, res) {
  try {
    await ensureDB();
  } catch (err) {
    console.error("❌ Startup error:", err);
    return res.status(500).json({ success: false, error: "Server initialisation failed", detail: err.message });
  }

  // Hand off to Express
  return new Promise((resolve) => {
    res.on("finish", resolve);
    res.on("close",  resolve);
    app(req, res);
  });
}