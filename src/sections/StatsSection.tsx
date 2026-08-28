import { stats } from '@/data/stats'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function StatsSection() {
  return (
    <section aria-label="How ArixPro teaches" className="border-t border-surface-800">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-surface-800 bg-surface-800 shadow-raise sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.05 * index}>
              <div className="h-full bg-surface-900 p-6 sm:p-7">
                <span aria-hidden="true" className="block h-px w-8 bg-accent-400/60" />
                <p className="mt-5 text-lg leading-tight font-semibold text-content-50 sm:text-xl">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-content-400">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
