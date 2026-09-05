import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { ScrollToTop } from './ScrollToTop'

/**
 * Chrome-free shell for standalone pages such as `/links`.
 *
 * A link-in-bio page is a menu, so the site navbar and footer work against it:
 * the footer repeats the same destinations as the buttons, and the navbar
 * offers a second, competing way to leave. Analytics and scroll restoration
 * still belong here, which is why this is a layout rather than a loose route.
 */
export function BareLayout() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <ScrollToTop />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Analytics />
    </div>
  )
}
