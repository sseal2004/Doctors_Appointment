import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'
import paypal from '@paypal/checkout-server-sdk';
import contactModel from '../models/contactModel.js';

// PayPal client setup
const paypalEnv = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_SECRET
)
const paypalClient = new paypal.core.PayPalHttpClient(paypalEnv)


// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const userData = { name, email, password: hashedPassword }
        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user profile data
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')
        res.json({ success: true, userData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update user profile
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender, social } = req.body
        const imageFile = req.file
        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" })
        }
        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender, social: JSON.parse(social) })
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
            const imageURL = imageUpload.secure_url
            await userModel.findByIdAndUpdate(userId, { image: imageURL })
        }
        res.json({ success: true, message: 'Profile Updated' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to handle contact form submission
const sendContactMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body

        if (!name || !email || !subject || !message) {
            return res.json({ success: false, message: 'All fields are required' })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter a valid email address' })
        }
        if (message.trim().length < 10) {
            return res.json({ success: false, message: 'Message must be at least 10 characters' })
        }

        const newContact = new contactModel({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim(),
            createdAt: new Date()
        })

        await newContact.save()
        console.log('Contact form saved:', { name, email, subject })
        res.json({ success: true, message: 'Message received! We will get back to you within 2 hours.' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all contact messages (admin only, validated via aToken in header)
const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find({}).sort({ createdAt: -1 })
        res.json({ success: true, contacts })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to mark a contact message as read
const markContactRead = async (req, res) => {
    try {
        const { contactId } = req.body
        if (!contactId) {
            return res.json({ success: false, message: 'Contact ID is required' })
        }
        const contact = await contactModel.findByIdAndUpdate(
            contactId,
            { read: true },
            { new: true }
        )
        if (!contact) {
            return res.json({ success: false, message: 'Contact not found' })
        }
        res.json({ success: true, message: 'Marked as read' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to delete a contact message
const deleteContact = async (req, res) => {
    try {
        const { contactId } = req.body
        if (!contactId) {
            return res.json({ success: false, message: 'Contact ID is required' })
        }
        const contact = await contactModel.findByIdAndDelete(contactId)
        if (!contact) {
            return res.json({ success: false, message: 'Contact not found' })
        }
        res.json({ success: true, message: 'Contact deleted successfully' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to book appointment
const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body
        const docData = await doctorModel.findById(docId).select("-password")
        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor Not Available' })
        }
        let slots_booked = { ...docData.slots_booked }
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'Slot Not Available' })
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }
        const userData = await userModel.findById(userId).select("-password")
        delete docData.slots_booked
        const appointmentData = {
            userId, docId, userData, docData,
            amount: docData.fees,
            slotTime, slotDate,
            date: Date.now()
        }
        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()
        await doctorModel.findByIdAndUpdate(docId, { slots_booked })
        res.json({ success: true, message: 'Appointment Booked' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment
const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData.userId.toString() !== userId) {
            return res.json({ success: false, message: 'Unauthorized action' })
        }
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
        const { docId, slotDate, slotTime } = appointmentData
        const doctorData = await doctorModel.findById(docId)
        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, { slots_booked })
        res.json({ success: true, message: 'Appointment Cancelled' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user appointments
const listAppointment = async (req, res) => {
    try {
        const { userId } = req.body
        const appointments = await appointmentModel.find({ userId })
        res.json({ success: true, appointments })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// ─────────────────────────────────────────────
// PAYPAL
// ─────────────────────────────────────────────

const paymentPaypal = async (req, res) => {
    try {
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: 'Appointment Cancelled or not found' })
        }
        const request = new paypal.orders.OrdersCreateRequest()
        request.prefer("return=representation")
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: Number(appointmentData.amount).toFixed(2)
                },
                description: "Appointment Payment",
                custom_id: appointmentId
            }]
        })
        const order = await paypalClient.execute(request)
        res.json({
            success: true,
            order: {
                id: order.result.id,
                amount: Math.round(Number(appointmentData.amount) * 100),
                currency: "USD"
            }
        })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const verifyPaypal = async (req, res) => {
    try {
        const { orderID, paymentID, appointmentId } = req.body
        const request = new paypal.orders.OrdersCaptureRequest(orderID)
        request.requestBody({})
        const capture = await paypalClient.execute(request)
        if (capture.result.status === "COMPLETED") {
            await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true })
            res.json({ success: true, message: "Payment Successful" })
        } else {
            res.json({ success: false, message: "Payment not completed" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// ─────────────────────────────────────────────
// UPI / QR CODE
// ─────────────────────────────────────────────

const paymentUpi = async (req, res) => {
    try {
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: 'Appointment Cancelled or not found' })
        }

        const upiId   = process.env.UPI_ID
        const upiName = process.env.UPI_NAME
        const amount  = Number(appointmentData.amount).toFixed(2)

        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Appointment-' + appointmentId)}&tr=${appointmentId}`

        res.json({ success: true, upiLink, amount, appointmentId })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const verifyUpi = async (req, res) => {
    try {
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (!appointmentData) {
            return res.json({ success: false, message: 'Appointment not found' })
        }
        if (appointmentData.cancelled) {
            return res.json({ success: false, message: 'Appointment is cancelled' })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true })
        res.json({ success: true, message: 'Payment marked as received. Thank you!' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export {
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
}