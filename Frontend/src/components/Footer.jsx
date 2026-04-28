import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Clash+Display:wght@600;700&display=swap');

        /* ── RESET & ROOT ── */
        .fr {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #060912;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        /* ── AMBIENT GLOW ORBS ── */
        .fr-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.18;
        }
        .fr-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #3B82F6, transparent 70%);
          top: -120px; left: -100px;
          animation: orb-drift 8s ease-in-out infinite alternate;
        }
        .fr-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #6366F1, transparent 70%);
          bottom: 0; right: -80px;
          animation: orb-drift 10s ease-in-out infinite alternate-reverse;
        }
        .fr-orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #06B6D4, transparent 70%);
          top: 50%; left: 45%;
          transform: translate(-50%, -50%);
          animation: orb-drift 12s ease-in-out infinite alternate;
        }
        @keyframes orb-drift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(30px, 20px); }
        }

        /* ── GRID TEXTURE ── */
        .fr::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── TOP GLOW BORDER ── */
        .fr-topline {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,0.6) 30%,
            rgba(99,102,241,0.8) 50%,
            rgba(6,182,212,0.6) 70%,
            transparent 100%
          );
          box-shadow:
            0 0 20px rgba(99,102,241,0.5),
            0 0 60px rgba(59,130,246,0.25);
          position: relative; z-index: 2;
        }

        /* ── MAIN CONTENT ── */
        .fr-inner {
          position: relative; z-index: 2;
          padding: 56px 72px 0;
        }

        /* ── TOP SECTION ── */
        .fr-top {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.2fr;
          gap: 56px;
          padding-bottom: 48px;
        }

        /* ── BRAND ── */
        .fr-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .fr-logo-icon {
          width: 46px; height: 46px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.4),
            0 0 24px rgba(99,102,241,0.35),
            0 0 48px rgba(59,130,246,0.15);
          transition: box-shadow 0.3s;
        }
        .fr-logo-icon:hover {
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.6),
            0 0 32px rgba(99,102,241,0.55),
            0 0 64px rgba(59,130,246,0.3);
        }
        .fr-logo-name {
          font-size: 22px; font-weight: 800;
          color: #fff; letter-spacing: -0.7px;
          line-height: 1;
        }
        .fr-logo-name span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fr-logo-sub {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2.8px; color: #334155;
          text-transform: uppercase; display: block; margin-top: 3px;
        }

        .fr-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px; font-weight: 500; color: #60A5FA;
          margin-bottom: 18px;
          transition: all 0.3s;
          cursor: default;
        }
        .fr-badge:hover {
          background: rgba(59,130,246,0.15);
          border-color: rgba(59,130,246,0.5);
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }
        .fr-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 8px #3B82F6;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #3B82F6; }
          50% { opacity: 0.5; box-shadow: 0 0 3px #3B82F6; }
        }

        .fr-desc {
          font-size: 13px; font-weight: 300;
          color: #475569; line-height: 1.85;
          max-width: 290px; margin-bottom: 28px;
        }

        /* ── SOCIALS ── */
        .fr-socials { display: flex; gap: 10px; }
        .fr-social {
          width: 38px; height: 38px;
          border-radius: 11px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.8);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          color: #475569;
          position: relative;
          overflow: hidden;
        }
        .fr-social::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .fr-social:hover::before { opacity: 1; }
        .fr-social:hover {
          border-color: transparent;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.4), 0 0 0 1px rgba(99,102,241,0.3);
        }
        .fr-social svg { position: relative; z-index: 1; }

        /* ── LINK COLUMNS ── */
        .fr-col-title {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #334155; margin-bottom: 22px;
          display: flex; align-items: center; gap: 8px;
        }
        .fr-col-title::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(90deg, #1E293B, transparent);
        }

        .fr-links {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .fr-links li {
          font-size: 13.5px; font-weight: 400;
          color: #475569; cursor: pointer;
          transition: all 0.2s;
          padding: 7px 10px;
          border-radius: 8px;
          display: flex; align-items: center; gap: 8px;
          border: 1px solid transparent;
          position: relative;
          user-select: none;
        }
        .fr-links li::before {
          content: '';
          width: 5px; height: 5px; border-radius: 50%;
          background: #1E293B; flex-shrink: 0;
          transition: all 0.2s;
          box-shadow: none;
        }
        .fr-links li:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
          box-shadow: 0 0 16px rgba(59,130,246,0.08) inset;
          transform: translateX(3px);
        }
        .fr-links li:hover::before {
          background: #3B82F6;
          box-shadow: 0 0 8px #3B82F6;
        }
        .fr-links li:active {
          background: rgba(59,130,246,0.15);
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 0 20px rgba(59,130,246,0.18) inset;
        }

        /* ── CONTACT ── */
        .fr-contact { display: flex; flex-direction: column; gap: 12px; }
        .fr-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.5);
          transition: all 0.25s;
          cursor: default;
        }
        .fr-contact-item:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.06);
          box-shadow:
            0 0 20px rgba(59,130,246,0.08) inset,
            0 4px 20px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }
        .fr-contact-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2));
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #60A5FA;
          box-shadow: 0 0 12px rgba(59,130,246,0.15);
        }
        .fr-contact-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #334155; margin-bottom: 3px;
        }
        .fr-contact-val {
          font-size: 13px; color: #94A3B8; font-weight: 400;
        }

        /* ── DIVIDER ── */
        .fr-divider {
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(30,41,59,0.8) 20%,
            rgba(59,130,246,0.2) 50%,
            rgba(30,41,59,0.8) 80%,
            transparent
          );
          margin: 0 72px;
        }

        /* ── BOTTOM BAR ── */
        .fr-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 72px 24px;
          position: relative; z-index: 2;
        }
        .fr-copy {
          font-size: 12px; color: #1E293B; font-weight: 400;
          letter-spacing: 0.3px;
        }
        .fr-copy strong { color: #3B82F6; font-weight: 600; }
        .fr-bottom-links {
          display: flex; gap: 6px;
        }
        .fr-bottom-links a {
          font-size: 12px; color: #1E293B; text-decoration: none;
          transition: all 0.2s;
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid transparent;
          user-select: none;
        }
        .fr-bottom-links a:hover {
          color: #60A5FA;
          border-color: rgba(59,130,246,0.2);
          background: rgba(59,130,246,0.07);
        }

        /* ── BOTTOM GLOW LINE ── */
        .fr-bottomline {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(99,102,241,0.4) 40%,
            rgba(59,130,246,0.6) 50%,
            rgba(99,102,241,0.4) 60%,
            transparent 100%
          );
          position: relative; z-index: 2;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .fr-top { grid-template-columns: 1fr 1fr; gap: 40px; }
          .fr-inner { padding: 48px 40px 0; }
          .fr-divider { margin: 0 40px; }
          .fr-bottom { padding: 20px 40px 24px; }
        }
        @media (max-width: 640px) {
          .fr-top { grid-template-columns: 1fr; gap: 32px; }
          .fr-inner { padding: 40px 24px 0; }
          .fr-divider { margin: 0 24px; }
          .fr-bottom { padding: 18px 24px 22px; flex-direction: column; gap: 14px; text-align: center; }
          .fr-bottom-links { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>

      <footer className="fr">

        {/* Ambient orbs */}
        <div className="fr-orb fr-orb-1" />
        <div className="fr-orb fr-orb-2" />
        <div className="fr-orb fr-orb-3" />

        {/* Top glowing border */}
        <div className="fr-topline" />

        <div className="fr-inner">
          <div className="fr-top">

            {/* ── BRAND ── */}
            <div>
              <div className="fr-logo-row">
                <div className="fr-logo-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="fr-logo-name">Med<span>Care</span></div>
                  <span className="fr-logo-sub">Smart Health Platform</span>
                </div>
              </div>

              <div className="fr-badge">
                <span className="fr-badge-dot" />
                Trusted by 50,000+ patients
              </div>

              <p className="fr-desc">
                Effortless healthcare scheduling — book appointments with trusted doctors in seconds. Smart reminders, real-time updates, and seamless coordination built for modern healthcare.
              </p>

              <div className="fr-socials">
                <button className="fr-social" title="Twitter">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="fr-social" title="LinkedIn">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="fr-social" title="Instagram">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </button>
                <button className="fr-social" title="Facebook">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* ── COMPANY ── */}
            <div>
              <p className="fr-col-title">Company</p>
              <ul className="fr-links">
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/about')}>About Us</li>
                <li onClick={() => navigate('/doctors')}>All Doctors</li>
                <li onClick={() => navigate('/contact')}>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* ── SERVICES ── */}
            <div>
              <p className="fr-col-title">Services</p>
              <ul className="fr-links">
                <li>Book Appointment</li>
                <li>Find Specialist</li>
                <li>Health Records</li>
                <li>Smart Reminders</li>
                <li>Teleconsultation</li>
              </ul>
            </div>

            {/* ── CONTACT ── */}
            <div>
              <p className="fr-col-title">Get in Touch</p>
              <div className="fr-contact">
                <div className="fr-contact-item">
                  <div className="fr-contact-icon">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fr-contact-label">Phone</div>
                    <div className="fr-contact-val">+91-76879-67008</div>
                  </div>
                </div>

                <div className="fr-contact-item">
                  <div className="fr-contact-icon">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fr-contact-label">Email</div>
                    <div className="fr-contact-val">support@medicare.in</div>
                  </div>
                </div>

                <div className="fr-contact-item">
                  <div className="fr-contact-icon">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="fr-contact-label">Support Hours</div>
                    <div className="fr-contact-val">24 / 7 Always on</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="fr-divider" />

        {/* Bottom bar */}
        <div className="fr-bottom">
          <p className="fr-copy">
            © 2026 <strong>MedCare</strong> — All Rights Reserved.
          </p>
          <div className="fr-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="fr-bottomline" />

      </footer>
    </>
  )
}

export default Footer