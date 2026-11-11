import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function PillBar() {
  const navigate = useNavigate()
  const [need, setNeed] = useState('Web Applications')
  const [stack, setStack] = useState('Python / FastAPI')
  const [timeline, setTimeline] = useState('2-4 weeks')

  const handleSearch = () => {
    navigate(
      `/contact?need=${encodeURIComponent(need)}&stack=${encodeURIComponent(
        stack
      )}&timeline=${encodeURIComponent(timeline)}`
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop & Tablet Pill (>= 640px) */}
      <div className="hidden sm:flex h-[66px] items-center rounded-full border border-[#E4DEF2] bg-white p-2 shadow-dropdown">
        {/* Segment 1: What do you need */}
        <div className="flex-1 px-6">
          <label
            htmlFor="pill-need"
            className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[#6B6578]"
          >
            What do you need
          </label>
          <select
            id="pill-need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="w-full bg-transparent font-sans text-[15px] font-medium text-[#241044] outline-none cursor-pointer"
          >
            <option value="Web Applications">Web Applications</option>
            <option value="Backend Engineering">Backend Engineering</option>
            <option value="APIs & Microservices">APIs &amp; Microservices</option>
            <option value="SaaS Products">SaaS Products</option>
            <option value="Full Ecosystem">Full Ecosystem</option>
          </select>
        </div>

        <div className="h-8 w-px bg-[#E4DEF2]" />

        {/* Segment 2: Stack */}
        <div className="flex-1 px-6">
          <label
            htmlFor="pill-stack"
            className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[#6B6578]"
          >
            Stack
          </label>
          <select
            id="pill-stack"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="w-full bg-transparent font-sans text-[15px] font-medium text-[#241044] outline-none cursor-pointer"
          >
            <option value="Python / FastAPI">Python / FastAPI</option>
            <option value="Django / PostgreSQL">Django / PostgreSQL</option>
            <option value="React 18 / Vite">React 18 / Vite</option>
            <option value="Celery / Redis">Celery / Redis</option>
            <option value="Full Stack Python + React">Full Stack Python + React</option>
          </select>
        </div>

        <div className="h-8 w-px bg-[#E4DEF2]" />

        {/* Segment 3: Timeline */}
        <div className="flex-1 px-6">
          <label
            htmlFor="pill-timeline"
            className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[#6B6578]"
          >
            Timeline
          </label>
          <select
            id="pill-timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-transparent font-sans text-[15px] font-medium text-[#241044] outline-none cursor-pointer"
          >
            <option value="2-4 weeks">2–4 weeks</option>
            <option value="1-2 months">1–2 months</option>
            <option value="3+ months">3+ months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* Purple Orb Button at End */}
        <button
          type="button"
          onClick={handleSearch}
          aria-label="Start project with selected options"
          className="size-[50px] shrink-0 rounded-full bg-[#6336C5] flex items-center justify-center text-white hover:bg-[#4F2AA0] transition-colors cursor-pointer"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>

      {/* Mobile Vertical Stack (< 640px) */}
      <div className="flex flex-col gap-3 rounded-[14px] border border-[#E4DEF2] bg-white p-4 shadow-dropdown sm:hidden">
        <div>
          <label
            htmlFor="mobile-pill-need"
            className="block font-mono text-[11px] font-medium uppercase text-[#6B6578]"
          >
            What do you need
          </label>
          <select
            id="mobile-pill-need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="mt-1 w-full rounded-[6px] border border-[#E4DEF2] p-2 font-sans text-[15px] text-[#241044]"
          >
            <option value="Web Applications">Web Applications</option>
            <option value="Backend Engineering">Backend Engineering</option>
            <option value="APIs & Microservices">APIs &amp; Microservices</option>
            <option value="SaaS Products">SaaS Products</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="mobile-pill-stack"
            className="block font-mono text-[11px] font-medium uppercase text-[#6B6578]"
          >
            Stack
          </label>
          <select
            id="mobile-pill-stack"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="mt-1 w-full rounded-[6px] border border-[#E4DEF2] p-2 font-sans text-[15px] text-[#241044]"
          >
            <option value="Python / FastAPI">Python / FastAPI</option>
            <option value="Django / PostgreSQL">Django / PostgreSQL</option>
            <option value="React 18 / Vite">React 18 / Vite</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="btn-primary w-full justify-center mt-2"
        >
          <span>Start a project</span>
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}

export default PillBar
