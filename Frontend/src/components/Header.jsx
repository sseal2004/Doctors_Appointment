import React from 'react'
import { assets } from '../../assets/assets'
import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


const Header = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes hdr-orb-float {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,15px) scale(0.97); }
        }
        @keyframes hdr-orb2-float {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-25px,30px) scale(1.08); }
          70%      { transform: translate(20px,-10px) scale(0.95); }
        }
        @keyframes hdr-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes hdr-pulse-dot {
          0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(31,230,180,0.6); }
          50%     { opacity:.6; transform:scale(1.2); box-shadow:0 0 0 7px rgba(31,230,180,0); }
        }
        @keyframes hdr-badge-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(31,230,180,0.0); }
          50%     { box-shadow: 0 0 24px 6px rgba(31,230,180,0.12); }
        }
        @keyframes hdr-slide-up {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes hdr-fade-in {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes hdr-float-card-in {
          from { opacity:0; transform:translateX(24px) translateY(-12px) scale(0.9); }
          to   { opacity:1; transform:translateX(0) translateY(0) scale(1); }
        }
        @keyframes hdr-card-bob {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-7px); }
        }
        @keyframes hdr-scan-line {
          0%   { top: -4px; opacity:1; }
          90%  { opacity:0.5; }
          100% { top: 104%; opacity:0; }
        }
        @keyframes hdr-grid-fade {
          from { opacity:0; }
          to   { opacity:0.04; }
        }
        @keyframes hdr-btn-shine {
          0%       { left:-80%; }
          60%,100% { left:140%; }
        }
        @keyframes hdr-ring-pulse {
          0%   { transform:scale(1); opacity:0.5; }
          100% { transform:scale(1.5); opacity:0; }
        }
        @keyframes hdr-halo-rotate {
          0%   { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }

        .hdr-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 0px;
          overflow: hidden;
          min-height: 560px;
          display: flex;
          align-items: stretch;
          background:
            radial-gradient(ellipse 70% 80% at 10% 20%, #0e2a4a 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 90% 80%, #071828 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, #0a1e32 0%, transparent 100%),
            #060f1c;
          isolation: isolate;
        }

        .hdr-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: hdr-grid-fade 1.4s ease forwards;
          pointer-events: none;
        }

        .hdr-orb { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; }
        .hdr-orb-1 {
          width: 580px; height: 580px; top: -200px; left: -130px;
          background: radial-gradient(circle at 40% 40%, rgba(31,200,160,0.22) 0%, rgba(31,173,150,0.1) 40%, transparent 70%);
          animation: hdr-orb-float 9s ease-in-out infinite;
          filter: blur(2px);
        }
        .hdr-orb-2 {
          width: 460px; height: 460px; bottom: -160px; right: 250px;
          background: radial-gradient(circle at 60% 60%, rgba(99,102,241,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%);
          animation: hdr-orb2-float 12s ease-in-out infinite;
          filter: blur(2px);
        }
        .hdr-orb-3 {
          width: 220px; height: 220px; top: 55%; left: 36%;
          background: radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%);
          animation: hdr-orb-float 7s ease-in-out infinite reverse;
        }

        .hdr-scanline {
          position: absolute; left:0; right:0; height: 2px; z-index: 2;
          background: linear-gradient(90deg, transparent 0%, rgba(31,230,180,0.5) 40%, rgba(255,255,255,0.8) 50%, rgba(31,230,180,0.5) 60%, transparent 100%);
          animation: hdr-scan-line 6s linear infinite;
          pointer-events: none;
        }

        /* ─── LEFT ─── */
        .hdr-left {
          flex: 1; padding: 76px 64px;
          display: flex; flex-direction: column; justify-content: center; gap: 26px;
          position: relative; z-index: 10;
        }

        .hdr-badge {
          display: inline-flex; align-items: center; gap: 9px;
          border: 1px solid rgba(31,230,180,0.28);
          background: rgba(31,230,180,0.05);
          border-radius: 100px; padding: 7px 18px 7px 11px;
          width: fit-content; backdrop-filter: blur(8px);
          animation: hdr-slide-up 0.7s ease both, hdr-badge-glow 3.5s ease-in-out 1s infinite;
        }
        .hdr-badge-dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: #1FE6B4; flex-shrink: 0;
          animation: hdr-pulse-dot 2s ease-in-out infinite;
        }
        .hdr-badge-txt {
          font-size: 11px; font-weight: 500; letter-spacing: 1.8px; text-transform: uppercase;
          background: linear-gradient(90deg, #1FE6B4 0%, #60A5FA 50%, #1FE6B4 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hdr-shimmer 3s linear infinite;
        }

        .hdr-title {
          font-family: 'Playfair Display', serif;
          font-size: 66px; font-weight: 800; color: #fff;
          line-height: 1.03; letter-spacing: -2px;
          animation: hdr-slide-up 0.7s 0.12s ease both;
        }
        .hdr-title em {
          font-style: italic;
          background: linear-gradient(135deg, #1FE6B4 0%, #38BDF8 55%, #818CF8 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 24px rgba(31,230,180,0.4));
        }

        .hdr-profiles-row {
          display: flex; align-items: center; gap: 14px;
          animation: hdr-slide-up 0.7s 0.22s ease both;
        }
        .hdr-profiles-row img { width: 110px; flex-shrink: 0; }
        .hdr-profiles-txt {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.48); line-height: 1.75; max-width: 280px;
        }

        .hdr-btn-wrap {
          animation: hdr-slide-up 0.7s 0.32s ease both;
          width: fit-content; position: relative;
        }
        .hdr-btn-ring {
          position: absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:100%; height:100%; border-radius:100px;
          border: 1.5px solid rgba(31,230,180,0.45);
          animation: hdr-ring-pulse 2.8s ease-out infinite;
          pointer-events: none;
        }
        .hdr-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #1FAD96, #0e9f8a, #178a76);
          color: #fff; padding: 16px 34px; border-radius: 100px;
          font-size: 14px; font-weight: 500; text-decoration: none;
          transition: all 0.35s cubic-bezier(0.34,1.3,0.64,1);
          position: relative; overflow: hidden;
          box-shadow: 0 8px 32px rgba(31,173,150,0.42), 0 0 0 0 rgba(31,230,180,0);
          letter-spacing: 0.3px;
        }
        .hdr-btn::before {
          content: '';
          position: absolute; top:0; left:-80%; width:60%; height:100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent);
          animation: hdr-btn-shine 3.2s ease-in-out infinite;
          pointer-events: none;
        }
        .hdr-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 18px 50px rgba(31,173,150,0.58), 0 0 0 5px rgba(31,230,180,0.14);
        }
        .hdr-btn-arrow {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; transition: transform 0.3s;
        }
        .hdr-btn:hover .hdr-btn-arrow { transform: translateX(4px); }

        .hdr-stats {
          display: flex; gap: 36px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
          animation: hdr-slide-up 0.7s 0.42s ease both;
        }
        .hdr-stat { position: relative; cursor: default; }
        .hdr-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 30px; font-weight: 800; color: #fff; line-height: 1; letter-spacing: -0.5px;
        }
        .hdr-stat-num span {
          background: linear-gradient(135deg, #1FE6B4, #38BDF8);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hdr-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.28); margin-top: 4px; font-weight: 300; letter-spacing: 0.5px; }
        .hdr-stat-line {
          position: absolute; bottom: -1px; left: 0;
          height: 1px; width: 0;
          background: linear-gradient(90deg, #1FE6B4, transparent);
          transition: width 0.4s ease;
        }
        .hdr-stat:hover .hdr-stat-line { width: 100%; }
        .hdr-stat:hover .hdr-stat-lbl { color: rgba(255,255,255,0.55); transition: color 0.3s; }

        /* ─── RIGHT ─── */
        .hdr-right {
          width: 50%; position: relative; flex-shrink: 0; overflow: hidden;
          animation: hdr-fade-in 1s 0.3s ease both;
        }
        .hdr-right::before {
          content: ''; position: absolute; inset: 0; z-index: 3;
          background:
            linear-gradient(to right, #060f1c 0%, transparent 28%),
            linear-gradient(to top, #060f1c 0%, transparent 28%);
          pointer-events: none;
        }

        /* Rotating halo ring */
        .hdr-halo-ring {
          position: absolute; z-index: 1;
          width: 420px; height: 420px; border-radius: 50%;
          bottom: -100px; right: 20px;
          border: 1px solid rgba(31,173,150,0.12);
          animation: hdr-halo-rotate 20s linear infinite;
        }
        .hdr-halo-ring::after {
          content: '';
          position: absolute; top:-3px; left:50%;
          width: 6px; height: 6px; border-radius: 50%;
          background: #1FE6B4;
          box-shadow: 0 0 12px 4px rgba(31,230,180,0.7);
        }

        .hdr-right-halo {
          position: absolute; z-index: 1;
          width: 380px; height: 380px; border-radius: 50%;
          bottom: -80px; right: 50px;
          background: radial-gradient(circle, rgba(31,173,150,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%);
          filter: blur(24px);
          animation: hdr-orb-float 8s ease-in-out infinite;
        }

        .hdr-right-img {
          position: absolute; bottom: 0; right: -10px;
          height: 106%; width: auto;
          object-fit: contain; object-position: bottom right;
          filter: drop-shadow(-50px 0 70px rgba(31,173,150,0.22));
          z-index: 2;
        }

        /* Floating card 1 */
        .hdr-float-card {
          position: absolute; top: 52px; left: -12px; z-index: 12;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(20px);
          border-radius: 18px; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.4) inset;
          animation: hdr-float-card-in 0.8s 0.6s cubic-bezier(0.34,1.4,0.64,1) both,
                     hdr-card-bob 4.5s 2s ease-in-out infinite;
        }
        .hdr-float-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, #E6FBF5, #C6F4E8);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(31,173,150,0.28);
        }
        .hdr-float-lbl { font-size: 10px; color: #94A3B8; letter-spacing: 0.5px; }
        .hdr-float-val { font-size: 14px; font-weight: 700; color: #0D1F35; margin-top: 1px; }

        /* Floating card 2 */
        .hdr-float-card-2 {
          position: absolute; bottom: 84px; left: 12px; z-index: 12;
          background: rgba(10,24,48,0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
          animation: hdr-float-card-in 0.8s 0.9s cubic-bezier(0.34,1.4,0.64,1) both,
                     hdr-card-bob 5.5s 2.5s ease-in-out infinite reverse;
        }
        .hdr-float-icon-2 {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.08));
          border: 1px solid rgba(201,168,76,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .hdr-float-lbl-2 { font-size: 10px; color: rgba(255,255,255,0.38); letter-spacing: 0.5px; }
        .hdr-float-val-2 {
          font-size: 14px; font-weight: 700; margin-top: 1px;
          background: linear-gradient(90deg, #C9A84C, #F0D080);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 900px) {
          .hdr-root { flex-direction: column; border-radius: 24px; min-height: auto; }
          .hdr-left { padding: 52px 28px; gap: 22px; }
          .hdr-title { font-size: 44px; }
          .hdr-right { width: 100%; height: 300px; }
          .hdr-right-img { height: 100%; width: 100%; right:0; object-position: top center; }
          .hdr-float-card { top: 16px; left: 16px; }
          .hdr-float-card-2 { display: none; }
          .hdr-halo-ring { display: none; }
          .hdr-stats { gap: 20px; flex-wrap: wrap; }
          .hdr-stat-num { font-size: 24px; }
        }
      `}</style>

      <div className="hdr-root">
        <div className="hdr-grid"></div>
        <div className="hdr-orb hdr-orb-1"></div>
        <div className="hdr-orb hdr-orb-2"></div>
        <div className="hdr-orb hdr-orb-3"></div>
        <div className="hdr-scanline"></div>

        {/* LEFT */}
        <div className="hdr-left">
          <div className="hdr-badge">
            <span className="hdr-badge-dot"></span>
            <span className="hdr-badge-txt">Trusted by 50,000+ Patients</span>
          </div>

          <h1 className="hdr-title">
            Book With<br /><em>Trusted</em><br />Doctors
          </h1>

          <div className="hdr-profiles-row">
            <img src={assets.group_profiles} alt="Patient profiles" />
            <p className="hdr-profiles-txt">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>

          <div className="hdr-btn-wrap">
            <div className="hdr-btn-ring"></div>
            <a href="#speciality" className="hdr-btn">
              Book appointment
              <span className="hdr-btn-arrow">→</span>
            </a>
          </div>

          <div className="hdr-stats">
      
      <div className="hdr-stat">
        <div className="hdr-stat-num">
          <Counter end={100} suffix="+" />
        </div>
        <div className="hdr-stat-lbl">Specialists</div>
        <div className="hdr-stat-line"></div>
      </div>

      <div className="hdr-stat">
        <div className="hdr-stat-num">
          <Counter end={98} suffix="%" />
        </div>
        <div className="hdr-stat-lbl">Satisfaction</div>
        <div className="hdr-stat-line"></div>
      </div>

      <div className="hdr-stat">
        <div className="hdr-stat-num">
          <Counter end={24} suffix="/7" />
        </div>
        <div className="hdr-stat-lbl">Support</div>
        <div className="hdr-stat-line"></div>
      </div>

      <div className="hdr-stat">
        <div className="hdr-stat-num">
          <Counter end={15} suffix="K" />
        </div>
        <div className="hdr-stat-lbl">Appointments</div>
        <div className="hdr-stat-line"></div>
      </div>

    </div>
        </div>

        {/* RIGHT */}
        <div className="hdr-right">
          <div className="hdr-right-halo"></div>
          <div className="hdr-halo-ring"></div>
          <img className="hdr-right-img" src={assets.header_img} alt="Doctor" />

          <div className="hdr-float-card">
            <div className="hdr-float-icon">✅</div>
            <div>
              <div className="hdr-float-lbl">Appointment</div>
              <div className="hdr-float-val">Confirmed!</div>
            </div>
          </div>

          <div className="hdr-float-card-2">
            <div className="hdr-float-icon-2">⭐</div>
            <div>
              <div className="hdr-float-lbl-2">Average Rating</div>
              <div className="hdr-float-val-2">4.9 / 5.0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header