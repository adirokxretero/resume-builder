import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '6px 14px 6px 10px',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #2A2A3A',
        borderRadius: '50px',
      }}>
        <div style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 14px rgba(0,212,255,0.35)',
        }}>
          <span style={{ color: '#0A0A0F', fontWeight: 800, fontSize: '12px', fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>R</span>
        </div>
        <span style={{
          fontSize: '14px', fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700, letterSpacing: '-0.03em', color: '#F0F0F5',
        }}>
          Resume<span style={{ color: '#00D4FF' }}>Forge</span>
        </span>
      </div>
    </Link>
  )
}
