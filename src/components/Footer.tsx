import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin, MessageSquare, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E4DEF2] bg-white pt-16 pb-16 text-[#4A4458]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left Column: Logo, Description & Direct Contact Block */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/arixpro-pomegranate.png"
                alt="ArixPro"
                width={36}
                height={36}
                className="size-9 object-contain"
              />
              <span className="font-sans text-[22px] font-bold tracking-tight text-[#6336C5]">
                ArixPro
              </span>
            </Link>

            <p className="font-sans text-[14px] leading-relaxed text-[#4A4458]">
              ArixPro builds web apps, APIs and SaaS.
              <br />
              Python, Django, FastAPI.
            </p>

            <div className="pt-2 space-y-2 font-sans text-[13px]">
              <div>
                <a
                  href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[#4A4458] hover:text-[#6336C5] transition-colors"
                >
                  <MessageSquare className="size-3.5 text-[#241044]" />
                  <span>WhatsApp +92 312 0418701</span>
                </a>
              </div>

              <div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[#4A4458] hover:text-[#6336C5] transition-colors"
                >
                  <Globe className="size-3.5 text-[#241044]" />
                  <span>arixpro.com</span>
                </Link>
              </div>

              <div>
                <a
                  href="https://github.com/devRaoRizwan"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[#4A4458] hover:text-[#6336C5] transition-colors"
                >
                  <Github className="size-3.5 text-[#241044]" />
                  <span>github.com/devRaoRizwan</span>
                  <ArrowUpRight className="size-3 text-[#6B6578]" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/raorixwan"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[#4A4458] hover:text-[#6336C5] transition-colors"
                >
                  <Linkedin className="size-3.5 text-[#241044]" />
                  <span>linkedin.com/in/raorixwan</span>
                  <ArrowUpRight className="size-3 text-[#6B6578]" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 Link Columns Filling The Rest Of The Grid */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <h4 className="font-sans text-[13px] font-semibold uppercase tracking-wider text-[#241044]">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
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

            {/* Column 2: Work & Process */}
            <div>
              <h4 className="font-sans text-[13px] font-semibold uppercase tracking-wider text-[#241044]">
                Work &amp; Process
              </h4>
              <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
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

            {/* Column 3: Company */}
            <div>
              <h4 className="font-sans text-[13px] font-semibold uppercase tracking-wider text-[#241044]">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
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
                  <Link to="/contact" className="hover:text-[#6336C5] transition-colors">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-14 border-t border-[#E4DEF2] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[13px] text-[#6B6578]">
          <p>&copy;2026 ArixPro</p>
          <div className="flex items-center gap-6">
            <span>Production Architecture</span>
            <span className="size-1 rounded-full bg-[#E4DEF2]" />
            <a
              href="https://github.com/devRaoRizwan"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#315BDA] hover:underline"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
