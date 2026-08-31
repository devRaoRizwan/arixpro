export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'arixpro-theme'

/** Theme used on a first visit. Switch to 'dark' to make the site dark-first. */
export const DEFAULT_THEME: Theme = 'dark'

const THEME_COLOR: Record<Theme, string> = {
  light: '#f7f8fa',
  dark: '#06080a',
}

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

export function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (isTheme(stored)) return stored
  } catch {
    /* Storage can be unavailable in private browsing; fall through. */
  }
  return DEFAULT_THEME
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.head
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme])

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* Preference simply will not persist. */
  }
}
