export type CodeTokenKind = 'plain' | 'keyword' | 'string' | 'comment' | 'decorator'

export type CodeToken = {
  text: string
  kind: CodeTokenKind
}

const PATTERN =
  /(#[^\n]*|\/\/[^\n]*)|(@[A-Za-z_][\w.]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(class|def|return|import|from|async|await|export|const|let|var|function|if|elif|else|for|while|in|not|and|or|None|True|False|null|true|false|new|type|interface|self|yield|with|as|try|except|raise)\b/g

/** Minimal multi-language tokeniser for the small snippets shown in the UI. */
export function highlight(line: string): CodeToken[] {
  const tokens: CodeToken[] = []
  let cursor = 0

  PATTERN.lastIndex = 0
  let match = PATTERN.exec(line)

  while (match) {
    if (match.index > cursor) {
      tokens.push({ text: line.slice(cursor, match.index), kind: 'plain' })
    }

    const kind: CodeTokenKind = match[1]
      ? 'comment'
      : match[2]
        ? 'decorator'
        : match[3]
          ? 'string'
          : 'keyword'

    tokens.push({ text: match[0], kind })
    cursor = match.index + match[0].length
    match = PATTERN.exec(line)
  }

  if (cursor < line.length) {
    tokens.push({ text: line.slice(cursor), kind: 'plain' })
  }

  return tokens
}
