import React from 'react'
import { specialityData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes sm-orb-drift {
          0%,100% { transform:translate(0,0) scale(1); }
          33%      { transform:translate(25px,-18px) scale(1.06); }
          66%      { transform:translate(-18px,22px) scale(0.96); }
        }
        @keyframes sm-orb-drift2 {
          0%,100% { transform:translate(0,0) scale(1); }
          40%      { transform:translate(-30px,20px) scale(1.07); }
          75%      { transform:translate(18px,-14px) scale(0.95); }
        }
        @keyframes sm-grid-in {
          from { opacity:0; } to { opacity:0.035; }
        }
        @keyframes sm-shimmer-txt {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes sm-badge-pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(31,230,180,0); }
          50%     { box-shadow:0 0 22px 5px rgba(31,230,180,0.12); }
        }
        @keyframes sm-dot-pulse {
          0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(31,230,180,0.7); }
          50%     { opacity:.55; transform:scale(1.25); box-shadow:0 0 0 8px rgba(31,230,180,0); }
        }
        @keyframes sm-slide-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sm-card-in {
          from { opacity:0; transform:translateY(36px) scale(0.92); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes sm-scan-line {
          0%   { top:-3px; opacity:1; }
          88%  { opacity:0.4; }
          100% { top:104%; opacity:0; }
        }
        @keyframes sm-ring-rotate {
          from { transform:rotate(0deg); } to { transform:rotate(360deg); }
        }
        @keyframes sm-shine-sweep {
          0%       { left:-100%; }
          55%,100% { left:140%; }
        }
        @keyframes sm-float-bob {
          0%,100% { transform:translateY(0) rotate(-1deg); }
          50%     { transform:translateY(-8px) rotate(1deg); }
        }
        @keyframes sm-float-bob2 {
          0%,100% { transform:translateY(0) rotate(1deg); }
          50%     { transform:translateY(-6px) rotate(-1deg); }
        }

        /* ─── ROOT ─── */
        .sm-root {
          font-family:'DM Sans', sans-serif;
          position:relative;
          padding:30px 0 16px;
          overflow:hidden;
          isolation:isolate;
          background:
            radial-gradient(ellipse 60% 50% at 8% 15%,  rgba(31,173,150,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 55% 60% at 92% 85%,  rgba(59,130,246,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 70% 40% at 55% 50%,  rgba(201,168,76,0.05) 0%, transparent 70%),
            #EEF2FF;
          text-align:center;
        }

        .sm-grid {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:radial-gradient(circle, rgba(13,31,53,0.5) 1px, transparent 1px);
          background-size:28px 28px;
          animation:sm-grid-in 1.2s ease forwards;
        }

        .sm-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:1; }
        .sm-orb-1 {
          width:480px; height:480px; top:-190px; left:-140px;
          background:radial-gradient(circle at 40% 40%, rgba(31,173,150,0.18) 0%, rgba(31,173,150,0.06) 40%, transparent 70%);
          animation:sm-orb-drift 10s ease-in-out infinite; filter:blur(3px);
        }
        .sm-orb-2 {
          width:400px; height:400px; bottom:-130px; right:-100px;
          background:radial-gradient(circle at 60% 60%, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.07) 40%, transparent 70%);
          animation:sm-orb-drift2 13s ease-in-out infinite; filter:blur(3px);
        }
        .sm-orb-3 {
          width:220px; height:220px; top:40%; left:45%;
          background:radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          animation:sm-orb-drift 8s ease-in-out infinite reverse;
        }

        .sm-scanline {
          position:absolute; left:0; right:0; height:2px; z-index:2;
          background:linear-gradient(90deg, transparent 0%, rgba(31,230,180,0.45) 40%, rgba(255,255,255,0.7) 50%, rgba(31,230,180,0.45) 60%, transparent 100%);
          animation:sm-scan-line 7s linear infinite;
          pointer-events:none;
        }

        /* ─── HEADING ─── */
        .sm-head {
          position:relative; z-index:10; margin-bottom:2px;
          animation:sm-slide-up 0.7s ease both;
        }
        .sm-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid rgba(31,230,180,0.28);
          background:rgba(31,230,180,0.06);
          border-radius:100px; padding:6px 18px 6px 11px;
          margin-bottom:18px; backdrop-filter:blur(8px);
          animation:sm-badge-pulse 3.5s ease-in-out infinite;
        }
        .sm-eye-dot {
          width:8px; height:8px; border-radius:50%;
          background:#1FE6B4; flex-shrink:0;
          animation:sm-dot-pulse 2.2s ease-in-out infinite;
        }
        .sm-eye-txt {
          font-size:11px; font-weight:500; letter-spacing:2px; text-transform:uppercase;
          background:linear-gradient(90deg, #1FE6B4 0%, #60A5FA 50%, #1FE6B4 100%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:sm-shimmer-txt 3s linear infinite;
        }
        .sm-title {
          font-family:'Playfair Display', serif;
          font-size:50px; font-weight:800; color:#0D1F35;
          letter-spacing:-1.5px; line-height:1.1; margin-bottom:14px;
        }
        .sm-title em {
          font-style:italic;
          background:linear-gradient(135deg, #1FAD96 0%, #38BDF8 55%, #818CF8 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          filter:drop-shadow(0 0 18px rgba(31,173,150,0.3));
        }
        .sm-sub {
          font-size:15px; font-weight:300; color:#64748B;
          max-width:420px; margin:0 auto; line-height:1.75;
        }

        /* ─── GLASS STAT CARDS ─── */
        .sm-float-area {
          position:relative; z-index:10;
          display:flex; justify-content:center; gap:16px;
          margin-bottom:52px; flex-wrap:wrap;
          padding:0 24px;
        }
        .sm-fcard {
          background:rgba(255,255,255,0.78);
          backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.9);
          border-radius:20px; padding:16px 24px;
          display:flex; align-items:center; gap:12px;
          box-shadow:0 8px 32px rgba(13,31,53,0.08), 0 0 0 1px rgba(255,255,255,0.7);
          transition:all 0.35s ease;
          cursor:default;
        }
        .sm-fcard:nth-child(1) { animation:sm-card-in 0.6s 0.2s ease both, sm-float-bob 5s 1s ease-in-out infinite; }
        .sm-fcard:nth-child(2) { animation:sm-card-in 0.6s 0.35s ease both, sm-float-bob2 6s 1.2s ease-in-out infinite; }
        .sm-fcard:nth-child(3) { animation:sm-card-in 0.6s 0.5s ease both, sm-float-bob 4.5s 1.5s ease-in-out infinite; }
        .sm-fcard:hover {
          transform:translateY(-5px) !important;
          box-shadow:0 20px 48px rgba(31,173,150,0.2), 0 0 0 1.5px rgba(31,230,180,0.3);
        }
        .sm-fcard-icon {
          width:42px; height:42px; border-radius:13px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:21px;
        }
        .sm-fcard-icon.teal { background:linear-gradient(135deg,#E6FBF5,#C6F4E8); box-shadow:0 4px 12px rgba(31,173,150,0.22); }
        .sm-fcard-icon.blue { background:linear-gradient(135deg,#EFF6FF,#DBEAFE); box-shadow:0 4px 12px rgba(59,130,246,0.18); }
        .sm-fcard-icon.gold { background:linear-gradient(135deg,#FEF9EC,#FEF3C7); box-shadow:0 4px 12px rgba(201,168,76,0.2); }
        .sm-fcard-num {
          font-family:'Playfair Display', serif;
          font-size:22px; font-weight:800; color:#0D1F35; letter-spacing:-0.5px; line-height:1;
        }
        .sm-fcard-num span { color:#1FAD96; }
        .sm-fcard-lbl { font-size:11px; color:#94A3B8; margin-top:2px; font-weight:300; }

        /* ─── SPECIALITY CARDS ─── */
        .sm-scroll-wrap {
          display:flex; justify-content:center; gap:16px;
          padding:12px 32px 16px;
          overflow-x:auto;
          scrollbar-width:none; -ms-overflow-style:none;
          position:relative; z-index:10;
        }
        .sm-scroll-wrap::-webkit-scrollbar { display:none; }

        .sm-card {
          display:flex; flex-direction:column; align-items:center;
          gap:11px; cursor:pointer; flex-shrink:0;
          text-decoration:none;
          width:116px; padding:26px 16px 22px;
          border-radius:24px;
          background:rgba(255,255,255,0.82);
          border:1px solid rgba(255,255,255,0.95);
          backdrop-filter:blur(16px);
          box-shadow:0 4px 20px rgba(13,31,53,0.07), 0 0 0 1px rgba(255,255,255,0.7) inset;
          transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; overflow:hidden;
        }
        .sm-card::before {
          content:'';
          position:absolute; top:0; left:-100%; width:60%; height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          pointer-events:none;
        }
        .sm-card:hover::before { animation:sm-shine-sweep 0.55s ease forwards; }
        .sm-card::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(160deg, rgba(31,173,150,0.07), rgba(59,130,246,0.05));
          opacity:0; transition:opacity 0.3s; border-radius:inherit; pointer-events:none;
        }
        .sm-card:hover::after { opacity:1; }
        .sm-card:hover {
          transform:translateY(-13px) scale(1.05);
          box-shadow:0 28px 56px rgba(13,31,53,0.16), 0 0 0 1.5px rgba(31,173,150,0.4), 0 0 36px rgba(31,230,180,0.12);
          background:rgba(255,255,255,0.97);
        }

        .sm-card:nth-child(1)  { animation:sm-card-in 0.5s 0.04s ease both; }
        .sm-card:nth-child(2)  { animation:sm-card-in 0.5s 0.09s ease both; }
        .sm-card:nth-child(3)  { animation:sm-card-in 0.5s 0.14s ease both; }
        .sm-card:nth-child(4)  { animation:sm-card-in 0.5s 0.19s ease both; }
        .sm-card:nth-child(5)  { animation:sm-card-in 0.5s 0.24s ease both; }
        .sm-card:nth-child(6)  { animation:sm-card-in 0.5s 0.29s ease both; }
        .sm-card:nth-child(7)  { animation:sm-card-in 0.5s 0.34s ease both; }
        .sm-card:nth-child(8)  { animation:sm-card-in 0.5s 0.39s ease both; }
        .sm-card:nth-child(9)  { animation:sm-card-in 0.5s 0.44s ease both; }
        .sm-card:nth-child(10) { animation:sm-card-in 0.5s 0.49s ease both; }

        .sm-icon-wrap {
          width:62px; height:62px; border-radius:20px;
          background:linear-gradient(135deg,#EBF7F5 0%,#D8F0EC 100%);
          display:flex; align-items:center; justify-content:center;
          overflow:hidden; flex-shrink:0;
          transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative;
          box-shadow:0 4px 14px rgba(31,173,150,0.15);
        }
        .sm-icon-wrap::before {
          content:''; position:absolute; inset:-3px; border-radius:23px;
          border:1.5px solid rgba(31,173,150,0); transition:all 0.3s;
        }
        .sm-card:hover .sm-icon-wrap::before {
          border-color:rgba(31,173,150,0.5);
          animation:sm-ring-rotate 2s linear infinite;
          inset:-5px; border-radius:26px;
        }
        .sm-card:hover .sm-icon-wrap {
          background:linear-gradient(135deg,#C2EDE4,#A3E2D5);
          transform:scale(1.14) rotate(-4deg);
          box-shadow:0 10px 28px rgba(31,173,150,0.32);
        }
        .sm-icon-wrap img {
          width:40px; height:40px; object-fit:contain;
          transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; z-index:1;
        }
        .sm-card:hover .sm-icon-wrap img { transform:scale(1.18); }

        .sm-label {
          font-size:12px; font-weight:500;
          color:#334155; line-height:1.3; text-align:center;
          transition:color 0.3s; position:relative; z-index:1;
        }
        .sm-card:hover .sm-label { color:#0D1F35; font-weight:600; }

        .sm-indicator {
          width:6px; height:6px; border-radius:50%;
          background:#1FAD96; opacity:0; transform:scale(0);
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; z-index:1;
          box-shadow:0 0 8px rgba(31,173,150,0.6);
        }
        .sm-card:hover .sm-indicator { opacity:1; transform:scale(1); }

        /* ─── BOTTOM CTA ─── */
        .sm-bottom {
          position:relative; z-index:10;
          margin-top:56px;
          display:flex; flex-direction:column; align-items:center; gap:16px;
          animation:sm-slide-up 0.7s 0.5s ease both;
        }
        .sm-divider {
          display:flex; align-items:center; gap:16px; width:340px;
        }
        .sm-divider-line {
          flex:1; height:1px;
          background:linear-gradient(90deg, transparent, rgba(13,31,53,0.12), transparent);
        }
        .sm-divider-txt {
          font-size:11px; color:#94A3B8; font-weight:300; letter-spacing:1px; white-space:nowrap;
        }
        .sm-cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,#0D1F35 0%,#162B45 100%);
          color:#fff; border:none; border-radius:100px;
          padding:14px 32px; font-size:13px; font-weight:500;
          font-family:'DM Sans', sans-serif; cursor:pointer;
          transition:all 0.35s cubic-bezier(0.34,1.3,0.64,1);
          letter-spacing:0.3px; position:relative; overflow:hidden;
          box-shadow:0 8px 28px rgba(13,31,53,0.22);
          text-decoration:none;
        }
        .sm-cta-btn::before {
          content:''; position:absolute; top:0; left:-80%; width:60%; height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          animation:sm-shine-sweep 4s ease-in-out infinite; pointer-events:none;
        }
        .sm-cta-btn:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 16px 44px rgba(13,31,53,0.35); }
        .sm-cta-arrow {
          width:22px; height:22px; border-radius:50%;
          background:rgba(255,255,255,0.15);
          display:flex; align-items:center; justify-content:center;
          font-size:12px; transition:transform 0.3s;
        }
        .sm-cta-btn:hover .sm-cta-arrow { transform:translateX(4px); }

        @media (max-width:768px) {
          .sm-root { padding:64px 0 60px; }
          .sm-title { font-size:34px; }
          .sm-scroll-wrap { justify-content:flex-start; padding:12px 16px 16px; }
          .sm-float-area { gap:10px; padding:0 16px; }
          .sm-fcard { padding:12px 16px; }
          .sm-fcard-num { font-size:18px; }
        }
      `}</style>

      <div id="speciality" className="sm-root">
        <div className="sm-grid"></div>
        <div className="sm-orb sm-orb-1"></div>
        <div className="sm-orb sm-orb-2"></div>
        <div className="sm-orb sm-orb-3"></div>
        <div className="sm-scanline"></div>

        {/* HEADING */}
        <div className="sm-head">
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'10px' }}>
            <div className="sm-eyebrow">
              <span className="sm-eye-dot"></span>
              <span className="sm-eye-txt">Browse by category</span>
            </div>
          </div>
          <h2 className="sm-title">Find by <em>Speciality</em></h2>
          <p className="sm-sub">
            Explore our curated network of certified specialists —
            browse, compare, and schedule hassle-free.
          </p>
        </div>

        {/* GLASS STAT CARDS */}
        <div className="sm-float-area">
          <div className="sm-fcard">
            <div className="sm-fcard-icon teal">🩺</div>
            <div>
              <div className="sm-fcard-num">8<span>+</span></div>
              <div className="sm-fcard-lbl">Specialities</div>
            </div>
          </div>
          <div className="sm-fcard">
            <div className="sm-fcard-icon blue">👨‍⚕️</div>
            <div>
              <div className="sm-fcard-num">100<span>+</span></div>
              <div className="sm-fcard-lbl">Verified Doctors</div>
            </div>
          </div>
          <div className="sm-fcard">
            <div className="sm-fcard-icon gold">⭐</div>
            <div>
              <div className="sm-fcard-num">4.9<span>/5</span></div>
              <div className="sm-fcard-lbl">Avg. Rating</div>
            </div>
          </div>
        </div>

        {/* SPECIALITY CARDS */}
        <div className="sm-scroll-wrap">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="sm-card"
              key={index}
            >
              <div className="sm-icon-wrap">
                <img src={item.image} alt={item.speciality} />
              </div>
              <span className="sm-label">{item.speciality}</span>
              <span className="sm-indicator"></span>
            </Link>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="sm-bottom">
          <div className="sm-divider">
            <div className="sm-divider-line"></div>
            <span className="sm-divider-txt">Can't find your speciality?</span>
            <div className="sm-divider-line"></div>
          </div>
          <a href="https://medcare-main.vercel.app/doctors" className="sm-cta-btn">
            Browse all doctors
            <span className="sm-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default SpecialityMenu