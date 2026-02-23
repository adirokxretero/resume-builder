import ModernTemplate from './templates/ModernTemplate'
import ClassicTemplate from './templates/ClassicTemplate'
import MinimalTemplate from './templates/MinimalTemplate'

const templateMap = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
}

export default function ResumePreview({ data, template, previewRef }) {
  const Template = templateMap[template] || ModernTemplate

  return (
    <div className="flex items-start justify-center p-4 bg-surface-200/50 min-h-full">
      <div
        ref={previewRef}
        className="bg-white shadow-xl origin-top"
        style={{
          width: '210mm',
          minHeight: '297mm',
          transform: 'scale(var(--preview-scale, 0.5))',
          transformOrigin: 'top center',
        }}
      >
        <Template data={data} />
      </div>
    </div>
  )
}
