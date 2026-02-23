import { Link } from 'react-router-dom'
import Logo from './Logo'
import Footer from './Footer'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: 'Easy Editing',
    desc: 'Fill in your details through a clean, intuitive form. See changes instantly in the live preview.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Multiple Templates',
    desc: 'Choose from professionally designed templates — Classic, Modern, or Minimal. Switch anytime.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: 'PDF Export',
    desc: 'Download your finished resume as a high-quality PDF, ready to send to employers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile Friendly',
    desc: 'Build your resume on any device. Fully responsive design works on phones, tablets, and desktops.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Auto-Save',
    desc: 'Your progress is saved automatically in your browser. Come back anytime to continue editing.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    title: 'Photo Upload',
    desc: 'Add a professional headshot to your resume. Crop and position it perfectly in the template.',
  },
]

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0', height: '64px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Link
            to="/builder"
            style={{ backgroundColor: '#2563eb', color: '#fff', padding: '8px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px', background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '6px 16px', borderRadius: '50px', fontSize: '14px', fontWeight: 500, marginBottom: '32px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            Free &amp; Open Source
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Build a Resume That
            <span style={{ display: 'block', color: '#2563eb', marginTop: '8px' }}>Lands Interviews</span>
          </h1>
          <p style={{ marginTop: '24px', fontSize: '18px', color: '#64748b', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Create a professional, ATS-friendly resume in minutes. Choose from beautiful templates,
            edit with a live preview, and export as PDF — all for free.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link
              to="/builder"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#2563eb', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start Building Your Resume
              <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#features"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', color: '#334155', padding: '16px 32px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, textDecoration: 'none', border: '1px solid #e2e8f0', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#e2e8f0' }}
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '96px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
              Everything You Need
            </h2>
            <p style={{ marginTop: '16px', color: '#64748b', fontSize: '18px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Powerful features to help you create the perfect resume without any hassle.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{ padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#bfdbfe'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '15px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" style={{ padding: '96px 24px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#0f172a', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Professional Templates
          </h2>
          <p style={{ marginTop: '16px', color: '#64748b', fontSize: '18px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '64px', lineHeight: 1.6 }}>
            Choose the style that matches your personality and industry.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Modern', desc: 'Clean two-column layout with a colored sidebar. Great for tech and creative roles.', color: '#2563eb' },
              { name: 'Classic', desc: 'Traditional single-column format with serif accents. Perfect for corporate and academic positions.', color: '#1e293b' },
              { name: 'Minimal', desc: 'Ultra-clean design with generous whitespace. Ideal for senior professionals and executives.', color: '#7c3aed' },
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', transition: 'box-shadow 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ backgroundColor: t.color, height: '192px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '112px', height: '144px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', padding: '12px', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2e8f0', margin: '0 auto' }} />
                    <div style={{ height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', width: '100%' }} />
                    <div style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px', width: '75%' }} />
                    <div style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px', width: '100%' }} />
                    <div style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px', width: '83%' }} />
                    <div style={{ height: '4px', backgroundColor: '#f1f5f9', borderRadius: '2px', width: '66%' }} />
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '18px', color: '#1e293b' }}>{t.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px', lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            Ready to Build Your Resume?
          </h2>
          <p style={{ marginTop: '16px', color: '#bfdbfe', fontSize: '18px', lineHeight: 1.6 }}>
            Join thousands of professionals who have created stunning resumes with ResumeForge.
          </p>
          <Link
            to="/builder"
            style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', color: '#1d4ed8', padding: '16px 32px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Get Started — It's Free
            <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
