import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import loginHeroImage from '../assets/loginHeroImage.png'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [errorKey, setErrorKey] = useState(0)

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setErrorMsg('')
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
        } else {
          setErrorMsg(data.message)
          setErrorKey(k => k + 1)
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
        } else {
          setErrorMsg(data.message)
          setErrorKey(k => k + 1)
          toast.error(data.message)
        }
      }
    } catch (err) {
      const msg = err?.response?.data?.message || 'Something went wrong. Please try again.'
      setErrorMsg(msg)
      setErrorKey(k => k + 1)
      toast.error(msg)
    }
  }

  const isAdmin = state === 'Admin'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .al-root {
          min-height: 100vh;
          display: flex;
          font-family: 'Sora', sans-serif;
          background: #F8F7F4;
        }

        /* ── LEFT PANEL ── */
        .al-left {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 64px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .al-left::before {
          content: '';
          position: absolute;
          top: -120px; left: -120px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .al-left::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Return Back Link */
        .al-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #6B7280;
          text-decoration: none;
          margin-bottom: 32px;
          width: fit-content;
          position: relative;
          z-index: 1;
          transition: color 0.2s ease, gap 0.2s ease;
          font-family: 'Sora', sans-serif;
        }
        .al-back-link:hover {
          color: #3B82F6;
          gap: 10px;
        }

        /* Logo */
        .al-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .al-logo-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .al-logo-icon svg { color: white; }
        .al-logo-text {
          font-size: 20px; font-weight: 700;
          color: #111827; letter-spacing: -0.5px;
        }
        .al-logo-text span { color: #3B82F6; }
        .al-logo-sub {
          font-size: 10px; font-weight: 500;
          letter-spacing: 2px; color: #9CA3AF;
          text-transform: uppercase; display: block; margin-top: 1px;
        }

        /* Badge */
        .al-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #E5E7EB;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px; font-weight: 600;
          color: #6B7280; letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
          background: #F9FAFB;
        }
        .al-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3B82F6; flex-shrink: 0;
        }

        /* Headline */
        .al-headline {
          font-size: 42px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1.5px;
          color: #111827; margin-bottom: 8px;
        }
        .al-headline-accent { color: #3B82F6; }
        .al-sub {
          font-size: 14px; font-weight: 300;
          color: #6B7280; line-height: 1.6;
          margin-bottom: 36px;
        }

        /* Form card */
        .al-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          position: relative; z-index: 1;
        }

        /* Role tabs */
        .al-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }
        .al-tab {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #E5E7EB;
          background: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          color: #9CA3AF;
          cursor: pointer;
          transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .al-tab:hover { color: #6B7280; border-color: #D1D5DB; }
        .al-tab-active {
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }

        .al-field-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #374151; margin-bottom: 8px; display: block;
        }
        .al-field-wrap {
          position: relative; margin-bottom: 20px;
        }
        .al-field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: #9CA3AF; pointer-events: none;
          display: flex; align-items: center;
        }
        .al-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 13px 14px 13px 42px;
          font-size: 14px; font-weight: 400;
          color: #111827;
          font-family: 'Sora', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .al-input::placeholder { color: #9CA3AF; }
        .al-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }

        /* Error message */
        @keyframes al-error-in {
          0%   { opacity: 0; transform: translateY(-6px) scale(0.98); }
          60%  { transform: translateY(2px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes al-shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-5px); }
          40%       { transform: translateX(5px); }
          60%       { transform: translateX(-4px); }
          80%       { transform: translateX(4px); }
        }
        .al-error {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-left: 3px solid #EF4444;
          border-radius: 10px;
          padding: 11px 14px;
          margin-top: 14px;
          font-size: 13px;
          font-weight: 500;
          color: #DC2626;
          font-family: 'Sora', sans-serif;
          line-height: 1.5;
          animation: al-error-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both,
                     al-shake 0.4s ease 0.1s both;
          transition: opacity 0.2s ease;
        }
        .al-error-icon {
          flex-shrink: 0;
          width: 16px; height: 16px;
          color: #EF4444;
        }

        /* Submit btn */
        .al-btn {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #ffffff;
          border: none; border-radius: 12px;
          padding: 15px;
          font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          margin-top: 8px;
        }
        .al-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.4);
        }
        .al-btn:active { transform: translateY(0); }

        .al-footer-text {
          text-align: center;
          margin-top: 20px;
          font-size: 13px; color: #9CA3AF;
        }
        .al-footer-text span {
          color: #3B82F6; font-weight: 600;
          cursor: pointer; text-decoration: underline;
          text-underline-offset: 2px;
        }
        .al-footer-text span:hover { color: #2563EB; }

        /* ── RIGHT PANEL ── */
        .al-right {
          flex: 0 0 50%;
          position: relative;
          overflow: hidden;
        }

        .al-right-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .al-right-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 15, 40, 0.88) 0%,
            rgba(10, 15, 40, 0.50) 50%,
            rgba(10, 15, 40, 0.10) 100%
          );
        }

        .al-right-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .al-right-headline {
          font-size: 38px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1px;
          color: #fff; margin-bottom: 12px;
        }
        .al-right-headline em { font-style: normal; color: #60A5FA; }
        .al-right-sub {
          font-size: 14px; color: rgba(255,255,255,0.65);
          font-weight: 300; line-height: 1.7;
          margin-bottom: 36px; max-width: 340px;
        }

        .al-features {
          display: flex; flex-direction: column; gap: 16px;
          margin-bottom: 40px;
        }
        .al-feat {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .al-feat-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(59,130,246,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .al-feat-icon svg { color: #93C5FD; }
        .al-feat-title { font-size: 13px; font-weight: 600; color: #fff; }
        .al-feat-desc { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }

        .al-stats {
          display: flex; gap: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .al-stat-num {
          font-size: 26px; font-weight: 800;
          color: #60A5FA; letter-spacing: -1px;
        }
        .al-stat-lbl {
          font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .al-left {
            flex: 1 1 100%;
            padding: 40px 28px;
            min-height: 100vh;
          }
          .al-right { display: none; }
          .al-headline { font-size: 32px; }
        }
      `}</style>

      <div className="al-root">

        {/* ── LEFT ── */}
        <div className="al-left">

          {/* Return Back Button */}
          <NavLink to="https://doctors-appointment-ashy.vercel.app/" className="al-back-link">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return Back
          </NavLink>

          <div className="al-logo">
            <div className="al-logo-icon">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <div className="al-logo-text">Med<span>Care</span></div>
              <span className="al-logo-sub">Admin & Doctor Portal</span>
            </div>
          </div>

          <div className="al-badge">
            <span className="al-badge-dot"></span>
            {isAdmin ? 'Admin Control Panel' : 'Doctor Portal'}
          </div>

          <h1 className="al-headline">
            {isAdmin ? (
              <><span className="al-headline-accent">Admin</span><br />Dashboard.</>
            ) : (
              <><span className="al-headline-accent">Doctor</span><br />Portal.</>
            )}
          </h1>
          <p className="al-sub">
            {isAdmin
              ? 'Manage appointments, doctors, and patient records from your secure admin panel.'
              : 'Access your schedule, patient records, and manage appointments seamlessly.'}
          </p>

          <form onSubmit={onSubmitHandler}>
            <div className="al-card">

              <div className="al-tabs">
                <button
                  type="button"
                  className={`al-tab ${state === 'Admin' ? 'al-tab-active' : ''}`}
                  onClick={() => { setState('Admin'); setErrorMsg(''); setErrorKey(0) }}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Admin
                </button>
                <button
                  type="button"
                  className={`al-tab ${state === 'Doctor' ? 'al-tab-active' : ''}`}
                  onClick={() => { setState('Doctor'); setErrorMsg(''); setErrorKey(0) }}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Doctor
                </button>
              </div>

              <div className="al-field-wrap">
                <label className="al-field-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <span className="al-field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    className="al-input"
                    type="email"
                    placeholder="admin@medcare.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrorMsg('') }}
                    required
                  />
                </div>
              </div>

              <div className="al-field-wrap" style={{ marginBottom: 0 }}>
                <label className="al-field-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <span className="al-field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    className="al-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setErrorMsg('') }}
                    required
                  />
                </div>
              </div>

              {/* Animated Error Message — works for both Admin & Doctor */}
              {errorMsg && (
                <p className="al-error" key={errorKey}>
                  <svg className="al-error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  {errorMsg}
                </p>
              )}

              <button type="submit" className="al-btn">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {isAdmin ? 'Access Admin Panel' : 'Sign In as Doctor'}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="al-footer-text">
                {isAdmin
                  ? <>Doctor access?{' '}<span onClick={() => setState('Doctor')}>Doctor login →</span></>
                  : <>Admin access?{' '}<span onClick={() => setState('Admin')}>Admin login →</span></>
                }
              </p>
            </div>
          </form>
        </div>

        {/* ── RIGHT — image panel ── */}
        <div className="al-right">
          <img
            className="al-right-img"
            src={loginHeroImage}
            alt="Medical professional"
          />
        </div>

      </div>
    </>
  )
}

export default Login