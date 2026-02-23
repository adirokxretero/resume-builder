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
          padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
          cursor: 'pointer', border: '1px solid #2A2A3A',
          background: open ? 'rgba(255,255,255,0.06)' : 'transparent',
          color: 'rgba(255,255,255,0.4)',
          transition: 'all 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.borderColor = '#2A2A3A'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' } }}
      >
        <svg style={{ width: '13px', height: '13px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        Examples
        <svg style={{ width: '10px', height: '10px', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0,
          background: '#1C1C28', borderRadius: '14px', border: '1px solid #2A2A3A',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)', width: '300px', zIndex: 100,
          overflow: 'hidden', animation: 'dropIn 0.15s ease-out',
        }}>
          <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid #2A2A3A' }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#F0F0F5' }}>Load an example</p>
            <p style={{ fontSize: '13px', color: '#8A8A9A', marginTop: '3px' }}>See how templates look with real data</p>
          </div>
          <div style={{ padding: '6px' }}>
            {sampleResumes.map(sample => (
              <button
                key={sample.id}
                onClick={() => handleSelect(sample)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
                  padding: '10px', border: 'none', background: 'transparent',
                  borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,255,0.04)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0,
                }}>
                  {sample.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F0F0F5' }}>{sample.data.personal.name}</div>
                  <div style={{ fontSize: '13px', color: '#8A8A9A', marginTop: '1px' }}>{sample.label}</div>
                </div>
                <svg style={{ width: '12px', height: '12px', color: 'rgba(255,255,255,0.15)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
