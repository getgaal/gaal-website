import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

const REPO = 'https://github.com/getgaal/gaal'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg-scrim)] backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-4 py-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <span
            aria-hidden
            className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]"
          >
            <span className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-60 blur-[6px]" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--on-accent)]" />
          </span>
          <span className="text-base font-semibold tracking-tight text-[var(--fg)]">
            gaal
          </span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-[var(--fg-muted)]">
            v1.0
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-6 sm:flex">
          <Link to="/" hash="demo" className="nav-link">
            Demo
          </Link>
          <Link to="/" hash="how" className="nav-link">
            How it works
          </Link>
          <Link to="/" hash="coverage" className="nav-link">
            Agents
          </Link>
          <a
            href="https://docs.getgaal.com"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Docs
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <ThemeToggle />
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="cta-pair"
          >
          <span className="btn-pill primary">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2l2.84 6.72L22 9.82l-5.5 4.86L18 22l-6-3.56L6 22l1.5-7.32L2 9.82l7.16-1.1L12 2z" />
            </svg>
            Star on GitHub
          </span>
            <span className="btn-chevron primary max-sm:!hidden">
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
                <path d="M9 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </header>
  )
}
