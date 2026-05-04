import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import adminRouter from './routes/adminRouter.js'
import doctorRouter from './routes/doctorRouter.js'
import userRouter from './routes/userRouter.js'

// app config
const app = express()
app.use(cors({ origin: true, credentials: true }));


// Connect to services (IMPORTANT: no await needed if already handled)
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// test routes
app.get("/", (req, res) => {
  res.send("API Working ✅")
})

app.get('/test-db', (req, res) => {
  const state = mongoose.connection.readyState
  if (state === 1) {
    res.send('Database is connected ✅')
  } else {
    res.status(500).send('Database is NOT connected ❌')
  }
})

export default app