import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'
import { siteConfig } from './lib/site'

type HeadElement = { type: string; props: Record<string, string> }

type PrerenderResult = {
  html: string
  links: Set<string>
  head: { lang: string; title: string; elements: Set<HeadElement> }
}

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'ArixPro | Custom software studio',
    description:
      'ArixPro builds custom web applications, SaaS platforms, internal tools, and API integrations for ambitious businesses.',
  },
  '/services': {
    title: 'Services | ArixPro',
    description:
      'Explore ArixPro services for custom web applications, APIs, SaaS platforms, internal tools, and e-commerce systems.',
  },
  '/work': {
    title: 'Work | ArixPro',
    description: 'See examples of custom software systems built for analytics, commerce, and customer operations.',
  },
  '/work/analytics-dashboard': {
    title: 'Analytics Dashboard Case Study | ArixPro',
    description: 'A custom analytics dashboard designed for real-time reporting and operational visibility.',
  },
  '/work/ecommerce-admin': {
    title: 'E-commerce Admin Case Study | ArixPro',
    description: 'A multi-store commerce administration system built for inventory, fulfillment, and order workflows.',
  },
  '/work/crm-platform': {
    title: 'CRM Platform Case Study | ArixPro',
    description: 'A CRM and pipeline system designed for account visibility, follow-ups, and customer operations.',
  },
  '/process': {
    title: 'Process | ArixPro',
    description: 'Learn how ArixPro scopes, designs, builds, and launches custom software projects with clear milestones.',
  },
  '/about': {
    title: 'About | ArixPro',
    description: 'Meet the ArixPro studio and learn how we approach custom software delivery for growing businesses.',
  },
  '/careers': {
    title: 'Careers | ArixPro',
    description: 'Explore current engineering opportunities at ArixPro and learn how we build custom software products.',
  },
  '/contact': {
    title: 'Start a Project | ArixPro',
    description: 'Tell ArixPro about your software project and request a scoping call or project proposal.',
  },
}

export async function prerender(context?: { url?: string }): Promise<PrerenderResult> {
  const currentUrl = context?.url || '/'

  const html = renderToString(
    <MemoryRouter initialEntries={[currentUrl]}>
      <App />
    </MemoryRouter>
  )

  const routeMeta = routeMetadata[currentUrl] || routeMetadata['/']
  const pageTitle = routeMeta.title

  const elements = new Set<HeadElement>([
    {
      type: 'meta',
      props: {
        name: 'description',
        content: routeMeta.description,
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
        content: routeMeta.description,
      },
    },
    {
      type: 'meta',
      props: {
        property: 'og:image',
        content: siteConfig.ogImage,
      },
    },
    {
      type: 'meta',
      props: {
        name: 'twitter:card',
        content: 'summary_large_image',
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
