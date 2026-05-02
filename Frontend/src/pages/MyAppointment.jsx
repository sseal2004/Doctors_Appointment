import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
import * as QRCode from "qrcode";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData, userData } = useContext(AppContext)
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [payment, setPayment] = useState('')      // appointmentId that has "Pay Online" expanded
  const [loading, setLoading] = useState(true)

  // ─── UPI modal state ───
  const [upiModal, setUpiModal]     = useState(null)   // { upiLink, amount, appointmentId }
  const [upiVerifying, setUpiVerifying] = useState(false)
  const qrCanvasRef = useRef(null)

  // ─── PayPal SDK loader ───
  const loadPaypal = () => {
    return new Promise((resolve) => {
      if (window.paypal) return resolve(true)
      const script = document.createElement("script")
      script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const [day, month, year] = slotDate.split('_')
    return `${day} ${months[Number(month)]} ${year}`
  }

  const getUserAppointments = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
      setAppointments(data.appointments.reverse())
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ═══════════════════════════════════════════
  // PAYPAL
  // ═══════════════════════════════════════════
  const initPay = (order, appointmentId) => {
    const existingContainer = document.getElementById('paypal-button-container')
    if (existingContainer) existingContainer.remove()

    const overlay = document.createElement('div')
    overlay.id = 'paypal-overlay'
    overlay.style.cssText = `
      position:fixed; inset:0; z-index:99999;
      background:rgba(0,0,0,0.55); backdrop-filter:blur(6px);
      display:flex; align-items:center; justify-content:center;
    `
    const modal = document.createElement('div')
    modal.style.cssText = `
      background:#fff; border-radius:24px; padding:32px 28px 28px;
      width:380px; max-width:95vw;
      box-shadow:0 24px 64px rgba(0,0,0,0.22);
      position:relative; font-family:'DM Sans',sans-serif;
    `
    const closeBtn = document.createElement('button')
    closeBtn.innerHTML = '✕'
    closeBtn.style.cssText = `
      position:absolute; top:14px; right:16px;
      background:none; border:none; font-size:18px;
      color:#94A3B8; cursor:pointer;
    `
    closeBtn.onclick = () => overlay.remove()

    const title = document.createElement('div')
    title.innerHTML = `
      <div style="font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#7C3AED;margin-bottom:6px;">Appointment Payment</div>
      <div style="font-size:22px;font-weight:800;color:#1E1B4B;margin-bottom:4px;">Complete your payment</div>
      <div style="font-size:13px;color:#94A3B8;margin-bottom:22px;">
        Amount: <strong style="color:#1E1B4B;">$${(order.amount / 100).toFixed(2)} ${order.currency}</strong>
      </div>
    `
    const btnContainer = document.createElement('div')
    btnContainer.id = 'paypal-button-container'
    modal.appendChild(closeBtn)
    modal.appendChild(title)
    modal.appendChild(btnContainer)
    overlay.appendChild(modal)
    document.body.appendChild(overlay)

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: { value: (order.amount / 100).toFixed(2), currency_code: order.currency || 'USD' },
            description: 'Appointment Payment'
          }],
          payer: {
            name: { given_name: userData?.name || 'User' },
            email_address: userData?.email || 'test@example.com'
          }
        })
      },
      onApprove: async (data, actions) => {
        try {
          const details = await actions.order.capture()
          const { data: verifyData } = await axios.post(
            backendUrl + "/api/user/verifyPaypal",
            { orderID: data.orderID, paymentID: details.id, appointmentId },
            { headers: { token } }
          )
          overlay.remove()
          if (verifyData.success) {
            navigate("/my-appointments")
            getUserAppointments()
          }
        } catch (error) {
          console.log(error)
          toast.error("Payment verification failed")
        }
      },
      onError: (err) => {
        console.error("PayPal error:", err)
        toast.error("Payment failed. Please try again.")
        overlay.remove()
      },
      onCancel: () => {
        toast.info("Payment cancelled.")
        overlay.remove()
      },
      style: { layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }
    }).render('#paypal-button-container')
  }

  const appointmentPaypal = async (appointmentId) => {
    const isLoaded = await loadPaypal()
    if (!isLoaded) { toast.error("PayPal SDK failed to load"); return }
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-paypal', { appointmentId }, { headers: { token } })
      if (data.success) {
        initPay(data.order, appointmentId)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ═══════════════════════════════════════════
  // UPI / QR CODE
  // ═══════════════════════════════════════════
  const appointmentUpi = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-upi', { appointmentId }, { headers: { token } })
      if (data.success) {
        setUpiModal({ upiLink: data.upiLink, amount: data.amount, appointmentId: data.appointmentId })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Draw QR onto canvas once modal is open
  useEffect(() => {
    if (upiModal && qrCanvasRef.current) {
      QRCode.toCanvas(qrCanvasRef.current, upiModal.upiLink, {
        width: 220,
        margin: 2,
        color: { dark: '#1E1B4B', light: '#FFFFFF' }
      }, (err) => { if (err) console.error(err) })
    }
  }, [upiModal])

  const confirmUpiPayment = async () => {
    if (!upiModal) return
    setUpiVerifying(true)
    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/verifyUpi',
        { appointmentId: upiModal.appointmentId },
        { headers: { token } }
      )
      if (data.success) {
        toast.success(data.message)
        setUpiModal(null)
        setPayment('')
        getUserAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setUpiVerifying(false)
    }
  }

  useEffect(() => {
    if (token) getUserAppointments()
  }, [token])

  /* ─── helpers ─── */
  const getStatus = (item) => {
    if (item.cancelled && !item.isCompleted) return 'cancelled'
    if (item.isCompleted) return 'completed'
    if (item.payment) return 'paid'
    return 'upcoming'
  }

  const statusMeta = {
    upcoming:  { label: 'Upcoming',  dot: '#7C3AED', bg: 'rgba(124,58,237,0.1)',  color: '#6D28D9', ribbon: 'linear-gradient(180deg,#7C3AED,#4F46E5)' },
    paid:      { label: 'Paid',      dot: '#059669', bg: 'rgba(5,150,105,0.1)',   color: '#065F46', ribbon: 'linear-gradient(180deg,#059669,#10B981)' },
    completed: { label: 'Completed', dot: '#0EA5E9', bg: 'rgba(14,165,233,0.1)',  color: '#0369A1', ribbon: 'linear-gradient(180deg,#0EA5E9,#38BDF8)' },
    cancelled: { label: 'Cancelled', dot: '#EF4444', bg: 'rgba(239,68,68,0.1)',   color: '#991B1B', ribbon: 'linear-gradient(180deg,#EF4444,#F87171)' },
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        /* ══════ KEYFRAMES ══════ */
        @keyframes ma-orb-drift1 {
          0%,100%{transform:translate(0,0) scale(1);}
          30%{transform:translate(50px,-40px) scale(1.08);}
          60%{transform:translate(-30px,50px) scale(0.94);}
        }
        @keyframes ma-orb-drift2 {
          0%,100%{transform:translate(0,0) scale(1);}
          40%{transform:translate(-60px,35px) scale(1.1);}
          70%{transform:translate(30px,-45px) scale(0.92);}
        }
        @keyframes ma-orb-drift3 {
          0%,100%{transform:translate(0,0);}
          50%{transform:translate(40px,-30px);}
        }
        @keyframes ma-morph {
          0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;}
          25%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;}
          50%{border-radius:50% 60% 30% 60%/30% 40% 70% 50%;}
          75%{border-radius:40% 50% 60% 30%/70% 30% 50% 60%;}
        }
        @keyframes ma-morph2 {
          0%,100%{border-radius:40% 60% 60% 40%/40% 60% 40% 60%;}
          33%{border-radius:60% 40% 40% 60%/60% 40% 60% 40%;}
          66%{border-radius:50% 50% 30% 70%/50% 70% 30% 50%;}
        }
        @keyframes ma-heart-beat {
          0%,100%{transform:scale(1) rotate(var(--r,0deg)); filter:drop-shadow(0 0 0px rgba(236,72,153,0));}
          14%{transform:scale(1.22) rotate(var(--r,0deg)); filter:drop-shadow(0 0 16px rgba(236,72,153,0.4));}
          28%{transform:scale(1) rotate(var(--r,0deg));}
          42%{transform:scale(1.12) rotate(var(--r,0deg)); filter:drop-shadow(0 0 10px rgba(124,58,237,0.35));}
          56%{transform:scale(1) rotate(var(--r,0deg));}
        }
        @keyframes ma-heart-rise {
          0%  {transform:translateY(0) scale(1) rotate(var(--r,0deg)); opacity:var(--o1,0.18);}
          40% {transform:translateY(-50px) scale(1.12) rotate(var(--r,0deg)); opacity:var(--o2,0.35);}
          100%{transform:translateY(-140px) scale(0.7) rotate(var(--r,0deg)); opacity:0;}
        }
        @keyframes ma-heart-orbit {
          from{transform:rotate(0deg) translateX(var(--rad,120px)) rotate(0deg);}
          to  {transform:rotate(360deg) translateX(var(--rad,120px)) rotate(-360deg);}
        }
        @keyframes ma-ecg-draw {
          0%  {stroke-dashoffset:900;}
          100%{stroke-dashoffset:-900;}
        }
        @keyframes ma-ecg-draw2 {
          0%  {stroke-dashoffset:600;}
          100%{stroke-dashoffset:-600;}
        }
        @keyframes ma-ecg-draw3 {
          0%  {stroke-dashoffset:400;}
          100%{stroke-dashoffset:-400;}
        }
        @keyframes ma-ring-cw  {from{transform:rotate(0deg);}  to{transform:rotate(360deg);}}
        @keyframes ma-ring-ccw {from{transform:rotate(0deg);}  to{transform:rotate(-360deg);}}
        @keyframes ma-ring-pulse {
          0%  {transform:scale(0.7); opacity:0.45;}
          100%{transform:scale(2.6); opacity:0;}
        }
        @keyframes ma-twinkle {
          0%,100%{opacity:0.08; transform:scale(1);}
          50%{opacity:0.55; transform:scale(1.5);}
        }
        @keyframes ma-cross-spin {
          0%,100%{transform:rotate(0deg) scale(1); opacity:0.07;}
          50%{transform:rotate(90deg) scale(1.15); opacity:0.13;}
        }
        @keyframes ma-slide-up {
          from{opacity:0; transform:translateY(32px) scale(0.97);}
          to  {opacity:1; transform:translateY(0) scale(1);}
        }
        @keyframes ma-fade-in {
          from{opacity:0;} to{opacity:1;}
        }
        @keyframes ma-card-shine {
          0%     {left:-100%;}
          55%,100%{left:140%;}
        }
        @keyframes ma-shimmer-txt {
          0%  {background-position:-200% center;}
          100%{background-position:200% center;}
        }
        @keyframes ma-badge-glow {
          0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0);}
          50%{box-shadow:0 0 18px 5px rgba(124,58,237,0.15);}
        }
        @keyframes ma-loader-pulse {
          0%,100%{opacity:0.3; transform:scale(0.85);}
          50%{opacity:1; transform:scale(1);}
        }
        @keyframes ma-upi-scan {
          0%,100%{transform:translateY(0); opacity:0.7;}
          50%{transform:translateY(216px); opacity:1;}
        }

        /* ══════ ROOT ══════ */
        .ma-root {
          font-family:'DM Sans',sans-serif;
          min-height:100vh;
          position:relative;
          padding:56px 0 100px;
          overflow-x:hidden;
          background:
            radial-gradient(ellipse 75% 55% at 5% 8%,  rgba(251,207,232,0.5) 0%, transparent 55%),
            radial-gradient(ellipse 65% 60% at 95% 92%, rgba(196,181,253,0.45) 0%, transparent 55%),
            radial-gradient(ellipse 85% 65% at 50% 50%, rgba(186,230,253,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 15%, rgba(254,202,202,0.3) 0%, transparent 50%),
            linear-gradient(160deg,#FDF4FF 0%,#F0F7FF 35%,#FFF5F7 65%,#F5F0FF 100%);
          isolation:isolate;
        }
        .ma-bg { position:fixed; inset:0; z-index:0; pointer-events:none; overflow:hidden; }
        .ma-dotgrid {
          position:absolute; inset:0;
          background-image:radial-gradient(circle, rgba(139,92,246,0.11) 1px, transparent 1px);
          background-size:28px 28px; opacity:0.65;
          animation:ma-fade-in 1.5s ease forwards;
        }
        .ma-blob { position:absolute; filter:blur(52px); }
        .ma-blob-1 {
          width:460px; height:420px; top:-100px; left:-120px;
          background:linear-gradient(135deg,rgba(251,207,232,0.6),rgba(196,181,253,0.45));
          animation:ma-morph 14s ease-in-out infinite, ma-orb-drift1 20s ease-in-out infinite;
        }
        .ma-blob-2 {
          width:420px; height:460px; bottom:-110px; right:-90px;
          background:linear-gradient(135deg,rgba(196,181,253,0.55),rgba(186,230,253,0.5));
          animation:ma-morph2 11s ease-in-out infinite, ma-orb-drift2 17s ease-in-out infinite;
        }
        .ma-blob-3 {
          width:280px; height:280px; top:38%; left:38%;
          background:linear-gradient(135deg,rgba(254,202,202,0.4),rgba(196,181,253,0.35));
          animation:ma-morph 17s ease-in-out infinite reverse, ma-orb-drift3 22s ease-in-out infinite;
          filter:blur(44px);
        }
        .ma-blob-4 {
          width:200px; height:200px; top:15%; right:20%;
          background:linear-gradient(135deg,rgba(186,230,253,0.4),rgba(196,181,253,0.3));
          animation:ma-morph2 9s ease-in-out infinite 3s, ma-orb-drift1 14s ease-in-out infinite reverse;
          filter:blur(40px);
        }
        .ma-ring { position:absolute; border-radius:50%; pointer-events:none; }
        .ma-ring-1 {
          width:320px; height:320px; top:3%; right:5%;
          border:1.5px solid rgba(196,181,253,0.32);
          animation:ma-ring-cw 35s linear infinite;
        }
        .ma-ring-1::before {
          content:''; position:absolute; top:-5px; left:50%;
          width:10px; height:10px; border-radius:50%;
          background:rgba(167,139,250,0.8);
          box-shadow:0 0 14px 5px rgba(167,139,250,0.55);
        }
        .ma-ring-1::after {
          content:''; position:absolute; bottom:-5px; right:25%;
          width:6px; height:6px; border-radius:50%;
          background:rgba(244,114,182,0.7);
          box-shadow:0 0 10px 4px rgba(244,114,182,0.4);
        }
        .ma-ring-2 {
          width:200px; height:200px; bottom:8%; left:4%;
          border:1.5px solid rgba(251,207,232,0.38);
          animation:ma-ring-ccw 25s linear infinite;
        }
        .ma-ring-2::before {
          content:''; position:absolute; bottom:-5px; left:50%;
          width:9px; height:9px; border-radius:50%;
          background:rgba(244,114,182,0.75);
          box-shadow:0 0 12px 4px rgba(244,114,182,0.5);
        }
        .ma-ring-3 { width:130px; height:130px; top:48%; right:12%; border:1px solid rgba(186,230,253,0.4); animation:ma-ring-cw 20s linear infinite; }
        .ma-ring-4 { width:80px; height:80px; top:30%; left:18%; border:1px solid rgba(196,181,253,0.3); animation:ma-ring-ccw 15s linear infinite; }
        .ma-pr { position:absolute; border-radius:50%; pointer-events:none; border:1.5px solid rgba(167,139,250,0.3); animation:ma-ring-pulse 4.5s ease-out infinite; }
        .ma-pr-1 { width:110px; height:110px; top:14%; left:10%; }
        .ma-pr-2 { width:75px; height:75px; bottom:18%; right:9%; animation-delay:1.6s; border-color:rgba(244,114,182,0.28); }
        .ma-pr-3 { width:55px; height:55px; top:58%; left:48%; animation-delay:2.9s; border-color:rgba(99,102,241,0.22); }
        .ma-pr-4 { width:90px; height:90px; top:25%; right:22%; animation-delay:0.8s; border-color:rgba(186,230,253,0.35); }
        .ma-sheart { position:absolute; pointer-events:none; animation:ma-heart-beat 1.15s ease-in-out infinite; }
        .ma-sh1 { top:7%;  left:4%;  width:85px;  opacity:0.09; --r:-14deg; animation-delay:0s; }
        .ma-sh2 { top:11%; right:3%; width:58px;  opacity:0.07; --r:11deg;  animation-delay:0.28s; }
        .ma-sh3 { top:44%; left:2%;  width:48px;  opacity:0.07; --r:-6deg;  animation-delay:0.56s; }
        .ma-sh4 { top:52%; right:2%; width:70px;  opacity:0.08; --r:13deg;  animation-delay:0.14s; }
        .ma-sh5 { bottom:25%; left:9%;  width:38px; opacity:0.06; --r:-20deg; animation-delay:0.7s; }
        .ma-sh6 { bottom:30%; right:8%; width:44px; opacity:0.06; --r:18deg;  animation-delay:0.42s; }
        .ma-fheart { position:absolute; pointer-events:none; }
        .ma-fh1 { bottom:6%;  left:7%;   animation:ma-heart-rise 6.5s ease-in-out infinite;     --r:-13deg; --o1:0.16; --o2:0.32; }
        .ma-fh2 { bottom:10%; left:20%;  animation:ma-heart-rise 8.5s ease-in-out infinite 2.2s; --r:9deg;   --o1:0.12; --o2:0.24; }
        .ma-fh3 { bottom:4%;  right:16%; animation:ma-heart-rise 7.2s ease-in-out infinite 4.5s; --r:-7deg;  --o1:0.14; --o2:0.28; }
        .ma-fh4 { bottom:14%; right:5%;  animation:ma-heart-rise 9.5s ease-in-out infinite 1.2s; --r:16deg;  --o1:0.1;  --o2:0.22; }
        .ma-fh5 { bottom:8%;  left:50%;  animation:ma-heart-rise 7.8s ease-in-out infinite 3.5s; --r:-3deg;  --o1:0.09; --o2:0.18; }
        .ma-orbit-center { position:absolute; pointer-events:none; }
        .ma-orbit-heart {
          position:absolute; top:50%; left:50%; margin:-10px 0 0 -10px;
          animation:ma-heart-orbit var(--dur,14s) linear infinite;
          animation-delay:var(--del,0s); opacity:var(--op,0.1); --rad:var(--radius,100px);
        }
        .ma-oc1 { top:20%; right:8%; width:0; height:0; }
        .ma-oc2 { top:60%; left:6%; width:0; height:0; }
        .ma-cross { position:absolute; pointer-events:none; animation:ma-cross-spin 10s ease-in-out infinite; }
        .ma-cross-1 { top:22%; left:3%; width:36px; }
        .ma-cross-2 { bottom:32%; right:3%; width:26px; animation-delay:5s; }
        .ma-cross-3 { top:68%; left:48%; width:20px; animation-delay:2.5s; }
        .ma-ecg-svg { position:absolute; width:100%; pointer-events:none; }
        .ma-ecg-bot { bottom:90px; opacity:0.38; }
        .ma-ecg-top { top:80px;   opacity:0.18; }
        .ma-ecg-mid { top:50%;    opacity:0.12; }
        .ma-twinkle {
          position:absolute; border-radius:50%; pointer-events:none;
          background:rgba(167,139,250,0.55);
          animation:ma-twinkle var(--dur,3s) ease-in-out infinite;
          animation-delay:var(--del,0s);
        }

        /* ══════ CONTENT ══════ */
        .ma-inner { position:relative; z-index:10; max-width:900px; margin:0 auto; padding:0 28px; }
        .ma-hero { text-align:center; margin-bottom:52px; animation:ma-slide-up 0.7s ease both; }
        .ma-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid rgba(124,58,237,0.28); background:rgba(124,58,237,0.06);
          border-radius:100px; padding:6px 18px 6px 11px;
          margin-bottom:16px; backdrop-filter:blur(8px);
          animation:ma-badge-glow 3.5s ease-in-out infinite;
        }
        .ma-eye-dot { width:8px; height:8px; border-radius:50%; background:#7C3AED; animation:ma-twinkle 1.8s ease-in-out infinite; }
        .ma-eye-txt {
          font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase;
          background:linear-gradient(90deg,#7C3AED 0%,#EC4899 50%,#7C3AED 100%);
          background-size:200% auto; -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; animation:ma-shimmer-txt 3.5s linear infinite;
        }
        .ma-page-title {
          font-family:'Playfair Display',serif; font-size:46px; font-weight:800; color:#1E1B4B;
          letter-spacing:-1.5px; line-height:1.08; margin-bottom:12px;
        }
        .ma-page-title em {
          font-style:italic;
          background:linear-gradient(135deg,#7C3AED 0%,#EC4899 55%,#4F46E5 100%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
          filter:drop-shadow(0 0 20px rgba(124,58,237,0.3));
        }
        .ma-page-sub { font-size:15px; font-weight:300; color:#64748B; line-height:1.7; }
        .ma-count-strip { display:flex; justify-content:center; gap:14px; margin-top:24px; flex-wrap:wrap; }
        .ma-count-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.75); backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,0.9); border-radius:100px; padding:10px 20px;
          font-size:13px; font-weight:500; box-shadow:0 4px 20px rgba(99,102,241,0.1); transition:all 0.3s;
        }
        .ma-count-pill:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(99,102,241,0.18); }
        .ma-count-pill-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:14px; }
        .ma-count-pill-num { font-family:'Playfair Display',serif; font-weight:800; font-size:18px; color:#1E1B4B; }
        .ma-count-pill-lbl { font-size:11px; color:#94A3B8; font-weight:300; }
        .ma-loader { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px 24px; gap:20px; }
        .ma-loader-hearts { display:flex; gap:10px; }
        .ma-loader-h { width:18px; height:18px; animation:ma-loader-pulse 1.2s ease-in-out infinite; }
        .ma-loader-h:nth-child(2) { animation-delay:0.2s; }
        .ma-loader-h:nth-child(3) { animation-delay:0.4s; }
        .ma-loader-txt { font-size:14px; color:#94A3B8; font-weight:300; }
        .ma-empty {
          text-align:center; padding:80px 28px; background:rgba(255,255,255,0.65);
          backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.9);
          border-radius:32px; box-shadow:0 8px 40px rgba(99,102,241,0.08);
          animation:ma-slide-up 0.7s 0.1s ease both;
        }
        .ma-empty-heart { width:80px; height:72px; margin:0 auto 20px; animation:ma-heart-beat 1.2s ease-in-out infinite; opacity:0.4; }
        .ma-empty-title { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:#1E1B4B; letter-spacing:-0.5px; margin-bottom:10px; }
        .ma-empty-sub { font-size:15px; color:#94A3B8; font-weight:300; line-height:1.7; margin-bottom:28px; }
        .ma-empty-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#7C3AED,#4F46E5); color:#fff; border:none; border-radius:100px;
          padding:14px 32px; font-size:14px; font-weight:600; font-family:'DM Sans',sans-serif; cursor:pointer;
          transition:all 0.3s; letter-spacing:0.3px; box-shadow:0 8px 24px rgba(124,58,237,0.32);
        }
        .ma-empty-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(124,58,237,0.45); }
        .ma-list { display:flex; flex-direction:column; gap:18px; }
        .ma-card {
          background:rgba(255,255,255,0.74); backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,0.92); border-radius:26px;
          padding:26px 26px 26px 30px; display:flex; gap:22px; align-items:flex-start;
          box-shadow:0 4px 28px rgba(99,102,241,0.08), 0 0 0 1px rgba(255,255,255,0.7) inset;
          transition:all 0.4s cubic-bezier(0.25,0.8,0.25,1); position:relative; overflow:hidden;
          animation:ma-slide-up 0.55s ease both;
        }
        .ma-card::before {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent);
          animation:ma-card-shine 6s ease-in-out infinite; pointer-events:none;
        }
        .ma-card::after {
          content:''; position:absolute; inset:0; border-radius:26px;
          background:linear-gradient(135deg,rgba(124,58,237,0.03),rgba(236,72,153,0.02));
          opacity:0; transition:opacity 0.3s; pointer-events:none;
        }
        .ma-card:hover::after { opacity:1; }
        .ma-card:hover {
          transform:translateY(-5px) scale(1.005);
          box-shadow:0 20px 56px rgba(99,102,241,0.16), 0 0 0 1.5px rgba(167,139,250,0.35);
          background:rgba(255,255,255,0.9);
        }
        .ma-card:nth-child(1){animation-delay:0.04s;}
        .ma-card:nth-child(2){animation-delay:0.11s;}
        .ma-card:nth-child(3){animation-delay:0.18s;}
        .ma-card:nth-child(4){animation-delay:0.25s;}
        .ma-card:nth-child(5){animation-delay:0.32s;}
        .ma-card:nth-child(6){animation-delay:0.39s;}
        .ma-ribbon { position:absolute; left:0; top:0; bottom:0; width:5px; border-radius:5px 0 0 5px; transition:width 0.3s; }
        .ma-card:hover .ma-ribbon { width:7px; }
        .ma-doc-img {
          width:106px; height:118px; flex-shrink:0; border-radius:18px; overflow:hidden;
          background:linear-gradient(135deg,#EDE9FE,#DBEAFE);
          box-shadow:0 8px 24px rgba(99,102,241,0.14); position:relative;
        }
        .ma-doc-img img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 0.45s ease; }
        .ma-card:hover .ma-doc-img img { transform:scale(1.07); }
        .ma-img-heart {
          position:absolute; bottom:7px; right:7px; width:22px; height:22px;
          background:rgba(255,255,255,0.92); border-radius:50%;
          display:flex; align-items:center; justify-content:center; font-size:11px;
          box-shadow:0 2px 8px rgba(0,0,0,0.1); animation:ma-heart-beat 1.2s ease-in-out infinite;
        }
        .ma-info { flex:1; min-width:0; }
        .ma-status-pill {
          display:inline-flex; align-items:center; gap:5px; border-radius:100px; padding:3px 11px;
          font-size:10px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; margin-bottom:9px;
        }
        .ma-status-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
        .ma-doc-name {
          font-family:'Playfair Display',serif; font-size:18px; font-weight:800; color:#1E1B4B;
          letter-spacing:-0.3px; margin-bottom:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .ma-doc-spec {
          display:inline-block; font-size:11px; font-weight:500; color:#7C3AED;
          background:rgba(124,58,237,0.07); border:1px solid rgba(124,58,237,0.14);
          border-radius:100px; padding:2px 10px; margin-bottom:12px;
        }
        .ma-meta { display:flex; flex-direction:column; gap:5px; }
        .ma-meta-row { display:flex; align-items:center; gap:7px; font-size:13px; color:#64748B; font-weight:300; }
        .ma-meta-icon { color:#94A3B8; flex-shrink:0; }
        .ma-datetime-pill {
          display:inline-flex; align-items:center; gap:7px;
          background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(79,70,229,0.06));
          border:1px solid rgba(124,58,237,0.14); border-radius:100px; padding:6px 14px;
          font-size:12px; font-weight:500; color:#4338CA; margin-top:8px; transition:all 0.25s;
        }
        .ma-card:hover .ma-datetime-pill {
          background:linear-gradient(135deg,rgba(124,58,237,0.14),rgba(79,70,229,0.1));
          border-color:rgba(124,58,237,0.28);
        }
        .ma-actions { display:flex; flex-direction:column; gap:9px; justify-content:center; flex-shrink:0; min-width:148px; }
        .ma-btn {
          border-radius:14px; padding:11px 16px; font-size:12px; font-weight:600;
          font-family:'DM Sans',sans-serif; cursor:pointer; transition:all 0.28s; border:none;
          display:flex; align-items:center; justify-content:center; gap:6px; letter-spacing:0.3px;
          white-space:nowrap; position:relative; overflow:hidden;
        }
        .ma-btn::before {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);
          transition:left 0s; pointer-events:none;
        }
        .ma-btn:hover::before { animation:ma-card-shine 0.5s ease forwards; }
        .ma-btn-pay { background:linear-gradient(135deg,#7C3AED,#4F46E5); color:#fff; box-shadow:0 6px 20px rgba(124,58,237,0.34); }
        .ma-btn-pay:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(124,58,237,0.48); }
        .ma-btn-paypal { background:#fff; color:#64748B; border:1.5px solid rgba(99,102,241,0.2); box-shadow:0 4px 14px rgba(0,0,0,0.06); }
        .ma-btn-paypal:hover { border-color:rgba(99,102,241,0.4); transform:translateY(-1px); }
        .ma-btn-paypal img { max-height:18px; max-width:80px; }
        .ma-btn-upi {
          background:linear-gradient(135deg,#10B981,#059669); color:#fff;
          box-shadow:0 6px 20px rgba(5,150,105,0.3);
        }
        .ma-btn-upi:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(5,150,105,0.45); }
        .ma-btn-paid { background:rgba(5,150,105,0.08); color:#065F46; border:1.5px solid rgba(5,150,105,0.2); cursor:default; }
        .ma-btn-done { background:rgba(14,165,233,0.08); color:#0369A1; border:1.5px solid rgba(14,165,233,0.2); cursor:default; }
        .ma-btn-cancel { background:rgba(239,68,68,0.06); color:#DC2626; border:1.5px solid rgba(239,68,68,0.18); }
        .ma-btn-cancel:hover { background:rgba(239,68,68,0.13); border-color:rgba(239,68,68,0.4); transform:translateY(-1px); }
        .ma-btn-cancelled { background:transparent; color:#EF4444; border:1.5px solid rgba(239,68,68,0.3); cursor:default; }

        /* ══════ UPI MODAL ══════ */
        .upi-overlay {
          position:fixed; inset:0; z-index:99999;
          background:rgba(0,0,0,0.6); backdrop-filter:blur(8px);
          display:flex; align-items:center; justify-content:center;
          animation:ma-fade-in 0.2s ease;
        }
        .upi-modal {
          background:#fff; border-radius:28px; padding:36px 32px 32px;
          width:360px; max-width:95vw;
          box-shadow:0 32px 80px rgba(0,0,0,0.25);
          position:relative; font-family:'DM Sans',sans-serif;
          animation:ma-slide-up 0.3s ease;
        }
        .upi-close {
          position:absolute; top:16px; right:18px;
          background:none; border:none; font-size:20px;
          color:#94A3B8; cursor:pointer; line-height:1;
        }
        .upi-close:hover { color:#64748B; }
        .upi-label {
          font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
          color:#10B981; margin-bottom:4px;
        }
        .upi-title {
          font-family:'Playfair Display',serif; font-size:22px; font-weight:800;
          color:#1E1B4B; margin-bottom:4px;
        }
        .upi-amount {
          font-size:13px; color:#94A3B8; margin-bottom:20px;
        }
        .upi-amount strong { color:#1E1B4B; }
        .upi-qr-wrap {
          display:flex; justify-content:center; margin-bottom:18px;
          position:relative;
        }
        .upi-qr-canvas {
          border-radius:16px;
          box-shadow:0 8px 32px rgba(16,185,129,0.18);
          border:3px solid rgba(16,185,129,0.2);
        }
        .upi-scan-line {
          position:absolute; left:50%; transform:translateX(-50%);
          width:220px; height:3px;
          background:linear-gradient(90deg,transparent,#10B981,transparent);
          border-radius:2px; top:0;
          animation:ma-upi-scan 2.2s ease-in-out infinite;
          pointer-events:none;
        }
        .upi-instruction {
          font-size:12px; color:#64748B; text-align:center; margin-bottom:20px;
          line-height:1.6; padding:0 4px;
        }
        .upi-instruction span {
          display:inline-block; background:rgba(16,185,129,0.08);
          border:1px solid rgba(16,185,129,0.2); border-radius:8px;
          padding:6px 14px; font-weight:500; color:#065F46; margin-top:6px;
        }
        .upi-confirm-btn {
          width:100%; padding:14px; border:none; border-radius:16px; cursor:pointer;
          background:linear-gradient(135deg,#10B981,#059669); color:#fff;
          font-size:14px; font-weight:700; font-family:'DM Sans',sans-serif;
          box-shadow:0 8px 24px rgba(5,150,105,0.35); transition:all 0.28s;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .upi-confirm-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 14px 36px rgba(5,150,105,0.45); }
        .upi-confirm-btn:disabled { opacity:0.65; cursor:not-allowed; }
        .upi-note {
          font-size:11px; color:#94A3B8; text-align:center; margin-top:12px; line-height:1.5;
        }

        @media(max-width:680px){
          .ma-card { flex-direction:column; padding:22px; }
          .ma-actions { flex-direction:row; flex-wrap:wrap; min-width:auto; width:100%; }
          .ma-btn { flex:1; min-width:110px; }
          .ma-page-title { font-size:32px; }
          .ma-doc-img { width:80px; height:90px; }
          .ma-doc-name { font-size:16px; }
        }
      `}</style>

      {/* ════════ ANIMATED BACKGROUND ════════ */}
      <div className="ma-bg" aria-hidden="true">
        <div className="ma-dotgrid"></div>
        <div className="ma-blob ma-blob-1"></div>
        <div className="ma-blob ma-blob-2"></div>
        <div className="ma-blob ma-blob-3"></div>
        <div className="ma-blob ma-blob-4"></div>
        <div className="ma-ring ma-ring-1"></div>
        <div className="ma-ring ma-ring-2"></div>
        <div className="ma-ring ma-ring-3"></div>
        <div className="ma-ring ma-ring-4"></div>
        <div className="ma-pr ma-pr-1"></div>
        <div className="ma-pr ma-pr-2"></div>
        <div className="ma-pr ma-pr-3"></div>
        <div className="ma-pr ma-pr-4"></div>

        <svg className="ma-ecg-svg ma-ecg-bot" viewBox="0 0 1440 60" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 L100,30 L115,30 L122,8 L130,52 L136,0 L148,60 L156,30 L230,30 L310,30 L318,16 L326,44 L334,30 L430,30 L465,30 L472,10 L480,50 L486,2 L498,58 L506,30 L584,30 L665,30 L672,18 L680,42 L688,30 L775,30 L815,30 L822,8 L830,52 L836,0 L848,60 L856,30 L936,30 L1018,30 L1025,16 L1033,44 L1041,30 L1138,30 L1178,30 L1185,10 L1193,50 L1199,2 L1211,58 L1219,30 L1440,30"
            fill="none" stroke="url(#ecgg1)" strokeWidth="2.2" strokeDasharray="900" strokeDashoffset="900"
            style={{animation:'ma-ecg-draw 5.5s linear infinite'}}/>
          <defs>
            <linearGradient id="ecgg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0"/>
              <stop offset="20%" stopColor="#7C3AED" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8"/>
              <stop offset="80%" stopColor="#4F46E5" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="ma-ecg-svg ma-ecg-top" viewBox="0 0 1440 60" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 L170,30 L178,30 L184,13 L191,47 L195,3 L205,57 L211,30 L295,30 L390,30 L397,19 L404,41 L411,30 L510,30 L552,30 L558,11 L565,49 L570,2 L580,58 L586,30 L688,30 L770,30 L776,17 L783,43 L790,30 L888,30 L950,30 L956,12 L963,48 L968,3 L978,57 L984,30 L1075,30 L1155,30 L1161,19 L1168,41 L1175,30 L1295,30 L1440,30"
            fill="none" stroke="url(#ecgg2)" strokeWidth="1.6" strokeDasharray="600" strokeDashoffset="600"
            style={{animation:'ma-ecg-draw2 8.5s linear infinite 2s'}}/>
          <defs>
            <linearGradient id="ecgg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0"/>
              <stop offset="30%" stopColor="#EC4899" stopOpacity="0.5"/>
              <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="ma-ecg-svg ma-ecg-mid" viewBox="0 0 1440 60" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 L200,30 L208,22 L216,38 L224,30 L340,30 L380,30 L386,14 L393,46 L398,4 L408,56 L414,30 L520,30 L620,30 L626,21 L633,39 L640,30 L760,30 L820,30 L826,13 L833,47 L838,3 L848,57 L854,30 L970,30 L1060,30 L1066,22 L1073,38 L1080,30 L1200,30 L1440,30"
            fill="none" stroke="url(#ecgg3)" strokeWidth="1.2" strokeDasharray="400" strokeDashoffset="400"
            style={{animation:'ma-ecg-draw3 11s linear infinite 5s'}}/>
          <defs>
            <linearGradient id="ecgg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0"/>
              <stop offset="40%" stopColor="#818CF8" stopOpacity="0.4"/>
              <stop offset="60%" stopColor="#F472B6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#F472B6" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        {[
          {cls:'ma-sh1',c1:'#7C3AED',c2:'#4F46E5'},{cls:'ma-sh2',c1:'#EC4899',c2:'#F472B6'},
          {cls:'ma-sh3',c1:'#4F46E5',c2:'#818CF8'},{cls:'ma-sh4',c1:'#7C3AED',c2:'#EC4899'},
          {cls:'ma-sh5',c1:'#A855F7',c2:'#EC4899'},{cls:'ma-sh6',c1:'#4F46E5',c2:'#7C3AED'},
        ].map((h,i)=>(
          <div key={i} className={`ma-sheart ${h.cls}`}>
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id={`hg${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={h.c1}/><stop offset="100%" stopColor={h.c2}/>
              </linearGradient></defs>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill={`url(#hg${i})`}/>
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill="none" stroke={h.c1} strokeWidth="1.5" opacity="0.35"/>
            </svg>
          </div>
        ))}
        {[
          {cls:'ma-fh1',color:'#7C3AED',size:30},{cls:'ma-fh2',color:'#EC4899',size:24},
          {cls:'ma-fh3',color:'#4F46E5',size:28},{cls:'ma-fh4',color:'#A855F7',size:22},{cls:'ma-fh5',color:'#F472B6',size:18},
        ].map((h,i)=>(
          <div key={i} className={`ma-fheart ${h.cls}`} style={{width:h.size,height:h.size*0.9}}>
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill={h.color}/>
            </svg>
          </div>
        ))}
        <div className="ma-orbit-center ma-oc1">
          {[{dur:'12s',del:'0s',op:0.1,rad:'90px',c:'#7C3AED',sz:14},{dur:'18s',del:'6s',op:0.08,rad:'90px',c:'#EC4899',sz:10}].map((o,i)=>(
            <div key={i} className="ma-orbit-heart" style={{'--dur':o.dur,'--del':o.del,'--op':o.op,'--radius':o.rad}}>
              <svg width={o.sz} height={o.sz*0.9} viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill={o.c}/>
              </svg>
            </div>
          ))}
        </div>
        <div className="ma-orbit-center ma-oc2">
          {[{dur:'16s',del:'0s',op:0.09,rad:'70px',c:'#818CF8',sz:12},{dur:'22s',del:'8s',op:0.07,rad:'70px',c:'#F472B6',sz:9}].map((o,i)=>(
            <div key={i} className="ma-orbit-heart" style={{'--dur':o.dur,'--del':o.del,'--op':o.op,'--radius':o.rad}}>
              <svg width={o.sz} height={o.sz*0.9} viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill={o.c}/>
              </svg>
            </div>
          ))}
        </div>
        <div className="ma-cross ma-cross-1"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="2" width="8" height="28" rx="3" fill="rgba(167,139,250,0.28)"/><rect x="2" y="12" width="28" height="8" rx="3" fill="rgba(167,139,250,0.28)"/></svg></div>
        <div className="ma-cross ma-cross-2"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="2" width="8" height="28" rx="3" fill="rgba(244,114,182,0.22)"/><rect x="2" y="12" width="28" height="8" rx="3" fill="rgba(244,114,182,0.22)"/></svg></div>
        <div className="ma-cross ma-cross-3"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="2" width="8" height="28" rx="3" fill="rgba(129,140,248,0.2)"/><rect x="2" y="12" width="28" height="8" rx="3" fill="rgba(129,140,248,0.2)"/></svg></div>
        {[
          {t:'20%',l:'30%',w:6,dur:'2.5s',del:'0s'},{t:'35%',r:'22%',w:4,dur:'3.5s',del:'1s'},
          {t:'55%',l:'14%',w:5,dur:'2.1s',del:'0.5s'},{t:'72%',r:'38%',w:4,dur:'4s',del:'1.8s'},
          {t:'14%',l:'54%',w:7,dur:'3.1s',del:'0.8s'},{t:'82%',l:'62%',w:3,dur:'2.8s',del:'2.2s'},
          {t:'42%',r:'6%',w:5,dur:'3.6s',del:'1.4s'},{t:'65%',l:'32%',w:4,dur:'2.2s',del:'0.3s'},
        ].map((s,i)=>(
          <div key={i} className="ma-twinkle" style={{top:s.t,left:s.l,right:s.r,width:s.w,height:s.w,'--dur':s.dur,'--del':s.del}}/>
        ))}
      </div>

      {/* ════════ UPI QR MODAL ════════ */}
      {upiModal && (
        <div className="upi-overlay" onClick={(e)=>{ if(e.target.className==='upi-overlay') setUpiModal(null) }}>
          <div className="upi-modal">
            <button className="upi-close" onClick={()=>setUpiModal(null)}>✕</button>
            <div className="upi-label">UPI Payment</div>
            <div className="upi-title">Scan & Pay</div>
            <div className="upi-amount">Amount: <strong>₹{upiModal.amount}</strong></div>

            <div className="upi-qr-wrap">
              <canvas ref={qrCanvasRef} className="upi-qr-canvas"/>
              <div className="upi-scan-line"/>
            </div>

            <div className="upi-instruction">
              Open any UPI app — PhonePe, Google Pay, Paytm — and scan the QR code above.
              <br/>
              <span>UPI ID: {import.meta.env.VITE_UPI_ID || 'yourname@upi'}</span>
            </div>

            <button
              className="upi-confirm-btn"
              onClick={confirmUpiPayment}
              disabled={upiVerifying}
            >
              {upiVerifying ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:'ma-ring-cw 1s linear infinite'}}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Verifying…
                </>
              ) : (
                <>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  I've Paid — Confirm
                </>
              )}
            </button>
            <p className="upi-note">Only click after completing the payment in your UPI app.</p>
          </div>
        </div>
      )}

      {/* ════════ PAGE CONTENT ════════ */}
      <div className="ma-root">
        <div className="ma-inner">

          <div className="ma-hero">
            <div style={{display:'flex',justifyContent:'center',marginBottom:'14px'}}>
              <div className="ma-eyebrow">
                <span className="ma-eye-dot"></span>
                <span className="ma-eye-txt">Health Dashboard</span>
              </div>
            </div>
            <h1 className="ma-page-title">My <em>Appointments</em></h1>
            <p className="ma-page-sub">Track, manage and pay for all your medical appointments in one place.</p>
            {!loading && appointments.length > 0 && (
              <div className="ma-count-strip">
                <div className="ma-count-pill">
                  <div className="ma-count-pill-icon" style={{background:'rgba(124,58,237,0.1)'}}>📋</div>
                  <div><div className="ma-count-pill-num">{appointments.length}</div><div className="ma-count-pill-lbl">Total</div></div>
                </div>
                <div className="ma-count-pill">
                  <div className="ma-count-pill-icon" style={{background:'rgba(5,150,105,0.1)'}}>✅</div>
                  <div><div className="ma-count-pill-num">{appointments.filter(a=>a.payment&&!a.isCompleted&&!a.cancelled).length}</div><div className="ma-count-pill-lbl">Paid</div></div>
                </div>
                <div className="ma-count-pill">
                  <div className="ma-count-pill-icon" style={{background:'rgba(14,165,233,0.1)'}}>🎯</div>
                  <div><div className="ma-count-pill-num">{appointments.filter(a=>a.isCompleted).length}</div><div className="ma-count-pill-lbl">Done</div></div>
                </div>
              </div>
            )}
          </div>

          {loading && (
            <div className="ma-loader">
              <div className="ma-loader-hearts">
                {['#7C3AED','#EC4899','#4F46E5'].map((c,i)=>(
                  <div key={i} className="ma-loader-h">
                    <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill={c}/>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="ma-loader-txt">Loading your appointments…</p>
            </div>
          )}

          {!loading && appointments.length === 0 && (
            <div className="ma-empty">
              <div className="ma-empty-heart">
                <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="empty-hg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED"/><stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient></defs>
                  <path d="M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z" fill="url(#empty-hg)"/>
                </svg>
              </div>
              <div className="ma-empty-title">No appointments yet</div>
              <p className="ma-empty-sub">Your health journey starts here. Book your first appointment<br/>with a trusted specialist today.</p>
              <button className="ma-empty-btn" onClick={()=>navigate('/doctors')}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Browse Doctors
              </button>
            </div>
          )}

          {!loading && (
            <div className="ma-list">
              {appointments.map((item, index) => {
                const status = getStatus(item)
                const meta   = statusMeta[status]
                const isActive    = status === 'upcoming'
                const isPaid      = status === 'paid'
                const isCompleted = status === 'completed'
                const isCancelled = status === 'cancelled'

                return (
                  <div key={index} className="ma-card">
                    <div className="ma-ribbon" style={{background:meta.ribbon}}></div>
                    <div className="ma-doc-img">
                      <img src={item.docData.image} alt={item.docData.name}/>
                      <div className="ma-img-heart">💙</div>
                    </div>
                    <div className="ma-info">
                      <div className="ma-status-pill" style={{background:meta.bg, color:meta.color}}>
                        <span className="ma-status-dot" style={{background:meta.dot}}></span>
                        {meta.label}
                      </div>
                      <div className="ma-doc-name">{item.docData.name}</div>
                      <div className="ma-doc-spec">{item.docData.speciality}</div>
                      <div className="ma-meta">
                        <div className="ma-meta-row">
                          <svg className="ma-meta-icon" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <span>{item.docData.address.line1}, {item.docData.address.line2}</span>
                        </div>
                      </div>
                      <div className="ma-datetime-pill">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {slotDateFormat(item.slotDate)} &nbsp;·&nbsp; {item.slotTime}
                      </div>
                    </div>

                    <div className="ma-actions">
                      {/* Step 1 — show "Pay Online" */}
                      {isActive && payment !== item._id && (
                        <button className="ma-btn ma-btn-pay" onClick={()=>setPayment(item._id)}>
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                          </svg>
                          Pay Online
                        </button>
                      )}

                      {/* Step 2 — show PayPal + UPI options */}
                      {isActive && payment === item._id && (
                        <>
                          <button className="ma-btn ma-btn-paypal" onClick={()=>appointmentPaypal(item._id)}>
                            <img src={assets.paypal_logo} alt="PayPal"/>
                          </button>
                          <button className="ma-btn ma-btn-upi" onClick={()=>appointmentUpi(item._id)}>
                            {/* UPI icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <rect x="2" y="5" width="20" height="14" rx="3"/>
                              <path d="M2 10h20"/>
                            </svg>
                            Pay via UPI
                          </button>
                        </>
                      )}

                      {isPaid && (
                        <button className="ma-btn ma-btn-paid">
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                          </svg>
                          Paid
                        </button>
                      )}
                      {isCompleted && (
                        <button className="ma-btn ma-btn-done">
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Completed
                        </button>
                      )}
                      {!item.cancelled && !item.isCompleted && (
                        <button className="ma-btn ma-btn-cancel" onClick={()=>cancelAppointment(item._id)}>
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                          Cancel
                        </button>
                      )}
                      {isCancelled && (
                        <button className="ma-btn ma-btn-cancelled">
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                          </svg>
                          Cancelled
                        </button>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default MyAppointments