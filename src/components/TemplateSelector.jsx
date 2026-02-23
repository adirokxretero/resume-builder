const templates = [
  { id: 'modern', name: 'Modern', color: '#1e3a5f' },
  { id: 'classic', name: 'Classic', color: '#1e293b' },
  { id: 'minimal', name: 'Minimal', color: '#7c3aed' },
]

export default function TemplateSelector({ selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      {templates.map(t => {
        const isActive = selected === t.id
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: isActive ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
              background: isActive ? '#eff6ff' : '#ffffff',
              color: isActive ? '#1d4ed8' : '#64748b',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: t.color, opacity: isActive ? 1 : 0.5 }} />
            {t.name}
          </button>
        )
      })}
    </div>
  )
}
