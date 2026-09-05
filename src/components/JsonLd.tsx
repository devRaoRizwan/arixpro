/**
 * Emits a schema.org block. Rendered in the body rather than the head, which
 * Google accepts, so it lands in the prerendered HTML and survives client-side
 * navigation without any head plumbing.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      /* Escapes `<` so a value containing "</script>" cannot close the tag. */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
