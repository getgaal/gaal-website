import { createFileRoute } from '@tanstack/react-router'
import InstallBlock from '../components/InstallBlock'
import NewsletterForm from '../components/NewsletterForm'
import TerminalDemo from '../components/TerminalDemo'

export const Route = createFileRoute('/')({ component: HomePage })

const REPO = 'https://github.com/getgaal/gaal'

const AGENTS: Array<string> = [
  'Claude Code',
  'Cursor',
  'Codex',
  'GitHub Copilot',
  'Amp',
  'Cline',
  'Roo',
  'Continue',
  'Gemini CLI',
  'Goose',
  'Kilo',
  'Kiro CLI',
  'OpenCode',
  'OpenHands',
  'Trae',
  'Warp',
  'Windsurf',
]

function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <TerminalDemoSection />
      <HowItWorks />
      <ImportSection />
      <InstallSection />
      <Coverage />
      <TrustRow />
      <FinalCta />
    </main>
  )
}

/* ======================================================================
   1. HERO
   ====================================================================== */

function Hero() {
  return (
    <section className="section relative overflow-hidden pt-24 sm:pt-32">
      <HeroBackdrop />

      <div className="page-wrap relative">
        {/* Soft lime halo, centered on the eyebrow's accent dot. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[157px] -top-[150px] h-[320px] w-[320px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(222,255,154,0.18), transparent 62%)',
            filter: 'blur(4px)',
          }}
        />

        <p className="eyebrow mb-6 rise-in">
          Governed Agent Access Layer · v1.0
        </p>

        <h1
          className="display-hero mb-7 max-w-4xl rise-in"
          style={{ animationDelay: '80ms' }}
        >
          One YAML. Every coding agent. Every{' '}
          <span className="accent-word">machine</span>.
        </h1>

        <p
          className="lead mb-10 max-w-2xl rise-in"
          style={{ animationDelay: '160ms' }}
        >
          Stop copy-pasting <code>CLAUDE.md</code> into{' '}
           every project, re-registering MCP servers in every
          agent's JSON, and hoping your laptop and your desktop stay in sync.{' '}
          <span className="text-white">gaal</span> keeps your skills, MCPs, and
          repos in one file, then applies them to Claude Code, Cursor, Codex,
          and 14 other agents with one command.
        </p>

        <div
          className="mb-5 flex flex-col items-start gap-4 rise-in"
          style={{ animationDelay: '240ms' }}
        >
          <InstallBlock variant="hero" />

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto sm:justify-start">
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
              <span className="btn-chevron primary">
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

            <a href="#newsletter" className="btn-pill ghost">
              Get launch updates
            </a>
          </div>
        </div>

        <p
          className="mt-6 text-center text-xs text-[var(--fg-dim)] rise-in sm:text-left"
          style={{ animationDelay: '320ms' }}
        >
          macOS · Linux · Windows · or{' '}
          <code className="text-[var(--fg-muted)]">
            go install github.com/getgaal/gaal@latest
          </code>
        </p>
      </div>
    </section>
  )
}

function HeroBackdrop() {
  return (
    <>
      {/* Subtle constellation dots */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-[520px] w-[520px] opacity-60"
        viewBox="0 0 500 500"
      >
        <defs>
          <radialGradient id="star-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DEFF9A" stopOpacity="1" />
            <stop offset="100%" stopColor="#DEFF9A" stopOpacity="0" />
          </radialGradient>
        </defs>
        {SCATTERED_STARS.map((s) => (
          <circle
            key={`${s.x}-${s.y}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill={s.accent ? 'url(#star-grad)' : '#ffffff'}
            opacity={s.o}
          />
        ))}
        {/* Faint connector lines */}
        {STAR_LINES.map((l) => (
          <line
            key={`${l.x1}-${l.y1}-${l.x2}-${l.y2}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#ffffff"
            strokeWidth="0.5"
            opacity="0.06"
          />
        ))}
      </svg>
    </>
  )
}

const SCATTERED_STARS = [
  { x: 120, y: 60, r: 2.2, o: 0.8, accent: true },
  { x: 200, y: 180, r: 1.3, o: 0.6, accent: false },
  { x: 320, y: 110, r: 1.8, o: 0.7, accent: false },
  { x: 410, y: 220, r: 2.6, o: 0.9, accent: true },
  { x: 80, y: 310, r: 1.4, o: 0.5, accent: false },
  { x: 240, y: 360, r: 1.1, o: 0.4, accent: false },
  { x: 360, y: 400, r: 2, o: 0.85, accent: true },
  { x: 460, y: 340, r: 1.3, o: 0.5, accent: false },
  { x: 170, y: 460, r: 1.5, o: 0.45, accent: false },
]

const STAR_LINES = [
  { x1: 120, y1: 60, x2: 200, y2: 180 },
  { x1: 200, y1: 180, x2: 320, y2: 110 },
  { x1: 320, y1: 110, x2: 410, y2: 220 },
  { x1: 410, y1: 220, x2: 460, y2: 340 },
  { x1: 460, y1: 340, x2: 360, y2: 400 },
]

/* ======================================================================
   2. PROBLEM
   ====================================================================== */

function Problem() {
  const paths = [
    {
      agent: 'Claude Code',
      files: ['CLAUDE.md', '.claude/settings.json', '.claude/skills/'],
    },
    { agent: 'Cursor', files: ['.cursor/rules/'] },
    { agent: 'Codex', files: ['AGENTS.md'] },
    {
      agent: 'MCP servers',
      files: ['redeclared in each agent\u2019s own JSON'],
    },
  ]

  return (
    <section className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">The problem</p>
        <h2 className="display mb-10 max-w-4xl">
          Your AI coding setup is scattered across four tools and three{' '}
          <span className="accent-word">machines</span>.
        </h2>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lead max-w-xl lg:col-span-3">
            <p className="mb-5">
              You run Claude Code for long tasks, Cursor for inline edits,
              maybe Codex or Copilot in a browser. Each one reads config from a
              different place.
            </p>
            <p className="mb-5">
              New machine? Re-clone repos, re-install skills, re-wire every MCP
              server. Tweak a skill on your laptop and your desktop doesn't
              know.
            </p>
            <p className="text-white">
              4 agents × 2 machines is{' '}
              <span className="accent-word">8 places</span> where one source of
              truth should live. No way to answer{' '}
              <em className="not-italic text-[var(--fg-muted)]">
                "is my setup in sync right now?"
              </em>
            </p>
          </div>

          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {paths.map((row) => (
                <li key={row.agent} className="card-inset">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--fg-dim)]">
                    {row.agent}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {row.files.map((f) => (
                      <code
                        key={f}
                        className="!border-[var(--line)] !bg-black !text-[var(--fg-muted)]"
                      >
                        {f}
                      </code>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ======================================================================
   3. HOW IT WORKS
   ====================================================================== */

function HowItWorks() {
  return (
    <section id="how" className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">How it works</p>
        <h2 className="display mb-10 max-w-4xl">
          One file. Three resources. Every{' '}
          <span className="accent-word">agent</span>.
        </h2>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-3">
            <p className="lead mb-6">
              gaal reads a single <code>gaal.yaml</code>. It declares three
              things:
            </p>
            <YamlBlock />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <SequenceItem
              n={1}
              title="Repositories"
              body="Code repos kept cloned and up-to-date at declared paths. Git, Mercurial, SVN, Bazaar, tar, zip."
            />
            <SequenceItem
              n={2}
              title="Skills"
              body="SKILL.md collections installed per-project or globally into every agent's skill directory."
            />
            <SequenceItem
              n={3}
              title="MCP servers"
              body="Upserted into each agent's native JSON. Non-destructive. Your own entries are preserved."
            />

            <div className="card mt-2">
              <p className="eyebrow mb-3">Project vs global</p>
              <p className="text-sm text-[var(--fg-muted)]">
                Scope skills per-project (versioned alongside your code) or
                globally for your user (
                <code className="!text-[var(--fg-muted)]">
                  ~/.&lt;agent&gt;/skills/
                </code>
                ). gaal itself reads config from three merged scopes (system,
                user, and the current project), so team defaults don't fight
                per-project overrides.
              </p>
            </div>
          </div>
        </div>

        <p className="lead mt-10 max-w-3xl">
          Run <code>gaal sync</code>. gaal figures out what each agent needs
          and writes it to the right place:{' '}
          <code>CLAUDE.md</code> and <code>.claude/skills/</code> for Claude
          Code, <code>.cursor/rules/</code> for Cursor, <code>AGENTS.md</code>{' '}
          for Codex, the right JSON for MCPs. Commit <code>gaal.yaml</code> to
          a dotfiles repo. On your next machine,{' '}
          <code>gaal sync</code> makes it identical.
        </p>
      </div>
    </section>
  )
}

function SequenceItem({
  n,
  title,
  body,
}: {
  n: number
  title: string
  body: string
}) {
  return (
    <div className="flex gap-5">
      <span className="numeral leading-none shrink-0 w-12 text-right">{n}</span>
      <div>
        <h3 className="mb-1.5 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function YamlBlock() {
  return (
    <div className="term">
      <div className="term-head">
        <span className="term-dots" aria-hidden="true">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
        </span>
        <span className="ml-3 text-[var(--fg-muted)]">gaal.yaml</span>
      </div>
      <pre className="term-body m-0 overflow-x-auto">
        <code>
          <span className="yml-key">schema</span>
          <span className="yml-punct">:</span> <span className="yml-num">1</span>
          {'\n\n'}
          <span className="yml-comment"># 1. code repos to keep cloned</span>
          {'\n'}
          <span className="yml-key">repositories</span>
          <span className="yml-punct">:</span>
          {'\n  - '}
          <span className="yml-key">source</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-str">github.com/getgaal/gaal</span>
          {'\n    '}
          <span className="yml-key">path</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-str">~/code/gaal</span>
          {'\n\n'}
          <span className="yml-comment"># 2. AI agent skills</span>
          {'\n'}
          <span className="yml-key">skills</span>
          <span className="yml-punct">:</span>
          {'\n  - '}
          <span className="yml-key">source</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-str">github.com/obra/superpowers</span>
          {'\n    '}
          <span className="yml-comment">
            # auto-detect every installed agent
          </span>
          {'\n    '}
          <span className="yml-key">agents</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-punct">[</span>
          <span className="yml-str">"*"</span>
          <span className="yml-punct">]</span>
          {'\n    '}
          <span className="yml-comment"># shared across projects</span>
          {'\n    '}
          <span className="yml-key">global</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-bool">true</span>
          {'\n\n'}
          <span className="yml-comment"># 3. MCP servers</span>
          {'\n'}
          <span className="yml-key">mcps</span>
          <span className="yml-punct">:</span>
          {'\n  - '}
          <span className="yml-key">inline</span>
          <span className="yml-punct">:</span>
          {'\n      '}
          <span className="yml-key">mcpServers</span>
          <span className="yml-punct">:</span>
          {'\n        '}
          <span className="yml-key">context7</span>
          <span className="yml-punct">:</span>
          {'\n          '}
          <span className="yml-key">command</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-str">npx</span>
          {'\n          '}
          <span className="yml-key">args</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-punct">[</span>
          <span className="yml-str">"-y"</span>
          <span className="yml-punct">, </span>
          <span className="yml-str">"@upstash/context7-mcp"</span>
          <span className="yml-punct">]</span>
          {'\n    '}
          <span className="yml-key">agents</span>
          <span className="yml-punct">:</span>{' '}
          <span className="yml-punct">[</span>
          <span className="yml-str">"claude-code"</span>
          <span className="yml-punct">, </span>
          <span className="yml-str">"cursor"</span>
          <span className="yml-punct">, </span>
          <span className="yml-str">"codex"</span>
          <span className="yml-punct">]</span>
        </code>
      </pre>
    </div>
  )
}

/* ======================================================================
   5. IMPORT
   ====================================================================== */

function ImportSection() {
  return (
    <section id="import" className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">Import</p>
        <h2 className="display mb-6 max-w-4xl">
          Already using coding agents? gaal imports your setup{' '}
          <span className="accent-word">in one command</span>.
        </h2>
        <p className="lead mb-12 max-w-2xl">
          You don't start from a blank YAML. The first time you run{' '}
          <code>gaal init --import-all</code>, gaal scans every coding agent on
          your machine, collects the skills and MCP servers you've already
          configured, and writes them to <code>gaal.yaml</code>. Your existing
          setup becomes one file, version-controlled, ready to sync.
        </p>

        <div className="grid gap-10 lg:grid-cols-5">
          <ol className="flex flex-col gap-8 lg:col-span-2">
            <SequenceItem
              n={1}
              title="Install gaal"
              body="Single Go binary. curl | sh. No dependencies, no account, no server."
            />
            <SequenceItem
              n={2}
              title="Run gaal init --import-all"
              body="gaal auto-detects every installed agent and imports each skill and MCP server it finds."
            />
            <SequenceItem
              n={3}
              title="Commit gaal.yaml"
              body="Review the generated file, tweak scopes if you want, drop it in your dotfiles repo. That's it."
            />
          </ol>

          <div className="min-w-0 lg:col-span-3">
            <ImportTerminal />
            <p className="mt-5 text-sm text-[var(--fg-muted)]">
              Every agent keeps its current behavior. gaal gives you one source
              of truth without churn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImportTerminal() {
  return (
    <div className="term">
      <div className="term-head">
        <span className="term-dots" aria-hidden="true">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
        </span>
        <span className="ml-3 text-[var(--fg-muted)]">gaal init</span>
      </div>
      <pre className="term-body m-0 overflow-x-auto">
        <code>
          <span className="term-prompt">$</span>{' '}
          <span className="term-cmd">gaal init --import-all</span>
          {'\n'}
          <span className="term-out">Scanning installed agents...</span>
          {'\n\n'}
          <span className="term-out">Detected: Claude Code, Cursor, Codex</span>
          {'\n'}
          <span className="term-arrow">→</span>{' '}
          <span className="term-out">
            8 skills imported from Claude Code
          </span>
          {'\n'}
          <span className="term-arrow">→</span>{' '}
          <span className="term-out">4 skills imported from Cursor</span>
          {'\n'}
          <span className="term-arrow">→</span>{' '}
          <span className="term-out">4 MCP servers imported</span>
          {'\n\n'}
          <span className="term-ok">
            ✓ gaal.yaml generated (47 lines, 12 skills, 4 MCPs)
          </span>
        </code>
      </pre>
    </div>
  )
}

/* ======================================================================
   6. INSTALL SKILLS (roadmap)
   ====================================================================== */

function InstallSection() {
  return (
    <section id="install" className="section section-hairline">
      <div className="page-wrap">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <p className="eyebrow">Install</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-[0.72rem] font-medium text-[var(--fg-muted)]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              style={{ boxShadow: '0 0 8px rgba(222,255,154,0.6)' }}
            />
            Coming in v1.1
          </span>
        </div>
        <h2 className="display mb-6 max-w-4xl">
          Install any skill with{' '}
          <span className="accent-word">one command</span>.
        </h2>
        <p className="lead mb-12 max-w-2xl">
          <code>gaal install</code> adds skills without ever opening{' '}
          <code>gaal.yaml</code>. Point it at any GitHub repo, or pick a skill
          from <code>skills.sh</code>, gaal's community registry. gaal resolves
          the source, updates your YAML, and syncs every agent listed in your
          config.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <InstallCard
            label="From GitHub"
            command="gaal install obra/superpowers"
            note="Any owner/repo. Full URLs and SSH paths accepted."
          />
          <InstallCard
            label="From skills.sh"
            command="gaal install effective-testing"
            note="Curated community skills. Signed, reviewed, discoverable."
          />
          <InstallCard
            label="Pin a version"
            command="gaal install obra/superpowers@v2.1.0"
            note="Tag, branch, or commit. Reproducible installs everywhere."
          />
        </div>

        <p className="mt-10 max-w-2xl text-sm text-[var(--fg-muted)]">
          Shipping in gaal v1.1. Today, declare skills directly in{' '}
          <code>gaal.yaml</code>. The <code>source:</code> field already accepts
          the same paths.
        </p>
      </div>
    </section>
  )
}

function InstallCard({
  label,
  command,
  note,
}: {
  label: string
  command: string
  note: string
}) {
  return (
    <article className="card flex flex-col gap-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-widest text-[var(--accent)]">
        {label}
      </p>
      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-0)] px-4 py-3 font-mono text-[0.82rem] text-white">
        <span className="term-prompt mr-2 select-none" aria-hidden="true">
          $
        </span>
        {command}
      </div>
      <p className="text-sm text-[var(--fg-muted)]">{note}</p>
    </article>
  )
}

/* ======================================================================
   4. TERMINAL DEMO
   ====================================================================== */

function TerminalDemoSection() {
  return (
    <section id="demo" className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">See it run</p>
        <h2 className="display mb-4 max-w-4xl">
          60 seconds. Two machines. Zero{' '}
          <span className="accent-word">copy-paste</span>.
        </h2>
        <p className="lead mb-10 max-w-2xl">
          gaal imports an existing setup on one machine and reproduces it on
          another. No narration. Just the CLI doing its job.
        </p>

        <TerminalDemo />

        <p className="mt-8 text-sm text-[var(--fg-muted)]">
          No server. No account. No telemetry. A single Go binary and a YAML
          in your dotfiles.
        </p>
      </div>
    </section>
  )
}

/* ======================================================================
   5. COVERAGE
   ====================================================================== */

function Coverage() {
  return (
    <section id="coverage" className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">Coverage</p>
        <h2 className="display mb-6 max-w-4xl">
          17 coding agents.{' '}
          <span className="accent-word">Auto-detected</span>.
        </h2>
        <p className="lead mb-10 max-w-2xl">
          gaal discovers installed agents automatically. Use{' '}
          <code>agents: ["*"]</code> and you're done. Register custom agents by
          pointing gaal at their skill and MCP paths.
        </p>

        <ul className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {AGENTS.map((name) => (
            <li key={name} className="agent-chip">
              <span className="dot" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>

        <div className="grid gap-5 md:grid-cols-3">
          <ResourceTile
            n="1"
            title="Repositories"
            body="Clone and update local code repos. Git, Mercurial, SVN, Bazaar, tar, zip."
          />
          <ResourceTile
            n="2"
            title="Skills"
            body="Install SKILL.md collections per-project or globally. Stay current automatically."
          />
          <ResourceTile
            n="3"
            title="MCP servers"
            body="Upsert entries into each agent's native JSON. Non-destructive. Your own entries are preserved."
          />
        </div>
      </div>
    </section>
  )
}

function ResourceTile({
  n,
  title,
  body,
}: {
  n: string
  title: string
  body: string
}) {
  return (
    <article className="card-xl">
      <span className="numeral mb-5 block">{n}</span>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{body}</p>
    </article>
  )
}

/* ======================================================================
   6. TRUST ROW
   ====================================================================== */

function TrustRow() {
  const tiles = [
    {
      label: 'Open source',
      body: 'AGPL-3.0. Code on GitHub. Fork it, patch it, send a PR.',
    },
    {
      label: 'Zero telemetry',
      body: 'Off by default. Opt-in is user-scope only.',
    },
    {
      label: 'Single binary',
      body: 'Go. No runtime deps. No account. No server.',
    },
    {
      label: '17+ agents',
      body: 'Auto-detected. Extensible via ~/.config/gaal/agents.yaml.',
    },
    {
      label: 'Works everywhere',
      body: 'macOS · Linux · Windows.',
    },
  ]

  return (
    <section className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-10">Why trust it</p>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {tiles.map((t) => (
            <li
              key={t.label}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-5 transition hover:border-[var(--line-soft)]"
            >
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-widest text-[var(--accent)]">
                {t.label}
              </p>
              <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
                {t.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ======================================================================
   7. FINAL CTA + NEWSLETTER
   ====================================================================== */

function FinalCta() {
  return (
    <section id="newsletter" className="section section-hairline">
      <div className="page-wrap">
        <p className="eyebrow mb-6">Ready</p>
        <h2 className="display mb-10 max-w-4xl">
          Install gaal. Star the{' '}
          <span className="accent-word">repo</span>.
        </h2>

        <div className="mb-14 flex flex-col items-center gap-4 sm:items-start">
          <InstallBlock />
          <a href={REPO} target="_blank" rel="noreferrer" className="cta-pair">
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

        <div className="card-xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(222,255,154,0.18), transparent 66%)',
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-4">Community Edition</p>
              <h3 className="heading mb-4">
                Working on a team?{' '}
                <span className="accent-word">Team sync is next.</span>
              </h3>
              <p className="text-[var(--fg-muted)] leading-relaxed">
                Today <code>gaal</code> syncs from a local YAML you commit to
                your dotfiles. gaal Community Edition adds a server. Point the
                same <code>gaal</code> CLI at a shared instance and every
                teammate syncs from the same source. Same binary, same YAML; a
                server instead of a git repo.
              </p>
            </div>

            <div>
              <NewsletterForm />
              <p className="mt-3 text-xs text-[var(--fg-dim)]">
                No spam. One email when Community Edition ships. One update per
                month at most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
