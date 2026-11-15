import { renderToString } from 'react-dom/server'
import App from './App'
import { getCapturedSeo, resetCapturedSeo } from './hooks/useSeo'

export async function prerender({ url }: { url: string }) {
  resetCapturedSeo()
  const html = renderToString(<App url={url} />)

  const seo = getCapturedSeo()
  const title = seo?.title || 'ArixPro | Backend-first software studio in Lahore'
  const description =
    seo?.description ||
    'ArixPro is a custom software studio that builds Python backends, APIs and SaaS platforms for startups and growing businesses.'
  const canonical = seo?.canonical || `https://arixpro.com${url === '/' ? '' : url}`
  const ogImage = seo?.ogImage || 'https://arixpro.com/og-image.png'

  const elements = new Set<Record<string, unknown>>([
    { type: 'meta', props: { name: 'description', content: description } },
    { type: 'meta', props: { property: 'og:title', content: title } },
    { type: 'meta', props: { property: 'og:description', content: description } },
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    { type: 'meta', props: { property: 'og:url', content: canonical } },
    { type: 'meta', props: { property: 'og:site_name', content: 'ArixPro' } },
    { type: 'meta', props: { property: 'og:locale', content: 'en_US' } },
    { type: 'meta', props: { property: 'og:image', content: ogImage } },
    { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
    { type: 'meta', props: { property: 'og:image:height', content: '630' } },
    { type: 'meta', props: { property: 'og:image:alt', content: `${title} — ArixPro` } },
    { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
    { type: 'meta', props: { name: 'twitter:title', content: title } },
    { type: 'meta', props: { name: 'twitter:description', content: description } },
    { type: 'meta', props: { name: 'twitter:image', content: ogImage } },
    { type: 'link', props: { rel: 'canonical', href: canonical } },
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
