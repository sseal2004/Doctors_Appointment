import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body {
          overflow-x: hidden;
        }

        .contact-root {
          font-family: 'Sora', sans-serif;
          background: #F8F9FF;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .contact-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .contact-hero {
          width: 100%;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 72px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .contact-hero-eye {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 20px;
        }

        .contact-hero-eye-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 8px #3B82F6;
          animation: dot-pulse 2s infinite;
        }

        @keyframes dot-pulse {
          0%,100% { opacity:1; box-shadow: 0 0 8px #3B82F6; }
          50% { opacity:0.4; box-shadow: 0 0 3px #3B82F6; }
        }

        .contact-hero h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .contact-hero h1 em {
          font-style: normal;
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-hero p {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.68);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.8;
          position: relative;
          z-index: 1;
        }

        /* BODY */
        .contact-body {
          width: 100%;
          padding: 64px 0 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        .contact-image-wrap {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 80px rgba(15,23,42,0.15);
        }

        .contact-image-wrap img {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .contact-image-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .contact-image-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-image-badge-label {
          font-size: 10px;
          color: #94A3B8;
          margin-bottom: 1px;
        }

        .contact-image-badge-val {
          font-size: 13px;
          font-weight: 700;
          color: #0F172A;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .contact-info-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 20px;
          transition: all 0.25s;
        }

        .contact-info-card:hover {
          box-shadow: 0 12px 32px rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.3);
          transform: translateY(-2px);
        }

        .contact-info-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3B82F6;
          margin-bottom: 12px;
        }

        .contact-info-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 6px;
        }

        .contact-info-val {
          font-size: 13px;
          color: #1E293B;
          font-weight: 500;
          line-height: 1.6;
        }

        .contact-careers {
          background: linear-gradient(135deg, #0F172A, #1E3A5F);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .contact-careers-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .contact-careers-sub {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        .contact-careers-btn {
          flex-shrink: 0;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 11px 22px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          transition: all 0.25s;
          white-space: nowrap;
          letter-spacing: 0.3px;
        }

        .contact-careers-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99,102,241,0.4);
        }

        .contact-form-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 28px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(15,23,42,0.06);
          min-width: 0;
        }

        .contact-form-title {
          font-size: 26px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }

        .contact-form-title span {
          color: #3B82F6;
        }

        .contact-form-sub {
          font-size: 13px;
          font-weight: 300;
          color: #94A3B8;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-input-wrap {
          position: relative;
        }

        .form-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #CBD5E1;
          display: flex;
          align-items: center;
          pointer-events: none;
        }

        .form-input-icon.top {
          top: 18px;
          transform: none;
        }

        .form-input {
          width: 100%;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          padding: 13px 14px 13px 42px;
          font-size: 14px;
          font-weight: 400;
          color: #0F172A;
          font-family: 'Sora', sans-serif;
          outline: none;
          transition: all 0.2s;
        }

        .form-input::placeholder {
          color: #CBD5E1;
        }

        .form-input:focus {
          border-color: #3B82F6;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        textarea.form-input {
          resize: none;
          height: 120px;
          padding-top: 13px;
          line-height: 1.6;
        }

        .form-submit {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 16px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          margin-top: 8px;
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.45);
        }

        .form-submit.sent {
          background: linear-gradient(135deg, #10B981, #059669);
        }

        /* MAP SECTION */
        .contact-map-section {
          width: 100%;
          padding: 0 0 80px;
        }

        .map-section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          min-width: 0;
        }

        .map-section-icon {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(99,102,241,0.35);
        }

        .map-section-title {
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .map-section-title em {
          font-style: normal;
          color: #3B82F6;
        }

        .map-section-sub {
          font-size: 12px;
          font-weight: 400;
          color: #94A3B8;
          margin-top: 2px;
        }

        .map-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, #E2E8F0, transparent);
          min-width: 40px;
        }

        .map-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(15,23,42,0.07);
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          min-width: 0;
        }

        .map-info-panel {
          padding: 40px 36px;
          background: linear-gradient(160deg, #0F172A 0%, #162032 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-width: 0;
        }

        .map-info-panel::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -80px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .map-info-panel::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .map-info-top {
          position: relative;
          z-index: 1;
        }

        .map-info-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 18px;
        }

        .map-info-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 6px #3B82F6;
          animation: dot-pulse 2s infinite;
        }

        .map-info-heading {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .map-info-heading span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .map-info-desc {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .map-contact-rows {
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .map-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          transition: all 0.25s;
        }

        .map-contact-row:hover {
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.25);
          transform: translateX(3px);
        }

        .map-contact-row-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.25));
          border: 1px solid rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #60A5FA;
          box-shadow: 0 0 10px rgba(59,130,246,0.15);
        }

        .map-contact-row-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 3px;
        }

        .map-contact-row-val {
          font-size: 12.5px;
          color: #94A3B8;
          font-weight: 400;
          line-height: 1.5;
        }

        .map-info-bottom {
          position: relative;
          z-index: 1;
          margin-top: 28px;
        }

        .map-directions-btn {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 13px 20px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
          text-decoration: none;
        }

        .map-directions-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.5);
        }

        .map-embed-panel {
          position: relative;
          min-height: 420px;
        }

        .map-embed-panel iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          min-height: 420px;
        }

        .map-embed-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 14px 18px;
          background: linear-gradient(180deg, rgba(15,23,42,0.7) 0%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
          pointer-events: none;
        }

        .map-embed-label {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(15,23,42,0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          pointer-events: auto;
        }

        .map-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          animation: dot-pulse 2s infinite;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .map-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .contact-hero {
            padding: 56px 0;
          }

          .contact-form-card {
            padding: 28px;
          }

          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .map-embed-panel {
            min-height: 300px;
          }

          .map-embed-panel iframe {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .contact-container {
            padding: 0 16px;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .map-section-header {
            flex-wrap: wrap;
          }

          .contact-careers {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-careers-btn {
            width: 100%;
          }

          .contact-form-title {
            font-size: 22px;
          }

          .map-section-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-hero">
          <div className="contact-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div className="contact-hero-eye">
                <span className="contact-hero-eye-dot"></span>
                We'd love to hear from you
              </div>
            </div>
            <h1>Get in <em>Touch</em></h1>
            <p>Reach out to our team for appointments, support, or partnership inquiries. We're here 24/7.</p>
          </div>
        </div>

        <div className="contact-body">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-left">
                <div className="contact-image-wrap">
                  <img src={assets.contact_image} alt="Our office" />
                  <div className="contact-image-badge">
                    <div className="contact-image-badge-icon">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="contact-image-badge-label">Response Time</div>
                      <div className="contact-image-badge-val">Under 2 hours</div>
                    </div>
                  </div>
                </div>

                <div className="contact-info-grid">
                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="contact-info-label">Office</div>
                    <div className="contact-info-val">54709 Willms Station<br />Suite 350, Washington</div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-val">(415) 555-0132</div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-val">support@medicare.in</div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="contact-info-label">Hours</div>
                    <div className="contact-info-val">24 / 7<br />Always available</div>
                  </div>
                </div>

                <div className="contact-careers">
                  <div>
                    <div className="contact-careers-title">Careers at MedCare</div>
                    <div className="contact-careers-sub">Join our team — explore open roles across engineering, care, and operations.</div>
                  </div>
                  <button className="contact-careers-btn">Explore Jobs →</button>
                </div>
              </div>

              <div className="contact-form-card">
                <div className="contact-form-title">Send us a <span>Message</span></div>
                <p className="contact-form-sub">Fill out the form below and our team will get back to you within 2 hours.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <div className="form-input-wrap">
                        <span className="form-input-icon">
                          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <div className="form-input-wrap">
                        <span className="form-input-icon">
                          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <div className="form-input-wrap">
                      <span className="form-input-icon">
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <div className="form-input-wrap">
                      <span className="form-input-icon top">
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                      <textarea
                        className="form-input"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`}>
                    {sent ? (
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

        {/* <div className="contact-map-section">
          <div className="contact-container">
            <div className="map-section-header">
              <div className="map-section-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="map-section-title">Find <em>Our Office</em></div>
                <div className="map-section-sub">Visit us at our Washington headquarters</div>
              </div>
              <div className="map-divider-line" />
            </div>

            <div className="map-card">
              <div className="map-info-panel">
                <div className="map-info-top">
                  <div className="map-info-badge">
                    <span className="map-info-badge-dot" />
                    Open Now
                  </div>
                  <div className="map-info-heading">
                    MedCare<br /><span>Washington HQ</span>
                  </div>
                  <p className="map-info-desc">
                    Our flagship healthcare centre is located in the heart of Washington. Walk-ins welcome during working hours.
                  </p>

                  <div className="map-contact-rows">
                    <div className="map-contact-row">
                      <div className="map-contact-row-icon">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="map-contact-row-label">Address</div>
                        <div className="map-contact-row-val">54709 Willms Station<br />Suite 350, Washington, DC</div>
                      </div>
                    </div>

                    <div className="map-contact-row">
                      <div className="map-contact-row-icon">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="map-contact-row-label">Phone</div>
                        <div className="map-contact-row-val">+91-76879-67008</div>
                      </div>
                    </div>

                    <div className="map-contact-row">
                      <div className="map-contact-row-icon">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="map-contact-row-label">Working Hours</div>
                        <div className="map-contact-row-val">Mon – Sat: 8 AM – 9 PM<br />Emergency: 24 / 7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="map-info-bottom">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Washington+DC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-directions-btn"
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="map-embed-panel">
                <div className="map-embed-topbar">
                  <div className="map-embed-label">
                    <span className="map-live-dot" />
                    Live Map
                  </div>
                </div>
                <iframe
                  title="MedCare Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99404.94144938534!2d-77.12947552558303!3d38.89370157906208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Contact