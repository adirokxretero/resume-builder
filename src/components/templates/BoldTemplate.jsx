export default function BoldTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  const accent = '#c05621'

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: 1.55, color: '#1a1a1a', padding: '0' }}>
      {/* Header Banner */}
      <div style={{ backgroundColor: accent, color: '#fff', padding: '36px 36px 28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        {personal.photo && (
          <img src={personal.photo} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)' }} />
        )}
        <div>
          <h1 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '5px', opacity: 0.9 }}>{personal.title}</div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '10px', fontSize: '11px', opacity: 0.85 }}>
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.website && <span>{personal.website}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
          </div>
        </div>
      </div>

      <div style={{ padding: '28px 36px 36px' }}>
        {/* Summary */}
        {personal.summary && (
          <div style={{ marginBottom: '24px', padding: '16px 18px', backgroundColor: '#fdf2ec', borderLeft: `4px solid ${accent}`, borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: '12px', color: '#4a3728', lineHeight: 1.7 }}>{personal.summary}</p>
          </div>
        )}

        {/* Skills */}
        {filteredSkills.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: accent, marginBottom: '12px' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {filteredSkills.map((skill, i) => (
                <span key={i} style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '4px 12px', borderRadius: '5px', fontSize: '10px', fontWeight: 600 }}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {filteredExp.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: accent, marginBottom: '14px' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {filteredExp.map((exp, i) => (
                <div key={i} style={{ borderLeft: '2px solid #e2ddd7', paddingLeft: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '13px' }}>{exp.position}</span>
                      <span style={{ color: accent, fontWeight: 600 }}> · {exp.company}</span>
                    </div>
                    <span style={{ fontSize: '10px', color: '#a3a098', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: '6px', fontSize: '11.5px', color: '#4a4a4a', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{exp.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {filteredProj.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: accent, marginBottom: '14px' }}>Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredProj.map((proj, i) => (
                <div key={i} style={{ borderLeft: '2px solid #e2ddd7', paddingLeft: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '12px' }}>{proj.name}</span>
                    {proj.technologies && <span style={{ fontSize: '10px', color: accent, fontWeight: 600 }}>{proj.technologies}</span>}
                  </div>
                  {proj.link && <div style={{ fontSize: '10px', color: '#6b6560', marginTop: '2px' }}>{proj.link}</div>}
                  {proj.description && (
                    <div style={{ marginTop: '5px', fontSize: '11.5px', color: '#4a4a4a', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{proj.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {filteredEdu.length > 0 && (
          <div>
            <h2 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: accent, marginBottom: '12px' }}>Education</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredEdu.map((edu, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '12px' }}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</span>
                    <span style={{ color: '#6b6560' }}> — {edu.institution}</span>
                    {edu.gpa && <span style={{ fontSize: '10px', color: '#a3a098' }}> (GPA: {edu.gpa})</span>}
                  </div>
                  <span style={{ fontSize: '10px', color: '#a3a098', fontWeight: 600 }}>
                    {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
