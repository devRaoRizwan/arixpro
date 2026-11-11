import { ContactForm } from '../components/ContactForm'
import { MessageSquare, Globe, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 sm:py-20 border-b border-[#E8E4F3] bg-[#FAF9FD]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6336C5]">
              Start an Engagement
            </span>
            <h1 className="mt-3 font-sans text-[36px] sm:text-[44px] font-bold text-[#160B28] tracking-tight leading-tight">
              Start Your Project with ArixPro
            </h1>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-[#504665]">
              Send your project specifications or chat directly with our senior engineering team. We review scopes and reply within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[14px] border border-[#E4DEF2] bg-white p-6 sm:p-10 shadow-sm">
                <h2 className="font-sans text-[20px] font-semibold text-[#241044] mb-6">
                  Project Inquiry Form
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Direct Channels & Commitments */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Primary Card */}
              <div className="rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-6 sm:p-8">
                <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-[#6336C5]">
                  Instant Engineering Response
                </span>
                <h3 className="mt-2 font-sans text-[20px] font-semibold text-[#241044]">
                  Chat Directly on WhatsApp
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6578]">
                  Skip email queues and discuss milestones, scope estimates, or system architecture directly with senior engineers.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="https://wa.me/923120418701?text=Hello%20ArixPro!%20I'd%20like%20to%20discuss%20a%20software%20project."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary w-full justify-center"
                  >
                    <MessageSquare className="size-4" />
                    <span>WhatsApp: +92 312 0418701</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E4DEF2] space-y-2.5 font-sans text-[13px] text-[#4A4458]">
                  <div className="flex items-center gap-2">
                    <Globe className="size-4 text-[#6336C5]" />
                    <span>Official Web: arixpro.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-[#6336C5]" />
                    <span>Typical Response: Under 1 hour</span>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="rounded-[14px] border border-[#E4DEF2] bg-white p-6">
                <h4 className="font-sans text-[15px] font-semibold text-[#241044]">
                  What Happens Next?
                </h4>
                <ul className="mt-4 space-y-3 font-sans text-[14px] text-[#4A4458]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>We evaluate your technical stack requirements and domain constraints.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>We provide a transparent milestone schedule with fixed deliverables.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#1E9E4A] shrink-0 mt-0.5" />
                    <span>We set up private staging environments and a dedicated Git repository.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
