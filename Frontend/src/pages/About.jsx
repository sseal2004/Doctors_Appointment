import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()
  
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

        /* ═══════════════════════════════════
           ANIMATED ECG + HEART BACKGROUND
        ═══════════════════════════════════ */

        @keyframes ecg-march {
          0%   { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: -1200; }
        }
        @keyframes ecg-march2 {
          0%   { stroke-dashoffset: 900; }
          100% { stroke-dashoffset: -900; }
        }
        @keyframes ecg-march3 {
          0%   { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: -600; }
        }
        @keyframes heart-beat {
          0%,100% { transform:scale(1);   opacity:0.06; }
          14%      { transform:scale(1.12); opacity:0.12; }
          28%      { transform:scale(1);   opacity:0.06; }
          42%      { transform:scale(1.08); opacity:0.1; }
          56%      { transform:scale(1);   opacity:0.06; }
        }
        @keyframes heart-beat2 {
          0%,100% { transform:scale(1);   opacity:0.04; }
          20%      { transform:scale(1.1); opacity:0.09; }
          40%      { transform:scale(1);   opacity:0.04; }
          60%      { transform:scale(1.07); opacity:0.07; }
          80%      { transform:scale(1);   opacity:0.04; }
        }
        @keyframes heart-float {
          0%,100% { transform:translateY(0) rotate(-10deg) scale(1); }
          50%      { transform:translateY(-14px) rotate(-10deg) scale(1.05); }
        }
        @keyframes heart-float2 {
          0%,100% { transform:translateY(0) rotate(15deg) scale(1); }
          50%      { transform:translateY(-10px) rotate(15deg) scale(1.06); }
        }
        @keyframes heart-float3 {
          0%,100% { transform:translateY(0) rotate(-5deg) scale(1); }
          50%      { transform:translateY(-18px) rotate(-5deg) scale(1.04); }
        }
        @keyframes ecg-glow-pulse {
          0%,100% { opacity:0.22; filter:drop-shadow(0 0 4px rgba(99,102,241,0.3)); }
          50%      { opacity:0.5;  filter:drop-shadow(0 0 12px rgba(99,102,241,0.6)); }
        }
        @keyframes ecg-glow-pulse2 {
          0%,100% { opacity:0.15; filter:drop-shadow(0 0 3px rgba(59,130,246,0.25)); }
          50%      { opacity:0.35; filter:drop-shadow(0 0 10px rgba(59,130,246,0.5)); }
        }
        @keyframes cross-spin {
          0%   { transform:rotate(0deg) scale(1);   opacity:0.07; }
          50%  { transform:rotate(180deg) scale(1.1); opacity:0.12; }
          100% { transform:rotate(360deg) scale(1);   opacity:0.07; }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(0.7); opacity:0.35; }
          100% { transform:scale(2.2); opacity:0; }
        }

        /* Fixed full-page bg canvas */
        .ab-bg-canvas {
          position:fixed; inset:0; z-index:0; pointer-events:none; overflow:hidden;
        }

        /* ECG SVG lines */
        .ab-ecg-svg {
          position:absolute; width:100%; height:100%;
        }

        /* Heart shapes */
        .ab-heart {
          position:absolute; pointer-events:none;
          animation: heart-float 6s ease-in-out infinite;
        }
        .ab-heart svg { display:block; }
        .ab-heart-1 { top:8%; left:6%;  width:90px;  animation-duration:7s; }
        .ab-heart-2 { top:18%; right:5%; width:60px; animation:heart-float2 5s ease-in-out infinite; }
        .ab-heart-3 { bottom:30%; left:3%; width:50px; animation:heart-float3 8s ease-in-out infinite; }
        .ab-heart-4 { bottom:15%; right:8%; width:80px; animation:heart-float 9s ease-in-out infinite reverse; }
        .ab-heart-5 { top:50%; left:50%; width:40px; opacity:0.04; animation:heart-float2 6s 2s ease-in-out infinite; }

        /* Medical cross */
        .ab-cross {
          position:absolute; pointer-events:none;
          animation:cross-spin 20s linear infinite;
        }
        .ab-cross-1 { top:35%; right:3%;  width:40px; }
        .ab-cross-2 { bottom:45%; left:2%; width:28px; animation-duration:28s; animation-direction:reverse; }

        /* Pulse rings */
        .ab-pulse-ring {
          position:absolute; border-radius:50%; pointer-events:none;
          border:1.5px solid rgba(99,102,241,0.3);
          animation:pulse-ring 3.5s ease-out infinite;
        }
        .ab-pr-1 { width:120px; height:120px; top:12%; left:8%; margin:-60px 0 0 -60px; }
        .ab-pr-2 { width:80px;  height:80px;  bottom:25%; right:6%; margin:-40px 0 0 -40px; animation-delay:1.2s; border-color:rgba(59,130,246,0.25); }
        .ab-pr-3 { width:60px;  height:60px;  top:55%; left:45%; margin:-30px 0 0 -30px; animation-delay:2.1s; border-color:rgba(6,182,212,0.2); }

        /* ─────────────────── */

        .ab { font-family: 'Plus Jakarta Sans', sans-serif; background: #F0F4FF; overflow-x: hidden; position: relative; }

        .ab-blob1 { position: fixed; pointer-events: none; z-index: 0; top: -180px; right: -180px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%); filter: blur(40px); }
        .ab-blob2 { position: fixed; pointer-events: none; z-index: 0; bottom: 200px; left: -120px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%); filter: blur(40px); }
        .ab-dots { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px); background-size: 32px 32px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); }

        .ab-z { position: relative; z-index: 1; }

        .ab-pill { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.22); border-radius: 100px; padding: 5px 16px; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 20px; }
        .ab-pdot { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; animation: abpulse 2s infinite; }
        @keyframes abpulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.4);} 50%{box-shadow:0 0 0 4px rgba(99,102,241,0.08);} }

        .ab-divider { height: 1px; max-width: 1280px; margin: 0 auto; background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%); position: relative; }
        .ab-divider::after { content: ''; position: absolute; left: 48px; top: -2px; width: 60px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, #6366F1, #3B82F6); box-shadow: 0 0 12px rgba(99,102,241,0.4); }

        .ab-hero { padding: 22px 8px 20px; max-width: 1280px; margin: 0 auto; text-align: center; }
        .ab-h1 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 800; color: #0F172A; line-height: 1.1; letter-spacing: -2px; margin-bottom: 18px; }
        .ab-h1 em { font-style: italic; background: linear-gradient(135deg, #6366F1 0%, #3B82F6 60%, #06B6D4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-hero-sub { font-size: 15px; font-weight: 400; color: #94A3B8; max-width: 480px; margin: 0 auto 48px; line-height: 1.85; }

        .ab-stats { display: inline-flex; background: #fff; border: 1px solid rgba(99,102,241,0.12); border-radius: 22px; overflow: hidden; box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.04); }
        .ab-stat { padding: 20px 36px; border-right: 1px solid rgba(99,102,241,0.09); text-align: center; transition: background 0.25s; cursor: default; }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: rgba(99,102,241,0.04); }
        .ab-stat-num { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .ab-stat-lbl { font-size: 10px; font-weight: 600; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 5px; }

        .ab-story { max-width: 1280px; margin: 0 auto; padding: 80px 48px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 72px; align-items: center; }

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

        .ab-cta-wrap { max-width: 1280px; margin: 0 auto; padding: 80px 48px; }
        .ab-cta { background: linear-gradient(135deg, #0F172A 0%, #1E2D4F 50%, #0F172A 100%); border-radius: 28px; padding: 56px 64px; display: flex; align-items: center; justify-content: space-between; gap: 40px; position: relative; overflow: hidden; border: 1px solid rgba(99,102,241,0.2); box-shadow: 0 32px 72px rgba(15,23,42,0.2); }
        .ab-cta::before { content: ''; position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%); pointer-events: none; }
        .ab-cta::after { content: ''; position: absolute; bottom: -80px; right: -80px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%); pointer-events: none; }
        .ab-cta-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }

        /* ECG line inside CTA banner */
        .ab-cta-ecg {
          position:absolute; inset:0; z-index:0; pointer-events:none; overflow:hidden;
        }
        .ab-cta-ecg svg {
          position:absolute; bottom:0; left:0; width:100%; opacity:0.12;
        }

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
          .ab-heart-1 { width:60px; } .ab-heart-4 { width:55px; }
          .ab-heart-2,.ab-heart-3 { display:none; }
        }
      `}</style>

      <div className="ab">
        <div className="ab-blob1" /><div className="ab-blob2" /><div className="ab-dots" />

        {/* ═══════ ANIMATED ECG + HEART BG ═══════ */}
        <div className="ab-bg-canvas" aria-hidden="true">

          {/* Full-page ECG SVG lines */}
          <svg className="ab-ecg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {/* Line 1 — main ECG across mid-page */}
            <path
              d="M-80,450 L120,450 L150,450 L160,390 L170,510 L180,330 L195,570 L210,450 L240,450 L280,450 L290,420 L300,480 L310,450 L400,450 L420,450 L430,410 L440,490 L450,360 L468,540 L482,450 L520,450 L560,450 L570,430 L580,470 L590,450 L680,450 L700,450 L710,395 L720,505 L730,340 L748,560 L762,450 L800,450 L840,450 L850,425 L860,475 L870,450 L960,450 L980,450 L990,405 L1000,495 L1010,355 L1028,545 L1042,450 L1080,450 L1120,450 L1130,435 L1140,465 L1150,450 L1240,450 L1260,450 L1270,400 L1280,500 L1290,345 L1308,555 L1322,450 L1440,450 L1520,450"
              fill="none"
              stroke="url(#ecg-grad1)"
              strokeWidth="1.8"
              strokeDasharray="1200"
              strokeDashoffset="1200"
              style={{ animation:'ecg-march 5s linear infinite', animationTimingFunction:'linear' }}
            />
            {/* Line 2 — secondary ECG top area */}
            <path
              d="M-80,180 L160,180 L170,180 L178,148 L186,212 L192,120 L202,240 L210,180 L260,180 L280,180 L288,162 L296,198 L304,180 L400,180 L420,180 L428,150 L436,210 L442,125 L454,235 L462,180 L520,180 L580,180 L588,165 L596,195 L604,180 L700,180 L720,180 L728,152 L736,208 L742,128 L754,232 L762,180 L840,180 L900,180 L908,168 L916,192 L924,180 L1000,180 L1040,180 L1048,148 L1056,212 L1062,118 L1074,242 L1082,180 L1160,180 L1220,180 L1228,166 L1236,194 L1244,180 L1360,180 L1440,180 L1520,180"
              fill="none"
              stroke="url(#ecg-grad2)"
              strokeWidth="1.4"
              strokeDasharray="900"
              strokeDashoffset="900"
              style={{ animation:'ecg-march2 7s linear infinite 1s' }}
            />
            {/* Line 3 — tertiary ECG bottom */}
            <path
              d="M-80,720 L200,720 L210,720 L218,696 L226,744 L232,672 L242,768 L250,720 L320,720 L360,720 L368,705 L376,735 L384,720 L480,720 L520,720 L528,697 L536,743 L542,670 L554,770 L562,720 L640,720 L720,720 L728,707 L736,733 L744,720 L840,720 L880,720 L888,694 L896,746 L902,668 L914,772 L922,720 L1000,720 L1080,720 L1088,708 L1096,732 L1104,720 L1200,720 L1240,720 L1248,695 L1256,745 L1262,669 L1274,771 L1282,720 L1440,720 L1520,720"
              fill="none"
              stroke="url(#ecg-grad3)"
              strokeWidth="1.2"
              strokeDasharray="600"
              strokeDashoffset="600"
              style={{ animation:'ecg-march3 9s linear infinite 2.5s' }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="ecg-grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
                <stop offset="20%" stopColor="#6366F1" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ecg-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
                <stop offset="30%" stopColor="#6366F1" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ecg-grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="30%" stopColor="#06B6D4" stopOpacity="0.28" />
                <stop offset="70%" stopColor="#6366F1" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating large heart 1 */}
          <div className="ab-heart ab-heart-1">
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" style={{animation:'heart-beat 1.2s ease-in-out infinite'}}>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="url(#hg1)" opacity="0.09"/>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.25"/>
              <defs>
                <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating heart 2 */}
          <div className="ab-heart ab-heart-2">
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" style={{animation:'heart-beat2 0.9s ease-in-out infinite 0.3s'}}>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="#3B82F6" opacity="0.07"/>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="none" stroke="#3B82F6" strokeWidth="1.2" opacity="0.2"/>
            </svg>
          </div>

          {/* Floating heart 3 */}
          <div className="ab-heart ab-heart-3">
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="none" stroke="#06B6D4" strokeWidth="1.5" opacity="0.2"/>
            </svg>
          </div>

          {/* Floating heart 4 */}
          <div className="ab-heart ab-heart-4">
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" style={{animation:'heart-beat 1.4s ease-in-out infinite 0.6s'}}>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="url(#hg4)" opacity="0.08"/>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="none" stroke="#6366F1" strokeWidth="1.2" opacity="0.22"/>
              <defs>
                <linearGradient id="hg4" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4"/>
                  <stop offset="100%" stopColor="#6366F1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ghost heart 5 */}
          <div className="ab-heart ab-heart-5">
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z"
                fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>

          {/* Medical crosses */}
          <div className="ab-cross ab-cross-1">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="2" width="10" height="36" rx="3" fill="#6366F1" opacity="0.12"/>
              <rect x="2" y="15" width="36" height="10" rx="3" fill="#6366F1" opacity="0.12"/>
            </svg>
          </div>
          <div className="ab-cross ab-cross-2">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="2" width="10" height="36" rx="3" fill="#3B82F6" opacity="0.1"/>
              <rect x="2" y="15" width="36" height="10" rx="3" fill="#3B82F6" opacity="0.1"/>
            </svg>
          </div>

          {/* Pulse rings */}
          <div className="ab-pulse-ring ab-pr-1"></div>
          <div className="ab-pulse-ring ab-pr-2"></div>
          <div className="ab-pulse-ring ab-pr-3"></div>

        </div>
        {/* ═══════ END BG ═══════ */}

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

              {/* ECG line inside CTA */}
              <div className="ab-cta-ecg">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0,60 L80,60 L100,60 L110,30 L120,90 L130,0 L145,120 L158,60 L220,60 L280,60 L290,40 L300,80 L310,60 L400,60 L430,60 L440,32 L450,88 L458,8 L472,112 L482,60 L560,60 L640,60 L650,42 L660,78 L670,60 L760,60 L800,60 L810,30 L820,90 L828,2 L842,118 L852,60 L940,60 L1020,60 L1030,44 L1040,76 L1050,60 L1140,60 L1200,60"
                    fill="none"
                    stroke="url(#cta-ecg-g)"
                    strokeWidth="2"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                    style={{ animation:'ecg-march3 4s linear infinite' }}
                  />
                  <defs>
                    <linearGradient id="cta-ecg-g" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818CF8" stopOpacity="0"/>
                      <stop offset="30%" stopColor="#818CF8" stopOpacity="1"/>
                      <stop offset="70%" stopColor="#60A5FA" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="ab-cta-left">
                <div className="ab-cta-pill"><span className="ab-pdot" style={{ background: '#818CF8', boxShadow: 'none' }} />Built for Patients</div>
                <h3 className="ab-cta-h3">Book smarter.<br /><em>Feel better.</em></h3>
                <p className="ab-cta-sub">Every part of the experience is designed to reduce friction, save time, and make healthcare access feel effortless.</p>
                <button className="ab-cta-btn" onClick={() => navigate('/doctors')}>
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