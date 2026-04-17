import { useState } from 'react'

const INSTALL_CMD =
  'curl -fsSL https://raw.githubusercontent.com/getgaal/gaal/main/scripts/install.sh | sh'

export default function InstallBlock({
  variant = 'default',
}: {
  variant?: 'default' | 'hero'
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable; users can select the text */
    }
  }

  const wide = variant === 'hero'

  return (
    <div
      className={`term ${wide ? 'accented' : ''} relative inline-flex w-full items-stretch overflow-hidden ${
        wide ? 'max-w-[680px]' : 'max-w-[620px]'
      }`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 px-5 py-4 font-mono text-[0.8125rem] sm:text-sm">
        <span className="term-prompt select-none" aria-hidden="true">
          $
        </span>
        <span className="term-cmd min-w-0 flex-1 truncate text-white">
          {INSTALL_CMD}
        </span>
      </div>

      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied install command' : 'Copy install command'}
        className="relative flex shrink-0 items-center gap-2 border-l border-[var(--line)] bg-[var(--surface-2)] px-4 text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] transition hover:bg-[var(--card)] hover:text-[var(--accent)]"
      >
        {copied ? (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 12l5 5L20 6" />
            </svg>
            <span className="text-[var(--accent)]">Copied</span>
          </>
        ) : (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V6a2 2 0 012-2h9" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  )
}
