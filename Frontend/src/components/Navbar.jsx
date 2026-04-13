import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { assets } from "../../assets/assets";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "All Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const ThemeIcon = ({ isDark }) => (
  <div className="relative w-5 h-5 overflow-hidden">
    <span
      className={`absolute inset-0 flex items-center justify-center text-base transition-all duration-500
        ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
    >
      ☀️
    </span>
    <span
      className={`absolute inset-0 flex items-center justify-center text-base transition-all duration-500
        ${!isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
    >
      🌙
    </span>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const { isDark, toggle } = useTheme();
  const [token, setToken] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-400
          ${isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}
          border-b
          ${scrolled ? "shadow-lg shadow-primary/20" : "shadow-none"}`}
      >
        {/* Top gradient line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
            >
              <img
                className="w-36 transition-transform duration-300 group-hover:scale-105"
                src={assets.logo}
                alt="Prescripto"
              />
            </div>

            {/* NAV LINKS - Desktop only */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to}>
                    {({ isActive }) => (
                      <span
                        className={`relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                          ${isActive
                            ? "text-primary bg-primary/10"
                            : isDark
                              ? "text-gray-400 hover:text-primary hover:bg-primary/10"
                              : "text-gray-500 hover:text-primary hover:bg-primary/10"
                          }`}
                      >
                        {label}
                        <span
                          className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary transition-all duration-300
                            ${isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"}`}
                        />
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">

              {/* THEME TOGGLE */}
              <button
                onClick={toggle}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                  ${isDark
                    ? "bg-gray-900 border-gray-700 hover:border-primary"
                    : "bg-gray-50 border-gray-200 hover:border-primary"
                  }`}
              >
                <ThemeIcon isDark={isDark} />
              </button>

              {/* USER DROPDOWN */}
              {token ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-2 px-2 py-1 rounded-full border transition-all duration-200
                      ${isDark
                        ? "bg-gray-900 border-gray-700 hover:border-primary"
                        : "bg-white border-gray-200 hover:border-primary"
                      }`}
                  >
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={assets.profile_pic}
                      alt="profile"
                    />
                    <span className={`hidden sm:block text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                      John
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""} ${isDark ? "text-gray-400" : "text-gray-500"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div
                      className={`absolute right-0 mt-2 w-52 rounded-xl shadow-xl overflow-hidden
                        ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"}
                      `}
                    >
                      <div className={`px-4 py-3 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Signed in as</p>
                        <p className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-gray-800"}`}>John Doe</p>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => { navigate("/my-profile"); setDropdownOpen(false); }}
                          className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors
                            ${isDark ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-gray-700 hover:bg-gray-50 hover:text-primary"}`}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          My Profile
                        </button>

                        <button
                          onClick={() => { navigate("/my-appointment"); setDropdownOpen(false); }}
                          className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors
                            ${isDark ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-gray-700 hover:bg-gray-50 hover:text-primary"}`}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          My Appointments
                        </button>
                      </div>

                      <div className={`border-t ${isDark ? "border-gray-800" : "border-gray-100"} py-1`}>
                        <button
                          onClick={() => { setToken(false); setDropdownOpen(false); }}
                          className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Create Account
                </button>
              )}

              {/* MOBILE HAMBURGER */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border transition-colors
                  ${isDark ? "border-gray-700 hover:border-primary" : "border-gray-200 hover:border-primary"}`}
              >
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-600"}
                  ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-600"}
                  ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isDark ? "bg-gray-300" : "bg-gray-600"}
                  ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU - only visible on small screens */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
            ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            ${isDark ? "bg-gray-950 border-t border-gray-800" : "bg-white border-t border-gray-100"}`}
        >
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
              >
                {({ isActive }) => (
                  <span className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? "text-primary bg-primary/10"
                      : isDark
                        ? "text-gray-400 hover:text-primary hover:bg-primary/10"
                        : "text-gray-600 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {label}
                  </span>
                )}
              </NavLink>
            ))}

            {!token && (
              <button
                onClick={() => { navigate("/login"); setMobileOpen(false); }}
                className="w-full mt-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;