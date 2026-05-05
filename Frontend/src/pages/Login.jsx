import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'   // ✅ use existing assets

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext)
  const [state, setState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'Sora', sans-serif;
          background: #F8F7F4;
        }

        /* ── LEFT PANEL ── */
        .login-left {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 64px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
          content: '';
          position: absolute;
          top: -120px; left: -120px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .login-left::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Logo */
        .login-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .login-logo-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .login-logo-icon svg { color: white; }
        .login-logo-text {
          font-size: 20px; font-weight: 700;
          color: #111827; letter-spacing: -0.5px;
        }
        .login-logo-text span { color: #3B82F6; }
        .login-logo-sub {
          font-size: 10px; font-weight: 500;
          letter-spacing: 2px; color: #9CA3AF;
          text-transform: uppercase; display: block; margin-top: 1px;
        }

        /* Badge */
        .login-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #E5E7EB;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 600;
          color: #6B7280;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
          background: #F9FAFB;
        }
        .login-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3B82F6; flex-shrink: 0;
        }

        /* Headline */
        .login-headline {
          font-size: 42px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1.5px;
          color: #111827;
          margin-bottom: 8px;
        }
        .login-headline-accent { color: #3B82F6; }
        .login-sub {
          font-size: 14px; font-weight: 300;
          color: #6B7280; line-height: 1.6;
          margin-bottom: 36px;
        }

        /* Form card */
        .login-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          position: relative; z-index: 1;
        }

        .field-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #374151; margin-bottom: 8px; display: block;
        }

        .field-wrap { position: relative; margin-bottom: 20px; }

        .field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: #9CA3AF; pointer-events: none;
          display: flex; align-items: center;
        }

        .login-input {
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
        .login-input::placeholder { color: #9CA3AF; }
        .login-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }

        .pass-toggle {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #9CA3AF; display: flex; align-items: center;
          padding: 0; transition: color 0.2s;
        }
        .pass-toggle:hover { color: #6B7280; }

        /* Submit btn */
        .login-btn {
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
        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.4);
        }
        .login-btn:active { transform: translateY(0); }

        .login-footer-text {
          text-align: center;
          margin-top: 20px;
          font-size: 13px; color: #9CA3AF;
        }
        .login-footer-text span {
          color: #3B82F6; font-weight: 600;
          cursor: pointer; text-decoration: underline;
          text-underline-offset: 2px;
        }
        .login-footer-text span:hover { color: #2563EB; }

        /* ── RIGHT PANEL ── */
        .login-right {
          flex: 0 0 50%;
          position: relative;
          overflow: hidden;
          display: flex;
          background: #0f172a;
        }
        .login-right img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }
        .login-right-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.15) 0%,
            rgba(99,102,241,0.1) 100%
          );
        }

        /* right content overlay */
        .login-right-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 48px;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%);
        }
        .right-headline {
          font-size: 40px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1px;
          color: #fff; margin-bottom: 12px;
        }
        .right-headline em { font-style: normal; color: #60A5FA; }
        .right-sub {
          font-size: 14px; color: rgba(255,255,255,0.65);
          font-weight: 300; line-height: 1.7;
          margin-bottom: 28px; max-width: 340px;
        }

        .right-features { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
        .right-feat { display: flex; align-items: flex-start; gap: 12px; }
        .feat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(59,130,246,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .feat-title { font-size: 13px; font-weight: 600; color: #fff; }
        .feat-desc { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 1px; }

        .right-stats { display: flex; gap: 32px; }
        .rstat-num { font-size: 28px; font-weight: 800; color: #60A5FA; letter-spacing: -1px; }
        .rstat-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; color: rgba(255,255,255,0.45);
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .login-left {
            flex: 1 1 100%;
            padding: 40px 28px;
            min-height: 100vh;
          }
          .login-right { display: none; }
          .login-headline { font-size: 32px; }
        }
      `}</style>

      <div className="login-root">

        {/* ── LEFT ── */}
        <div className="login-left">

          {/* Logo */}
          <div className="login-logo">
            <div className="login-logo-icon">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <div className="login-logo-text">Med<span>Care</span></div>
              <span className="login-logo-sub">Smart Health Platform</span>
            </div>
          </div>

          {/* Badge */}
          <div className="login-badge">
            <span className="login-badge-dot"></span>
            {state === 'Login' ? 'Secure Patient Portal' : 'Create Your Account'}
          </div>

          {/* Headline */}
          <h1 className="login-headline">
            {state === 'Login' ? (
              <>Welcome<br /><span className="login-headline-accent">Back.</span></>
            ) : (
              <>Join<br /><span className="login-headline-accent">MedCare.</span></>
            )}
          </h1>
          <p className="login-sub">
            {state === 'Login'
              ? 'Sign in to book appointments, track your health records, and connect with trusted doctors.'
              : 'Create your account to access 100+ verified specialists and book hassle-free appointments.'}
          </p>

          {/* Form */}
          <form onSubmit={onSubmitHandler}>
            <div className="login-card">

              {state === 'Sign Up' && (
                <div className="field-wrap">
                  <label className="field-label">Full Name</label>
                  <div style={{ position: 'relative' }}>
                    <span className="field-icon">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input
                      className="login-input"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="field-wrap">
                <label className="field-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <span className="field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    className="login-input"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field-wrap" style={{ marginBottom: 0 }}>
                <label className="field-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <span className="field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    className="login-input"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="pass-toggle" onClick={() => setShowPass(p => !p)}>
                    {showPass ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="login-btn">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {state === 'Sign Up' ? 'Create Account' : 'Sign In to Dashboard'}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="login-footer-text">
                {state === 'Sign Up'
                  ? <><span>Already have an account? </span><span onClick={() => setState('Login')}>Sign in →</span></>
                  : <><span>Don't have an account? </span><span onClick={() => setState('Sign Up')}>Create one →</span></>
                }
              </p>
            </div>
          </form>
        </div>

        {/* ── RIGHT — uses assets.header_img (already in your assets) ── */}
        <div className="login-right">
          <img src={assets.header_img} alt="MedCare platform" />
          
        </div>

      </div>
    </>
  )
}

export default Login