interface SectionHeadingProps {
  label: string
  title?: string
  note?: string
  number?: string
}

export default function SectionHeading({ label, title, note }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">
        <span>{label}</span>
      </p>
      {title && <h2>{title}</h2>}
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}
