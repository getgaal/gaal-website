# Design System — "Dark Particles"

Derived from `template.pptx` (theme name `Dark Particles`, color scheme `Simple Light`). This is a **dark-first** editorial system: the canvas is pure black, the type is **Urbanist** (geometric humanist sans), and a single chartreuse/lime accent (`#DEFF9A`) carries every moment of energy across the layout. Cards sit as softly-rounded dark-gray panels on the black canvas, buttons travel in pairs (pill + circular chevron), and numbered sequences set the rhythm. Full-bleed cosmic imagery — galaxies, particles, onyx blobs — provides atmosphere without ever fighting the type.

---

## 1. Visual Theme & Atmosphere

The presentation opens onto pure black (`#000000`), not a neutral dark-gray. This is deliberate: the deck treats the page like deep space, and every element — from a lime numeral to a dark card — reads like a bright satellite against the void. The theme metadata literally names itself **Dark Particles**, and the background imagery reinforces that language: galactic swirls, particle dust, black plates shot in near-total darkness. The atmosphere is editorial and premium, closer to a luxury fashion lookbook or an aerospace pitch deck than a typical SaaS dashboard.

Urbanist is the voice of the system. It's a modern geometric humanist sans-serif with a rounded, approachable feel — confident at display sizes, legible at 14pt captions, and slightly warm in the way the lowercase bowls resolve. The deck uses **three weights only**: Regular (400), Medium (500), and SemiBold (600). Headlines are always Medium, body is Regular, and interactive/emphasised labels are SemiBold. There is no italic and no Bold (700). The large display headlines run at **48–54pt**, the next tier at **30pt**, and the body at **12–14pt** — a compressed hierarchy where scale does the heavy lifting and weight whispers.

What distinguishes the system is its **single-accent discipline**. One chartreuse-lime (`#DEFF9A`) does all the accent work: it highlights the last word of a headline, fills the pill button background, tints numbers `1/2/3` in a sequence, draws the progress bars, and marks the focused/first step in a timeline. Everything else is black, white, or a gray in between. There is no secondary brand color in the marketing chrome — the other palette values (`#4CDC8B` mint, `#4C7FDC` blue) are reserved for data visualization (pie segments, bar charts). This restraint is the whole point: the accent only ever means *"this is the thing to look at"*, so it never has to shout.

**Key characteristics:**
- Pure black (`#000000`) canvas — the entire system is dark-first, not a light theme with a dark mode.
- Urbanist in Regular / Medium / SemiBold — no italics, no Bold, no competing typeface.
- Single chartreuse-lime accent (`#DEFF9A`) for emphasis, CTAs, numbered markers, and highlights.
- Dark-gray card surfaces (`#252525`, `#323232`) layered on black with **generous corner radius** (16–24px).
- Pill-button + circular-chevron pair as the canonical CTA pattern.
- Thin-stroke circular chevron-down (`⌄`) as a subtle "more" affordance.
- Small eyebrow label top-left + oversized headline underneath — the core editorial grid.
- Full-bleed cosmic imagery (galaxies, particle dust, onyx blobs) for atmosphere; grayscale-leaning.
- Footer ticker: fine `1px` rule + `Company Name · Quarter Month · Year` in small type.
- Numbered sequences (1 → 2 → 3 → 4 → 5) with lime numerals and dotted connectors.

---

## 2. Color Palette & Roles

All hex values are taken directly from the theme XML.

### Primary (Foundation)
- **Canvas Black** (`#000000`) — `dk1`. The page background everywhere. Always pure black.
- **Paper White** (`#FFFFFF`) — `lt1`. Primary text, headlines on dark, icons, borders on charts.
- **Off-White** (`#F5F5F5`) — `dk2`. Used very sparingly; near-white surfaces where content needs to invert (e.g., the white customer-card surface on slide 11).

### Accent (Signature)
- **Lime** (`#DEFF9A`) — `accent3`. The one hero accent. Uses: pill button fills, number markers (1/2/3), highlighted last word of a headline, active timeline step, progress bar fills, quoted-text color. **Always pair lime on black (or on a dark card) — never on white.**

### Supporting Accents (reserved for data / icons only)
- **Pale Mint** (`#DAFFDE`) — `accent4`. Decorative only (e.g., a soft dot on an accomplishments card).
- **Seafoam** (`#4CDC8B`) — `accent5`. Data vis only (chart bars, pie segments).
- **Chart Blue** (`#4C7FDC`) — `accent6`. Data vis only (chart bars, pie segments).

### Neutral Scale (Dark Grays)
- **Card 900** (`#252525`) — `accent2`. Deepest card shade, used as the base dark-card fill on black.
- **Card 800** (`#323232`) — `lt2`. Slightly lighter card variant, used for inner content panels.
- **Card 700** (`#434343`) — `accent1`. Edges, inactive pills, chart background elements.
- **Line Gray** (`#181818`) — `hlink` in theme but used as divider-line tone on black.

### Text Colors
- **On Black, Primary** — `#FFFFFF`.
- **On Black, Muted** — `#C8C8C8` (approx, used for descriptive copy; never lighter than `#E5E5E5`).
- **On Lime Pill** — `#000000` (black text on the lime CTA fill).
- **On White Card (rare)** — `#000000` text.

### Links & Interactive
- Link color on black: **Lime** (`#DEFF9A`) with medium weight.
- Followed link / data highlight: **Teal** (`#0097A7`) — from theme `folHlink`, used subtly.

### Semantic Summary
| Role | Token | Hex |
|------|-------|-----|
| Canvas | `--bg` | `#000000` |
| Primary text | `--fg` | `#FFFFFF` |
| Muted text | `--fg-muted` | `#C8C8C8` |
| Accent | `--accent` | `#DEFF9A` |
| Accent ink (on lime) | `--accent-ink` | `#000000` |
| Card base | `--surface-1` | `#252525` |
| Card raised | `--surface-2` | `#323232` |
| Card edge | `--surface-3` | `#434343` |
| Hairline | `--line` | `#262626` |
| Data mint | `--data-mint` | `#4CDC8B` |
| Data blue | `--data-blue` | `#4C7FDC` |

---

## 3. Typography Rules

### Font Family
- **Primary**: `"Urbanist"`, with fallbacks: `"Inter", "Helvetica Neue", Arial, sans-serif`.
- **Mono** (reserved for numeric tabular data only): `"JetBrains Mono", ui-monospace, Menlo, monospace`.
- Available weights: **400 (Regular)**, **500 (Medium)**, **600 (SemiBold)**. Load only these three from Google Fonts.
- Enable `font-feature-settings: "ss01", "cv11"` (Urbanist's stylistic alternates) for a slightly more editorial feel on display text.

### Hierarchy (mapped from template `sz` values — 1/100th of a pt)

| Role | Weight | Size | Line Height | Letter Spacing | Slide Examples |
|------|--------|------|-------------|----------------|---------------|
| **Display Hero** | 500 (Medium) | 54pt · `3.375rem` / 60px web | 1.05 | `-0.01em` | "Partnership Proposal Presentation", "Thank you" |
| **Display** | 500 (Medium) | 48pt · `3rem` / 52px web | 1.08 | `-0.01em` | "What we do", "Timeline", "Content" |
| **Section Heading** | 500 (Medium) | 30pt · `1.875rem` / 36px web | 1.15 | `-0.005em` | "Write a bold, compelling statement…" body-as-headline |
| **Sub-heading** | 500 (Medium) | 24pt · `1.5rem` / 28px web | 1.2 | normal | Card group titles |
| **Card Title** | 600 (SemiBold) | 18pt · `1.125rem` / 20px web | 1.3 | normal | "Step or milestone", "Needs and motivations" |
| **Lead** | 400 (Regular) | 16pt · `1rem` / 17px web | 1.55 | normal | Opening paragraph, hero subhead |
| **Body** | 400 (Regular) | 14pt · `0.875rem` / 15px web | 1.55 | normal | Standard copy |
| **Body Small** | 400 (Regular) | 12pt · `0.75rem` / 13px web | 1.5 | normal | Secondary copy inside cards |
| **Eyebrow Label** | 400 (Regular) | 12pt · `0.75rem` / 13px web | 1.2 | `0.01em` | "Our mission", "Our values" (top-left of slide) |
| **Footer / Meta** | 400 (Regular) | 10pt · `0.625rem` / 11px web | 1.2 | `0.02em` | "Company Name", "Quarter Month", "Year" |
| **Numeral Marker** | 500 (Medium) | 48–64pt · `3–4rem` | 1.0 | `-0.02em` | The lime `1 2 3` / `1 2 3 4 5` in value grids & timelines |
| **Big Stat** | 500 (Medium) | 64–80pt · `4–5rem` | 1.0 | `-0.02em` | "00%" market share, "#00" rank |

### Principles
- **Editorial restraint**: Urbanist is warmer than Inter but stricter than Poppins — treat it as a display serif replacement. Do **not** pair it with a second family; its three weights already cover every role.
- **Three-weight discipline**: 400 (read) → 500 (announce / headlines) → 600 (interact / labels). Never introduce 700 or 300.
- **Headlines are Medium, not Bold**: the big "Write a bold, compelling statement…" lines are 500, not 600 or 700. The size and whitespace carry the weight; the typeface stays slim.
- **Lime as a single-word highlight**: in a long headline the last word often drops to `--accent` (`#DEFF9A`). Keep it to *one* word, rarely two. (E.g., "…wants to **achieve**.")
- **Eyebrow → Headline → Body**: a slide almost always opens top-left with a small white label (the eyebrow), then a massive Medium headline a line or two below, then body lower down or in a card. Honor this rhythm on web sections.
- **Numerals are art**: large lime numerals (1, 2, 3…) are not decoration — they are the navigation for the deck. Repeat this pattern for step lists, value grids, and timelines on the site.
- **Negative tracking at size**: apply `-0.01em` to `-0.02em` letter-spacing only at 30pt+ display sizes. Body and caption sizes stay at normal tracking.

---

## 4. Component Stylings

### Buttons

**Primary — Lime Pill + Chevron Circle (the signature CTA)**
- Container: `inline-flex gap-8px align-center`.
- Pill: background `#DEFF9A`, text `#000000` at 14pt SemiBold, padding `10px 24px`, radius `9999px`.
- Companion: a `36px` circle with same lime fill, centered chevron-right `›` in black at 16pt.
- The two elements share the same fill but are visually separate — like a label + trigger.
- Hover: pill background darkens to `#D0F07F`; circle scales to `1.05` and translates `x: 4px`.
- Focus: `2px solid #DEFF9A` outline + `4px` outer halo at `rgba(222,255,154,0.35)`.
- Use: primary CTA ("Learn more", "Let's talk", "Start").

**Secondary — Dark Pill on Dark**
- Background: `#252525` → hover `#323232`.
- Text: `#FFFFFF` at 14pt Medium.
- Radius: `9999px`, padding `10px 20px`.
- Use: "Full Name 1 / Full Name 2" style chips on the title slide; inactive timeline date pills.

**Ghost — Chevron Circle Only**
- `36px` circle, border `1px solid rgba(255,255,255,0.35)`, transparent fill, chevron-down `⌄` or chevron-right `›` at 14pt white.
- Use: secondary "more" affordance in content rows (the `(>)` on each of slide 2's content rows, the `(⌄)` hint icons on slide 9 value cards).

**Lime Filled Chevron (active indicator)**
- Same `36px` circle, background `#DEFF9A`, chevron black. Indicates the *active* or *first* item in a sequence (slide 4's top-right `⌄` marker; slide 16's first timeline node).

### Cards & Containers

**Standard Dark Card**
- Background: `#252525` (on black canvas — creates a ~15% lightness lift that reads as clearly detached).
- No CSS border. Depth comes from value contrast against the black background, not from shadows.
- Radius: **20px** (the deck uses a generous, almost cushiony radius across all cards).
- Padding: `24px` (mobile) → `32px` (desktop).
- Optional inner divider: `1px solid rgba(255,255,255,0.08)` at `50%` opacity — used in slide 11's multi-panel customer card.

**Raised / Nested Card**
- Background: `#323232` (one shade lighter than the base card).
- Same radius and padding. Used for sub-cards within a card (e.g., the "Certifications" swatches inside the accomplishments panel).

**Bright Card (inversion)**
- Background: `#FFFFFF`.
- Text: `#000000`.
- Radius: `24px`.
- A thin `2px solid #DEFF9A` ring **optional** on the profile portrait inside (see slide 11).
- Use: rare inversion moments — customer persona portrait card, a spotlight call-out.

**Content Row (slide 2 pattern)**
- Background: `#1C1C1C` (between black and the card base — approx 11% lightness).
- Radius: `16px`.
- Padding: `16px 20px`.
- Layout: `<index> <title> <spacer> <chevron-circle>` with the lime numeral on the left, white title in SemiBold, and a ghost chevron circle flush right.

### Image Treatment
- **Portraits**: rounded-rectangle, `20px` radius. Never fully circular except when encircled by a lime ring inside a bright card.
- **Landscape / hero images**: `16–20px` radius. Edges may touch a single slide gutter; other sides bleed.
- **Collage grids**: 2×1 or 2×2 image grids (slide 3, slide 6, slide 12) with consistent `12–16px` gaps and matching radii. All images cropped to tell one story — never mix aspect ratios inside a grid.
- **Filter**: cosmic / onyx imagery stays high-contrast grayscale-friendly; avoid heavily saturated photography in chrome.

### Inputs & Forms
- Input: background `#1C1C1C`, text `#FFFFFF`, placeholder `#808080`, border `1px solid #323232`, radius `12px`, padding `12px 16px`.
- Focus: border shifts to `#DEFF9A`, with a `2px` outer ring at `rgba(222,255,154,0.25)`.
- Error: border shifts to `#E46962` (the one warm accent present in the layout XML, preserved for error states).

### Navigation
- Sticky, flush to top, background `#000000` with a `1px solid #1C1C1C` bottom rule.
- Logo left, Urbanist Medium at 16pt.
- Links: 14pt Regular `#FFFFFF`, hover shifts to `#DEFF9A`. Active route gets an underlined lime indicator.
- Right side: one secondary pill + one primary lime-pill CTA.
- Mobile: hamburger `36px` circle with `1px solid rgba(255,255,255,0.3)` border.

### Distinctive Components

**The Lime Numeral List**
Used on the Content slide, Values slide, Timeline slide, and How-it-works slide. A grid of 3–6 items, each starting with a **large lime numeral** (48pt Medium), followed by a title in white SemiBold, followed by a small description in muted white. Build this as a reusable `<SequenceItem index={n} title="…" body="…" />` component on the site.

**The Timeline Connector**
Numbered circles (`48px`) with a **dotted 2px line** (`rgba(255,255,255,0.25)`) connecting them horizontally. The first circle is filled lime; subsequent circles are `#252525` with a lime numeral inside. Each circle sits above its label, and a "Date" pill sits below (first pill lime-filled, rest dark).

**Eyebrow + Headline Pair**
Every content section begins with a small white eyebrow label (12pt, capitalized but **not** all-caps) in the top-left of the section, followed by a massive Medium headline that may span 2–3 lines. This is the defining editorial move of the deck and must be echoed on every section of the site.

**Highlighted-Last-Word Headline**
Headlines where the final word (or occasionally the key verb) is colored lime. E.g., "Write a bold, compelling statement about what the company wants to **achieve**." On web, wrap the accent word in `<span class="accent">…</span>` and pair it with `color: var(--accent)`.

**Metric Stat Block**
Large numerals (`64–80pt Medium`, white) on a dark card, with a small muted label below. E.g., `00%` → `Market share`; `#00` → `Rank in the industry`. Use for KPI sections — never use the lime color on the number itself; the number's size is already the emphasis.

**Galaxy / Particle Hero**
Full-bleed dark imagery of galaxies, particle dust, or onyx surfaces. Low saturation, high contrast with the pure-black canvas. Hero sections use this behind a centered or left-aligned headline. Optional: a soft `radial-gradient(circle at center, rgba(0,0,0,0) 0%, #000 80%)` vignette to pull focus toward the text.

**Meet-the-Team Grid**
3-up or 4-up grid of rounded-rectangle portraits (`20px` radius). Under each portrait: `Full Name` in **lime** (this is one of the two contexts where lime is used for text, along with highlighted-word headlines and the quote callout) at 16pt SemiBold, and `Title` below in white 14pt Regular.

---

## 5. Layout Principles

### Canvas & Grid
- **Slide proportion**: 16:9 (`9144000 × 5143500 EMU` = 10" × 5.625"). The web equivalent is a wide viewport with content capped at **1280px** max content width.
- **Side gutters**: `56px` on desktop (the deck uses a generous 40–60px slide margin); `20px` on mobile.
- **Vertical rhythm**: major sections separated by **96–128px** of vertical space. Inside a section, blocks sit **24–40px** apart.

### Section Rhythm
Sections are NOT alternated by color — the canvas is uniformly black. Separation comes from three sources:
1. **Whitespace** (96–128px between sections).
2. **Footer hairline** (`1px solid #262626`) — a subtle full-width rule at the bottom of every section, mimicking the deck's per-slide footer.
3. **Card contrast** — `#252525` cards on black.

### Spacing System
Base unit: **4px**. Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128`.
- Inside components, prefer `16–24px` gaps.
- Between components, prefer `24–40px`.
- Between sections, prefer `96–128px`.

### Border Radius Scale
| Size | Value | Use |
|------|-------|-----|
| Subtle | `8px` | Small inline elements (badges inside cards). |
| Standard | `12px` | Inputs, small tiles. |
| Card Base | `16px` | Content rows, inline cards. |
| Card Hero | `20px` | Standard dark card, image frames. |
| Card XL | `24px` | Large feature cards, bright inversion cards. |
| Full Pill | `9999px` | All buttons, chips, "Date" tags. |

### The Footer Ticker (global)
Every page ends — and every major section can end — with a thin footer ticker matching the deck:
```
────────────────────────────────────────────────────────────────────
•  Company Name                  ▪ Quarter Month                  Year
```
- `1px solid #262626` rule above.
- `10pt` Urbanist Regular text, `#AAAAAA`.
- Three columns: left-aligned (with a small `●` bullet), center-aligned (with a small `▪` bullet), right-aligned.
- Generous `20px` vertical padding.

---

## 6. Depth & Elevation

The deck is **flat**. There are no drop shadows anywhere — every element reads as a solid value on top of black.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No surface lift | Canvas (`#000000`), text blocks, rules. |
| Inset (L1) | Dim value: `#1C1C1C` | Content rows on home/section pages (slide 2 pattern). |
| Card (L2) | `#252525` on `#000000` | Default card surface. |
| Raised (L3) | `#323232` on `#252525` | Nested card / sub-panel inside a card. |
| Inversion (L*) | `#FFFFFF` on `#000000` | Rare spotlight card, always with a clear purpose. |
| Focus | `2px solid #DEFF9A` outline | Keyboard focus on all interactives. |

**No shadows. No glows. No blurs.** Depth comes from **value + radius + whitespace**, not from Material-style elevation. The only permitted soft glow is the optional `4px rgba(222,255,154,0.35)` halo around a focused lime pill.

---

## 7. Do's and Don'ts

### Do
- Do use pure black (`#000000`) as the page canvas. Not `#111`, not `#121212` — pure black.
- Do use Urbanist Medium (500) for headlines. Not SemiBold, not Bold.
- Do restrict lime (`#DEFF9A`) to emphasis, CTAs, numbered markers, and one-word headline highlights.
- Do open every content block with a small eyebrow label + an oversized headline — the deck's editorial signature.
- Do pair the lime pill CTA with a matching lime chevron circle — the two-part button is canonical.
- Do use large lime numerals (48pt+) as the primary navigation for sequences, steps, and values.
- Do use 16–24px border radius on cards — the deck's corners are unapologetically soft.
- Do keep images high-contrast and grayscale-leaning (galaxy, onyx, particle textures).
- Do use `#252525` cards on `#000000` — the value jump is the depth system.
- Do use Full Name in lime SemiBold as a person's name label (team grids).
- Do honor the footer ticker on every page: hairline rule + 3-column meta in 10pt.

### Don't
- Don't use a white background anywhere except inside a deliberate inversion card — the system is dark-first.
- Don't mix Urbanist with a second typeface (no Inter, no serif pairing, no mono except for tabular data).
- Don't use the lime accent decoratively (as a gradient, a big block of fill, or a background for copy). It's reserved for emphasis, not decoration.
- Don't use drop shadows. The system is flat; depth is value-based.
- Don't use Bold (700) or Light (300) Urbanist — only 400 / 500 / 600.
- Don't place lime text on white — contrast fails. Lime only ever on black or on a dark card.
- Don't crowd cards with multiple accent colors. One lime element per card, max.
- Don't use tight `4–8px` border radius on cards — the aesthetic is generously rounded.
- Don't use saturated photography in the UI chrome. Imagery stays cosmic/onyx/grayscale-leaning.
- Don't animate the lime — it's a quiet accent. Subtle hover transitions only (150–200ms).

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Stacked layout, single column, `20px` gutters, section spacing `64px`. |
| Tablet | 640–1024px | 2-column grids begin; hero headline scales to 42pt. |
| Desktop | 1024–1280px | Standard 3–4 column grids, hero at 54pt. |
| Wide | >1280px | Max content `1280px` centered, generous side gutters, full deck parity. |

### Type Scale (responsive)
| Role | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Display Hero | 40px | 48px | 60px |
| Display | 36px | 42px | 52px |
| Section Heading | 28px | 32px | 36px |
| Card Title | 18px | 20px | 20px |
| Lead | 16px | 17px | 18px |
| Body | 14px | 15px | 15px |

### Collapsing Strategy
- Hero with image: text + image becomes stacked (text first, image second) on mobile.
- Numbered sequences (e.g., Content list, Timeline): 3/5-up grid → 2-up → 1-up with vertical dotted connector.
- Team grid: 3×2 → 2×3 → 1×6.
- CTA pair (pill + chevron): stays side-by-side at all sizes (the pair is atomic).
- Footer ticker: 3-column → stacked center-aligned single column on mobile (keep the hairline).

### Touch Targets
- Minimum `44px × 44px` tap area for all interactive elements (the `36px` chevron circle gets invisible padding on mobile).
- Pill buttons get `12px 24px` padding on mobile for comfortable tap.
- Nav hamburger is the `36px` ghost chevron circle pattern, scaled to 44px with padding.

### Image Behavior
- Full-bleed heroes: `object-fit: cover` at all sizes, with a bottom `linear-gradient(to bottom, transparent, #000)` fade to blend into the canvas.
- Portrait grids: maintain `20px` radius at all sizes; cards stack rather than shrink below minimum 220px width.
- Cosmic background imagery: scale up on desktop, simplify to a single mid-value still on mobile.

---

## 9. Agent Prompt Guide

### Quick Color Reference (copy/paste)
```
--bg: #000000
--fg: #FFFFFF
--fg-muted: #C8C8C8
--accent: #DEFF9A
--accent-ink: #000000
--surface-1: #252525
--surface-2: #323232
--surface-3: #434343
--line: #262626
--data-mint: #4CDC8B
--data-blue: #4C7FDC
```

### Quick Font Reference
```
font-family: 'Urbanist', 'Inter', 'Helvetica Neue', Arial, sans-serif;
weights: 400 / 500 / 600
```

### Example Component Prompts
- **Hero**: "Build a full-bleed dark hero on `#000000`. Eyebrow label top-left in 12pt Urbanist Regular `#FFFFFF` ('Partnership Proposal'). Below it, a 60px Urbanist Medium headline in white, line-height 1.05, letter-spacing `-0.01em`, with the last word in `#DEFF9A`. Subtitle in 18pt Urbanist Regular `#C8C8C8` at 1.55 line-height. CTA pair: a lime pill ('Get started', `#DEFF9A` bg, black text, 9999px radius, 10px 24px padding) + a 36px lime circle with a black chevron-right icon. Background: a low-contrast grayscale galaxy image with a `linear-gradient(to bottom, transparent, #000)` fade at the bottom edge."
- **Card**: "Build a dark card: `#252525` background, 20px border radius, 32px padding, no shadow. Card title in 18pt Urbanist SemiBold `#FFFFFF`. Body in 14pt Regular `#C8C8C8` at 1.55 line-height. Optional top-right chevron-down circle: 36px, transparent, 1px solid `rgba(255,255,255,0.35)`."
- **Numbered list item**: "Build a SequenceItem: flex row, 24px gap. Left: a 48pt Urbanist Medium numeral in `#DEFF9A`, line-height 1. Right: title in 18pt SemiBold white + body in 14pt Regular `#C8C8C8`. Add a 16px-high vertical spacer between title and body."
- **Timeline node**: "Build a 48px circle, `#252525` background, Urbanist Medium 20pt lime numeral centered. The first node in a timeline inverts: `#DEFF9A` background with black numeral. Connect horizontally with a 2px dotted line `rgba(255,255,255,0.25)`. Below each circle: title in 16pt SemiBold white, body in 13pt Regular `#C8C8C8`, and a pill 'Date' chip (9999px radius, 10px 20px padding, `#252525` bg except first node which is `#DEFF9A` bg black text)."
- **Footer ticker**: "Render a `1px solid #262626` top rule, then a 3-column flex row at 20px vertical padding. Left: `●` bullet + 'Company Name' in 10pt Urbanist Regular `#AAAAAA`. Center: `▪` bullet + 'Quarter Month'. Right: 'Year' right-aligned."
- **Stat block**: "Build a dark card: `#252525` bg, 20px radius, 32px padding. Number in 72px Urbanist Medium white, line-height 1, letter-spacing `-0.02em`. Label underneath in 14pt Urbanist Regular `#C8C8C8`."

### Iteration Guide
1. The canvas is **always `#000000`**. Treat white backgrounds as a mistake unless you're building an intentional inversion card.
2. **Urbanist Medium (500) for headlines**, never Bold. Size creates hierarchy; weight does not.
3. **One lime accent per card**. If you find yourself using `#DEFF9A` twice in the same component, one of them is probably wrong.
4. **Pill + chevron circle = one CTA**. Never ship a lime pill without its chevron companion.
5. **20px border radius is the default**. Smaller radii (<12px) feel technical and break the editorial warmth.
6. **Open with an eyebrow**: every major block gets `<small eyebrow>` → `<big headline>` → body, in that order.
7. **Value, not shadow**: lift is created by stepping from `#000 → #252525 → #323232`. No shadows.
8. **Highlighted-last-word**: on heroes and section titles, drop the final word (or a single key verb) to `#DEFF9A`. Use sparingly — it's the strongest move in the system.
9. **Lime numerals are navigation**, not decoration. Use them for any sequence of 3+ items (values, steps, timeline).
10. **Footer ticker at the bottom of every page**: hairline + 3-column meta at 10pt. This is the one piece of chrome that connects every slide of the deck — it must connect every page of the site.
