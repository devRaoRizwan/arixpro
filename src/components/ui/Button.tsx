import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out ' +
  'disabled:pointer-events-none disabled:opacity-50 motion-safe:active:translate-y-px'

const variants: Record<ButtonVariant, string> = {
  primary:
    'gloss-accent bg-accent-400 text-surface-950 font-semibold shadow-accent ' +
    'hover:bg-accent-300 hover:shadow-accent-lg motion-safe:hover:-translate-y-0.5',
  secondary:
    'border border-surface-600 bg-veil text-content-100 backdrop-blur-sm ' +
    'hover:border-surface-500 hover:bg-veil-strong hover:text-content-50 motion-safe:hover:-translate-y-0.5',
  ghost: 'text-content-300 hover:text-content-50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.95rem] sm:h-[3.25rem] sm:px-7 sm:text-base',
}

function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(base, variants[variant], variant === 'ghost' ? 'px-0' : sizes[size], className)
}

type ContentProps = {
  children: ReactNode
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
}

function ButtonContent({ children, leadingIcon: Leading, trailingIcon: Trailing }: ContentProps) {
  return (
    <>
      {Leading ? <Leading className="size-[1.05em] shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
      {Trailing ? (
        <Trailing
          className="size-[1.05em] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  )
}

type SharedProps = ContentProps & {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leadingIcon,
  trailingIcon,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </ButtonContent>
    </button>
  )
}

type ButtonLinkProps = SharedProps & {
  to: string
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leadingIcon,
  trailingIcon,
  to,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClasses(variant, size, className)}>
      <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </ButtonContent>
    </Link>
  )
}

type ButtonAnchorProps = SharedProps & {
  href: string
}

/** For links that leave the site; internal routes use ButtonLink. */
export function ButtonAnchor({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leadingIcon,
  trailingIcon,
  href,
}: ButtonAnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={buttonClasses(variant, size, className)}
    >
      <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </ButtonContent>
    </a>
  )
}
