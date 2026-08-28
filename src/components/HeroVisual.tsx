import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

type TokenKind = 'kw' | 'str' | 'fn' | 'self' | 'punc' | 'cm'

type Token = { t: string; c?: TokenKind }

const tokenClass: Record<TokenKind, string> = {
  kw: 'text-code-keyword',
  str: 'text-accent-300',
  fn: 'text-content-50',
  self: 'text-content-400',
  punc: 'text-content-500',
  cm: 'text-code-muted italic',
}

const codeLines: Token[][] = [
  [{ t: 'skills = ' }, { t: '[]', c: 'punc' }],
  [],
  [
    { t: 'def ', c: 'kw' },
    { t: 'learn', c: 'fn' },
    { t: '(skill):', c: 'punc' },
  ],
  [
    { t: '    skills.' },
    { t: 'append', c: 'fn' },
    { t: '(skill)', c: 'punc' },
  ],
  [
    { t: '    ' },
    { t: 'print', c: 'fn' },
    { t: '(', c: 'punc' },
    { t: '"Learned:"', c: 'str' },
    { t: ', skill)', c: 'punc' },
  ],
  [],
  [
    { t: 'for ', c: 'kw' },
    { t: 'skill ' },
    { t: 'in ', c: 'kw' },
    { t: '[', c: 'punc' },
    { t: '"Python"', c: 'str' },
    { t: ', ', c: 'punc' },
    { t: '"APIs"', c: 'str' },
    { t: ']:', c: 'punc' },
  ],
  [
    { t: '    ' },
    { t: 'learn', c: 'fn' },
    { t: '(skill)', c: 'punc' },
  ],
  [],
  [
    { t: 'print', c: 'fn' },
    { t: '(', c: 'punc' },
    { t: '"Ready to build:"', c: 'str' },
    { t: ', skills)', c: 'punc' },
  ],
]

function CodeLine({ tokens }: { tokens: Token[] }) {
  if (tokens.length === 0) return <span>&nbsp;</span>
  return (
    <>
      {tokens.map((token, index) => (
        <span key={index} className={token.c ? tokenClass[token.c] : 'text-content-200'}>
          {token.t}
        </span>
      ))}
    </>
  )
}

function Caret({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('animate-caret ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] bg-accent-400/80', className)}
    />
  )
}

export function HeroVisual() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.045, delayChildren: reduced ? 0 : 0.3 },
    },
  }

  const line = {
    hidden: { opacity: 0, x: reduced ? 0 : -6 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOutExpo } },
  }

  return (
    <div className="relative w-full lg:pb-44">
      {/* Ambient accent bloom behind the composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-16 bottom-0 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(42% 46% at 62% 34%, var(--glow-3) 0%, transparent 72%)',
        }}
      />

      {/* Editor */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.15 }}
        className="gloss relative overflow-hidden rounded-2xl border border-surface-700 bg-surface-900/90 shadow-float backdrop-blur-xl"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
        />

        <div className="flex items-center gap-3 border-b border-surface-800 bg-surface-850/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-surface-600" />
            <span className="size-2.5 rounded-full bg-surface-600" />
            <span className="size-2.5 rounded-full bg-surface-600" />
          </div>
          <div className="flex items-center gap-2 rounded-md border border-surface-700 bg-surface-800 px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            <span className="font-mono text-2xs text-content-300">learning_path.py</span>
          </div>
          <span className="ml-auto font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
            Python
          </span>
        </div>

        <motion.pre
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label="Example Python code taught at ArixPro"
          className="overflow-x-auto px-3 py-5 font-mono text-[0.7rem] leading-[1.75] sm:px-5 sm:text-[0.8rem] lg:text-[0.825rem]"
        >
          <code className="block">
            {codeLines.map((tokens, index) => (
              <motion.span key={index} variants={line} className="flex whitespace-pre">
                <span
                  aria-hidden="true"
                  className="mr-4 inline-block w-5 shrink-0 text-right text-code-muted select-none"
                >
                  {index + 1}
                </span>
                <span>
                  <CodeLine tokens={tokens} />
                  {index === codeLines.length - 1 ? <Caret /> : null}
                </span>
              </motion.span>
            ))}
          </code>
        </motion.pre>
      </motion.div>

      {/* Terminal, overlapping the editor on large screens */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo, delay: reduced ? 0.2 : 1.05 }}
        className="gloss relative mt-4 overflow-hidden rounded-xl border border-surface-700 bg-surface-950/95 shadow-card backdrop-blur-xl lg:absolute lg:-right-6 lg:-bottom-2 lg:mt-0 lg:w-[68%] xl:-right-10"
      >
        <div className="flex items-center gap-2 border-b border-surface-850 px-4 py-2.5">
          <span className="font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
            Terminal
          </span>
        </div>
        <div className="space-y-1.5 px-4 py-4 font-mono text-[0.7rem] leading-relaxed sm:text-[0.775rem]">
          <p className="flex gap-2">
            <span className="text-accent-400">$</span>
            <span className="text-content-300">python learning_path.py</span>
          </p>
          <p className="text-content-300">Learned: Python</p>
          <p className="text-content-300">Learned: APIs</p>
          <p className="text-content-100">
            Ready to build: <span className="text-accent-300">['Python', 'APIs']</span>
          </p>
          <p className="flex gap-2">
            <span className="text-accent-400">$</span>
            <Caret className="translate-y-[0.1em]" />
          </p>
        </div>
      </motion.div>
    </div>
  )
}
