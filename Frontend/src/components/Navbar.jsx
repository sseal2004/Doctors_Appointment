import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "All Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, setToken, userData } = useContext(AppContext);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setDropdownOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .nb {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(6, 9, 18, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59,130,246,0.12);
          transition: all 0.3s ease;
          width: 100%;
        }

        .nb.scrolled {
          background: rgba(6, 9, 18, 0.97);
          border-bottom-color: rgba(99,102,241,0.25);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(99,102,241,0.15);
        }

        .nb-topline {
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,0.5) 25%,
            rgba(99,102,241,0.9) 50%,
            rgba(6,182,212,0.5) 75%,
            transparent 100%
          );
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
        }

        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
          user-select: none;
          min-width: 0;
        }

        .nb-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 0 18px rgba(99,102,241,0.3);
          transition: box-shadow 0.3s, transform 0.2s;
          flex-shrink: 0;
        }

        .nb-logo:hover .nb-logo-icon {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.7), 0 0 28px rgba(99,102,241,0.5);
          transform: scale(1.05);
        }

        .nb-logo-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .nb-logo-name {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .nb-logo-name span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nb-logo-sub {
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #334155;
          text-transform: uppercase;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }

        .nb-link {
          position: relative;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          color: #ffff;
          padding: 7px 14px;
          border-radius: 9px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .nb-link:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
        }

        .nb-link.active {
          color: #60A5FA;
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.25);
        }

        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, #3B82F6, #6366F1);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(99,102,241,0.6);
        }

        .nb-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .nb-admin-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #ffff;
          background: rgba(30,41,59,0.6);
          border: 1px solid #1E293B;
          padding: 7px 14px;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .nb-admin-btn:hover {
          color: #60A5FA;
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.08);
        }

        .nb-cta {
          display: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border: none;
          padding: 8px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.01em;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 4px 14px rgba(99,102,241,0.3);
        }

        @media (min-width: 768px) {
          .nb-cta { display: flex; align-items: center; }
        }

        .nb-cta:hover {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.6), 0 6px 20px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        .nb-cta:active { transform: translateY(0); }

        .nb-avatar-wrap {
          position: relative;
          cursor: pointer;
        }

        .nb-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(99,102,241,0.4);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.2), 0 0 14px rgba(99,102,241,0.2);
          transition: all 0.2s;
        }

        .nb-avatar:hover {
          border-color: rgba(99,102,241,0.7);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.5), 0 0 20px rgba(99,102,241,0.35);
        }

        .nb-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 200px;
          background: #0d1117;
          border: 1px solid #1E293B;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1);
          animation: nb-dropdown-in 0.18s ease both;
        }

        @keyframes nb-dropdown-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .nb-dropdown-header {
          padding: 12px 14px;
          border-bottom: 1px solid #1E293B;
          background: rgba(30,41,59,0.4);
        }

        .nb-dropdown-name {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 2px;
        }

        .nb-dropdown-email {
          font-size: 11px;
          color: #475569;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nb-dropdown-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #ffff;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.18s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nb-dropdown-btn::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1E293B;
          flex-shrink: 0;
          transition: all 0.18s;
        }

        .nb-dropdown-btn:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
        }

        .nb-dropdown-btn:hover::before {
          background: #3B82F6;
          box-shadow: 0 0 6px #3B82F6;
        }

        .nb-dropdown-btn.logout {
          color: #fff;
          border-top: 1px solid #1E293B;
        }

        .nb-dropdown-btn.logout:hover {
          color: #F87171;
          background: rgba(239,68,68,0.07);
        }

        .nb-dropdown-btn.logout:hover::before {
          background: #EF4444;
          box-shadow: 0 0 6px #EF4444;
        }

        .nb-hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.8);
          transition: all 0.2s;
        }

        @media (min-width: 768px) { .nb-hamburger { display: none; } }

        .nb-hamburger:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.07);
        }

        .nb-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #475569;
          border-radius: 2px;
          transition: all 0.25s;
        }

        .nb-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); background: #60A5FA; }
        .nb-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); background: #60A5FA; }

        .nb-mobile {
          display: block;
          background: rgba(6,9,18,0.98);
          border-top: 1px solid rgba(59,130,246,0.12);
          padding: 12px 20px 16px;
          animation: nb-mobile-in 0.22s ease both;
        }

        @media (min-width: 768px) { .nb-mobile { display: none; } }

        @keyframes nb-mobile-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          padding: 10px 12px;
          border-radius: 9px;
          border: 1px solid transparent;
          transition: all 0.18s;
          margin-bottom: 2px;
        }

        .nb-mobile-link::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1E293B;
          flex-shrink: 0;
          transition: background 0.18s;
        }

        .nb-mobile-link:hover, .nb-mobile-link.active {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
        }

        .nb-mobile-link:hover::before, .nb-mobile-link.active::before {
          background: #3B82F6;
        }

        .nb-mobile-cta {
          width: 100%;
          margin-top: 10px;
          padding: 11px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border: none;
          border-radius: 11px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          letter-spacing: 0.01em;
        }

        @media (max-width: 767px) {
          .nb-inner {
            padding: 0 16px;
            height: 60px;
            gap: 12px;
          }

          .nb-links {
            display: none;
          }

          .nb-logo-name {
            font-size: 16px;
          }

          .nb-logo-sub {
            display: none;
          }

          .nb-right {
            gap: 8px;
          }

          .nb-admin-btn {
            display: flex !important;
            padding: 7px 10px;
            font-size: 11.5px;
          }

          .nb-cta {
            display: none !important;
          }

          .nb-avatar {
            width: 32px;
            height: 32px;
          }

          .nb-dropdown {
            width: 180px;
            right: -10px;
          }
        }
      `}</style>

      <nav className={`nb${scrolled ? ' scrolled' : ''}`}>
        <div className="nb-topline" />

        <div className="nb-inner">
          <div className="nb-logo" onClick={() => navigate("/")}>
            <div className="nb-logo-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="nb-logo-text">
              <div className="nb-logo-name">Med<span>Care</span></div>
              <span className="nb-logo-sub">Smart Health Platform</span>
            </div>
          </div>

          <ul className="nb-links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nb-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nb-right">
            {location.pathname === "/" && (
              <button
                className="nb-admin-btn"
                onClick={() => window.open("https://medcare-admin-theta.vercel.app/", "_blank")}
              >
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Admin
              </button>
            )}

            {token && userData ? (
              <div className="nb-avatar-wrap" ref={dropdownRef}>
                <img
                  src={userData.image}
                  className="nb-avatar"
                  alt="profile"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="nb-dropdown">
                    <div className="nb-dropdown-header">
                      <div className="nb-dropdown-name">{userData.name || "User"}</div>
                      <div className="nb-dropdown-email">{userData.email}</div>
                    </div>
                    <button className="nb-dropdown-btn" onClick={() => { navigate("/my-profile"); setDropdownOpen(false); }}>
                      My Profile
                    </button>
                    <button className="nb-dropdown-btn" onClick={() => { navigate("/my-appointments"); setDropdownOpen(false); }}>
                      My Appointments
                    </button>
                    <button className="nb-dropdown-btn logout" onClick={logout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="nb-cta" onClick={() => navigate("/login")}>
                Create Account
              </button>
            )}

            <button
              className={`nb-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="nb-mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nb-mobile-link${isActive ? ' active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {!token && (
              <button
                className="nb-mobile-cta"
                onClick={() => { navigate("/login"); setMobileOpen(false); }}
              >
                Create Account
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar