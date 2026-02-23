import Logo from './Logo'

export default function Footer() {
  const linkStyle = {
    color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
    transition: 'color 0.2s', fontSize: '14px',
  }

  return (
    <footer style={{ backgroundColor: '#08080C', borderTop: '1px solid #2A2A3A', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <div>
            <Logo />
            <p style={{ fontSize: '13px', color: '#8A8A9A', marginTop: '10px', letterSpacing: '0.01em' }}>
              Build professional resumes in minutes, not hours.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#features" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>Features</a>
            <a href="#templates" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>Templates</a>
            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)' }} />
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
              <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>
        <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.15)' }}>
            &copy; {new Date().getFullYear()} ResumeForge. All rights reserved.
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.1)' }}>
            Designed with precision.
          </span>
        </div>
      </div>
    </footer>
  )
}
