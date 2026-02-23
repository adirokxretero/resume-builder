export default function ClassicTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  const sectionHeading = {
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#1e293b',
    borderBottom: '1.5px solid #1e293b',
    paddingBottom: '4px',
    marginBottom: '12px',
    fontFamily: "'Crimson Pro', Georgia, serif",
  }

  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", fontSize: '12px', lineHeight: 1.55, color: '#1e293b', padding: '36px 32px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 10px', display: 'block', border: '2px solid #e2e8f0' }}
          />
        )}
        <h1 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '1px', color: '#0f172a', lineHeight: 1.2 }}>
          {personal.name || 'Your Name'}
        </h1>
        {personal.title && (
          <div style={{ fontSize: '14px', color: '#475569', marginTop: '4px', fontStyle: 'italic' }}>{personal.title}</div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px', marginTop: '8px', fontSize: '11px', color: '#64748b' }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.email && personal.phone && <span>|</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.phone && personal.location && <span>|</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px', marginTop: '4px', fontSize: '11px', color: '#64748b' }}>
          {personal.website && <span>{personal.website}</span>}
          {personal.website && personal.linkedin && <span>|</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionHeading}>Summary</h2>
          <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.65 }}>{personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {filteredExp.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionHeading}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredExp.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '13px' }}>{exp.position}</span>
                    {exp.company && <span style={{ fontStyle: 'italic', color: '#475569' }}>, {exp.company}</span>}
                  </div>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                    {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <div style={{ marginTop: '4px', fontSize: '11.5px', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {filteredEdu.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionHeading}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredEdu.map((edu, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '12px' }}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</span>
                  <span style={{ fontStyle: 'italic', color: '#475569' }}>, {edu.institution}</span>
                  {edu.gpa && <span style={{ fontSize: '11px', color: '#94a3b8' }}> — GPA: {edu.gpa}</span>}
                </div>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                  {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {filteredProj.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionHeading}>Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredProj.map((proj, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, fontSize: '12px' }}>{proj.name}</span>
                  {proj.technologies && (
                    <span style={{ fontSize: '10px', color: '#94a3b8', fontStyle: 'italic' }}>{proj.technologies}</span>
                  )}
                </div>
                {proj.link && <div style={{ fontSize: '10px', color: '#3b82f6', marginTop: '2px' }}>{proj.link}</div>}
                {proj.description && (
                  <div style={{ marginTop: '4px', fontSize: '11.5px', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {proj.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {filteredSkills.length > 0 && (
        <div>
          <h2 style={sectionHeading}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {filteredSkills.map((skill, i) => (
              <span key={i} style={{ backgroundColor: '#f1f5f9', padding: '3px 10px', borderRadius: '3px', fontSize: '11px', color: '#334155' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
