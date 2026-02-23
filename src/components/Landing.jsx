import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'

const features = [
  {
    icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
    title: 'Write once, tweak forever',
    desc: 'Type your info and the layout handles itself. Switch templates without losing a word.',
    span: 2,
  },
  {
    icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z',
    icon2: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Live preview',
    desc: 'Every keystroke updates the resume in real-time.',
    span: 1,
  },
  {
    icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
    title: 'One-click PDF',
    desc: 'Clean, high-res PDF ready for any application.',
    span: 1,
  },
  {
    icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
    title: '6 professional templates',
    desc: 'Modern, Classic, Minimal, Bold, Executive, Creative — for every industry.',
    span: 1,
  },
  {
    icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375',
    title: 'Auto-saved locally',
    desc: 'Data persists in the browser. No accounts, no cloud, no tracking.',
    span: 2,
  },
  {
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    title: 'Mobile friendly',
    desc: 'Responsive from desktop to phone. Edit anywhere.',
    span: 1,
  },
]

const templateData = [
  { name: 'Modern', desc: 'Two-column sidebar. Confident & tech-friendly.', color: '#1e3a5f', tag: 'Popular', tagColor: '#00FFB2' },
  { name: 'Classic', desc: 'Serif headings. Timeless & respected.', color: '#2c2c2c', tag: 'Versatile', tagColor: '#8A8A9A' },
  { name: 'Minimal', desc: 'Clean whitespace. Quiet confidence.', color: '#5f7161', tag: 'Elegant', tagColor: '#86efac' },
  { name: 'Bold', desc: 'Colored banner. Strong impression.', color: '#c05621', tag: 'Standout', tagColor: '#00D4FF' },
  { name: 'Executive', desc: 'Gold accents. Built for leadership.', color: '#9a7b4f', tag: 'Premium', tagColor: '#7B61FF' },
  { name: 'Creative', desc: 'Teal gradient. Modern & fresh.', color: '#0d9488', tag: 'Fresh', tagColor: '#5eead4' },
]

const steps = [
  { num: '01', title: 'Pick a template', desc: 'Browse 6 polished designs built for readability and ATS compatibility.', icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z' },
  { num: '02', title: 'Fill your details', desc: 'Structured sections guide you through every field. Type once, auto-format.', icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' },
  { num: '03', title: 'Download PDF', desc: 'One click gives you a print-ready, high-resolution resume file.', icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' },
]

export default function Landing() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 })
  const [count, setCount] = useState(0)
  const [counterStarted, setCounterStarted] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('revealed')
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!counterRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !counterStarted) setCounterStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [counterStarted])

  useEffect(() => {
    if (!counterStarted) return
    const target = 2400
    let current = 0
    const timer = setInterval(() => {
      current += 48
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(current)
    }, 16)
    return () => clearInterval(timer)
  }, [counterStarted])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif", background: '#0A0A0F', position: 'relative' }}>
      {/* AI-built banner */}
      <div style={{
        padding: '5px 0', textAlign: 'center',
        background: 'rgba(0,212,255,0.04)', borderBottom: '1px solid rgba(42,42,58,0.4)',
        position: 'relative', zIndex: 51,
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
          Built with AI-assisted development
        </span>
      </div>

      {/* ── Cursor Glow ── */}
      <div style={{
        position: 'fixed', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1,
        transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        willChange: 'transform', transition: 'transform 0.12s ease-out',
      }} />

      {/* ── Navbar ── */}
      <nav className="landing-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(10,10,15,0.6)', backdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid #2A2A3A', height: '64px',
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Logo />
            <div className="nav-links" style={{ display: 'flex', gap: '24px' }}>
              {['Features', 'Templates', 'How It Works'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ color: '#8A8A9A', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', letterSpacing: '0.01em' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F0F0F5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8A8A9A'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <Link
            to="/builder"
            className="glow-cta"
            style={{
              background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
              color: '#fff', padding: '8px 22px', borderRadius: '50px',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.3s', animation: 'glowPulse 3s ease-in-out infinite',
              border: 'none',
            }}
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="dot-grid" style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(123,97,255,0.06) 40%, transparent 60%)', pointerEvents: 'none', animation: 'glow 5s ease-in-out infinite' }} />

        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          {/* Left: Text */}
          <div className="hero-text" style={{ maxWidth: '540px' }}>
            {/* Badge */}
            <div className="reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '13px', fontWeight: 700, color: '#00D4FF',
              background: 'rgba(0,212,255,0.08)', padding: '6px 16px', borderRadius: '50px',
              marginBottom: '28px', letterSpacing: '0.08em', textTransform: 'uppercase',
              border: '1px solid rgba(0,212,255,0.15)',
              boxShadow: '0 0 20px rgba(0,212,255,0.1)',
            }}>
              <svg style={{ width: '12px', height: '12px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              Free &amp; Open Source
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 4.2rem)', fontWeight: 800,
              color: '#F0F0F5', lineHeight: 1.06, letterSpacing: '-0.04em',
              fontFamily: "'DM Sans', 'Inter', sans-serif",
            }}>
              <span className="text-anim" style={{ display: 'inline-block', animation: 'textReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>Your resume</span>
              <br />
              <span className="text-anim" style={{ display: 'inline-block', animation: 'textReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>should&nbsp;</span>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 40%, #00D4FF 80%, #7B61FF 100%)',
                backgroundSize: '250% auto',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'textReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s both, shimmer 4s linear 1.4s infinite',
              }}>look as good</span>
              <br />
              <span className="text-anim" style={{ display: 'inline-block', animation: 'textReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s both' }}>as your experience.</span>
            </h1>

            {/* Subtext */}
            <p className="reveal reveal-d2" style={{
              marginTop: '24px', fontSize: '17px', color: '#8A8A9A',
              lineHeight: 1.8, maxWidth: '420px',
            }}>
              Pick a template, fill in your details, download a polished PDF — in minutes, not hours.
            </p>

            {/* CTA Buttons */}
            <div className="reveal reveal-d3 hero-ctas" style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link
                to="/builder"
                className="glow-cta"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
                  color: '#fff', padding: '14px 32px', borderRadius: '14px',
                  fontSize: '16px', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 0 40px rgba(0,212,255,0.25), 0 4px 16px rgba(0,212,255,0.15)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(0,212,255,0.35), 0 8px 24px rgba(0,212,255,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.25), 0 4px 16px rgba(0,212,255,0.15)' }}
              >
                Start building
                <svg className="arrow-icon" style={{ width: '16px', height: '16px', transition: 'transform 0.3s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#8A8A9A', padding: '14px 28px', borderRadius: '14px',
                  fontSize: '16px', fontWeight: 600, textDecoration: 'none',
                  border: '1px solid #2A2A3A', transition: 'all 0.3s',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)'; e.currentTarget.style.color = '#F0F0F5'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A3A'; e.currentTarget.style.color = '#8A8A9A'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                How it works
              </a>
            </div>

            {/* Social Proof */}
            <div ref={counterRef} className="reveal reveal-d4" style={{ marginTop: '40px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { value: `${count.toLocaleString()}+`, label: 'Resumes built' },
                { value: '6', label: 'Templates' },
                { value: '100%', label: 'Free forever' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#00D4FF', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.03em' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: '#8A8A9A', marginTop: '2px', letterSpacing: '0.02em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Resume Mockup */}
          <div className="hero-mockup" style={{ perspective: '1200px', position: 'relative' }}>
            {/* Shadow card behind */}
            <div style={{
              position: 'absolute', top: '24px', left: '-16px',
              width: '280px', height: '380px', background: 'rgba(255,255,255,0.03)',
              borderRadius: '8px', border: '1px solid #2A2A3A',
              transform: 'rotateY(-10deg) rotateX(4deg)',
            }} />
            {/* Main card */}
            <div style={{
              position: 'relative', width: '280px', minHeight: '380px',
              background: '#fff', borderRadius: '8px',
              boxShadow: '0 50px 100px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.06)',
              animation: 'float 6s ease-in-out infinite',
              padding: '24px', zIndex: 2, overflow: 'hidden',
            }}>
              {/* Fake resume header */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #e8e4df, #d4cfc9)' }} />
                <div>
                  <div style={{ height: '7px', width: '90px', background: '#1a1a1a', borderRadius: '4px', marginBottom: '4px' }} />
                  <div style={{ height: '5px', width: '60px', background: '#00D4FF', borderRadius: '3px' }} />
                </div>
              </div>
              {/* Fake section */}
              <div style={{ height: '5px', width: '55px', background: '#7B61FF', borderRadius: '3px', marginBottom: '8px' }} />
              {[100, 85, 92, 75].map((w, i) => (
                <div key={i} style={{ height: '3.5px', width: `${w}%`, background: '#f0f0f0', borderRadius: '2px', marginBottom: '4px' }} />
              ))}
              <div style={{ marginTop: '12px', height: '5px', width: '48px', background: '#7B61FF', borderRadius: '3px', marginBottom: '8px' }} />
              {[90, 100, 70, 95, 80].map((w, i) => (
                <div key={i} style={{ height: '3.5px', width: `${w}%`, background: '#f0f0f0', borderRadius: '2px', marginBottom: '4px' }} />
              ))}
              <div style={{ marginTop: '12px', height: '5px', width: '40px', background: '#7B61FF', borderRadius: '3px', marginBottom: '8px' }} />
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {[36, 44, 32, 48, 28, 40].map((w, i) => (
                  <div key={i} style={{ height: '10px', width: `${w}px`, background: '#f5f5f5', borderRadius: '4px' }} />
                ))}
              </div>
              <div style={{ marginTop: '12px', height: '5px', width: '52px', background: '#7B61FF', borderRadius: '3px', marginBottom: '8px' }} />
              {[95, 88, 100].map((w, i) => (
                <div key={i} style={{ height: '3.5px', width: `${w}%`, background: '#f0f0f0', borderRadius: '2px', marginBottom: '4px' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding: '100px 24px', background: '#0A0A0F' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ maxWidth: '400px', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Features</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: '#F0F0F5', lineHeight: 1.12, letterSpacing: '-0.035em', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
              Resume building,<br />reimagined.
            </h2>
          </div>
          <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {features.map((f, i) => (
              <div
                key={i}
                className={`reveal glow-card reveal-d${Math.min(i + 1, 5)}`}
                style={{
                  gridColumn: `span ${f.span}`,
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid #2A2A3A',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.4s', cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,212,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A3A'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                }}>
                  <svg style={{ width: '18px', height: '18px', color: '#00D4FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    {f.icon2 && <path strokeLinecap="round" strokeLinejoin="round" d={f.icon2} />}
                  </svg>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#F0F0F5', marginBottom: '8px', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ color: '#8A8A9A', lineHeight: 1.65, fontSize: '15px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: '100px 24px', background: '#13131A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>How It Works</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: '#F0F0F5', lineHeight: 1.12, letterSpacing: '-0.035em', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
              Three steps. Five minutes.
            </h2>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative' }}>
            {/* Connecting line */}
            <div className="step-line" style={{
              position: 'absolute', top: '52px', left: '16.67%', right: '16.67%',
              height: '1px', transformOrigin: 'left',
              background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(123,97,255,0.2), transparent)',
            }} />
            {steps.map((step, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '56px', fontWeight: 900, color: 'rgba(0,212,255,0.05)', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace", marginBottom: '-8px' }}>
                  {step.num}
                </div>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px', margin: '0 auto 16px',
                  background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg style={{ width: '22px', height: '22px', color: '#00D4FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#F0F0F5', marginBottom: '8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#8A8A9A', lineHeight: 1.65, maxWidth: '280px', margin: '0 auto' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates ── */}
      <section id="templates" style={{ padding: '100px 24px', background: '#0A0A0F' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Templates</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: '#F0F0F5', lineHeight: 1.12, letterSpacing: '-0.035em', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
              Six styles. Zero compromises.
            </h2>
            <p style={{ marginTop: '14px', color: '#8A8A9A', fontSize: '16px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Designed for readability and ATS compatibility.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {templateData.map((t, i) => (
              <div
                key={i}
                className={`reveal template-card reveal-d${Math.min(i + 1, 5)}`}
                style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid #2A2A3A',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.4s', position: 'relative',
                }}
              >
                <div className="template-preview-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div className="template-preview" style={{
                    backgroundColor: t.color, height: '190px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}>
                    <div style={{
                      width: '100px', height: '130px', backgroundColor: '#fff', borderRadius: '4px',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                      display: 'flex', flexDirection: 'column', padding: '10px', gap: '5px',
                      animation: `floatSlow 4s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                    }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto' }} />
                      <div style={{ height: '3px', backgroundColor: '#eee', borderRadius: '2px', width: '100%' }} />
                      <div style={{ height: '2px', backgroundColor: '#f5f5f5', borderRadius: '1px', width: '75%' }} />
                      <div style={{ height: '2px', backgroundColor: '#f5f5f5', borderRadius: '1px', width: '100%' }} />
                      <div style={{ height: '2px', backgroundColor: '#f5f5f5', borderRadius: '1px', width: '60%' }} />
                      <div style={{ height: '2px', backgroundColor: '#f5f5f5', borderRadius: '1px', width: '85%' }} />
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="template-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0, transition: 'opacity 0.3s',
                  }}>
                    <Link to="/builder" style={{
                      color: '#fff', fontSize: '14px', fontWeight: 700,
                      padding: '10px 22px', borderRadius: '10px',
                      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
                      textDecoration: 'none',
                      boxShadow: '0 0 24px rgba(0,212,255,0.3)',
                      display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                      Use template
                      <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#F0F0F5', letterSpacing: '-0.01em' }}>{t.name}</h3>
                    <p style={{ color: '#8A8A9A', fontSize: '13px', marginTop: '3px', lineHeight: 1.4 }}>{t.desc}</p>
                  </div>
                  <span style={{
                    fontSize: '12px', fontWeight: 700, color: t.tagColor,
                    backgroundColor: `${t.tagColor}12`, border: `1px solid ${t.tagColor}25`,
                    padding: '3px 10px', borderRadius: '50px', flexShrink: 0,
                    letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '120px 24px', background: 'linear-gradient(180deg, #0A0A0F 0%, #0f0a1a 50%, #0A0A0F 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="reveal" style={{
          maxWidth: '580px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1,
          background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(20px)',
          border: '1px solid #2A2A3A', borderRadius: '24px',
          padding: '56px 40px',
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: '#F0F0F5', letterSpacing: '-0.035em', lineHeight: 1.12, fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
            Your next job starts<br />with a better resume.
          </h2>
          <p style={{ marginTop: '14px', color: '#8A8A9A', fontSize: '16px', lineHeight: 1.7 }}>
            Takes five minutes. No account needed. No watermarks.
          </p>
          <Link
            to="/builder"
            style={{
              marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
              color: '#fff', padding: '14px 32px', borderRadius: '14px',
              fontSize: '16px', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 0 40px rgba(0,212,255,0.25)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(0,212,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.25)' }}
          >
            Build yours now
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />

      {/* ── Scoped CSS ── */}
      <style>{`
        .dot-grid {
          background-image: radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .hero-content {
          display: flex; align-items: center; justify-content: center; gap: 60px;
          max-width: 1140px; margin: 0 auto;
        }
        .glow-card {
          position: relative; overflow: hidden;
        }
        .glow-card::after {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0,212,255,0.3), transparent 50%, rgba(123,97,255,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .glow-card:hover::after { opacity: 1; }

        .template-card { cursor: pointer; }
        .template-card:hover { border-color: rgba(0,212,255,0.15); transform: translateY(-4px); box-shadow: 0 24px 60px rgba(0,0,0,0.3); }
        .template-card:hover .template-preview { transform: scale(1.06); }
        .template-card:hover .template-overlay { opacity: 1 !important; }

        .glow-cta:hover .arrow-icon { transform: translateX(3px); }

        @media (max-width: 900px) {
          .hero-content { flex-direction: column; text-align: center; }
          .hero-mockup { display: none; }
          .hero-ctas { justify-content: center; }
          .nav-links { display: none !important; }
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-grid > * { grid-column: span 1 !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .step-line { display: none !important; }
        }
      `}</style>
    </div>
  )
}
