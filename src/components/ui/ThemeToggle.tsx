import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const Icon = isDark ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
      className={cn(
        'grid size-10 place-items-center overflow-hidden rounded-lg border border-surface-700',
        'bg-veil text-content-300 transition-colors duration-200 hover:bg-veil-strong hover:text-content-50',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -35, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 35, scale: 0.8 }}
          transition={{ duration: 0.22, ease: easeOutExpo }}
          className="grid place-items-center"
        >
          <Icon className="size-[1.1rem]" aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
