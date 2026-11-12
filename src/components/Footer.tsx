import { Link } from 'react-router-dom'
import { MapPin, Mail, ArrowUpRight, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#07030E] py-8 sm:py-9 text-[#C9C2E0]/80 relative overflow-hidden">
      {/* Ambient background glow (Dark mode only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#6336C5]/10 blur-[90px] pointer-events-none hidden dark:block" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-6 border-b border-slate-200/80 dark:border-white/[0.06]">
          {/* Left Column: Brand & Google Maps Location Link */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src="/images/logo-pomegranate-transparent.png"
                alt="ArixPro"
                width={26}
                height={26}
                className="size-7 sm:size-7.5 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-sans text-[17px] font-bold text-slate-900 dark:text-white tracking-tight">
                Arix<span className="text-[#7C3AED] dark:text-[#A78BFA]">Pro</span>
              </span>
            </Link>

            <p className="font-sans text-[13.5px] leading-relaxed text-slate-600 dark:text-[#C9C2E0]/70 max-w-sm">
              Custom web applications, backend APIs, and multi-tenant software built for production scale.
            </p>

            {/* Clickable Google Maps Location Link (No flag logo) */}
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kickstart+Phase+8+DHA+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                title="Open location in Google Maps"
                className="inline-flex items-start gap-2 text-[12.5px] text-slate-600 dark:text-[#C9C2E0]/85 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors group cursor-pointer"
              >
                <MapPin className="size-3.5 text-[#7C3AED] dark:text-[#A78BFA] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">
                  Kickstart | Phase 8, DHA, Lahore, Pakistan
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[12.5px] text-slate-600 dark:text-[#C9C2E0]/80">
              <Mail className="size-3.5 text-[#7C3AED] dark:text-[#A78BFA] shrink-0" />
              <a href="mailto:contact@arixpro.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                contact@arixpro.com
              </a>
            </div>
          </div>

          {/* Middle Column: Pages */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Company
            </h4>
            <div className="mt-3 grid grid-cols-2 gap-y-2 gap-x-6 font-sans text-[13.5px]">
              <Link to="/" className="text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/work" className="text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors">
                Work
              </Link>
              <Link to="/process" className="text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors">
                Process
              </Link>
              <Link to="/about" className="text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link
                to="/careers"
                className="text-[#7C3AED] dark:text-[#A78BFA] font-medium hover:text-[#6D28D9] dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Careers</span>
                <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-[#8B5CF6]/15 dark:bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#7C3AED] dark:text-[#C084FC]">
                  Hiring
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Social Links with Real Brand Icons */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <ul className="mt-3 space-y-2 font-sans text-[13.5px]">
              <li>
                <a
                  href="https://www.linkedin.com/company/arixpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors group"
                >
                  <span className="size-6.5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] flex items-center justify-center text-[#7C3AED] dark:text-[#A78BFA] group-hover:text-white group-hover:border-[#0A66C2]/60 group-hover:bg-[#0A66C2] transition-all">
                    <Linkedin className="size-3.5" />
                  </span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-3 text-slate-400 dark:text-[#8378A6] group-hover:text-slate-950 dark:group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arixpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-[#C9C2E0]/80 hover:text-slate-950 dark:hover:text-white transition-colors group"
                >
                  <span className="size-6.5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] flex items-center justify-center text-[#7C3AED] dark:text-[#A78BFA] group-hover:text-white group-hover:border-[#E4405F]/60 group-hover:bg-[#E4405F] transition-all">
                    <Instagram className="size-3.5" />
                  </span>
                  <span>Instagram</span>
                  <ArrowUpRight className="size-3 text-slate-400 dark:text-[#8378A6] group-hover:text-slate-950 dark:group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="pt-4 font-mono text-[11.5px] text-slate-500 dark:text-[#8378A6]">
          <p>© {new Date().getFullYear()} ArixPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
