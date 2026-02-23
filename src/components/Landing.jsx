import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'

const features = [
  {
    icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
    title: 'Write once, tweak forever',
    desc: 'Type your info and the layout handles itself. Switch templates without losing a word.',
  },
  {
    icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Live preview',
    desc: 'Every keystroke updates the resume in real-time. No guessing, no surprises.',
  },
  {
    icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
    title: 'One-click PDF',
    desc: 'When it looks right, hit download. Clean, high-res PDF ready for any application.',
  },
  {
    icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
    title: '6 templates',
    desc: 'Modern, Classic, Minimal, Bold, Executive, Creative. Pick what fits your industry.',
  },
  {
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    title: 'Auto-saved locally',
    desc: 'Close the tab, come back later — your data persists in the browser. No accounts.',
  },
  {
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    title: 'Mobile friendly',
    desc: 'Responsive from desktop to phone. Edit anywhere, download at your desk.',
  },
]

const templateData = [
  { name: 'Modern', desc: 'Two-column sidebar. Confident, tech-friendly.', color: '#1e3a5f', tag: 'Popular' },
  { name: 'Classic', desc: 'Serif headings. Timeless, universally respected.', color: '#2c2c2c', tag: 'Versatile' },
  { name: 'Minimal', desc: 'Clean whitespace. Quiet confidence.', color: '#5f7161', tag: 'Elegant' },
  { name: 'Bold', desc: 'Colored banner. Strong first impression.', color: '#c05621', tag: 'Standout' },
  { name: 'Executive', desc: 'Gold accents. Built for leadership.', color: '#9a7b4f', tag: 'Premium' },
  { name: 'Creative', desc: 'Teal gradient. Modern & fresh.', color: '#0d9488', tag: 'Fresh' },
]

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif", background: '#0e0e10' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)', height: '64px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Link
            to="/builder"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)', color: '#f0ece6', padding: '9px 22px',
              borderRadius: '10px', fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.3s', letterSpacing: '0.01em',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c05621'; e.currentTarget.style.borderColor = '#c05621' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,86,33,0.12) 0%, transparent 70%)', pointerEvents: 'none', animation: 'glow 4s ease-in-out infinite' }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '12px', fontWeight: 600, color: '#e8944a',
            background: 'rgba(192,86,33,0.1)', border: '1px solid rgba(192,86,33,0.2)',
            padding: '6px 16px', borderRadius: '50px',
            marginBottom: '32px', letterSpacing: '0.06em', textTransform: 'uppercase',
            animation: 'fadeUp 0.6s ease-out',
          }}>
            <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
            Free &amp; Open Source
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            color: '#f0ece6',
            lineHeight: 1.06,
            letterSpacing: '-0.04em',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            animation: 'fadeUp 0.6s ease-out 0.1s both',
          }}>
            Your resume,<br />
            <span style={{
              background: 'linear-gradient(135deg, #e8944a 0%, #c05621 50%, #e8944a 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
            }}>
              elevated.
            </span>
          </h1>

          <p style={{
            marginTop: '28px', fontSize: '17px', color: 'rgba(255,255,255,0.45)', maxWidth: '480px',
            marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.8,
            animation: 'fadeUp 0.6s ease-out 0.2s both',
          }}>
            Pick a template. Fill in your details. Download a polished PDF.
            No formatting headaches — just results.
          </p>

          <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', animation: 'fadeUp 0.6s ease-out 0.3s both' }}>
            <Link
              to="/builder"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'linear-gradient(135deg, #c05621 0%, #d4662e 100%)',
                color: '#fff', padding: '16px 36px',
                borderRadius: '14px', fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 0 40px rgba(192,86,33,0.3), 0 4px 16px rgba(192,86,33,0.2)',
                transition: 'all 0.3s', letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(192,86,33,0.4), 0 8px 24px rgba(192,86,33,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(192,86,33,0.3), 0 4px 16px rgba(192,86,33,0.2)' }}
            >
              Start building
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#features"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: 'rgba(255,255,255,0.6)', padding: '16px 32px',
                borderRadius: '14px', fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s',
                background: 'rgba(255,255,255,0.03)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#f0ece6'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ padding: '28px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px', color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em' }}>
          <span>6 templates</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>Live preview</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>PDF export</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>No sign-up</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>100% free</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '100px 24px', background: '#0e0e10' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '460px', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#e8944a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Features</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#f0ece6', lineHeight: 1.12, letterSpacing: '-0.035em', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
              Everything you need.<br />Nothing you don't.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '16px' }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s', cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,148,74,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(192,86,33,0.1)', border: '1px solid rgba(192,86,33,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                }}>
                  <svg style={{ width: '18px', height: '18px', color: '#e8944a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f0ece6', marginBottom: '8px', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, fontSize: '14px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0e0e10 0%, #141416 100%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#e8944a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Templates</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#f0ece6', lineHeight: 1.12, letterSpacing: '-0.035em', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
              Six styles. Zero compromises.
            </h2>
            <p style={{ marginTop: '14px', color: 'rgba(255,255,255,0.35)', fontSize: '15px', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Each designed for readability and ATS compatibility.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {templateData.map((t, i) => (
              <div key={i} style={{
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ backgroundColor: t.color, height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px', fontSize: '10px', fontWeight: 700,
                    backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', padding: '4px 10px',
                    borderRadius: '6px', letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>{t.tag}</div>
                  <div style={{
                    width: '100px', height: '130px', backgroundColor: '#fff', borderRadius: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    display: 'flex', flexDirection: 'column', padding: '12px', gap: '6px',
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`,
                  }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto' }} />
                    <div style={{ height: '4px', backgroundColor: '#eee', borderRadius: '2px', width: '100%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f5f5', borderRadius: '2px', width: '75%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f5f5', borderRadius: '2px', width: '100%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f5f5', borderRadius: '2px', width: '60%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f5f5', borderRadius: '2px', width: '85%' }} />
                  </div>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#f0ece6', letterSpacing: '-0.01em' }}>{t.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginTop: '5px', lineHeight: 1.5 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', background: '#0e0e10', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,86,33,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#f0ece6', letterSpacing: '-0.035em', lineHeight: 1.12, fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Your next job starts<br />with a better resume.
          </h2>
          <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.35)', fontSize: '15px', lineHeight: 1.7 }}>
            Takes about five minutes. No account needed. No watermarks.
          </p>
          <Link
            to="/builder"
            style={{
              marginTop: '36px', display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #c05621 0%, #d4662e 100%)',
              color: '#fff', padding: '16px 36px',
              borderRadius: '14px', fontSize: '15px', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 0 40px rgba(192,86,33,0.25)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(192,86,33,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(192,86,33,0.25)' }}
          >
            Build yours now
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
