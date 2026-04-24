import { useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'
type Resolved = 'light' | 'dark'

const STORAGE_KEY = 'gaal-theme'

function systemPrefers(): Resolved {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

function readStored(): Theme {
  if (typeof window === 'undefined') return 'system'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  return raw === 'light' || raw === 'dark' || raw === 'system' ? raw : 'system'
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  const resolved: Resolved = theme === 'system' ? systemPrefers() : theme
  document.documentElement.setAttribute('data-theme', resolved)
  document.documentElement.dataset.themePref = theme
}

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(readStored())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => {
      if (readStored() === 'system') applyTheme('system')
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [mounted])

  const cycle = () => {
    setTheme((t) => (t === 'system' ? 'light' : t === 'light' ? 'dark' : 'system'))
  }

  const label =
    theme === 'system'
      ? 'Theme: match system'
      : theme === 'light'
        ? 'Theme: light'
        : 'Theme: dark'

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${label}. Click to cycle themes.`}
      title={label}
      className={[
        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--outline)] text-[var(--fg-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]',
        className ?? '',
      ].join(' ')}
    >
      {/* Render only after mount so SSR markup matches any theme. */}
      {!mounted ? (
        <Placeholder />
      ) : theme === 'system' ? (
        <SystemIcon />
      ) : theme === 'light' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}

function Placeholder() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    />
  )
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

function SystemIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}
