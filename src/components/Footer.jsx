import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo light />
          <div className="flex gap-8 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#templates" className="hover:text-white transition-colors">Templates</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-surface-700 text-center text-sm text-surface-500">
          &copy; {new Date().getFullYear()} ResumeForge. All rights reserved. Built with React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
