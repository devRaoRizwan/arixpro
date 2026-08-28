import { useEffect } from 'react'
import { siteConfig } from './site'

type SeoOptions = {
  title: string
  description: string
  /** Path only, e.g. `/courses/python`. */
  path?: string
}

function setMeta(selector: string, attribute: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attribute, value)
}

/** Keeps the document head in sync with the active route. */
export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    const fullTitle =
      title === siteConfig.name
        ? `${siteConfig.name} | ${siteConfig.tagline}`
        : `${title} | ${siteConfig.name}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)

    if (path) {
      const url = `${siteConfig.url}${path}`
      setMeta('meta[property="og:url"]', 'content', url)
      const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (canonical) canonical.href = url
    }
  }, [title, description, path])
}
