const templates = [
  { id: 'modern', name: 'Modern', color: '#1e3a5f' },
  { id: 'classic', name: 'Classic', color: '#2c2c2c' },
  { id: 'minimal', name: 'Minimal', color: '#5f7161' },
]

export default function TemplateSelector({ selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {templates.map(t => {
        const isActive = selected === t.id
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '7px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s',
              border: isActive ? '1.5px solid #c05621' : '1.5px solid #e2ddd7',
              background: isActive ? '#fdf2ec' : '#fff',
              color: isActive ? '#c05621' : '#6b6560',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: t.color, opacity: isActive ? 1 : 0.4 }} />
            {t.name}
          </button>
        )
      })}
    </div>
  )
}
