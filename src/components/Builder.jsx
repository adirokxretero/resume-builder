import { useRef, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'
import TemplateSelector from './TemplateSelector'
import SamplePicker from './SamplePicker'
import AIGenerator from './AIGenerator'
import { useResumeData } from '../hooks/useResumeData'

export default function Builder() {
  const { data, setData, template, setTemplate, updatePersonal, updateSection, resetData } = useResumeData()
  const previewRef = useRef(null)
  const previewContainerRef = useRef(null)
  const [exporting, setExporting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [previewScale, setPreviewScale] = useState(0.5)
  const [mobileMode, setMobileMode] = useState(false)

  const calculateScale = useCallback(() => {
    if (!previewContainerRef.current) return
    const containerWidth = previewContainerRef.current.offsetWidth - 64
    const a4Width = 794
    const scale = Math.min(containerWidth / a4Width, 0.75)
    setPreviewScale(scale)
  }, [])

  useEffect(() => {
    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [calculateScale])

  const handleExportPDF = useCallback(async () => {
    if (!previewRef.current || exporting) return
    setExporting(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      await html2pdf().set({
        margin: 0,
        filename: `${data.personal.name || 'resume'}-resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }).from(previewRef.current).save()
    } catch (err) {
      console.error('PDF export failed:', err)
    } finally {
      setExporting(false)
    }
  }, [data.personal.name, exporting])

  const handleReset = () => {
    if (window.confirm('Clear all data? This cannot be undone.')) resetData()
  }

  const handleLoadSample = (sample) => {
    if (window.confirm(`Load "${sample.data.personal.name}" example? This replaces your current data.`)) {
      setData(sample.data)
      setTemplate(sample.template)
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif", background: '#0A0A0F' }}>
      {/* Mobile banner */}
      <div className="mobile-banner" style={{
        display: 'none',
        padding: '10px 16px',
        background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,97,255,0.08))',
        borderBottom: '1px solid #2A2A3A',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg style={{ width: '16px', height: '16px', color: '#00D4FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#F0F0F5' }}>On mobile?</span>
        </div>
        <button
          onClick={() => setMobileMode(!mobileMode)}
          style={{
            padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            background: mobileMode ? '#00D4FF' : 'rgba(0,212,255,0.1)',
            color: mobileMode ? '#0A0A0F' : '#00D4FF',
          }}
        >
          {mobileMode ? 'Mobile mode ON' : 'Switch to mobile view'}
        </button>
      </div>

      {/* Row 1: Main toolbar */}
      <header style={{
        position: 'relative',
        background: 'rgba(10,10,15,0.95)',
        borderBottom: '1px solid rgba(42,42,58,0.5)', padding: '0 16px', height: '52px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px',
        flexShrink: 0, zIndex: 50, overflow: 'visible',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo />
          <div style={{ width: '1px', height: '22px', backgroundColor: '#2A2A3A' }} />
          <SamplePicker onLoad={handleLoadSample} />
          <AIGenerator onGenerate={(resume) => setData(resume)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleReset}
            title="Clear all data"
            style={{ padding: '7px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FF4D6D'; e.currentTarget.style.background = 'rgba(255,77,109,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent' }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>

          <button
            onClick={() => setShowPreview(!showPreview)}
            className="mobile-toggle"
            style={{ padding: '7px 13px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: mobileMode ? 'flex' : 'none' }}
          >
            {showPreview ? 'Edit' : 'Preview'}
          </button>

          <button
            onClick={handleExportPDF}
            disabled={exporting}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
              color: '#fff', padding: '9px 20px', borderRadius: '9px',
              fontSize: '14px', fontWeight: 700, border: 'none',
              cursor: exporting ? 'wait' : 'pointer',
              boxShadow: '0 0 20px rgba(0,212,255,0.2)',
              opacity: exporting ? 0.7 : 1, transition: 'all 0.2s', letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { if (!exporting) e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.35)' }}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.2)'}
          >
            {exporting ? (
              <svg style={{ width: '14px', height: '14px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            )}
            {exporting ? 'Exporting...' : 'Download PDF'}
          </button>
        </div>
      </header>

      {/* Row 2: Template selector bar */}
      <div style={{
        padding: '6px 16px', background: '#0A0A0F',
        borderBottom: '1px solid #2A2A3A', flexShrink: 0,
        overflowX: 'auto',
      }}>
        <TemplateSelector selected={template} onSelect={setTemplate} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{
          width: mobileMode ? '100%' : '460px', flexShrink: mobileMode ? 1 : 0,
          background: '#13131A',
          borderRight: '1px solid #2A2A3A',
          overflowY: 'auto', display: mobileMode ? (showPreview ? 'none' : 'block') : (showPreview ? 'none' : 'block'),
        }}>
          <ResumeForm data={data} updatePersonal={updatePersonal} updateSection={updateSection} />
        </div>

        <div
          ref={previewContainerRef}
          style={{ flex: 1, overflow: 'auto', background: '#1C1C28', display: mobileMode ? (showPreview ? 'block' : 'none') : (!showPreview ? undefined : 'block'), padding: '32px' }}
        >
          <ResumePreview data={data} template={template} previewRef={previewRef} scale={previewScale} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { 
          .mobile-toggle { display: flex !important; }
          .mobile-banner { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
