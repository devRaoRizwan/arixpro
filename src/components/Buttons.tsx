import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  loading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium text-[16px] leading-none transition-colors duration-150 select-none min-h-[48px] min-w-[48px] px-6 rounded-[8px]'

  let variantClasses = ''
  if (variant === 'primary') {
    variantClasses = disabled
      ? 'bg-[#D9CFF5] text-white cursor-not-allowed'
      : 'bg-[#6336C5] text-white hover:bg-[#4F2AA0] active:bg-[#4F2AA0]'
  } else if (variant === 'secondary') {
    variantClasses = disabled
      ? 'bg-white text-[#929292] border border-[#EBEBEB] cursor-not-allowed'
      : 'bg-white text-[#241044] border border-[#E4DEF2] hover:bg-[#F7F6FC] hover:border-[#C1C1C1] active:bg-[#F7F6FC]'
  } else if (variant === 'tertiary') {
    variantClasses = disabled
      ? 'bg-transparent text-[#929292] cursor-not-allowed'
      : 'bg-transparent text-[#241044] hover:text-[#6336C5] active:text-[#4F2AA0]'
  }

  return (
    <button
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
