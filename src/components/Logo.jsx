import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  const textColor = light ? '#fff' : '#f0ece6'

  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <div style={{
        width: '32px',
        height: '32px',
        background: 'linear-gradient(135deg, #c05621 0%, #e8944a 100%)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(192,86,33,0.3)',
      }}>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>R</span>
      </div>
      <span style={{
        fontSize: '17px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: textColor,
      }}>
        Resume<span style={{ color: '#e8944a' }}>Forge</span>
      </span>
    </Link>
  )
}
