import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Work } from './pages/Work'
import { WorkDetail } from './pages/WorkDetail'
import { Process } from './pages/Process'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export function App() {
  return (
    <div className="min-h-screen bg-white text-[#4A4458] font-sans antialiased selection:bg-[#6336C5] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
