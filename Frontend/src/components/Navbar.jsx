import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { assets } from "../../assets/assets";
import { AppContext } from "../context/AppContext";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "All Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const ThemeIcon = ({ isDark }) => (
  <div className="relative w-5 h-5">
    <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDark ? "opacity-100" : "opacity-0"}`}>
      ☀️
    </span>
    <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${!isDark ? "opacity-100" : "opacity-0"}`}>
      🌙
    </span>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const { token, setToken, userData } = useContext(AppContext);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  // 🔹 Logout (REAL)
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setDropdownOpen(false);
    navigate("/login");
  };

  // 🔹 Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close dropdown outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 
      ${isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"} 
      border-b ${scrolled ? "shadow-lg" : ""}`}>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* LOGO */}
        <img
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="w-32 cursor-pointer"
        />

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {({ isActive }) => (
                <span className={`px-3 py-2 rounded-md text-sm font-medium transition
                  ${isActive ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"}`}>
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* ADMIN BUTTON (ONLY HOME) */}
          {location.pathname === "/" && (
            <button
              onClick={() => window.open("http://localhost:5174/", "_blank")}
              className="hidden md:block bg-primary text-white px-4 py-2 rounded-full text-sm"
            >
              Admin Panel
            </button>
          )}

          {/* THEME
          <button
            onClick={toggle}
            className="w-10 h-10 flex items-center justify-center border rounded-full"
          >
            <ThemeIcon isDark={isDark} />
          </button> */}

          {/* USER */}
          {token && userData ? (
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={userData.image || assets.profile_pic}
                  className="w-8 h-8 rounded-full object-cover"
                  alt=""
                />
              </div>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">

                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-800">
                      {userData.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {userData.email}
                    </p>
                  </div>

                  <button
                    onClick={() => { navigate("/my-profile"); setDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => { navigate("/my-appointments"); setDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Appointments
                  </button>

                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm"
            >
              Create Account
            </button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            <img src={assets.menu_icon} className="w-6" alt="" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-700"
            >
              {link.label}
            </NavLink>
          ))}

          {!token && (
            <button
              onClick={() => { navigate("/login"); setMobileOpen(false); }}
              className="w-full mt-2 bg-primary text-white py-2 rounded"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;