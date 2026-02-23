import { useState } from 'react'

const sectionTabs = [
  { id: 'personal', label: 'Personal', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { id: 'skills', label: 'Skills', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
  { id: 'education', label: 'Education', icon: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
  { id: 'experience', label: 'Experience', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' },
  { id: 'projects', label: 'Projects', icon: 'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z' },
]

const inputStyle = {
  width: '100%', padding: '11px 14px',
  backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px',
  fontSize: '15px', color: '#f0ece6', outline: 'none', transition: 'all 0.2s', fontFamily: 'inherit',
}

const labelStyle = {
  display: 'block', fontSize: '12px', fontWeight: 600,
  color: 'rgba(255,255,255,0.35)', marginBottom: '7px', letterSpacing: '0.02em', textTransform: 'uppercase',
}

function Input({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={inputStyle}
        onFocus={e => { e.target.style.borderColor = 'rgba(232,148,74,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(192,86,33,0.1)' }}
        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
      />
    </div>
  )
}

function Textarea({ label, value, onChange, placeholder = '', rows = 3 }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <textarea
        value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
        onFocus={e => { e.target.style.borderColor = 'rgba(232,148,74,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(192,86,33,0.1)' }}
        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
      />
    </div>
  )
}

function AddButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px',
        color: '#e8944a', fontWeight: 600, background: 'none', border: '1px dashed rgba(232,148,74,0.25)',
        padding: '12px 18px', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s',
        width: '100%', justifyContent: 'center',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,86,33,0.08)'; e.currentTarget.style.borderColor = 'rgba(232,148,74,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(232,148,74,0.25)' }}
    >
      <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      {label}
    </button>
  )
}

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.2)', transition: 'all 0.2s', display: 'flex' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#e8944a'; e.currentTarget.style.background = 'rgba(192,86,33,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}
    >
      <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px',
  padding: '20px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '14px',
}

function PersonalSection({ data, updatePersonal }) {
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => updatePersonal('photo', reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}>
            {data.photo ? (
              <img src={data.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <svg style={{ width: '22px', height: '22px', color: 'rgba(255,255,255,0.2)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            )}
          </div>
          <label style={{ position: 'absolute', inset: 0, cursor: 'pointer', borderRadius: '50%' }}>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
          </label>
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#f0ece6' }}>Profile Photo</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>Click to upload</p>
          {data.photo && (
            <button onClick={() => updatePersonal('photo', null)} style={{ fontSize: '11px', color: '#e8944a', background: 'none', border: 'none', cursor: 'pointer', marginTop: '4px', fontWeight: 600 }}>
              Remove
            </button>
          )}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Input label="Full Name" value={data.name} onChange={v => updatePersonal('name', v)} placeholder="John Doe" />
        <Input label="Job Title" value={data.title} onChange={v => updatePersonal('title', v)} placeholder="Software Engineer" />
        <Input label="Email" value={data.email} onChange={v => updatePersonal('email', v)} type="email" placeholder="john@example.com" />
        <Input label="Phone" value={data.phone} onChange={v => updatePersonal('phone', v)} placeholder="+1 (555) 123-4567" />
        <Input label="Location" value={data.location} onChange={v => updatePersonal('location', v)} placeholder="San Francisco, CA" />
        <Input label="Website" value={data.website} onChange={v => updatePersonal('website', v)} placeholder="johndoe.com" />
        <div style={{ gridColumn: 'span 2' }}>
          <Input label="LinkedIn" value={data.linkedin} onChange={v => updatePersonal('linkedin', v)} placeholder="linkedin.com/in/johndoe" />
        </div>
      </div>
      <Textarea label="Professional Summary" value={data.summary} onChange={v => updatePersonal('summary', v)} rows={4} placeholder="A brief summary of your background, strengths, and goals..." />
    </div>
  )
}

function SkillsSection({ skills, onChange }) {
  const addSkill = () => onChange([...skills, ''])
  const removeSkill = (idx) => onChange(skills.filter((_, i) => i !== idx))
  const updateSkill = (idx, val) => onChange(skills.map((s, i) => i === idx ? val : s))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>Add your skills — they appear as tags on the resume.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', paddingLeft: '12px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px' }}>
            <input
              value={skill} onChange={e => updateSkill(i, e.target.value)} placeholder="Type skill..."
              style={{ fontSize: '13px', border: 'none', outline: 'none', background: 'transparent', width: '110px', color: '#f0ece6', fontFamily: 'inherit' }}
            />
            {skills.length > 1 && (
              <button onClick={() => removeSkill(i)} style={{ padding: '3px', color: 'rgba(255,255,255,0.2)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', borderRadius: '4px', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e8944a' }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)' }}>
                <svg style={{ width: '12px', height: '12px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        ))}
      </div>
      <AddButton onClick={addSkill} label="Add Skill" />
    </div>
  )
}

function EducationSection({ education, onChange }) {
  const addEntry = () => onChange([...education, { institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }])
  const removeEntry = (idx) => onChange(education.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(education.map((e, i) => i === idx ? { ...e, [field]: val } : e))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {education.map((edu, i) => (
        <div key={i} style={cardStyle}>
          {education.length > 1 && <DeleteButton onClick={() => removeEntry(i)} />}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Input label="Institution" value={edu.institution} onChange={v => updateEntry(i, 'institution', v)} placeholder="MIT" />
            <Input label="Degree" value={edu.degree} onChange={v => updateEntry(i, 'degree', v)} placeholder="Bachelor of Science" />
            <Input label="Field of Study" value={edu.field} onChange={v => updateEntry(i, 'field', v)} placeholder="Computer Science" />
            <Input label="GPA (optional)" value={edu.gpa} onChange={v => updateEntry(i, 'gpa', v)} placeholder="3.8/4.0" />
            <Input label="Start Date" value={edu.startDate} onChange={v => updateEntry(i, 'startDate', v)} placeholder="Sep 2018" />
            <Input label="End Date" value={edu.endDate} onChange={v => updateEntry(i, 'endDate', v)} placeholder="Jun 2022" />
          </div>
        </div>
      ))}
      <AddButton onClick={addEntry} label="Add Education" />
    </div>
  )
}

function ExperienceSection({ experience, onChange }) {
  const addEntry = () => onChange([...experience, { company: '', position: '', startDate: '', endDate: '', current: false, description: '' }])
  const removeEntry = (idx) => onChange(experience.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(experience.map((e, i) => i === idx ? { ...e, [field]: val } : e))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {experience.map((exp, i) => (
        <div key={i} style={cardStyle}>
          {experience.length > 1 && <DeleteButton onClick={() => removeEntry(i)} />}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Input label="Company" value={exp.company} onChange={v => updateEntry(i, 'company', v)} placeholder="Google" />
            <Input label="Position" value={exp.position} onChange={v => updateEntry(i, 'position', v)} placeholder="Senior Engineer" />
            <Input label="Start Date" value={exp.startDate} onChange={v => updateEntry(i, 'startDate', v)} placeholder="Jan 2022" />
            <div>
              <Input label="End Date" value={exp.current ? '' : exp.endDate} onChange={v => updateEntry(i, 'endDate', v)} placeholder="Present" />
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', cursor: 'pointer' }}>
                <input type="checkbox" checked={exp.current}
                  onChange={e => { updateEntry(i, 'current', e.target.checked); if (e.target.checked) updateEntry(i, 'endDate', 'Present') }}
                  style={{ width: '14px', height: '14px', accentColor: '#e8944a' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Currently here</span>
              </label>
            </div>
          </div>
          <Textarea label="Description" value={exp.description} onChange={v => updateEntry(i, 'description', v)} rows={3} placeholder="What did you do? What was the impact?" />
        </div>
      ))}
      <AddButton onClick={addEntry} label="Add Experience" />
    </div>
  )
}

function ProjectsSection({ projects, onChange }) {
  const addEntry = () => onChange([...projects, { name: '', description: '', technologies: '', link: '' }])
  const removeEntry = (idx) => onChange(projects.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(projects.map((e, i) => i === idx ? { ...e, [field]: val } : e))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {projects.map((proj, i) => (
        <div key={i} style={cardStyle}>
          {projects.length > 1 && <DeleteButton onClick={() => removeEntry(i)} />}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Input label="Project Name" value={proj.name} onChange={v => updateEntry(i, 'name', v)} placeholder="E-Commerce Platform" />
            <Input label="Technologies" value={proj.technologies} onChange={v => updateEntry(i, 'technologies', v)} placeholder="React, Node.js" />
            <div style={{ gridColumn: 'span 2' }}>
              <Input label="Link (optional)" value={proj.link} onChange={v => updateEntry(i, 'link', v)} placeholder="github.com/..." />
            </div>
          </div>
          <Textarea label="Description" value={proj.description} onChange={v => updateEntry(i, 'description', v)} rows={3} placeholder="What is this project? What's your role?" />
        </div>
      ))}
      <AddButton onClick={addEntry} label="Add Project" />
    </div>
  )
}

export default function ResumeForm({ data, updatePersonal, updateSection }) {
  const [activeTab, setActiveTab] = useState('personal')
  const stepIndex = sectionTabs.findIndex(t => t.id === activeTab)
  const progress = ((stepIndex + 1) / sectionTabs.length) * 100

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Progress Bar */}
      <div style={{ height: '2px', background: 'rgba(255,255,255,0.04)', flexShrink: 0 }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #c05621, #e8944a)', transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)', borderRadius: '0 1px 1px 0' }} />
      </div>
      {/* Step label */}
      <div style={{ padding: '8px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#17171a' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Step {stepIndex + 1} of {sectionTabs.length}
        </span>
        <span style={{ fontSize: '10px', fontWeight: 600, color: '#e8944a', letterSpacing: '0.02em' }}>
          {Math.round(progress)}%
        </span>
      </div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2px', padding: '8px 16px 0', overflowX: 'auto', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#17171a' }}>
        {sectionTabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '10px 14px', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap',
                cursor: 'pointer', transition: 'all 0.2s', borderRadius: '8px 8px 0 0',
                border: 'none', marginBottom: '-1px',
                borderBottom: isActive ? '2px solid #e8944a' : '2px solid transparent',
                background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                color: isActive ? '#e8944a' : 'rgba(255,255,255,0.3)',
              }}
            >
              <svg style={{ width: '13px', height: '13px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '18px' }}>
        {activeTab === 'personal' && <PersonalSection data={data.personal} updatePersonal={updatePersonal} />}
        {activeTab === 'skills' && <SkillsSection skills={data.skills} onChange={v => updateSection('skills', v)} />}
        {activeTab === 'education' && <EducationSection education={data.education} onChange={v => updateSection('education', v)} />}
        {activeTab === 'experience' && <ExperienceSection experience={data.experience} onChange={v => updateSection('experience', v)} />}
        {activeTab === 'projects' && <ProjectsSection projects={data.projects} onChange={v => updateSection('projects', v)} />}
      </div>
    </div>
  )
}
