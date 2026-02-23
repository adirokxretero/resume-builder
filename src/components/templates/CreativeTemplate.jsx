export default function CreativeTemplate({ data }) {
  const { personal, skills, education, experience, projects } = data
  const filteredSkills = skills.filter(s => s.trim())
  const filteredEdu = education.filter(e => e.institution.trim())
  const filteredExp = experience.filter(e => e.company.trim())
  const filteredProj = projects.filter(p => p.name.trim())

  const teal = '#0d9488'
  const tealLight = '#ccfbf1'

  return (
    <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontSize: '12px', lineHeight: 1.55, color: '#1a1a1a' }}>
      {/* Top Bar */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${teal} 0%, #06b6d4 50%, #8b5cf6 100%)` }} />

      <div style={{ padding: '32px 36px 36px', display: 'flex', gap: '28px' }}>
        {/* Main Column */}
        <div style={{ flex: 1 }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {personal.photo && (
                <img src={personal.photo} alt="" style={{ width: '64px', height: '64px', borderRadius: '14px', objectFit: 'cover' }} />
              )}
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                  {personal.name || 'Your Name'}
                </h1>
                {personal.title && (
                  <div style={{ fontSize: '14px', color: teal, fontWeight: 600, marginTop: '4px' }}>{personal.title}</div>
                )}
              </div>
            </div>
            {personal.summary && (
              <p style={{ marginTop: '14px', fontSize: '12px', color: '#475569', lineHeight: 1.7 }}>{personal.summary}</p>
            )}
          </div>

          {/* Experience */}
          {filteredExp.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', color: teal, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '20px', height: '2px', backgroundColor: teal, display: 'inline-block' }} />
                Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredExp.map((exp, i) => (
                  <div key={i} style={{ padding: '14px 16px', backgroundColor: '#f8fafc', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>{exp.position}</span>
                        <span style={{ color: '#64748b' }}> at </span>
                        <span style={{ color: teal, fontWeight: 600 }}>{exp.company}</span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, backgroundColor: '#fff', padding: '2px 8px', borderRadius: '4px' }}>
                        {exp.startDate}{exp.startDate && (exp.endDate || exp.current) ? ' — ' : ''}{exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    {exp.description && (
                      <div style={{ marginTop: '8px', fontSize: '11.5px', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{exp.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProj.length > 0 && (
            <div>
              <h2 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', color: teal, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '20px', height: '2px', backgroundColor: teal, display: 'inline-block' }} />
                Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredProj.map((proj, i) => (
                  <div key={i} style={{ padding: '14px 16px', backgroundColor: '#f8fafc', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '12px', color: '#0f172a' }}>{proj.name}</span>
                      {proj.technologies && <span style={{ fontSize: '10px', color: teal, fontWeight: 600 }}>{proj.technologies}</span>}
                    </div>
                    {proj.link && <div style={{ fontSize: '10px', color: '#64748b', marginTop: '3px' }}>{proj.link}</div>}
                    {proj.description && (
                      <div style={{ marginTop: '6px', fontSize: '11.5px', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{proj.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ width: '170px', flexShrink: 0 }}>
          {/* Contact */}
          <div style={{ marginBottom: '22px' }}>
            <h3 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: teal, marginBottom: '10px' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#475569' }}>
              {personal.email && <div style={{ wordBreak: 'break-all' }}>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.location && <div>{personal.location}</div>}
              {personal.website && <div style={{ wordBreak: 'break-all' }}>{personal.website}</div>}
              {personal.linkedin && <div style={{ wordBreak: 'break-all' }}>{personal.linkedin}</div>}
            </div>
          </div>

          {/* Skills */}
          {filteredSkills.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h3 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: teal, marginBottom: '10px' }}>Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {filteredSkills.map((skill, i) => (
                  <span key={i} style={{ backgroundColor: tealLight, color: '#0f766e', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 600 }}>{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {filteredEdu.length > 0 && (
            <div>
              <h3 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: teal, marginBottom: '10px' }}>Education</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredEdu.map((edu, i) => (
                  <div key={i}>
                    <div style={{ fontWeight: 600, fontSize: '11px', color: '#0f172a' }}>{edu.degree}{edu.field ? `, ${edu.field}` : ''}</div>
                    <div style={{ fontSize: '11px', color: teal, marginTop: '2px' }}>{edu.institution}</div>
                    {(edu.startDate || edu.endDate) && (
                      <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>
                        {edu.startDate}{edu.startDate && edu.endDate ? ' — ' : ''}{edu.endDate}
                      </div>
                    )}
                    {edu.gpa && <div style={{ fontSize: '10px', color: '#94a3b8' }}>GPA: {edu.gpa}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
