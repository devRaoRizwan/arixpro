import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[#E4DEF2] bg-white pt-16 pb-24 md:pb-12 text-[#4A4458]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* 3-Column Links */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-12">
          {/* Column 1: Services */}
          <div>
            <h4 className="font-sans text-[14px] font-semibold uppercase tracking-wider text-[#241044]">
              Services
            </h4>
            <ul className="mt-4 space-y-3 font-sans text-[14px]">
              <li>
                <Link to="/services" className="hover:text-[#6336C5] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#6336C5] transition-colors">
                  Backend Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#6336C5] transition-colors">
                  APIs &amp; Microservices
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#6336C5] transition-colors">
                  SaaS Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering & Work */}
          <div>
            <h4 className="font-sans text-[14px] font-semibold uppercase tracking-wider text-[#241044]">
              Work &amp; Process
            </h4>
            <ul className="mt-4 space-y-3 font-sans text-[14px]">
              <li>
                <Link to="/work/sitescopia" className="hover:text-[#6336C5] transition-colors">
                  SiteScopia Analyzer
                </Link>
              </li>
              <li>
                <Link to="/work/jobharvester" className="hover:text-[#6336C5] transition-colors">
                  JobHarvester Board
                </Link>
              </li>
              <li>
                <Link to="/work/bomwatcher" className="hover:text-[#6336C5] transition-colors">
                  BOMWatcher Scanner
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#6336C5] transition-colors">
                  Engineering Lifecycle
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Contact */}
          <div>
            <h4 className="font-sans text-[14px] font-semibold uppercase tracking-wider text-[#241044]">
              Company
            </h4>
            <ul className="mt-4 space-y-3 font-sans text-[14px]">
              <li>
                <Link to="/about" className="hover:text-[#6336C5] transition-colors">
                  About Rao Rizwan
                </Link>
              </li>
              <li>
                <a
                  href="https://devraorizwan.online"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#6336C5] transition-colors inline-flex items-center gap-1"
                >
                  <span>devraorizwan.online</span>
                  <ArrowUpRight className="size-3 text-[#6B6578]" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#6336C5] transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp: +92 312 0418701</span>
                  <ArrowUpRight className="size-3 text-[#6B6578]" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#6336C5] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Band */}
        <div className="mt-14 border-t border-[#E4DEF2] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[14px] text-[#6B6578]">
          <div className="flex items-center gap-3">
            <img
              src="/images/arixpro-pomegranate.png"
              alt="ArixPro"
              width={24}
              height={24}
              className="size-6 object-contain"
            />
            <p>
              &copy; {year} <span className="font-semibold text-[#6336C5]">ArixPro</span> (arixpro.com). All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span>English (US)</span>
            <span className="size-1 rounded-full bg-[#E4DEF2]" />
            <a
              href="https://github.com/arixpro"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#315BDA] hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
