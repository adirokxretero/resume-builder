import { useLocalStorage } from './useLocalStorage'

const defaultData = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    summary: '',
    photo: null,
  },
  skills: [''],
  education: [
    { institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' },
  ],
  experience: [
    { company: '', position: '', startDate: '', endDate: '', current: false, description: '' },
  ],
  projects: [
    { name: '', description: '', technologies: '', link: '' },
  ],
}

export function useResumeData() {
  const [data, setData] = useLocalStorage('resumeforge-data', defaultData)
  const [template, setTemplate] = useLocalStorage('resumeforge-template', 'modern')

  const updateSection = (section, value) => {
    setData(prev => ({ ...prev, [section]: value }))
  }

  const updatePersonal = (field, value) => {
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const resetData = () => {
    setData(defaultData)
  }

  return { data, setData, template, setTemplate, updateSection, updatePersonal, resetData }
}
