import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import adminRouter from './routes/adminRouter.js'
import doctorRouter from './routes/doctorRouter.js'
import userRouter from './routes/userRouter.js'

const allowedOrigins = [
  "https://medcare-main.vercel.app",
  "http://localhost:5173"
]

// app config
const app = express()

// connect services
connectDB()
connectCloudinary()

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("CORS not allowed"))
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://medcare-main.vercel.app")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})

// middlewares
app.use(express.json())

// routes
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// test route
app.get("/", (req, res) => {
  res.send("API Working ✅")
})

// DB test
app.get('/test-db', (req, res) => {
  const state = mongoose.connection.readyState
  if (state === 1) {
    res.send('Database is connected ✅')
  } else {
    res.status(500).send('Database is NOT connected ❌')
  }
})


export default app