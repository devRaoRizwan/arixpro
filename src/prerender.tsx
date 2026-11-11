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
    '/': 'ArixPro | Software Company',
    '/services': 'Services | ArixPro',
    '/work': 'Work and Systems | ArixPro',
    '/work/analytics-dashboard': 'Analytics Dashboard | ArixPro',
    '/work/ecommerce-admin': 'E-commerce Admin | ArixPro',
    '/work/crm-platform': 'CRM Platform | ArixPro',
    '/process': 'How we build | ArixPro',
    '/about': 'About ArixPro | Software Company',
    '/careers': 'Careers | ArixPro Software Studio',
    '/contact': 'Start a Project | ArixPro',
  }

  const pageTitle = pageTitles[currentUrl] || 'ArixPro | Software Company'

  const elements = new Set<HeadElement>([
    {
      type: 'meta',
      props: {
        name: 'description',
        content:
          'ArixPro builds web apps, APIs and SaaS products. Custom software, built clean, tested, and shipped.',
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
          'ArixPro builds web apps, APIs and SaaS products. Custom software, built clean, tested, and shipped.',
      },
    },
  ])

  return {
    html,
    links: new Set([
      '/',
      '/services',
      '/work',
      '/work/analytics-dashboard',
      '/work/ecommerce-admin',
      '/work/crm-platform',
      '/process',
      '/about',
      '/careers',
      '/contact',
    ]),
    head: {
      lang: 'en',
      title: pageTitle,
      elements,
    },
  }
}
