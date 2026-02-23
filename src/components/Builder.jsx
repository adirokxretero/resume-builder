import { useRef, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'
import TemplateSelector from './TemplateSelector'
import { useResumeData } from '../hooks/useResumeData'

export default function Builder() {
  const { data, template, setTemplate, updatePersonal, updateSection, resetData } = useResumeData()
  const previewRef = useRef(null)
  const previewContainerRef = useRef(null)
  const [exporting, setExporting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [previewScale, setPreviewScale] = useState(0.5)

  const calculateScale = useCallback(() => {
    if (!previewContainerRef.current) return
    const containerWidth = previewContainerRef.current.offsetWidth - 32
    const a4Width = 794 // 210mm in px at 96dpi
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
      const element = previewRef.current
      const opt = {
        margin: 0,
        filename: `${data.personal.name || 'resume'}-resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }
      await html2pdf().set(opt).from(element).save()
    } catch (err) {
      console.error('PDF export failed:', err)
    } finally {
      setExporting(false)
    }
  }, [data.personal.name, exporting])

  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      resetData()
    }
  }

  return (
    <div className="h-screen flex flex-col bg-surface-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-surface-200 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden md:block h-6 w-px bg-surface-200" />
          <TemplateSelector selected={template} onSelect={setTemplate} />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-2 text-sm text-surface-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Clear all data"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>

          {/* Mobile preview toggle */}
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="md:hidden px-3 py-2 text-sm font-medium rounded-lg border border-surface-200 text-surface-600 hover:bg-surface-50 transition-colors"
          >
            {showPreview ? 'Edit' : 'Preview'}
          </button>

          <button
            onClick={handleExportPDF}
            disabled={exporting}
            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-60"
          >
            {exporting ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            )}
            <span className="hidden sm:inline">{exporting ? 'Exporting...' : 'Download PDF'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Form Panel */}
        <div className={`w-full md:w-[420px] lg:w-[480px] shrink-0 bg-surface-50 border-r border-surface-200 p-5 overflow-y-auto scrollbar-thin ${showPreview ? 'hidden md:block' : ''}`}>
          <ResumeForm data={data} updatePersonal={updatePersonal} updateSection={updateSection} />
        </div>

        {/* Preview Panel */}
        <div
          ref={previewContainerRef}
          className={`flex-1 overflow-auto scrollbar-thin ${!showPreview ? 'hidden md:block' : ''}`}
          style={{ '--preview-scale': previewScale }}
        >
          <ResumePreview data={data} template={template} previewRef={previewRef} />
        </div>
      </div>
    </div>
  )
}
