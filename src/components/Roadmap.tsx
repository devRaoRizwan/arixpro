import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { roadmap } from '@/data/roadmap'
import { easeOutExpo, inViewOnce } from '@/lib/motion'

export function Roadmap() {
  const trackRef = useRef<HTMLOListElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 78%', 'end 62%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })

  return (
    <ol ref={trackRef} className="relative pl-10 sm:pl-14">
      {/* Rail */}
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.9375rem] w-px bg-surface-800 sm:left-[1.4375rem]"
      >
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-accent-400 via-accent-500 to-accent-700"
          style={{ scaleY: reduced ? 1 : progress }}
        />
      </div>

      {roadmap.map((step, index) => (
        <motion.li
          key={step.index}
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.04 * (index % 4) }}
          className="group relative pb-10 last:pb-0 sm:pb-12"
        >
          {/* Node */}
          <span
            aria-hidden="true"
            className="absolute top-1 -left-10 grid size-8 place-items-center rounded-full border border-surface-700 bg-surface-900 font-mono text-2xs text-content-400 transition-[border-color,color,background-color] duration-300 group-hover:border-accent-400/50 group-hover:bg-surface-850 group-hover:text-accent-400 sm:-left-14 sm:size-12 sm:text-xs"
          >
            {step.index}
          </span>

          <h3 className="text-lg font-semibold sm:text-xl">{step.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-content-400 sm:text-[0.95rem]">
            {step.body}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {step.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-surface-800 bg-surface-900 px-2.5 py-1 font-mono text-2xs text-content-500"
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  )
}
