# gaal Marketing Strategy, Messaging & Positioning

**Author:** Guillaume Moigneu
**Status:** Draft v2.0 (post-ExCom review)
**Date:** April 2026

---

## 1. Market context

The AI agent governance market is forming now. Gartner estimates the AI gateway TAM at $3.1B in 2025, growing to $8.7B by 2030. The configuration governance sub-segment, where gaal sits, is greenfield. No competitor in the AI gateway or agent security space has addressed it.

Organizations are deploying three types of AI agents: coding agents (Claude Code, Cursor, Codex) that write software on developer machines, background agents that run workflows autonomously in cloud infrastructure, and user agents (Claude Desktop projects, Gemini Gems, ChatGPT custom GPTs) that business teams configure for tasks like brand copywriting, customer triage, and internal reporting. All three types rely on toolkits (tools, skills, MCPs, prompts, model configurations) that determine their behavior. The market has converged on two solved problems: access control at the tool level (which agent can call which tool) and runtime guardrails (content filtering, rate limiting). Nobody has built the system of record for agent toolkits, meaning the versioning, approval, delivery, and drift detection layer that regulated enterprises need before they'll put agents into production.

That gap is gaal's entire positioning.

---

## 2. Positioning

### 2.1 Positioning statement

**gaal is the platform where teams build, share, and deploy their AI agent toolkits -- tools, skills, MCPs, prompts, and model configurations -- and make sure what's running matches what was approved.**

Two value pillars, weighted equally:

1. **For engineering and business leaders:** stop every team from maintaining their own bespoke agent setup. Build shared toolkits, deploy them across coding agents, background agents, and user-facing assistants in Claude Desktop and Gemini.
2. **For security and compliance teams:** get a system of record with audit trails, policy enforcement, approval workflows, and drift detection.

Same product, two entry points. The engineering value drives adoption; the compliance value drives enterprise revenue.

### 2.2 Positioning by audience

**For engineering leaders (CTOs, Heads of Engineering, VP Platform):**
Right now, every developer on your team has their own agent setup. Their own tools, skills, MCPs, prompts, model choices. For coding agents, there is no shared toolkit. For background agents, there is no standard for what they can access or how they behave. Your business teams are building assistants in Claude Desktop and Gemini with no review process at all. No onboarding baseline. No way to know what's running across the team. gaal fixes this. Build shared toolkits, deploy them to coding agents, background agents, and user agents alike, and manage everything with the same rigor as code. New hires get the team baseline on day one. Built-in adapters for Claude Code, Cursor, and Codex. Export adapters for Claude Desktop, Gemini, and ChatGPT. Open-source community edition to evaluate, SaaS Pro for teams, Enterprise for regulated environments.

**For CISOs / Security leaders:**
gaal gives you a single inventory of every AI agent in your organization, what toolkit each one is running, who approved it, and whether it has drifted from the approved baseline. Policy-as-code (OPA/Rego) enforces your rules. Integrates with your existing identity provider (Entra ID, Okta) and SIEM (Sentinel, Splunk).

**For compliance officers / model risk officers:**
gaal produces the audit trail and model risk reports that regulators ask for: who changed what, when, who approved it, and whether the agent in production matches the approved version. One-click evidence export for SR 11-7, EU AI Act, ISO 42001, and DORA assessments. Self-service compliance dashboard. No engineering tickets required.

**For platform engineers / AI engineers:**
gaal is where you build and deploy agent toolkits: the tools, skills, MCPs, prompts, and model configs that define how an agent behaves. Version them, review changes, roll back when something breaks. Built-in adapters for Claude Code, Cursor, and Codex. SDKs for background agents. Export adapters for user agents in Claude Desktop and Gemini. Drift detection out of the box.

### 2.3 Category creation

gaal is creating the **Agent Configuration Governance** category. This is distinct from:

- AI gateways (Portkey, LiteLLM, Cloudflare), which route and proxy LLM API calls
- MCP gateways (Kong, Lunar MCPX), which control tool-level access
- AI guardrails (Lakera, Azure AI Content Safety), which filter content at runtime
- AI security platforms (Palo Alto Prisma AIRS, Skyflow), which manage data security and posture

gaal manages the toolkits that determine how each agent behaves, makes sure each toolkit was reviewed and approved, delivers it to agents (whether on developer machines, in cloud infrastructure, or in consumer AI tools like Claude Desktop and Gemini), and detects when reality drifts from the approved baseline.

**Category durability note:** This position is currently unoccupied, but the moat is shallow. Gateway players or cloud providers could add surface-level config versioning within 6 months. gaal's durable advantage comes from depth: OPA-based policy enforcement, compliance framework mappings, drift detection, and an open-source community. The messaging should emphasize focus and depth ("purpose-built for this problem") rather than exclusivity ("nobody else does this").

---

## 3. Core messaging

### 3.1 Tagline

**Primary (dev-facing, website hero, GitHub, social):** "Build, share, and deploy your AI agent toolkits, as a team."

**Enterprise variant (sales decks, compliance docs, whitepapers):** "Agent configuration governance for the enterprise."

The primary tagline uses three verbs that map to the actual gaal workflow: build the toolkit (tools, skills, MCPs, prompts, model configs), share it with the team, deploy it to agents. "Toolkits" is concrete and dev-native, avoids confusion with knowledge bases or context engineering. The enterprise variant swaps in "governance" for compliance-facing contexts.

### 3.1b 30-second elevator pitch (general audience)

"Companies are rolling out three kinds of AI agents: coding agents that write software, background agents that run workflows, and user agents that business teams build in Claude Desktop and Gemini. Nobody controls how any of them are configured. Every developer picks their own tools. Every marketing manager writes their own prompts. No shared library, no review, no visibility. gaal is where teams manage all of that. Build toolkits, share them, deploy them. Engineering gets consistency. Business teams get reviewed configs. Compliance gets the audit trail."

### 3.2 Key messages

**Message 1 -- The fragmentation problem (lead message):**
Every developer on your team has their own agent toolkit. Their own tools, skills, MCPs, prompts, model choices. Coding agents, background agents, and user agents in Claude Desktop and Gemini are all configured independently, with no shared baseline. There is no team library. No onboarding standard. No way for a manager to answer "what are my agents actually running right now?" This is the default state of every organization deploying AI agents today, and it gets worse with every new hire, every new agent, and every business team that starts building assistants. gaal replaces this fragmentation with shared toolkits, review workflows, and a single inventory of what's deployed where.

**Message 2 -- Configuration drift is a consequence of fragmentation:**
When toolkits are fragmented and unmanaged, they drift. An engineer updates a prompt. Nobody reviews it. The agent's behavior shifts. In a regulated bank, this is a model governance failure. In any organization, it is a regression nobody saw coming. gaal detects drift automatically and makes every toolkit change visible, reviewable, and auditable.

**Message 3 -- Purpose-built for this problem:**
The market has built access control and runtime guardrails. Toolkit governance, the versioning, approval, delivery, and drift detection layer for agent configurations, is a different problem. Gateway players treat it as a feature. gaal is purpose-built for it. OPA-based policy enforcement, compliance framework mappings (SR 11-7, EU AI Act, ISO 42001, DORA), drift detection, and an open-source community all focused on this single problem.

**Message 4 -- Built for organizations with active compliance mandates:**
gaal's architecture maps directly to SR 11-7 (banking model risk), EU AI Act Article 96, ISO 42001, NIST AI RMF, and DORA. Audit trails, approval workflows, and model risk reporting are core to the product, not afterthoughts. Compliance officers have their own dashboard. They don't file tickets with engineering. One-click evidence export for assessments. See the [full control mapping](/legal/compliance/microsoft-grc-framework-mapping.md).

**Message 5 -- Fits your existing stack:**
gaal doesn't replace anything. It plugs into your identity provider (Entra ID, Okta), your SIEM (Sentinel, Splunk), your compliance tools (Microsoft Purview Compliance Manager), and your CI/CD pipeline (GitHub Actions, GitLab CI). The Microsoft GRC framework defines controls for AI governance; gaal is what makes those controls pass.

**Message 6 -- Open source first:**
gaal Community is a fully functional governance platform, not a demo. Apache 2.0 licensed. Self-hosted. Try it with `docker run` in under 5 minutes. The open-source edition is the real product. This is how you earn developer trust.

### 3.3 Objection handling

| Objection | Response |
|---|---|
| "We don't need this yet" / inaction | This is the #1 objection. Teams manage agent toolkits via wikis, Slack threads, and individual dotfiles. It works with 3 developers. It breaks at 10. It becomes a compliance liability at 50. The question is not whether you'll need toolkit governance, but whether you want to build it from scratch under pressure later or adopt a purpose-built tool now. The open-source edition is free. |
| "We already use Portkey / LiteLLM / Kong" | Good. gaal governs the configuration layer above your gateway. It tells your agents what to do; the gateway enforces how they do it. They're complementary. |
| "OPA already handles policy" | OPA is gaal's policy engine. Banks already run OPA for Kubernetes. gaal extends OPA to AI agent configurations: same language (Rego), same evaluation model, new domain. |
| "We're not regulated, why do we need this?" | Even without regulatory pressure, fragmented agent toolkits cause regressions and inconsistency. gaal gives you shared toolkits, version control, rollback, and visibility across the team. SaaS Pro starts at $45/month. |
| "We can build this internally" | You can. Most teams that start building internal config management for agents end up maintaining a bespoke system that grows more complex with every new agent. gaal is purpose-built, open-source, and maintained by a team focused on this single problem. |
| "Microsoft / AWS will build this" | Microsoft's AI governance tooling (Purview, Content Safety, Responsible AI Dashboard) addresses data governance and content filtering, not agent configuration management. AWS Bedrock AgentCore is a runtime, not a configuration governance layer. Neither has announced plans for this category. gaal fills the gap between what cloud providers offer and what enterprises need. |

---

## 4. Target segments and GTM motions

### 4.1 Segment map

| Segment | Tier | GTM Motion | Buyer | Sales Cycle | Deal Size |
|---|---|---|---|---|---|
| Individual developers / startups | Community (free) | Product-led, GitHub, DevRel | Developer | Self-serve | $0 |
| AI teams at SMB / mid-market | SaaS Pro ($9/seat/mo) | Product-led, content marketing | CTO / Head of Eng | 1–4 weeks | $45–$500/mo |
| Regulated enterprises (banking, insurance, healthcare) | Enterprise ($19/seat/mo + $30k) | Direct sales, compliance-led | VP AI Platform, CISO, Model Risk Officer | 4–9 months | $30k+ first year |

### 4.2 Community and developer motion (year 1 primary)

The open-source community edition is the growth engine. Everything else feeds from it.

Channels: GitHub (stars, issues, contributors), Discord/Slack community, DevRel content (blog, conference talks, tutorials), Hacker News / Reddit organic presence, integration partnerships (Claude Code, Cursor, Codex ecosystem documentation).

Metrics: GitHub stars (100 by July 2026, 500 by March 2027), Discord/Slack members (50 → 300), monthly active developers (100 → 1,000).

Content themes for developer audience: "How to build and share Claude Code toolkits across your team," "Configuration drift in AI agents: what it is and why it matters," "Managing coding agent toolkits at scale with gaal," "Setting up shared toolkits for background agents."

### 4.3 SaaS Pro motion (year 1 secondary)

Bottom-up PLG within organizations. Developers discover gaal via the open-source edition or content, upgrade to SaaS Pro for managed hosting and additional features. Self-serve onboarding. No sales team required.

Activation trigger: team of 5+ developers using coding agents who need shared toolkits and consistent configuration across the team.

Channels: in-product upgrade prompts, documentation, case studies, integration marketplace listings.

### 4.4 Enterprise motion (year 1 pipeline building, year 2 revenue)

Direct sales into regulated financial institutions. The buyer is the VP/Director of AI Platform or the CISO. The influencer is the Model Risk Officer or Chief Compliance Officer. Sales cycle is compliance-led: gaal needs to demonstrate that it satisfies specific regulatory requirements.

Key sales artifacts: compliance framework mapping documents (control-by-control mappings for EU AI Act, SR 11-7, ISO 42001, NIST AI RMF, DORA; the [Microsoft GRC mapping](/legal/compliance/microsoft-grc-framework-mapping.md) is the first), reference architecture diagrams (gaal deployed in Microsoft, AWS, and hybrid stacks), an enterprise deployment guide (on-prem, air-gapped, VPC; time-to-deploy target under 1 day), and demo scenarios that walk a compliance officer through a Purview assessment showing how gaal's evidence exports satisfy the AI controls.

Target verticals (priority order): banking (SR 11-7 pressure is immediate), insurance, asset management, healthcare (ISO 42001 + HIPAA), regulated government.

---

## 5. Content strategy

### 5.1 Content pillars

**Pillar 1 -- The fragmentation problem and the governance gap:**
Educational content establishing that agent toolkit fragmentation is the default state of every team deploying AI agents, and that toolkit governance is an unsolved problem. Targeted at engineering leaders and compliance teams who don't yet know the category exists. Format: blog posts, conference talks, LinkedIn thought leadership.

Example topics: "Every developer has their own agent toolkit. That's the problem." "Configuration drift in AI agents: what it is and why you can't see it." "Why AI agent access control is not enough." "What SR 11-7 means for AI agents at banks." "Coding agents and background agents need different toolkits. Both need governance."

**Pillar 2 -- Practitioner guides:**
Technical content for developers and platform engineers using gaal. Builds community, drives OSS adoption, and feeds SaaS conversion. Format: tutorials, integration guides, docs, demo videos.

Example topics: "Getting started with gaal in 5 minutes." "Building and deploying Claude Code toolkits across your org with gaal Daemon." "Writing OPA policies for agent toolkit validation." "Setting up a shared toolkit library for your AI engineering team."

**Pillar 3 -- Compliance and regulatory:**
Content for compliance officers, CISOs, and model risk officers at regulated enterprises who have active compliance mandates. Builds credibility and drives enterprise pipeline. Format: framework mapping documents, whitepapers, webinars with compliance practitioners.

Example topics: the Microsoft GRC mapping document (already written), equivalent mappings for AWS and GCP security stacks, "How to prepare for EU AI Act Article 96 with gaal," "SR 11-7 compliance for AI agents: a practical guide."

**Pillar 4 -- Market perspective:**
Opinionated commentary on the AI governance market, competitive landscape, and where config governance fits in the stack. Format: blog posts, LinkedIn, conference keynotes.

Example topics: "The AI governance stack is forming. Here's what's missing." "Why AI gateways alone don't solve the governance problem." "Agent toolkit management is the new infrastructure-as-code."

### 5.2 Content calendar (pre-launch to MVP)

| Timeframe | Content | Channel | Goal |
|---|---|---|---|
| April-May 2026 | "The toolkit fragmentation problem" blog series (2-3 posts) | Blog, LinkedIn, HN | Establish the problem space, build pre-launch audience |
| May 2026 | Microsoft GRC framework mapping (publish publicly) | Blog, LinkedIn | Enterprise credibility, SEO for "AI agent governance + Microsoft" |
| June 2026 | "Building gaal" development log (1–2 posts) | Blog, GitHub, Discord | Build community anticipation, attract early contributors |
| July 2026 | MVP launch announcement | Blog, GitHub, HN, Product Hunt, LinkedIn, Discord | GitHub stars, early SaaS signups |
| July 2026 | Getting started tutorial + integration guides | Docs, blog, YouTube | Developer onboarding, activation |
| Aug–Sep 2026 | Practitioner guides (Claude Code, Cursor, Codex) | Blog, docs | OSS adoption, SaaS conversion |
| Sep–Oct 2026 | SR 11-7 compliance whitepaper | Blog, gated PDF for enterprise leads | Enterprise pipeline |
| Q4 2026 | Conference talks (target: AI Engineer Summit, KubeCon) | In-person, YouTube recordings | Brand, enterprise visibility |

---

## 6. Competitive positioning summary

gaal does not compete head-to-head with existing players. It occupies an adjacent, unclaimed position.

| Competitor Category | Relationship to gaal | Messaging |
|---|---|---|
| LLM Gateways (Portkey, LiteLLM, Cloudflare) | Complementary. gaal governs toolkits, gateways route traffic. | "gaal tells your agents what to do; your gateway handles how" |
| MCP Gateways (Kong, Lunar MCPX) | Complementary. gaal manages the toolkit, MCP gateways enforce tool access. | "Use both: gaal for toolkit governance, your MCP gateway for runtime" |
| AI Security (Palo Alto, Skyflow) | Adjacent. Different layer (data security vs. toolkit governance). | "gaal is not a security product. It's the change management layer for agent toolkits." |
| Cloud Providers (AWS Bedrock, Azure AI) | Complementary. gaal fills the governance gap they don't cover. | "Your cloud provider hosts your agents. gaal governs them." |
| Microsoft GRC (Purview, Entra, Sentinel) | Integration target. gaal feeds evidence into Purview, authenticates via Entra, sends events to Sentinel. | "gaal makes the AI agent controls in your Purview assessments actually pass." |

For the full competitive breakdown, see [Competitive Landscape Analysis](/strategy/competitive-analysis.md).

---

## 7. Brand and voice

All pre-launch and launch content is published under the gaal brand (blog, company LinkedIn page, GitHub). Personal founder content may come later; for now the brand is gaal.

gaal's brand voice is practitioner-first: clear, technically specific, and credibility-driven. We talk about agent configurations, not "AI governance solutions." We reference specific regulatory frameworks by name, not "regulatory compliance." We show code and architecture diagrams, not abstract value propositions.

Principles:

- **Specific over vague.** "gaal versions your agent's tools, skills, MCPs, prompts, and model configs" beats "gaal provides comprehensive AI governance." Always name the concrete objects in the toolkit.
- **Show fragmentation, then the fix.** Our strongest messaging starts with the reality that every team's agent toolkits are fragmented and unmanaged. Then we show how gaal replaces that with shared toolkits that are built, reviewed, and deployed as a team.
- **Compliance as credibility, not fear.** We don't sell fear of regulators. We position compliance readiness as a competitive advantage for enterprises that want to move faster with AI agents.
- **Open source as trust.** The community edition is not a lead-gen trap. It's the real product. Developer trust is what drives bottom-up adoption, and you earn it by shipping real software for free.
- **Depth over exclusivity.** Don't claim "nobody else does this" (the claim has a short shelf life). Instead, demonstrate that gaal is the deepest, most focused tool for this problem. Show the OPA policies, the compliance mappings, the drift detection. Let the depth speak.

---

## 8. Key metrics

| Metric | Target (July 2026 — MVP) | Target (March 2027 — Y1) |
|---|---|---|
| GitHub stars | 100 | 500 |
| Community members (Discord/Slack) | 50 | 300 |
| Monthly active developers (OSS) | 100 | 1,000 |
| SaaS Pro paying teams | 5 | 50 |
| Enterprise customers | 0 | 2 |
| Blog monthly unique visitors | 1,000 | 10,000 |
| Compliance whitepaper downloads | — | 200 |
| Enterprise pipeline (qualified) | 2 leads | 10 leads |

---

## 9. Related documents

- [Feature Marketing Brief — 18 Capabilities](/go-to-market/marketing/feature-brief-18-capabilities.md) — Detailed marketing brief for all 18 core capabilities. Reference for all online assets: website, landing pages, feature tables, sales decks, demos, and social content.
- [AI Compliance Framework Alignment](/legal/compliance/ai-compliance-framework-alignment.md) — gaal capability mapping to 12 global AI compliance frameworks with cross-framework matrix.
- [Microsoft GRC Framework Mapping](/legal/compliance/microsoft-grc-framework-mapping.md) — Control-by-control mapping for enterprises on the Microsoft compliance stack.
- [Competitive Landscape Analysis](/strategy/competitive-analysis.md) — Full competitive breakdown by category.
- [Global PRD](/product/roadmap/PRD-global.md) — Product requirements and phased roadmap.
- [Compliance Dashboard PRD](/product/roadmap/PRD-compliance-dashboard.md) — Compliance officer-facing features.
- [P&L Projection](/financials/pnl-projection.md) — Pricing model and financial targets.
