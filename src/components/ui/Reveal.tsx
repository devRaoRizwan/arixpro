import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo, inViewOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewOnce}
      transition={{ duration: reduced ? 0.2 : 0.65, ease: easeOutExpo, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
