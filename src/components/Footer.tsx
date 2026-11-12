import { Link } from 'react-router-dom'
import { MapPin, Mail, ArrowUpRight, Linkedin, Instagram, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07030E] py-12 text-[#C9C2E0]/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-[#6336C5]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-10 border-b border-white/[0.06]">
          {/* Left Column: Brand & Google Maps Location Link */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src="/images/logo-pomegranate-transparent.png"
                alt="ArixPro"
                width={28}
                height={28}
                className="size-7 sm:size-8 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-sans text-[18px] font-bold text-white tracking-tight">
                Arix<span className="text-[#A78BFA]">Pro</span>
              </span>
            </Link>

            <p className="font-sans text-[14px] leading-relaxed text-[#C9C2E0]/70 max-w-sm">
              Custom web applications, backend APIs, and multi-tenant software built for production scale.
            </p>

            {/* Clickable Google Maps Location Link (No flag logo) */}
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kickstart+Phase+8+DHA+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                title="Open location in Google Maps"
                className="inline-flex items-start gap-2.5 text-[13px] text-[#C9C2E0]/85 hover:text-[#A78BFA] transition-colors group cursor-pointer"
              >
                <MapPin className="size-4 text-[#A78BFA] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">
                  Kickstart | Phase 8, DHA, Lahore, Pakistan
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[13px] text-[#C9C2E0]/80">
              <Mail className="size-4 text-[#A78BFA] shrink-0" />
              <a href="mailto:contact@arixpro.com" className="hover:text-white transition-colors">
                contact@arixpro.com
              </a>
            </div>
          </div>

          {/* Middle Column: Pages */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-6 font-sans text-[14px]">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/work" className="hover:text-white transition-colors">
                Work
              </Link>
              <Link to="/process" className="hover:text-white transition-colors">
                Process
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link
                to="/careers"
                className="hover:text-white text-[#A78BFA] font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Careers</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#C084FC]">
                  Hiring
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Social Links with Real Brand Icons */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
              <li>
                <a
                  href="https://www.linkedin.com/company/arixpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#C9C2E0]/80 hover:text-white transition-colors group"
                >
                  <span className="size-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A78BFA] group-hover:text-white group-hover:border-[#0A66C2]/60 group-hover:bg-[#0A66C2]/20 transition-all">
                    <Linkedin className="size-3.5" />
                  </span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-3 text-[#8378A6] group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arixpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#C9C2E0]/80 hover:text-white transition-colors group"
                >
                  <span className="size-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A78BFA] group-hover:text-white group-hover:border-[#E4405F]/60 group-hover:bg-[#E4405F]/20 transition-all">
                    <Instagram className="size-3.5" />
                  </span>
                  <span>Instagram</span>
                  <ArrowUpRight className="size-3 text-[#8378A6] group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arixpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#C9C2E0]/80 hover:text-white transition-colors group"
                >
                  <span className="size-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#A78BFA] group-hover:text-white group-hover:border-white/40 group-hover:bg-white/[0.1] transition-all">
                    <Github className="size-3.5" />
                  </span>
                  <span>GitHub</span>
                  <ArrowUpRight className="size-3 text-[#8378A6] group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="pt-6 font-mono text-[12px] text-[#8378A6]">
          <p>© {new Date().getFullYear()} ArixPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
