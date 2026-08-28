export type NavLinkItem = {
  label: string
  href: string
}

export const primaryNav: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Learning Paths', href: '/learning-paths' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

export const footerNav: { title: string; links: NavLinkItem[] }[] = [
  {
    title: 'Learn',
    links: [
      { label: 'Courses', href: '/courses' },
      { label: 'Learning Paths', href: '/learning-paths' },
      { label: '1-on-1 Mentorship', href: '/contact?mode=one-on-one' },
      { label: 'Live Batches', href: '/contact?mode=live-batch' },
    ],
  },
  {
    title: 'Institute',
    links: [
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]
