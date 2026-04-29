import React, { useContext, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // ── SLIDER STATE ──
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoSlideRef = useRef(null)
  const CARDS_PER_VIEW = 5
  const totalDoctors = doctors.slice(0, 10)
  const maxIndex = totalDoctors.length - CARDS_PER_VIEW

  const startAutoSlide = () => {
    clearInterval(autoSlideRef.current)
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 2500)
  }

  useEffect(() => {
    startAutoSlide()
    return () => clearInterval(autoSlideRef.current)
  }, [maxIndex])

  const goTo = (index) => {
    setCurrentIndex(index)
    startAutoSlide()
  }

  const goPrev = () => {
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1)
  }

  const goNext = () => {
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

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

        /* ── ECG ANIMATIONS ── */
        @keyframes ecg-travel {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-travel-2 {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 0.7; }
          90%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-travel-3 {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 0.4; }
          90%  { opacity: 0.4; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-ripple {
          0%   { r: 3;  opacity: 0.8; }
          100% { r: 22; opacity: 0; }
        }
        @keyframes ecg-ripple2 {
          0%   { r: 2;  opacity: 0.6; }
          100% { r: 16; opacity: 0; }
        }
        @keyframes hb-pulse {
          0%,100% { transform: scale(1);   opacity: 0.18; }
          15%     { transform: scale(1.22); opacity: 0.32; }
          30%     { transform: scale(0.96); opacity: 0.18; }
          45%     { transform: scale(1.12); opacity: 0.26; }
          60%     { transform: scale(1);   opacity: 0.18; }
        }
        @keyframes hb-pulse-2 {
          0%,100% { transform: scale(1);   opacity: 0.12; }
          15%     { transform: scale(1.18); opacity: 0.22; }
          30%     { transform: scale(0.97); opacity: 0.12; }
          45%     { transform: scale(1.09); opacity: 0.18; }
          60%     { transform: scale(1);   opacity: 0.12; }
        }
        @keyframes ecg-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ecg-scan-bar {
          0%   { left: -8%; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { left: 108%;  opacity: 0; }
        }

        /* ── ROOT ── */
        .td-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          padding: 30px 0 10px;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse 70% 60% at 5% 10%,  rgba(99,102,241,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 55% at 95% 90%,  rgba(59,130,246,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%,  rgba(139,92,246,0.06) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 80% 15%,  rgba(6,182,212,0.07)  0%, transparent 55%),
            radial-gradient(ellipse 45% 40% at 15% 85%,  rgba(16,185,129,0.05) 0%, transparent 55%),
            #f0f4ff;
          animation: td-mesh-breathe 16s ease-in-out infinite;
        }

        .td-root::before {
          content: '';
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── ECG CANVAS LAYER ── */
        .td-ecg-layer {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          overflow: hidden;
        }

        .td-ecg-svg {
          position: absolute; width: 100%; height: 100%;
          animation: ecg-fade-in 1.2s ease both;
        }

        .ecg-line-1 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel 7s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .ecg-line-2 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-2 7s cubic-bezier(0.4,0,0.6,1) 3.5s infinite;
        }
        .ecg-line-3 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-3 9s cubic-bezier(0.4,0,0.6,1) 1.5s infinite;
        }
        .ecg-line-4 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-2 9s cubic-bezier(0.4,0,0.6,1) 5s infinite;
        }
        .ecg-line-5 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-3 11s cubic-bezier(0.4,0,0.6,1) 2.8s infinite;
        }

        .ecg-ripple-1 { animation: ecg-ripple  1.4s ease-out 1.4s infinite; }
        .ecg-ripple-2 { animation: ecg-ripple2 1.4s ease-out 1.55s infinite; }
        .ecg-ripple-3 { animation: ecg-ripple  1.4s ease-out 4.9s infinite; }
        .ecg-ripple-4 { animation: ecg-ripple2 1.4s ease-out 5.05s infinite; }
        .ecg-ripple-5 { animation: ecg-ripple  1.4s ease-out 3.2s infinite; }
        .ecg-ripple-6 { animation: ecg-ripple2 1.4s ease-out 3.35s infinite; }

        .td-ecg-scanbar {
          position: absolute; top: 0; bottom: 0; width: 8px;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.18) 30%,
            rgba(255,255,255,0.55) 50%,
            rgba(99,102,241,0.18) 70%,
            transparent
          );
          animation: ecg-scan-bar 7s cubic-bezier(0.4,0,0.6,1) infinite;
          pointer-events: none;
        }
        .td-ecg-scanbar-2 {
          position: absolute; top: 0; bottom: 0; width: 8px;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.12) 30%,
            rgba(255,255,255,0.35) 50%,
            rgba(59,130,246,0.12) 70%,
            transparent
          );
          animation: ecg-scan-bar 9s cubic-bezier(0.4,0,0.6,1) 4s infinite;
          pointer-events: none;
        }

        .td-heart-bg {
          position: absolute; pointer-events: none;
          animation: hb-pulse 1.2s ease-in-out infinite;
        }
        .td-heart-bg-2 {
          position: absolute; pointer-events: none;
          animation: hb-pulse-2 1.2s ease-in-out 0.6s infinite;
        }

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
          margin-bottom: 22px;
          position: relative; z-index: 10;
          padding: 0 14px;
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

        /* ── SLIDER WRAPPER ── */
        .td-slider-outer {
          position: relative; z-index: 10;
          padding: 0 28px;
        }

        .td-slider-viewport {
          overflow: hidden;
          border-radius: 12px;
        }

        .td-slider-track {
          display: flex;
          gap: 20px;
          transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
          will-change: transform;
        }

        /* Each card in slider takes exactly 1/5 of viewport minus gaps */
        .td-slider-track .td-card {
          flex: 0 0 calc((100%) / 5 - 16px);
          min-width: 0;
        }

        /* Prev / Next arrow buttons */
        .td-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%; z-index: 20;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(99,102,241,0.25);
          box-shadow: 0 4px 16px rgba(99,102,241,0.15);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px; color: #6366f1;
          transition: all 0.25s ease;
        }
        .td-arrow:hover {
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: #fff; border-color: transparent;
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
        }
        .td-arrow-prev { left: 0; }
        .td-arrow-next { right: 0; }

        /* Dot indicators */
        .td-dots {
          display: flex; justify-content: center; gap: 8px;
          margin-top: 22px;
        }
        .td-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(99,102,241,0.2);
          border: none; cursor: pointer; padding: 0;
          transition: all 0.3s ease;
        }
        .td-dot.active {
          background: #6366f1;
          width: 22px; border-radius: 100px;
          box-shadow: 0 0 8px rgba(99,102,241,0.4);
        }

        /* ── DOCTOR CARD (unchanged) ── */
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

        .td-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          pointer-events: none; z-index: 5;
        }
        .td-card:hover::before { animation: td-shine-sweep 0.55s ease forwards; }

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

        .td-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.08) 100%);
          pointer-events: none;
        }

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
          .td-slider-track .td-card { flex: 0 0 calc(100% / 4 - 15px); }
        }
        @media (max-width: 900px) {
          .td-slider-track .td-card { flex: 0 0 calc(100% / 3 - 14px); }
          .td-slider-outer { padding: 0 20px; }
        }
        @media (max-width: 640px) {
          .td-slider-track .td-card { flex: 0 0 calc(100% / 2 - 12px); }
          .td-slider-outer { padding: 0 16px; }
          .td-title { font-size: 34px; }
          .td-root { padding: 60px 0; }
          .td-stats { gap: 10px; padding: 0 16px; }
        }
      `}</style>

      <div className="td-root">
        {/* ── ECG BACKGROUND LAYER ── */}
        <div className="td-ecg-layer">

          <svg className="td-heart-bg" style={{ width: 320, height: 320, top: '8%', left: '6%', opacity: 0.18 }} viewBox="0 0 100 100" fill="none">
            <path d="M50 85 C50 85 10 58 10 32 C10 20 20 12 32 16 C40 19 46 26 50 32 C54 26 60 19 68 16 C80 12 90 20 90 32 C90 58 50 85 50 85Z" fill="url(#hg1)" />
            <defs>
              <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="td-heart-bg-2" style={{ width: 200, height: 200, bottom: '10%', right: '8%', opacity: 0.12 }} viewBox="0 0 100 100" fill="none">
            <path d="M50 85 C50 85 10 58 10 32 C10 20 20 12 32 16 C40 19 46 26 50 32 C54 26 60 19 68 16 C80 12 90 20 90 32 C90 58 50 85 50 85Z" fill="url(#hg2)" />
            <defs>
              <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="td-ecg-scanbar" />
          <div className="td-ecg-scanbar-2" />

          <svg
            className="td-ecg-svg"
            viewBox="0 0 1400 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="ecg-glow-main" x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="ecg-glow-soft" x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="ecg-glow-strong" x="-30%" y="-150%" width="160%" height="400%">
                <feGaussianBlur stdDeviation="8" result="blur1" />
                <feGaussianBlur stdDeviation="2" result="blur2" in="SourceGraphic" />
                <feMerge><feMergeNode in="blur1" /><feMergeNode in="blur2" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              <linearGradient id="ecg-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(99,102,241,0)" />
                <stop offset="20%"  stopColor="rgba(99,102,241,0.7)" />
                <stop offset="50%"  stopColor="rgba(139,92,246,0.9)" />
                <stop offset="80%"  stopColor="rgba(59,130,246,0.7)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </linearGradient>
              <linearGradient id="ecg-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(59,130,246,0)" />
                <stop offset="25%"  stopColor="rgba(6,182,212,0.5)" />
                <stop offset="55%"  stopColor="rgba(59,130,246,0.7)" />
                <stop offset="85%"  stopColor="rgba(99,102,241,0.5)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0)" />
              </linearGradient>
              <linearGradient id="ecg-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(139,92,246,0)" />
                <stop offset="30%"  stopColor="rgba(99,102,241,0.35)" />
                <stop offset="60%"  stopColor="rgba(59,130,246,0.45)" />
                <stop offset="100%" stopColor="rgba(6,182,212,0)" />
              </linearGradient>
            </defs>

            <path
              className="ecg-line-1"
              d="
                M-200,200
                L80,200
                Q90,200 95,196 Q100,192 105,200
                L170,200
                Q175,200 178,188 Q181,176 184,200
                L200,200
                L210,120 L215,240 L220,165 L225,200
                L270,200
                Q280,200 285,188 Q290,176 295,200
                L360,200
                Q365,200 368,190 Q371,180 374,200
                L440,200
                L450,125 L455,245 L460,168 L465,200
                L520,200
                Q528,200 532,190 Q536,180 540,200
                L610,200
                Q618,200 622,192 Q626,184 630,200
                L700,200
                L710,122 L715,242 L720,166 L725,200
                L790,200
                Q797,200 801,190 Q805,180 809,200
                L880,200
                L890,126 L895,244 L900,168 L905,200
                L970,200
                Q977,200 981,190 Q985,180 989,200
                L1060,200
                L1070,120 L1075,242 L1080,165 L1085,200
                L1150,200
                Q1157,200 1161,190 Q1165,180 1169,200
                L1240,200
                L1250,124 L1255,244 L1260,167 L1265,200
                L1350,200
                L1600,200
              "
              fill="none"
              stroke="url(#ecg-grad-1)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#ecg-glow-main)"
            />

            <path
              className="ecg-line-1"
              d="
                M-200,200
                L80,200
                Q90,200 95,196 Q100,192 105,200
                L170,200
                Q175,200 178,188 Q181,176 184,200
                L200,200
                L210,120 L215,240 L220,165 L225,200
                L270,200
                Q280,200 285,188 Q290,176 295,200
                L360,200
                Q365,200 368,190 Q371,180 374,200
                L440,200
                L450,125 L455,245 L460,168 L465,200
                L520,200
                Q528,200 532,190 Q536,180 540,200
                L610,200
                Q618,200 622,192 Q626,184 630,200
                L700,200
                L710,122 L715,242 L720,166 L725,200
                L790,200
                Q797,200 801,190 Q805,180 809,200
                L880,200
                L890,126 L895,244 L900,168 L905,200
                L970,200
                Q977,200 981,190 Q985,180 989,200
                L1060,200
                L1070,120 L1075,242 L1080,165 L1085,200
                L1150,200
                Q1157,200 1161,190 Q1165,180 1169,200
                L1240,200
                L1250,124 L1255,244 L1260,167 L1265,200
                L1350,200
                L1600,200
              "
              fill="none"
              stroke="rgba(99,102,241,0.25)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#ecg-glow-strong)"
            />

            <circle className="ecg-ripple-1" cx="215" cy="200" r="3" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5" />
            <circle className="ecg-ripple-2" cx="215" cy="200" r="2" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />

            <path
              className="ecg-line-2"
              d="
                M-200,420
                L60,420
                Q68,420 72,412 Q76,404 80,420
                L150,420
                L160,345 L165,460 L170,380 L175,420
                L240,420
                Q248,420 252,410 Q256,400 260,420
                L330,420
                Q337,420 341,412 Q345,404 349,420
                L420,420
                L430,342 L435,462 L440,378 L445,420
                L510,420
                Q517,420 521,410 Q525,400 529,420
                L600,420
                L610,344 L615,462 L620,380 L625,420
                L695,420
                Q702,420 706,412 Q710,404 714,420
                L785,420
                L795,340 L800,462 L805,376 L810,420
                L880,420
                Q887,420 891,410 Q895,400 899,420
                L970,420
                L980,343 L985,462 L990,379 L995,420
                L1065,420
                Q1072,420 1076,412 Q1080,404 1084,420
                L1155,420
                L1165,342 L1170,462 L1175,378 L1180,420
                L1260,420
                L1600,420
              "
              fill="none"
              stroke="url(#ecg-grad-2)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#ecg-glow-soft)"
            />
            <path
              className="ecg-line-2"
              d="
                M-200,420
                L60,420
                Q68,420 72,412 Q76,404 80,420
                L150,420
                L160,345 L165,460 L170,380 L175,420
                L240,420
                Q248,420 252,410 Q256,400 260,420
                L330,420
                Q337,420 341,412 Q345,404 349,420
                L420,420
                L430,342 L435,462 L440,378 L445,420
                L510,420
                Q517,420 521,410 Q525,400 529,420
                L600,420
                L610,344 L615,462 L620,380 L625,420
                L695,420
                Q702,420 706,412 Q710,404 714,420
                L785,420
                L795,340 L800,462 L805,376 L810,420
                L880,420
                Q887,420 891,410 Q895,400 899,420
                L970,420
                L980,343 L985,462 L990,379 L995,420
                L1065,420
                Q1072,420 1076,412 Q1080,404 1084,420
                L1155,420
                L1165,342 L1170,462 L1175,378 L1180,420
                L1260,420
                L1600,420
              "
              fill="none"
              stroke="rgba(59,130,246,0.18)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#ecg-glow-strong)"
            />

            <circle className="ecg-ripple-3" cx="165" cy="420" r="3" fill="none" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" />
            <circle className="ecg-ripple-4" cx="165" cy="420" r="2" fill="none" stroke="rgba(6,182,212,0.35)" strokeWidth="1" />

            <path
              className="ecg-line-3"
              d="
                M-200,630
                L40,630
                Q47,630 51,622 Q55,614 59,630
                L130,630
                L140,560 L145,672 L150,592 L155,630
                L225,630
                Q232,630 236,620 Q240,610 244,630
                L315,630
                L325,558 L330,673 L335,590 L340,630
                L415,630
                Q422,630 426,620 Q430,610 434,630
                L510,630
                L520,556 L525,673 L530,590 L535,630
                L610,630
                Q617,630 621,620 Q625,610 629,630
                L705,630
                L715,558 L720,673 L725,592 L730,630
                L810,630
                Q817,630 821,620 Q825,610 829,630
                L905,630
                L915,557 L920,673 L925,591 L930,630
                L1010,630
                Q1017,630 1021,620 Q1025,610 1029,630
                L1110,630
                L1120,558 L1125,673 L1130,590 L1135,630
                L1230,630
                L1600,630
              "
              fill="none"
              stroke="url(#ecg-grad-3)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#ecg-glow-soft)"
            />

            <circle className="ecg-ripple-5" cx="145" cy="630" r="3" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
            <circle className="ecg-ripple-6" cx="145" cy="630" r="2" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />

            <line x1="0" y1="200" x2="1400" y2="200" stroke="rgba(99,102,241,0.06)" strokeWidth="1" strokeDasharray="4 8" />
            <line x1="0" y1="420" x2="1400" y2="420" stroke="rgba(59,130,246,0.05)" strokeWidth="1" strokeDasharray="4 8" />
            <line x1="0" y1="630" x2="1400" y2="630" stroke="rgba(139,92,246,0.04)" strokeWidth="1" strokeDasharray="4 8" />

          </svg>
        </div>

        {/* depth layers */}
        <div className="td-orb td-orb-1" />
        <div className="td-orb td-orb-2" />
        <div className="td-orb td-orb-3" />
        <div className="td-scanline" />
        <div className="td-topline" />
        <div className="td-bottomline" />

        {/* HEADING */}
        <div className="td-head">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <div className="td-eyebrow">
              <span className="td-eye-dot" />
              <span className="td-eye-txt">Hand-picked for you</span>
            </div>
          </div>
          <h2 className="td-title">Top <em>Doctors</em> to Book</h2>
          <p className="td-sub">Verified, board-certified specialists ready to see you today.</p>
        </div>

        {/* ── SLIDER ── */}
        <div className="td-slider-outer">
          {/* Prev Arrow */}
          <button className="td-arrow td-arrow-prev" onClick={goPrev}>‹</button>

          {/* Viewport */}
          <div className="td-slider-viewport">
            <div
              className="td-slider-track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / 5 + 4px)))`
              }}
            >
              {totalDoctors.map((item, index) => (
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
          </div>

          {/* Next Arrow */}
          <button className="td-arrow td-arrow-next" onClick={goNext}>›</button>
        </div>

        {/* Dot Indicators */}
        <div className="td-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`td-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
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