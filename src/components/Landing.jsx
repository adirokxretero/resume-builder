import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'

const features = [
  {
    emoji: '✏️',
    title: 'Write once, tweak forever',
    desc: "No more reformatting in Word. Type your info, and the layout takes care of itself. Change templates without losing a single comma.",
  },
  {
    emoji: '👁️',
    title: 'See it as you build it',
    desc: "A live preview sits right next to your form. Every keystroke updates the resume in real-time — no guessing, no surprises.",
  },
  {
    emoji: '📄',
    title: 'One-click PDF export',
    desc: "When it looks right, hit download. You get a clean, high-resolution PDF that's ready to attach to any application.",
  },
  {
    emoji: '🎨',
    title: 'Three distinct templates',
    desc: "Modern (two-column sidebar), Classic (traditional with serifs), and Minimal (airy and light). Pick what fits your industry.",
  },
  {
    emoji: '💾',
    title: 'Auto-saved in your browser',
    desc: "Close the tab, come back tomorrow — your data is still there. Everything lives in localStorage, no accounts needed.",
  },
  {
    emoji: '📱',
    title: 'Works on your phone',
    desc: "Responsive layout that adapts from desktop to tablet to phone. Edit on the couch, download at your desk.",
  },
]

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif", background: '#faf9f6' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(250,249,246,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #ede8e2', height: '64px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Link
            to="/builder"
            style={{
              backgroundColor: '#2c2c2c', color: '#faf9f6', padding: '9px 22px',
              borderRadius: '10px', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.2s', letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c05621' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2c2c2c' }}
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '150px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', fontSize: '13px', fontWeight: 600, color: '#c05621',
            backgroundColor: '#fdf2ec', padding: '6px 16px', borderRadius: '50px',
            marginBottom: '28px', letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            Free &amp; open source
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.2rem)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          }}>
            Your resume should<br />
            <span style={{ color: '#c05621' }}>look as good</span> as<br />
            your experience
          </h1>

          <p style={{
            marginTop: '28px', fontSize: '17px', color: '#6b6560', maxWidth: '520px',
            marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75,
          }}>
            Stop wrestling with formatting. Pick a template, fill in your details,
            and download a polished PDF — in minutes, not hours.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <Link
              to="/builder"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#c05621', color: '#fff', padding: '16px 36px',
                borderRadius: '14px', fontSize: '16px', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(192,86,33,0.25)', transition: 'all 0.25s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(192,86,33,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(192,86,33,0.25)' }}
            >
              Start building your resume
              <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#features"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#2c2c2c', padding: '16px 32px',
                borderRadius: '14px', fontSize: '16px', fontWeight: 600, textDecoration: 'none',
                border: '1.5px solid #d4cfc9', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5f0eb'; e.currentTarget.style.borderColor = '#c4bfb9' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d4cfc9' }}
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{ padding: '32px 24px', borderTop: '1px solid #ede8e2', borderBottom: '1px solid #ede8e2' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px', color: '#a3a098', fontSize: '14px', fontWeight: 500 }}>
          <span>6 professional templates</span>
          <span style={{ color: '#d4cfc9' }}>·</span>
          <span>Live preview</span>
          <span style={{ color: '#d4cfc9' }}>·</span>
          <span>PDF export</span>
          <span style={{ color: '#d4cfc9' }}>·</span>
          <span>No sign-up required</span>
          <span style={{ color: '#d4cfc9' }}>·</span>
          <span>100% free</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '480px', marginBottom: '56px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#c05621', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Features</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.15, letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
              Built for people who'd<br />rather not think about<br />resume formatting
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '20px' }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '28px', borderRadius: '16px', border: '1px solid #ede8e2',
                  transition: 'all 0.3s', cursor: 'default', backgroundColor: '#faf9f6',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#e07a5f'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(224,122,95,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede8e2'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span style={{ fontSize: '28px', display: 'block', marginBottom: '16px' }}>{f.emoji}</span>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ color: '#6b6560', lineHeight: 1.65, fontSize: '14px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" style={{ padding: '96px 24px', backgroundColor: '#f5f0eb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#c05621', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Templates</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.15, letterSpacing: '-0.03em', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
              Six styles. Zero compromises.
            </h2>
            <p style={{ marginTop: '14px', color: '#6b6560', fontSize: '16px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Each template is designed for readability and ATS compatibility. Pick the one that suits your vibe.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Modern', desc: 'Two-column with a dark sidebar. Confident, structured, tech-friendly.', color: '#1e3a5f', tag: 'Popular' },
              { name: 'Classic', desc: 'Single-column with serif headings. Timeless, clean, universally respected.', color: '#2c2c2c', tag: 'Versatile' },
              { name: 'Minimal', desc: 'Lots of whitespace, thin dividers. Quiet confidence for senior roles.', color: '#5f7161', tag: 'Elegant' },
              { name: 'Bold', desc: 'Colored header banner, dark skill tags. Makes a strong first impression.', color: '#c05621', tag: 'Standout' },
              { name: 'Executive', desc: 'Gold accents, centered layout, serif fonts. Built for leadership roles.', color: '#9a7b4f', tag: 'Premium' },
              { name: 'Creative', desc: 'Teal gradient bar, rounded cards, modern feel. Great for design & tech.', color: '#0d9488', tag: 'Fresh' },
            ].map((t, i) => (
              <div key={i} style={{
                backgroundColor: '#fff', borderRadius: '18px', overflow: 'hidden',
                border: '1px solid #ede8e2', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ backgroundColor: t.color, height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px', fontSize: '11px', fontWeight: 700,
                    backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 10px',
                    borderRadius: '6px', letterSpacing: '0.03em',
                  }}>{t.tag}</div>
                  <div style={{ width: '110px', height: '145px', backgroundColor: '#fff', borderRadius: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', padding: '14px', gap: '7px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#ede8e2', margin: '0 auto' }} />
                    <div style={{ height: '5px', backgroundColor: '#ede8e2', borderRadius: '3px', width: '100%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f0eb', borderRadius: '2px', width: '80%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f0eb', borderRadius: '2px', width: '100%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f0eb', borderRadius: '2px', width: '65%' }} />
                    <div style={{ height: '3px', backgroundColor: '#f5f0eb', borderRadius: '2px', width: '90%' }} />
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '17px', color: '#1a1a1a', letterSpacing: '-0.01em' }}>{t.name}</h3>
                  <p style={{ color: '#6b6560', fontSize: '14px', marginTop: '6px', lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 24px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#faf9f6', letterSpacing: '-0.03em', lineHeight: 1.15, fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Your next job starts with a better resume.
          </h2>
          <p style={{ marginTop: '16px', color: '#a3a098', fontSize: '16px', lineHeight: 1.65 }}>
            Takes about five minutes. No account needed. No watermarks. Just your resume.
          </p>
          <Link
            to="/builder"
            style={{
              marginTop: '36px', display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#c05621', color: '#fff', padding: '16px 36px',
              borderRadius: '14px', fontSize: '16px', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(192,86,33,0.3)', transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = '#d4662e' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#c05621' }}
          >
            Build yours now
            <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
