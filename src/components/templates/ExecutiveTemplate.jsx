export default function ExecutiveTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  const gold = '#9a7b4f'

  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '12px', lineHeight: 1.6, color: '#2c2c2c', padding: '44px 40px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: `2px solid ${gold}` }}>
        {personal.photo && (
          <img src={personal.photo} alt="" style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: `2px solid ${gold}` }} />
        )}
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '3px', textTransform: 'uppercase', lineHeight: 1.15 }}>
          {personal.name || 'Your Name'}
        </h1>
        {personal.title && (
          <div style={{ fontSize: '14px', color: gold, fontWeight: 500, marginTop: '6px', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>{personal.title}</div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '12px', fontSize: '11px', color: '#6b6560', fontFamily: "'Inter', sans-serif" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.email && personal.phone && <span style={{ color: gold }}>◆</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.phone && personal.location && <span style={{ color: gold }}>◆</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
        {(personal.website || personal.linkedin) && (
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '4px', fontSize: '11px', color: '#6b6560', fontFamily: "'Inter', sans-serif" }}>
            {personal.website && <span>{personal.website}</span>}
            {personal.website && personal.linkedin && <span style={{ color: gold }}>◆</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {personal.summary && (
        <div style={{ marginTop: '22px', marginBottom: '22px', textAlign: 'center', maxWidth: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '12px', color: '#4a4a4a', lineHeight: 1.75, fontStyle: 'italic' }}>{personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {filteredExp.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: gold, textAlign: 'center', marginBottom: '16px', fontFamily: "'Inter', sans-serif" }}>
            <span style={{ borderBottom: `1px solid ${gold}`, paddingBottom: '4px' }}>Professional Experience</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {filteredExp.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '13px' }}>{exp.position}</span>
                    <span style={{ color: gold, fontWeight: 600 }}> | </span>
                    <span style={{ fontStyle: 'italic', color: '#4a4a4a' }}>{exp.company}</span>
                  </div>
                  <span style={{ fontSize: '10px', color: '#a3a098', fontFamily: "'Inter', sans-serif" }}>
                    {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <div style={{ marginTop: '6px', fontSize: '11.5px', color: '#4a4a4a', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two-column bottom */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Left */}
        <div style={{ flex: 1 }}>
          {/* Education */}
          {filteredEdu.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: gold, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                <span style={{ borderBottom: `1px solid ${gold}`, paddingBottom: '4px' }}>Education</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filteredEdu.map((edu, i) => (
                  <div key={i}>
                    <div style={{ fontWeight: 700, fontSize: '12px' }}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</div>
                    <div style={{ fontStyle: 'italic', color: '#6b6560', fontSize: '11px' }}>{edu.institution}</div>
                    <div style={{ fontSize: '10px', color: '#a3a098', marginTop: '2px', fontFamily: "'Inter', sans-serif" }}>
                      {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                      {edu.gpa ? ` · GPA: ${edu.gpa}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProj.length > 0 && (
            <div>
              <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: gold, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
                <span style={{ borderBottom: `1px solid ${gold}`, paddingBottom: '4px' }}>Projects</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredProj.map((proj, i) => (
                  <div key={i}>
                    <span style={{ fontWeight: 700, fontSize: '12px' }}>{proj.name}</span>
                    {proj.technologies && <span style={{ fontSize: '10px', color: gold, fontFamily: "'Inter', sans-serif" }}> — {proj.technologies}</span>}
                    {proj.link && <div style={{ fontSize: '10px', color: '#6b6560', marginTop: '2px' }}>{proj.link}</div>}
                    {proj.description && (
                      <div style={{ marginTop: '4px', fontSize: '11.5px', color: '#4a4a4a', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{proj.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right - Skills */}
        {filteredSkills.length > 0 && (
          <div style={{ width: '180px', flexShrink: 0 }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: gold, marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>
              <span style={{ borderBottom: `1px solid ${gold}`, paddingBottom: '4px' }}>Skills</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {filteredSkills.map((skill, i) => (
                <div key={i} style={{ fontSize: '11px', color: '#2c2c2c', paddingLeft: '10px', borderLeft: `2px solid ${gold}`, fontFamily: "'Inter', sans-serif" }}>{skill}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
