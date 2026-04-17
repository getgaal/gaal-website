# gaal Homepage Copy — Design

**Date:** 2026-04-17
**Owner:** Guillaume + Greg (GTM)
**Launch target:** ~April 20, 2026
**Purpose:** Marketing copy for the gaal launch homepage at getgaal.com. Replaces the current placeholder.
**Status:** Approved design, ready for implementation planning.

---

## 1. Context and goals

Launch target for `gaal` (the CLI, `github.com/getgaal/gaal`) is ~April 20, 2026. This homepage replaces getgaal.com and serves a single audience: solo developers running 2+ coding agents across 1+ machines. Success targets pulled from the GTM doc: 500 GitHub stars in 4 weeks, 300 newsletter signups, 200 active installs, 20+ "when is the team version?" inbound messages.

Brief from the owner: the page must (1) state the problem, (2) explain how gaal works, (3) include a live terminal demo. Copy below derives from `docs/features.md` (ground truth for what ships) and the three GTM / strategy docs.

### 1.1 Framing decisions locked during brainstorming

- **Page scope:** Replaces getgaal.com homepage for the launch window. Community/Enterprise pages are deferred.
- **Single product name: `gaal`.** No "Lite" qualifier. The same binary will later point at a team server (Community Edition). The CLI never forks.
- **Hero angle:** N agents × M machines fragmentation pain. Copy-pasting `CLAUDE.md`, `.cursor/rules/`, `AGENTS.md`, and MCP JSON across machines is the recognizable moment.
- **CTA hierarchy:** install-first. The hero's primary CTA is the `curl | sh` one-liner, copyable. Star on GitHub and the newsletter capture are secondary buttons. Rationale: stars and emails follow people who actually tried the tool.
- **Community funnel:** homepage body stays 100% current-state `gaal`; only the newsletter card at section 7 names Community Edition and explains it (client/server team sync).
- **Tone:** Vercel-adjacent per `DESIGN.md`. Compressed typography (Geist Sans, -2.4px tracking at display sizes), shadow-as-border, three-weight system (400/500/600), no decorative color, practitioner-first voice.

---

## 2. Page skeleton (7 sections)

1. Hero — headline + subhead + install block + star + newsletter buttons
2. Problem — fragmentation across agents and machines
3. How it works — annotated YAML + sync flow + project/global scope note
4. Terminal demo — import-then-sync across two machines, 60–90s
5. What's supported — 17-agent grid + 3 resource-type tiles
6. Trust row — 5 tiles (open source, zero telemetry, single binary, 17+ agents, cross-platform)
7. Final CTA + newsletter — install block + star + Community Edition email capture

---

## 3. Copy

### 3.1 Hero

**Headline:** **One YAML. Every coding agent. Every machine.**

**Subhead:** Stop copy-pasting `CLAUDE.md` into `.cursor/rules/`, re-registering MCP servers in every agent's JSON, and hoping your laptop and your desktop stay in sync. `gaal` keeps your skills, MCPs, and repos in one file — and applies them to Claude Code, Cursor, Codex, and 14 other agents with one command.

**Primary CTA (copyable code block with inline copy button):**

```
curl -fsSL https://raw.githubusercontent.com/getgaal/gaal/main/scripts/install.sh | sh
```

**Caption under install block:** *macOS · Linux · Windows · or `go install github.com/getgaal/gaal@latest`*

**Secondary CTAs (ghost buttons, right of install on desktop, stacked on mobile):**

- ⭐ Star on GitHub *(no live count at launch — add once the count is high enough to act as social proof)*
- Get launch updates *(scrolls to section 7 newsletter)*

### 3.2 Problem

**Label:** `THE PROBLEM`

**Headline:** **Your AI coding setup is scattered across four tools and three machines.**

**Body:**

You run Claude Code for long tasks, Cursor for inline edits, maybe Codex or Copilot in a browser. Each one reads config from a different place:

- `CLAUDE.md`, `.claude/settings.json`, `.claude/skills/`
- `.cursor/rules/`
- `AGENTS.md` for Codex
- MCP servers redeclared in each agent's own JSON

New machine? Re-clone repos, re-install skills, re-wire every MCP server. Tweak a skill on your laptop and your desktop doesn't know. 4 agents × 2 machines is 8 places where one source of truth should live — and no way to answer *"is my setup in sync right now?"*

### 3.3 How it works

**Label:** `HOW IT WORKS`

**Headline:** **One file. Three resources. Every agent.**

**Body intro:** gaal reads a single `gaal.yaml`. It declares three things:

**YAML block (annotated inline comments — keep formatting exact):**

```yaml
schema: 1

repositories:                              # 1. code repos to keep cloned
  - source: github.com/getgaal/gaal
    path: ~/code/gaal

skills:                                    # 2. AI agent skills
  - source: github.com/obra/superpowers
    agents: ["*"]                          # auto-detect every installed agent
    global: true                           # shared across projects

mcps:                                      # 3. MCP servers
  - inline:
      mcpServers:
        context7:
          command: npx
          args: ["-y", "@upstash/context7-mcp"]
    agents: ["claude-code", "cursor", "codex"]
```

**Body after YAML:** Run `gaal sync`. gaal figures out what each agent needs and writes it to the right place — `CLAUDE.md` and `.claude/skills/` for Claude Code, `.cursor/rules/` for Cursor, `AGENTS.md` for Codex, the right JSON for MCPs. Commit `gaal.yaml` to a dotfiles repo. On your next machine, `gaal sync` makes it identical.

**Inline callout (left rule or subtle boxed treatment):**

> **Project vs global.** Scope skills per-project (versioned alongside your code) or globally for your user (`~/.<agent>/skills/`). gaal itself reads config from three merged scopes — system, user, and the current project — so team defaults don't fight per-project overrides.

### 3.4 Terminal demo

**Label:** `SEE IT RUN`

**Headline:** **60 seconds. Two machines. Zero copy-paste.**

**Body intro:** gaal importing an existing setup on one machine and reproducing it on another. No narration — captions only.

**Embedded asciinema (preferred) or pre-rendered terminal video. Script:**

**Act 1 — Import what you already have:**

```
$ gaal init --import-all
Detected: Claude Code, Cursor, Codex
Found 12 skills across 3 agents.
Found 4 MCP servers.
Generated gaal.yaml.

$ gaal status
✓ 12/12 skills installed
✓  4/4  MCP servers registered
✓ 0 drift

$ git add gaal.yaml && git commit -m "one source of truth"
```

**Act 2 — Reproduce on a new machine:**

```
$ curl -fsSL …/install.sh | sh
✓ gaal v0.1.2 installed

$ git clone <dotfiles> && cd dotfiles
$ gaal sync
→ Claude Code: 12 skills, 4 MCP servers
→ Cursor:      12 skills, 4 MCP servers
→ Codex:       12 skills, 4 MCP servers
✓ In sync.
```

**Caption under the demo:** *No server. No account. No telemetry. A single Go binary and a YAML in your dotfiles.*

### 3.5 What's supported

**Label:** `COVERAGE`

**Headline:** **17 coding agents. Auto-detected.**

**Body:** gaal discovers installed agents automatically. Use `agents: ["*"]` and you're done. Register custom agents by pointing gaal at their skill and MCP paths.

**Agent grid (grayscale logos per DESIGN.md, 6-wide on desktop, stacked on mobile, equal visual weight, subtle hover to color):**

Claude Code · Cursor · Codex · GitHub Copilot · Amp · Cline · Roo · Continue · Gemini CLI · Goose · Kilo · Kiro CLI · OpenCode · OpenHands · Trae · Warp · Windsurf

**Below the grid — three resource-type tiles (shadow-bordered cards):**

| **Repositories** | **Skills** | **MCP servers** |
|---|---|---|
| Clone and update local code repos. Git, Mercurial, SVN, Bazaar, tar, zip. | Install SKILL.md collections per-project or globally. Stay current automatically. | Upsert entries into each agent's native JSON. Non-destructive — your own entries are preserved. |

### 3.6 Trust row

**Label:** `WHY TRUST IT`

**Five tiles in a single row (label in Geist Mono uppercase 12px, body in 16px Geist):**

| `OPEN SOURCE` | `ZERO TELEMETRY` | `SINGLE BINARY` | `17+ AGENTS` | `WORKS EVERYWHERE` |
|---|---|---|---|---|
| AGPL-3.0. Code on GitHub. Fork it. | Off by default. Opt-in is user-scope only. | Go. No runtime deps. No account. No server. | Auto-detected. Extensible via `~/.config/gaal/agents.yaml`. | macOS · Linux · Windows. |

### 3.7 Final CTA + newsletter

**Headline:** **Install gaal. Star the repo.**

**Install block (repeat of hero, copyable):**

```
curl -fsSL https://raw.githubusercontent.com/getgaal/gaal/main/scripts/install.sh | sh
```

**Star button:** ⭐ Star on GitHub *(no count at launch — links to the repo)*

**Newsletter card (visually distinct block below — shadow-bordered, slightly tinted surface):**

> **Working on a team? gaal Community Edition is next.**
>
> Today `gaal` syncs from a local YAML you commit to your dotfiles. gaal Community Edition adds a server — point the same `gaal` CLI at a shared instance and every teammate syncs from the same source. Same binary, same YAML; a server instead of a git repo.
>
> Drop your email and we'll tell you when it ships.
>
> `[you@dev.local]` `[Notify me]`
>
> *No spam. One email when Community Edition ships. One update per month at most.*

---

## 4. Voice and language guardrails

Pulled from `docs/gaal-lite-gtm-strategy.md` §4.3 and `docs/strategy-messaging-positioning.md` §7. Applies to every string on the page.

**Say:**

- Concrete file paths, commands, and agent names (`CLAUDE.md`, `.cursor/rules/`, `gaal sync`, `Claude Code`, `Cursor`, `Codex`)
- Specific features — "repos, skills, MCPs", "17 coding agents", "Go single binary", "AGPL-3.0"
- First-person developer frustration where it lands naturally ("hoping your laptop and your desktop stay in sync")

**Don't say:**

- "Governance", "compliance", "audit", "RBAC", "approvals", "risk tier" — that's Community/Enterprise territory
- "Teams", "organization", "RBAC" in the body copy — only in the newsletter card describing Community Edition
- "AI-native DevOps", "agent configuration governance", "platform" — category jargon
- "Chezmoi", competitor names, or head-to-head comparisons (save for GH Discussions / blog)
- "Vaporware", "enterprise", "coming soon" anywhere except the newsletter card

---

## 5. Visual / design system notes

Inherits from `DESIGN.md` ("Dark Particles"):

- **Canvas:** pure black (`#000000`). No light mode, no theme toggle.
- **Typography:** Urbanist (400/500/600 only). JetBrains Mono for code blocks, terminal output, and eyebrow mono-labels where called for. OpenType features `ss01`, `cv11` enabled at display sizes.
- **Letter-spacing:** `-0.02em` at 48pt+ display, `-0.015em` at 32pt, `-0.005em` at 24pt, normal at 14pt and below.
- **Single accent:** chartreuse-lime `#DEFF9A` only. Used for: the last word of each major headline, numeral markers (1/2/3), primary CTA pill, active state dots, link color, focused input borders. One lime element per card, maximum.
- **Cards:** `#252525` on `#000000`, 20–24px radius, 32–40px padding. No CSS borders, no shadows — depth comes from value contrast alone.
- **CTA canonical pattern:** lime pill + matching 44px lime chevron-circle companion. Travel together atomically.
- **Section rhythm:** 96–128px vertical padding per section, separated by a `1px solid #262626` hairline. No alternating surface colors.
- **Editorial move:** every section opens with eyebrow label + oversized headline. Highlighted last word of each headline drops to lime.
- **Hero atmosphere:** soft radial lime halo + scattered star field + subtle constellation lines + fine fixed-viewport dust grid. No saturated imagery, no gradients in content chrome.
- **Footer ticker:** hairline + 3-column `●getgaal · ▪Q2 April · 2026` pattern inherited directly from the deck.

---

## 6. Scope boundaries (what this design is NOT)

- Not the README. README can be longer, more technical, and handle objections (chezmoi, AGPL rationale, "is this vaporware").
- Not the full getgaal.com site. Only the homepage. Docs, blog, changelog, agents page are out of scope.
- Not the Loops.co welcome email sequence. Only the capture UI and its copy.
- Not the launch video script — the embedded terminal demo reuses that recording but isn't defined here.

---

## 7. Resolved implementation decisions

- **Live GitHub star count** — ship without it at launch. Add post-launch when the count is high enough to be social proof rather than a liability.
- **Terminal demo format** — asciinema. Embedded `.cast` player, copyable text, small payload. No pre-rendered video fallback for launch.
- **Email capture backend** — Loops.co, form POST. No embedded widget.
- **Font loading** — Geist Sans + Geist Mono via Vercel's CDN.

## 8. Pre-launch verification

- **Install script URL** — the spec uses `raw.githubusercontent.com/getgaal/gaal/main/scripts/install.sh`. Confirm this path exists and serves the install script before launch; `docs/features.md` currently references `gmg-inc/gaal-lite`, which implies a repo move is pending.

---

## 8. Related documents

- `docs/features.md` — ground truth for what the CLI ships today
- `docs/gaal-lite-gtm-strategy.md` — launch plan, success metrics, owner assignments
- `docs/strategy-messaging-positioning.md` — market context, messaging pillars, voice principles
- `docs/editions.md` — product architecture diagrams
- `DESIGN.md` — visual system (Vercel-adjacent)
