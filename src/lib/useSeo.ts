import { useEffect } from 'react'
import { siteConfig } from './site'

export type SeoOptions = {
  /** Full <title> text. Pass the whole thing; the brand suffix is added here. */
  title: string
  description: string
  /** Path only, e.g. `/courses/python`. */
  path?: string
}

export type ResolvedSeo = {
  title: string
  description: string
  url?: string
}

/** Single source for the head values, so the prerender and the client agree. */
export function resolveSeo({ title, description, path }: SeoOptions): ResolvedSeo {
  return {
    title:
      title === siteConfig.name
        ? `${siteConfig.name} | ${siteConfig.tagline}`
        : `${title} | ${siteConfig.name}`,
    description,
    url: path ? `${siteConfig.url}${path}` : undefined,
  }
}

/**
 * `renderToString` never runs effects, so the build-time prerenderer cannot
 * learn a page's SEO from the hook below. Instead each render records it here
 * and the prerenderer reads it back. Browser builds never touch this.
 */
let capturedSeo: SeoOptions | null = null

export function takeCapturedSeo(): SeoOptions | null {
  const captured = capturedSeo
  capturedSeo = null
  return captured
}

/**
 * Creates the tag when missing. The per-route tags live in the prerendered HTML
 * rather than in `index.html`, so on a client-side navigation (and in dev, where
 * nothing is prerendered) there may be nothing to update yet.
 */
function setMeta(key: 'name' | 'property', keyValue: string, content: string) {
  const selector = `meta[${key}="${keyValue}"]`
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, keyValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Keeps the document head in sync with the active route. */
export function useSeo(options: SeoOptions) {
  /* Recorded during render because that is the only phase the prerenderer runs.
     Deliberately impure, and safe: the branch is unreachable in a browser, and
     the build renders one route at a time, synchronously. */
  // oxlint-disable-next-line react(globals)
  if (typeof document === 'undefined') capturedSeo = options

  const { title, description, path } = options

  useEffect(() => {
    const resolved = resolveSeo({ title, description, path })

    document.title = resolved.title
    setMeta('name', 'description', resolved.description)
    setMeta('property', 'og:title', resolved.title)
    setMeta('property', 'og:description', resolved.description)
    setMeta('name', 'twitter:title', resolved.title)
    setMeta('name', 'twitter:description', resolved.description)

    if (resolved.url) {
      setMeta('property', 'og:url', resolved.url)
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = resolved.url
    }
  }, [title, description, path])
}
