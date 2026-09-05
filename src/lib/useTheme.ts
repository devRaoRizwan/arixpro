import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_THEME, applyTheme, readStoredTheme, type Theme } from './theme'

/**
 * The inline script in index.html sets `data-theme` before first paint, so this
 * hook only mirrors that value and writes changes back.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === 'undefined' ? DEFAULT_THEME : readStoredTheme(),
  )

  useEffect(() => {
    if (document.documentElement.dataset.theme !== theme) applyTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
