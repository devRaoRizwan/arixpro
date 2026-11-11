import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Check saved preference from localStorage
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (saved === 'light') {
      setTheme('light')
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
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
      className="relative size-8 sm:size-9 rounded-full flex items-center justify-center border border-white/[0.1] bg-white/[0.04] text-[#C9C2E0] hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-all cursor-pointer group"
      aria-label={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} shift`}
      title={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} shift`}
    >
      {theme === 'dark' ? (
        <Sun className="size-4 text-[#FBBF24] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
      ) : (
        <Moon className="size-4 text-[#8B5CF6] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  )
}

export default ThemeToggle
