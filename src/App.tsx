import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Process from './pages/Process'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

interface AppProps {
  url?: string
}

export default function App({ url }: AppProps) {
  const RouterComponent = url ? MemoryRouter : BrowserRouter
  const routerProps = url ? { initialEntries: [url] } : {}

  return (
    <RouterComponent {...routerProps}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </RouterComponent>
  )
}
