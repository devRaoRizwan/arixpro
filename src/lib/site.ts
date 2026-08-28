/**
 * Single source of truth for every value that changes when ArixPro goes live.
 * Nothing else in the codebase hardcodes them.
 */

export const siteConfig = {
  name: 'ArixPro',
  tagline: 'Learn to Code. Build for Real',
  description:
    'Practical technology education for the next generation of Pakistani developers.',
  url: 'https://arixpro.com',

  email: 'support.arixpro@gmail.com',

  /** `dial` is full international format, digits only (no +, spaces or dashes). */
  whatsapp: {
    dial: '923120418701',
    display: '+92 312 0418701',
    prefilledMessage:
      "Assalam-o-Alaikum! I'd like to know more about the courses at ArixPro.",
  },

  /** PLACEHOLDER: replace hrefs with the real profiles. */
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],

  location: 'Lahore and Online',
} as const

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.dial}?text=${encodeURIComponent(
  siteConfig.whatsapp.prefilledMessage,
)}`

export const emailHref = `mailto:${siteConfig.email}`
