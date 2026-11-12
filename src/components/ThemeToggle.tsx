import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    // Check URL param or saved preference from localStorage (Default is light)
    const params = new URLSearchParams(window.location.search)
    const paramTheme = params.get('theme') as 'dark' | 'light' | null
    const saved = paramTheme || (localStorage.getItem('theme') as 'dark' | 'light' | null)

    if (saved === 'dark') {
      setTheme('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      if (paramTheme) localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      if (paramTheme) localStorage.setItem('theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)

    if (nextTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative size-8 sm:size-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/[0.1] bg-slate-100/80 dark:bg-white/[0.04] text-slate-700 dark:text-[#C9C2E0] hover:text-[#7C3AED] dark:hover:text-white hover:border-[#7C3AED]/50 dark:hover:border-[#8B5CF6]/50 hover:bg-[#7C3AED]/10 dark:hover:bg-[#8B5CF6]/10 transition-all cursor-pointer group"
      aria-label={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} shift`}
      title={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} shift`}
    >
      {theme === 'dark' ? (
        <Sun className="size-4 text-[#FBBF24] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
      ) : (
        <Moon className="size-4 text-[#7C3AED] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  )
}

export default ThemeToggle
