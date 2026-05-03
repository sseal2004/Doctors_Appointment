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
    verifyUpi,
    sendContactMessage,
    getAllContacts,
    markContactRead,
    deleteContact,
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import authAdmin from '../middlewares/authAdmin.js';
import upload from '../middlewares/multer.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/contact", sendContactMessage)
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

// Contact admin routes (protected by admin token)
userRouter.get("/contacts", authAdmin, getAllContacts)
userRouter.post("/contact-read", authAdmin, markContactRead)
userRouter.post("/contact-delete", authAdmin, deleteContact)

export default userRouter;