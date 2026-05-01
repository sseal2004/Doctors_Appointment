import React, { useContext, useState, useEffect, useRef } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)
  const [saving, setSaving] = useState(false)
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

  useEffect(() => {
    const handleMouse = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 20}px)`
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate(${(x - 0.5) * -20}px, ${(y - 0.5) * -28}px)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const updateUserProfileData = async () => {
    setSaving(true)
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      formData.append('social', JSON.stringify(userData.social)) // ✅ ADD THIS

      image && formData.append('image', image)
      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else { toast.error(data.message) }
    } catch (error) {
      toast.error(error.message)
    } finally { setSaving(false) }
  }

  if (!userData) return null

  // Left panel info cards (replacing stat pills)
  const infoCards = [
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: 'Account Status',
      value: 'Verified',
      accent: '#10B981',
      accentBg: 'rgba(16,185,129,0.15)',
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Member Since',
      value: userData.joiningYear || new Date(userData.createdAt).getFullYear(),
      accent: '#60A5FA',
      accentBg: 'rgba(59,130,246,0.15)',
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      label: 'Health Score',
      value: 'Excellent',
      accent: '#F472B6',
      accentBg: 'rgba(244,114,182,0.15)',
    },
  ]

  // Social platforms config
  const socialPlatforms = [
    {
      key: 'twitter',
      label: 'X (Twitter)',
      placeholder: '@username',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: '#fff',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      placeholder: 'linkedin.com/in/username',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0A66C2',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      placeholder: '@username',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      color: '#E1306C',
    },
    {
      key: 'github',
      label: 'GitHub',
      placeholder: 'github.com/username',
      icon: (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      color: '#fff',
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

        @keyframes mp-blob-morph  { 0%,100%{border-radius:60% 40% 70% 30%/45% 55% 45% 55%} 50%{border-radius:40% 60% 35% 65%/55% 40% 65% 45%} }
        @keyframes mp-blob-morph2 { 0%,100%{border-radius:40% 60% 55% 45%/55% 40% 60% 45%} 50%{border-radius:65% 35% 45% 55%/40% 65% 35% 60%} }
        @keyframes mp-float-ring  { 0%,100%{transform:rotate(0deg) scale(1);opacity:.25} 50%{transform:rotate(180deg) scale(1.08);opacity:.45} }
        @keyframes mp-float-ring2 { 0%,100%{transform:rotate(0deg) scale(1);opacity:.15} 50%{transform:rotate(-180deg) scale(1.12);opacity:.3} }
        @keyframes mp-particle-float { 0%,100%{transform:translateY(0) rotate(0deg);opacity:.6} 50%{transform:translateY(-18px) rotate(180deg);opacity:1} }
        @keyframes mp-particle-float2 { 0%,100%{transform:translateY(0) scale(1);opacity:.4} 50%{transform:translateY(-22px) scale(1.3);opacity:.8} }
        @keyframes mp-scan { 0%{top:-2px;opacity:1} 88%{opacity:.25} 100%{top:104%;opacity:0} }
        @keyframes mp-fade-in { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mp-slide-left { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes mp-scale-in { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
        @keyframes mp-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes mp-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes mp-avatar-glow { 0%,100%{box-shadow:0 0 0 4px rgba(99,102,241,0.35),0 12px 40px rgba(99,102,241,0.25)} 50%{box-shadow:0 0 0 8px rgba(99,102,241,0.15),0 20px 56px rgba(99,102,241,0.4)} }
        @keyframes mp-line-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes mp-dot-breathe { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.6)} 50%{box-shadow:0 0 0 6px rgba(99,102,241,0)} }
        @keyframes mp-grid-pulse { 0%,100%{opacity:.06} 50%{opacity:.12} }
        @keyframes mp-input-appear { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mp-card-in { from{opacity:0;transform:translateY(14px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes mp-info-card-in { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }

        /* ── ROOT ── */
        .mp-root { font-family:'Plus Jakarta Sans',sans-serif;min-height:100vh;width:100%;position:relative;overflow:hidden;display:flex;align-items:stretch;background:#080E1A; }

        /* BG */
        .mp-bg { position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none; }
        .mp-bg-base { position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 12% 18%,rgba(99,102,241,0.22) 0%,transparent 55%),radial-gradient(ellipse 60% 55% at 90% 85%,rgba(59,130,246,0.18) 0%,transparent 55%),radial-gradient(ellipse 50% 50% at 55% 50%,rgba(139,92,246,0.10) 0%,transparent 60%),#080E1A; }
        .mp-bg-grid { position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px);background-size:52px 52px;animation:mp-grid-pulse 6s ease-in-out infinite; }
        .mp-blob { position:absolute;border-radius:60% 40% 70% 30%/45% 55% 45% 55%;transition:transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
        .mp-blob-1 { width:500px;height:500px;top:-130px;left:-110px;background:radial-gradient(circle at 40% 40%,rgba(99,102,241,0.28) 0%,rgba(139,92,246,0.18) 40%,transparent 70%);animation:mp-blob-morph 12s ease-in-out infinite;filter:blur(1px); }
        .mp-blob-2 { width:580px;height:580px;bottom:-170px;right:-130px;background:radial-gradient(circle at 60% 60%,rgba(59,130,246,0.24) 0%,rgba(6,182,212,0.16) 40%,transparent 70%);animation:mp-blob-morph2 15s ease-in-out infinite;filter:blur(1px); }
        .mp-ring { position:absolute;border-radius:50%; }
        .mp-ring-1 { width:380px;height:380px;top:-60px;right:80px;border:1px solid rgba(99,102,241,0.2);animation:mp-float-ring 14s ease-in-out infinite; }
        .mp-ring-2 { width:240px;height:240px;bottom:40px;left:60px;border:1px solid rgba(59,130,246,0.15);animation:mp-float-ring2 10s ease-in-out infinite; }
        .mp-particle { position:absolute;border-radius:50%; }
        .mp-p1{width:7px;height:7px;top:18%;left:22%;background:rgba(99,102,241,0.5);animation:mp-particle-float 4s ease-in-out infinite;}
        .mp-p2{width:5px;height:5px;top:65%;left:8%;background:rgba(59,130,246,0.45);animation:mp-particle-float2 5.5s ease-in-out 1s infinite;}
        .mp-p3{width:6px;height:6px;top:30%;right:10%;background:rgba(139,92,246,0.4);animation:mp-particle-float 6s ease-in-out .5s infinite;}
        .mp-p4{width:4px;height:4px;bottom:25%;right:22%;background:rgba(6,182,212,0.5);animation:mp-particle-float2 4.5s ease-in-out 2s infinite;}
        .mp-p5{width:8px;height:8px;bottom:40%;left:30%;background:rgba(16,185,129,0.4);animation:mp-particle-float 7s ease-in-out .8s infinite;}
        .mp-scan { position:absolute;left:0;right:0;height:2px;z-index:5;background:linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.3) 30%,rgba(255,255,255,0.7) 50%,rgba(99,102,241,0.3) 70%,transparent 100%);animation:mp-scan 9s linear infinite;pointer-events:none; }

        /* PAGE */
        .mp-page { position:relative;z-index:10;width:100%;display:grid;grid-template-columns:360px 1fr;min-height:100vh; }

        /* ══ LEFT — DARK ══ */
        .mp-left { position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:56px 32px;background:rgba(10,16,32,0.85);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-right:1px solid rgba(99,102,241,0.18);animation:mp-slide-left .7s ease both;overflow:hidden; }
        .mp-left::before { content:'';position:absolute;top:0;right:0;width:1px;height:100%;background:linear-gradient(to bottom,transparent,rgba(99,102,241,0.7) 30%,rgba(59,130,246,0.9) 50%,rgba(99,102,241,0.7) 70%,transparent);box-shadow:0 0 12px rgba(99,102,241,0.4); }
        .mp-left::after { content:'';position:absolute;top:-80px;left:-80px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%);pointer-events:none; }

        /* AVATAR */
        .mp-avatar-container { position:relative;margin-bottom:24px; }
        .mp-avatar-halo { position:absolute;inset:-14px;border-radius:50%;border:1px solid rgba(99,102,241,0.3);animation:mp-float-ring 6s ease-in-out infinite; }
        .mp-avatar-halo-2 { position:absolute;inset:-28px;border-radius:50%;border:1px dashed rgba(99,102,241,0.15);animation:mp-float-ring2 9s ease-in-out infinite; }
        .mp-avatar-img { width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid rgba(99,102,241,0.5);animation:mp-avatar-glow 4s ease-in-out infinite;display:block;position:relative;z-index:2;transition:all .3s ease; }
        .mp-avatar-edit-wrap { position:absolute;inset:0;z-index:3;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:rgba(99,102,241,0.7);backdrop-filter:blur(3px);opacity:0;transition:opacity .25s;cursor:pointer; }
        .mp-avatar-container:hover .mp-avatar-edit-wrap { opacity:1; }
        .mp-avatar-edit-lbl { font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff; }

        /* IDENTITY */
        .mp-identity { text-align:center;position:relative;z-index:2;width:100%; }
        .mp-identity-tag { display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.35);border-radius:100px;padding:4px 14px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#a5b4fc;margin-bottom:12px; }
        .mp-identity-tag-dot { width:5px;height:5px;border-radius:50%;background:#6366f1;animation:mp-dot-breathe 2s ease-in-out infinite; }
        .mp-identity-name-static { font-family:'Fraunces',serif;font-size:28px;font-weight:800;letter-spacing:-0.5px;line-height:1.1;margin-bottom:6px;animation:mp-fade-in .6s ease both; }
        .mp-shimmer-name { background:linear-gradient(90deg,#fff 0%,#a5b4fc 30%,#60a5fa 50%,#fff 70%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:mp-shimmer 5s linear infinite; }
        .mp-identity-name-input { font-family:'Fraunces',serif;font-size:24px;font-weight:800;color:#fff;letter-spacing:-0.5px;background:rgba(99,102,241,0.1);border:1.5px solid rgba(99,102,241,0.4);border-radius:12px;padding:6px 14px;width:100%;text-align:center;outline:none;transition:all .2s;animation:mp-input-appear .3s ease both; }
        .mp-identity-name-input:focus { border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,0.2);background:rgba(99,102,241,0.15); }
        .mp-identity-name-input::placeholder { color:#4f5a8a;font-weight:300; }
        .mp-identity-email { font-size:12px;color:#475569;font-weight:400;margin-top:4px; }

        .mp-left-divider { width:55%;height:1px;margin:20px auto;background:linear-gradient(90deg,transparent,rgba(99,102,241,0.4),transparent);transform-origin:left;animation:mp-line-grow .8s .5s ease both;position:relative;z-index:2; }

        /* ══ INFO CARDS (replacing stat pills) ══ */
        .mp-info-cards { display:flex;flex-direction:column;gap:10px;width:100%;position:relative;z-index:2; }

        .mp-info-card {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 13px 16px;
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          cursor: default; position: relative; overflow: hidden;
          animation: mp-info-card-in 0.4s ease both;
        }
        .mp-info-card::before { content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;background:var(--ic-accent,#6366f1);opacity:.7;transition:opacity .25s; }
        .mp-info-card:hover { background:rgba(255,255,255,0.07);border-color:rgba(255,255,255,0.12);transform:translateX(4px); }
        .mp-info-card:hover::before { opacity:1; }

        .mp-info-card-icon { width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--ic-accent,#6366f1); }
        .mp-info-card-text {}
        .mp-info-card-lbl { font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#475569;margin-bottom:3px; }
        .mp-info-card-val { font-size:14px;font-weight:700;color:#fff; }

        /* ══ RIGHT — LIGHT ══ */
        .mp-right { padding:56px 52px;display:flex;flex-direction:column;justify-content:center;animation:mp-fade-in .7s .1s ease both;overflow-y:auto;max-height:100vh;background:#F0F4FF;position:relative; }
        .mp-right::before { content:'';position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle,rgba(99,102,241,0.07) 1px,transparent 1px);background-size:28px 28px;mask-image:radial-gradient(ellipse 90% 90% at 60% 40%,black 40%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 90% 90% at 60% 40%,black 40%,transparent 100%); }
        .mp-right::after { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#6366f1 30%,#3b82f6 50%,#6366f1 70%,transparent);box-shadow:0 0 20px rgba(99,102,241,0.35); }
        .mp-right-inner { position:relative;z-index:1; }

        /* PAGE TITLE */
        .mp-page-title { font-family:'Fraunces',serif;font-size:42px;font-weight:800;color:#0F172A;letter-spacing:-1.5px;line-height:1.1;margin-bottom:6px; }
        .mp-page-title em { font-style:italic;background:linear-gradient(135deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .mp-page-sub { font-size:14px;font-weight:400;color:#64748B;margin-bottom:36px;line-height:1.7; }
        .mp-right-divider { height:1px;margin-bottom:36px;background:linear-gradient(90deg,rgba(99,102,241,0.35) 0%,rgba(59,130,246,0.15) 50%,transparent 100%);position:relative; }
        .mp-right-divider::after { content:'';position:absolute;left:0;top:-2px;width:56px;height:4px;border-radius:4px;background:linear-gradient(90deg,#6366f1,#3b82f6);box-shadow:0 0 12px rgba(99,102,241,0.45); }

        /* SECTIONS */
        .mp-section { margin-bottom:28px; }
        .mp-section-head { display:flex;align-items:center;gap:12px;margin-bottom:16px; }
        .mp-section-icon-wrap { width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#3b82f6);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;box-shadow:0 4px 12px rgba(99,102,241,0.35); }
        .mp-section-label { font-size:10px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#6366F1; }
        .mp-section-rule { flex:1;height:1px;background:linear-gradient(90deg,rgba(99,102,241,0.25),transparent);transform-origin:left;animation:mp-line-grow .6s ease both; }

        /* FIELD GRID */
        .mp-field-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
        .mp-field-box { background:#fff;border:1.5px solid rgba(99,102,241,0.1);border-radius:16px;padding:16px 18px;box-shadow:0 2px 12px rgba(99,102,241,0.05),0 1px 3px rgba(0,0,0,0.03);transition:all .28s cubic-bezier(0.22,1,0.36,1);animation:mp-card-in .45s ease both;position:relative;overflow:hidden; }
        .mp-field-box::before { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#6366f1,#3b82f6);opacity:0;transition:opacity .3s; }
        .mp-field-box:hover { border-color:rgba(99,102,241,0.28);box-shadow:0 10px 32px rgba(99,102,241,0.12),0 2px 8px rgba(0,0,0,0.04);transform:translateY(-3px); }
        .mp-field-box:hover::before { opacity:1; }
        .mp-field-box-label { font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#94A3B8;margin-bottom:7px; }
        .mp-field-box-value { font-size:14px;font-weight:600;color:#0F172A;line-height:1.5; }
        .mp-field-box-value.accent { background:linear-gradient(135deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700; }
        .mp-field-input { width:100%;background:transparent;border:none;border-bottom:1.5px solid rgba(99,102,241,0.3);border-radius:0;padding:4px 0;font-size:14px;font-weight:600;color:#0F172A;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color .2s;animation:mp-input-appear .3s ease both; }
        .mp-field-input:focus { border-bottom-color:#6366f1; }
        .mp-field-input::placeholder { color:#CBD5E1;font-weight:300; }
        select.mp-field-input { cursor:pointer; }

        /* ══ SOCIAL FIELDS ══ */
        .mp-social-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }

        .mp-social-box {
          background: #fff;
          border: 1.5px solid rgba(99,102,241,0.1);
          border-radius: 16px; padding: 14px 16px;
          box-shadow: 0 2px 12px rgba(99,102,241,0.04);
          transition: all .28s cubic-bezier(0.22,1,0.36,1);
          animation: mp-card-in .45s ease both;
          position: relative; overflow: hidden;
          display: flex; align-items: center; gap: 12px;
        }
        .mp-social-box:hover { border-color:rgba(99,102,241,0.25);transform:translateY(-2px);box-shadow:0 8px 24px rgba(99,102,241,0.1); }

        .mp-social-icon {
          width: 32px; height: 32px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #fff;
        }

        .mp-social-content { flex: 1; min-width: 0; }
        .mp-social-label { font-size:9px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:#94A3B8;margin-bottom:5px; }
        .mp-social-value { font-size:13px;font-weight:600;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .mp-social-value.empty { color:#CBD5E1;font-weight:300;font-size:12px; }

        /* social input */
        .mp-social-input { width:100%;background:transparent;border:none;border-bottom:1.5px solid rgba(99,102,241,0.25);padding:3px 0;font-size:13px;font-weight:500;color:#0F172A;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color .2s; }
        .mp-social-input:focus { border-bottom-color:#6366f1; }
        .mp-social-input::placeholder { color:#CBD5E1;font-weight:300; }

        /* ACTIONS */
        .mp-actions { display:flex;gap:12px;margin-top:8px;animation:mp-fade-in .5s .2s ease both; }
        .mp-btn-primary { position:relative;overflow:hidden;background:linear-gradient(135deg,#6366f1 0%,#3b82f6 100%);color:#fff;border:none;border-radius:14px;padding:14px 36px;font-size:14px;font-weight:700;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .3s;box-shadow:0 6px 22px rgba(99,102,241,0.4);display:flex;align-items:center;gap:8px;letter-spacing:.3px; }
        .mp-btn-primary::before { content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);transition:left .4s ease; }
        .mp-btn-primary:hover::before { left:100%; }
        .mp-btn-primary:hover { transform:translateY(-2px);box-shadow:0 12px 36px rgba(99,102,241,0.5); }
        .mp-btn-primary:disabled { opacity:.6;cursor:not-allowed;transform:none; }
        .mp-spinner { width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;animation:mp-spin .7s linear infinite; }
        .mp-btn-secondary { background:#fff;color:#6366f1;border:1.5px solid rgba(99,102,241,0.3);border-radius:14px;padding:14px 28px;font-size:14px;font-weight:700;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .25s;display:flex;align-items:center;gap:8px;box-shadow:0 2px 8px rgba(99,102,241,0.1); }
        .mp-btn-secondary:hover { background:linear-gradient(135deg,#6366f1,#3b82f6);color:#fff;border-color:transparent;transform:translateY(-2px);box-shadow:0 10px 32px rgba(99,102,241,0.38); }
        .mp-btn-ghost { background:transparent;color:#94A3B8;border:1.5px solid rgba(0,0,0,0.1);border-radius:14px;padding:14px 20px;font-size:13.5px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .2s; }
        .mp-btn-ghost:hover { color:#ef4444;border-color:rgba(239,68,68,0.25);background:rgba(239,68,68,0.05); }

        /* RESPONSIVE */
        @media (max-width:1024px) { .mp-page{grid-template-columns:300px 1fr} .mp-right{padding:48px 36px} }
        @media (max-width:768px) { .mp-page{grid-template-columns:1fr;grid-template-rows:auto 1fr} .mp-left{padding:40px 24px;border-right:none;border-bottom:1px solid rgba(99,102,241,0.15)} .mp-right{padding:32px 24px;max-height:none} .mp-field-grid,.mp-social-grid{grid-template-columns:1fr} .mp-page-title{font-size:32px} .mp-avatar-img{width:100px;height:100px} }
      `}</style>

      <div className="mp-root">
        <div className="mp-bg">
          <div className="mp-bg-base" />
          <div className="mp-bg-grid" />
          <div className="mp-blob mp-blob-1" ref={blob1Ref} />
          <div className="mp-blob mp-blob-2" ref={blob2Ref} />
          <div className="mp-ring mp-ring-1" />
          <div className="mp-ring mp-ring-2" />
          <div className="mp-particle mp-p1" />
          <div className="mp-particle mp-p2" />
          <div className="mp-particle mp-p3" />
          <div className="mp-particle mp-p4" />
          <div className="mp-particle mp-p5" />
          <div className="mp-scan" />
        </div>

        <div className="mp-page">

          {/* ══ LEFT PANEL ══ */}
          <div className="mp-left">
            <div className="mp-avatar-container">
              <div className="mp-avatar-halo-2" />
              <div className="mp-avatar-halo" />
              <label htmlFor="mp-img-input" style={{ cursor: isEdit ? 'pointer' : 'default', display: 'block', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                <img className="mp-avatar-img" src={image ? URL.createObjectURL(image) : userData.image} alt={userData.name} />
                {isEdit && (
                  <div className="mp-avatar-edit-wrap">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="mp-avatar-edit-lbl">Change</span>
                  </div>
                )}
              </label>
              <input id="mp-img-input" type="file" hidden onChange={e => setImage(e.target.files[0])} />
            </div>

            <div className="mp-identity">
              <div className="mp-identity-tag">
                <span className="mp-identity-tag-dot" />
                Patient
              </div>
              {isEdit ? (
                <input className="mp-identity-name-input" type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} placeholder="Your name" />
              ) : (
                <div className="mp-identity-name-static mp-shimmer-name">{userData.name}</div>
              )}
              <div className="mp-identity-email">{userData.email}</div>
            </div>

            <div className="mp-left-divider" />

            {/* ── INFO CARDS (replacing stat pills) ── */}
            <div className="mp-info-cards">
              {infoCards.map((card, i) => (
                <div
                  key={i}
                  className="mp-info-card"
                  style={{ '--ic-accent': card.accent, animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="mp-info-card-icon"
                    style={{ background: card.accentBg }}
                  >
                    {card.icon}
                  </div>
                  <div className="mp-info-card-text">
                    <div className="mp-info-card-lbl">{card.label}</div>
                    <div className="mp-info-card-val" style={{ color: card.accent }}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="mp-right">
            <div className="mp-right-inner">
              <div className="mp-page-title">
                {isEdit ? <>Edit your <em>Profile</em></> : <>Your <em>Profile</em></>}
              </div>
              <p className="mp-page-sub">
                {isEdit ? 'Update your personal information and save changes.' : 'Manage your personal details, contact info, and preferences.'}
              </p>
              <div className="mp-right-divider" />

              {/* CONTACT */}
              <div className="mp-section">
                <div className="mp-section-head">
                  <div className="mp-section-icon-wrap">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="mp-section-label">Contact Information</span>
                  <div className="mp-section-rule" />
                </div>
                <div className="mp-field-grid">
                  <div className="mp-field-box" style={{ animationDelay: '0.05s' }}>
                    <div className="mp-field-box-label">Email</div>
                    <div className="mp-field-box-value accent">{userData.email}</div>
                  </div>
                  <div className="mp-field-box" style={{ animationDelay: '0.1s' }}>
                    <div className="mp-field-box-label">Phone</div>
                    {isEdit ? (
                      <input className="mp-field-input" type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" />
                    ) : (
                      <div className="mp-field-box-value accent">{userData.phone || '—'}</div>
                    )}
                  </div>
                  <div className="mp-field-box" style={{ animationDelay: '0.15s' }}>
                    <div className="mp-field-box-label">Address Line 1</div>
                    {isEdit ? (
                      <input className="mp-field-input" type="text" value={userData.address?.line1 || ''} onChange={e => setUserData(prev => ({ ...prev, address: { ...(prev.address || {}), line1: e.target.value } }))} placeholder="Street / Building" />
                    ) : (
                      <div className="mp-field-box-value">{userData.address?.line1 || '—'}</div>
                    )}
                  </div>
                  <div className="mp-field-box" style={{ animationDelay: '0.2s' }}>
                    <div className="mp-field-box-label">Address Line 2</div>
                    {isEdit ? (
                      <input className="mp-field-input" type="text" value={userData.address?.line2 || ''} onChange={e => setUserData(prev => ({ ...prev, address: { ...(prev.address || {}), line2: e.target.value } }))} placeholder="City / State / PIN" />
                    ) : (
                      <div className="mp-field-box-value">{userData.address?.line2 || '—'}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* BASIC INFO */}
              <div className="mp-section">
                <div className="mp-section-head">
                  <div className="mp-section-icon-wrap">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="mp-section-label">Basic Information</span>
                  <div className="mp-section-rule" />
                </div>
                <div className="mp-field-grid">
                  <div className="mp-field-box" style={{ animationDelay: '0.25s' }}>
                    <div className="mp-field-box-label">Gender</div>
                    {isEdit ? (
                      <select className="mp-field-input" value={userData.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                        <option value="Not Selected">Not Selected</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : (
                      <div className="mp-field-box-value">{userData.gender || '—'}</div>
                    )}
                  </div>
                  <div className="mp-field-box" style={{ animationDelay: '0.3s' }}>
                    <div className="mp-field-box-label">Date of Birth</div>
                    {isEdit ? (
                      <input className="mp-field-input" type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                    ) : (
                      <div className="mp-field-box-value">{userData.dob || '—'}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* ══ SOCIAL MEDIA SECTION ══ */}
              <div className="mp-section">
                <div className="mp-section-head">
                  <div className="mp-section-icon-wrap">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="mp-section-label">Social Accounts</span>
                  <div className="mp-section-rule" />
                </div>

                <div className="mp-social-grid">
                  {socialPlatforms.map((platform, i) => {
                    const currentVal = userData.social?.[platform.key] || ''
                    return (
                      <div
                        key={platform.key}
                        className="mp-social-box"
                        style={{ animationDelay: `${0.35 + i * 0.07}s` }}
                      >
                        {/* Platform icon */}
                        <div
                          className="mp-social-icon"
                          style={{
                            background: platform.key === 'instagram'
                              ? 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)'
                              : platform.key === 'linkedin'
                              ? '#0A66C2'
                              : platform.key === 'github'
                              ? '#1a1a2e'
                              : '#1a1a2e',
                          }}
                        >
                          {platform.icon}
                        </div>

                        <div className="mp-social-content">
                          <div className="mp-social-label">{platform.label}</div>
                          {isEdit ? (
                            <input
                              className="mp-social-input"
                              type="text"
                              value={currentVal}
                              placeholder={platform.placeholder}
                              onChange={e => setUserData(prev => ({
                                ...prev,
                                social: { ...(prev.social || {}), [platform.key]: e.target.value }
                              }))}
                            />
                          ) : (
                            <div className={`mp-social-value${!currentVal ? ' empty' : ''}`}>
                              {currentVal || 'Not connected'}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mp-actions">
                {isEdit ? (
                  <>
                    <button className="mp-btn-primary" onClick={updateUserProfileData} disabled={saving}>
                      {saving ? (
                        <><div className="mp-spinner" />Saving…</>
                      ) : (
                        <><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Save Changes</>
                      )}
                    </button>
                    <button className="mp-btn-ghost" onClick={() => { setIsEdit(false); setImage(false) }}>Cancel</button>
                  </>
                ) : (
                  <button className="mp-btn-secondary" onClick={() => setIsEdit(true)}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile

