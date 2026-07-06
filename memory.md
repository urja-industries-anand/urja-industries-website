# Memory — About Us Page Build

Last updated: 2026-07-03

## What was built

Full React + Vite + Tailwind CSS v4 project scaffolded from scratch (repo had no code before the first session — only `designs/`, `wireframes/`, `assets/` folders). Built the About Us page end to end:

- `index.html` — Google Fonts (Hanken Grotesk, Inter, JetBrains Mono) loaded via `<link>`
- `postcss.config.js` — Tailwind v4 PostCSS plugin
- `src/index.css` — full `@theme` block mapping every color/typography/spacing token from `designs/about_us_design.md`
- `src/components/Header.jsx` — logo (no "Urja Industries" text), nav links, "Get Quote" CTA, hamburger menu below `lg` breakpoint, logo scales `h-11 sm:h-14 lg:h-16`
- `src/components/Footer.jsx` — logo (fixed `h-9`, does not scale), link columns, copyright (keeps literal "Urja Industries" text in copyright line per user decision)
- `src/components/Hero.jsx` — eyebrow badge, heading, body copy, now uses an image carousel (see Carousel below) instead of a static photo
- `src/components/Carousel.jsx` (new this session) — auto-advancing image slider, cross-fades every 4s, clickable dot indicators, used inside Hero
- `src/components/MissionExcellence.jsx` — two-card row (Our Mission / 20+ Years of Excellence)
- `src/components/Leadership.jsx` — 3-card grid (Chirag Parekh, Darshan Patel, Chetan Mojidra, all "Managing Director"), each with an individual person-silhouette SVG icon placeholder
- `src/pages/AboutUs.jsx` — composes Hero + MissionExcellence + Leadership
- `src/App.jsx` — Header + AboutUs + Footer, no router
- `ui-registry.md` — component pattern registry (created via `/imprint`), now covers Header, Footer, Hero, MissionExcellence, Leadership, and Carousel (6 entries)
- `src/assets/photos/` now has 4 images copied in: `urjaindustries_logo.jpeg`, `team.jpeg`, `urja_building.jpeg`, `products.jpeg` (last two added this session for the carousel)

Verified responsive layout at 375px/768px/1440px plus mobile menu open state, and verified the carousel auto-advance/dot-click behavior — all via Playwright screenshot scripts, no console errors.

## Decisions made

- **Stack**: React + Vite + Tailwind CSS v4 (CSS-first `@theme` config, not `tailwind.config.js`). No React Router yet — single page rendered directly by `App.jsx`.
- **Fonts**: Google Fonts CDN, not self-hosted.
- **Header/Footer**: shared reusable components, since `homepage_design.md` and `product_details_design.md` already exist, signaling more pages are coming.
- **Nav links**: placeholder `href="#"` anchors — Home/Products/Energy Efficiency/Contact pages don't exist yet.
- **Logo**: `<img>` in header and footer, no hardcoded "Urja Industries" text in either — except the footer's literal copyright line (confirmed intentional, treated as legal boilerplate not brand wordmark). Header logo scales responsively; footer logo intentionally does not.
- **Leadership cards**: individual generic person-icon SVG placeholders per card — explicitly not a shared team photo.
- **Responsive breakpoints**: only `sm` (640px) and `lg` (1024px) used project-wide — `md` intentionally never used. Mobile nav collapses to a hamburger below `lg`.
- **Card shell convention**: `rounded-lg border border-outline-variant p-6 sm:p-8`, no shadows anywhere except the Hero image/carousel container (`shadow-sm`) — cards otherwise differentiate via border + tonal background only.
- **Carousel pattern** (new): auto-advance every 4000ms via `setInterval` in `useEffect` (cleaned up on unmount), cross-fade via opacity transitions, dot indicators double as manual controls with `aria-label`/`aria-current`. Dots use `bg-on-primary` (white) — first use of an image-overlay control pattern in the project; flagged in `ui-registry.md` as untested against a light/washed-out photo background.

## Problems solved

- `npm create vite@latest .` fails/cancels in a non-empty directory — worked around by scaffolding into a scratch temp dir and copying files into the project root.
- `npm create vite@latest` installed Tailwind v4, which uses `@theme` in CSS rather than `tailwind.config.js` — adapted design-token setup to that API.
- Playwright isn't preinstalled — install per-session as a scratchpad-local dependency (`npm install playwright --no-save` + `npx playwright install chromium`); doesn't persist across scratchpad directories.
- `chromium-cli` (preferred per the `run` skill) isn't available in this environment — fall back to a raw Playwright script.
- Carousel slides use `absolute inset-0`, which takes them out of document flow — the parent container needs an explicit height (`h-[280px] sm:h-[360px] lg:h-[420px]` in Hero), not `h-auto`.

## Current state

About Us page is complete, styled, responsive, and includes a working auto-advancing carousel (team/building/products photos) in the Hero section. Dev server runs via `npm run dev`. No routing, no other pages built yet. `ui-registry.md` has 6 documented component patterns and is the baseline reference for all future UI work.

## Next session starts with

Build the Home page (`designs/homepage_design.md` + `wireframes/homepage.png`) or Product Details page (`designs/product_details_design.md` + `wireframes/product-details.png`), reusing existing `Header`/`Footer`/`Carousel` components and following `ui-registry.md` patterns. Check the registry before writing any new component classes — especially the Carousel entry if the new page needs an image gallery (e.g. Product Details).

## Open questions

- No routing exists yet — decide whether to introduce React Router when the second page gets built (previously deferred on purpose).
- Nav links are still placeholder `#` anchors; wire to real routes once more pages exist.
- Carousel's white dot-indicator treatment (`bg-on-primary`) hasn't been tested against a lighter/washed-out photo — worth a visual check before reusing it on a new page with different imagery.
