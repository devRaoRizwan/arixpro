import { Outlet } from 'react-router-dom'
/* Vite app, so this is the /react entry point. The /next one pulls in
   Next-only modules and will not build here. */
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  /* overflow-x-clip, not hidden: `clip` paired with a visible overflow-y stays
     visible, so the wrapper clips decorative bleed without becoming a scroll
     container or trapping the fixed navbar. */
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-surface-950"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1 pt-16 sm:pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  )
}
