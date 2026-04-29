import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .bnr-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── MAIN BANNER ── */
        .bnr-inner {
          position: relative;
          min-height: 320px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          overflow: hidden;
          background: #060912;
        }

        /* MESH GRADIENT BACKGROUND */
        .bnr-mesh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 60% 80% at 10% 50%, rgba(59,130,246,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 85% 20%, rgba(99,102,241,0.2) 0%, transparent 55%),
            radial-gradient(ellipse 40% 60% at 60% 90%, rgba(6,182,212,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 30% 40% at 40% 10%, rgba(139,92,246,0.1) 0%, transparent 50%),
            #060912;
          animation: bnr-mesh-shift 12s ease-in-out infinite alternate;
        }

        @keyframes bnr-mesh-shift {
          0%   { filter: hue-rotate(0deg) brightness(1); }
          50%  { filter: hue-rotate(8deg) brightness(1.05); }
          100% { filter: hue-rotate(-5deg) brightness(0.98); }
        }

        /* GRID TEXTURE */
        .bnr-grid-tex {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image:
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* SHIMMER SWEEP */
        .bnr-shimmer {
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg,
            transparent 30%,
            rgba(255,255,255,0.03) 50%,
            transparent 70%
          );
          animation: bnr-shimmer-sweep 6s ease-in-out infinite;
          z-index: 2; pointer-events: none;
        }

        @keyframes bnr-shimmer-sweep {
          0%   { left: -100%; }
          60%  { left: 140%; }
          100% { left: 140%; }
        }

        /* TOP GLOW LINE */
        .bnr-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 3;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.6) 25%,
            rgba(99,102,241,1) 50%,
            rgba(6,182,212,0.6) 75%,
            transparent
          );
          box-shadow: 0 0 20px rgba(99,102,241,0.4);
        }

        /* BOTTOM GLOW LINE */
        .bnr-bottomline {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px; z-index: 3;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.3) 30%,
            rgba(99,102,241,0.5) 50%,
            rgba(59,130,246,0.3) 70%,
            transparent
          );
        }

        /* ── LEFT ── */
        .bnr-left {
          padding: 56px 64px;
          position: relative; z-index: 4;
        }

        /* PILLS */
        .bnr-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }

        .bnr-pill {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.08);
          border-radius: 100px;
          padding: 4px 13px;
          font-size: 11px; font-weight: 500;
          color: #a5b4fc;
          letter-spacing: 0.3px;
          transition: all 0.25s;
        }

        .bnr-pill:hover {
          background: rgba(99,102,241,0.16);
          border-color: rgba(99,102,241,0.5);
        }

        .bnr-pill-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #818cf8;
          box-shadow: 0 0 5px #818cf8;
        }

        /* HEADING */
        .bnr-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }

        .bnr-title em {
          font-style: italic;
          background: linear-gradient(135deg, #60A5FA 0%, #818CF8 50%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bnr-sub {
          font-size: 14.5px; font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.85; max-width: 400px;
          margin-bottom: 36px;
        }

        /* ACTIONS */
        .bnr-actions { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }

        .bnr-btn-primary {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #fff; border: none; border-radius: 100px;
          padding: 14px 32px;
          font-size: 13.5px; font-weight: 600;
          cursor: pointer; transition: all 0.3s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.2px;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 8px 24px rgba(99,102,241,0.35);
        }

        .bnr-btn-primary::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transition: left 0.45s ease;
        }

        .bnr-btn-primary:hover::before { left: 100%; }
        .bnr-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.6), 0 14px 36px rgba(99,102,241,0.5);
        }

        .bnr-btn-ghost {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 13.5px; font-weight: 500;
          cursor: pointer; transition: all 0.25s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          backdrop-filter: blur(4px);
        }

        .bnr-btn-ghost:hover {
          border-color: rgba(255,255,255,0.28);
          color: #fff;
          background: rgba(255,255,255,0.07);
        }

        /* TRUST LINE */
        .bnr-trust {
          display: flex; align-items: center; gap: 10px;
          margin-top: 20px;
        }

        .bnr-avatars { display: flex; }

        .bnr-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          border: 2px solid #060912;
          object-fit: cover;
          margin-left: -8px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: #fff; font-weight: 600;
          flex-shrink: 0;
          overflow: hidden;
        }

        .bnr-avatar:first-child { margin-left: 0; }

        .bnr-trust-text { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 300; }
        .bnr-trust-text strong { color: rgba(255,255,255,0.65); font-weight: 600; }

        /* ── RIGHT IMAGE AREA ── */
        .bnr-right {
          position: relative; z-index: 4;
          width: 300px; min-height: 320px;
          flex-shrink: 0;
          display: flex; align-items: flex-end; justify-content: center;
        }

        .bnr-right img {
          height: 115%; width: auto;
          object-fit: contain; object-position: bottom;
          filter: drop-shadow(-20px 0 40px rgba(99,102,241,0.3));
          position: relative; z-index: 2;
        }

        /* FLOATING GLASS CARDS */
        .bnr-float-card {
          position: absolute;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 12px 16px;
          z-index: 5;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* card 1 — top left of image */
        .bnr-float-1 {
          top: 36px; left: -72px;
          display: flex; align-items: center; gap: 10px;
          animation: bnr-float-a 4s ease-in-out infinite;
          min-width: 170px;
        }

        /* card 2 — bottom right */
        .bnr-float-2 {
          bottom: 60px; right: -30px;
          animation: bnr-float-b 5s ease-in-out infinite;
          min-width: 150px;
        }

        /* card 3 — mid left */
        .bnr-float-3 {
          top: 50%; right: -20px;
          transform: translateY(-50%);
          animation: bnr-float-a 6s ease-in-out infinite reverse;
          min-width: 130px;
        }

        @keyframes bnr-float-a {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes bnr-float-b {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(7px); }
        }

        .bnr-float-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99,102,241,0.4);
        }

        .bnr-float-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 2px;
        }

        .bnr-float-val {
          font-size: 13px; font-weight: 700; color: #fff; line-height: 1;
        }

        .bnr-float-val span { color: #34d399; }

        /* rating stars */
        .bnr-stars { display: flex; gap: 2px; margin-bottom: 3px; }
        .bnr-star { font-size: 11px; color: #FBBF24; }

        /* pulsing green dot */
        .bnr-live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 3px rgba(52,211,153,0.2);
          animation: bnr-live 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes bnr-live {
          0%,100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(52,211,153,0.08); }
        }

        /* GLOW BEHIND IMAGE */
        .bnr-right-glow {
          position: absolute;
          bottom: -40px; left: 50%; transform: translateX(-50%);
          width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%);
          pointer-events: none; z-index: 1;
          animation: bnr-glow-pulse 4s ease-in-out infinite;
        }

        @keyframes bnr-glow-pulse {
          0%,100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          50%      { opacity: 1;   transform: translateX(-50%) scale(1.1); }
        }

        /* ── STATS STRIP ── */
        .bnr-stats {
          display: flex;
          background: #fff;
          border-top: 1px solid #eef0f6;
        }

        .bnr-stat {
          flex: 1;
          padding: 20px 28px;
          border-right: 1px solid #eef0f6;
          display: flex; align-items: center; gap: 14px;
          transition: background 0.2s;
          cursor: default;
        }

        .bnr-stat:last-child { border-right: none; }
        .bnr-stat:hover { background: #f8f9ff; }

        .bnr-stat-icon {
          width: 38px; height: 38px; border-radius: 11px;
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1));
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
        }

        .bnr-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 24px; font-weight: 400;
          color: #0D1F35; line-height: 1; letter-spacing: -0.5px;
        }

        .bnr-stat-num span { color: #6366F1; }
        .bnr-stat-lbl { font-size: 11px; color: #9ca3af; margin-top: 2px; font-weight: 300; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .bnr-inner { grid-template-columns: 1fr; }
          .bnr-left { padding: 44px 28px; }
          .bnr-title { font-size: 34px; }
          .bnr-right { display: none; }
          .bnr-stats { flex-wrap: wrap; }
          .bnr-stat { flex: 1 1 50%; border-bottom: 1px solid #eef0f6; }
        }

        @media (max-width: 480px) {
          .bnr-stat { flex: 1 1 100%; }
        }
      `}</style>

      <div className="bnr-root">

        {/* ── MAIN BANNER ── */}
        <div className="bnr-inner">
          {/* depth layers */}
          <div className="bnr-mesh" />
          <div className="bnr-grid-tex" />
          <div className="bnr-shimmer" />
          <div className="bnr-topline" />
          <div className="bnr-bottomline" />

          {/* LEFT */}
          <div className="bnr-left">
            <div className="bnr-pills">
              {['Free cancellation', 'Verified doctors', 'Instant confirmation'].map((p, i) => (
                <span key={i} className="bnr-pill">
                  <span className="bnr-pill-dot" />
                  {p}
                </span>
              ))}
            </div>

            <h2 className="bnr-title">
              Book with <em>100+</em><br />Trusted Doctors
            </h2>

            <p className="bnr-sub">
              Join thousands of patients who found the right care at the right time.
              Create your free account and take charge of your health today.
            </p>

            <div className="bnr-actions">
              <button
                className="bnr-btn-primary"
                onClick={() => { navigate('/login'); scrollTo(0, 0) }}
              >
                Create free account
              </button>
              <button className="bnr-btn-ghost">
                Learn more →
              </button>
            </div>

            {/* TRUST ROW */}
            <div className="bnr-trust">
              <div className="bnr-avatars">
                {['A','B','C','D'].map((l, i) => (
                  <div key={i} className="bnr-avatar" style={{
                    background: [`linear-gradient(135deg,#3B82F6,#6366F1)`,
                      `linear-gradient(135deg,#6366F1,#8B5CF6)`,
                      `linear-gradient(135deg,#06B6D4,#3B82F6)`,
                      `linear-gradient(135deg,#10B981,#06B6D4)`][i]
                  }}>
                    {l}
                  </div>
                ))}
              </div>
              <span className="bnr-trust-text">
                Trusted by <strong>50,000+</strong> patients across India
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bnr-right">
            <div className="bnr-right-glow" />

            {/* Glass card 1 — availability */}
            <div className="bnr-float-card bnr-float-1">
              <div className="bnr-float-icon">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="bnr-float-label">Slots open</div>
                <div className="bnr-float-val"><span>24</span> Today</div>
              </div>
              <div className="bnr-live-dot" style={{ marginLeft: 'auto' }} />
            </div>

            {/* Glass card 2 — rating */}
            <div className="bnr-float-card bnr-float-2">
              <div className="bnr-stars">
                {[...Array(5)].map((_,i) => <span key={i} className="bnr-star">★</span>)}
              </div>
              <div className="bnr-float-val">4.9 / 5.0</div>
              <div className="bnr-float-label" style={{ marginTop: 3 }}>Patient rating</div>
            </div>

            {/* Glass card 3 — response */}
            <div className="bnr-float-card bnr-float-3">
              <div className="bnr-float-label">Avg. response</div>
              <div className="bnr-float-val" style={{ fontSize: 16 }}>
                <span>&lt; 2</span> hrs
              </div>
            </div>

            <img src={assets.appointment_img} alt="Book appointment" />
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="bnr-stats">
          {[
            { icon: '👥', num: '50K', suffix: '+', lbl: 'Patients Served' },
            { icon: '🩺', num: '100', suffix: '+', lbl: 'Verified Doctors' },
            { icon: '⭐', num: '98',  suffix: '%', lbl: 'Satisfaction Rate' },
            { icon: '⚡', num: '24',  suffix: '/7', lbl: 'Always Available' },
          ].map((s, i) => (
            <div key={i} className="bnr-stat">
              <div className="bnr-stat-icon">{s.icon}</div>
              <div>
                <div className="bnr-stat-num">{s.num}<span>{s.suffix}</span></div>
                <div className="bnr-stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Banner