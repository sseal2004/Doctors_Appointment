import express from 'express';
import {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    bookAppointment,
    listAppointment,
    cancelAppointment,
    paymentPaypal,
    verifyPaypal,
    paymentUpi,
    verifyUpi
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)

// PayPal
userRouter.post("/payment-paypal", authUser, paymentPaypal)
userRouter.post("/verifyPaypal", authUser, verifyPaypal)

// UPI / QR Code
userRouter.post("/payment-upi", authUser, paymentUpi)
userRouter.post("/verifyUpi", authUser, verifyUpi)

export default userRouter;