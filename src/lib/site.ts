/**
 * Single source of truth for company configuration and metadata.
 */

export const siteConfig = {
  name: 'ArixPro',
  tagline: 'Engineering Custom Software & Resilient Cloud Systems',
  description:
    'ArixPro is a software solutions firm delivering custom web applications, mobile platforms, enterprise cloud systems, and scalable APIs for businesses worldwide.',
  url: 'https://arixpro.com',

  email: 'contact@arixpro.com',

  /** `dial` is full international format, digits only (no +, spaces or dashes). */
  whatsapp: {
    dial: '923120418701',
    display: '+92 312 0418701',
    prefilledMessage:
      "Hello! I'd like to discuss a custom software engineering project with ArixPro.",
  },

  /**
   * Public profile URLs for footer and structured data.
   */
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/arixpro-pk/' },
    { label: 'GitHub', href: 'https://github.com/arixpro' },
    { label: 'WhatsApp', href: 'https://wa.me/923120418701' },
  ],

  location: 'Lahore & Worldwide Remote',
} as const

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.dial}?text=${encodeURIComponent(
  siteConfig.whatsapp.prefilledMessage,
)}`

export const emailHref = `mailto:${siteConfig.email}`
