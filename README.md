# ResumeForge — Professional Resume Builder

A modern, free resume builder web application built with React, Tailwind CSS, and Vite. Create professional resumes with live preview, multiple templates, and PDF export.

## Features

- **Live Preview** — See your resume update in real-time as you type
- **3 Professional Templates** — Modern (two-column), Classic (traditional), Minimal (clean)
- **PDF Export** — Download your resume as a high-quality PDF
- **Photo Upload** — Add a professional headshot
- **Auto-Save** — All data persists in browser localStorage
- **Mobile Responsive** — Works on phones, tablets, and desktops
- **Professional Fonts** — Inter, Crimson Pro, Space Grotesk from Google Fonts

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool
- **Tailwind CSS 4** — Utility-first styling
- **React Router 7** — Client-side routing
- **html2pdf.js** — PDF generation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

## Deploy on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

### Option 2: Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Vite — just click **"Deploy"**
6. Your site will be live at `https://your-project.vercel.app`

Vercel automatically:
- Detects the Vite framework
- Runs `npm run build`
- Serves the `dist/` folder
- Sets up SPA routing

### SPA Routing Fix

For client-side routing to work on Vercel, create a `vercel.json` in the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Project Structure

```
resume-builder/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── templates/
│   │   │   ├── ModernTemplate.jsx    # Two-column sidebar layout
│   │   │   ├── ClassicTemplate.jsx   # Traditional single-column
│   │   │   └── MinimalTemplate.jsx   # Clean, spacious design
│   │   ├── Builder.jsx               # Main builder page
│   │   ├── Landing.jsx               # Landing/marketing page
│   │   ├── ResumeForm.jsx            # Form with all sections
│   │   ├── ResumePreview.jsx         # Live preview wrapper
│   │   ├── TemplateSelector.jsx      # Template switcher
│   │   ├── Logo.jsx                  # Brand logo component
│   │   └── Footer.jsx                # Site footer
│   ├── hooks/
│   │   ├── useLocalStorage.js        # localStorage persistence
│   │   └── useResumeData.js          # Resume state management
│   ├── App.jsx                       # Route definitions
│   ├── index.css                     # Global styles & Tailwind
│   └── main.jsx                      # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
