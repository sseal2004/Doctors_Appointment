import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        .td-root {
          font-family: 'Outfit', sans-serif;
          background: #fff;
          padding: 88px 0 80px;
        }

        .td-head { text-align: center; margin-bottom: 52px; }

        .td-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(13,31,53,0.05);
          border: 1px solid rgba(13,31,53,0.1);
          border-radius: 100px; padding: 5px 16px;
          font-size: 11px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #0D1F35;
          margin-bottom: 16px;
        }

        .td-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px; font-weight: 700; color: #0D1F35;
          letter-spacing: -1px; line-height: 1.15; margin-bottom: 12px;
        }
        .td-title em { font-style: italic; color: #1FAD96; }

        .td-sub {
          font-size: 15px; font-weight: 300; color: #64748B;
          max-width: 380px; margin: 0 auto; line-height: 1.7;
        }

        .td-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding: 0 24px;
        }

        .td-card {
          border-radius: 24px; overflow: hidden; cursor: pointer;
          background: #F7F8FC;
          border: 1px solid #E8EEF8;
          transition: all 0.35s cubic-bezier(0.25,0.8,0.25,1);
        }
        .td-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 64px rgba(13,31,53,0.13);
          border-color: rgba(31,173,150,0.35);
        }

        .td-img-wrap {
          height: 188px;
          display: flex; align-items: flex-end; justify-content: center;
          overflow: hidden; position: relative;
        }
        .td-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.4s ease;
        }
        .td-card:hover .td-img-wrap img { transform: scale(1.03); }

        .td-avail {
          position: absolute; top: 10px; right: 10px;
          background: rgba(255,255,255,0.95);
          border-radius: 100px; padding: 4px 10px;
          font-size: 10px; font-weight: 600;
          display: flex; align-items: center; gap: 5px;
          backdrop-filter: blur(4px);
          color: #334155;
        }
        .td-avail-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .dot-on { background: #1FAD96; }
        .dot-off { background: #CBD5E1; }

        .td-info { padding: 16px; }
        .td-name {
          font-size: 13px; font-weight: 600; color: #0D1F35;
          margin-bottom: 3px; line-height: 1.3;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .td-spec { font-size: 11px; color: #94A3B8; font-weight: 300; }

        .td-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 12px; padding-top: 10px;
          border-top: 1px solid #E8EEF8;
        }
        .td-stars { font-size: 11px; color: #C9A84C; font-weight: 500; }
        .td-badge {
          font-size: 10px; font-weight: 500;
          background: #EBF7F5; color: #0F7264;
          padding: 3px 9px; border-radius: 100px;
        }

        .td-more-wrap { text-align: center; margin-top: 44px; }
        .td-more-btn {
          background: transparent;
          border: 1.5px solid #0D1F35;
          color: #0D1F35;
          border-radius: 100px; padding: 13px 44px;
          font-size: 14px; font-weight: 500;
          cursor: pointer; transition: all 0.3s;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.3px;
        }
        .td-more-btn:hover { background: #0D1F35; color: #fff; transform: translateY(-1px); }

        @media (max-width: 1024px) {
          .td-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 768px) {
          .td-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; padding: 0 16px; }
          .td-title { font-size: 32px; }
          .td-root { padding: 60px 0; }
        }
      `}</style>

      <div className="td-root">
        <div className="td-head">
          <div className="td-eyebrow">Hand-picked for you</div>
          <h2 className="td-title">Top <em>Doctors</em> to Book</h2>
          <p className="td-sub">Verified, board-certified specialists ready to see you today.</p>
        </div>

        <div className="td-grid">
          {doctors.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="td-card"
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            >
              <div className="td-img-wrap">
                <div className={`td-avail`}>
                  <span className={`td-avail-dot ${item.available ? 'dot-on' : 'dot-off'}`}></span>
                  {item.available ? 'Available' : 'Busy'}
                </div>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="td-info">
                <div className="td-name">{item.name}</div>
                <div className="td-spec">{item.speciality}</div>
                <div className="td-footer">
                  <div className="td-stars">★★★★★</div>
                  <div className="td-badge">{item.available ? 'Top Rated' : 'Verified'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

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