import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

function Mark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-8 shrink-0 place-items-center rounded-full border border-accent-400/45 bg-surface-850',
        'shadow-inset-top',
        className,
      )}
    >
      <svg viewBox="0 0 32 32" className="size-[1.15rem]" fill="none">
        <path
          d="M6.6 24 16 7.6 25.4 24"
          stroke="currentColor"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent-400"
        />
        <path
          d="M11.9 18.4h8.2"
          stroke="currentColor"
          strokeWidth="2.7"
          strokeLinecap="round"
          className="text-accent-400/50"
        />
      </svg>
    </span>
  )
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="ArixPro home"
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg transition-opacity hover:opacity-90',
        className,
      )}
    >
      <Mark />
      <span className="font-display text-[1.0625rem] font-bold tracking-[-0.02em] text-content-50">
        ArixPro
      </span>
    </Link>
  )
}
