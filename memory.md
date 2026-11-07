# Project Memory — Urja Industries Website

Last updated: 2026-11-07

## Project Overview

Urja Industries' responsive marketing website presents the company, its water-heating products, and contact information. The application currently includes Home, About Us, and Products pages with shared site navigation and footer components.

## Technology Stack

- React 19 with Vite 8.
- React Router 7 for client-side routes.
- Tailwind CSS 4 using CSS-first `@theme` tokens in `src/index.css`; there is no `tailwind.config.js`.
- Oxlint for static analysis.
- Google Fonts loaded from `index.html`: Hanken Grotesk, Inter, and JetBrains Mono.

## Architecture Decisions

- `src/App.jsx` owns the shared `Header`, `Footer`, `ScrollToHash`, and routes for `/`, `/about`, and `/products`.
- Page-level composition lives in `src/pages`; reusable presentation components live in `src/components`.
- Brand colors, typography, spacing, and shape tokens are centralized in the Tailwind `@theme` block in `src/index.css`.
- Product data for the current Products page is defined in `src/pages/ProductDetails.jsx`; the approved source content is `Details.md`.
- `ProductDetails.jsx` uses reusable `ProductCard` and `ProductModal` components within the page because their state and behavior are specific to the product grid.

## Coding Conventions

- Reuse the named theme utilities (`bg-primary`, `text-on-surface`, `border-outline-variant`, etc.) rather than introducing arbitrary brand colors.
- Use shared `Header`, `Footer`, hero, and application-card components across pages.
- Interactive cards must work with keyboard focus as well as pointer hover.
- Keep modal interactions accessible: provide dialog labelling, initial focus, a focus trap, Escape/backdrop closing, background scroll locking, and focus restoration.
- Keep image `alt` text meaningful in content views and empty for decorative duplicate imagery.

## Important Technical Decisions

- Product cards use CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, `rotateY`, and hidden backfaces) and honor reduced-motion preferences.
- The Products page currently includes only the two products approved in `Details.md`: Gas-Fired Water Heater and Wood-Fired Water Heater. Do not restore placeholder product specifications without approved source data.
- Each product card opens a product-specific modal populated from the same product object, preventing card and popup content from diverging.
- Product CTAs link to `/about#contact`; `ScrollToHash` handles navigation to the contact section.
- The existing hero carousel auto-advances every four seconds, supports manual dot controls, and requires an explicitly sized parent because its slides are absolutely positioned.

## Current Implementation Status

- Home page: implemented at `/`.
- About Us page: implemented at `/about`, including the contact section.
- Products page: implemented at `/products` with a responsive two-column product grid, hover/focus flip cards, and separate Gas-Fired and Wood-Fired product detail dialogs.
- Shared responsive navigation, footer, image carousel, core-expertise cards, application cards, and hash scrolling are implemented.
- The Product Details change was verified with `npm run build` and `npm run lint` on 2026-11-07.

## Known Issues and Technical Debt

- `ProductRow.jsx`, `SpecTable.jsx`, and `TechnicalChip.jsx` remain in the repository but are no longer used by the current two-product grid; confirm future product-page plans before removing them.
- Some product claims in `Details.md` may need manufacturer or compliance review before public launch; the UI preserves their intended meaning with light grammar cleanup.
- The carousel's white dot indicators should be visually checked before reusing the pattern over very light imagery.

## Lessons Learned

- Do not invent technical specifications for products when approved source content is limited; display only verified details.
- Keep the flip-card preview concise and put the full feature list in the modal so fixed-height cards remain readable.
- A visual modal is not sufficient by itself: focus management and scroll locking are required for reliable keyboard and mobile behavior.
- Absolutely positioned carousel slides require an explicit parent height.
