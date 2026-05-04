import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const Contact = () => {
  const navigate = useNavigate()
  const { backendUrl } = useContext(AppContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await axios.post(backendUrl + '/api/user/contact', formData)
      if (data.success) {
        setSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 3000)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        .cr { font-family: 'Plus Jakarta Sans', sans-serif; background: #f7f5f0; min-height: 100vh; overflow-x: hidden; }

        /* ── HERO ── */
        .cr-hero {
          background: #060912;
          padding: 10px 0 5px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cr-hero::before {
          content: '';
          position: absolute;
          top: -10px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .cr-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .cr-hero-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #f7f5f0);
          pointer-events: none;
          z-index: 2;
        }

        .cr-hero-inner { position: relative; z-index: 3; max-width: 1240px; margin: 0 auto; padding: 0 24px; }

        .cr-hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 24px;
        }

        .cr-hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #3B82F6; box-shadow: 0 0 8px #3B82F6;
          animation: cr-pulse 2s infinite;
        }

        @keyframes cr-pulse {
          0%,100% { opacity:1; box-shadow:0 0 8px #3B82F6; }
          50%      { opacity:.4; box-shadow:0 0 3px #3B82F6; }
        }

        .cr-hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5.5vw, 64px);
          font-weight: 400;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 18px;
          position: relative; z-index: 1;
        }

        .cr-hero h1 em {
          font-style: italic;
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cr-hero p {
          font-size: 15px; font-weight: 300;
          color: rgba(255,255,255,0.5);
          max-width: 500px; margin: 0 auto;
          line-height: 1.85; position: relative; z-index: 1;
        }

        /* ── TOPLINE ── */
        .cr-topline {
          width: 100%; height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.5) 30%,
            rgba(99,102,241,0.9) 50%,
            rgba(6,182,212,0.5) 70%,
            transparent
          );
          box-shadow: 0 0 18px rgba(99,102,241,0.3);
        }

        /* ── BODY ── */
        .cr-body { padding: 24px 0 30px; }
        .cr-wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

        .cr-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 36px;
          align-items: start;
        }

        /* ── LEFT PANEL ── */
        .cr-left { display: flex; flex-direction: column; gap: 18px; }

        .cr-img-wrap {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 24px 64px rgba(15,23,42,0.14);
        }

        .cr-img-wrap img { width: 100%; display: block; object-fit: cover; }

        .cr-img-badge {
          position: absolute; bottom: 14px; left: 14px;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 11px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .cr-img-badge-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99,102,241,0.35);
        }

        .cr-img-badge-label { font-size: 10px; color: #94A3B8; margin-bottom: 2px; font-weight: 500; }
        .cr-img-badge-val   { font-size: 13px; font-weight: 700; color: #0F172A; }

        /* INFO CARDS GRID */
        .cr-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .cr-info-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 18px;
          transition: all 0.25s ease;
        }

        .cr-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.1);
          border-color: rgba(99,102,241,0.25);
        }

        .cr-info-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1));
          display: flex; align-items: center; justify-content: center;
          color: #3B82F6; margin-bottom: 12px;
        }

        .cr-info-label {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase;
          color: #c4b5fd; margin-bottom: 5px;
        }

        .cr-info-val { font-size: 13px; color: #1E293B; font-weight: 500; line-height: 1.6; }

        /* CAREERS STRIP */
        .cr-careers {
          background: #060912;
          border-radius: 20px;
          padding: 24px 28px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          position: relative; overflow: hidden;
          border: 1px solid rgba(59,130,246,0.15);
        }

        .cr-careers::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cr-careers-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 5px; position: relative; z-index: 1; }
        .cr-careers-sub   { font-size: 11.5px; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.65; position: relative; z-index: 1; }

        .cr-careers-btn {
          flex-shrink: 0;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          color: #fff; border: none; border-radius: 100px;
          padding: 10px 20px;
          font-size: 12px; font-weight: 600;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer; transition: all 0.25s; white-space: nowrap;
          box-shadow: 0 6px 18px rgba(99,102,241,0.35);
          position: relative; z-index: 1;
        }

        .cr-careers-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(99,102,241,0.5); }

        /* ── FORM CARD ── */
        .cr-form-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 28px;
          padding: 48px;
          box-shadow: 0 24px 64px rgba(15,23,42,0.07);
          position: relative;
          overflow: hidden;
        }

        .cr-form-card::before {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 220px; height: 220px;
          background: radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .cr-form-heading {
          font-family: 'DM Serif Display', serif;
          font-size: 30px; font-weight: 400;
          color: #0F172A; letter-spacing: -0.5px;
          margin-bottom: 6px; line-height: 1.2;
        }

        .cr-form-heading span { font-style: italic; color: #6366F1; }

        .cr-form-sub {
          font-size: 13px; font-weight: 300;
          color: #94A3B8; line-height: 1.75;
          margin-bottom: 36px;
        }

        .cr-form-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent);
          margin-bottom: 32px;
        }

        .cr-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cr-form-group { margin-bottom: 20px; }

        .cr-label {
          display: block;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #374151; margin-bottom: 8px;
        }

        .cr-input-wrap { position: relative; }

        .cr-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #CBD5E1; display: flex; align-items: center;
          pointer-events: none;
        }

        .cr-input-icon.top { top: 16px; transform: none; }

        .cr-input {
          width: 100%;
          background: #F8FAFC;
          border: 1.5px solid #E9EEF5;
          border-radius: 12px;
          padding: 13px 14px 13px 42px;
          font-size: 13.5px; font-weight: 400;
          color: #0F172A;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }

        .cr-input::placeholder { color: #CBD5E1; }

        .cr-input:focus {
          border-color: #6366F1;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        textarea.cr-input {
          resize: none; height: 128px;
          padding-top: 13px; line-height: 1.65;
        }

        /* ── ERROR BANNER ── */
        .cr-error {
          display: flex; align-items: flex-start; gap: 10px;
          background: #FFF1F2;
          border: 1.5px solid #FECDD3;
          border-radius: 12px;
          padding: 13px 16px;
          margin-bottom: 20px;
          animation: cr-error-in 0.3s ease;
        }

        @keyframes cr-error-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cr-error-icon {
          flex-shrink: 0; margin-top: 1px;
          color: #F43F5E;
        }

        .cr-error-txt {
          font-size: 13px; font-weight: 500;
          color: #BE123C; line-height: 1.5;
        }

        .cr-error-close {
          margin-left: auto; flex-shrink: 0;
          background: none; border: none;
          color: #FDA4AF; cursor: pointer;
          padding: 0; line-height: 1;
          font-size: 16px;
          transition: color 0.2s;
        }

        .cr-error-close:hover { color: #F43F5E; }

        /* ── SUBMIT BTN ── */
        .cr-submit {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #fff; border: none; border-radius: 14px;
          padding: 16px;
          font-size: 13.5px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          margin-top: 8px;
        }

        .cr-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(99,102,241,0.45);
        }

        .cr-submit:disabled {
          opacity: 0.7; cursor: not-allowed;
        }

        .cr-submit.sent {
          background: linear-gradient(135deg, #10B981, #059669);
          box-shadow: 0 8px 24px rgba(16,185,129,0.3);
        }

        .cr-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          animation: cr-spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes cr-spin { to { transform: rotate(360deg); } }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cr-grid { grid-template-columns: 1fr; }
          .cr-form-card { padding: 32px; }
        }
        @media (max-width: 640px) {
          .cr-hero { padding: 60px 0 56px; }
          .cr-wrap { padding: 0 16px; }
          .cr-info-grid { grid-template-columns: 1fr; }
          .cr-form-row { grid-template-columns: 1fr; }
          .cr-careers { flex-direction: column; align-items: flex-start; }
          .cr-careers-btn { width: 100%; text-align: center; }
          .cr-form-heading { font-size: 26px; }
        }
      `}</style>

      <div className="cr">

        {/* ── HERO ── */}
        <div className="cr-hero">
          <div className="cr-hero-inner">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div className="cr-hero-badge">
                <span className="cr-hero-badge-dot" />
                We'd love to hear from you
              </div>
            </div>
            <h1>Get in <em>Touch</em></h1>
            <p>Reach out to our team for appointments, support, or partnership inquiries. We're here 24/7.</p>
          </div>
          <div className="cr-hero-fade" />
        </div>

        <div className="cr-topline" />

        {/* ── BODY ── */}
        <div className="cr-body">
          <div className="cr-wrap">
            <div className="cr-grid">

              {/* LEFT */}
              <div className="cr-left">
                <div className="cr-img-wrap">
                  <img src={assets.contact_image} alt="Our office" />
                  <div className="cr-img-badge">
                    <div className="cr-img-badge-icon">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="cr-img-badge-label">Response Time</div>
                      <div className="cr-img-badge-val">Under 2 hours</div>
                    </div>
                  </div>
                </div>

                <div className="cr-info-grid">
                  <div className="cr-info-card">
                    <div className="cr-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="cr-info-label">Office</div>
                    <div className="cr-info-val">54709 Willms Station<br />Suite 350, Washington</div>
                  </div>

                  <div className="cr-info-card">
                    <div className="cr-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="cr-info-label">Phone</div>
                    <div className="cr-info-val">(415) 555-0132</div>
                  </div>

                  <div className="cr-info-card">
                    <div className="cr-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="cr-info-label">Email</div>
                    <div className="cr-info-val">support@medicare.in</div>
                  </div>

                  <div className="cr-info-card">
                    <div className="cr-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="cr-info-label">Hours</div>
                    <div className="cr-info-val">24 / 7<br />Always available</div>
                  </div>
                </div>

                <div className="cr-careers">
                  <div>
                    <div className="cr-careers-title">Careers at MedCare</div>
                    <div className="cr-careers-sub">Join our team — explore open roles across engineering, care, and operations.</div>
                  </div>
                  <button
                    className="cr-careers-btn"
                    onClick={() => window.open("https://medcare-admin-theta.vercel.app/", "_blank")}
                  >
                    Explore Jobs →
                  </button>
                </div>
              </div>

              {/* FORM */}
              <div className="cr-form-card">
                <div className="cr-form-heading">Send us a <span>Message</span></div>
                <p className="cr-form-sub">Fill out the form below and our team will get back to you within 2 hours.</p>
                <div className="cr-form-divider" />

                {/* ✅ ERROR BANNER */}
                {error && (
                  <div className="cr-error">
                    <span className="cr-error-icon">
                      <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    </span>
                    <span className="cr-error-txt">{error}</span>
                    <button className="cr-error-close" onClick={() => setError('')}>✕</button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="cr-form-row">
                    <div className="cr-form-group">
                      <label className="cr-label">Full Name</label>
                      <div className="cr-input-wrap">
                        <span className="cr-input-icon">
                          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          className="cr-input"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="cr-form-group">
                      <label className="cr-label">Email Address</label>
                      <div className="cr-input-wrap">
                        <span className="cr-input-icon">
                          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          className="cr-input"
                          type="email"
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="cr-form-group">
                    <label className="cr-label">Subject</label>
                    <div className="cr-input-wrap">
                      <span className="cr-input-icon">
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </span>
                      <input
                        className="cr-input"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="cr-form-group">
                    <label className="cr-label">Message</label>
                    <div className="cr-input-wrap">
                      <span className="cr-input-icon top">
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                      <textarea
                        className="cr-input"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={`cr-submit${sent ? ' sent' : ''}`} disabled={loading}>
                    {loading ? (
                      <>
                        <span className="cr-spinner" />
                        Sending...
                      </>
                    ) : sent ? (
                      <>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact