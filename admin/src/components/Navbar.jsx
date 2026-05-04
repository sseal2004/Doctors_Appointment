import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  const goToUserPanel = () => {
    window.location.href = 'https://doctors-appointment-ashy.vercel.app/'
  }

  const isOnDashboard =
    location.pathname === '/admin-dashboard' ||
    location.pathname === '/doctor-dashboard'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .anb {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(6, 9, 18, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59,130,246,0.18);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(99,102,241,0.15);
          width: 100%;
        }

        .anb-topline {
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,0.5) 25%,
            rgba(99,102,241,0.9) 50%,
            rgba(6,182,212,0.5) 75%,
            transparent 100%
          );
        }

        .anb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── Logo ── */
        .anb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
          user-select: none;
        }

        .anb-logo-icon {
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

        .anb-logo:hover .anb-logo-icon {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.7), 0 0 28px rgba(99,102,241,0.5);
          transform: scale(1.05);
        }

        .anb-logo-name {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .anb-logo-name span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .anb-logo-sub {
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #334155;
          text-transform: uppercase;
          display: block;
          margin-top: 2px;
        }

        /* ── Role badge ── */
        .anb-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #60A5FA;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          background: rgba(59,130,246,0.08);
          white-space: nowrap;
        }

        .anb-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 6px #3B82F6;
          flex-shrink: 0;
        }

        /* ── Right section ── */
        .anb-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* ── User Panel button ── */
        .anb-user-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #fff;
          background: rgba(30,41,59,0.6);
          border: 1px solid #1E293B;
          padding: 7px 14px;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .anb-user-btn:hover {
          color: #60A5FA;
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.08);
        }

        /* ── Logout button ── */
        .anb-logout-btn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border: none;
          padding: 8px 22px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.01em;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 4px 14px rgba(99,102,241,0.3);
          white-space: nowrap;
        }

        .anb-logout-btn:hover {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.6), 0 6px 20px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        .anb-logout-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .anb-inner {
            padding: 0 16px;
            height: 58px;
          }
          .anb-logo-sub { display: none; }
          .anb-logo-name { font-size: 16px; }
          .anb-badge { display: none; }
          .anb-user-btn { padding: 7px 10px; font-size: 11.5px; }
          .anb-logout-btn { padding: 8px 14px; font-size: 12px; }
        }
      `}</style>

      <nav className="anb">
        <div className="anb-topline" />

        <div className="anb-inner">

          {/* Logo */}
          <div className="anb-logo" onClick={() => navigate('/')}>
            <div className="anb-logo-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <div className="anb-logo-name">Med<span>Care</span></div>
              <span className="anb-logo-sub">Admin & Doctor Portal</span>
            </div>
          </div>

          {/* Role Badge */}
          <div className="anb-badge">
            <span className="anb-badge-dot" />
            {aToken ? 'Admin Panel' : 'Doctor Portal'}
          </div>

          {/* Right Actions */}
          <div className="anb-right">
            {isOnDashboard && (
              <button className="anb-user-btn" onClick={goToUserPanel}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                User Panel
              </button>
            )}

            <button className="anb-logout-btn" onClick={logout}>
              Logout
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar