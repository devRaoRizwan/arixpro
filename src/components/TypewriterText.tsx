import { useState, useEffect } from 'react'

const WORDS = ['Web Apps', 'Apps', 'SaaS', 'APIs', 'Portals']

export function TypewriterText() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(WORDS[0].length)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(!prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const blinkTimer = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkTimer)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const currentWord = WORDS[wordIndex]

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2400)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }, 380)
      return () => clearTimeout(timeout)
    }

    const speed = isDeleting ? 65 : 130 + Math.random() * 25

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, wordIndex, prefersReducedMotion])

  const currentWord = WORDS[wordIndex]
  const displayed = prefersReducedMotion ? currentWord : currentWord.substring(0, subIndex)

  return (
    <span className="inline-flex items-baseline font-sans font-bold tracking-tight ml-2.5 sm:ml-3.5 whitespace-nowrap">
      <span className="text-[#6336C5]">{displayed}</span>
      {!prefersReducedMotion && (
        <span
          className={`inline-block w-[3px] h-[0.85em] bg-[#6336C5] ml-1.5 align-middle rounded-full transition-opacity duration-100 ${
            blink ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      )}
    </span>
  )
}

export default TypewriterText
