import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#a3a098', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <Logo light />
          <div style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
            <a href="#features" style={{ color: '#a3a098', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#faf9f6'} onMouseLeave={e => e.currentTarget.style.color = '#a3a098'}>Features</a>
            <a href="#templates" style={{ color: '#a3a098', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#faf9f6'} onMouseLeave={e => e.currentTarget.style.color = '#a3a098'}>Templates</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#a3a098', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#faf9f6'} onMouseLeave={e => e.currentTarget.style.color = '#a3a098'}>GitHub</a>
          </div>
        </div>
        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #333', textAlign: 'center', fontSize: '13px', color: '#666' }}>
          &copy; {new Date().getFullYear()} ResumeForge. Handcrafted with care.
        </div>
      </div>
    </footer>
  )
}
