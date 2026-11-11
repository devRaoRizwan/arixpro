import { useState, useEffect } from 'react'

const WORDS = [
  'Web Apps',
  'Apps',
  'SaaS',
  'APIs',
  'Portals',
]

export function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(WORDS[0].length)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  // Cursor blink
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkTimer)
  }, [])

  // Auto-completer / typewriter engine
  useEffect(() => {
    const currentWord = WORDS[wordIndex]

    // Finished typing current word -> pause before erasing
    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1900)
      return () => clearTimeout(timeout)
    }

    // Finished erasing word -> switch to next word and pause briefly
    if (isDeleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }, 250)
      return () => clearTimeout(timeout)
    }

    // Typing cadence (70-95ms) vs Erasing cadence (35ms)
    const speed = isDeleting ? 38 : 75 + Math.random() * 20

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, wordIndex])

  const currentWord = WORDS[wordIndex]
  const displayed = currentWord.substring(0, subIndex)

  return (
    <span className="inline-flex items-baseline font-sans font-bold tracking-tight ml-2.5 sm:ml-3.5 whitespace-nowrap">
      <span className="bg-gradient-to-r from-[#C084FC] via-[#A78BFA] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(167,139,250,0.4)]">
        {displayed}
      </span>
      {/* Sleek Terminal / Auto-completer Cursor */}
      <span
        className={`inline-block w-[3px] h-[0.85em] bg-[#38BDF8] ml-1.5 align-middle rounded-full transition-opacity duration-100 ${
          blink ? 'opacity-100 shadow-[0_0_10px_#38BDF8]' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  )
}

export default TypewriterText
