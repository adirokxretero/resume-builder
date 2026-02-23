const templates = [
  { id: 'modern', name: 'Modern', color: '#1e3a5f' },
  { id: 'classic', name: 'Classic', color: '#2c2c2c' },
  { id: 'minimal', name: 'Minimal', color: '#5f7161' },
  { id: 'bold', name: 'Bold', color: '#c05621' },
  { id: 'executive', name: 'Executive', color: '#9a7b4f' },
  { id: 'creative', name: 'Creative', color: '#0d9488' },
]

export default function TemplateSelector({ selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '4px', overflowX: 'auto' }}>
      {templates.map(t => {
        const isActive = selected === t.id
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
              border: isActive ? '1px solid rgba(0,212,255,0.4)' : '1px solid #2A2A3A',
              background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
              color: isActive ? '#00D4FF' : 'rgba(255,255,255,0.4)',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: t.color, opacity: isActive ? 1 : 0.4 }} />
            {t.name}
          </button>
        )
      })}
    </div>
  )
}
