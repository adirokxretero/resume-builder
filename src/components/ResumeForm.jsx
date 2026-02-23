import { useState } from 'react'

const sectionTabs = [
  { id: 'personal', label: 'Personal', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { id: 'skills', label: 'Skills', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
  { id: 'education', label: 'Education', icon: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
  { id: 'experience', label: 'Experience', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' },
  { id: 'projects', label: 'Projects', icon: 'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z' },
]

function Input({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-surface-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow placeholder:text-surface-400"
      />
    </div>
  )
}

function Textarea({ label, value, onChange, placeholder = '', rows = 3 }) {
  return (
    <div>
      <label className="block text-sm font-medium text-surface-600 mb-1.5">{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2.5 bg-white border border-surface-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none placeholder:text-surface-400"
      />
    </div>
  )
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
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative group">
          <div className="w-20 h-20 rounded-full bg-surface-100 border-2 border-dashed border-surface-300 flex items-center justify-center overflow-hidden">
            {data.photo ? (
              <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-8 h-8 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            )}
          </div>
          <label className="absolute inset-0 cursor-pointer rounded-full">
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </label>
        </div>
        <div>
          <p className="text-sm font-medium text-surface-700">Profile Photo</p>
          <p className="text-xs text-surface-400 mt-0.5">Click to upload (optional)</p>
          {data.photo && (
            <button onClick={() => updatePersonal('photo', null)} className="text-xs text-red-500 hover:text-red-600 mt-1">
              Remove
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Full Name" value={data.name} onChange={v => updatePersonal('name', v)} placeholder="John Doe" />
        <Input label="Job Title" value={data.title} onChange={v => updatePersonal('title', v)} placeholder="Software Engineer" />
        <Input label="Email" value={data.email} onChange={v => updatePersonal('email', v)} type="email" placeholder="john@example.com" />
        <Input label="Phone" value={data.phone} onChange={v => updatePersonal('phone', v)} placeholder="+1 (555) 123-4567" />
        <Input label="Location" value={data.location} onChange={v => updatePersonal('location', v)} placeholder="San Francisco, CA" />
        <Input label="Website" value={data.website} onChange={v => updatePersonal('website', v)} placeholder="johndoe.com" />
        <div className="sm:col-span-2">
          <Input label="LinkedIn" value={data.linkedin} onChange={v => updatePersonal('linkedin', v)} placeholder="linkedin.com/in/johndoe" />
        </div>
      </div>
      <Textarea label="Professional Summary" value={data.summary} onChange={v => updatePersonal('summary', v)} rows={4} placeholder="A brief summary of your professional background, strengths, and career goals..." />
    </div>
  )
}

function SkillsSection({ skills, onChange }) {
  const addSkill = () => onChange([...skills, ''])
  const removeSkill = (idx) => onChange(skills.filter((_, i) => i !== idx))
  const updateSkill = (idx, val) => onChange(skills.map((s, i) => i === idx ? val : s))

  return (
    <div className="space-y-3 animate-fade-in">
      <p className="text-sm text-surface-500 mb-4">Add your technical and soft skills. These will be displayed as tags on your resume.</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-1 bg-white border border-surface-200 rounded-lg pl-3 pr-1 py-1">
            <input
              value={skill}
              onChange={e => updateSkill(i, e.target.value)}
              placeholder="Enter skill..."
              className="text-sm border-none outline-none bg-transparent w-28 placeholder:text-surface-400"
            />
            {skills.length > 1 && (
              <button onClick={() => removeSkill(i)} className="p-1 text-surface-400 hover:text-red-500 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={addSkill} className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium mt-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Skill
      </button>
    </div>
  )
}

function EducationSection({ education, onChange }) {
  const addEntry = () => onChange([...education, { institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }])
  const removeEntry = (idx) => onChange(education.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(education.map((e, i) => i === idx ? { ...e, [field]: val } : e))

  return (
    <div className="space-y-6 animate-fade-in">
      {education.map((edu, i) => (
        <div key={i} className="bg-white border border-surface-200 rounded-xl p-4 space-y-4 relative">
          {education.length > 1 && (
            <button onClick={() => removeEntry(i)} className="absolute top-3 right-3 p-1.5 text-surface-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Institution" value={edu.institution} onChange={v => updateEntry(i, 'institution', v)} placeholder="MIT" />
            <Input label="Degree" value={edu.degree} onChange={v => updateEntry(i, 'degree', v)} placeholder="Bachelor of Science" />
            <Input label="Field of Study" value={edu.field} onChange={v => updateEntry(i, 'field', v)} placeholder="Computer Science" />
            <Input label="GPA (optional)" value={edu.gpa} onChange={v => updateEntry(i, 'gpa', v)} placeholder="3.8/4.0" />
            <Input label="Start Date" value={edu.startDate} onChange={v => updateEntry(i, 'startDate', v)} placeholder="Sep 2018" />
            <Input label="End Date" value={edu.endDate} onChange={v => updateEntry(i, 'endDate', v)} placeholder="Jun 2022" />
          </div>
        </div>
      ))}
      <button onClick={addEntry} className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Education
      </button>
    </div>
  )
}

function ExperienceSection({ experience, onChange }) {
  const addEntry = () => onChange([...experience, { company: '', position: '', startDate: '', endDate: '', current: false, description: '' }])
  const removeEntry = (idx) => onChange(experience.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(experience.map((e, i) => i === idx ? { ...e, [field]: val } : e))

  return (
    <div className="space-y-6 animate-fade-in">
      {experience.map((exp, i) => (
        <div key={i} className="bg-white border border-surface-200 rounded-xl p-4 space-y-4 relative">
          {experience.length > 1 && (
            <button onClick={() => removeEntry(i)} className="absolute top-3 right-3 p-1.5 text-surface-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Company" value={exp.company} onChange={v => updateEntry(i, 'company', v)} placeholder="Google" />
            <Input label="Position" value={exp.position} onChange={v => updateEntry(i, 'position', v)} placeholder="Senior Engineer" />
            <Input label="Start Date" value={exp.startDate} onChange={v => updateEntry(i, 'startDate', v)} placeholder="Jan 2022" />
            <div>
              <Input label="End Date" value={exp.current ? '' : exp.endDate} onChange={v => updateEntry(i, 'endDate', v)} placeholder="Present" />
              <label className="flex items-center gap-2 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={e => { updateEntry(i, 'current', e.target.checked); if (e.target.checked) updateEntry(i, 'endDate', 'Present') }}
                  className="w-4 h-4 text-primary-600 rounded border-surface-300 focus:ring-primary-500"
                />
                <span className="text-xs text-surface-500">Currently working here</span>
              </label>
            </div>
          </div>
          <Textarea label="Description" value={exp.description} onChange={v => updateEntry(i, 'description', v)} rows={3} placeholder="Describe your responsibilities and achievements. Use bullet points (start lines with •)..." />
        </div>
      ))}
      <button onClick={addEntry} className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Experience
      </button>
    </div>
  )
}

function ProjectsSection({ projects, onChange }) {
  const addEntry = () => onChange([...projects, { name: '', description: '', technologies: '', link: '' }])
  const removeEntry = (idx) => onChange(projects.filter((_, i) => i !== idx))
  const updateEntry = (idx, field, val) => onChange(projects.map((e, i) => i === idx ? { ...e, [field]: val } : e))

  return (
    <div className="space-y-6 animate-fade-in">
      {projects.map((proj, i) => (
        <div key={i} className="bg-white border border-surface-200 rounded-xl p-4 space-y-4 relative">
          {projects.length > 1 && (
            <button onClick={() => removeEntry(i)} className="absolute top-3 right-3 p-1.5 text-surface-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Project Name" value={proj.name} onChange={v => updateEntry(i, 'name', v)} placeholder="E-Commerce Platform" />
            <Input label="Technologies" value={proj.technologies} onChange={v => updateEntry(i, 'technologies', v)} placeholder="React, Node.js, PostgreSQL" />
            <div className="sm:col-span-2">
              <Input label="Link (optional)" value={proj.link} onChange={v => updateEntry(i, 'link', v)} placeholder="https://github.com/..." />
            </div>
          </div>
          <Textarea label="Description" value={proj.description} onChange={v => updateEntry(i, 'description', v)} rows={3} placeholder="Describe the project, your role, and the impact..." />
        </div>
      ))}
      <button onClick={addEntry} className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Project
      </button>
    </div>
  )
}

export default function ResumeForm({ data, updatePersonal, updateSection }) {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex gap-1 px-1 pb-4 overflow-x-auto scrollbar-thin">
        {sectionTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-surface-500 hover:text-surface-700 hover:bg-surface-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin pr-1">
        {activeTab === 'personal' && <PersonalSection data={data.personal} updatePersonal={updatePersonal} />}
        {activeTab === 'skills' && <SkillsSection skills={data.skills} onChange={v => updateSection('skills', v)} />}
        {activeTab === 'education' && <EducationSection education={data.education} onChange={v => updateSection('education', v)} />}
        {activeTab === 'experience' && <ExperienceSection experience={data.experience} onChange={v => updateSection('experience', v)} />}
        {activeTab === 'projects' && <ProjectsSection projects={data.projects} onChange={v => updateSection('projects', v)} />}
      </div>
    </div>
  )
}
