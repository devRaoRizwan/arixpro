interface SectionHeadingProps {
  number?: string
  label: string
  title?: string
  note?: string
}

export default function SectionHeading({ number, label, title, note }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {number && (
        <span className="section-heading__ghost-num" aria-hidden="true">
          {number}
        </span>
      )}
      <p className="section-label">
        {number && <span className="section-label__number">{number} · </span>}
        <span>{label}</span>
      </p>
      {title && <h2>{title}</h2>}
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}
