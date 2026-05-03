import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from './components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {
  const { docId } = useParams()
  const navigate = useNavigate()
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [booking, setBooking] = useState(false)

  const fetchDocInfo = async () => {
    const doc = doctors.find((doc) => doc._id === docId)
    if (doc) setDocInfo({ ...doc, slots_booked: doc.slots_booked || {} })
  }

  const getAvailableSlots = () => {
    if (!docInfo) return
    setDocSlots([])
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      const endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      const timeSlots = []
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        const slotDate = `${day}_${month}_${year}`
        const isSlotAvailable = !docInfo?.slots_booked?.[slotDate] || !docInfo.slots_booked[slotDate].includes(formattedTime)
        if (isSlotAvailable) timeSlots.push({ datetime: new Date(currentDate), time: formattedTime })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  const bookAppointment = async () => {
    if (!token) { toast.warning('Login to book appointment'); return navigate('/login') }
    const date = docSlots[slotIndex][0].datetime
    const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`
    setBooking(true)
    try {
      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
      if (data.success) { toast.success(data.message); getDoctorsData(); navigate('/my-appointments') }
      else toast.error(data.message)
    } catch (error) { console.log(error); toast.error(error.message) }
    setBooking(false)
  }

  useEffect(() => { if (doctors.length > 0) fetchDocInfo() }, [doctors, docId])
  useEffect(() => { if (docInfo) getAvailableSlots() }, [docInfo])

  return docInfo && (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');

        /* ════════════════════════════
           KEYFRAMES
        ════════════════════════════ */
        @keyframes ap-fade-up   { from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ap-fade-left { from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:translateX(0)} }
        @keyframes ap-fade-right{ from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:translateX(0)} }

        /* Morphing blobs */
        @keyframes ap-blob-1 {
          0%,100%{ border-radius:60% 40% 70% 30%/50% 60% 40% 70%; transform:translate(0,0) rotate(0deg) scale(1); }
          25%    { border-radius:40% 60% 30% 70%/60% 40% 70% 50%; transform:translate(20px,-30px) rotate(45deg) scale(1.08); }
          50%    { border-radius:70% 30% 50% 50%/40% 70% 60% 40%; transform:translate(-15px,20px) rotate(90deg) scale(0.95); }
          75%    { border-radius:30% 70% 60% 40%/70% 30% 50% 60%; transform:translate(25px,10px) rotate(135deg) scale(1.04); }
        }
        @keyframes ap-blob-2 {
          0%,100%{ border-radius:50% 50% 70% 30%/60% 40% 60% 40%; transform:translate(0,0) rotate(0deg) scale(1); }
          33%    { border-radius:70% 30% 40% 60%/30% 70% 50% 50%; transform:translate(-25px,18px) rotate(-60deg) scale(1.06); }
          66%    { border-radius:30% 70% 60% 40%/70% 30% 40% 60%; transform:translate(18px,-22px) rotate(-120deg) scale(0.96); }
        }
        @keyframes ap-blob-3 {
          0%,100%{ border-radius:40% 60% 50% 50%/50% 40% 60% 50%; transform:translate(0,0) rotate(0deg); }
          50%    { border-radius:60% 40% 40% 60%/40% 60% 40% 60%; transform:translate(14px,-16px) rotate(180deg); }
        }

        /* Rings */
        @keyframes ap-ring-a {
          0%,100%{ transform:translateY(0) rotate(0deg) scale(1); opacity:.35; }
          50%    { transform:translateY(-28px) rotate(180deg) scale(1.08); opacity:.6; }
        }
        @keyframes ap-ring-b {
          0%,100%{ transform:translateY(0) rotate(0deg); opacity:.22; }
          50%    { transform:translateY(22px) rotate(-180deg); opacity:.48; }
        }

        /* Crosses / diamonds */
        @keyframes ap-cross-float {
          0%,100%{ transform:translate(0,0) rotate(0deg); opacity:.3; }
          50%    { transform:translate(12px,-20px) rotate(180deg); opacity:.65; }
        }
        @keyframes ap-diamond-bob {
          0%,100%{ transform:translateY(0) rotate(45deg); opacity:.3; }
          50%    { transform:translateY(-18px) rotate(45deg); opacity:.6; }
        }
        @keyframes ap-square-spin {
          0%  { transform:rotate(0deg) scale(1); opacity:.25; }
          50% { transform:rotate(90deg) scale(1.12); opacity:.48; }
          100%{ transform:rotate(180deg) scale(1); opacity:.25; }
        }
        @keyframes ap-triangle-drift {
          0%,100%{ transform:translateX(0) rotate(0deg); opacity:.2; }
          50%    { transform:translateX(20px) rotate(60deg); opacity:.48; }
        }

        /* Tiny dots rising */
        @keyframes ap-dot-rise { 0%{transform:translateY(0) scale(1);opacity:.75} 100%{transform:translateY(-110px) scale(.25);opacity:0} }

        /* Helix pulse */
        @keyframes ap-helix {
          0%{ transform:translateY(0) scaleX(1); opacity:.4; }
          25%{ transform:translateY(-8px) scaleX(1.18); opacity:.75; }
          50%{ transform:translateY(-16px) scaleX(.82); opacity:.4; }
          75%{ transform:translateY(-8px) scaleX(1.18); opacity:.75; }
          100%{ transform:translateY(0) scaleX(1); opacity:.4; }
        }

        /* Wave sweep */
        @keyframes ap-wave-sweep { 0%{transform:translateX(-50%)} 100%{transform:translateX(0%)} }

        /* UI animations */
        @keyframes ap-shimmer { 0%{background-position:-400% center}100%{background-position:400% center} }
        @keyframes ap-badge-shine { 0%{left:-80%}55%,100%{left:130%} }
        @keyframes ap-pulse-ring {
          0%  { box-shadow:0 0 0 0 rgba(236,72,153,.55); }
          70% { box-shadow:0 0 0 14px rgba(236,72,153,0); }
          100%{ box-shadow:0 0 0 0 rgba(236,72,153,0); }
        }
        @keyframes ap-dot-blink { 0%,100%{opacity:1}50%{opacity:.3} }
        @keyframes ap-fee-float { 0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-6px) rotate(1deg)} }
        @keyframes ap-btn-glow {
          0%,100%{ box-shadow:0 8px 32px rgba(236,72,153,.35),0 0 60px rgba(168,85,247,.1); }
          50%    { box-shadow:0 14px 52px rgba(236,72,153,.55),0 0 80px rgba(168,85,247,.22); }
        }
        @keyframes ap-spinner { to{transform:rotate(360deg)} }
        @keyframes ap-slot-pop { from{opacity:0;transform:scale(.75) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes ap-img-ken { 0%,100%{transform:scale(1.05) translate(0,0)}50%{transform:scale(1.1) translate(-8px,-4px)} }
        @keyframes ap-tag-pop { from{opacity:0;transform:scale(.8) translateY(-8px)}to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes ap-stat-in { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }

        /* ════════════════════════════
           ROOT
        ════════════════════════════ */
        .ap-root {
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf4ff 0%, #fef3f8 25%, #f0f9ff 55%, #fdfcff 100%);
          position: relative;
          overflow: hidden;
          padding: 52px 28px 90px;
        }

        /* ════════════════════════════
           BACKGROUND SHAPES LAYER
        ════════════════════════════ */
        .ap-bg { position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden; }

        /* Dot grid */
        .ap-grid {
          position:absolute;inset:0;
          background-image:radial-gradient(circle, rgba(168,85,247,.07) 1px, transparent 1px);
          background-size:42px 42px;
        }

        /* Blobs */
        .ap-blob { position:absolute; }
        .ap-blob-1 {
          width:400px;height:400px;top:-100px;left:-110px;
          background:linear-gradient(135deg,rgba(236,72,153,.13),rgba(168,85,247,.10));
          animation:ap-blob-1 13s ease-in-out infinite;
        }
        .ap-blob-2 {
          width:340px;height:340px;bottom:40px;right:-90px;
          background:linear-gradient(135deg,rgba(99,102,241,.11),rgba(14,165,233,.09));
          animation:ap-blob-2 16s ease-in-out infinite;
        }
        .ap-blob-3 {
          width:230px;height:230px;top:42%;left:56%;
          background:linear-gradient(135deg,rgba(16,185,129,.09),rgba(6,182,212,.07));
          animation:ap-blob-3 11s ease-in-out infinite;
          filter:blur(2px);
        }

        /* Rings */
        .ap-ring { position:absolute;border-radius:50%;border-style:solid; }
        .ap-ring-1{ width:190px;height:190px;top:6%;right:10%; border:2px solid rgba(236,72,153,.18); animation:ap-ring-a 9s ease-in-out infinite; }
        .ap-ring-2{ width:115px;height:115px;top:8%;right:12%; border:1.5px solid rgba(168,85,247,.22); animation:ap-ring-a 9s ease-in-out infinite .6s; }
        .ap-ring-3{ width:270px;height:270px;bottom:12%;left:3%; border:1.5px solid rgba(99,102,241,.12); animation:ap-ring-b 12s ease-in-out infinite; }
        .ap-ring-4{ width:85px;height:85px;bottom:26%;left:62%; border:2px solid rgba(14,165,233,.18); animation:ap-ring-b 8s ease-in-out infinite 1s; }
        .ap-ring-5{ width:52px;height:52px;top:53%;left:7%; border:2px dashed rgba(236,72,153,.2); animation:ap-ring-a 7s ease-in-out infinite 2s; }

        /* Crosses */
        .ap-cross{ position:absolute;user-select:none;line-height:1; }
        .ap-cross-1{ top:19%;left:3%;font-size:22px;color:rgba(236,72,153,.32); animation:ap-cross-float 7s ease-in-out infinite; }
        .ap-cross-2{ top:68%;right:5%;font-size:16px;color:rgba(99,102,241,.28); animation:ap-cross-float 10s ease-in-out infinite 1.5s; }
        .ap-cross-3{ top:36%;right:1%;font-size:30px;color:rgba(168,85,247,.2); animation:ap-cross-float 6s ease-in-out infinite 3s; }

        /* Triangles */
        .ap-tri{ position:absolute; }
        .ap-tri-1{ top:12%;left:40%; animation:ap-triangle-drift 9s ease-in-out infinite; }
        .ap-tri-2{ bottom:20%;right:22%; animation:ap-triangle-drift 7s ease-in-out infinite 2s; }

        /* Squares */
        .ap-sq{ position:absolute;border-radius:5px; }
        .ap-sq-1{ width:28px;height:28px;top:60%;left:46%; border:2px solid rgba(236,72,153,.25); animation:ap-square-spin 8s ease-in-out infinite; }
        .ap-sq-2{ width:18px;height:18px;top:27%;left:25%; border:2px solid rgba(168,85,247,.22); animation:ap-square-spin 6s ease-in-out infinite 1s; }
        .ap-sq-3{ width:22px;height:22px;bottom:33%;right:14%; border:2px solid rgba(14,165,233,.22); animation:ap-square-spin 10s ease-in-out infinite 2s; }

        /* Diamonds */
        .ap-diamond{ position:absolute;transform:rotate(45deg); }
        .ap-diamond-1{ width:20px;height:20px;top:46%;left:1%; background:rgba(236,72,153,.15); animation:ap-diamond-bob 5s ease-in-out infinite; }
        .ap-diamond-2{ width:14px;height:14px;top:17%;right:28%; background:rgba(168,85,247,.18); animation:ap-diamond-bob 7s ease-in-out infinite 1s; }
        .ap-diamond-3{ width:12px;height:12px;bottom:17%;left:33%; background:rgba(14,165,233,.2); animation:ap-diamond-bob 6s ease-in-out infinite 2s; }

        /* Floating dots */
        .ap-fdot{ position:absolute;border-radius:50%; }
        .ap-fdot-1{ width:8px;height:8px;background:rgba(236,72,153,.42);top:28%;left:14%; animation:ap-dot-rise 4.2s ease-in-out infinite; }
        .ap-fdot-2{ width:5px;height:5px;background:rgba(168,85,247,.38);top:53%;left:21%; animation:ap-dot-rise 5.8s ease-in-out infinite 1s; }
        .ap-fdot-3{ width:6px;height:6px;background:rgba(14,165,233,.42);top:73%;right:18%; animation:ap-dot-rise 4s ease-in-out infinite .5s; }
        .ap-fdot-4{ width:4px;height:4px;background:rgba(16,185,129,.42);top:38%;right:33%; animation:ap-dot-rise 4.7s ease-in-out infinite 2s; }
        .ap-fdot-5{ width:7px;height:7px;background:rgba(236,72,153,.28);bottom:28%;left:48%; animation:ap-dot-rise 6.2s ease-in-out infinite 1.5s; }

        /* Helix dots row */
        .ap-helix-row{ position:absolute;top:2%;left:50%;transform:translateX(-50%);display:flex;gap:11px;align-items:center; }
        .ap-helix-dot{ border-radius:50%;animation:ap-helix 2.2s ease-in-out infinite; }

        /* Wave sweep at bottom */
        .ap-wave-wrap{ position:absolute;bottom:16%;left:0;width:200%;height:36px;opacity:.11; animation:ap-wave-sweep 16s linear infinite; }

        /* ════════════════════════════
           INNER
        ════════════════════════════ */
        .ap-inner{ position:relative;z-index:5;max-width:1100px;margin:0 auto; }

        /* HERO GRID */
        .ap-hero{
          display:grid;
          grid-template-columns:300px 1fr;
          gap:42px;align-items:start;
          margin-bottom:60px;
        }

        /* Image card */
        .ap-img-card{
          position:relative;border-radius:32px;overflow:hidden;
          box-shadow:0 24px 80px rgba(168,85,247,.18),0 0 0 1px rgba(236,72,153,.1);
          opacity:0;animation:ap-fade-left .7s .1s ease forwards;
          transition:transform .4s ease,box-shadow .4s ease;
          cursor:default;
        }
        .ap-img-card:hover{ transform:translateY(-8px) scale(1.015); box-shadow:0 40px 100px rgba(168,85,247,.28),0 0 0 1.5px rgba(236,72,153,.18); }
        .ap-img-card img{ width:100%;height:400px;object-fit:cover;object-position:top;display:block;animation:ap-img-ken 10s ease-in-out infinite; }
        .ap-img-overlay{ position:absolute;inset:0;background:linear-gradient(160deg,rgba(236,72,153,.04) 0%,transparent 40%,rgba(15,10,30,.48) 100%);pointer-events:none; }

        /* Image tags */
        .ap-img-tag{
          position:absolute;backdrop-filter:blur(14px);border-radius:100px;
          display:flex;align-items:center;gap:7px;
          font-size:11px;font-weight:600;
          box-shadow:0 4px 20px rgba(0,0,0,.1);padding:6px 14px;
          animation:ap-tag-pop .5s ease both;
        }
        .ap-tag-avail{ bottom:18px;left:14px;background:rgba(255,255,255,.9);border:1px solid rgba(16,185,129,.25);color:#059669;animation-delay:.6s; }
        .ap-tag-rating{ top:16px;right:14px;background:rgba(255,255,255,.88);border:1px solid rgba(245,158,11,.25);color:#d97706;animation-delay:.75s; }
        .ap-avail-dot{ width:7px;height:7px;border-radius:50%;background:#10b981;flex-shrink:0;animation:ap-dot-blink 2s ease-in-out infinite; }

        /* Info panel */
        .ap-info-panel{ opacity:0;animation:ap-fade-right .7s .22s ease forwards; }

        /* Speciality pill */
        .ap-spec-pill{
          display:inline-flex;align-items:center;gap:7px;
          background:linear-gradient(135deg,rgba(236,72,153,.1),rgba(168,85,247,.08));
          border:1px solid rgba(236,72,153,.2);border-radius:100px;padding:5px 16px;
          font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;
          color:#db2777;margin-bottom:18px;position:relative;overflow:hidden;
        }
        .ap-spec-pill::before{ content:'';position:absolute;top:0;left:-80%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(236,72,153,.18),transparent);animation:ap-badge-shine 3.5s ease-in-out infinite;pointer-events:none; }

        /* Name */
        .ap-name{
          font-family:'Playfair Display',serif;
          font-size:clamp(34px,3.8vw,50px);font-weight:500;color:#1e1b2e;
          line-height:1.05;letter-spacing:-1px;margin-bottom:8px;
        }
        .ap-name em{
          font-style:italic;
          background:linear-gradient(135deg,#ec4899 0%,#a855f7 50%,#6366f1 100%);
          background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
          animation:ap-shimmer 4s linear infinite;
        }

        /* Meta */
        .ap-meta{ display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:22px; }
        .ap-meta-txt{ font-size:13px;color:#6b7280;font-weight:400; }
        .ap-exp-pill{ background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(6,182,212,.08));border:1px solid rgba(16,185,129,.22);border-radius:100px;padding:3px 12px;font-size:11px;font-weight:600;color:#059669; }
        .ap-verified{ display:flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#6366f1; }
        .ap-v-badge{ width:17px;height:17px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);display:flex;align-items:center;justify-content:center; }

        /* Divider */
        .ap-div{ height:1px;background:linear-gradient(90deg,rgba(236,72,153,.25),rgba(168,85,247,.15),transparent);margin:20px 0; }

        /* About */
        .ap-about-lbl{ font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#9ca3af;margin-bottom:8px; }
        .ap-about-txt{ font-size:14px;font-weight:300;color:#6b7280;line-height:1.85;max-width:600px; }

        /* Stats */
        .ap-stats{ display:flex;gap:14px;margin-top:28px;flex-wrap:wrap; }
        .ap-stat{
          background:#fff;border:1px solid rgba(168,85,247,.1);border-radius:18px;padding:14px 20px;
          display:flex;flex-direction:column;gap:3px;
          box-shadow:0 4px 20px rgba(168,85,247,.07);
          transition:all .3s ease;opacity:0;animation:ap-stat-in .5s ease both;
        }
        .ap-stat:hover{ transform:translateY(-5px);box-shadow:0 12px 36px rgba(168,85,247,.16);border-color:rgba(236,72,153,.2); }
        .ap-stat-n{ font-family:'Playfair Display',serif;font-size:24px;font-weight:500;color:#1e1b2e;line-height:1; }
        .ap-stat-n span{ color:#ec4899; }
        .ap-stat-l{ font-size:10px;color:#9ca3af;font-weight:400; }

        /* Fee */
        .ap-fee{
          display:inline-flex;align-items:center;gap:12px;
          background:linear-gradient(135deg,rgba(236,72,153,.08),rgba(168,85,247,.06));
          border:1.5px solid rgba(236,72,153,.18);border-radius:20px;padding:14px 24px;
          margin-top:26px;animation:ap-fee-float 5s ease-in-out infinite;
          box-shadow:0 8px 32px rgba(236,72,153,.1);
        }
        .ap-fee-emoji{ font-size:24px; }
        .ap-fee-lbl{ font-size:10px;color:#9ca3af;font-weight:400;letter-spacing:.5px; }
        .ap-fee-val{ font-family:'Playfair Display',serif;font-size:28px;font-weight:500;color:#db2777;line-height:1; }

        /* ════════════════════════════
           BOOKING CARD
        ════════════════════════════ */
        .ap-booking{
          background:#fff;border-radius:28px;padding:38px 42px;
          box-shadow:0 8px 48px rgba(168,85,247,.1),0 0 0 1px rgba(236,72,153,.07);
          opacity:0;animation:ap-fade-up .7s .45s ease forwards;
          position:relative;overflow:hidden;
        }
        .ap-booking::before{ content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ec4899,#a855f7,#6366f1,#0ea5e9);border-radius:28px 28px 0 0; }
        .ap-booking::after{ content:'';position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 40% at 80% 100%,rgba(168,85,247,.04) 0%,transparent 60%); }
        .ap-booking-inner{ position:relative;z-index:1; }

        /* Section header */
        .ap-sec-hdr{ display:flex;align-items:center;gap:14px;margin-bottom:30px; }
        .ap-sec-dot{ width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#a855f7);animation:ap-dot-blink 1.8s ease-in-out infinite;flex-shrink:0; }
        .ap-sec-title{ font-family:'Playfair Display',serif;font-size:26px;font-weight:500;color:#1e1b2e;letter-spacing:-.5px; }
        .ap-sec-line{ flex:1;height:1px;background:linear-gradient(90deg,rgba(236,72,153,.2),transparent); }

        /* Days */
        .ap-days{ display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;margin-bottom:28px;scrollbar-width:none; }
        .ap-days::-webkit-scrollbar{ display:none; }
        .ap-day{
          flex-shrink:0;width:68px;padding:14px 0;border-radius:20px;cursor:pointer;
          display:flex;flex-direction:column;align-items:center;gap:5px;
          border:1.5px solid rgba(168,85,247,.12);background:#fafafa;
          transition:all .3s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;
        }
        .ap-day::before{ content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(236,72,153,.07),rgba(168,85,247,.05));opacity:0;transition:opacity .3s; }
        .ap-day:hover::before{ opacity:1; }
        .ap-day:hover{ border-color:rgba(236,72,153,.32);transform:translateY(-4px) scale(1.05);box-shadow:0 8px 24px rgba(236,72,153,.15); }
        .ap-day.on{ background:linear-gradient(135deg,#ec4899,#a855f7);border-color:transparent;box-shadow:0 10px 30px rgba(236,72,153,.4);transform:translateY(-6px) scale(1.07);animation:ap-pulse-ring 2.5s ease-in-out infinite; }
        .ap-day.on::before{ opacity:0; }
        .ap-day-nm{ font-size:9px;font-weight:700;letter-spacing:1.5px;color:#9ca3af; }
        .ap-day-dt{ font-family:'Playfair Display',serif;font-size:22px;font-weight:500;color:#1e1b2e;line-height:1; }
        .ap-day.on .ap-day-nm{ color:rgba(255,255,255,.75); }
        .ap-day.on .ap-day-dt{ color:#fff; }

        /* Time chips */
        .ap-times{ display:flex;gap:9px;flex-wrap:wrap;margin-bottom:36px; }
        .ap-chip{
          padding:8px 18px;border-radius:100px;cursor:pointer;
          font-size:12px;font-weight:500;
          border:1.5px solid rgba(168,85,247,.12);background:#fafafa;color:#6b7280;
          transition:all .25s cubic-bezier(.34,1.56,.64,1);
          animation:ap-slot-pop .3s ease both;position:relative;overflow:hidden;
        }
        .ap-chip:hover{ border-color:rgba(236,72,153,.35);color:#db2777;background:rgba(236,72,153,.05);transform:translateY(-3px) scale(1.07);box-shadow:0 6px 18px rgba(236,72,153,.15); }
        .ap-chip.on{ background:linear-gradient(135deg,rgba(236,72,153,.12),rgba(168,85,247,.1));border-color:rgba(236,72,153,.45);color:#be185d;font-weight:600;transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px rgba(236,72,153,.2); }
        .ap-chip.on::before{ content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);animation:ap-badge-shine 2.5s ease-in-out infinite;pointer-events:none; }

        /* Book btn */
        .ap-book-btn{
          display:inline-flex;align-items:center;gap:12px;
          background:linear-gradient(135deg,#ec4899 0%,#a855f7 55%,#6366f1 100%);
          color:#fff;border:none;border-radius:18px;padding:16px 48px;
          font-family:'Manrope',sans-serif;font-size:14px;font-weight:700;letter-spacing:.4px;
          cursor:pointer;position:relative;overflow:hidden;
          transition:all .3s ease;animation:ap-btn-glow 3s ease-in-out infinite;
        }
        .ap-book-btn:hover{ transform:translateY(-4px) scale(1.03);box-shadow:0 20px 52px rgba(236,72,153,.5); }
        .ap-book-btn:active{ transform:translateY(-1px) scale(1); }
        .ap-book-btn::before{ content:'';position:absolute;top:0;left:-80%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:ap-badge-shine 3s ease-in-out infinite;pointer-events:none; }
        .ap-book-btn.loading{ opacity:.8;pointer-events:none; }
        .ap-spin{ width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;animation:ap-spinner .7s linear infinite; }
        .ap-arrow{ transition:transform .3s;font-size:18px; }
        .ap-book-btn:hover .ap-arrow{ transform:translateX(5px); }

        /* Responsive */
        @media(max-width:768px){
          .ap-root{ padding:32px 16px 70px; }
          .ap-hero{ grid-template-columns:1fr;gap:24px; }
          .ap-img-card img{ height:300px; }
          .ap-name{ font-size:32px; }
          .ap-booking{ padding:26px 22px; }
        }
      `}</style>

      <div className="ap-root">

        {/* ════ ANIMATED BACKGROUND ════ */}
        <div className="ap-bg">
          <div className="ap-grid" />

          {/* Morphing blobs */}
          <div className="ap-blob ap-blob-1" />
          <div className="ap-blob ap-blob-2" />
          <div className="ap-blob ap-blob-3" />

          {/* Rings */}
          <div className="ap-ring ap-ring-1" />
          <div className="ap-ring ap-ring-2" />
          <div className="ap-ring ap-ring-3" />
          <div className="ap-ring ap-ring-4" />
          <div className="ap-ring ap-ring-5" />

          {/* Cross sparkles */}
          <div className="ap-cross ap-cross-1">✦</div>
          <div className="ap-cross ap-cross-2">✦</div>
          <div className="ap-cross ap-cross-3">+</div>

          {/* Triangles */}
          <svg className="ap-tri ap-tri-1" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <polygon points="11,2 20,20 2,20" stroke="rgba(236,72,153,0.28)" strokeWidth="1.8" fill="none"/>
          </svg>
          <svg className="ap-tri ap-tri-2" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polygon points="8,1 15,15 1,15" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Squares */}
          <div className="ap-sq ap-sq-1" />
          <div className="ap-sq ap-sq-2" />
          <div className="ap-sq ap-sq-3" />

          {/* Diamonds */}
          <div className="ap-diamond ap-diamond-1" />
          <div className="ap-diamond ap-diamond-2" />
          <div className="ap-diamond ap-diamond-3" />

          {/* Rising dots */}
          <div className="ap-fdot ap-fdot-1" />
          <div className="ap-fdot ap-fdot-2" />
          <div className="ap-fdot ap-fdot-3" />
          <div className="ap-fdot ap-fdot-4" />
          <div className="ap-fdot ap-fdot-5" />

          {/* DNA helix row */}
          <div className="ap-helix-row">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="ap-helix-dot" style={{
                width: `${5 + Math.abs(Math.sin(i * 0.75)) * 4}px`,
                height: `${5 + Math.abs(Math.sin(i * 0.75)) * 4}px`,
                background: `rgba(${i % 2 === 0 ? '236,72,153' : '168,85,247'},.22)`,
                animationDelay: `${i * 0.2}s`
              }} />
            ))}
          </div>

          {/* Sweeping wave */}
          <div className="ap-wave-wrap">
            <svg viewBox="0 0 1440 36" preserveAspectRatio="none" fill="none" style={{width:'100%',height:'100%'}}>
              <path d="M0,18 C240,0 480,36 720,18 C960,0 1200,36 1440,18" stroke="url(#wg)" strokeWidth="2.5"/>
              <path d="M0,26 C240,8 480,44 720,26 C960,8 1200,44 1440,26" stroke="url(#wg2)" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity=".7"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity=".7"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity=".7"/>
                </linearGradient>
                <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity=".5"/>
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity=".5"/>
                  <stop offset="100%" stopColor="#ec4899" stopOpacity=".5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ════ CONTENT ════ */}
        <div className="ap-inner">

          {/* HERO */}
          <div className="ap-hero">

            {/* Image */}
            <div className="ap-img-card">
              <img src={docInfo.image} alt={docInfo.name} />
              <div className="ap-img-overlay" />
              <div className="ap-img-tag ap-tag-avail">
                <span className="ap-avail-dot" /> Available Today
              </div>
              <div className="ap-img-tag ap-tag-rating">
                ★ 4.9 · Top Rated
              </div>
            </div>

            {/* Info */}
            <div className="ap-info-panel">
              <div className="ap-spec-pill">
                <span>✦</span> {docInfo.speciality}
              </div>

              <h1 className="ap-name">
                Dr. <em>{docInfo.name.replace(/^Dr\.?\s*/i, '')}</em>
              </h1>

              <div className="ap-meta">
                <span className="ap-meta-txt">{docInfo.degree}</span>
                <span className="ap-exp-pill">{docInfo.experience}</span>
                <div className="ap-verified">
                  <div className="ap-v-badge">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Verified
                </div>
              </div>

              <div className="ap-div" />
              <div className="ap-about-lbl">About the Doctor</div>
              <p className="ap-about-txt">{docInfo.about}</p>

              <div className="ap-stats">
                {[
                  { n: '98', s: '%', l: 'Patient Satisfaction' },
                  { n: '4.9', s: '★', l: 'Average Rating' },
                  { n: '1.2', s: 'k', l: 'Total Patients' },
                ].map((st, i) => (
                  <div className="ap-stat" key={i} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                    <div className="ap-stat-n">{st.n}<span>{st.s}</span></div>
                    <div className="ap-stat-l">{st.l}</div>
                  </div>
                ))}
              </div>

              <div className="ap-fee">
                <span className="ap-fee-emoji">💎</span>
                <div>
                  <div className="ap-fee-lbl">Consultation Fee</div>
                  {/* ✅ ONLY CHANGE: hardcoded $ instead of currencySymbol */}
                  <div className="ap-fee-val">${docInfo.fees}</div>
                </div>
              </div>
            </div>
          </div>

          {/* BOOKING */}
          <div className="ap-booking">
            <div className="ap-booking-inner">
              <div className="ap-sec-hdr">
                <div className="ap-sec-dot" />
                <h2 className="ap-sec-title">Pick Your Appointment</h2>
                <div className="ap-sec-line" />
              </div>

              {/* Days */}
              <div className="ap-days">
                {docSlots.length > 0 && docSlots.map((item, index) => (
                  <div key={index} className={`ap-day ${slotIndex === index ? 'on' : ''}`} onClick={() => setSlotIndex(index)}>
                    <span className="ap-day-nm">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</span>
                    <span className="ap-day-dt">{item[0] && item[0].datetime.getDate()}</span>
                  </div>
                ))}
              </div>

              {/* Times */}
              <div className="ap-times">
                {docSlots.length > 0 && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
                  <div key={index} className={`ap-chip ${item.time === slotTime ? 'on' : ''}`}
                    onClick={() => setSlotTime(item.time)}
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    {item.time.toLowerCase()}
                  </div>
                ))}
              </div>

              {/* Book button */}
              <button className={`ap-book-btn${booking ? ' loading' : ''}`} onClick={bookAppointment}>
                {booking
                  ? <><div className="ap-spin" /> Confirming...</>
                  : <>Book Appointment <span className="ap-arrow">→</span></>
                }
              </button>
            </div>
          </div>

        </div>
      </div>

      <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
    </>
  )
}

export default Appointment