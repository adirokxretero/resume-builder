# ResumeForge — Professional Resume Builder

A modern resume builder: live preview, multiple templates, photo upload, local auto-save, and PDF export.

**Live:** [resume-builder-pi-ashy-71.vercel.app](https://resume-builder-pi-ashy-71.vercel.app)

---

## About This Project

This app exists because I imagined the product — the flows, the templates, the feel of the builder — and wanted it built end-to-end. **Every product and design decision is mine.** The implementation was executed with AI coding assistants ([Claude](https://claude.ai), [Cursor](https://cursor.sh)) turning that vision into React, styles, and wiring.

> I had the ideas. The assistants wrote the code. The result is my project.

**Solo project:** There are no co-maintainers and no automated bots committing to this repository. All changes land through **manual commits and `git push` from my machine**; Vercel then builds from the latest push.

---

## Features

- **Live preview** — Resume updates as you type  
- **Multiple templates** — Modern, Classic, Minimal, and more  
- **PDF export** — Download via html2pdf.js  
- **Photo upload** — Headshot support  
- **Auto-save** — Persists in `localStorage`  
- **Responsive** — Usable on phone through desktop  

---

## Tech Stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| UI           | React 19                        |
| Build        | Vite 7                          |
| Styling      | Tailwind CSS 4                  |
| Routing      | React Router 7                  |
| PDF          | html2pdf.js                     |
| Hosting      | Vercel                          |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

**Production build**

```bash
npm run build
```

Output: `dist/`.

---

## Deployment (manual)

There is **no CI that pushes commits for you**. Typical flow:

1. Work locally, commit when ready  
2. `git push origin main`  
3. Vercel picks up the push and runs `npm run build`  

Optional: `vercel --prod` from the project root if you deploy via CLI.

**SPA routing on Vercel** — `vercel.json` rewrites all routes to `index.html` (already included).

---

## Project structure (high level)

```
src/
  components/     # Builder, Landing, templates, forms, AI UI
  hooks/          # resume state, localStorage
  data/           # sample resumes
```

---

## Contributing

Not open for outside contributions — personal portfolio piece. See [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md).

---

## License

MIT — learn from it; don’t copy wholesale.

---

*Adithya M · Bangalore, India · 2026*
