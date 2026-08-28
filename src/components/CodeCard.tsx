import { highlight, type CodeTokenKind } from '@/lib/highlight'
import { cn } from '@/lib/utils'

const kindClass: Record<CodeTokenKind, string> = {
  plain: 'text-content-200',
  keyword: 'text-code-keyword',
  string: 'text-accent-300',
  comment: 'text-code-muted italic',
  decorator: 'text-accent-400/80',
}

type CodeCardProps = {
  filename: string
  lines: string[]
  label?: string
  className?: string
}

export function CodeCard({ filename, lines, label, className }: CodeCardProps) {
  return (
    <div
      className={cn(
        'gloss relative overflow-hidden rounded-2xl border border-surface-700 bg-surface-900/80 shadow-card backdrop-blur-xl',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
      />

      <div className="flex items-center gap-3 border-b border-surface-800 bg-surface-850/50 px-4 py-3">
        <span className="size-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
        <span className="truncate font-mono text-2xs text-content-300">{filename}</span>
        {label ? (
          <span className="ml-auto font-mono text-2xs tracking-[0.16em] text-content-500 uppercase">
            {label}
          </span>
        ) : null}
      </div>

      <pre className="overflow-x-auto px-3 py-4 font-mono text-[0.7rem] leading-[1.8] sm:px-5 sm:py-5 sm:text-[0.775rem]">
        <code className="block">
          {lines.map((line, index) => (
            <span key={index} className="flex whitespace-pre">
              <span
                aria-hidden="true"
                className="mr-4 inline-block w-4 shrink-0 text-right text-code-muted select-none"
              >
                {index + 1}
              </span>
              <span>
                {line.length === 0 ? (
                  <>&nbsp;</>
                ) : (
                  highlight(line).map((token, tokenIndex) => (
                    <span key={tokenIndex} className={kindClass[token.kind]}>
                      {token.text}
                    </span>
                  ))
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
