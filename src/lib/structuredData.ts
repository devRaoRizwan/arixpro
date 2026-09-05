import type { Course } from '@/data/courses'
import type { FaqItem } from '@/data/faq'
import { siteConfig } from './site'

/**
 * Schema.org payloads for the rich results this site is eligible for.
 *
 * Everything here is derived from real page content on purpose. Google issues
 * manual actions for structured data that describes things the page does not
 * show, so there is deliberately no `aggregateRating`, no review count and no
 * `offers` price until those exist as real, visible facts.
 */

const provider = {
  '@type': 'EducationalOrganization',
  name: siteConfig.name,
  url: `${siteConfig.url}/`,
}

/** Course rich result. `hasCourseInstance` is what makes it eligible. */
export function courseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${course.title} Course`,
    description: `${course.tagline} ${course.description}`,
    url: `${siteConfig.url}/courses/${course.slug}`,
    provider,
    educationalLevel: course.level,
    teaches: course.topics,
    inLanguage: ['en', 'ur'],
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        /* Both formats really are offered, and both are taught live. */
        courseMode: ['online', 'onsite'],
        courseWorkload: course.duration,
        location: {
          '@type': 'Place',
          name: `${siteConfig.name}, ${siteConfig.location}`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lahore',
            addressCountry: 'PK',
          },
        },
      },
    ],
  }
}

/** Drives the expandable question list some results show under the listing. */
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

/** Replaces the bare URL in results with a readable Home > Courses > … trail. */
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

/** Lists the four tracks on /courses so they can surface as a set. */
export function courseListSchema(courses: Course[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: `${course.title} Course`,
        description: course.tagline,
        url: `${siteConfig.url}/courses/${course.slug}`,
        provider,
      },
    })),
  }
}
