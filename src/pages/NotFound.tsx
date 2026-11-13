import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { useSeo } from '../lib/useSeo'

export function NotFound() {
  useSeo({
    title: 'Page not found | ArixPro',
    description: 'The page you requested could not be found. Explore ArixPro services, work, and contact options.',
    path: '/404',
    noindex: true,
  })

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#6336C5]/15 selection:text-[#6336C5]">
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-slate-50/60 p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#6336C5]/8 text-[#6336C5] ring-1 ring-[#6336C5]/15">
            <Compass className="size-7" />
          </div>
          <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6336C5]">
            404 error
          </p>
          <h1 className="mt-3 font-sans text-[34px] font-bold tracking-tight text-slate-950 sm:text-[42px]">
            This page could not be found.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            The route you entered is unavailable or may have moved. Head back to the studio homepage or get in touch about your project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary h-[46px] px-6 rounded-full">
              <ArrowLeft className="size-4" />
              <span>Back to home</span>
            </Link>
            <Link to="/contact" className="btn-secondary h-[46px] px-6 rounded-full">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
