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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f0eb' }}>
      {/* Header */}
      <header style={{
        background: '#faf9f6', borderBottom: '1px solid #e2ddd7', padding: '0 20px', height: '58px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        flexShrink: 0, zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Logo />
          <div style={{ width: '1px', height: '26px', backgroundColor: '#e2ddd7' }} />
          <TemplateSelector selected={template} onSelect={setTemplate} />
          <div style={{ width: '1px', height: '26px', backgroundColor: '#e2ddd7' }} />
          <SamplePicker onLoad={handleLoadSample} />
          <AIGenerator onGenerate={(resume) => setData(resume)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleReset}
            title="Clear all data"
            style={{ padding: '7px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#a3a098', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#c05621'; e.currentTarget.style.background = '#fdf2ec' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#a3a098'; e.currentTarget.style.background = 'transparent' }}
          >
            <svg style={{ width: '17px', height: '17px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>

          <button
            onClick={() => setShowPreview(!showPreview)}
            className="mobile-toggle"
            style={{ padding: '7px 13px', borderRadius: '8px', border: '1.5px solid #e2ddd7', background: '#fff', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: '#6b6560', display: 'none' }}
          >
            {showPreview ? 'Edit' : 'Preview'}
          </button>

          <button
            onClick={handleExportPDF}
            disabled={exporting}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#c05621', color: '#fff', padding: '10px 20px', borderRadius: '9px',
              fontSize: '14px', fontWeight: 700, border: 'none',
              cursor: exporting ? 'wait' : 'pointer',
              boxShadow: '0 2px 8px rgba(192,86,33,0.25)',
              opacity: exporting ? 0.7 : 1, transition: 'all 0.2s', letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { if (!exporting) e.currentTarget.style.backgroundColor = '#a84a1c' }}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#c05621'}
          >
            {exporting ? (
              <svg style={{ width: '15px', height: '15px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg style={{ width: '15px', height: '15px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            )}
            {exporting ? 'Exporting...' : 'Download PDF'}
          </button>
        </div>
      </header>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{
          width: '460px', flexShrink: 0, background: '#faf9f6', borderRight: '1px solid #e2ddd7',
          overflowY: 'auto', display: showPreview ? 'none' : 'block',
        }}>
          <ResumeForm data={data} updatePersonal={updatePersonal} updateSection={updateSection} />
        </div>

        <div
          ref={previewContainerRef}
          style={{ flex: 1, overflow: 'auto', background: '#e8e2db', display: !showPreview ? undefined : 'block', padding: '32px' }}
        >
          <ResumePreview data={data} template={template} previewRef={previewRef} scale={previewScale} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .mobile-toggle { display: flex !important; } }
      `}</style>
    </div>
  )
}
