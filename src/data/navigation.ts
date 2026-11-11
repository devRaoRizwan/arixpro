export type NavLinkItem = {
  label: string
  href: string
}

export const primaryNav: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

export const footerNav: { title: string; links: NavLinkItem[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Full Ecosystems', href: '/services#ecosystem' },
      { label: 'Custom Websites', href: '/services#web' },
      { label: 'Backends & APIs', href: '/services#backend' },
      { label: 'Mobile Apps', href: '/services#mobile' },
      { label: 'Workflow Automation', href: '/services#automation' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'SaaS Engineering', href: '/solutions#saas' },
      { label: 'Cloud Modernization', href: '/solutions#modernization' },
      { label: 'High-Throughput Systems', href: '/solutions#performance' },
      { label: 'Enterprise Workflows', href: '/solutions#enterprise' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About ArixPro', href: '/about' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Start a Project', href: '/contact' },
    ],
  },
]
