import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { FaqItem } from '@/data/faq'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

type FAQAccordionProps = {
  items: FaqItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-surface-800 border-y border-surface-800">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors sm:py-6"
              >
                <span
                  className={cn(
                    'text-[1.0625rem] font-medium transition-colors sm:text-lg',
                    isOpen ? 'text-content-50' : 'text-content-200 group-hover:text-content-50',
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'grid size-8 shrink-0 place-items-center rounded-full border transition-[transform,color,border-color,background-color] duration-300',
                    isOpen
                      ? 'rotate-45 border-accent-400/40 bg-accent-400/10 text-accent-400'
                      : 'border-surface-700 text-content-400 group-hover:border-surface-600 group-hover:text-content-100',
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: easeOutExpo }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pr-10 pb-6 text-[0.95rem] leading-relaxed text-content-400">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
