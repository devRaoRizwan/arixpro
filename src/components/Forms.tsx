import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
}

export function TextInput({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={inputId}
        className="font-sans text-[14px] font-medium text-[#241044]"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`h-[56px] w-full rounded-[8px] border bg-white px-4 font-sans text-[16px] text-[#241044] placeholder-[#929292] outline-none transition-colors ${
          error
            ? 'border-[#C13515] focus:border-[#C13515] focus:ring-1 focus:ring-[#C13515]'
            : 'border-[#E4DEF2] focus:border-[#241044] focus:ring-1 focus:ring-[#241044]'
        } ${className}`}
        {...props}
      />
      {error ? (
        <p className="font-sans text-[12px] text-[#C13515]">{error}</p>
      ) : helperText ? (
        <p className="font-sans text-[12px] text-[#6B6578]">{helperText}</p>
      ) : null}
    </div>
  )
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
}

export function TextArea({
  label,
  error,
  helperText,
  id,
  rows = 4,
  className = '',
  ...props
}: TextAreaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={inputId}
        className="font-sans text-[14px] font-medium text-[#241044]"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        rows={rows}
        className={`w-full rounded-[8px] border bg-white p-4 font-sans text-[16px] text-[#241044] placeholder-[#929292] outline-none transition-colors ${
          error
            ? 'border-[#C13515] focus:border-[#C13515] focus:ring-1 focus:ring-[#C13515]'
            : 'border-[#E4DEF2] focus:border-[#241044] focus:ring-1 focus:ring-[#241044]'
        } ${className}`}
        {...props}
      />
      {error ? (
        <p className="font-sans text-[12px] text-[#C13515]">{error}</p>
      ) : helperText ? (
        <p className="font-sans text-[12px] text-[#6B6578]">{helperText}</p>
      ) : null}
    </div>
  )
}
