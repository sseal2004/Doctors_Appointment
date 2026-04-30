import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const DOCS_PER_PAGE = 6

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

  .dp {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F0F4FF; min-height: 100vh;
    position: relative; overflow-x: hidden;
  }
  .dp-bg-blob1 {
    position: fixed; pointer-events: none; z-index: 0;
    top: -180px; right: -180px; width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%); filter: blur(40px);
  }
  .dp-bg-blob2 {
    position: fixed; pointer-events: none; z-index: 0;
    bottom: -120px; left: -120px; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%); filter: blur(40px);
  }
  .dp-bg-dots {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .dp-inner { position: relative; z-index: 1; padding: 52px 48px 90px; max-width: 1280px; margin: 0 auto; }

  /* HERO */
  .dp-hero { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 48px; gap: 24px; }
  .dp-hero-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.22);
    border-radius: 100px; padding: 5px 14px;
    font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 14px;
  }
  .dp-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; animation: dp-pulse 2s infinite; }
  @keyframes dp-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.4);} 50%{box-shadow:0 0 0 4px rgba(99,102,241,0.08);} }
  .dp-hero-h1 {
    font-family: 'Fraunces', serif; font-size: clamp(36px,4.5vw,56px); font-weight: 800; color: #0F172A;
    line-height: 1.1; letter-spacing: -2px; margin-bottom: 10px;
  }
  .dp-hero-h1 em {
    font-style: italic;
    background: linear-gradient(135deg, #6366F1 0%, #3B82F6 60%, #06B6D4 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .dp-hero-sub { font-size: 14px; font-weight: 400; color: #94A3B8; letter-spacing: 0.01em; line-height: 1.6; }
  .dp-hero-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
  .dp-count-card {
    background: #fff; border: 1px solid rgba(99,102,241,0.15); border-radius: 18px; padding: 16px 24px; text-align: center;
    box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.04);
  }
  .dp-count-num {
    font-family: 'Fraunces', serif; font-size: 30px; font-weight: 800;
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1;
  }
  .dp-count-lbl { font-size: 10px; font-weight: 600; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 3px; }

  /* DIVIDER */
  .dp-divider { height: 1px; margin-bottom: 40px; background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%); position: relative; }
  .dp-divider::after { content: ''; position: absolute; left: 0; top: -2px; width: 60px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, #6366F1, #3B82F6); box-shadow: 0 0 12px rgba(99,102,241,0.4); }

  /* LAYOUT */
  .dp-layout { display: flex; gap: 32px; align-items: flex-start; }

  /* SIDEBAR */
  .dp-sidebar { width: 224px; flex-shrink: 0; position: sticky; top: 24px; display: flex; flex-direction: column; gap: 8px; }
  .dp-sidebar-card { background: #fff; border: 1px solid rgba(99,102,241,0.1); border-radius: 20px; padding: 22px 18px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
  .dp-sidebar-heading {
    font-size: 9px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: #CBD5E1; margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .dp-sidebar-heading::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, #E2E8F0, transparent); }
  .dp-spec-list { display: flex; flex-direction: column; gap: 4px; }
  .dp-spec-item {
    padding: 9px 12px; border-radius: 11px; cursor: pointer;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1); border: 1.5px solid transparent;
    font-size: 13.5px; color: #64748B; font-weight: 400; background: transparent;
    display: flex; align-items: center; gap: 10px; user-select: none;
  }
  .dp-spec-item::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #E2E8F0; flex-shrink: 0; transition: all 0.22s; }
  .dp-spec-item:hover { background: rgba(99,102,241,0.06); border-color: rgba(99,102,241,0.18); color: #4F46E5; transform: translateX(2px); }
  .dp-spec-item:hover::before { background: #6366F1; }
  .dp-spec-item.active { background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.07)); border-color: rgba(99,102,241,0.3); color: #4F46E5; font-weight: 600; box-shadow: 0 2px 12px rgba(99,102,241,0.12); }
  .dp-spec-item.active::before { background: #6366F1; box-shadow: 0 0 0 3px rgba(99,102,241,0.18); }
  .dp-spec-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; background: rgba(99,102,241,0.07); transition: background 0.22s; }
  .dp-spec-item:hover .dp-spec-icon, .dp-spec-item.active .dp-spec-icon { background: rgba(99,102,241,0.14); }
  .dp-spec-name { flex: 1; }
  .dp-tip { background: linear-gradient(135deg, rgba(99,102,241,0.07), rgba(59,130,246,0.05)); border: 1px solid rgba(99,102,241,0.15); border-radius: 14px; padding: 13px 15px; font-size: 11.5px; color: #6366F1; line-height: 1.6; font-weight: 400; }
  .dp-filter-mobile { display: none; width: 100%; padding: 11px 16px; border-radius: 12px; border: 1.5px solid rgba(99,102,241,0.3); background: #fff; color: #6366F1; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.1); }

  /* GRID SECTION */
  .dp-grid-section { flex: 1; display: flex; flex-direction: column; gap: 32px; }

  /* GRID */
  .dp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 20px; align-content: start; }

  /* CARD */
  .dp-card {
    background: #fff; border-radius: 22px; overflow: hidden; cursor: pointer;
    border: 1.5px solid rgba(99,102,241,0.08);
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1); position: relative;
    animation: dp-card-in 0.45s ease both;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
  }
  @keyframes dp-card-in { from{opacity:0;transform:translateY(18px) scale(0.98);} to{opacity:1;transform:translateY(0) scale(1);} }
  .dp-card::after { content:''; position:absolute; inset:0; border-radius:22px; background:linear-gradient(135deg,rgba(99,102,241,0.04),rgba(59,130,246,0.03)); opacity:0; transition:opacity 0.3s; pointer-events:none; }
  .dp-card:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 24px 60px rgba(99,102,241,0.15),0 8px 24px rgba(59,130,246,0.1),0 1px 4px rgba(0,0,0,0.05); border-color:rgba(99,102,241,0.3); }
  .dp-card:hover::after { opacity:1; }
  .dp-card:hover .dp-card-img { transform:scale(1.08); }
  .dp-card:hover .dp-book-btn { opacity:1; transform:translateY(0); }
  .dp-card:hover .dp-card-specialty { color:#6366F1; }
  .dp-card:hover .dp-card-name-arrow { opacity:1; transform:translateX(0); }

  .dp-img-wrap { overflow:hidden; height:200px; position:relative; background:linear-gradient(145deg,#EEF2FF 0%,#E0E7FF 50%,#DBEAFE 100%); }
  .dp-img-wrap::before { content:''; position:absolute; bottom:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:rgba(99,102,241,0.12); pointer-events:none; z-index:0; }
  .dp-img-wrap::after { content:''; position:absolute; top:-20px; left:-20px; width:80px; height:80px; border-radius:50%; background:rgba(59,130,246,0.1); pointer-events:none; z-index:0; }
  .dp-card-img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 0.55s cubic-bezier(0.22,1,0.36,1); position:relative; z-index:1; }
  .dp-img-gradient { position:absolute; bottom:0; left:0; right:0; height:60px; z-index:2; background:linear-gradient(to top,rgba(255,255,255,0.6),transparent); pointer-events:none; }
  .dp-avail { position:absolute; top:10px; right:10px; z-index:3; display:flex; align-items:center; gap:5px; background:rgba(255,255,255,0.94); backdrop-filter:blur(8px); border-radius:100px; padding:4px 10px 4px 8px; font-size:11px; font-weight:600; box-shadow:0 2px 10px rgba(0,0,0,0.1); }
  .dp-avail.on { color:#059669; border:1px solid rgba(16,185,129,0.2); }
  .dp-avail.off { color:#94A3B8; border:1px solid rgba(148,163,184,0.2); }
  .dp-avail-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .dp-avail-dot.on { background:#10B981; animation:dp-avail-pulse 2s infinite; }
  @keyframes dp-avail-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4);} 50%{box-shadow:0 0 0 4px rgba(16,185,129,0.08);} }
  .dp-avail-dot.off { background:#CBD5E1; }

  .dp-card-body { padding:18px 20px 20px; position:relative; }
  .dp-card-specialty { display:inline-block; font-size:10px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; color:#94A3B8; margin-bottom:6px; transition:color 0.25s; }
  .dp-card-name { font-family:'Fraunces',serif; font-size:18px; font-weight:700; color:#0F172A; line-height:1.25; margin-bottom:4px; display:flex; align-items:center; gap:8px; }
  .dp-card-name-arrow { font-size:14px; color:#6366F1; opacity:0; transform:translateX(-6px); transition:all 0.25s; flex-shrink:0; }
  .dp-card-line { height:2px; border-radius:2px; margin-bottom:14px; background:linear-gradient(90deg,#E2E8F0,transparent); transition:all 0.35s; }
  .dp-card:hover .dp-card-line { background:linear-gradient(90deg,#6366F1,#3B82F6,transparent); box-shadow:0 0 10px rgba(99,102,241,0.3); }
  .dp-book-btn { width:100%; padding:11px; background:linear-gradient(135deg,#6366F1 0%,#3B82F6 100%); color:#fff; border:none; border-radius:12px; font-family:'Plus Jakarta Sans',sans-serif; font-size:13px; font-weight:700; cursor:pointer; opacity:0; transform:translateY(8px); transition:all 0.3s cubic-bezier(0.22,1,0.36,1); letter-spacing:0.3px; box-shadow:0 6px 20px rgba(99,102,241,0.35); display:flex; align-items:center; justify-content:center; gap:6px; }
  .dp-book-btn:hover { background:linear-gradient(135deg,#4F46E5,#2563EB); box-shadow:0 8px 28px rgba(99,102,241,0.5); }

  .dp-empty { grid-column:1/-1; text-align:center; padding:80px 20px; }
  .dp-empty-icon { width:64px; height:64px; border-radius:20px; background:rgba(99,102,241,0.08); display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:28px; }
  .dp-empty-text { font-size:15px; color:#94A3B8; font-weight:400; }

  /* ══ PAGINATION ══ */
  .dp-pagination {
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; flex-wrap: wrap;
    background: #fff;
    border: 1px solid rgba(99,102,241,0.1);
    border-radius: 20px; padding: 18px 24px;
    box-shadow: 0 4px 20px rgba(99,102,241,0.07), 0 1px 4px rgba(0,0,0,0.03);
  }

  .dp-page-info { font-size: 12px; font-weight: 500; color: #94A3B8; white-space: nowrap; }
  .dp-page-info strong { color: #6366F1; font-weight: 700; }

  .dp-page-btns { display: flex; align-items: center; gap: 5px; }

  .dp-page-arrow {
    width: 36px; height: 36px; border-radius: 10px;
    border: 1.5px solid rgba(99,102,241,0.18);
    background: #F8FAFF; color: #6366F1;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 18px; font-weight: 700; line-height: 1;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    user-select: none; padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .dp-page-arrow:hover:not(:disabled) {
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    border-color: transparent; color: #fff;
    transform: translateY(-2px); box-shadow: 0 6px 18px rgba(99,102,241,0.32);
  }
  .dp-page-arrow:disabled { opacity: 0.28; cursor: not-allowed; }

  .dp-page-num {
    min-width: 36px; height: 36px; padding: 0 6px;
    border-radius: 10px; border: 1.5px solid rgba(99,102,241,0.1);
    background: #F8FAFF; color: #64748B;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 13px; font-weight: 600;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    user-select: none; font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .dp-page-num:hover {
    border-color: rgba(99,102,241,0.3); color: #6366F1;
    background: rgba(99,102,241,0.06);
    transform: translateY(-2px); box-shadow: 0 4px 14px rgba(99,102,241,0.12);
  }
  .dp-page-num.active {
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    border-color: transparent; color: #fff; font-weight: 700;
    box-shadow: 0 6px 18px rgba(99,102,241,0.38);
    transform: translateY(-1px);
  }
  .dp-page-dots { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: #CBD5E1; font-size: 13px; letter-spacing: 1px; user-select: none; }

  .dp-page-right { font-size: 12px; color: #94A3B8; white-space: nowrap; }
  .dp-page-right strong { color: #6366F1; font-weight: 700; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .dp-inner { padding: 32px 20px 60px; }
    .dp-hero { flex-direction: column; align-items: flex-start; }
    .dp-layout { flex-direction: column; }
    .dp-sidebar { width: 100%; position: static; }
    .dp-filter-mobile { display: block; }
    .dp-spec-list.hidden { display: none; }
    .dp-grid { grid-template-columns: repeat(2,1fr); gap: 14px; }
    .dp-hero-h1 { font-size: 34px; }
    .dp-pagination { flex-direction: column; align-items: flex-start; gap: 12px; }
    .dp-page-right { display: none; }
  }
  @media (max-width: 480px) { .dp-grid { grid-template-columns: 1fr; } }
`

const specialtyMeta = {
  "General physician":  { emoji: "🩺" },
  "Gynecologist":       { emoji: "🌸" },
  "Dermatologist":      { emoji: "✨" },
  "Pediatricians":      { emoji: "🧒" },
  "Neurologist":        { emoji: "🧠" },
  "Gastroenterologist": { emoji: "💊" },
}

function getPageNums(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total]
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  useEffect(() => {
    setFilterDoc(speciality ? doctors.filter(doc => doc.speciality === speciality) : doctors)
    setCurrentPage(1)
  }, [doctors, speciality])

  const specialties = Object.keys(specialtyMeta)
  const totalPages = Math.ceil(filterDoc.length / DOCS_PER_PAGE)
  const startIdx = (currentPage - 1) * DOCS_PER_PAGE
  const endIdx = startIdx + DOCS_PER_PAGE
  const pageDocs = filterDoc.slice(startIdx, endIdx)
  const pageNums = getPageNums(currentPage, totalPages)

  const goToPage = (p) => {
    setCurrentPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{styles}</style>
      <div className="dp">
        <div className="dp-bg-blob1" />
        <div className="dp-bg-blob2" />
        <div className="dp-bg-dots" />

        <div className="dp-inner">

          {/* HERO */}
          <div className="dp-hero">
            <div className="dp-hero-text">
              <div className="dp-hero-pill"><span className="dp-pill-dot" />MedCare Network</div>
              <h1 className="dp-hero-h1">Find Your<br /><em>Perfect Doctor</em></h1>
              <p className="dp-hero-sub">Browse our verified network of specialists and book in seconds.</p>
            </div>
            <div className="dp-hero-right">
              <div className="dp-count-card">
                <div className="dp-count-num">{filterDoc.length}</div>
                <div className="dp-count-lbl">Specialist{filterDoc.length !== 1 ? 's' : ''}</div>
              </div>
            </div>
          </div>

          <div className="dp-divider" />

          {/* LAYOUT */}
          <div className="dp-layout">

            {/* SIDEBAR */}
            <div className="dp-sidebar">
              <button className="dp-filter-mobile" onClick={() => setShowFilter(!showFilter)}>
                {showFilter ? "▲ Hide Filters" : "▼ Filter by Specialty"}
              </button>
              <div className="dp-sidebar-card" style={{ display: showFilter || window.innerWidth > 768 ? 'block' : undefined }}>
                <div className={`dp-spec-list${showFilter ? '' : ' hidden'}`} style={{ display: undefined }}>
                  <div className="dp-sidebar-heading">Specialty</div>
                  {specialties.map((spec, i) => (
                    <div
                      key={i}
                      className={`dp-spec-item${speciality === spec ? ' active' : ''}`}
                      onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                    >
                      <span className="dp-spec-icon">{specialtyMeta[spec].emoji}</span>
                      <span className="dp-spec-name">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dp-tip">💡 Click a specialty to filter — click again to clear.</div>
            </div>

            {/* GRID + PAGINATION */}
            <div className="dp-grid-section">

              {/* GRID */}
              <div className="dp-grid">
                {filterDoc.length === 0 ? (
                  <div className="dp-empty">
                    <div className="dp-empty-icon">🔍</div>
                    <p className="dp-empty-text">No doctors found for this specialty.</p>
                  </div>
                ) : (
                  pageDocs.map((item, index) => (
                    <div
                      key={item._id}
                      className="dp-card"
                      style={{ animationDelay: `${index * 0.055}s` }}
                      onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    >
                      <div className="dp-img-wrap">
                        <img className="dp-card-img" src={item.image} alt={item.name} />
                        <div className="dp-img-gradient" />
                        <div className={`dp-avail ${item.available ? 'on' : 'off'}`}>
                          <span className={`dp-avail-dot ${item.available ? 'on' : 'off'}`} />
                          {item.available ? 'Available' : 'Unavailable'}
                        </div>
                      </div>
                      <div className="dp-card-body">
                        <div className="dp-card-specialty">{item.speciality}</div>
                        <h2 className="dp-card-name">
                          {item.name}
                          <span className="dp-card-name-arrow">→</span>
                        </h2>
                        <div className="dp-card-line" />
                        <button className="dp-book-btn">
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="dp-pagination">

                  {/* Left: results info */}
                  <div className="dp-page-info">
                    Showing <strong>{startIdx + 1}–{Math.min(endIdx, filterDoc.length)}</strong> of <strong>{filterDoc.length}</strong> doctors
                  </div>

                  {/* Center: page numbers */}
                  <div className="dp-page-btns">
                    <button
                      className="dp-page-arrow"
                      disabled={currentPage === 1}
                      onClick={() => goToPage(currentPage - 1)}
                      aria-label="Previous page"
                    >‹</button>

                    {pageNums.map((p, i) =>
                      p === '...'
                        ? <div key={`dots-${i}`} className="dp-page-dots">···</div>
                        : (
                          <button
                            key={p}
                            className={`dp-page-num${currentPage === p ? ' active' : ''}`}
                            onClick={() => goToPage(p)}
                          >{p}</button>
                        )
                    )}

                    <button
                      className="dp-page-arrow"
                      disabled={currentPage === totalPages}
                      onClick={() => goToPage(currentPage + 1)}
                      aria-label="Next page"
                    >›</button>
                  </div>

                  {/* Right: page X of Y */}
                  <div className="dp-page-right">
                    Page <strong>{currentPage}</strong> of {totalPages}
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctors