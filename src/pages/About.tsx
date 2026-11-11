import { ArrowUpRight, Github, Linkedin, Globe, CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Engineering Leadership
            </span>
            <h1 className="mt-3 font-sans text-[36px] sm:text-[44px] font-bold text-[#160B28] tracking-tight leading-tight">
              About ArixPro &amp; Lead Engineer Rao Rizwan
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#504665]">
              ArixPro is founded and led by Rao Rizwan, a senior backend engineer specializing in high-throughput Python systems, distributed databases, and clean web architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Experience (No Stock Photo as specified) */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Bio Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-sans text-[22px] font-semibold text-[#241044]">
                  Production Background
                </h2>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#4A4458]">
                  With over 2 years of dedicated Python backend engineering in production environments, Rao Rizwan architectures systems that handle <strong>100,000+ daily API requests</strong> without accumulated technical debt.
                </p>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#4A4458]">
                  Rather than outsourcing to unverified junior contractors or generating fragile code boilerplate, every project undertaken by ArixPro is supervised, structured, and reviewed by senior engineers who understand transactional integrity, caching strategies, and defensive API boundaries.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-[18px] font-semibold text-[#241044]">
                  Core Engineering Principles
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-[14px] text-[#4A4458]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Deterministic Systems:</strong> We write typed code with Python 3.12, Pydantic v2, and TypeScript. No runtime guess-work.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Defensive Data Schemas:</strong> Relational integrity in PostgreSQL, indexed foreign keys, and atomic transactions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Usability First:</strong> Products that solve business problems in 5 seconds without unnecessary UI gimmicks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>
                      <strong>Complete Transparency:</strong> Accurate project statuses, real staging environments, and zero fabricated testimonials.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Verification Links */}
              <div>
                <h3 className="font-sans text-[18px] font-semibold text-[#241044]">
                  Verified Engineer Links
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://devraorizwan.online"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-[8px] border border-[#E4DEF2] bg-[#F7F6FC] px-4 py-2.5 font-sans text-[14px] font-medium text-[#241044] hover:bg-white hover:border-[#6336C5] transition-colors"
                  >
                    <Globe className="size-4 text-[#6336C5]" />
                    <span>Personal Portfolio: devraorizwan.online</span>
                    <ArrowUpRight className="size-3.5 text-[#6B6578]" />
                  </a>

                  <a
                    href="https://github.com/arixpro"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-[8px] border border-[#E4DEF2] bg-[#F7F6FC] px-4 py-2.5 font-sans text-[14px] font-medium text-[#241044] hover:bg-white hover:border-[#6336C5] transition-colors"
                  >
                    <Github className="size-4 text-[#241044]" />
                    <span>GitHub: github.com/arixpro</span>
                    <ArrowUpRight className="size-3.5 text-[#6B6578]" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/arixpro-pk/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-[8px] border border-[#E4DEF2] bg-[#F7F6FC] px-4 py-2.5 font-sans text-[14px] font-medium text-[#241044] hover:bg-white hover:border-[#6336C5] transition-colors"
                  >
                    <Linkedin className="size-4 text-[#315BDA]" />
                    <span>LinkedIn: ArixPro</span>
                    <ArrowUpRight className="size-3.5 text-[#6B6578]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Facts Box */}
            <div className="lg:col-span-5">
              <div className="rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-6 sm:p-8 shadow-sm">
                <span className="font-mono text-[12px] font-medium uppercase tracking-wider text-[#6336C5]">
                  Fast Facts
                </span>
                <h3 className="mt-2 font-sans text-[20px] font-semibold text-[#241044]">
                  Engineering Profile
                </h3>

                <div className="mt-6 space-y-4 font-sans text-[14px]">
                  <div className="border-b border-[#E4DEF2] pb-3">
                    <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                      Name &amp; Role
                    </span>
                    <span className="font-semibold text-[#241044] text-[15px]">
                      Rao Rizwan — Principal Backend Engineer &amp; Founder
                    </span>
                  </div>

                  <div className="border-b border-[#E4DEF2] pb-3">
                    <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                      Experience Focus
                    </span>
                    <span className="text-[#4A4458]">
                      2+ Years in Production Backend Engineering (Python / Django / FastAPI)
                    </span>
                  </div>

                  <div className="border-b border-[#E4DEF2] pb-3">
                    <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                      Production Throughput
                    </span>
                    <span className="font-mono text-[#241044] font-medium">
                      100,000+ API Requests / Day
                    </span>
                  </div>

                  <div className="border-b border-[#E4DEF2] pb-3">
                    <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                      Verified Technologies
                    </span>
                    <span className="text-[#4A4458]">
                      Python 3.12, Django 5, FastAPI, Celery, PostgreSQL 16, Redis, React 18
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase text-[#6B6578]">
                      Company Registration
                    </span>
                    <span className="text-[#4A4458]">
                      ArixPro (arixpro.com) • International Client Deliveries
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E4DEF2]">
                  <a
                    href="https://wa.me/923120418701?text=Hello%20Rao%20Rizwan!%20I'd%20like%20to%20discuss%20a%20software%20project."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary w-full justify-center"
                  >
                    Contact Rao on WhatsApp (+92 312 0418701)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
