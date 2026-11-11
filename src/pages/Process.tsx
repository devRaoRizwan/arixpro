import { Link } from 'react-router-dom'
import { ProcessList } from '../components/ProcessList'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export function Process() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 border-b border-[#E4DEF2] bg-[#F7F6FC]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[#6B6578]">
              Engineering Discipline
            </span>
            <h1 className="mt-3 font-sans text-[28px] sm:text-[36px] font-semibold text-[#241044] tracking-tight leading-tight">
              Our 4-Step Engineering Lifecycle
            </h1>
            <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#4A4458]">
              We work in transparent, predictable sprints. Every phase concludes with a concrete technical deliverable, tested source code, and zero ambiguous promises.
            </p>
          </div>
        </div>
      </section>

      {/* Process List Section: Section Padding Strictly 64px (py-16) */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <ProcessList />

          {/* Guarantees Strip */}
          <div className="mt-16 rounded-[14px] border border-[#E4DEF2] bg-[#F7F6FC] p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 text-[#241044]">
                  <ShieldCheck className="size-5" />
                  <h4 className="font-sans text-[16px] font-semibold text-[#241044]">
                    No Surprise Invoices
                  </h4>
                </div>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6578]">
                  Fixed scope agreements with clearly defined milestone gates before development begins.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#241044]">
                  <ShieldCheck className="size-5" />
                  <h4 className="font-sans text-[16px] font-semibold text-[#241044]">
                    Continuous Staging
                  </h4>
                </div>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6578]">
                  You test real working software on private staging environments at every sprint interval.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#241044]">
                  <ShieldCheck className="size-5" />
                  <h4 className="font-sans text-[16px] font-semibold text-[#241044]">
                    Full IP Ownership
                  </h4>
                </div>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6578]">
                  All repositories, deployment keys, and documentation are transferred 100% to your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              <span>Ready to start? Book an architecture call</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
