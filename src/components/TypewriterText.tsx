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
      }, 2400)
      return () => clearTimeout(timeout)
    }

    // Finished erasing word -> switch to next word and pause briefly
    if (isDeleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }, 380)
      return () => clearTimeout(timeout)
    }

    // Typing cadence (slower: ~125-150ms) vs Erasing cadence (~65ms)
    const speed = isDeleting ? 65 : 130 + Math.random() * 25

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, wordIndex])

  const currentWord = WORDS[wordIndex]
  const displayed = currentWord.substring(0, subIndex)

  return (
    <span className="inline-flex items-baseline font-sans font-bold tracking-tight ml-2.5 sm:ml-3.5 whitespace-nowrap">
      {/* Solely Royal Purple color for auto complete text */}
      <span className="text-[#7C3AED] dark:text-[#A78BFA] drop-shadow-[0_2px_16px_rgba(124,58,237,0.35)]">
        {displayed}
      </span>
      {/* Sleek Royal Purple Terminal Cursor */}
      <span
        className={`inline-block w-[3px] h-[0.85em] bg-[#7C3AED] dark:bg-[#A78BFA] ml-1.5 align-middle rounded-full transition-opacity duration-100 ${
          blink ? 'opacity-100 shadow-[0_0_12px_rgba(124,58,237,0.6)]' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  )
}

export default TypewriterText
