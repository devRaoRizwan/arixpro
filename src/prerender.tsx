import { MotionConfig } from 'framer-motion'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { courses } from './data/courses'
import { siteConfig } from './lib/site'
import { resolveSeo, takeCapturedSeo } from './lib/useSeo'

type HeadElement = { type: string; props: Record<string, string> }

type PrerenderResult = {
  html: string
  links: Set<string>
  head: { lang: string; title: string; elements: Set<HeadElement> }
}

/**
 * Build-time only. `vite-prerender-plugin` calls this once per route and writes
 * the result into a real HTML file, so crawlers get the H1, the nav links and
 * the per-page metadata without executing any JavaScript.
 *
 * Head note: the plugin *replaces* <title> but *appends* everything in
 * `elements`, so every tag emitted here has been removed from `index.html` to
 * avoid shipping two of them (two canonicals would be worse than none).
 */
export async function prerender(data: { url: string }): Promise<PrerenderResult> {
  /* Clear anything a previous route left behind before this render records its own. */
  takeCapturedSeo()

  /* isStatic keeps framer-motion from starting animations we would only throw away. */
  const html = renderToString(
    <MotionConfig isStatic>
      <StaticRouter location={data.url}>
        <AppRoutes />
      </StaticRouter>
    </MotionConfig>,
  )

  const captured = takeCapturedSeo()
  const seo = captured
    ? resolveSeo(captured)
    : resolveSeo({ title: siteConfig.name, description: siteConfig.description })

  const elements = new Set<HeadElement>([
    { type: 'meta', props: { name: 'description', content: seo.description } },
    { type: 'meta', props: { property: 'og:title', content: seo.title } },
    { type: 'meta', props: { property: 'og:description', content: seo.description } },
    { type: 'meta', props: { name: 'twitter:title', content: seo.title } },
    { type: 'meta', props: { name: 'twitter:description', content: seo.description } },
  ])

  if (seo.url) {
    elements.add({ type: 'meta', props: { property: 'og:url', content: seo.url } })
    elements.add({ type: 'link', props: { rel: 'canonical', href: seo.url } })
  }

  /* Server-only, so it stays out of the browser bundle (see the plugin README). */
  const { parseLinks } = await import('vite-prerender-plugin/parse')

  return {
    html,
    /* Course pages are reachable from /courses, but listing them explicitly means
       a link regression cannot quietly drop them from the build. */
    links: new Set([...parseLinks(html), ...courses.map((course) => `/courses/${course.slug}`)]),
    head: { lang: 'en', title: seo.title, elements },
  }
}
