export default function MinimalTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  const sectionHeading = {
    fontSize: '9px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: '#7c3aed',
    marginBottom: '14px',
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const divider = {
    border: 'none',
    borderTop: '1px solid #e2e8f0',
    margin: '18px 0',
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', lineHeight: 1.55, color: '#334155', padding: '36px 32px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '6px' }}>
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 300, color: '#0f172a', lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.5px' }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 500, marginTop: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>{personal.title}</div>
          )}
        </div>
      </div>

      {/* Contact Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '9px', color: '#64748b', marginTop: '12px' }}>
        {personal.email && <span>{personal.email}</span>}
        {personal.phone && <span>{personal.phone}</span>}
        {personal.location && <span>{personal.location}</span>}
        {personal.website && <span>{personal.website}</span>}
        {personal.linkedin && <span>{personal.linkedin}</span>}
      </div>

      {/* Summary */}
      {personal.summary && (
        <>
          <hr style={divider} />
          <p style={{ fontSize: '9.5px', color: '#475569', lineHeight: 1.7, maxWidth: '90%' }}>{personal.summary}</p>
        </>
      )}

      {/* Experience */}
      {filteredExp.length > 0 && (
        <>
          <hr style={divider} />
          <h2 style={sectionHeading}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredExp.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: '10.5px', color: '#0f172a' }}>{exp.position}</span>
                    {exp.company && <span style={{ color: '#64748b' }}> — {exp.company}</span>}
                  </div>
                  <span style={{ fontSize: '8.5px', color: '#94a3b8', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <div style={{ marginTop: '6px', fontSize: '9px', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Projects */}
      {filteredProj.length > 0 && (
        <>
          <hr style={divider} />
          <h2 style={sectionHeading}>Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredProj.map((proj, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontWeight: 600, fontSize: '10px', color: '#0f172a' }}>{proj.name}</span>
                  {proj.technologies && (
                    <span style={{ fontSize: '8px', color: '#7c3aed', fontFamily: "'Space Grotesk', sans-serif" }}>{proj.technologies}</span>
                  )}
                </div>
                {proj.link && <div style={{ fontSize: '8px', color: '#7c3aed', marginTop: '2px' }}>{proj.link}</div>}
                {proj.description && (
                  <div style={{ marginTop: '4px', fontSize: '9px', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                    {proj.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Education */}
      {filteredEdu.length > 0 && (
        <>
          <hr style={divider} />
          <h2 style={sectionHeading}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredEdu.map((edu, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: '10px', color: '#0f172a' }}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</span>
                  <span style={{ color: '#64748b' }}> — {edu.institution}</span>
                  {edu.gpa && <span style={{ fontSize: '8.5px', color: '#94a3b8' }}> (GPA: {edu.gpa})</span>}
                </div>
                <span style={{ fontSize: '8.5px', color: '#94a3b8', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Skills */}
      {filteredSkills.length > 0 && (
        <>
          <hr style={divider} />
          <h2 style={sectionHeading}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {filteredSkills.map((skill, i) => (
              <span key={i} style={{ border: '1px solid #e2e8f0', padding: '3px 10px', borderRadius: '20px', fontSize: '8.5px', color: '#475569' }}>
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
