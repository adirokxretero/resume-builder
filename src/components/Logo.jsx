import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '6px 14px 6px 10px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '50px',
      }}>
        <div style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #c05621 0%, #e8944a 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 12px rgba(192,86,33,0.4)',
        }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '12px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>R</span>
        </div>
        <span style={{
          fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, letterSpacing: '-0.03em', color: '#f0ece6',
        }}>
          Resume<span style={{ color: '#e8944a' }}>Forge</span>
        </span>
      </div>
    </Link>
  )
}
