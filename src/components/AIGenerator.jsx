import { useState } from 'react'

const API_KEY = import.meta.env.VITE_COHERE_API_KEY || ''

const systemPrompt = `You are a professional resume writer. The user will describe what kind of resume they want. Generate realistic, professional resume content in JSON format.

Return ONLY valid JSON with this exact structure (no markdown, no backticks, just raw JSON):
{
  "personal": {
    "name": "Full Name",
    "title": "Job Title",
    "email": "email@example.com",
    "phone": "+1 (555) 000-0000",
    "location": "City, State",
    "website": "website.com",
    "linkedin": "linkedin.com/in/username",
    "summary": "2-3 sentence professional summary",
    "photo": null
  },
  "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"],
  "education": [
    {
      "institution": "University Name",
      "degree": "Degree Type",
      "field": "Field of Study",
      "startDate": "Mon YYYY",
      "endDate": "Mon YYYY",
      "gpa": "X.X/4.0"
    }
  ],
  "experience": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "Mon YYYY",
      "endDate": "Mon YYYY or empty if current",
      "current": false,
      "description": "• Achievement or responsibility with quantified impact\\n• Another achievement with numbers\\n• Third bullet point"
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "What the project does and your role",
      "technologies": "Tech1, Tech2, Tech3",
      "link": "github.com/user/project"
    }
  ]
}

Rules:
- Use realistic but FICTIONAL names, companies, and details
- Include 8-12 relevant skills
- Include 1-2 education entries
- Include 2-3 experience entries with bullet points using • character
- Include 1-2 projects
- Quantify achievements with numbers (%, $, users, etc.)
- Make descriptions specific and impactful, not generic
- Match the industry/role the user describes
- Return ONLY the JSON object, nothing else`

export default function AIGenerator({ onGenerate }) {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) { setError('Describe the resume you want first'); return }
    if (!API_KEY) { setError('AI generation is not configured. Contact the site owner.'); return }

    setError('')
    setLoading(true)

    try {
      const res = await fetch('https://api.cohere.ai/v2/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-a-03-2025',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt },
          ],
        }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.message || `Something went wrong (${res.status}). Try again.`)
      }

      const data = await res.json()
      const text = data.message?.content?.[0]?.text || ''

      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error('Generation failed. Please try again with a different description.')

      const resume = JSON.parse(jsonMatch[0])

      if (!resume.personal || !resume.skills || !resume.education || !resume.experience) {
        throw new Error('Incomplete result. Try again with more detail in your description.')
      }

      onGenerate(resume)
      setOpen(false)
      setPrompt('')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
          cursor: 'pointer', border: '1px solid rgba(232,148,74,0.2)',
          background: 'rgba(192,86,33,0.08)',
          color: '#e8944a', transition: 'all 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,148,74,0.4)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(192,86,33,0.15)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,148,74,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <svg style={{ width: '13px', height: '13px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
        AI Generate
      </button>
    )
  }

  return (
    <>
      <div
        onClick={() => { if (!loading) setOpen(false) }}
        style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)', zIndex: 200, animation: 'fadeIn 0.15s ease-out',
        }}
      />

      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '90%', maxWidth: '500px', background: '#1c1c1f',
        borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
        zIndex: 201, overflow: 'hidden', animation: 'modalIn 0.2s ease-out',
      }}>
        <div style={{
          padding: '24px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#f0ece6', letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', sans-serif" }}>
              AI Resume Generator
            </h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
              Describe what you need — we'll write the rest
            </p>
          </div>
          <button
            onClick={() => { if (!loading) setOpen(false) }}
            style={{ padding: '6px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', display: 'flex' }}
          >
            <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              What kind of resume?
            </label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder={'e.g. "Senior frontend developer, 5 years React, worked at startups"'}
              rows={4}
              style={{
                width: '100%', padding: '12px 13px', backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', fontSize: '14px',
                color: '#f0ece6', outline: 'none', resize: 'none', lineHeight: 1.6,
                fontFamily: 'inherit', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(232,148,74,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          <div>
            <p style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.2)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick ideas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {[
                'Full-stack developer, 3 years, Python & React',
                'Marketing manager, 5 years, B2B SaaS',
                'UX designer, 4 years, fintech',
                'Data scientist, 2 years, fresh from grad school',
                'Product manager, 6 years, big tech',
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(q)}
                  style={{
                    padding: '5px 10px', borderRadius: '7px', border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.03)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,148,74,0.3)'; e.currentTarget.style.color = '#e8944a'; e.currentTarget.style.background = 'rgba(192,86,33,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{
              padding: '10px 14px', borderRadius: '10px', backgroundColor: 'rgba(185,28,28,0.1)',
              border: '1px solid rgba(185,28,28,0.2)', fontSize: '12px', color: '#ef4444', lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              width: '100%', padding: '13px', borderRadius: '12px', border: 'none',
              background: loading ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #c05621 0%, #d4662e 100%)',
              color: '#fff',
              fontSize: '14px', fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
              boxShadow: loading ? 'none' : '0 0 24px rgba(192,86,33,0.25)',
              transition: 'all 0.2s', letterSpacing: '0.01em',
            }}
          >
            {loading ? (
              <>
                <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.3 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path style={{ opacity: 0.9 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Generate Resume
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
