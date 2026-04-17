# gaal Feature Marketing Brief — 18 Core Capabilities

**Author:** Guillaume Moigneu
**Status:** Draft v1.0
**Date:** April 2026
**Purpose:** Reference brief for all marketing assets — website pages, landing pages, feature comparison tables, sales decks, product demos, social content, and documentation. Every online asset should derive its feature messaging from this document.

---

## How to use this brief

Each of the 18 capabilities below includes:

- **Internal ID** — CG-XX reference used across PRDs and compliance docs
- **Marketing name** — the name to use in all external-facing materials
- **One-liner** — a single sentence for feature lists, comparison tables, and UI labels
- **Elevator description** — 2–3 sentences for feature pages, blog posts, and sales decks
- **The problem it solves** — what the customer is dealing with before this capability exists
- **How it works** — concrete, technical description of what gaal does (for practitioner-facing content)
- **Who cares** — which personas this capability matters most to
- **Compliance frameworks served** — which regulatory requirements this directly satisfies (reference the [full mapping](/legal/compliance/ai-compliance-framework-alignment.md) for details)
- **Phase** — MVP or Phase 1, so marketing knows what ships when
- **Screenshot/demo notes** — guidance for design and demo teams on what to show

---

## The 18 Capabilities

---

### 1. Agent Configuration Registry

**ID:** CG-01
**Phase:** MVP
**Marketing name:** Agent Configuration Registry

**One-liner:** A single, versioned store for every AI agent's configuration — system prompts, tools, skills, MCPs, model bindings, rules, and parameters.

**Elevator description:** gaal's Agent Configuration Registry is the system of record for how your AI agents behave. Every agent gets a structured configuration that captures everything that determines its behavior: system prompt, tool allowlist, model binding, sampling parameters, rules, skills, hooks, and metadata. The registry stores it, versions it, and makes it queryable by anyone who needs to know what an agent is configured to do.

**The problem it solves:** Today, agent configurations live in scattered files — CLAUDE.md, .cursor/rules, environment variables, YAML baked into Docker images, Slack messages, wikis, and inside platform UIs for Claude Desktop, Gemini, and ChatGPT. Nobody has a single place to answer "what is this agent configured to do right now?" For teams with 10+ agents across coding, autonomous, and user contexts, this becomes a serious visibility problem. For regulated enterprises, it's an audit failure.

**How it works:** Each agent is registered in gaal with a structured configuration document. The schema covers: `id`, `name`, `description`, `category` (coding, autonomous, or user), `model_binding` (provider + model + version), `system_prompt`, `tool_allowlist`, `sampling` (temperature, top_p, max_tokens), `context_config`, `rules`, `skills`, `hooks`, `override_policy`, `owner_team`, `tags`, and `metadata` (arbitrary key-value including risk_tier). Full CRUD via REST API. Filterable by category, team, tag, or any metadata field. Dashboard UI provides a browsable registry with search. User agents (Claude Desktop projects, Gemini Gems, ChatGPT custom GPTs) use the same registry with a subset of applicable fields.

**Who cares:** Platform engineers (need to know what's deployed), compliance officers (need the inventory for audits), CISOs (need visibility into the AI landscape), engineering leaders (need to understand what agents the team is running).

**Compliance frameworks served:** EU AI Act (Art. 9, 11, 13), NIST AI RMF (MAP, GOVERN), ISO 42001 (7.5, 8.1, 8.4), SR 11-7, DORA, SOC 2, ISO 27001 (A.8.9), Singapore Agentic AI, OSTP Blueprint, UK AI Principles, China AI Regulations, HIPAA — **all 12 frameworks**.

**Screenshot/demo notes:** Show the registry list view with columns (agent name, category, team, risk tier, config status, last approved). Click into an agent to show the full configuration document with all fields populated. Emphasize the breadth of what's captured — this isn't just prompt management, it's the full behavioral specification.

---

### 2. Immutable Version History

**ID:** CG-02
**Phase:** MVP
**Marketing name:** Immutable Version History

**One-liner:** Every configuration change creates a new, permanent version — with who changed it, when, and why.

**Elevator description:** gaal never overwrites a configuration. Every change creates a new, immutable version with the creator's identity, a timestamp, a change summary, and a diff from the previous version. Old versions are never deleted. You can always answer "what was this agent running on March 15th?" and "who changed it?"

**The problem it solves:** When an agent's behavior changes unexpectedly, the first question is "what changed?" Today, that means digging through git blame, deployment logs, and Slack history — if the change was tracked at all. Most agent configuration changes happen silently, with no record. Regulators and auditors expect a complete, tamper-proof history. Without it, compliance is impossible.

**How it works:** Each `PATCH` to an agent configuration creates a new version record: `{version_id, creator_id, timestamp, change_summary, diff_from_previous, approval_status}`. Versions follow a lifecycle: `draft → in_review → approved → superseded`. Versions are append-only — the data store enforces immutability. Enterprise deployments use write-once backup (S3 Object Lock or equivalent). Every version is accessible via API: `GET /api/agents/{id}/versions/{versionId}`.

**Who cares:** Compliance officers (audit trail), AI engineers (debugging regressions), risk managers (model risk documentation), platform engineers (understanding what changed and when).

**Compliance frameworks served:** EU AI Act (Art. 11, 12), NIST AI RMF (MEASURE), ISO 42001 (7.5, 8.4, 10.2), SR 11-7, DORA, SOC 2 (CC8.1, CC9.2), ISO 27001 (A.8.9, A.8.32), China AI Regulations, HIPAA.

**Screenshot/demo notes:** Show a version timeline for an agent — list of versions with dates, authors, one-line summaries, and approval status badges (draft/approved/rejected/superseded). Click a version to expand the full configuration at that point in time. Emphasize the immutability — "no version is ever deleted."

---

### 3. Semantic Diff

**ID:** CG-03
**Phase:** MVP
**Marketing name:** Semantic Diff

**One-liner:** See exactly what changed between any two configuration versions — field by field, line by line.

**Elevator description:** gaal produces structured, human-readable diffs between any two versions of an agent's configuration. System prompt changes show character-level additions and removals. Tool allowlist changes show items added or removed. Model binding and parameter changes show old → new values. Rules show per-rule modifications. This is the view approvers use to make informed decisions, and the artifact auditors use to understand change impact.

**The problem it solves:** Raw text diffs of agent configurations are noisy and hard to interpret, especially for non-engineers reviewing changes. A system prompt edit, a tool addition, and a temperature tweak all look the same in a generic diff. Reviewers need to understand *what kind of change* happened and *what its behavioral impact* might be. Generic diff tools don't provide that structure.

**How it works:** `GET /api/agents/{id}/versions/{a}/diff/{b}` returns a structured JSON diff with field-level granularity. System prompt: character-level diff (like GitHub PR view). Tool allowlist: items added/removed as discrete entries. Model binding: `{old: "claude-sonnet-4-6", new: "claude-opus-4-6"}`. Rules: per-rule added/modified/removed. Sampling: per-parameter old → new. Override policy: fields moved between mandatory/recommended. The dashboard renders this as a side-by-side or inline comparison view.

**Who cares:** AI engineers (submitting and reviewing changes), compliance officers (understanding what changed before approving), risk managers (assessing behavioral impact of changes).

**Compliance frameworks served:** Supports EU AI Act (Art. 9 — risk evaluation of changes), SR 11-7 (change documentation), ISO 42001 (10.2 — continual improvement tracking).

**Screenshot/demo notes:** Show a side-by-side diff of a real-looking configuration change — ideally one that includes a prompt edit, a tool addition, and a parameter tweak in the same version. Highlight the different rendering styles for each field type. Show the approver's view with the diff inline on the review card.

---

### 4. Approval Workflows

**ID:** CG-04
**Phase:** MVP
**Marketing name:** Approval Workflows

**One-liner:** Review and approve configuration changes before they reach your agents — with configurable gates from none to multi-approver.

**Elevator description:** gaal enforces review gates on agent configuration changes. You choose the rigor: no approval (for dev/experimentation), single approver, multi-approver (N-of-M), or mandatory cooling-off periods. High-risk agents at a bank require two risk team members to sign off. A startup's dev agents deploy immediately. Same platform, configurable per agent. Every approval, rejection, and comment is recorded in the audit trail.

**The problem it solves:** Agent configuration changes happen without review. An engineer tweaks a prompt, adds a tool, changes the model — nobody else sees it until something breaks (or worse, until an auditor asks). In regulated industries, unreviewed changes to AI system behavior are a compliance finding. Even in unregulated teams, lack of review means regressions go unnoticed.

**How it works:** Each agent has an `approval_policy`: `none`, `single_approver`, `multi_approver` (with N and M parameters), or `mandatory_review_period` (cooldown in hours). When a new version is created, its status is `draft`. Submitting for review moves it to `in_review` and notifies designated approvers (email, Slack, Teams, or in-dashboard). Approvers see the semantic diff (CG-03) and approve with an optional comment or reject with a required comment. Approved versions can be assigned to release labels. Rejected versions cannot be deployed. The approval workflow itself is configurable per agent via OPA policies — e.g., "agents tagged sr11-7 require 2 approvers from the model-risk group."

**Who cares:** Compliance officers (regulatory requirement for change approval), risk managers (control over high-risk agent changes), engineering leaders (quality gate for agent behavior), AI engineers (structured review process).

**Compliance frameworks served:** EU AI Act (Art. 9, 14, 17), NIST AI RMF (GOVERN, MANAGE), ISO 42001 (5.1, 8.1), SR 11-7, DORA, SOC 2 (CC8.1), ISO 27001 (A.8.32), Singapore Agentic AI, OSTP Blueprint, UK AI Principles, China AI Regulations, HIPAA — **all 12 frameworks**.

**Screenshot/demo notes:** Show the approval queue with pending changes. Show a review card with: agent name, risk tier badge, change summary, inline diff, submitter name, approve/reject buttons with comment field. Show the status transition: draft → in_review → approved. Show a multi-approver scenario where 2 of 3 approvals are needed.

---

### 5. Release Labels

**ID:** CG-05
**Phase:** MVP
**Marketing name:** Release Labels

**One-liner:** Named deployment targets — prod, staging, dev, canary — that point to specific approved configuration versions.

**Elevator description:** Release labels decouple "which version is approved" from "which version runs where." A label like `prod` points to an approved configuration version. When you move the label to a new version, every agent watching that label picks up the change — no code changes, no restarts. Labels are per-agent and custom labels are supported (hotfix, experiment-a, region-eu). Every label movement is atomic and audited.

**The problem it solves:** Without release labels, deploying a new agent configuration means manually updating environment variables, redeploying containers, or editing files on developer machines. There's no way to say "this is the production config" separately from "this is the latest approved config." Rollbacks require knowing which version was running before. Environment promotion (dev → staging → prod) is manual and error-prone.

**How it works:** `PUT /api/agents/{id}/labels/{label}` atomically moves a label to a new version. Labels can only point to `approved` versions (unless approval policy is `none`). Agents and the daemon fetch configs by label, not version number: `GET /api/agents/{id}/config?label=prod`. Label change history is queryable: `GET /api/agents/{id}/labels/{label}/history`. Moving a label triggers an SSE event to all subscribed agents and daemon clients.

**Who cares:** Platform engineers (deployment management), AI engineers (environment targeting), compliance officers (knowing what version ran in production at any point in time).

**Compliance frameworks served:** EU AI Act (Art. 12 — traceability to specific versions), SR 11-7 (deployment tracking), SOC 2 (CC8.1), ISO 27001 (A.8.33 — environment separation).

**Screenshot/demo notes:** Show a label management view for an agent with prod → v12, staging → v14, dev → v15. Show the "move label" action with a confirmation dialog. Show the label history timeline. Emphasize the atomic, audited nature of label changes.

---

### 6. Configuration Delivery — Coding Agents

**ID:** CG-06
**Phase:** MVP
**Marketing name:** gaal Daemon (Coding Agent Sync)

**One-liner:** A local daemon that syncs org-managed configurations to coding agents on developer machines — Claude Code, Cursor, Codex, and any custom agent.

**Elevator description:** The gaal Daemon (`gaald`) is a lightweight process running on developer machines. It authenticates to gaal, fetches the agent configurations assigned to the developer, and writes them as native files — CLAUDE.md, .claude/settings.json, rules/, skills/ for Claude Code; .cursor/rules/ for Cursor; AGENTS.md for Codex. Built-in adapters handle format translation. A template engine supports custom agents. The daemon enforces mandatory fields, reports overrides on recommended fields, and subscribes to real-time updates. New hires get the team's baseline configuration the moment the daemon is installed.

**The problem it solves:** Coding agent configurations are copy-pasted between repos, shared via Slack, or maintained individually by each developer. There is no central delivery mechanism. A team of 20 developers has 20 different Claude Code setups. There's no way to push a configuration update to everyone. There's no inventory of what's running on developer machines. When the org adds a new compliance rule, there's no guarantee every developer's agent picks it up.

**How it works:** The daemon is a single Go binary (macOS, Linux, Windows). Install via Homebrew, apt, or MSI. Authenticate via OAuth/OIDC (org IdP) or API key. On startup, fetch configs assigned to this developer. Render via adapters: `claude-code` adapter writes CLAUDE.md, .claude/settings.json, rules/*.md, skills/*, hooks. `cursor` adapter writes .cursor/rules/*.md. `codex` adapter writes AGENTS.md. `generic` adapter uses user-defined templates. Sync interval: configurable, default 60 seconds. SSE connection for real-time updates. Mandatory fields restored if locally modified. Recommended field overrides logged to gaal dashboard. Resource usage: <50MB RAM, <1% CPU at idle. CLI: `gaal daemon install`, `gaal daemon sync`, `gaal daemon status`, `gaal daemon policy`.

**Who cares:** Platform engineers (deploying consistent configs across the org), engineering leaders (onboarding, standardization), AI engineers (getting the team baseline automatically), security teams (enforcing tool and model restrictions on developer machines).

**Compliance frameworks served:** Singapore Agentic AI (Dimension 3 — technical controls), SR 11-7 (delivery of approved configs), ISO 42001 (8.1 — operational control).

**Screenshot/demo notes:** Show terminal output of `gaal daemon status` displaying synced agents, last sync time, and any deviations. Show the before/after of a developer's .claude/ directory — before: empty or inconsistent; after: populated with org-managed files. Show the daemon auto-restoring a mandatory field that was locally modified. Show the dashboard view of "developer overrides" showing which developers changed what.

---

### 7. Configuration Delivery — Autonomous Agents

**ID:** CG-07
**Phase:** MVP
**Marketing name:** Config API (Autonomous Agent Delivery)

**One-liner:** A REST API and real-time event stream for autonomous agents to fetch approved configurations and stay in sync.

**Elevator description:** Autonomous agents — background tasks, API-driven agents, scheduled workflows — fetch their configuration from gaal at startup and subscribe to updates via Server-Sent Events. No more baking configs into Docker images or environment variables. Agents request their config by release label (`GET /config?label=prod`), receive a configuration hash for drift detection, and get notified in real-time when the label moves to a new version. Python and TypeScript SDKs make integration a few lines of code.

**The problem it solves:** Autonomous agent configurations are typically embedded in deployment artifacts — Docker images, Helm values, environment variables. Updating a config means redeploying. There's no separation between the agent's code and its behavioral configuration. Config changes and code changes are coupled. There's no way to update an agent's behavior in production without a full redeploy, and no way to verify that the running config matches what was approved.

**How it works:** `GET /api/agents/{id}/config?label=prod` returns the full configuration JSON plus a `X-Config-Hash` header (SHA-256). `GET /api/agents/{id}/config?version=v12` for pinned versions. `GET /api/agents/{id}/config/stream?label=prod` returns an SSE stream — gaal pushes events when the label moves. SDKs: Python `gaal.get_config("agent-id", label="prod")`, TypeScript `gaal.getConfig("agent-id", { label: "prod" })`. Agents include their config hash in requests for drift detection.

**Who cares:** Platform engineers (decoupling config from deployments), AI engineers (simpler config management for background agents), DevOps (no redeploy for config changes).

**Compliance frameworks served:** SR 11-7 (delivery of approved configs to production), SOC 2 (CC8.1 — controlled changes), DORA (ICT change management).

**Screenshot/demo notes:** Show a code snippet of an autonomous agent using the Python SDK — 3 lines to fetch config at startup and subscribe to updates. Show the SSE event firing when a label moves. Show the config hash being returned and used for drift detection.

---

### 7b. Configuration Delivery — User Agents

**ID:** CG-07b
**Phase:** MVP
**Marketing name:** Config Export (User Agent Delivery)

**One-liner:** Export approved configurations from gaal in native formats for Claude Desktop, Gemini, ChatGPT, and other consumer AI tools.

**Elevator description:** Business teams build AI assistants in consumer tools — Claude Desktop projects, Gemini Gems, ChatGPT custom GPTs — but those configurations live inside platform UIs with no version history, no review process, and no central record. gaal's Config Export lets organizations manage these configurations through the same registry and approval workflow used for coding and autonomous agents, then export them in each platform's native format for manual import. The governance happens in gaal. The last mile is a platform-specific export package.

**The problem it solves:** Marketing built a brand-voice assistant in Claude Desktop. Support configured a triage bot in Gemini. Nobody outside those teams knows these assistants exist. The prompts were never reviewed. When the marketing manager who built it moves to another team, the configuration walks out the door. There is no inventory, no version history, and no way for compliance to answer "what are our business teams' AI assistants configured to do?"

**How it works:** Register a user agent configuration in gaal with `category: user`. The config goes through the same versioning and approval workflow as any other agent. Once approved and assigned to a release label, export via dashboard or CLI: `gaal config export --agent brand-voice-assistant --label prod --format claude-desktop`. Export adapters produce platform-specific packages: Claude Desktop project JSON, Gemini Gem configuration, ChatGPT GPT schema, or generic JSON/YAML. Each export is logged as an audit event. When the approved config is updated, gaal flags the previous export as stale in the dashboard. The admin re-exports and re-imports. No runtime enforcement — this is visibility-focused governance for platforms that don't yet offer configuration management APIs.

**Who cares:** Business team leads (managing their team's AI assistants), compliance officers (visibility into user-facing agent configs), CISOs (knowing what AI assistants exist across the org), security teams (reviewing tool access and prompt content), HR/ops leaders (ensuring assistants persist beyond individual employees).

**Compliance frameworks served:** EU AI Act (Art. 9, 13 — transparency of AI system behavior), ISO 42001 (7.5, 8.1 — documentation and operational control), SR 11-7 (model inventory), NIST AI RMF (GOVERN, MAP).

**Screenshot/demo notes:** Show the dashboard "User Agents" view with export status indicators (Current vs. Stale). Show the export dialog with format selection (Claude Desktop, Gemini, ChatGPT, Generic). Show the CLI export command and its output. Show the audit log with export events alongside version and approval events.

---

### 8. Drift Detection

**ID:** CG-08
**Phase:** MVP
**Marketing name:** Drift Detection

**One-liner:** Automatically detects when an agent's running configuration differs from its approved baseline — and alerts you.

**Elevator description:** Configuration drift is what happens when the configuration an agent is actually using doesn't match what was reviewed and approved. gaal detects drift through three mechanisms: for autonomous agents, hash comparison on every API call or heartbeat; for coding agents, the daemon periodically compares local files against the org config; for user agents, stale-export detection flags configs that have been updated since the last export. Drifted autonomous agents can be flagged (audit mode) or blocked (enforcement mode). Every drift event is logged with the approved version, the detected hash, and deviation details.

**The problem it solves:** This is the core governance failure gaal exists to prevent. An engineer updates a prompt. A deployment script overwrites a config. A developer modifies a mandatory rule locally. In every case, the agent's behavior has changed from what was approved — silently. Nobody knows until something breaks, a customer complains, or an auditor asks. In banking, this is a model governance finding under SR 11-7. In any organization, it's a regression nobody saw coming.

**How it works:** Autonomous agents: present config hash in request headers or virtual key metadata. gaal compares against the hash for the agent's active release label. Mismatch → drift event created. Two enforcement modes: `audit` (proceed, flag, alert) or `block` (reject with 403 Configuration Drift Detected). Coding agents: daemon computes hash of local config files, reports to gaal. Mandatory field deviations → alert + auto-restore. Recommended field deviations → logged, visible in dashboard, not reverted. Drift events include: `{agent_id, category, environment_or_developer, approved_version, detected_hash, deviation_details, first_seen_at, last_seen_at}`.

**Who cares:** Compliance officers (this is the #1 regulatory control for AI agents), risk managers (drift = uncontrolled risk), CISOs (visibility into unauthorized changes), platform engineers (catching deployment issues).

**Compliance frameworks served:** EU AI Act (Art. 9, 61), NIST AI RMF (MEASURE), ISO 42001 (9.1, 10.1), SR 11-7, DORA, SOC 2 (CC7.1, CC9.2), ISO 27001 (A.8.9, A.8.16), Singapore Agentic AI, OSTP Blueprint, UK AI Principles, HIPAA — **11 of 12 frameworks**.

**Screenshot/demo notes:** Show the governance dashboard with a red "drift detected" badge on an agent. Click into the drift event to see: approved version vs. detected hash, which fields diverged, first/last seen timestamps. Show the audit mode vs. block mode toggle. For coding agents, show the developer override report — which developers changed which recommended fields.

---

### 9. Bounded Customization

**ID:** CG-09
**Phase:** MVP
**Marketing name:** Bounded Customization (Override Policy)

**One-liner:** Set which parts of the configuration are mandatory (enforced, cannot be overridden) and which are recommended (defaults that developers can customize).

**Elevator description:** Not every configuration field needs the same level of control. gaal's override policy lets organizations draw the line: mandatory fields (tool allowlists, model bindings, security hooks, compliance rules) are enforced by the daemon and cannot be changed locally. Recommended fields (temperature, code style rules, skills) are deployed as defaults — developers can override them, but every override is logged and visible to the team. This balances organizational control with developer autonomy.

**The problem it solves:** A binary choice between "lock everything down" and "let developers do whatever they want" doesn't work. Locking everything down kills developer productivity and generates workarounds. Full freedom means no governance. Teams need a middle ground: enforce the things that matter for compliance and security, let developers customize the things that are personal preference or context-dependent, and maintain visibility into all of it.

**How it works:** Each agent configuration includes an `override_policy` field: `mandatory: [tool_allowlist, model_binding, hooks.security, rules.compliance]` and `recommended: [sampling.temperature, context_config, rules.code_style, skills]`. The daemon enforces mandatory fields — if a developer modifies a mandatory field locally, the daemon restores the org version on next sync. Recommended fields are written as defaults; if overridden, the daemon reports the deviation to gaal but does not revert it. The override policy itself is part of the configuration and goes through the approval workflow. The dashboard shows a per-developer override report.

**Who cares:** Engineering leaders (balance control and developer productivity), security teams (enforce critical restrictions), platform engineers (manage what's locked vs. flexible), developers (know what they can and can't customize).

**Compliance frameworks served:** Singapore Agentic AI (Dimension 3 — tool guardrails), SR 11-7 (controlled environment), EU AI Act (Art. 9 — risk mitigation measures).

**Screenshot/demo notes:** Show the override policy configuration for an agent — mandatory and recommended fields clearly separated. Show a developer's `gaal daemon policy` output listing what's locked vs. overridable. Show the dashboard "developer overrides" report with a table of developer names, overridden fields, and override values.

---

### 10. One-Click Rollback

**ID:** CG-10
**Phase:** MVP
**Marketing name:** One-Click Rollback

**One-liner:** Revert any agent to a previous approved configuration in one click — with full audit trail.

**Elevator description:** When a configuration change causes a regression, gaal lets you roll back to any previous approved version instantly. The rollback creates a new version (with a rollback annotation) and goes through the normal approval workflow — because rollbacks should be as auditable as any other change. For incident response, agents can be configured for immediate rollback with a mandatory incident comment, bypassing the cooling-off period but not the audit trail.

**The problem it solves:** Reverting an agent configuration today means manually finding the previous version (if it was saved), re-editing files or environment variables, redeploying, and hoping nothing was missed. There's no "undo" button. The process is slow, error-prone, and undocumented. During an incident, speed matters — but so does the audit trail.

**How it works:** UI: select agent → select target version → click rollback. API: `POST /api/agents/{id}/rollback` with target version. gaal creates a new version identical to the target, annotated as a rollback, and submits it through the configured approval workflow. If `immediate_rollback` is enabled (configurable per agent for incident response), the version deploys immediately with a mandatory incident comment. Post-rollback, drift detection auto-reconciles — all agents pick up the rolled-back version on next sync. CLI: `gaal config rollback --agent credit-memo-agent --to v3 --reason "v4 caused regression"`.

**Who cares:** AI engineers (fast recovery from bad changes), platform engineers (incident response), compliance officers (rollbacks are audited changes, not exceptions to governance), risk managers (incident remediation).

**Compliance frameworks served:** NIST AI RMF (MANAGE — MG-2.4 deactivation mechanisms), SOC 2 (A1.2 — recovery), DORA (ICT response and recovery), ISO 42001 (10.1 — corrective action).

**Screenshot/demo notes:** Show the rollback button on an agent's version history. Show the confirmation dialog with the target version, a diff preview (what will change), and the incident comment field. Show the post-rollback audit log entry.

---

### 11. Audit Logs

**ID:** CG-11
**Phase:** MVP
**Marketing name:** Audit Logs

**One-liner:** Immutable, append-only logs for every configuration operation — who did what, when, and to which agent.

**Elevator description:** gaal logs every configuration operation: create, update, approve, reject, label change, rollback, drift event, policy violation. Logs are immutable and append-only — once written, they cannot be modified or deleted. Each entry includes the actor's identity, timestamp, the agent affected, and the operation details. Logs can be exported as CSV, JSON, or formatted PDF evidence packages. Enterprise deployments support sinking to S3, Splunk, Sentinel, or any SIEM.

**The problem it solves:** Reconstructing "what happened to this agent over the last 12 months" from infrastructure logs (CloudWatch, Datadog, Splunk) requires an engineer to manually query, correlate, and interpret raw HTTP logs. The result is incomplete, slow, and expensive. Regulators want a clear, agent-level audit trail — not a raw log dump. Most organizations cannot produce this today.

**How it works:** JSON-structured log entries: `{event_type, actor_id, agent_id, version_id, timestamp, details}`. Event types: `config_created`, `config_updated`, `version_submitted`, `version_approved`, `version_rejected`, `label_moved`, `rollback_initiated`, `drift_detected`, `drift_resolved`, `policy_violation`, `override_detected`. Sinks: stdout, file, S3 (Enterprise). Retention: 90 days default, configurable to 7 years for Enterprise. Meta-audit: compliance officer actions in the dashboard (views, exports, approvals) are logged separately in a higher-privilege store.

**Who cares:** Compliance officers (primary consumers — this is the audit trail regulators ask for), auditors (read-only access to complete history), risk managers (investigation and evidence), platform engineers (debugging and incident response).

**Compliance frameworks served:** EU AI Act (Art. 12), NIST AI RMF (MANAGE), ISO 42001 (7.5, 9.2), SR 11-7, DORA, SOC 2, ISO 27001 (A.8.15), Singapore Agentic AI, China AI Regulations, HIPAA — **10 of 12 frameworks**.

**Screenshot/demo notes:** Show the audit log view in the compliance dashboard — filterable timeline of events with agent name, event type, actor, and timestamp. Click an event to expand details. Show the export flow: select filters → export as CSV → downloaded file with SHA-256 hash footer. Show the meta-audit: "Compliance Officer viewed audit log for credit-memo-agent on 2026-04-01."

---

### 12. OPA Policy Engine

**ID:** CG-12
**Phase:** MVP (config validation) / Phase 1 (runtime evaluation)
**Marketing name:** Policy Engine (OPA/Rego)

**One-liner:** Define governance rules as code — validate configurations, route approvals, and enforce boundaries using the same policy language your infrastructure already runs.

**Elevator description:** gaal uses Open Policy Agent (OPA) and Rego as its policy engine. If your bank already runs OPA for Kubernetes admission control, you already know the language. Write policies that validate configurations on submission ("autonomous agents must have temperature ≤ 0.5"), route approvals based on risk tier ("high-risk agents require 2 approvers"), restrict tool access ("trading team agents cannot write to the payments MCP server"), and enforce override boundaries ("model binding is always mandatory"). Policies are version-controlled, reviewable, and deterministic — auditors can inspect the exact policy in effect at any point in time.

**The problem it solves:** Governance rules today live in wiki pages, runbooks, and tribal knowledge. They're enforced by human memory during reviews — or not enforced at all. When rules change, there's no systematic way to validate that all existing agent configurations still comply. Policy-as-code makes rules explicit, testable, and automatically enforced.

**How it works:** Policies written in Rego. Stored and versioned in gaal alongside agent configurations. Evaluated at four points: config submission (validation), label assignment (deployment policy), daemon sync (override boundaries), and runtime (Phase 1 — gateway-layer enforcement). Example policy: `deny[msg] { input.config.category == "autonomous"; input.config.sampling.temperature > 0.5; msg := "Production autonomous agents must have temperature ≤ 0.5" }`. Policy violations surface in the compliance dashboard. gaal ships with starter policy bundles for common scenarios.

**Who cares:** Risk managers (policy authoring and enforcement), platform engineers (operational guardrails), compliance officers (auditable policy history), security teams (security policy enforcement).

**Compliance frameworks served:** EU AI Act (Art. 9, 17), NIST AI RMF (GOVERN), ISO 42001 (5.2, 6.1, 8.1), SR 11-7, DORA, ISO 27001 (A.5.1), Singapore Agentic AI, UK AI Principles, China AI Regulations — **9 of 12 frameworks**.

**Screenshot/demo notes:** Show a Rego policy in the dashboard's policy editor — syntax highlighted, with a "test" button that validates it against existing configs. Show a config submission being blocked by a policy violation with a clear error message. Show the policy evaluation history for an agent.

---

### 13. Agent Inventory

**ID:** CG-13
**Phase:** MVP
**Marketing name:** Agent Inventory

**One-liner:** A complete, always-current inventory of every AI agent in your organization — with risk tier, owner, compliance status, and activity metrics.

**Elevator description:** gaal's agent inventory is the organizational answer to "how many AI agents do we have, what are they doing, and are they governed?" Every registered agent appears in a sortable, filterable table with its name, owning team, risk tier, configuration status (approved/pending/drift), last approved date, last review date, review due date, activity metrics (tool calls in last 30 days), and violation count. Color-coded health: green = compliant, yellow = pending review, red = drift or violation. This is the first screen a CISO or compliance officer sees.

**The problem it solves:** Most organizations have no idea how many AI agents they're running. Agents are created by individual developers, deployed across multiple environments, and never centrally tracked. There's no inventory, no ownership mapping, and no way to know which agents have been reviewed recently. Every compliance framework starts with "inventory your AI systems" — and most organizations can't.

**How it works:** Every agent registered in gaal appears in the inventory. Metadata fields (risk_tier, owner_team, tags) are part of the configuration. The inventory view aggregates: current config status, last approval date, last compliance review date, configurable review cadence (with "overdue" flagging), 30-day tool call count, 30-day violation count. Filterable by team, risk tier, category (coding/autonomous), config status, and tags. Clicking an agent opens the full detail view with version history, drift events, and approval timeline.

**Who cares:** CISOs (organizational AI posture at a glance), compliance officers (knowing which agents need attention), risk managers (prioritizing reviews by risk tier), engineering leaders (understanding the team's AI footprint).

**Compliance frameworks served:** EU AI Act (Art. 9), NIST AI RMF (MAP), ISO 42001 (4.1, 6.2), SR 11-7, DORA, Singapore Agentic AI, OSTP Blueprint, HIPAA — **8 of 12 frameworks**.

**Screenshot/demo notes:** Show the inventory grid view with 10–15 agents. Color-coded status badges. Filter by "risk_tier: high" to narrow to 3 agents. Show the summary tiles at the top: total agents, % approved, % with active drift, agents overdue for review.

---

### 14. Model Risk Reports

**ID:** CG-14
**Phase:** Phase 1
**Marketing name:** Model Risk Reports

**One-liner:** One-click regulatory reports for any agent — change history, approvals, drift events, and policy evaluations in a format regulators accept.

**Elevator description:** gaal generates on-demand model risk reports for individual agents, formatted for regulatory submission. Select an agent, a date range, and which sections to include: executive summary, configuration change history with diffs, approval and rejection log, drift event log, developer override summary, tool access history, model binding history, policy violation summary, and usage statistics. Output as PDF (formatted for examiners) or JSON (for programmatic use). Schedule recurring reports for periodic model validation cycles.

**The problem it solves:** When a regulator asks "show me every change to this agent's configuration in the last 12 months, who made it, and who approved it," the answer today requires manual log archaeology across multiple systems. It takes days. During a regulatory exam, it needs to happen in hours. Compliance officers cannot produce this evidence without engineering help.

**How it works:** Dashboard: select agent → select date range → check sections to include → generate. API: `POST /api/agents/{id}/reports` with parameters. PDF output includes headers, section breaks, executive summary, and a cover page with generation metadata. JSON output mirrors the same structure for programmatic consumption. Reports can be scheduled: weekly, monthly, quarterly delivery via email or S3 bucket. Report generation target: <30 seconds for a 90-day, all-sections report.

**Who cares:** Compliance officers (primary consumer — this is what goes to regulators), model risk officers (SR 11-7 documentation), auditors (evidence for certifications), CISOs (board-level AI governance reporting).

**Compliance frameworks served:** EU AI Act (Art. 11, 72), NIST AI RMF (MANAGE), ISO 42001 (9.3), SR 11-7, HIPAA — **5 of 12 frameworks** (but the most important ones for enterprise sales).

**Screenshot/demo notes:** Show the report configuration screen with agent selected, date range set, and section checkboxes. Show a generated PDF preview: cover page with gaal branding and metadata, executive summary, then a change history section with version entries showing diffs, approvers, and timestamps. Emphasize: "one click, examiner-ready."

---

### 15. Compliance Dashboard

**ID:** CG-15
**Phase:** Phase 1
**Marketing name:** Compliance Dashboard

**One-liner:** A self-service control plane for compliance officers — audit logs, policy violations, agent inventory, and report generation without filing engineering tickets.

**Elevator description:** The compliance dashboard is gaal's control plane for non-engineers. It gives compliance officers, risk managers, and CISOs direct access to the governance summary (agent count, approval rate, drift alerts, violation trends), a searchable audit log with filters (no SQL required), a policy violations view with acknowledgment/resolution workflow, a configuration review queue, the agent inventory, and model risk report generation. Everything a compliance team needs to monitor AI agent governance — without asking engineering for help.

**The problem it solves:** Compliance officers today have no agency. They rely entirely on engineers to surface information about AI agent behavior. Investigating an incident means filing a ticket, waiting for an engineer to extract logs, receiving a CSV dump, and manually interpreting it. This creates a control environment gap — the people accountable for governance cannot independently verify that controls are working.

**How it works:** Multi-section dashboard: governance summary (tiles + alert feed + agent health matrix), audit log (filterable by agent, team, event type, outcome, time range, tool, model, risk tag — all dropdown/free-text, no query language), policy violations (violation cards with acknowledge/resolve workflow, escalation after 7 days), config review queue (pending changes with inline diff, approve/reject buttons), agent inventory (CG-13), and model risk reports (CG-14). Role-based access: compliance officers can view/approve/export but not modify configurations. Performance: <2 second page load, <3 second audit log queries over 1M events.

**Who cares:** Compliance officers (primary user — the entire dashboard is designed for them), CISOs (executive summary view), risk managers (policy violation tracking), auditors (read-only access for evidence review).

**Compliance frameworks served:** EU AI Act (Art. 14 — human oversight), NIST AI RMF (GOVERN, MANAGE), ISO 42001 (9.1, 9.3), SR 11-7, SOC 2, Singapore Agentic AI, UK AI Principles — **7 of 12 frameworks**.

**Screenshot/demo notes:** Show the governance summary home page with tiles (total agents, approved %, drift alerts, violations), the alert feed, and the color-coded agent health matrix. Show a compliance officer filtering the audit log by a specific agent and time range, then exporting as CSV. Show the review queue with a pending change and the inline diff. This is the highest-impact demo screen for enterprise sales.

---

### 16. RBAC

**ID:** CG-16
**Phase:** Phase 1
**Marketing name:** Role-Based Access Control

**One-liner:** Control who can view, edit, approve, and deploy agent configurations — mapped to your existing identity provider.

**Elevator description:** gaal's RBAC system defines who can do what, at every level: org, team, and resource. Built-in roles include org admin, team admin, team member, compliance reviewer, risk manager, and auditor (read-only). Permissions cover read, write, execute, approve, and admin actions across all gaal resources. Integrates with your existing identity provider — Entra ID, Okta, or LDAP — so you don't maintain a separate user directory. Entra groups map to gaal roles. Custom roles are supported for organizations with specific governance structures.

**The problem it solves:** Without granular access control, anyone who can access gaal can modify any agent's configuration. That's a security risk and a compliance failure — separation of duties requires that submitters cannot approve their own changes, and compliance officers have different permissions than engineers. Enterprises also need their existing IdP to be the source of truth for identity — not another user database.

**How it works:** Hierarchical model: organization → team → member. Resources: agents, configs, labels, policies, audit logs, reports, virtual keys. Permissions: read, write, execute, approve, admin. Built-in roles: `org:admin` (full access), `team:admin` (team-scoped admin), `team:member` (submit changes, read team agents), `compliance:reviewer` (view audit logs, approve/reject, generate reports), `risk:manager` (configure policies, manage alerts), `auditor` (read-only everything). IdP integration: SAML (Entra, Okta), OIDC, LDAP. Group-to-role mapping. Custom roles (Phase 1): define arbitrary permission sets.

**Who cares:** CISOs (separation of duties, access control), platform engineers (IdP integration), compliance officers (appropriate access without over-permission), IT administrators (identity management).

**Compliance frameworks served:** EU AI Act (Art. 14), NIST AI RMF (GOVERN), ISO 42001 (4.2), SR 11-7, SOC 2 (CC6.1), ISO 27001 (A.5.2), Singapore Agentic AI, UK AI Principles, HIPAA — **9 of 12 frameworks**.

**Screenshot/demo notes:** Show the role management screen with built-in roles and their permission matrices. Show the IdP integration setup — connecting Entra ID and mapping groups to roles. Show a permission-denied scenario: an engineer tries to approve their own change and is blocked.

---

### 17. Alerting

**ID:** CG-17
**Phase:** Phase 1
**Marketing name:** Alerting & Notifications

**One-liner:** Real-time alerts for drift, policy violations, review deadlines, and anomalous activity — delivered to Slack, Teams, email, or any webhook.

**Elevator description:** gaal sends configurable alerts when governance events occur: drift detected, policy violation, configuration change awaiting approval, change rejected, budget threshold hit, review overdue, anomalous tool call volume, or unresolved violation escalation. Alerts route to the right people based on event type, team ownership, and risk tier. Channels include email, Slack (channel or DM), Microsoft Teams, and generic webhooks (PagerDuty, OpsGenie, SIEM). High-risk agents can route to additional recipients automatically.

**The problem it solves:** Governance without alerting is governance after the fact. Compliance officers shouldn't have to check the dashboard every day to discover that an agent drifted three days ago. Risk managers need to know immediately when a high-risk agent's configuration changes. Engineers need to know when their change request was approved or rejected. Without proactive notifications, governance becomes a periodic review exercise rather than a continuous control.

**How it works:** 8 alert types: drift_detected, policy_violation, config_change_submitted, config_rejected, budget_alert (80% of monthly LLM budget), review_overdue (N days since last review), anomalous_activity (>2σ from 30-day baseline), violation_unresolved_7d. Routing: event type → alert type → configured recipients. Team tag on agent → team-specific channel. Risk tier → escalation policy (high-risk agents add extra recipients). Channels: email (individual or group), Slack (webhook), Teams (webhook), generic webhook (JSON payload).

**Who cares:** Compliance officers (drift and violation alerts), risk managers (high-risk agent monitoring), AI engineers (approval notifications, anomaly alerts), engineering leaders (organizational overview).

**Compliance frameworks served:** EU AI Act (Art. 61 — post-market monitoring), ISO 42001 (9.1 — monitoring), SR 11-7 (ongoing monitoring and escalation), SOC 2 (CC7.2 — anomaly monitoring).

**Screenshot/demo notes:** Show the alert configuration screen for an agent: selecting alert types, channels, and recipients. Show a Slack notification for a drift event — clean formatting with agent name, drift details, and a link to the dashboard. Show the escalation flow: violation created → 7 days pass → escalation alert fires.

---

### 18. Evidence Export

**ID:** CG-18
**Phase:** Phase 1
**Marketing name:** Evidence Export

**One-liner:** Export audit logs, reports, and governance data as tamper-evident evidence packages for regulatory submissions and audits.

**Elevator description:** When a regulator or auditor asks for evidence, gaal produces it in one click. Export filtered audit logs as CSV or JSON. Generate formatted PDF evidence packages with a cover page (case title, date range, exported by, gaal version, SHA-256 hash of the data for integrity verification). Model risk reports (CG-14) are themselves evidence artifacts. All exports are designed to be attached directly to compliance assessments — whether in Microsoft Purview, a GRC platform, or a regulatory filing.

**The problem it solves:** Producing evidence for auditors is manual, slow, and error-prone. Engineers extract logs, compliance officers format them, and nobody can prove the data wasn't tampered with between extraction and submission. The process takes days and involves multiple handoffs. During a regulatory examination, this needs to happen in hours — and the evidence needs to be verifiable.

**How it works:** Dashboard: filter audit log → click export → select format (CSV, JSON, or PDF evidence package). PDF packages include: cover page (case title, date range, query parameters, exported by, gaal version, export timestamp), filtered results formatted as a table, and a SHA-256 hash footer computed over the exported data for integrity verification. Exports include a machine-readable manifest alongside the human-readable document. Model risk reports (CG-14) are a special case of evidence export — pre-formatted for specific regulatory contexts (SR 11-7, EU AI Act). All export actions are logged in the meta-audit trail.

**Who cares:** Compliance officers (primary consumer — this is what they hand to regulators), auditors (verifiable evidence), legal teams (litigation hold and discovery), risk managers (documentation for risk assessments).

**Compliance frameworks served:** EU AI Act (Art. 11, 72), SR 11-7, DORA (incident reporting documentation), ISO 42001 (9.2 — audit evidence), SOC 2, HIPAA, China AI Regulations (filing documentation) — **7 of 12 frameworks**.

**Screenshot/demo notes:** Show the export flow from the audit log: apply filters → click export → format selection → download. Show the PDF evidence package: cover page with gaal branding and metadata, then the data, then the SHA-256 hash footer. Show the meta-audit entry: "Compliance Officer exported audit log for credit-memo-agent (2026-01-01 to 2026-03-31) on 2026-04-01."

---

## Quick Reference: Capability Summary Table

| # | Marketing Name | Phase | One-Liner | Primary Persona |
|---|---|---|---|---|
| 1 | Agent Configuration Registry | MVP | Single versioned store for all agent configs | Platform Engineer |
| 2 | Immutable Version History | MVP | Every change creates a permanent version | Compliance Officer |
| 3 | Semantic Diff | MVP | See exactly what changed, field by field | AI Engineer |
| 4 | Approval Workflows | MVP | Review gates from none to multi-approver | Risk Manager |
| 5 | Release Labels | MVP | Named deployment targets (prod, staging, dev) | Platform Engineer |
| 6 | gaal Daemon | MVP | Syncs configs to coding agents on dev machines | Platform Engineer |
| 7 | Config API | MVP | REST API + SSE for autonomous agents | AI Engineer |
| 8 | Drift Detection | MVP | Catches when running config ≠ approved config | Compliance Officer |
| 9 | Bounded Customization | MVP | Mandatory vs. recommended override policy | Engineering Leader |
| 10 | One-Click Rollback | MVP | Revert to any previous approved version | AI Engineer |
| 11 | Audit Logs | MVP | Immutable logs for every config operation | Compliance Officer |
| 12 | Policy Engine (OPA/Rego) | MVP/P1 | Governance rules as code | Risk Manager |
| 13 | Agent Inventory | MVP | Complete org-wide AI agent inventory | CISO |
| 14 | Model Risk Reports | Phase 1 | One-click regulatory reports | Compliance Officer |
| 15 | Compliance Dashboard | Phase 1 | Self-service control plane for compliance | Compliance Officer |
| 16 | RBAC | Phase 1 | Who can view, edit, approve, deploy | CISO |
| 17 | Alerting & Notifications | Phase 1 | Real-time alerts for governance events | Risk Manager |
| 18 | Evidence Export | Phase 1 | Tamper-evident exports for regulators | Compliance Officer |

---

## Capability Groupings for Website/Marketing

For website information architecture, the 18 capabilities group naturally into five themes:

**Theme 1 — Build & Manage (the toolkit)**
CG-01 Agent Configuration Registry, CG-02 Immutable Version History, CG-03 Semantic Diff, CG-05 Release Labels

**Theme 2 — Review & Approve (the governance gate)**
CG-04 Approval Workflows, CG-09 Bounded Customization, CG-12 Policy Engine (OPA/Rego)

**Theme 3 — Deploy & Sync (delivery to agents)**
CG-06 gaal Daemon (Coding Agents), CG-07 Config API (Autonomous Agents)

**Theme 4 — Monitor & Detect (continuous governance)**
CG-08 Drift Detection, CG-10 One-Click Rollback, CG-13 Agent Inventory, CG-17 Alerting & Notifications

**Theme 5 — Report & Prove (compliance evidence)**
CG-11 Audit Logs, CG-14 Model Risk Reports, CG-15 Compliance Dashboard, CG-16 RBAC, CG-18 Evidence Export

---

## Related Documents

- [AI Compliance Framework Alignment](/legal/compliance/ai-compliance-framework-alignment.md) — Control-by-control mapping of all 18 capabilities to 12 global regulatory frameworks
- [Microsoft GRC Framework Mapping](/legal/compliance/microsoft-grc-framework-mapping.md) — Microsoft-specific integration analysis
- [Marketing Strategy, Messaging & Positioning](/go-to-market/marketing/strategy-messaging-positioning.md) — Overall GTM strategy, messaging, and content plan
- [Global PRD](/product/roadmap/PRD-global.md) — Product requirements and phased roadmap
- [Agent Config Governance PRD](/product/roadmap/PRD-agent-config-governance.md) — Detailed feature specifications for CG-01 through CG-12
- [Compliance Dashboard PRD](/product/roadmap/PRD-compliance-dashboard.md) — Detailed specifications for CG-14, CG-15, CG-17, CG-18
- [IAM PRD](/product/roadmap/PRD-iam.md) — Detailed specifications for CG-16
