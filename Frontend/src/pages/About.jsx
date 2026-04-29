import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  const features = [
    {
      title: 'Efficiency',
      emoji: '⚡',
      desc: 'Streamlined appointment scheduling that fits into your busy lifestyle — book in under 60 seconds.',
      accent: '#6366F1',
      accentLight: 'rgba(99,102,241,0.08)',
      accentBorder: 'rgba(99,102,241,0.2)',
    },
    {
      title: 'Convenience',
      emoji: '📍',
      desc: 'Access a network of trusted healthcare professionals in your area, available at your fingertips.',
      accent: '#3B82F6',
      accentLight: 'rgba(59,130,246,0.08)',
      accentBorder: 'rgba(59,130,246,0.2)',
    },
    {
      title: 'Personalization',
      emoji: '🎯',
      desc: 'Tailored recommendations and smart reminders to help you stay ahead of your health.',
      accent: '#06B6D4',
      accentLight: 'rgba(6,182,212,0.08)',
      accentBorder: 'rgba(6,182,212,0.2)',
    },
  ]

  const stats = [
    { num: '50K+', label: 'Patients Served' },
    { num: '1,200+', label: 'Verified Doctors' },
    { num: '98%', label: 'Satisfaction' },
    { num: '24/7', label: 'Available' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

        .ab { font-family: 'Plus Jakarta Sans', sans-serif; background: #F0F4FF; overflow-x: hidden; position: relative; }

        /* BG BLOBS */
        .ab-blob1 { position: fixed; pointer-events: none; z-index: 0; top: -180px; right: -180px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%); filter: blur(40px); }
        .ab-blob2 { position: fixed; pointer-events: none; z-index: 0; bottom: 200px; left: -120px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%); filter: blur(40px); }
        .ab-dots { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px); background-size: 32px 32px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); }

        .ab-z { position: relative; z-index: 1; }

        /* ── PILL ── */
        .ab-pill { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.22); border-radius: 100px; padding: 5px 16px; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 20px; }
        .ab-pdot { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; animation: abpulse 2s infinite; }
        @keyframes abpulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.4);} 50%{box-shadow:0 0 0 4px rgba(99,102,241,0.08);} }

        /* ── DIVIDER ── */
        .ab-divider { height: 1px; max-width: 1280px; margin: 0 auto; background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%); position: relative; }
        .ab-divider::after { content: ''; position: absolute; left: 48px; top: -2px; width: 60px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, #6366F1, #3B82F6); box-shadow: 0 0 12px rgba(99,102,241,0.4); }

        /* ══ HERO ══ */
        .ab-hero { padding: 22px 8px 20px; max-width: 1280px; margin: 0 auto; text-align: center; }
        .ab-h1 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 800; color: #0F172A; line-height: 1.1; letter-spacing: -2px; margin-bottom: 18px; }
        .ab-h1 em { font-style: italic; background: linear-gradient(135deg, #6366F1 0%, #3B82F6 60%, #06B6D4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-hero-sub { font-size: 15px; font-weight: 400; color: #94A3B8; max-width: 480px; margin: 0 auto 48px; line-height: 1.85; }

        /* Stats bar */
        .ab-stats { display: inline-flex; background: #fff; border: 1px solid rgba(99,102,241,0.12); border-radius: 22px; overflow: hidden; box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.04); }
        .ab-stat { padding: 20px 36px; border-right: 1px solid rgba(99,102,241,0.09); text-align: center; transition: background 0.25s; cursor: default; }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: rgba(99,102,241,0.04); }
        .ab-stat-num { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .ab-stat-lbl { font-size: 10px; font-weight: 600; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 5px; }

        /* ══ STORY ══ */
        .ab-story { max-width: 1280px; margin: 0 auto; padding: 80px 48px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 72px; align-items: center; }

        /* Image */
        .ab-img-outer { position: relative; }
        .ab-img-glow { position: absolute; inset: -24px; border-radius: 36px; background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08)); filter: blur(24px); pointer-events: none; }
        .ab-img-frame { position: relative; border-radius: 28px; overflow: hidden; box-shadow: 0 32px 72px rgba(99,102,241,0.14), 0 8px 24px rgba(0,0,0,0.06); border: 1.5px solid rgba(99,102,241,0.12); }
        .ab-img-frame img { width: 100%; display: block; object-fit: cover; height: 460px; }
        .ab-img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.35) 100%); pointer-events: none; }

        .ab-img-badge { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); border-radius: 16px; padding: 14px 18px; display: flex; align-items: center; gap: 14px; box-shadow: 0 12px 32px rgba(0,0,0,0.12); border: 1px solid rgba(99,102,241,0.1); }
        .ab-badge-icon { width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #6366F1, #3B82F6); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 6px 16px rgba(99,102,241,0.4); }
        .ab-badge-lbl { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: #94A3B8; text-transform: uppercase; margin-bottom: 2px; }
        .ab-badge-val { font-size: 14px; font-weight: 800; color: #0F172A; }

        .ab-img-accent { position: absolute; top: 24px; right: -22px; background: #fff; border: 1.5px solid rgba(99,102,241,0.18); border-radius: 18px; padding: 18px 22px; box-shadow: 0 16px 40px rgba(99,102,241,0.15), 0 2px 8px rgba(0,0,0,0.06); text-align: center; min-width: 110px; animation: abfloat 5s ease-in-out infinite alternate; }
        @keyframes abfloat { 0%{transform:translateY(0);} 100%{transform:translateY(-8px);} }
        .ab-accent-num { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .ab-accent-lbl { font-size: 9px; font-weight: 700; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }

        /* Text */
        .ab-section-lbl { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #6366F1; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .ab-section-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent); }
        .ab-h2 { font-family: 'Fraunces', serif; font-size: clamp(26px, 3vw, 38px); font-weight: 800; color: #0F172A; letter-spacing: -1px; line-height: 1.2; margin-bottom: 20px; }
        .ab-h2 span { background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-p { font-size: 14.5px; font-weight: 400; color: #64748B; line-height: 1.9; margin-bottom: 14px; }

        .ab-vision { margin-top: 28px; background: #fff; border: 1.5px solid rgba(99,102,241,0.15); border-radius: 20px; padding: 24px 26px; box-shadow: 0 4px 20px rgba(99,102,241,0.08), 0 1px 4px rgba(0,0,0,0.03); position: relative; overflow: hidden; }
        .ab-vision::before { content: ''; position: absolute; top: -40px; right: -40px; width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.1), transparent 65%); pointer-events: none; }
        .ab-vision-lbl { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .ab-vision-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent); }
        .ab-vision-text { font-size: 14px; font-weight: 400; color: #475569; line-height: 1.85; position: relative; z-index: 1; }

        /* ══ WHY ══ */
        .ab-why { background: #fff; border-top: 1px solid rgba(99,102,241,0.1); border-bottom: 1px solid rgba(99,102,241,0.1); padding: 80px 48px; position: relative; overflow: hidden; }
        .ab-why::before { content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 700px; height: 400px; background: radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%); pointer-events: none; }
        .ab-why-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
        .ab-why-hdr { margin-bottom: 48px; }
        .ab-why-h2 { font-family: 'Fraunces', serif; font-size: clamp(26px, 3.5vw, 40px); font-weight: 800; color: #0F172A; letter-spacing: -1px; line-height: 1.2; margin-bottom: 10px; }
        .ab-why-h2 em { font-style: italic; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-why-sub { font-size: 14px; font-weight: 400; color: #94A3B8; line-height: 1.8; max-width: 440px; }

        .ab-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        .ab-card { background: #F8FAFF; border: 1.5px solid rgba(99,102,241,0.1); border-radius: 22px; padding: 32px 28px; transition: all 0.35s cubic-bezier(0.22,1,0.36,1); cursor: default; position: relative; overflow: hidden; animation: abcardin 0.45s ease both; }
        @keyframes abcardin { from{opacity:0;transform:translateY(18px);} to{opacity:1;transform:translateY(0);} }
        .ab-card::before { content: ''; position: absolute; bottom: -40px; right: -40px; width: 140px; height: 140px; border-radius: 50%; background: var(--orb,rgba(99,102,241,0.06)); transition: transform 0.4s; pointer-events: none; }
        .ab-card:hover { transform: translateY(-7px); border-color: var(--bdr,rgba(99,102,241,0.3)); box-shadow: 0 20px 48px var(--sh,rgba(99,102,241,0.12)), 0 4px 12px rgba(0,0,0,0.04); background: #fff; }
        .ab-card:hover::before { transform: scale(1.4); }
        .ab-card:hover .ab-card-icon { box-shadow: 0 8px 24px var(--glow,rgba(99,102,241,0.3)); }
        .ab-card:hover .ab-card-ln { background: linear-gradient(90deg, var(--acc,#6366F1), transparent); box-shadow: 0 0 8px var(--glow,rgba(99,102,241,0.3)); }

        .ab-card-icon { width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 22px; transition: box-shadow 0.3s; position: relative; z-index: 1; }
        .ab-card-wm { position: absolute; top: 20px; right: 22px; font-family: 'Fraunces', serif; font-size: 64px; font-weight: 800; line-height: 1; color: rgba(99,102,241,0.05); user-select: none; pointer-events: none; transition: color 0.3s; }
        .ab-card:hover .ab-card-wm { color: var(--orb,rgba(99,102,241,0.08)); }
        .ab-card-tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; position: relative; z-index: 1; }
        .ab-card-title { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 700; color: #0F172A; letter-spacing: -0.4px; margin-bottom: 6px; position: relative; z-index: 1; }
        .ab-card-ln { height: 2px; border-radius: 2px; margin-bottom: 14px; background: #E2E8F0; transition: all 0.35s; width: 40px; }
        .ab-card-body { font-size: 13.5px; font-weight: 400; color: #64748B; line-height: 1.85; position: relative; z-index: 1; }

        /* ══ CTA ══ */
        .ab-cta-wrap { max-width: 1280px; margin: 0 auto; padding: 80px 48px; }
        .ab-cta { background: linear-gradient(135deg, #0F172A 0%, #1E2D4F 50%, #0F172A 100%); border-radius: 28px; padding: 56px 64px; display: flex; align-items: center; justify-content: space-between; gap: 40px; position: relative; overflow: hidden; border: 1px solid rgba(99,102,241,0.2); box-shadow: 0 32px 72px rgba(15,23,42,0.2); }
        .ab-cta::before { content: ''; position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%); pointer-events: none; }
        .ab-cta::after { content: ''; position: absolute; bottom: -80px; right: -80px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%); pointer-events: none; }
        .ab-cta-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }

        .ab-cta-left { position: relative; z-index: 1; }
        .ab-cta-pill { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); border-radius: 100px; padding: 5px 14px; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #818CF8; margin-bottom: 16px; }
        .ab-cta-h3 { font-family: 'Fraunces', serif; font-size: clamp(22px, 2.8vw, 34px); font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1.2; margin-bottom: 12px; }
        .ab-cta-h3 em { font-style: italic; background: linear-gradient(135deg, #818CF8, #60A5FA, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-cta-sub { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.5); line-height: 1.8; max-width: 400px; }
        .ab-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #6366F1, #3B82F6); color: #fff; border: none; border-radius: 12px; padding: 13px 24px; font-size: 13px; font-weight: 700; font-family: 'Plus Jakarta Sans', sans-serif; cursor: pointer; transition: all 0.25s; letter-spacing: 0.3px; box-shadow: 0 8px 24px rgba(99,102,241,0.4); margin-top: 24px; }
        .ab-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,0.55); }

        .ab-cta-stats { flex-shrink: 0; position: relative; z-index: 1; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 28px 32px; backdrop-filter: blur(8px); display: grid; grid-template-columns: 1fr 1fr; gap: 24px 36px; }
        .ab-cta-num { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 800; color: #fff; line-height: 1; }
        .ab-cta-lbl { font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.4); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .ab-hero, .ab-story, .ab-cta-wrap { padding-left: 32px; padding-right: 32px; }
          .ab-why { padding-left: 32px; padding-right: 32px; }
          .ab-story { gap: 48px; }
          .ab-img-accent { display: none; }
          .ab-cta { padding: 44px 40px; }
          .ab-divider::after { left: 32px; }
        }
        @media (max-width: 768px) {
          .ab-hero { padding: 44px 20px 52px; }
          .ab-story { grid-template-columns: 1fr; padding: 48px 20px; }
          .ab-why { padding: 52px 20px; }
          .ab-cards { grid-template-columns: 1fr; }
          .ab-cta-wrap { padding: 48px 20px; }
          .ab-cta { flex-direction: column; padding: 36px 28px; }
          .ab-cta-stats { width: 100%; }
          .ab-stats { flex-wrap: wrap; }
          .ab-stat { min-width: 50%; }
          .ab-divider::after { left: 20px; }
        }
      `}</style>

      <div className="ab">
        <div className="ab-blob1" /><div className="ab-blob2" /><div className="ab-dots" />

        <div className="ab-z">

          {/* ══ HERO ══ */}
          <section className="ab-hero">
            <div className="ab-pill"><span className="ab-pdot" />About Us</div>
            <h1 className="ab-h1">Care made <em>simpler,</em><br />faster, and more human.</h1>
            <p className="ab-hero-sub">Appointy helps people book healthcare appointments easily and manage their care journey with confidence.</p>
            <div className="ab-stats">
              {stats.map((s, i) => (
                <div key={i} className="ab-stat">
                  <div className="ab-stat-num">{s.num}</div>
                  <div className="ab-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="ab-divider" />

          {/* ══ STORY ══ */}
          <section className="ab-story">
            <div className="ab-img-outer">
              <div className="ab-img-glow" />
              <div className="ab-img-frame">
                <img src={assets.about_image} alt="About Appointy" />
                <div className="ab-img-overlay" />
              </div>
              <div className="ab-img-badge">
                <div className="ab-badge-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="ab-badge-lbl">Certified Platform</div>
                  <div className="ab-badge-val">HIPAA Compliant</div>
                </div>
              </div>
              <div className="ab-img-accent">
                <div className="ab-accent-num">12+</div>
                <div className="ab-accent-lbl">Years of<br />Excellence</div>
              </div>
            </div>

            <div>
              <div className="ab-section-lbl">Our Story <span className="ab-section-line" /></div>
              <h2 className="ab-h2">Built to improve the<br /><span>healthcare experience.</span></h2>
              <p className="ab-p">Welcome to Appointy — your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges people face when scheduling doctor appointments and keeping track of their health journey.</p>
              <p className="ab-p">We continuously improve the platform with modern tools, intuitive design, and a smoother experience for patients and providers alike. Whether booking your first appointment or managing ongoing care, Appointy supports every step.</p>
              <div className="ab-vision">
                <div className="ab-vision-lbl">Our Vision <span className="ab-vision-line" /></div>
                <p className="ab-vision-text">To create a seamless healthcare experience for every user — making access to care simpler, faster, and more reliable for millions of patients worldwide.</p>
              </div>
            </div>
          </section>

          {/* ══ WHY ══ */}
          <section className="ab-why">
            <div className="ab-why-inner">
              <div className="ab-why-hdr">
                <div className="ab-pill" style={{ marginBottom: 14 }}><span className="ab-pdot" />Why Choose Us</div>
                <h2 className="ab-why-h2">A better way to manage<br />your <em>health appointments.</em></h2>
                <p className="ab-why-sub">Everything we build is designed around one goal — putting you in control of your health.</p>
              </div>
              <div className="ab-cards">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="ab-card"
                    style={{
                      '--acc': f.accent,
                      '--bdr': f.accentBorder,
                      '--sh': f.accentLight,
                      '--glow': f.accentLight,
                      '--orb': f.accentLight,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className="ab-card-icon" style={{ background: f.accentLight, border: `1px solid ${f.accentBorder}`, fontSize: 24 }}>
                      {f.emoji}
                    </div>
                    <div className="ab-card-wm">0{i + 1}</div>
                    <div className="ab-card-tag" style={{ color: f.accent }}>{f.title}</div>
                    <div className="ab-card-title">{f.title}</div>
                    <div className="ab-card-ln" />
                    <p className="ab-card-body">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ CTA ══ */}
          <div className="ab-cta-wrap">
            <div className="ab-cta">
              <div className="ab-cta-grid" />
              <div className="ab-cta-left">
                <div className="ab-cta-pill"><span className="ab-pdot" style={{ background: '#818CF8', boxShadow: 'none' }} />Built for Patients</div>
                <h3 className="ab-cta-h3">Book smarter.<br /><em>Feel better.</em></h3>
                <p className="ab-cta-sub">Every part of the experience is designed to reduce friction, save time, and make healthcare access feel effortless.</p>
                <button className="ab-cta-btn">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book an Appointment
                </button>
              </div>
              <div className="ab-cta-stats">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="ab-cta-num">{s.num}</div>
                    <div className="ab-cta-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About