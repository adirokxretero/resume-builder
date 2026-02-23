import { useState, useRef, useEffect } from 'react'
import { sampleResumes } from '../data/sampleResumes'

export default function SamplePicker({ onLoad }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (sample) => {
    onLoad(sample)
    setOpen(false)
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '7px 13px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
          cursor: 'pointer', border: '1.5px solid #e2ddd7',
          background: open ? '#f5f0eb' : '#fff', color: '#6b6560',
          transition: 'all 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4cfc9'; e.currentTarget.style.background = '#f5f0eb' }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.borderColor = '#e2ddd7'; e.currentTarget.style.background = '#fff' } }}
      >
        <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        Examples
        <svg style={{ width: '11px', height: '11px', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0,
          background: '#fff', borderRadius: '14px', border: '1px solid #ede8e2',
          boxShadow: '0 16px 48px rgba(0,0,0,0.1)', width: '320px', zIndex: 100,
          overflow: 'hidden', animation: 'dropIn 0.15s ease-out',
        }}>
          <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid #f5f0eb' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Load an example</p>
            <p style={{ fontSize: '11px', color: '#a3a098', marginTop: '3px' }}>See how templates look with real data</p>
          </div>
          <div style={{ padding: '6px' }}>
            {sampleResumes.map(sample => (
              <button
                key={sample.id}
                onClick={() => handleSelect(sample)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
                  padding: '11px 10px', border: 'none', background: 'transparent',
                  borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#faf9f6'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#f5f0eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', flexShrink: 0,
                }}>
                  {sample.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#2c2c2c' }}>{sample.data.personal.name}</div>
                  <div style={{ fontSize: '11px', color: '#a3a098', marginTop: '1px' }}>{sample.label}</div>
                </div>
                <svg style={{ width: '14px', height: '14px', color: '#d4cfc9', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            ))}
          </div>

          <style>{`@keyframes dropIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
      )}
    </div>
  )
}
