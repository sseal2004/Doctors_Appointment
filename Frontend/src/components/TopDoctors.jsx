import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        /* ── KEYFRAMES ── */
        @keyframes td-mesh-breathe {
          0%,100% { filter: hue-rotate(0deg) brightness(1); }
          50%      { filter: hue-rotate(8deg) brightness(1.04); }
        }
        @keyframes td-orb-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(22px,-16px) scale(1.06); }
          66%     { transform: translate(-16px,20px) scale(0.96); }
        }
        @keyframes td-orb-drift2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-26px,18px) scale(1.07); }
          75%     { transform: translate(16px,-12px) scale(0.95); }
        }
        @keyframes td-shimmer-txt {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes td-dot-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.6); }
          50%     { box-shadow: 0 0 0 8px rgba(99,102,241,0); }
        }
        @keyframes td-slide-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes td-card-in {
          from { opacity: 0; transform: translateY(28px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes td-shine-sweep {
          0%       { left: -100%; }
          55%,100% { left: 140%; }
        }
        @keyframes td-scan {
          0%   { top: -2px; opacity: 1; }
          88%  { opacity: 0.3; }
          100% { top: 104%; opacity: 0; }
        }
        @keyframes td-float-stat-a {
          0%,100% { transform: translateY(0) rotate(-0.5deg); }
          50%     { transform: translateY(-7px) rotate(0.5deg); }
        }
        @keyframes td-float-stat-b {
          0%,100% { transform: translateY(0) rotate(0.5deg); }
          50%     { transform: translateY(-5px) rotate(-0.5deg); }
        }
        @keyframes td-avail-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50%     { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
        }
        @keyframes td-btn-shine {
          0%       { left: -100%; }
          55%,100% { left: 140%; }
        }

        /* ── ROOT ── */
        .td-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          padding: 88px 0 80px;
          overflow: hidden;
          isolation: isolate;

          /* MESH GRADIENT — light blue palette */
          background:
            radial-gradient(ellipse 70% 60% at 5% 10%,  rgba(99,102,241,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 55% at 95% 90%,  rgba(59,130,246,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%,  rgba(139,92,246,0.06) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 80% 15%,  rgba(6,182,212,0.07)  0%, transparent 55%),
            radial-gradient(ellipse 45% 40% at 15% 85%,  rgba(16,185,129,0.05) 0%, transparent 55%),
            #f0f4ff;
          animation: td-mesh-breathe 16s ease-in-out infinite;
        }

        /* GRID TEXTURE */
        .td-root::before {
          content: '';
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* FLOATING ORBS */
        .td-orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .td-orb-1 {
          width: 520px; height: 520px; top: -180px; left: -160px; z-index: 1;
          background: radial-gradient(circle at 40% 40%, rgba(99,102,241,0.14) 0%, transparent 65%);
          animation: td-orb-drift 12s ease-in-out infinite; filter: blur(2px);
        }
        .td-orb-2 {
          width: 440px; height: 440px; bottom: -120px; right: -120px; z-index: 1;
          background: radial-gradient(circle at 60% 60%, rgba(59,130,246,0.12) 0%, transparent 65%);
          animation: td-orb-drift2 15s ease-in-out infinite; filter: blur(2px);
        }
        .td-orb-3 {
          width: 260px; height: 260px; top: 38%; left: 44%; z-index: 1;
          background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%);
          animation: td-orb-drift 10s ease-in-out infinite reverse;
        }

        /* SCAN LINE */
        .td-scanline {
          position: absolute; left: 0; right: 0; height: 2px; z-index: 3;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(99,102,241,0.25) 35%,
            rgba(255,255,255,0.8) 50%,
            rgba(99,102,241,0.25) 65%,
            transparent 100%
          );
          animation: td-scan 11s linear infinite;
          pointer-events: none;
        }

        /* TOP + BOTTOM LINES */
        .td-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 2px; z-index: 4;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.4) 25%,
            rgba(59,130,246,0.8) 50%,
            rgba(99,102,241,0.4) 75%,
            transparent
          );
          box-shadow: 0 0 16px rgba(99,102,241,0.3);
        }

        .td-bottomline {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px; z-index: 4;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.2) 30%,
            rgba(59,130,246,0.4) 50%,
            rgba(99,102,241,0.2) 70%,
            transparent
          );
        }

        /* ── HEADING ── */
        .td-head {
          text-align: center;
          margin-bottom: 52px;
          position: relative; z-index: 10;
          padding: 0 24px;
          animation: td-slide-up 0.7s ease both;
        }

        .td-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.22);
          border-radius: 100px; padding: 6px 18px 6px 12px;
          margin-bottom: 18px;
          backdrop-filter: blur(8px);
        }

        .td-eye-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #6366f1; flex-shrink: 0;
          animation: td-dot-pulse 2s ease-in-out infinite;
        }

        .td-eye-txt {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          background: linear-gradient(90deg, #6366f1 0%, #3b82f6 50%, #6366f1 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: td-shimmer-txt 3s linear infinite;
        }

        .td-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(38px, 4.5vw, 54px);
          font-weight: 400; color: #0f172a;
          letter-spacing: -1.5px; line-height: 1.1;
          margin-bottom: 12px;
        }

        .td-title em {
          font-style: italic;
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 16px rgba(99,102,241,0.3));
        }

        .td-sub {
          font-size: 15px; font-weight: 300; color: #64748b;
          max-width: 380px; margin: 0 auto; line-height: 1.75;
        }

        /* ── GLASS STAT CARDS ── */
        .td-stats {
          display: flex; justify-content: center; gap: 14px;
          margin-bottom: 52px; flex-wrap: wrap; padding: 0 24px;
          position: relative; z-index: 10;
        }

        .td-stat-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 18px; padding: 14px 22px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08), 0 0 0 1px rgba(255,255,255,0.7);
          transition: all 0.3s ease; cursor: default;
        }

        .td-stat-card:nth-child(1) { animation: td-card-in 0.5s 0.15s ease both, td-float-stat-a 5s 1s ease-in-out infinite; }
        .td-stat-card:nth-child(2) { animation: td-card-in 0.5s 0.28s ease both, td-float-stat-b 6s 1.2s ease-in-out infinite; }
        .td-stat-card:nth-child(3) { animation: td-card-in 0.5s 0.41s ease both, td-float-stat-a 4.5s 1.4s ease-in-out infinite; }

        .td-stat-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 48px rgba(99,102,241,0.15), 0 0 0 1.5px rgba(99,102,241,0.25);
        }

        .td-stat-icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 19px; flex-shrink: 0;
        }

        .td-stat-icon.a {
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.1));
          box-shadow: 0 4px 12px rgba(99,102,241,0.15);
        }
        .td-stat-icon.b {
          background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,182,212,0.1));
          box-shadow: 0 4px 12px rgba(59,130,246,0.15);
        }
        .td-stat-icon.c {
          background: linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.1));
          box-shadow: 0 4px 12px rgba(16,185,129,0.15);
        }

        .td-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; color: #0f172a; line-height: 1; letter-spacing: -0.5px;
        }
        .td-stat-num span { color: #6366f1; }
        .td-stat-lbl { font-size: 11px; color: #94a3b8; margin-top: 2px; font-weight: 300; }

        /* ── DOCTOR GRID ── */
        .td-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding: 0 28px;
          position: relative; z-index: 10;
        }

        /* ── DOCTOR CARD ── */
        .td-card {
          border-radius: 22px; overflow: hidden; cursor: pointer;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px rgba(99,102,241,0.07), inset 0 1px 0 rgba(255,255,255,0.8);
          transition: all 0.4s cubic-bezier(0.25,0.8,0.25,1);
          position: relative;
        }

        .td-card:nth-child(1)  { animation: td-card-in 0.5s 0.05s ease both; }
        .td-card:nth-child(2)  { animation: td-card-in 0.5s 0.10s ease both; }
        .td-card:nth-child(3)  { animation: td-card-in 0.5s 0.15s ease both; }
        .td-card:nth-child(4)  { animation: td-card-in 0.5s 0.20s ease both; }
        .td-card:nth-child(5)  { animation: td-card-in 0.5s 0.25s ease both; }
        .td-card:nth-child(6)  { animation: td-card-in 0.5s 0.30s ease both; }
        .td-card:nth-child(7)  { animation: td-card-in 0.5s 0.35s ease both; }
        .td-card:nth-child(8)  { animation: td-card-in 0.5s 0.40s ease both; }
        .td-card:nth-child(9)  { animation: td-card-in 0.5s 0.45s ease both; }
        .td-card:nth-child(10) { animation: td-card-in 0.5s 0.50s ease both; }

        /* shimmer sweep on hover */
        .td-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          pointer-events: none; z-index: 5;
        }
        .td-card:hover::before { animation: td-shine-sweep 0.55s ease forwards; }

        /* gradient overlay */
        .td-card::after {
          content: ''; position: absolute; inset: 0; z-index: 4;
          background: linear-gradient(160deg, rgba(99,102,241,0.04), rgba(59,130,246,0.03));
          opacity: 0; transition: opacity 0.3s; border-radius: inherit; pointer-events: none;
        }
        .td-card:hover::after { opacity: 1; }

        .td-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 60px rgba(99,102,241,0.18), 0 0 0 1.5px rgba(99,102,241,0.3);
          background: rgba(255,255,255,0.97);
        }

        /* IMAGE */
        .td-img-wrap {
          height: 186px;
          overflow: hidden; position: relative;
          background: linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%);
        }

        .td-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.45s ease;
        }
        .td-card:hover .td-img-wrap img { transform: scale(1.06); }

        /* image gradient overlay */
        .td-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.08) 100%);
          pointer-events: none;
        }

        /* AVAILABILITY BADGE */
        .td-avail {
          position: absolute; top: 10px; right: 10px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(8px);
          border-radius: 100px; padding: 4px 10px;
          font-size: 10px; font-weight: 600;
          display: flex; align-items: center; gap: 5px;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          color: #334155; z-index: 3;
        }

        .td-avail-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .dot-on  { background: #10b981; animation: td-avail-pulse 2s ease-in-out infinite; }
        .dot-off { background: #cbd5e1; }

        /* INFO */
        .td-info { padding: 15px 16px 16px; position: relative; z-index: 3; }

        .td-spec {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #c4b5fd; margin-bottom: 4px;
        }

        .td-name {
          font-family: 'DM Serif Display', serif;
          font-size: 15px; font-weight: 400; color: #0f172a;
          line-height: 1.2; margin-bottom: 12px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        .td-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(99,102,241,0.08);
        }

        .td-stars { font-size: 10px; color: #f59e0b; letter-spacing: 1px; }

        .td-badge {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.08));
          color: #6366f1;
          padding: 3px 9px; border-radius: 100px;
          border: 1px solid rgba(99,102,241,0.18);
        }

        /* BOOK BTN — appears on hover */
        .td-book-btn {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          width: 100%; margin-top: 10px; padding: 9px;
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
          color: #fff; border: none; border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          cursor: pointer;
          opacity: 0; transform: translateY(6px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          position: relative; overflow: hidden; z-index: 3;
        }
        .td-card:hover .td-book-btn { opacity: 1; transform: translateY(0); }

        .td-book-btn::before {
          content: '';
          position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: td-btn-shine 3s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── MORE BUTTON ── */
        .td-more-wrap { text-align: center; margin-top: 48px; position: relative; z-index: 10; }

        .td-more-btn {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(99,102,241,0.3);
          color: #6366f1;
          border-radius: 100px; padding: 14px 44px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.2px;
          box-shadow: 0 4px 20px rgba(99,102,241,0.1);
        }

        .td-more-btn::before {
          content: '';
          position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent);
          animation: td-btn-shine 4s ease-in-out infinite;
          pointer-events: none;
        }

        .td-more-btn:hover {
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: #fff; border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.35);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .td-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 900px) {
          .td-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 0 20px; }
        }
        @media (max-width: 640px) {
          .td-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 0 16px; }
          .td-title { font-size: 34px; }
          .td-root { padding: 60px 0; }
          .td-stats { gap: 10px; padding: 0 16px; }
        }
      `}</style>

      <div className="td-root">
        {/* depth layers */}
        <div className="td-orb td-orb-1" />
        <div className="td-orb td-orb-2" />
        <div className="td-orb td-orb-3" />
        <div className="td-scanline" />
        <div className="td-topline" />
        <div className="td-bottomline" />

        {/* HEADING */}
        <div className="td-head">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <div className="td-eyebrow">
              <span className="td-eye-dot" />
              <span className="td-eye-txt">Hand-picked for you</span>
            </div>
          </div>
          <h2 className="td-title">Top <em>Doctors</em> to Book</h2>
          <p className="td-sub">Verified, board-certified specialists ready to see you today.</p>
        </div>

        {/* GLASS STAT CARDS */}
        <div className="td-stats">
          <div className="td-stat-card">
            <div className="td-stat-icon a">🩺</div>
            <div>
              <div className="td-stat-num">100<span>+</span></div>
              <div className="td-stat-lbl">Top Doctors</div>
            </div>
          </div>
          <div className="td-stat-card">
            <div className="td-stat-icon b">📅</div>
            <div>
              <div className="td-stat-num">50K<span>+</span></div>
              <div className="td-stat-lbl">Appointments</div>
            </div>
          </div>
          <div className="td-stat-card">
            <div className="td-stat-icon c">⭐</div>
            <div>
              <div className="td-stat-num">4.9<span>/5</span></div>
              <div className="td-stat-lbl">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* DOCTOR GRID */}
        <div className="td-grid">
          {doctors.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="td-card"
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            >
              <div className="td-img-wrap">
                <img src={item.image} alt={item.name} />
                <div className="td-img-overlay" />
                <div className="td-avail">
                  <span className={`td-avail-dot ${item.available ? 'dot-on' : 'dot-off'}`} />
                  {item.available ? 'Available' : 'Busy'}
                </div>
              </div>
              <div className="td-info">
                <div className="td-spec">{item.speciality}</div>
                <div className="td-name">{item.name}</div>
                <div className="td-footer">
                  <div className="td-stars">★★★★★</div>
                  <div className="td-badge">{item.available ? 'Top Rated' : 'Verified'}</div>
                </div>
                <button className="td-book-btn">
                  Book Appointment →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MORE BUTTON */}
        <div className="td-more-wrap">
          <button
            className="td-more-btn"
            onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          >
            View All Doctors →
          </button>
        </div>
      </div>
    </>
  )
}

export default TopDoctors