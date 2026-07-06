---
name: Industrial Thermal System
colors:
  surface: "#f8f9fa"
  surface-dim: "#d9dadb"
  surface-bright: "#f8f9fa"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f4f5"
  surface-container: "#edeeef"
  surface-container-high: "#e7e8e9"
  surface-container-highest: "#e1e3e4"
  on-surface: "#191c1d"
  on-surface-variant: "#434653"
  inverse-surface: "#2e3132"
  inverse-on-surface: "#f0f1f2"
  outline: "#737784"
  outline-variant: "#c3c6d5"
  surface-tint: "#2559bd"
  primary: "#00327d"
  on-primary: "#ffffff"
  primary-container: "#0047ab"
  on-primary-container: "#a5bdff"
  inverse-primary: "#b1c5ff"
  secondary: "#bb0014"
  on-secondary: "#ffffff"
  secondary-container: "#e41f25"
  on-secondary-container: "#fffbff"
  tertiary: "#2c3749"
  on-tertiary: "#ffffff"
  tertiary-container: "#434e61"
  on-tertiary-container: "#b4bfd5"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#dae2ff"
  primary-fixed-dim: "#b1c5ff"
  on-primary-fixed: "#001946"
  on-primary-fixed-variant: "#00419e"
  secondary-fixed: "#ffdad6"
  secondary-fixed-dim: "#ffb4ab"
  on-secondary-fixed: "#410002"
  on-secondary-fixed-variant: "#93000d"
  tertiary-fixed: "#d8e3fa"
  tertiary-fixed-dim: "#bcc7dd"
  on-tertiary-fixed: "#111c2c"
  on-tertiary-fixed-variant: "#3c475a"
  background: "#f8f9fa"
  on-background: "#191c1d"
  surface-variant: "#e1e3e4"
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
---

## Brand & Style

This design system is built for an industrial manufacturing context, emphasizing reliability, technical precision, and longevity. The visual language bridges the gap between heavy-duty engineering and modern energy efficiency.

The aesthetic follows a **Corporate / Modern** style with a hint of **Minimalism**. It prioritizes clarity and high information density without sacrificing the premium feel of an established industry leader. The emotional response should be one of "total confidence"—the user should feel that the equipment is robust, the engineering is sound, and the company is dependable.

Visual cues are taken from stainless steel textures, deep industrial pigments, and the high-visibility safety accents found in manufacturing environments.

## Colors

The palette is anchored by **Industrial Blue**, representing the core brand identity and water-related technology. This is supported by **Safety Red** (derived from the logo), used sparingly for high-priority calls to action, alerts, and critical highlights.

- **Primary (Industrial Blue):** Use for headers, primary actions, and brand-heavy components.
- **Secondary (Safety Red):** Use for "Urgent" status, heating indicators, and primary conversion buttons.
- **Neutral (Engineered Greys):** A range of greys from cool slate to bright silver provide the background structure, mimicking the metallic surfaces of heating units.
- **Surface:** Clean white is the primary surface color to ensure a modern, professional look that suggests efficiency and cleanliness.

## Typography

The typography strategy focuses on "Technical Readability."

**Hanken Grotesk** is used for headlines to provide a sharp, contemporary feel that looks "engineered." **Inter** is used for the majority of body copy due to its exceptional legibility in technical specifications. **JetBrains Mono** is introduced for labels, serial numbers, and technical data points (like temperature or pressure readings) to reinforce the industrial, machine-readable aesthetic.

Hierarchy is maintained through strict weight differentiation rather than just size. Technical data should always be presented in the label font to distinguish it from marketing or instructional prose.

## Layout & Spacing

The system utilizes a **Fixed Grid** for desktop applications to maintain the structural integrity of complex technical data.

- **Desktop:** 12-column grid with a 1280px max-width container. 24px gutters provide ample breathing room for complex product catalogs.
- **Tablet:** 8-column fluid grid.
- **Mobile:** 4-column fluid grid with 16px margins.

The rhythm is based on an **8px linear scale**. Use larger gaps (48px+) between distinct product sections and tighter gaps (8px-16px) between technical specs and their corresponding labels.

## Elevation & Depth

To maintain the "established" and "solid" brand feel, the design system avoids overly trendy blurs or neon glows. Instead, it uses **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Base):** Light grey or white background.
- **Level 1 (Cards):** White surface with a very subtle 1px border (#E2E8F0) and a soft, low-opacity shadow (4% alpha) to suggest the card is sitting firmly on a surface.
- **Level 2 (Interaction):** When hovering over actionable cards, the shadow should deepen and expand slightly, and the border color should shift to the primary blue.
- **Structural Lines:** Use crisp 1px lines to separate data points in tables, mimicking the panel lines found on industrial boiler housings.

## Shapes

The shape language is **Soft (0.25rem)**. This choice balances the "hard" nature of industrial equipment with the "modern" requirement for user-friendly interfaces.

- **Primary Buttons:** 4px (Soft) corner radius.
- **Input Fields:** 4px (Soft) corner radius with a defined 1px border.
- **Large Product Cards:** 8px (rounded-lg) to make them feel like distinct, manageable units of information.
- **Icons:** Use geometric, stroke-based icons with sharp or slightly softened caps, avoiding overly bubbly or cartoonish styles.

## Components

### Buttons

- **Primary:** Solid Industrial Blue with white text. High-contrast and impactful.
- **Highlight (CTA):** Solid Safety Red, reserved for "Get Quote" or emergency support actions.
- **Secondary:** Outlined in Industrial Blue with a transparent background.

### Input Fields & Selects

Use a light grey background (#F1F5F9) with a bottom-only 2px border that turns blue on focus. This mimics the look of a control panel.

### Technical Chips

Use for status (e.g., "In Stock," "High Efficiency"). These should use the JetBrains Mono font and high-contrast background tints (e.g., light green background with dark green text).

### Data Cards

Product cards should include a dedicated "Specs" area at the bottom using a slightly darker neutral background (#EDF2F7) to separate technical data from the product title and description.

### Progress & Gauges

For heating equipment, use linear progress bars or radial gauges that utilize the primary blue to red gradient to indicate temperature levels or energy output visually.
