import { renderToString } from 'react-dom/server'
import App from './App'
import { getCapturedSeo, resetCapturedSeo } from './hooks/useSeo'

export async function prerender({ url }: { url: string }) {
  resetCapturedSeo()
  const html = renderToString(<App url={url} />)

  const seo = getCapturedSeo()
  const title = seo?.title || 'ArixPro | Backend-first software house in Lahore'
  const description =
    seo?.description ||
    'ArixPro is a software house that builds Python backends, APIs and SaaS platforms for startups and growing businesses.'
  const canonical = seo?.canonical || `https://arixpro.com${url === '/' ? '' : url}`
  const ogImage = seo?.ogImage || 'https://arixpro.com/logo-app-icon.svg'

  const elements = new Set<Record<string, unknown>>([
    { type: 'meta', props: { name: 'description', content: description } },
    { type: 'meta', props: { property: 'og:title', content: title } },
    { type: 'meta', props: { property: 'og:description', content: description } },
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    { type: 'meta', props: { property: 'og:url', content: canonical } },
    { type: 'link', props: { rel: 'canonical', href: canonical } },
    { type: 'meta', props: { property: 'og:image', content: ogImage } },
  ])

  return {
    html,
    head: {
      lang: 'en',
      title,
      elements,
    },
  }
}
