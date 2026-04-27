import { Link } from '@tanstack/react-router'

const REPO = 'https://github.com/getgaal/gaal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="page-wrap pb-10 pt-6">
      <div className="mb-10 grid gap-8 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)]">
              <span className="h-1 w-1 rounded-full bg-[var(--on-accent)]" />
            </span>
            <span className="text-base font-semibold text-[var(--fg)]">gaal</span>
          </div>
          <p className="max-w-md text-sm text-[var(--fg-muted)]">
            One YAML. Every coding agent. Every machine. The Governed Agent
            Access Layer. Open source, AGPL-3.0.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Product</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                hash="demo"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="how"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="coverage"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Supported agents
              </Link>
            </li>
            <li>
              <a
                href="https://docs.getgaal.com"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Project</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`${REPO}/issues`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Issues
              </a>
            </li>
            <li>
              <a
                href={`${REPO}/blob/main/LICENSE`}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                License · AGPL-3.0
              </a>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-ticker">
        <span className="ticker-dot">getgaal</span>
        <a
          href="mailto:hello@getgaal.com"
          className="center text-[var(--fg-dim)] hover:text-[var(--accent)]"
        >
          hello@getgaal.com
        </a>
        <span className="right">{year}</span>
      </div>
    </footer>
  )
}
