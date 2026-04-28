import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Outfit:wght@300;400;500;600&display=swap');

  .doctors-page {
    font-family: 'Outfit', sans-serif;
    background: #f7f5f0;
    min-height: 100vh;
    padding: 48px 40px 80px;
    position: relative;
    overflow: hidden;
  }

  .doctors-page::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .doctors-page::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -80px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* HEADER */
  .doc-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 48px;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(0,0,0,0.07);
  }

  .doc-header-left h1 {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 400;
    color: #1a1a2e;
    line-height: 1.1;
    letter-spacing: -0.5px;
  }

  .doc-header-left h1 em {
    font-style: italic;
    color: #6366f1;
  }

  .doc-header-left p {
    margin-top: 8px;
    font-size: 14px;
    color: #9ca3af;
    font-weight: 300;
    letter-spacing: 0.02em;
  }

  .doc-count-pill {
    background: #6366f1;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 100px;
    letter-spacing: 0.03em;
    box-shadow: 0 4px 14px rgba(99,102,241,0.3);
  }

  /* LAYOUT */
  .doc-layout {
    display: flex;
    gap: 36px;
    align-items: flex-start;
  }

  /* SIDEBAR */
  .doc-sidebar {
    width: 210px;
    flex-shrink: 0;
    position: sticky;
    top: 24px;
  }

  .sidebar-heading {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9ca3af;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .doc-filter-btn-mobile {
    display: none;
    width: 100%;
    padding: 10px;
    border-radius: 12px;
    border: 1.5px solid #6366f1;
    background: #fff;
    color: #6366f1;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .spec-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .spec-item {
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1.5px solid transparent;
    font-size: 14px;
    color: #6b7280;
    font-weight: 400;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
  }

  .spec-item::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d1d5db;
    flex-shrink: 0;
    transition: all 0.2s;
  }

  .spec-item:hover {
    background: #fff;
    color: #1a1a2e;
    border-color: rgba(99,102,241,0.15);
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }

  .spec-item:hover::before {
    background: #6366f1;
  }

  .spec-item.active {
    background: #fff;
    color: #6366f1;
    border-color: rgba(99,102,241,0.3);
    font-weight: 500;
    box-shadow: 0 2px 16px rgba(99,102,241,0.12);
  }

  .spec-item.active::before {
    background: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
  }

  .sidebar-divider {
    height: 1px;
    background: rgba(0,0,0,0.07);
    margin: 18px 0;
  }

  .sidebar-tip {
    font-size: 12px;
    color: #c4b5fd;
    background: rgba(99,102,241,0.06);
    border: 1px solid rgba(99,102,241,0.12);
    border-radius: 10px;
    padding: 10px 14px;
    line-height: 1.5;
  }

  /* GRID */
  .doc-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 22px;
    align-content: start;
  }

  /* CARD */
  .doc-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    border: 1.5px solid rgba(0,0,0,0.05);
    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    animation: cardIn 0.4s ease both;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .doc-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(99,102,241,0.12), 0 4px 16px rgba(0,0,0,0.06);
    border-color: rgba(99,102,241,0.25);
  }

  .doc-card:hover .card-img {
    transform: scale(1.07);
    filter: brightness(1.02);
  }

  .doc-card:hover .book-btn {
    opacity: 1;
    transform: translateY(0px);
  }

  .doc-card:hover .card-specialty {
    color: #6366f1;
  }

  /* Image area */
  .card-img-wrap {
    overflow: hidden;
    height: 190px;
    background: linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%);
    position: relative;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s;
  }

  .avail-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(6px);
    border-radius: 100px;
    padding: 4px 10px 4px 8px;
    font-size: 11px;
    font-weight: 500;
    letter-radius: 0.03em;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .avail-tag.on { color: #059669; }
  .avail-tag.off { color: #9ca3af; }

  .avail-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .avail-dot.on {
    background: #10b981;
    box-shadow: 0 0 0 2px rgba(16,185,129,0.2);
    animation: pulse-dot 2s infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 2px rgba(16,185,129,0.2); }
    50% { box-shadow: 0 0 0 5px rgba(16,185,129,0.1); }
  }

  .avail-dot.off { background: #d1d5db; }

  /* Card body */
  .card-body {
    padding: 16px 18px 18px;
  }

  .card-specialty {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #9ca3af;
    font-weight: 600;
    margin-bottom: 5px;
    transition: color 0.2s;
  }

  .card-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 400;
    color: #1a1a2e;
    line-height: 1.2;
    margin-bottom: 14px;
  }

  .book-btn {
    width: 100%;
    padding: 10px;
    background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    opacity: 0;
    transform: translateY(6px);
    transition: all 0.3s ease;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 14px rgba(99,102,241,0.3);
  }

  .book-btn:hover {
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
    box-shadow: 0 6px 20px rgba(99,102,241,0.4);
  }

  /* EMPTY */
  .doc-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 20px;
    color: #9ca3af;
    font-size: 15px;
  }

  /* RESPONSIVE */
  @media (max-width: 640px) {
    .doctors-page { padding: 28px 20px 60px; }
    .doc-header { flex-direction: column; align-items: flex-start; gap: 14px; }
    .doc-header-left h1 { font-size: 34px; }
    .doc-layout { flex-direction: column; }
    .doc-sidebar { width: 100%; position: static; }
    .doc-filter-btn-mobile { display: block; }
    .spec-list.hidden-mobile { display: none; }
    .doc-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
`

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  const specialties = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ]

  return (
    <>
      <style>{styles}</style>

      <div className="doctors-page">

        {/* HEADER */}
        <div className="doc-header">
          <div className="doc-header-left">
            <h1>Find Your <em>Doctor</em></h1>
            <p>Browse through our trusted network of specialists</p>
          </div>
          <div className="doc-count-pill">
            {filterDoc.length} Specialist{filterDoc.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="doc-layout">

          {/* SIDEBAR */}
          <div className="doc-sidebar">
            {/* Mobile toggle */}
            <button
              className="doc-filter-btn-mobile"
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? "Hide Filters ↑" : "Filter by Specialty ↓"}
            </button>

            <div className={`spec-list${showFilter ? '' : ' hidden-mobile'}`}
              style={{ display: undefined }} // let CSS handle it
            >
              <p className="sidebar-heading">Specialty</p>
              {specialties.map((spec, index) => (
                <div
                  key={index}
                  className={`spec-item${speciality === spec ? ' active' : ''}`}
                  onClick={() =>
                    speciality === spec
                      ? navigate('/doctors')
                      : navigate(`/doctors/${spec}`)
                  }
                >
                  {spec}
                </div>
              ))}
            </div>

            <div className="sidebar-divider" />
            <div className="sidebar-tip">
              💡 Click a specialty to filter, click again to clear
            </div>
          </div>

          {/* DOCTORS GRID */}
          <div className="doc-grid">
            {filterDoc.length === 0 ? (
              <p className="doc-empty">No doctors found 😔</p>
            ) : (
              filterDoc.map((item, index) => (
                <div
                  key={index}
                  className="doc-card"
                  style={{ animationDelay: `${index * 0.06}s` }}
                  onClick={() => {
                    navigate(`/appointment/${item._id}`)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  {/* Image */}
                  <div className="card-img-wrap">
                    <img
                      className="card-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className={`avail-tag ${item.available ? 'on' : 'off'}`}>
                      <span className={`avail-dot ${item.available ? 'on' : 'off'}`} />
                      {item.available ? 'Available' : 'Not Available'}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="card-body">
                    <p className="card-specialty">{item.speciality}</p>
                    <h2 className="card-name">{item.name}</h2>
                    <button className="book-btn">Book Appointment →</button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default Doctors