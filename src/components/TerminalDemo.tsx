import { useEffect, useRef, useState } from 'react'

type Line =
  | { id: string; kind: 'cmd'; text: string }
  | { id: string; kind: 'out'; text: string }
  | { id: string; kind: 'ok'; text: string }
  | { id: string; kind: 'arrow'; text: string }
  | { id: string; kind: 'blank' }

type Act = {
  title: string
  machine: string
  caption: string
  lines: Line[]
}

const ACTS: Act[] = [
  {
    title: 'Act 1 · Import what you already have',
    machine: 'laptop',
    caption: 'gaal discovers skills and MCP across every agent.',
    lines: [
      { id: 'a1-01', kind: 'cmd', text: 'gaal init --import-all' },
      { id: 'a1-02', kind: 'out', text: 'Detected: Claude Code, Cursor, Codex' },
      { id: 'a1-03', kind: 'out', text: 'Found 12 skills across 3 agents.' },
      { id: 'a1-04', kind: 'out', text: 'Found 4 MCP servers.' },
      { id: 'a1-05', kind: 'out', text: 'Generated gaal.yaml.' },
      { id: 'a1-06', kind: 'blank' },
      { id: 'a1-07', kind: 'cmd', text: 'gaal status' },
      { id: 'a1-08', kind: 'ok', text: '✓ 12/12 skills installed' },
      { id: 'a1-09', kind: 'ok', text: '✓  4/4  MCP servers registered' },
      { id: 'a1-10', kind: 'ok', text: '✓ 0 drift' },
      { id: 'a1-11', kind: 'blank' },
      {
        id: 'a1-12',
        kind: 'cmd',
        text: 'git add gaal.yaml && git commit -m "one source of truth"',
      },
    ],
  },
  {
    title: 'Act 2 · Reproduce on a new machine',
    machine: 'desktop',
    caption: 'One install, one sync. Same setup, everywhere.',
    lines: [
      { id: 'a2-01', kind: 'cmd', text: 'curl -fsSL .../install.sh | sh' },
      { id: 'a2-02', kind: 'ok', text: '✓ gaal v1.0.0 installed' },
      { id: 'a2-03', kind: 'blank' },
      { id: 'a2-04', kind: 'cmd', text: 'git clone <dotfiles> && cd dotfiles' },
      { id: 'a2-05', kind: 'cmd', text: 'gaal sync' },
      { id: 'a2-06', kind: 'arrow', text: '→ Claude Code: 12 skills, 4 MCP servers' },
      { id: 'a2-07', kind: 'arrow', text: '→ Cursor:      12 skills, 4 MCP servers' },
      { id: 'a2-08', kind: 'arrow', text: '→ Codex:       12 skills, 4 MCP servers' },
      { id: 'a2-09', kind: 'ok', text: '✓ In sync.' },
    ],
  },
]

// Rough per-line timings (ms). Combined for a ~40s loop across both acts.
function lineDelay(kind: Line['kind']) {
  if (kind === 'cmd') return 720
  if (kind === 'blank') return 220
  return 420
}

export default function TerminalDemo() {
  const [started, setStarted] = useState(false)
  const [actIndex, setActIndex] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Only play when the demo enters the viewport
  useEffect(() => {
    if (!containerRef.current || started) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true)
          }
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [started])

  // Sequential line reveal across both acts
  useEffect(() => {
    if (!started || finished) return

    const act = ACTS[actIndex]
    if (!act) return

    if (lineIndex >= act.lines.length) {
      // Pause at end of act, then advance
      const hold = actIndex === ACTS.length - 1 ? 3200 : 1800
      const t = setTimeout(() => {
        if (actIndex < ACTS.length - 1) {
          setActIndex(actIndex + 1)
          setLineIndex(0)
        } else {
          setFinished(true)
        }
      }, hold)
      return () => clearTimeout(t)
    }

    const current = act.lines[lineIndex]
    const delay = current ? lineDelay(current.kind) : 300
    const t = setTimeout(() => setLineIndex((i) => i + 1), delay)
    return () => clearTimeout(t)
  }, [started, actIndex, lineIndex, finished])

  // Loop back after dwelling on the finished state
  useEffect(() => {
    if (!finished) return
    const t = setTimeout(() => {
      setActIndex(0)
      setLineIndex(0)
      setFinished(false)
    }, 4500)
    return () => clearTimeout(t)
  }, [finished])

  const act = ACTS[actIndex]
  if (!act) return null
  const visibleLines = act.lines.slice(0, lineIndex)
  const isTypingCurrent = lineIndex < act.lines.length
  const currentLine = isTypingCurrent ? act.lines[lineIndex] : null

  return (
    <div ref={containerRef} className="grid gap-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {ACTS.map((a, i) => {
          const isActive = i === actIndex
          const isPast = i < actIndex || (finished && i === ACTS.length - 1)
          return (
            <article
              key={a.machine}
              className={`term flex flex-col transition-opacity duration-500 ${
                isActive || isPast ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div className="term-head">
                <span className="term-dots" aria-hidden="true">
                  <span className="term-dot" />
                  <span className="term-dot" />
                  <span className="term-dot" />
                </span>
                <span className="ml-3 text-[var(--fg-muted)]">
                  {a.machine}
                </span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? 'bg-[var(--accent)]' : isPast ? 'bg-[var(--data-mint)]' : 'bg-[#3a3a3a]'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-[var(--fg-dim)]">
                    {isActive ? 'running' : isPast ? 'complete' : 'idle'}
                  </span>
                </span>
              </div>
              <div className="term-body min-h-[24rem]">
                <p className="mb-4 text-[0.7rem] uppercase tracking-wider text-[var(--fg-dim)]">
                  {a.title}
                </p>
                {isActive || isPast
                  ? (isActive ? visibleLines : a.lines).map((line) => (
                      <Line key={line.id} line={line} />
                    ))
                  : null}
                {isActive && currentLine && currentLine.kind === 'cmd' ? (
                  <span className="caret" aria-hidden="true" />
                ) : null}
                {!isActive && !isPast ? (
                  <p className="text-[var(--fg-dim)]">waiting…</p>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>

      <p className="text-sm text-[var(--fg-muted)]">
        <span className="text-[var(--accent)]">{act.machine}</span>
        {': '}
        {act.caption}
      </p>
    </div>
  )
}

function Line({ line }: { line: Line }) {
  if (line.kind === 'blank') return <div className="h-4" aria-hidden="true" />
  if (line.kind === 'cmd') {
    return (
      <div className="flex gap-3">
        <span className="term-prompt">$</span>
        <span className="term-cmd">{line.text}</span>
      </div>
    )
  }
  if (line.kind === 'ok') return <div className="term-ok">{line.text}</div>
  if (line.kind === 'arrow') return <div className="term-arrow">{line.text}</div>
  return <div className="term-out">{line.text}</div>
}
