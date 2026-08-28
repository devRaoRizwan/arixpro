import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

export type SelectOption = {
  value: string
  label: string
  hint?: string
}

type SelectProps = {
  /** Applied to the trigger so a `<label htmlFor>` and programmatic focus both work. */
  id: string
  /** Id of the visible field label, so the trigger announces "Course, Python Programming". */
  labelId?: string
  name?: string
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  invalid?: boolean
  describedBy?: string
  className?: string
}

const TYPEAHEAD_RESET_MS = 600

export function Select({
  id,
  labelId,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  invalid = false,
  describedBy,
  className,
}: SelectProps) {
  const listId = useId()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [dropUp, setDropUp] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const typeahead = useRef({ query: '', timer: 0 })

  const selectedIndex = options.findIndex((option) => option.value === value)
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined
  const optionId = (index: number) => `${listId}-option-${index}`

  const openList = useCallback(
    (startIndex?: number) => {
      const rect = triggerRef.current?.getBoundingClientRect()
      if (rect) setDropUp(window.innerHeight - rect.bottom < 280 && rect.top > 280)
      setActiveIndex(startIndex ?? (selectedIndex >= 0 ? selectedIndex : 0))
      setOpen(true)
    },
    [selectedIndex],
  )

  const closeList = useCallback(() => {
    setOpen(false)
    setActiveIndex(-1)
  }, [])

  const commit = useCallback(
    (index: number) => {
      const option = options[index]
      if (option) onChange(option.value)
      closeList()
      triggerRef.current?.focus()
    },
    [closeList, onChange, options],
  )

  /* Dismiss on an outside press or when focus leaves the field entirely. */
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) closeList()
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open, closeList])

  /* Keep the highlighted option inside the scroll viewport. */
  useEffect(() => {
    if (!open || activeIndex < 0) return
    listRef.current
      ?.querySelector(`#${CSS.escape(optionId(activeIndex))}`)
      ?.scrollIntoView({ block: 'nearest' })
  })

  const moveActive = (delta: number) => {
    setActiveIndex((current) => {
      const next = current + delta
      if (next < 0) return options.length - 1
      if (next >= options.length) return 0
      return next
    })
  }

  const handleTypeahead = (key: string) => {
    window.clearTimeout(typeahead.current.timer)
    typeahead.current.query += key.toLowerCase()
    typeahead.current.timer = window.setTimeout(() => {
      typeahead.current.query = ''
    }, TYPEAHEAD_RESET_MS)

    const match = options.findIndex((option) =>
      option.label.toLowerCase().startsWith(typeahead.current.query),
    )
    if (match < 0) return
    if (open) setActiveIndex(match)
    else onChange(options[match].value)
  }

  const onKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (open) moveActive(1)
        else openList()
        return
      case 'ArrowUp':
        event.preventDefault()
        if (open) moveActive(-1)
        else openList()
        return
      case 'Home':
        if (!open) return
        event.preventDefault()
        setActiveIndex(0)
        return
      case 'End':
        if (!open) return
        event.preventDefault()
        setActiveIndex(options.length - 1)
        return
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (open) commit(activeIndex)
        else openList()
        return
      case 'Escape':
        if (!open) return
        event.preventDefault()
        closeList()
        return
      case 'Tab':
        if (open) closeList()
        return
      default:
        if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
          handleTypeahead(event.key)
        }
    }
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {name ? <input type="hidden" name={name} value={value} /> : null}

      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open && activeIndex >= 0 ? optionId(activeIndex) : undefined}
        aria-labelledby={labelId ? `${labelId} ${id}` : undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={onKeyDown}
        className={cn(
          'flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left',
          'text-[0.95rem] transition-colors duration-200 focus:outline-none',
          invalid ? 'border-danger/60' : open ? 'border-accent-400/60' : 'border-surface-700',
          'bg-surface-900/70 hover:border-surface-600',
          selected ? 'text-content-100' : 'text-content-500',
        )}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'size-4 shrink-0 text-content-400 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            initial={{ opacity: 0, y: dropUp ? 6 : -6, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: dropUp ? 4 : -4, scale: 0.985 }}
            transition={{ duration: 0.16, ease: easeOutExpo }}
            className={cn(
              'absolute z-30 max-h-80 w-full overflow-y-auto overscroll-contain rounded-xl border',
              'border-surface-700 bg-surface-900 p-1.5 shadow-float backdrop-blur-xl',
              dropUp ? 'bottom-full mb-2' : 'top-full mt-2',
            )}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value
              const isActive = index === activeIndex
              return (
                <li
                  key={option.value}
                  id={optionId(index)}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => commit(index)}
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                    isActive ? 'bg-accent-400/12 text-content-50' : 'text-content-200',
                  )}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{option.label}</span>
                    {option.hint ? (
                      <span className="mt-0.5 block truncate text-2xs text-content-500">
                        {option.hint}
                      </span>
                    ) : null}
                  </span>
                  <Check
                    aria-hidden="true"
                    className={cn(
                      'size-4 shrink-0 text-accent-400 transition-opacity',
                      isSelected ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
