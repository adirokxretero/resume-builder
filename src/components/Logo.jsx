import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 no-underline">
      <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg font-display">R</span>
      </div>
      <span className={`text-xl font-display font-bold tracking-tight ${light ? 'text-white' : 'text-surface-800'}`}>
        Resume<span className="text-primary-600">Forge</span>
      </span>
    </Link>
  )
}
