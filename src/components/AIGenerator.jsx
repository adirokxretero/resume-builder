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
          padding: '7px 13px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
          cursor: 'pointer', border: '1.5px solid #e2ddd7',
          background: 'linear-gradient(135deg, #fdf2ec 0%, #fff 100%)',
          color: '#c05621', transition: 'all 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#c05621'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(192,86,33,0.12)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2ddd7'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
        AI Generate
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => { if (!loading) setOpen(false) }}
        style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)', zIndex: 200, animation: 'fadeIn 0.15s ease-out',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '90%', maxWidth: '520px', background: '#faf9f6',
        borderRadius: '20px', boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
        zIndex: 201, overflow: 'hidden', animation: 'modalIn 0.2s ease-out',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', sans-serif" }}>
              AI Resume Generator
            </h2>
            <p style={{ fontSize: '13px', color: '#a3a098', marginTop: '4px' }}>
              Describe what you need — we'll write the rest
            </p>
          </div>
          <button
            onClick={() => { if (!loading) setOpen(false) }}
            style={{ padding: '6px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#a3a098', display: 'flex' }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Prompt */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#6b6560', marginBottom: '6px' }}>
              What kind of resume do you want?
            </label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder={"e.g. \"A senior frontend developer with 5 years of React experience, worked at startups, graduated from UC Berkeley\""}
              rows={4}
              style={{
                width: '100%', padding: '12px 13px', backgroundColor: '#fff',
                border: '1.5px solid #e2ddd7', borderRadius: '10px', fontSize: '14px',
                color: '#2c2c2c', outline: 'none', resize: 'none', lineHeight: 1.6,
                fontFamily: 'inherit', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#c05621'}
              onBlur={e => e.target.style.borderColor = '#e2ddd7'}
            />
          </div>

          {/* Quick prompts */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#a3a098', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick ideas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
                    padding: '5px 11px', borderRadius: '8px', border: '1px solid #e2ddd7',
                    background: '#fff', fontSize: '12px', color: '#6b6560', cursor: 'pointer',
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#c05621'; e.currentTarget.style.color = '#c05621'; e.currentTarget.style.background = '#fdf2ec' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2ddd7'; e.currentTarget.style.color = '#6b6560'; e.currentTarget.style.background = '#fff' }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              padding: '10px 14px', borderRadius: '10px', backgroundColor: '#fef2f2',
              border: '1px solid #fecaca', fontSize: '13px', color: '#b91c1c', lineHeight: 1.5,
            }}>
              {error}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
              backgroundColor: loading ? '#6b6560' : '#c05621', color: '#fff',
              fontSize: '15px', fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
              boxShadow: loading ? 'none' : '0 4px 12px rgba(192,86,33,0.25)',
              transition: 'all 0.2s', letterSpacing: '-0.01em',
            }}
          >
            {loading ? (
              <>
                <svg style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.3 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path style={{ opacity: 0.9 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating your resume...
              </>
            ) : (
              <>
                <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Generate Resume
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalIn { from { opacity: 0; transform: translate(-50%, -48%); } to { opacity: 1; transform: translate(-50%, -50%); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  )
}
