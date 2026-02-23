import Logo from './Logo'

export default function Footer() {
  const linkStyle = {
    color: 'rgba(255,255,255,0.35)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontSize: '13px',
    letterSpacing: '0.01em',
  }

  return (
    <footer style={{ backgroundColor: '#0a0a0c', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <Logo light />
          <div style={{ display: 'flex', gap: '28px' }}>
            <a href="#features" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#e8944a'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>Features</a>
            <a href="#templates" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#e8944a'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>Templates</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#e8944a'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>GitHub</a>
          </div>
        </div>
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
          &copy; {new Date().getFullYear()} ResumeForge
        </div>
      </div>
    </footer>
  )
}
