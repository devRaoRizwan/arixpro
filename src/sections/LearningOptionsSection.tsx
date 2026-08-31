import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { learningOptions, type BatchTier, type LearningOption } from '@/data/learningOptions'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

/** The meter always draws this many slots so 5 seats visibly reads as half of 10. */
const SEAT_METER_MAX = 10

export function LearningOptionsSection() {
  return (
    <Section id="learning-options" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Ways to learn"
          title="Two Ways to Study at ArixPro"
          description="Same curriculum, same instructors. Pick the format that matches how you learn and what your schedule allows."
        />

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          {learningOptions.map((option, index) => (
            <Reveal key={option.id} delay={0.08 * index} className="h-full">
              <OptionCard option={option} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function OptionCard({ option }: { option: LearningOption }) {
  const Icon = option.icon
  const tiers = option.tiers
  const [activeTierId, setActiveTierId] = useState(
    () => tiers?.find((tier) => tier.recommended)?.id ?? tiers?.[0]?.id,
  )
  const activeTier = tiers?.find((tier) => tier.id === activeTierId)

  /* The card's CTA carries the picked batch through to the enrolment form, so a
     student never has to answer the same question twice. */
  const ctaHref = activeTier ? `${option.ctaHref}&batch=${activeTier.id}` : option.ctaHref

  return (
    <article
      className={cn(
        'gloss relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface-900 p-7 sm:p-9',
        'transition-[border-color,box-shadow] duration-300',
        option.featured
          ? 'border-accent-400/35 shadow-card'
          : 'border-surface-800 shadow-raise hover:border-surface-600 hover:shadow-card',
      )}
    >
      {option.featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-20 size-72 rounded-full bg-accent-400/[0.09] blur-3xl"
        />
      ) : null}

      <span
        className={cn(
          'relative grid size-11 place-items-center rounded-xl border',
          option.featured
            ? 'border-accent-400/30 bg-accent-400/10 text-accent-400'
            : 'border-surface-700 bg-surface-850 text-content-300',
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>

      <h3 className="relative mt-6 text-2xl font-bold sm:text-[1.75rem]">{option.title}</h3>
      <p className="relative mt-3 text-[0.95rem] leading-relaxed text-content-400">{option.body}</p>

      {tiers && activeTier ? (
        <BatchPicker tiers={tiers} activeTier={activeTier} onSelect={setActiveTierId} />
      ) : null}

      {option.capacity ? (
        <div className="relative mt-7 rounded-xl border border-accent-400/25 bg-accent-400/[0.05] p-4">
          <SeatMeter seats={option.capacity.seats} selected />
          <p className="mt-3 flex items-baseline justify-between gap-2">
            <span className="text-sm font-semibold text-content-50">{option.capacity.label}</span>
            <span className="font-mono text-2xs whitespace-nowrap text-accent-400">
              {option.capacity.seats} seat
            </span>
          </p>
          <p className="mt-2 text-2xs leading-relaxed text-content-500">{option.capacity.note}</p>
        </div>
      ) : null}

      {option.bestFor ? (
        <>
          <p className="relative mt-7 font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
            Best for
          </p>
          <ul className="relative mt-4 flex flex-1 flex-col gap-3">
            {option.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-content-300">
                <Check
                  className={cn(
                    'mt-0.5 size-4 shrink-0',
                    option.featured ? 'text-accent-400' : 'text-content-500',
                  )}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="relative mt-9">
        <ButtonLink
          to={ctaHref}
          variant={option.featured ? 'primary' : 'secondary'}
          size="lg"
          className="w-full sm:w-auto"
        >
          {option.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  )
}

type BatchPickerProps = {
  tiers: BatchTier[]
  activeTier: BatchTier
  onSelect: (id: BatchTier['id']) => void
}

function BatchPicker({ tiers, activeTier, onSelect }: BatchPickerProps) {
  const reduced = useReducedMotion()

  return (
    <div className="relative mt-7 flex flex-1 flex-col">
      <p className="font-mono text-2xs tracking-[0.2em] text-content-500 uppercase">
        Choose your batch size
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {tiers.map((tier) => {
          const selected = tier.id === activeTier.id
          return (
            <button
              key={tier.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(tier.id)}
              className={cn(
                /* Buttons centre their content by default, which misaligns the
                   two meters as soon as the grid stretches them to equal height. */
                'group/tier flex cursor-pointer flex-col items-start justify-start',
                'rounded-xl border p-4 text-left',
                'transition-[border-color,background-color] duration-200',
                selected
                  ? 'border-accent-400/45 bg-accent-400/[0.07]'
                  : 'border-surface-750 bg-surface-850/50 hover:border-surface-600',
              )}
            >
              <SeatMeter seats={tier.seats} selected={selected} />
              <span className="mt-3 flex w-full items-baseline justify-between gap-2">
                <span
                  className={cn(
                    'text-sm font-semibold',
                    selected ? 'text-content-50' : 'text-content-200',
                  )}
                >
                  {tier.name}
                </span>
                <span
                  className={cn(
                    'font-mono text-2xs whitespace-nowrap',
                    selected ? 'text-accent-400' : 'text-content-500',
                  )}
                >
                  {tier.seats} seats
                </span>
              </span>
              <span
                className={cn(
                  'mt-2.5 rounded-full border px-2 py-0.5 font-mono text-2xs tracking-[0.14em] uppercase',
                  selected
                    ? 'border-accent-400/25 text-accent-400'
                    : 'border-surface-700 text-content-500',
                )}
              >
                {tier.badge}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: reduced ? 0.15 : 0.32, ease: easeOutExpo }}
          >
            <p className="text-sm font-medium text-content-100">{activeTier.tagline}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {activeTier.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-content-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-surface-800 pt-4 text-2xs leading-relaxed text-content-500">
              {activeTier.note}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/** Ten slots, `seats` of them filled: the size difference reads before the label does. */
function SeatMeter({ seats, selected }: { seats: number; selected: boolean }) {
  return (
    /* w-full: as a flex item under `items-start` the bars would otherwise
       collapse, since they size purely from flex-1. */
    <span aria-hidden="true" className="flex w-full items-center gap-1">
      {Array.from({ length: SEAT_METER_MAX }, (_, index) => (
        <span
          key={index}
          className={cn(
            'h-1.5 flex-1 rounded-full transition-colors duration-200',
            index < seats
              ? selected
                ? 'bg-accent-400'
                : 'bg-content-500'
              : 'bg-surface-750 group-hover/tier:bg-surface-700',
          )}
        />
      ))}
    </span>
  )
}
