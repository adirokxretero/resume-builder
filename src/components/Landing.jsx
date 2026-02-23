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
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <Link
            to="/builder"
            className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm"
          >
            Start Building
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 bg-gradient-to-b from-blue-50 via-white to-white border-b border-surface-200">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            Free &amp; Open Source
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-surface-900 leading-tight tracking-tight">
            Build a Resume That
            <span className="text-primary-600 block mt-2">Lands Interviews</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-surface-500 max-w-2xl mx-auto leading-relaxed">
            Create a professional, ATS-friendly resume in minutes. Choose from beautiful templates,
            edit with a live preview, and export as PDF — all for free.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/builder"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              Start Building Your Resume
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white text-surface-700 px-8 py-4 rounded-xl text-lg font-semibold border border-surface-200 hover:border-surface-300 hover:bg-surface-50 transition-all"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900">
              Everything You Need
            </h2>
            <p className="mt-4 text-surface-500 text-lg max-w-xl mx-auto">
              Powerful features to help you create the perfect resume without any hassle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-surface-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-surface-800 mb-2">{f.title}</h3>
                <p className="text-surface-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="py-24 px-6 bg-surface-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900">
            Professional Templates
          </h2>
          <p className="mt-4 text-surface-500 text-lg max-w-xl mx-auto mb-16">
            Choose the style that matches your personality and industry.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Modern', desc: 'Clean two-column layout with a colored sidebar. Great for tech and creative roles.', color: 'bg-primary-600' },
              { name: 'Classic', desc: 'Traditional single-column format with serif accents. Perfect for corporate and academic positions.', color: 'bg-surface-800' },
              { name: 'Minimal', desc: 'Ultra-clean design with generous whitespace. Ideal for senior professionals and executives.', color: 'bg-accent-600' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-surface-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`${t.color} h-48 flex items-center justify-center`}>
                  <div className="w-28 h-36 bg-white rounded-lg shadow-2xl flex flex-col p-3 gap-2">
                    <div className="w-8 h-8 rounded-full bg-surface-200 mx-auto" />
                    <div className="h-1.5 bg-surface-200 rounded w-full" />
                    <div className="h-1 bg-surface-100 rounded w-3/4" />
                    <div className="h-1 bg-surface-100 rounded w-full" />
                    <div className="h-1 bg-surface-100 rounded w-5/6" />
                    <div className="h-1 bg-surface-100 rounded w-2/3" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-surface-800">{t.name}</h3>
                  <p className="text-surface-500 text-sm mt-2 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Ready to Build Your Resume?
          </h2>
          <p className="mt-4 text-primary-100 text-lg">
            Join thousands of professionals who have created stunning resumes with ResumeForge.
          </p>
          <Link
            to="/builder"
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Get Started — It's Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
