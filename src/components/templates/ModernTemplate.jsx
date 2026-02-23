export default function ModernTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', lineHeight: 1.5, color: '#1e293b', display: 'flex', minHeight: '100%' }}>
      {/* Sidebar */}
      <div style={{ width: '35%', backgroundColor: '#1e3a5f', color: '#e2e8f0', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Photo */}
        {personal.photo && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={personal.photo}
              alt=""
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.2)' }}
            />
          </div>
        )}

        {/* Contact */}
        <div>
          <h3 style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#93c5fd', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '9px' }}>
            {personal.email && <div style={{ wordBreak: 'break-all' }}>{personal.email}</div>}
            {personal.phone && <div>{personal.phone}</div>}
            {personal.location && <div>{personal.location}</div>}
            {personal.website && <div style={{ wordBreak: 'break-all' }}>{personal.website}</div>}
            {personal.linkedin && <div style={{ wordBreak: 'break-all' }}>{personal.linkedin}</div>}
          </div>
        </div>

        {/* Skills */}
        {filteredSkills.length > 0 && (
          <div>
            <h3 style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#93c5fd', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {filteredSkills.map((skill, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px', fontSize: '8.5px' }}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {filteredEdu.length > 0 && (
          <div>
            <h3 style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#93c5fd', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredEdu.map((edu, i) => (
                <div key={i}>
                  <div style={{ fontWeight: 600, fontSize: '9.5px' }}>{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</div>
                  <div style={{ color: '#93c5fd', fontSize: '9px', marginTop: '2px' }}>{edu.institution}</div>
                  {(edu.startDate || edu.endDate) && (
                    <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '2px' }}>
                      {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                    </div>
                  )}
                  {edu.gpa && <div style={{ fontSize: '8px', color: '#94a3b8', marginTop: '1px' }}>GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '28px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <div style={{ fontSize: '11px', color: '#1e3a5f', fontWeight: 600, marginTop: '4px' }}>{personal.title}</div>
          )}
          {personal.summary && (
            <p style={{ fontSize: '9.5px', color: '#475569', marginTop: '10px', lineHeight: 1.6 }}>{personal.summary}</p>
          )}
        </div>

        {/* Experience */}
        {filteredExp.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#1e3a5f', marginBottom: '12px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredExp.map((exp, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '10.5px' }}>{exp.position}</span>
                      <span style={{ color: '#64748b', fontSize: '9.5px' }}> at {exp.company}</span>
                    </div>
                    <span style={{ fontSize: '8.5px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                      {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <div style={{ marginTop: '6px', fontSize: '9px', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {filteredProj.length > 0 && (
          <div>
            <h2 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#1e3a5f', marginBottom: '12px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px' }}>Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredProj.map((proj, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '10px' }}>{proj.name}</span>
                    {proj.technologies && (
                      <span style={{ fontSize: '8px', color: '#94a3b8', fontStyle: 'italic' }}>{proj.technologies}</span>
                    )}
                  </div>
                  {proj.link && (
                    <div style={{ fontSize: '8px', color: '#1e3a5f', marginTop: '2px' }}>{proj.link}</div>
                  )}
                  {proj.description && (
                    <div style={{ marginTop: '4px', fontSize: '9px', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {proj.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
