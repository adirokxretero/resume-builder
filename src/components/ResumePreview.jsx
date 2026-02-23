import ModernTemplate from './templates/ModernTemplate'
import ClassicTemplate from './templates/ClassicTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import BoldTemplate from './templates/BoldTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import CreativeTemplate from './templates/CreativeTemplate'

const templateMap = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
  bold: BoldTemplate,
  executive: ExecutiveTemplate,
  creative: CreativeTemplate,
}

export default function ResumePreview({ data, template, previewRef, scale = 0.5 }) {
  const Template = templateMap[template] || ModernTemplate

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100%' }}>
      <div
        ref={previewRef}
        style={{
          width: '210mm',
          minHeight: '297mm',
          background: '#ffffff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 50px rgba(0,0,0,0.1)',
          borderRadius: '3px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          flexShrink: 0,
        }}
      >
        <Template data={data} />
      </div>
    </div>
  )
}
