const templates = [
  { id: 'modern', name: 'Modern', desc: 'Two-column with sidebar', color: '#1e3a5f' },
  { id: 'classic', name: 'Classic', desc: 'Traditional single-column', color: '#1e293b' },
  { id: 'minimal', name: 'Minimal', desc: 'Clean & spacious', color: '#7c3aed' },
]

export default function TemplateSelector({ selected, onSelect }) {
  return (
    <div className="flex gap-2">
      {templates.map(t => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
            selected === t.id
              ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
              : 'border-surface-200 text-surface-500 hover:border-surface-300 hover:bg-surface-50'
          }`}
        >
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: t.color }} />
          <span className="hidden sm:inline">{t.name}</span>
        </button>
      ))}
    </div>
  )
}
