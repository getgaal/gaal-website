# gaal Lite — Feature Inventory

**Source:** `/Users/nls/gmg/gaal-lite` (latest `main`)
**Date:** 2026-04-17
**Purpose:** Ground-truth list of what gaal Lite actually ships today, for PM/GTM/docs teams. Reconciles the aspirational `product/gaal-lite/README.md` against the as-built repo.

---

## One-line summary

A Go 1.26 single-binary CLI (`gaal`) that reads one YAML file and keeps three things in sync on a developer's machine: **repositories**, **AI-agent skills**, and **MCP server entries**. No server, no account, no telemetry by default.

**Tagline (repo):** *Git Agent Automation Layer — a single CLI to keep your local repositories, AI agent skills, and MCP server configurations in sync.*

---

## 1. Resource types it manages

| Resource | What it does | Sources supported |
|---|---|---|
| **Repositories** | Clone or update repos at declared local paths | `git`, `hg` (Mercurial), `svn`, `bzr` (Bazaar), `tar`, `zip` |
| **Skills** | Install `SKILL.md` collections into coding-agent skill directories | GitHub shorthand (`owner/repo`), full URL, Git SSH (`git@...`), local path |
| **MCPs** | Upsert entries under `mcpServers` in a target JSON config file | `inline:` YAML block **or** remote `source:` URL returning `{"mcpServers": {...}}` |

Every resource is declared in a single `gaal.yaml` (schema: 1, stable forever — breaking changes go to schema: 2).

---

## 2. Supported coding agents (built-in registry)

Detected automatically via `agents: ["*"]`; individually addressable by name:

`amp`, `claude-code`, `cursor`, `github-copilot`, `cline`, `roo`, `codex`, `continue`, `gemini-cli`, `goose`, `kilo`, `kiro-cli`, `opencode`, `openhands`, `trae`, `warp`, `windsurf` (plus others — `gaal info agent` prints the full list).

**Extensible:** users drop `~/.config/gaal/agents.yaml` (or `%AppData%\gaal\agents.yaml` on Windows) to register custom agents with `project_skills_dir`, `global_skills_dir`, and `mcp_config_file`. Custom entries **extend** — they cannot override built-ins.

**Install scopes for skills:**
- `global: false` (default) → `<project>/<agent-dir>/skills/` — versionable alongside project
- `global: true` → `~/.<agent>/skills/` — shared across all projects

---

## 3. CLI commands

All sub-commands share global flags: `--config/-c`, `--verbose/-v`, `--no-banner`, `--sandbox`, `--log-file`, `--output/-o`.

| Command | Purpose | Notable flags |
|---|---|---|
| `gaal init` | Interactive wizard: scaffold `gaal.yaml` from an empty skeleton or by importing detected skills + MCP servers | `--empty`, `--import-all`, `--scope project\|global`, `--force` |
| `gaal sync` | One-shot sync of repos, skills, MCPs | `--dry-run`, `--service/-s`, `--interval/-i` |
| `gaal status` | FS-first state of every managed resource + drift detection | `-o table\|json` |
| `gaal info <repo\|skill\|mcp\|agent> [filter]` | Detailed card per entry (config spec + runtime state) | substring filter, `-o json` |
| `gaal agents` | List registered coding agents (installed-first) | `--installed`, detailed view by name, `-o json` |
| `gaal audit` | Scan agent dirs for any installed skill/MCP (tracked or not) | — |
| `gaal doctor` | Validate YAML, reachability of skill sources, MCP targets, agents, telemetry status | `--offline`, `--no-upsell`, `-o json` |
| `gaal schema` | Emit JSON Schema (draft-07) for `gaal.yaml` | `--file/-f` |
| `gaal migrate --to community <url>` | Validate + preview migration of current YAML to a Community instance | `--dry-run` (Community not yet public — today this is a validator + preview) |
| `gaal version` | Version + build timestamp | — |
| `gaal completion <bash\|zsh\|fish\|powershell>` | Shell completion scripts | — |

**Exit codes (sync --dry-run, doctor):** `0` = clean, `1` = changes pending / warnings, `2` = error. CI-friendly.

---

## 4. Sync engine behaviour

- **Parallel repository sync** — one goroutine per repo, errors aggregated.
- **Sequential skill + MCP sync** — predictable order, one source at a time.
- **Continuous service mode** — `gaal sync --service --interval 10m` runs on a ticker with clean `SIGTERM` / `Ctrl-C` handling via `context.Context`.
- **Dry-run** — full planning pipeline, zero disk writes. Prints the plan.
- **Atomic MCP writes** — temp file + `os.Rename()`; existing keys not managed by gaal are preserved (pure upsert under `mcpServers.<name>`).
- **Skill cache** — remote skill sources cloned into `os.UserCacheDir()/gaal/skills/<url-key>/` (shallow `depth=1` clones for git; hard-reset on update → robust against force-push / history rewrites).
- **Archive strip prefix** — `version:` on `tar`/`zip` entries doubles as the extraction strip prefix; `Update()` is a no-op for archives.

---

## 5. Drift detection (`status` / `audit`)

FS-first scan with a Git-inspired snapshot index (`internal/discover`):

1. `stat()` → size + mtime match → **unchanged**.
2. Mismatch → `sha256` → hash matches → update mtime only (racy-git repair).
3. Hash mismatch → **modified**.
4. For VCS-tracked directories, `vcs.HasChanges` is tried first.

Reports per-skill counters: `installed`, `missing`, `modified`. Repos report `ok` / `behind`.

`audit` additionally discovers skills installed **outside** the YAML (manual installs, other tools) — gives a view of "what's really on this machine."

---

## 6. Configuration system

**Three-level merge chain** (lowest → highest priority):

| Priority | Path |
|---|---|
| 1 | `/etc/gaal/config.yaml` (global / system) |
| 2 | `$XDG_CONFIG_HOME/gaal/config.yaml` (user; `~/.config/gaal/config.yaml` on Linux/macOS, `%AppData%\gaal\config.yaml` on Windows) |
| 3 | `gaal.yaml` in CWD (or `--config <path>`) |

**Scope restriction policy:** certain keys (e.g. `telemetry`) cannot be overridden from workspace scope. Documented in `docs/config.md`.

**Schema & validation:**
- JSON Schema (draft-07) generated from Go structs via `invopop/jsonschema` — swappable behind a `Generator` interface.
- Struct validation via `go-playground/validator/v10` — swappable behind a `Validator` interface.
- `make build` auto-regenerates `dist/schema.json` on every build.
- VS Code: workspace `settings.json` already maps `schema.json` → `*.gaal.yaml` for inline validation + auto-completion. IntelliJ/GoLand has docs for manual mapping.

---

## 7. Output & observability

- **`-o table`** — adaptive coloured pterm tables (default, TTY).
- **`-o json`** — structured JSON for CI / scripting. Banner auto-suppressed.
- **Logger:** compact colourised `slog` console handler (stderr) + optional `slog.JSONHandler` to file (`--log-file`) with JSON Lines, `host` and `time` fields. A `teeHandler` fans out to both.
- **TTY spinner** (pterm) under a single mutex → no interleaved writes; `--verbose` replaces the spinner with line-by-line subprocess stdout/stderr.
- **ASCII banner** — printed on TTY, suppressed by `--no-banner`, `--output json`, or when running `completion`.

---

## 8. Sandbox mode (safe for CI / tests / experimentation)

`gaal --sandbox /tmp/foo sync` redirects every path lookup to stay inside `/tmp/foo`:

| Lookup | Redirected to |
|---|---|
| `os.UserHomeDir()` | `sandboxDir` |
| gaal user config | `sandboxDir/.config/gaal/` (OS-appropriate) |
| Skill cache (`os.UserCacheDir()`) | sandbox-scoped cache root (OS-appropriate) |
| `global: true` skill paths | `sandboxDir/.<agent>/skills/` |
| MCP target (`~/...`) | `sandboxDir/...` |
| `WorkDir` | `sandboxDir/workspace/` |

No real user resource is touched. Used by `make sandbox` and recommended for CI smoke tests.

---

## 9. Privacy & telemetry

- **No data collection by default.** Must be opted in on first run.
- `telemetry:` key is **global-/user-scope only** (workspace cannot enable it) — explicit policy decision.
- Opt-in flag is anonymous usage telemetry only.
- Full disclosure in `PRIVACY_POLICY.md`.

---

## 10. Install & distribution

| Channel | Command |
|---|---|
| Quick install (macOS / Linux) | `curl -fsSL https://raw.githubusercontent.com/gmg-inc/gaal-lite/main/scripts/install.sh \| sh` (pin with `VERSION=v0.1.2`, retarget with `INSTALL_DIR=...`) |
| Go toolchain | `go install github.com/gmg-inc/gaal-lite@latest` |
| From source | `git clone ... && make build` → `dist/gaal` |

**Platforms:** macOS (Apple Silicon, Intel), Linux (amd64, arm64), Windows (amd64). Cross-compilation via `make build-cross`.

**Version injection** at compile time: `-X gaal/cmd.Version=$(git describe ...)` + `-X gaal/cmd.BuildTime=...`.

---

## 11. Migration path to Community

`gaal migrate --to community <url>` validates the current YAML and prints what would be pushed. Community itself is not yet public — today the command is a **pre-flight validator** that signals the upgrade is understood and smooth.

Graduation trigger (from README): *"When your team outgrows single-user Lite (shared configs, drift detection, approval workflows), gaal Community Edition picks up where Lite leaves off."*

---

## 12. Engineering quality signals

- **Language / toolchain:** Go 1.26+, single binary, no runtime deps.
- **Test coverage target:** ≥ 90% (`make coverage` generates four HTML/SVG reports).
- **Race detector:** `make test-race` (5-min timeout).
- **Lint:** `gofmt -l` + `go vet`.
- **License:** **AGPL-3.0** (note: diverges from the product README's "Apache 2.0" claim — repo `LICENSE` is authoritative).
- **External deps** (minimal): `cobra` (CLI), `yaml.v3`, `go-git/v5` (pure-Go git), `invopop/jsonschema`, `go-playground/validator/v10`, `pterm`. Everything else stdlib.

---

## 13. Gaps vs the product-level `README.md` (things the aspirational doc describes that the repo does not yet ship)

Surface these before publishing the brief — they are the delta between positioning and product:

| Product README claim | Repo reality |
|---|---|
| `brew install gaal/tap/gaal-lite` | No Homebrew tap yet. Install is via `curl` script or `go install`. |
| `gaal lite sync` (sub-sub-command namespace) | Binary is `gaal`, command is `gaal sync`. No `lite` subcommand namespace. |
| Config filename `gaal-lite.yaml` | Config filename is `gaal.yaml`. |
| Top-level `tools:` section (shell aliases) | Not implemented. Only `repositories`, `skills`, `mcps`. |
| Top-level `plugins:` section (per-agent rules / permissions) | Not implemented. MCP upsert is the only per-agent write. |
| `gaal lite diff` command | No dedicated `diff` command — closest equivalent is `gaal sync --dry-run` + `gaal status`. |
| Per-skill `name:` + `description:` + pin syntax `#branch/path` | Skill entries use `source:` + `select:` + `agents:`; no inline `name`/`description`; pinning via upstream VCS version. |
| License: Apache 2.0 | License: AGPL-3.0. |
| Domain: `gaal.dev` / `get.gaal.dev/lite` | Domain: `getgaal.com`; install script on GitHub raw. |

**Recommendation:** either update `product/gaal-lite/README.md` to match the as-built repo, or treat it as a forward-looking roadmap doc and clearly mark which items are unshipped.

---

## 14. Quick feature checklist (for battlecards / one-pagers)

- [x] One YAML → repos + skills + MCPs
- [x] 6 VCS protocols (git, hg, svn, bzr, tar, zip)
- [x] 17+ coding agents supported out of the box
- [x] Auto-detect installed agents (`agents: ["*"]`)
- [x] Project-local **and** user-global skill install scopes
- [x] MCP entries upserted (non-destructive) into any JSON config
- [x] Inline **or** remote (URL) MCP sources
- [x] Interactive init wizard (import from existing install) + non-interactive flags for CI
- [x] Dry-run with CI-friendly exit codes
- [x] Continuous service mode (ticker + clean shutdown)
- [x] Drift detection (FS + VCS-native + sha256 fast-path)
- [x] Sandbox mode (every path redirected — no real writes)
- [x] JSON Schema generation + IDE validation
- [x] Shell completion (bash / zsh / fish / PowerShell)
- [x] Structured JSON logging + TTY spinner
- [x] Multi-OS, single static binary
- [x] Zero telemetry by default (opt-in, user-/global-scope only)
- [x] Migration validator to Community (pre-flight today)
- [ ] Homebrew tap *(roadmap)*
- [ ] `tools:` / `plugins:` top-level sections *(roadmap — per product README)*
- [ ] Team / multi-user / approvals / audit *(by design — belongs in Community)*
