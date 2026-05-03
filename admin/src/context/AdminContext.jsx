import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [appointments, setAppointments] = useState([])
    const [doctors, setDoctors] = useState([])
    const [dashData, setDashData] = useState(false)
    const [contacts, setContacts] = useState([])


    const getAllDoctors = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/all-doctors', { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })
            if (data.success) {
                setAppointments(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // ── Fetch all contact form submissions from backend ──
    const getAllContacts = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/contacts', { headers: { aToken } })
            if (data.success) {
                setContacts(data.contacts.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // ── Mark a contact message as read ──
    const markContactRead = async (contactId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/contact-read',
                { contactId },
                { headers: { aToken } }
            )
            if (data.success) {
                // update locally so UI reflects immediately without a full refetch
                setContacts(prev =>
                    prev.map(c => c._id === contactId ? { ...c, read: true } : c)
                )
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // ── Delete a contact message ──
    const deleteContact = async (contactId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/contact-delete',
                { contactId },
                { headers: { aToken } }
            )
            if (data.success) {
                toast.success(data.message)
                setContacts(prev => prev.filter(c => c._id !== contactId))
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl,
        doctors, getAllDoctors, changeAvailability,
        appointments, setAppointments, getAllAppointments, cancelAppointment,
        getDashData, dashData,
        contacts, getAllContacts, markContactRead, deleteContact,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider