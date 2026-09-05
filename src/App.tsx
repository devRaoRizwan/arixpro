import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { landingPages } from '@/data/landingPages'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { CoursesPage } from '@/pages/CoursesPage'
import { CourseDetailPage } from '@/pages/CourseDetailPage'
import { LearningPathsPage } from '@/pages/LearningPathsPage'
import { AboutPage } from '@/pages/AboutPage'
import { FaqPage } from '@/pages/FaqPage'
import { ContactPage } from '@/pages/ContactPage'
import { LandingPage } from '@/pages/LandingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/**
 * Routes are imported eagerly on purpose. Behind React.lazy the scroll-reveal
 * animations never receive their first IntersectionObserver callback, leaving
 * everything below a page hero invisible. Splitting also saved under 5 kB
 * gzipped here, since every route shares the same component and motion code.
 */
/** Shared by the browser entry and the build-time prerenderer, which each
 *  supply their own router. */
export function AppRoutes() {
  return (
      <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:slug" element={<CourseDetailPage />} />
            <Route path="learning-paths" element={<LearningPathsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Search landing pages live at the root so their URL is the keyword. */}
            {landingPages.map((page) => (
              <Route key={page.slug} path={page.slug} element={<LandingPage page={page} />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  )
}
