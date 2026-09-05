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

  /**
   * Public profile URLs only. These render in the footer and are mirrored into
   * the `sameAs` block of the structured data in index.html, which is how search
   * engines tie these accounts to the organisation, so keep the two in step.
   */
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/arixpro.pk/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594211541429' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@arixpro.pk' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/144802024/' },
    {
      label: 'WhatsApp Channel',
      href: 'https://www.whatsapp.com/channel/0029VbDcYUR3GJP0aYBn9Y1t',
    },
    { label: 'GitHub', href: 'https://github.com/arixpro' },
  ],

  location: 'Lahore and Online',
} as const

export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.dial}?text=${encodeURIComponent(
  siteConfig.whatsapp.prefilledMessage,
)}`

export const emailHref = `mailto:${siteConfig.email}`
