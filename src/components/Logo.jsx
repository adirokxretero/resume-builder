import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
      <div style={{
        width: '34px',
        height: '34px',
        background: 'linear-gradient(135deg, #c05621 0%, #e07a5f 100%)',
        borderRadius: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(192,86,33,0.25)',
      }}>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>R</span>
      </div>
      <span style={{
        fontSize: '18px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color: light ? '#faf9f6' : '#2c2c2c',
      }}>
        Resume<span style={{ color: '#c05621' }}>Forge</span>
      </span>
    </Link>
  )
}
