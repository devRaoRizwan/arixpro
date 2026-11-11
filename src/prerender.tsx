import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

type HeadElement = { type: string; props: Record<string, string> }

type PrerenderResult = {
  html: string
  links: Set<string>
  head: { lang: string; title: string; elements: Set<HeadElement> }
}

export async function prerender(context?: { url?: string }): Promise<PrerenderResult> {
  const currentUrl = context?.url || '/'

  const html = renderToString(
    <MemoryRouter initialEntries={[currentUrl]}>
      <App />
    </MemoryRouter>
  )

  const pageTitles: Record<string, string> = {
    '/': 'ArixPro | Software Development Company',
    '/services': 'Engineering Services | ArixPro',
    '/work': 'Production Work & Systems | ArixPro',
    '/work/sitescopia': 'SiteScopia Website Analyzer | ArixPro',
    '/work/jobharvester': 'JobHarvester Board | ArixPro',
    '/work/bomwatcher': 'BOMWatcher AI Scanner | ArixPro',
    '/process': 'Engineering Lifecycle & Delivery | ArixPro',
    '/about': 'About Rao Rizwan | ArixPro',
    '/contact': 'Start a Project | ArixPro',
  }

  const pageTitle = pageTitles[currentUrl] || 'ArixPro | Software Development Company'

  const elements = new Set<HeadElement>([
    {
      type: 'meta',
      props: {
        name: 'description',
        content:
          'ArixPro designs and engineers fast, secure backend systems, clean APIs, and modern web products for startups and global teams.',
      },
    },
    {
      type: 'meta',
      props: {
        property: 'og:title',
        content: pageTitle,
      },
    },
    {
      type: 'meta',
      props: {
        property: 'og:description',
        content:
          'ArixPro designs and engineers fast, secure backend systems, clean APIs, and modern web products for startups and global teams.',
      },
    },
  ])

  return {
    html,
    links: new Set([
      '/',
      '/services',
      '/work',
      '/work/sitescopia',
      '/work/jobharvester',
      '/work/bomwatcher',
      '/process',
      '/about',
      '/contact',
    ]),
    head: {
      lang: 'en',
      title: pageTitle,
      elements,
    },
  }
}
