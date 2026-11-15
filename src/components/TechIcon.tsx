interface TechIconProps {
  name: string
  className?: string
}

export default function TechIcon({ name, className = '' }: TechIconProps) {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.91 2c-5.09 0-4.78 2.21-4.78 2.21l.01 2.29h4.87v.69H5.16S2 6.84 2 11.95c0 5.12 2.76 4.93 2.76 4.93h1.64v-2.31s-.09-2.76 2.72-2.76h4.7v-.73h.01V6.99s.42-4.99-4.88-4.99zm-2.6 1.48a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9zm2.78 18.52c5.09 0 4.78-2.21 4.78-2.21l-.01-2.29h-4.87v-.69h6.85s3.16.35 3.16-4.76c0-5.12-2.76-4.93-2.76-4.93h-1.64v2.31s.09 2.76-2.72 2.76h-4.7v.73h-.01v4.09s-.42 4.99 4.88 4.99zm2.6-1.48a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" />
        </svg>
      )
    case 'django':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.146 0h3.435v16.14c-.663.12-1.472.18-2.187.18-3.41 0-5.325-1.446-5.325-4.14 0-2.626 1.865-4.264 4.077-4.264.834 0 1.447.147 1.62.245V0zm0 10.334c-.22-.05-.59-.1-1.006-.1-1.374 0-2.33 1.006-2.33 2.528 0 1.496.883 2.38 2.28 2.38.393 0 .785-.05 1.056-.123V10.334zM16.12 6.848h3.435V24H16.12V6.848zM16.12 1.472h3.435v3.435H16.12V1.472zM4.441 7.977h3.435v11.838H4.44V7.977z" />
        </svg>
      )
    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm1.05 4.5l-5.7 8.25h4.2l-1.35 6.75 6.45-8.25h-4.35l1.5-6.75z" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 2h6m-3 0v6l5.5 11.5A2 2 0 0 1 15.7 22H8.3a2 2 0 0 1-1.8-2.5L12 8V2z" />
          <path d="M7 16h10" />
        </svg>
      )
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.7 2.01 6.94 5 8.65V18c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h1V8H7c-.55 0-1-.45-1-1s.45-1 1-1h3.13c2.08-1.25 4.79-1.25 6.87 0H20c.55 0 1 .45 1 1s-.45 1-1 1h-1v2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v2h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1v2.65c2.99-1.71 5-4.95 5-8.65 0-5.52-4.48-10-10-10zm-1 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      )
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M21.5 8.5L12 3.5 2.5 8.5 12 13.5l9.5-5zm-9.5 7L3.7 11 2.5 11.7l9.5 5 9.5-5-1.2-.7-8.3 4.5zm0 4.5l-8.3-4.5-1.2.7 9.5 5 9.5-5-1.2-.7-8.3 4.5z" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 1.5s-6 5.5-6 11.5c0 4.2 2.7 7.7 6 9.5 3.3-1.8 6-5.3 6-9.5 0-6-6-11.5-6-11.5zm.3 18.2c-.2.1-.4.1-.6 0-.1-1.3-.8-4.2-.8-6.7 0-2.8 1.1-5.6 1.4-6.3.3.7 1.4 3.5 1.4 6.3 0 2.5-.7 5.4-.8 6.7h-.6z" />
        </svg>
      )
    case 'celery':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2c-1.5 0-2.8 1-3.2 2.4C7.4 4.1 6 5.2 5.5 6.7 4 7.2 3 8.7 3 10.3c0 2.2 1.8 4 4 4h.5c.3 3.4 3.1 6.1 6.5 6.1s6.2-2.7 6.5-6.1h.5c2.2 0 4-1.8 4-4 0-1.6-1-3.1-2.5-3.6-.5-1.5-1.9-2.6-3.3-2.3C18 3 16.7 2 15.2 2H12zm0 2h3.2c.7 0 1.3.5 1.5 1.2.8-.2 1.7.3 2 1.1 1 .3 1.7 1.2 1.7 2.3 0 1.3-1.1 2.4-2.4 2.4H5.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.1.7-2 1.7-2.3.3-.8 1.2-1.3 2-1.1.2-.7.8-1.2 1.5-1.2H12z" />
        </svg>
      )
    case 'rabbitmq':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M9.5 2C8.1 2 7 3.1 7 4.5v3.6C5.8 8.6 5 9.9 5 11.5c0 1.9 1.3 3.5 3 4V19c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3v-3.5c1.7-.5 3-2.1 3-4 0-1.6-.8-2.9-2-3.4V4.5C19 3.1 17.9 2 16.5 2S14 3.1 14 4.5V7h-4V4.5C10 3.1 8.9 2 9.5 2zm0 2c.3 0 .5.2.5.5V8H8V4.5c0-.3.2-.5.5-.5zm7 0c.3 0 .5.2.5.5V8h-2V4.5c0-.3.2-.5.5-.5zM11 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      )
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M13.98 11.08h-2.1v-2.1h2.1v2.1zm-2.6 0H9.28v-2.1h2.1v2.1zm-2.6 0H6.68v-2.1h2.1v2.1zm5.2-2.6h-2.1v-2.1h2.1v2.1zm-2.6 0H9.28v-2.1h2.1v2.1zm5.2 2.6h-2.1v-2.1h2.1v2.1zm2.6 0h-2.1v-2.1h2.1v2.1zm-10.4-2.6H6.68v-2.1h2.1v2.1zm15.1 2.37c-.36-.26-1.17-.38-2.02-.27-.14-.73-.55-1.39-1.12-1.85l-.57-.45-.44.58c-.46.61-.7 1.35-.7 2.11 0 .28.04.55.1.82-.47.22-1.07.36-1.78.36H1.5c-.28 0-.5.22-.5.5 0 2.97 1.58 5.68 4.14 7.07 1.83 1 3.96 1.48 6.13 1.48 7.37 0 11.23-5.22 11.23-9.52 0-.28-.02-.55-.05-.83h.05c.5 0 .97-.12 1.38-.34.25-.13.3-.43.12-.66z" />
        </svg>
      )
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M6.8 15.6c-2.3 0-4.1-1.9-4.1-4.2 0-2.1 1.5-3.8 3.5-4.1.8-2.6 3.2-4.5 6-4.5 3.3 0 6 2.5 6.3 5.7 1.9.4 3.3 2.1 3.3 4.1 0 2.3-1.9 4.2-4.2 4.2h-1.3v-1.8h1.3c1.3 0 2.4-1.1 2.4-2.4 0-1.2-1-2.3-2.2-2.4l-.8-.1-.1-.8C16.3 6.6 14 4.5 11.2 4.5c-2.3 0-4.2 1.6-4.6 3.8l-.2.9-.9.1c-1.4.2-2.5 1.4-2.5 2.8 0 1.5 1.2 2.7 2.7 2.7h1.1v1.8H6.8zm6.5 1.8l-1.3 1.3 2.5 2.5 2.5-2.5-1.3-1.3-1.2 1.2v-5.8h-1.8v5.8l-1.2-1.2z" />
        </svg>
      )
    case 'github':
    case 'github actions':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M3 3h18v18H3V3zm8.2 8.4h-2.1v8h-1.9v-8H5.1V9.7h6.1v1.7zm7.5 3.7c0-1-.5-1.7-1.8-2.2l-1-.4c-.7-.3-1-.6-1-1 0-.4.4-.7 1-.7.7 0 1.4.3 1.9.8l1.1-1.3c-.8-.7-1.8-1-3-1-1.7 0-2.9.9-2.9 2.4 0 1 .6 1.7 1.8 2.2l1 .4c.8.3 1.1.7 1.1 1.1 0 .5-.4.8-1.2.8-.9 0-1.8-.4-2.3-1.1l-1.2 1.2c.8 1.1 2.1 1.6 3.5 1.6 2 0 3.2-1 3.2-2.6z" />
        </svg>
      )
    default:
      return null
  }
}
