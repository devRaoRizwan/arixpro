import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { easeOutExpo } from '@/lib/motion'
import { siteConfig, whatsappHref } from '@/lib/site'

/** Floating WhatsApp entry point, the primary conversion channel in Pakistan. */
export function WhatsAppButton() {
  /* Read during render, so it must survive prerendering, where there is no
     window. The scroll listener corrects it on the client immediately. */
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 420,
  )

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Message ArixPro on WhatsApp at ${siteConfig.whatsapp.display}`}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.32, ease: easeOutExpo }}
          className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-accent-400/25 bg-surface-850/90 py-3 pr-4 pl-3 text-sm font-medium text-content-100 shadow-pop backdrop-blur-xl transition-colors hover:border-accent-400/50 hover:text-content-50 sm:right-6 sm:bottom-6"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-400 text-surface-950">
            <MessageCircle className="size-[1.05rem]" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Chat on WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
