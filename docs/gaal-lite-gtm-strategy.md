# gaal Lite -- GTM strategy

**Date:** 2026-04-06
**Status:** Execution-ready draft
**Owner:** Guillaume + Greg (GTM), Mickael (development)
**Launch target:** ~April 20, 2026
**Budget:** Zero. No paid ads, no sponsorships, no agency.
**Depends on:** [gaal Lite Brief](../product/gaal-lite-brief.md), [Product Strategy](../strategy/product-strategy.md)

---

## 1. What this document is (and isn't)

This is the GTM execution plan for gaal Lite v0.1 -- the solo-dev CLI that syncs one YAML of agent configs across coding agents.

It covers launch channels, messaging, sequencing, owner assignments, and success tracking for the first 4 weeks post-launch. It does not cover Community Edition GTM, design partner acquisition, or paid motions. Those are separate.

gaal Lite is a brand-planting and list-building exercise. It is not a revenue product and has no roadmap. The GTM plan reflects that: low-investment, high-signal, fast feedback.

---

## 2. Launch objectives

In priority order:

1. Plant the "gaal" name in developer minds before Community Edition ships.
2. Capture 300 newsletter signups (Loops.co) for the Community Edition announcement.
3. Hit 500 GitHub stars in 4 weeks (social proof for Community launch).
4. Validate that developers actually want multi-agent config sync (the daemon hypothesis).
5. Generate 20+ inbound "when is the team version?" messages (Community demand signal).

These map directly to the kill criteria in the [Lite brief](../product/gaal-lite-brief.md). If we miss the 4-week targets, we investigate. If we miss the 90-day targets, we sunset.

---

## 3. Target audience

Solo developers who run 2+ coding agents across 1+ machines. The common profile:

- Uses 2+ coding agents (Claude Code + Cursor is the most common pair; Codex and Copilot also supported)
- Keeps a dotfiles repo in git
- Active on Hacker News, Reddit (r/LocalLLaMA, r/ChatGPTCoding, r/programming), dev.to, X, and Bluesky
- Technically confident with CLI tools and YAML
- Early adopter temperament -- tries new dev tools quickly, shares opinions publicly
- No geographic targeting. Lite is global.

This is not the Community Edition audience (engineering teams) or the paid audience (EU scale-ups). The overlap is that some solo devs work at companies where they'll later push for Community adoption. That's the funnel. But for launch, we talk to individuals, not teams.

---

## 4. Messaging

### 4.1 Core message

"Write your AI agent configuration once, in YAML, and sync it to every coding agent on every machine you own."

That's it. One sentence. No governance, no compliance, no teams. Lite is about solving a personal annoyance: maintaining the same tools, skills, MCP servers, and plugins across Claude Code, Cursor, Codex, and Copilot is tedious. gaal Lite makes it one file and one command.

### 4.2 Channel-specific hooks

**Hacker News (Show HN):**
Lead with the technical problem. "I got tired of copy-pasting my Claude Code config every time I set up Cursor on a new machine. So I built a CLI that renders one YAML into every coding agent's native format." Keep it short, link the repo, show the before/after.

**Reddit (r/LocalLLaMA, r/ChatGPTCoding, r/programming):**
r/LocalLLaMA and r/ChatGPTCoding are more casual. Lead with a relatable frustration: "Anyone else maintaining 3 different agent configs and going slightly insane?" Then show the tool. r/programming is more technical; lead with the architecture (YAML schema, adapter pattern, how it renders to different formats).

**dev.to:**
Tutorial format. "How I sync my AI coding agent configs across 4 agents and 2 machines with one YAML file." Walk through install, init, sync, diff. Include real YAML examples.

**X / Bluesky / LinkedIn:**
Short-form. "I built a CLI that syncs my Claude Code + Cursor + Codex configs from one YAML. Open source, zero dependencies. [link]" Guillaume and Greg post from personal accounts. The @getgaal brand accounts on X and Bluesky retweet/repost and put out a standalone announcement. Bluesky skews toward the open-source and privacy-conscious crowd -- worth being present there early.

### 4.3 What not to say

- No "governance" or "compliance" language. That's Community/Enterprise territory.
- No mention of teams, RBAC, approvals, or audit. Lite is solo.
- No "we're building a platform" framing. That invites "is this vaporware?" questions. Ship the CLI, show it working.
- No Tessl or competitor bashing. Most developers haven't heard of any of them.
- No "AI-native DevOps" or category jargon. Just describe what it does.

---

## 5. Channels and sequencing

### 5.1 Pre-launch (April 7-19)

No public marketing. Focus entirely on code quality, README, examples, and demo video.

- getgaal.com launch page stays as-is (placeholder for Community)
- GitHub repo stays private until launch day
- Newsletter form added to the GitHub README (Loops.co embed or link)
- Demo video recorded (< 90 seconds, terminal recording, no narration needed -- captions work)

### 5.2 Launch day (target: April 20, a Monday)

Monday launches tend to get better Hacker News traction than Friday launches. The post hits morning US East Coast time (when EU is still online too).

**Sequencing within the day:**

1. **Morning (before HN post):** Push repo public. Double-check README renders, install paths work, example YAMLs are in place.
2. **HN Show HN post** (Guillaume posts). This is the anchor. Title: "Show HN: gaal Lite -- sync your AI coding agent configs with one YAML." Keep the text under 300 words. Link to GitHub, not to getgaal.com.
3. **Reddit posts** (Greg posts, staggered 2-4 hours after HN):
   - r/ChatGPTCoding -- casual tone, "built this because I was tired of..."
   - r/LocalLLaMA -- if relevant to local model configs
   - r/programming -- more technical, show the adapter pattern
4. **X posts** (Guillaume + Greg from personal accounts + @getgaal brand account, timed 1-2 hours after HN). Personal accounts link to the HN post and/or GitHub. Brand account retweets and posts standalone announcement.
5. **Bluesky post** (@getgaal brand account, same timing as X). Same content as brand X post.
6. **LinkedIn posts** (Guillaume + Greg, same day or next morning). More professional framing, but still personal ("here's what I built").
7. **dev.to tutorial** (Greg, day 1 or day 2). Tutorial format, not announcement.

Why this order: HN is the highest-leverage channel for developer tools. If it hits the front page, Reddit and X amplify it. If it doesn't, Reddit and dev.to still generate meaningful traffic independently. LinkedIn is secondary but captures a different audience (engineering managers, CTOs who might later want Community).

### 5.3 Post-launch week 1 (April 21-27)

- Monitor HN comments and GitHub issues. Respond to every question within hours.
- Post a follow-up on dev.to with more detailed examples if day-1 tutorial gets traction.
- Engage in Reddit threads where people discuss coding agent configuration, MCP setup, or multi-agent workflows. Don't spam; add value, mention gaal Lite where relevant.
- If there are bugs or feature requests, ship patch releases fast. Responsiveness in week 1 matters more than anything else.

### 5.4 Post-launch weeks 2-4 (April 28 - May 17)

- One blog post or tutorial per week (alternating Guillaume and Greg). Topics:
  - "How to manage your MCP servers across Claude Code and Cursor"
  - "My gaal Lite YAML for [specific workflow]"
  - "Adding a new coding agent adapter to gaal Lite (contributor guide)"
- Share each post on X, LinkedIn, and relevant Reddit threads.
- Track newsletter signups weekly. If below trajectory for 300 at 4 weeks, adjust messaging or add a CTA to the CLI output.
- Publish example YAML configs from real users (with permission) as social proof.

---

## 6. Owner assignments

| Area | Owner | Notes |
|---|---|---|
| Code, adapters, build, install paths | Mickael | Full focus on development and issue triage |
| README, docs, example YAMLs | Guillaume + Greg | Co-authored; Guillaume leads structure, Greg reviews |
| Demo video (< 90s) | Guillaume | Terminal recording with captions |
| HN Show HN post | Guillaume | Drafts and posts from his account |
| Reddit posts (r/ChatGPTCoding, r/LocalLLaMA, r/programming) | Greg | Posts from his account, staggered after HN |
| X posts | Both + @getgaal brand account | Personal accounts post, brand account retweets + standalone post |
| Bluesky post | @getgaal brand account | Same content as brand X post |
| LinkedIn posts | Both | Personal accounts |
| dev.to tutorial | Greg | Tutorial format, day 1 or day 2 |
| Newsletter setup (Loops.co capture in README + getgaal.com) | Guillaume | Ensure signup flow works before launch |
| GitHub issue triage post-launch | Mickael (bugs), Guillaume + Greg (feature requests, questions) | First 2 weeks: respond to everything within hours |
| Weekly blog/tutorial content (weeks 2-4) | Alternating Guillaume and Greg | One post per week minimum |

---

## 7. Newsletter strategy

**Tool:** Loops.co (already set up, no subscribers yet).

**Capture points:**
- GitHub README: "Get notified when gaal Community Edition launches" with a Loops.co signup link or embed.
- CLI post-sync message: occasional (rate-limited, not every run) one-liner pointing to the newsletter. Something like: "Want config sync for your whole team? Sign up for Community Edition updates: [link]"
- getgaal.com launch page: if it has a signup form, connect it to the same Loops.co list.
- dev.to and blog posts: CTA at the end of each post.

**Sequence (post-signup):**
1. Welcome email: "Thanks for signing up. gaal Lite is live -- here's the repo. Community Edition (team config governance, versioning, drift detection) is coming. We'll email you when it's ready."
2. One update email per month max until Community launches. Content: what we're building, what we learned from Lite users.
3. Community Edition launch announcement when it ships.

No drip campaigns, no automated sequences beyond the welcome email. Three founders don't have time to maintain email automation. Write each update by hand.

---

## 8. What we're not doing (and why)

- **No paid ads.** Zero budget, and paid acquisition for a free CLI tool has terrible ROI.
- **No conference talks.** Part-time constraints make this impractical in Year 1.
- **No Product Hunt launch.** PH skews consumer/B2C. Dev tools do better on HN.
- **No paid social.** The @getgaal accounts on X and Bluesky exist for brand presence and reposting. All organic, no spend.
- **No press outreach.** We don't have a story yet. "Three guys built a CLI" is not newsworthy. After Community Edition ships with real adoption, maybe.
- **No design partner outreach.** Lite is pure OSS promotion. Design partners are for Community/Enterprise.

---

## 9. Success metrics

Pulled directly from the [Lite brief](../product/gaal-lite-brief.md) with GTM-specific additions.

**4-week targets (by May 17):**

| Metric | Target | Kill signal | Owner tracking |
|---|---|---|---|
| GitHub stars | 500 | < 100 | Guillaume |
| Newsletter signups (Loops.co) | 300 | < 50 | Guillaume |
| Active installs (opt-in telemetry) | 200 | < 40 | Mickael |
| Retained users (sync'd 3+ times) | 100 | < 25 | Mickael |
| Inbound "when is Community?" messages | 20 | < 5 | All (track in shared doc) |
| HN Show HN upvotes | 100+ | < 20 | Guillaume |
| Reddit post engagement (upvotes + comments across subreddits) | 50+ combined | < 10 | Greg |

**Weekly tracking cadence:** Every Monday, Guillaume reviews the numbers and posts a summary to the team. If any metric is below 50% of the 4-week trajectory at week 2, the team meets to decide whether to adjust messaging, channels, or scope.

**90-day review (by July 5):** Full review against the Lite brief's 90-day metrics. Sunset decision if < 100 active installs.

---

## 10. Risks specific to the launch

| Risk | Likelihood | Impact | What we do |
|---|---|---|---|
| HN post doesn't hit front page | Medium | Medium | Reddit and dev.to still generate traffic. Repost on HN the following week if first attempt gets < 5 upvotes (HN allows reposts). |
| Install friction on macOS/Linux | Medium | High | Mickael prioritizes brew formula and curl script testing before launch. Guillaume tests on a clean machine. |
| "Why not just use chezmoi/yadm?" pushback | High | Low | Prepare a response: "Dotfiles managers don't understand coding agent config formats. gaal Lite renders YAML into each agent's native format -- .claude/, .cursor/, .codex/. Chezmoi copies files; gaal Lite transforms them." |
| "Is this vaporware for an enterprise product?" skepticism | Medium | Medium | The CLI is real, open source, and working. Point to the code. Don't mention Enterprise plans in Lite marketing. |
| Low newsletter conversion from GitHub visitors | Medium | Medium | Add a second CTA: GitHub Discussions or Discord as a lower-friction alternative to email. Funnel those into the newsletter later. |

---

## 11. Transition to Community Edition GTM

This plan ends at the 4-week mark. The Community Edition GTM plan (separate document) picks up the thread:

- Lite newsletter list becomes the launch announcement audience for Community.
- Lite GitHub stars and README become social proof for Community's GitHub repo.
- "When is the team version?" inbound messages become the first validation signal for Community's value prop.
- Any Lite users who hit team-scale pain (shared configs, wanting approval workflows) are warm leads for Community beta.

`gaal lite migrate --to community` bridges the product. The newsletter bridges the audience.
