import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// ✅ Create Context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const currencySymbol = "₹";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    console.log("🔥 Backend URL:", backendUrl);

    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [userData, setUserData] = useState(null);

    // ===============================
    // 🔹 Get Doctors Data
    // ===============================
    const getDoctorsData = async () => {
        console.log("📡 Calling getDoctorsData API...");

        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);

            console.log("✅ Doctors API Response:", data);

            if (data.success) {
                setDoctors(data.doctors);
            } else {
                console.log("❌ API returned success false");
                toast.error(data.message);
            }

        } catch (error) {
            console.log("❌ Doctors API Error:", error);
            toast.error(error.message);
        }
    };

    // ===============================
    // 🔹 Load User Profile
    // ===============================
    const loadUserProfileData = async () => {
        console.log("📡 Calling loadUserProfileData API...");
        console.log("🔑 Token:", token);

        try {
            const { data } = await axios.get(
                `${backendUrl}/api/user/get-profile`,
                { headers: { token } }
            );

            console.log("✅ User Profile Response:", data);

            if (data.success) {
                setUserData(data.userData);
            } else {
                console.log("❌ Profile API returned false");
                toast.error(data.message);
            }

        } catch (error) {
            console.log("❌ Profile API Error:", error);
            toast.error(error.message);
        }
    };

    // ===============================
    // 🔹 Fetch doctors on load
    // ===============================
    useEffect(() => {
        console.log("⚡ useEffect: backendUrl changed");

        if (backendUrl) {
            getDoctorsData();
        } else {
            console.log("❌ backendUrl is undefined");
        }
    }, [backendUrl]);

    // ===============================
    // 🔹 Load user when token changes
    // ===============================
    useEffect(() => {
        console.log("⚡ useEffect: token changed");

        if (token) {
            loadUserProfileData();
        } else {
            console.log("⚠️ No token found, clearing userData");
            setUserData(null);
        }
    }, [token]);

    // ===============================
    // 🔹 Context Values
    // ===============================
    const value = {
        doctors,
        getDoctorsData,
        currencySymbol,
        backendUrl,
        token,
        setToken,
        userData,
        setUserData,
        loadUserProfileData,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;