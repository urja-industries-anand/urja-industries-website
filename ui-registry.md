# UI Registry

Visual consistency reference for Urja Industries components. Read this before building any new component — match these patterns rather than inventing new ones.

---

### Header

File: src/components/Header.jsx
Last updated: 2026-07-03

| Property          | Class                                                          |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-lowest`                                    |
| Border             | `border-b border-outline-variant`                                |
| Border radius      | none (full-width bar)                                            |
| Text — primary     | `text-primary` (active nav link)                                 |
| Text — secondary   | `text-on-surface-variant` (inactive nav links)                   |
| Text sizing        | `text-sm` for nav links, `font-body`                             |
| Font weight        | `font-600` active/CTA, `font-400` inactive                       |
| Spacing (padding)  | `px-4 sm:px-6 lg:px-16 py-3` on the bar; `gap-4 sm:gap-6` between logo/nav/CTA; `gap-8` between nav links |
| Hover state        | `hover:text-primary transition-colors` (links), `hover:opacity-90 transition-opacity` (CTA button) |
| Shadow             | none |
| Accent usage       | `bg-secondary text-on-secondary` for the "Get Quote" CTA button, `rounded` |
| Active link marker | `border-b-2 border-primary pb-1` underline |

**Pattern notes:**
Logo scales in three explicit steps: `h-11 sm:h-14 lg:h-16 w-auto` — always keep `w-auto` so aspect ratio holds. Nav collapses to a hamburger below `lg` (1024px), not `md` — this project uses `lg` as the "full nav" breakpoint everywhere, not `md`. Mobile menu panel reuses the same link styling as desktop nav, just stacked (`flex flex-col gap-4`) with `border-t border-outline-variant` separating it from the bar. CTA button radius is `rounded` (4px/DEFAULT), not `rounded-lg` — buttons stay sharper than cards.

---

### Footer

File: src/components/Footer.jsx
Last updated: 2026-07-03

| Property          | Class                                      |
| ----------------- | -------------------------------------------- |
| Background        | `bg-tertiary`                                 |
| Border             | none                                          |
| Border radius      | `rounded` (logo image only)                   |
| Text — primary     | `text-on-tertiary` (logo alt context / links on hover) |
| Text — secondary   | `text-on-tertiary-container` (body copy, links, copyright) |
| Text sizing        | `text-sm`, `font-body`                        |
| Spacing (padding)  | `px-4 sm:px-6 lg:px-16 py-10 lg:py-12`; `gap-8` between grid columns; `gap-3` between stacked links |
| Hover state        | `hover:text-on-tertiary transition-colors` (links) |
| Shadow             | none |
| Accent usage       | none — footer stays neutral/dark, no red or blue accents |
| Layout             | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |

**Pattern notes:**
Logo in footer is deliberately smaller than header (`h-9` vs header's `h-11 sm:h-14 lg:h-16`) and does NOT scale responsively — confirmed explicitly with the developer that only the header logo should enlarge across breakpoints, footer stays fixed. Dark surface uses `tertiary`/`on-tertiary` tokens, not `inverse-surface` — keep that consistent for any other dark sections.

---

### Hero

File: src/components/Hero.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-low`                                       |
| Border             | none                                                              |
| Border radius      | `rounded-lg` (photo)                                             |
| Text — primary     | `text-on-surface` (heading)                                      |
| Text — secondary   | `text-on-surface-variant` (body copy)                            |
| Text sizing        | Heading `text-[28px] sm:text-[36px] lg:text-[48px]` `font-heading font-700`; body `text-base leading-6 font-body` |
| Spacing (padding)  | `px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16`; `gap-8 sm:gap-10` between text/image columns |
| Hover state        | n/a (static section) |
| Shadow             | `shadow-sm` on the hero photo |
| Accent usage       | Eyebrow badge: `border border-outline-variant rounded-sm`, `font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant` |
| Layout             | `grid grid-cols-1 lg:grid-cols-2 items-center` |

**Pattern notes:**
The `font-technical` (JetBrains Mono) family is reserved for small uppercase labels/eyebrows and stat captions — never for headings or body copy. Heading uses `font-heading` (Hanken Grotesk) at `font-700`; body text always `font-body` (Inter). This 3-step responsive type scale (`base / sm / lg`) is the project standard — apply the same step pattern to any new large headline.

---

### MissionExcellence (two-card row)

File: src/components/MissionExcellence.jsx
Last updated: 2026-07-03

| Property          | Class                                          |
| ----------------- | -------------------------------------------------- |
| Background        | `bg-surface-container-lowest` (section), `bg-surface-container-low` (cards) |
| Border             | `border border-outline-variant`                     |
| Border radius      | `rounded-lg`                                        |
| Text — primary     | `text-on-surface` (card heading, `font-heading text-xl font-600`) |
| Text — secondary   | `text-on-surface-variant` (body copy)               |
| Spacing            | Card padding `p-6 sm:p-8`; `gap-6` between the two cards; `gap-3` icon-to-heading; `mb-4`/`mb-6` internal rhythm |
| Hover state        | none (static info cards) |
| Shadow             | none — cards rely on `border` + tonal background instead of shadow |
| Accent usage       | Icon swatch `w-9 h-9 rounded bg-primary text-on-primary` (Mission) or `bg-tertiary text-on-tertiary` (Excellence) |
| Stat text          | Value `font-heading text-xl font-700 text-primary`; label `font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant` |

**Pattern notes:**
This is the canonical "info card" pattern: `rounded-lg border border-outline-variant bg-surface-container-low p-6 sm:p-8`, no shadow. Reuse this exact shell for any future card that presents a block of supporting info (not an interactive/clickable card — those should add a hover elevation per the design doc's "Level 2" interaction spec, which none of these cards need since they're static). Icon swatches are `w-9 h-9 rounded` (small, `rounded` not `rounded-lg`) with a solid brand-color fill — alternate between `primary` and `tertiary` fills to differentiate adjacent cards, never `secondary` (red) for a decorative icon since that color is reserved for CTAs/alerts per the design system.

---

### Leadership (card grid)

File: src/components/Leadership.jsx
Last updated: 2026-07-03

| Property          | Class                                                  |
| ----------------- | ---------------------------------------------------------- |
| Background        | `bg-surface-container-low` (section), `bg-surface-container-lowest` (cards) |
| Border             | `border border-outline-variant`                             |
| Border radius      | `rounded-lg` (card), `rounded-md` (avatar swatch)            |
| Text — primary     | `text-on-surface` (name, `font-body text-base font-600`)    |
| Text — secondary   | `text-primary` (title/role, `font-body text-sm font-600`)   |
| Spacing            | Card padding `p-6 sm:p-8`, `text-center`; grid `gap-6`; avatar `mb-5` |
| Hover state        | none (static cards) |
| Shadow             | none |
| Accent usage       | Avatar placeholder swatch `w-20 h-20 rounded-md bg-surface-container-highest text-on-surface-variant` |
| Layout             | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` |

**Pattern notes:**
Card shell here swaps the container/card tone versus MissionExcellence (section is `-low`, card is `-lowest`) — inverse of the mission cards (section `-lowest`, card `-low`). This alternation is intentional so adjacent sections don't visually blend into each other; keep alternating container tones section-by-section down the page. Person placeholder icons are used per-card (not a shared photo) — confirmed explicitly with the developer. Role text uses `text-primary`, not `text-on-surface-variant` — titles are treated as a highlighted accent, distinct from body copy.

---

### Carousel (auto-advancing image slider)

File: src/components/Carousel.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | n/a — transparent container, fills parent |
| Border             | none |
| Border radius      | `rounded-lg` (matches Hero photo radius it replaced) |
| Text — primary     | n/a (no text content) |
| Text — secondary   | n/a |
| Spacing            | Dots positioned `bottom-4`, `gap-2` between dots |
| Hover state        | none on slides; dots are clickable but have no distinct hover style |
| Shadow             | `shadow-sm` on the outer container (matches prior static Hero image) |
| Accent usage       | Active dot `bg-on-primary` (solid white) at `w-6`; inactive dots `bg-on-primary/50` at `w-2`, both `h-2 rounded-full` |

**Pattern notes:**
Slides are absolutely positioned (`absolute inset-0 object-cover`) and cross-fade via `opacity` + `transition-opacity duration-700 ease-in-out` — the parent needs an explicit height (not `h-auto`) since children are taken out of flow. Auto-advance interval defaults to 4000ms via a `setInterval` in `useEffect`, cleaned up on unmount; `interval` is a prop so it can be tuned per use. Dot indicators double as manual controls (`onClick` jumps to that slide) and carry `aria-label`/`aria-current` for accessibility.

**Note — new pattern, not yet cross-referenced elsewhere:** the `bg-on-primary` / `bg-on-primary/50` dot treatment is a first for this project — it's an overlay-on-photo control, distinct from every other accent usage in the registry so far (which are all icon swatches or CTA fills on solid backgrounds, not photo overlays). If a future component needs controls layered on top of an image (e.g. a Product Details gallery), reuse this exact dot pattern rather than inventing a new one — but know it hasn't been battle-tested against a light-colored photo yet, where white-on-white could wash out.

---

### HomeHero (full-bleed photo hero)

File: src/components/HomeHero.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-tertiary` (fallback behind photo) |
| Border             | none |
| Border radius      | none (full-bleed, unlike the About Us `Hero`'s rounded photo) |
| Text — primary     | `text-inverse-on-surface` (heading, on photo) |
| Text — secondary   | `text-surface-container-highest` (body copy, on photo) |
| Spacing            | Photo band `h-[420px] sm:h-[480px] lg:h-[560px]`; text content `max-w-xl` |
| Shadow             | none |
| Accent usage       | Eyebrow badge here is a solid `bg-primary text-on-primary` chip (not the outlined chip used in About Us `Hero`) — full-bleed photo needs a higher-contrast badge than an outline would give |
| Overlay            | `bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/50 to-transparent` scrim so light-colored photos don't wash out light text |

**Pattern notes:**
This is a deliberate variant of the About Us `Hero`, not a shared component — full-bleed background photo with text overlaid via a gradient scrim, versus `Hero`'s side-by-side grid with a rounded, contained photo. Use `HomeHero`'s pattern only for a page's very first section when the photo should fill the viewport width; use the `Hero` grid pattern for a contained image next to text. Both share the same 3-step responsive heading type scale and eyebrow-badge concept, just styled for their different backgrounds (photo vs. flat surface).

---

### CoreExpertise / ProductApplications (photo card grid)

Files: src/components/CoreExpertise.jsx, src/components/ProductApplications.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-lowest` (CoreExpertise section) / `bg-surface-container-low` (ProductApplications section) |
| Border             | `border border-outline-variant` (card) |
| Border radius      | `rounded-lg` (card + inner photo, photo uses `overflow-hidden` on the card to clip) |
| Photo              | `w-full h-44` (CoreExpertise) / `h-40` (ProductApplications) `object-cover`, no radius of its own — clipped by parent's `overflow-hidden` |
| Text — primary     | `text-on-surface` (card title) |
| Text — secondary   | `text-on-surface-variant` (card body, `text-sm`) |
| Spacing            | Card inner padding `p-6 sm:p-8` below the photo; grid `gap-6` |
| Shadow             | none — same no-shadow rule as every other card |
| Accent usage       | Small icon swatch `w-9 h-9 rounded` beside title (CoreExpertise only); ProductApplications uses an inline icon + text row instead of a swatch, sized `w-5 h-5 text-primary` |

**Pattern notes:**
This extends the MissionExcellence card shell (`rounded-lg border border-outline-variant`, no shadow) by stacking a photo above the padded content instead of an icon-only header. CoreExpertise's third card (Solar Thermal) deliberately breaks the photo pattern and reuses the MissionExcellence stat-pair layout instead — mixing photo cards and stat cards in the same grid is intentional here to match the wireframe's asymmetric layout while staying inside existing shell conventions. Reuse this exact photo-card shape for any future "grid of illustrated categories" section.

---

### IndustriesWePower (dark band card grid)

File: src/components/IndustriesWePower.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-tertiary` (section), `bg-tertiary-container/40` (cards) |
| Border             | `border border-tertiary-container` |
| Border radius      | `rounded-lg` |
| Text — primary     | `text-on-tertiary` (heading, card title) |
| Text — secondary   | `text-on-tertiary-container` (body copy) |
| Spacing            | Card `p-6 sm:p-8`; grid `gap-6`, 3-up on `sm:grid-cols-3` (no `lg` step needed — content fits at `sm`) |
| Shadow             | none |
| Accent usage       | Icon swatch `w-9 h-9 rounded bg-primary text-on-primary` — same swatch size/shape as MissionExcellence, just always `primary` (no alternating fill, since all three cards are equal-weight) |

**Pattern notes:**
First dark-background card grid in the project — reuses Footer's `tertiary`/`on-tertiary` token pair for the section, but cards get a translucent `tertiary-container/40` fill plus a solid `tertiary-container` border so they read as distinct panels against the dark section background rather than blending in. Same card shell dimensions (`rounded-lg`, `p-6 sm:p-8`, no shadow) as every other card in the project — only the color tokens flip for the dark context.

---

### EngineeringExcellence (photo + stat badge + checklist)

File: src/components/EngineeringExcellence.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-low` |
| Border             | none on photo; none on checklist rows |
| Border radius      | `rounded-lg` (photo), `rounded-lg` (floating stat badge) |
| Text — primary     | `text-on-surface` (heading, checklist item titles) |
| Text — secondary   | `text-on-surface-variant` (body copy, checklist descriptions) |
| Spacing            | Grid `gap-8 sm:gap-10`, matches `Hero`'s split layout; checklist rows `gap-5` stacked, `gap-3` icon-to-text |
| Shadow             | `shadow-sm` on the photo, matching `Hero`/`Carousel`'s only-shadow-on-hero-photo rule |
| Accent usage       | Floating stat badge `bg-surface-container-lowest` positioned `absolute bottom-4 left-4` over the photo — reuses the stat-value pattern (`font-heading text-xl font-700 text-primary` + `font-technical` label) from MissionExcellence, just overlaid on an image instead of inline in a card |

**Pattern notes:**
Layout mirrors the About Us `Hero`/`Carousel` split grid (photo left, text right on `lg`) but swaps the eyebrow+heading+body for a heading+body+checklist. The floating stat badge over the photo is a new placement (previous stat pairs were always inline inside a card) — reuse this "badge overlaid on photo corner" treatment if a future section needs to highlight one number against imagery rather than a card.

---

### SpecTable (parameter/value table)

File: src/components/SpecTable.jsx
Last updated: 2026-07-03

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-low` (header row), `bg-surface-container-lowest` (body rows) |
| Border             | `border border-outline-variant` (outer wrapper), `border-b border-outline-variant` (row dividers, omitted on last row) |
| Border radius      | `rounded-lg` (outer wrapper only, via `overflow-hidden` — the `<table>` itself has no radius) |
| Text — primary     | `text-on-surface` (parameter column, `font-600`) |
| Text — secondary   | `text-on-surface-variant` (value column, default) |
| Text sizing        | `text-sm` throughout; header cells use `font-technical text-xs uppercase tracking-[0.05em]` matching every other eyebrow/label in the project |
| Spacing            | Cell padding `px-4 sm:px-6 py-3.5` (`py-3` for header row) |
| Shadow             | none |
| Accent usage       | A row's value can be marked `highlight: true` to render in `text-primary` instead of the default `text-on-surface-variant` — used for standout specs like COP rating |

**Pattern notes:**
First tabular data component in the project — implements the design doc's "Structural Lines" guidance (crisp 1px row dividers, mimicking panel lines) rather than the card-based info display used everywhere else. Takes a `rows` prop: `{ parameter, value, highlight? }[]`. Reuse this for any future parameter/value technical data (e.g. other product spec sheets) rather than building a new table shape.

---

### ProductHero (product page hero variant)

File: src/components/ProductHero.jsx
Last updated: 2026-07-03

Structurally identical to the About Us `Hero` split-grid pattern (photo in a rounded, bordered container on one side, text on the other) but swaps the free-text eyebrow for a `primary-fixed`/`on-primary-fixed-variant` badge chip (tinted, not outlined), and renders two CTAs (solid `secondary` primary action + `primary`-outlined secondary action) instead of `Hero`'s single body paragraph with no buttons. Takes `image`, `badge`, `title`, `description`, `primaryCta`, `secondaryCta` props so it can front any future product without a rewrite. As of 2026-07-06 this is used as a general catalog intro banner atop the Product Details page (not tied to one product) — content was reworded from "Industrial Heat Pump Water Heaters" to "Industrial Heating Solutions" when the page expanded to 4 product lines via `ProductRow`.

**Data flag:** Spec numbers for Gas-Fired, Wood-Fired, and Commercial Heat Pump (in `src/pages/ProductDetails.jsx`) are realistic placeholders, not manufacturer data — only the Heat Pump Water Heater specs are confirmed real. Replace before launch.

---

### ContactInfo (director contact cards)

File: src/components/ContactInfo.jsx
Last updated: 2026-07-06

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-lowest` (section), `bg-surface-container-low` (cards) |
| Border             | `border border-outline-variant` |
| Border radius      | `rounded-lg` |
| Text — primary     | `text-on-surface` (name, `font-body text-base font-600`) |
| Text — secondary   | `text-primary` (title/role, same treatment as `Leadership`) |
| Spacing            | Card `p-6 sm:p-8`, `text-center`; grid `gap-6` |
| Shadow             | none |
| Accent usage       | Phone link `font-technical text-sm text-on-surface-variant hover:text-primary` — phone numbers use the technical/mono label font since they're machine-readable data, per the design doc's "technical data → label font" rule |
| Layout             | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`, same grid as `Leadership` |

**Pattern notes:**
Reuses the exact same 3-director data set as `Leadership` (Chirag Parekh, Darshan Patel, Chetan Mojidra, all "Managing Director") but swaps the person-icon avatar for a `tel:` phone link, since this section's purpose is direct contact rather than introduction. Card shell uses `-low` background (Leadership's section is `-low`, so this section is `-lowest`) continuing the alternating-tone rhythm down the About Us page: Hero → MissionExcellence(`-lowest`) → Leadership(`-low`) → ContactInfo(`-lowest`). Section carries `id="contact"` and `scroll-mt-20` so the Header's "Contact" nav link and "Get Quote" CTA (both now route to `/about#contact`) land below the sticky header instead of being obscured by it — reuse `scroll-mt-20` for any future in-page anchor target.

**Data flag:** phone numbers are placeholders (`+91 98XXX XXXXX`) for all 3 directors — replace with real numbers before launch.

---

### TechnicalChip (status pill)

File: src/components/TechnicalChip.jsx
Last updated: 2026-07-06

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background/Text    | tone-based: `stock` → `bg-tertiary-fixed text-on-tertiary-fixed-variant`; `efficiency` → `bg-primary-fixed text-on-primary-fixed-variant`; `duty` → `bg-secondary-fixed text-on-secondary-fixed-variant` |
| Border radius      | `rounded-sm` |
| Text sizing        | `font-technical text-xs uppercase tracking-[0.05em]`, matching every other eyebrow/label in the project |
| Spacing            | `px-2.5 py-1` |
| Shadow             | none |

**Pattern notes:**
Implements the design doc's Technical Chips component (status pills like "In Stock", "High Efficiency"). Uses the existing `-fixed`/`on-*-fixed-variant` token pairs (already defined in `index.css`, previously unused) rather than inventing new tint colors — `stock` uses the tertiary pair (navy tint), `efficiency` uses primary (blue tint, same badge tone as `ProductHero`'s eyebrow), `duty` uses secondary (red tint) but only ever for a neutral "Heavy-Duty" label, never as a CTA — keep secondary-toned chips purely informational so they don't compete with actual CTA buttons. Takes `label` and `tone` (`'stock' | 'efficiency' | 'duty'`) props.

---

### ProductRow (alternating product catalog row)

File: src/components/ProductRow.jsx
Last updated: 2026-07-06

| Property          | Class                                                        |
| ----------------- | --------------------------------------------------------------- |
| Background        | `bg-surface-container-low` on the image container when `image.fit` is `contain` (neutral backdrop behind a studio product shot); no fill when `fit` is `cover` (photo fills the frame itself) |
| Border             | `border border-outline-variant`, shifts to `border-primary` on hover |
| Border radius      | `rounded-lg` (image container, matches every other photo container in the project) |
| Image fit          | `object-contain p-6` for studio product shots (uncropped, product fully visible) vs `object-cover` for wide lifestyle/installation photos — pass `image.fit: 'contain' | 'cover'` |
| Hover state        | `hover:shadow-md hover:border-primary` on the image container — this is the project's first use of the design doc's "Level 2 (Interaction)" elevation spec (shadow deepens + border shifts to primary on hover) |
| Layout             | `grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center`; alternate sides via a `reverse` prop that flips column order at `lg` only (`lg:[&>*:first-child]:order-2`) |
| Composition        | Badge chip (same style as `ProductHero`'s eyebrow) → heading → body copy → row of `TechnicalChip`s → `SpecTable` → optional CTA button |

**Pattern notes:**
Built for the Product Details catalog page — one `ProductRow` per product line, stacked with `divide-y divide-outline-variant` between them instead of alternating section background tones (unlike Home's section rhythm), since every row shares the same `surface-container-lowest` backdrop and the divider line alone is enough separation at this content density. This is the only component so far with a hover-elevation card (per design doc Level 2 spec) — every other card in the project is intentionally static (see MissionExcellence/Leadership pattern notes). Reuse this hover treatment for any future clickable/interactive product card, but keep static info cards shadow-free as before.

---

## Cross-component conventions

These hold across every component above — treat as defaults for new components:

- **Breakpoints:** `sm` (640px) and `lg` (1024px) are the two steps used throughout; `md` is not used in this project — don't introduce it.
- **Fonts:** `font-heading` (Hanken Grotesk) for headings only, `font-body` (Inter) for everything else, `font-technical` (JetBrains Mono) only for uppercase labels/eyebrows/stat captions.
- **Card shell default:** `rounded-lg border border-outline-variant p-6 sm:p-8`, no shadow — shadows are not used anywhere yet in this project (shadow-sm only ever appears on hero-style photos, never on cards).
- **Buttons:** `rounded` (not `rounded-lg`), `font-600`, transitions on `hover:opacity-90` or `hover:text-*` with `transition-colors`/`transition-opacity`.
- **Section horizontal rhythm:** `px-4 sm:px-6 lg:px-16`, wrapped in `max-w-(--container-max) mx-auto`.
- **Section vertical rhythm:** `py-10 sm:py-12 lg:py-16` for major sections.
- **Color roles:** `primary` (blue) for links/active states/stat values, `secondary` (red) reserved strictly for CTAs, `tertiary` (dark navy) for dark surfaces and alternating icon accents — never mix red into decorative/informational elements.
- **Routing:** the project uses `react-router-dom` (`BrowserRouter` in `main.jsx`, `<Routes>` in `App.jsx`). Header/Footer render outside `<Routes>` so they persist across pages. Header nav uses `<Link>` + `useLocation()` for active-state matching — don't hardcode an `active` flag per link anymore.
- **Alternating dark/light sections:** on multi-section pages, alternate `surface-container-lowest` / `surface-container-low` / `tertiary` (dark) section backgrounds so adjacent sections don't visually blend — see Home page's Hero(photo) → Expertise(lowest) → Industries(dark) → Excellence(low) rhythm.
