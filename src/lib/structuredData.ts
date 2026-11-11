import type { FaqItem } from '@/data/faq'
import { siteConfig } from './site'

export const companyProvider = {
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: `${siteConfig.url}/`,
}

/** Drives the expandable question list in search results. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export type Crumb = { name: string; path: string }

/** Breadcrumb structured data. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  }
}
