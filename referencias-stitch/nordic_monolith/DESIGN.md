---
name: Nordic Monolith
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#ffffff'
  on-tertiary: '#32302d'
  tertiary-container: '#e7e1dd'
  on-tertiary-container: '#676460'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e7e1dd'
  tertiary-fixed-dim: '#cbc6c1'
  on-tertiary-fixed: '#1d1b19'
  on-tertiary-fixed-variant: '#494643'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-sm: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.875rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the intersection of Cupertino industrial refinement and Scandinavian reductionism. Built for personal portfolios, technical executive dossiers, and curated architectural project archives, it prioritizes clarity, whitespace, and micro-precision over ornamental distraction.

The visual style is **Minimalist Glassmorphism**:
- Ultra-subtle, non-distracting translucent materials (`backdrop-blur-md` to `backdrop-blur-xl`) married to crisp structural geometry.
- Tactile, mechanical finesse achieved through hairline strokes (1px translucent boundaries) and subdued optical interactions rather than heavy drop shadows.
- A calm, deliberate atmosphere that commands authority through typographic weight balance, negative space, and disciplined monochrome hierarchy.

## Colors

The palette operates in strict monochromatic neutrality, designed to highlight visual case studies and technical prose without chromatic contamination.

### Dark Mode (Default)
- **Canvas Base:** `#09090b` (Deep Obsidian) provides total negative absorption.
- **Surface Elevation 1 (Cards, Dock):** `#121214` rendered at 70–85% opacity with backdrop blur.
- **Surface Elevation 2 (Hover states, Modals):** `#18181b` to `#27272a`.
- **Text Primary:** `#fafafa` (98% luminous contrast).
- **Text Secondary / Metadata:** `#a1a1aa` (muted titanium).
- **Text Tertiary / Disabled:** `#71717a` (deep slate).
- **Hairline Borders:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.12)`.

### Light Mode (Duality)
- **Canvas Base:** `#fafafa`.
- **Surface Elevation 1:** `#ffffff` at 80% opacity with backdrop blur.
- **Text Primary:** `#09090b`.
- **Text Secondary:** `#71717a`.
- **Hairline Borders:** `rgba(0, 0, 0, 0.06)` to `rgba(0, 0, 0, 0.08)`.

Accents are eschewed in favor of high-contrast state flips (pure black to pure white) and delicate luminosity shifts.

## Typography

The typographic engine uses **Inter** with calibrated Apple-style metric adjustments:
- Negative tracking scales progressively tighter as font size increases, eliminating optical looseness in headlines.
- `display-lg` and `headline-xl` feature a semi-bold weight (`600`) to anchor project hero statements without brutish heavy weights.
- Body copy relies on Apple's standard text size (`15px` and `17px`) with generous line-height for effortless long-form reading across engineering logs and project dissections.
- Monospace tokens (using `JetBrains Mono` or native system monospaces) may be invoked strictly for inline terminal snippets, timestamps, or commit hashes at `12px` with neutral tracking.

## Layout & Spacing

The portfolio is structured around a centered single-column or dual-column editorial track, constrained to a maximum reading width of `680px` for essays and `1080px` for project galleries.

- **Grid Structure:** An 8pt base unit grid. For showcases, a 12-column responsive layout is used on desktop (`margin: 3rem`, `gutter: 1.5rem`), transitioning to a single fluid column on mobile screens (`margin: 1.25rem`, `gutter: 1rem`).
- **Vertical Rhythm:** Generous vertical breaks (`space-xl` to double `space-xl`) between timeline milestones, project cards, and journal entries to ensure content never feels congested.
- **Adaptive Breakpoints:**
  - `Mobile` (< 640px): Full-width stacked modules, floating bottom dock collapses to streamlined icon/label navigation.
  - `Tablet` (640px – 1024px): 2-column project showcase, standard editorial column.
  - `Desktop` (> 1024px): Asymmetrical layouts (e.g., sticky biographical sidebar paired with scrolling timeline and projects).

## Elevation & Depth

Visual hierarchy does not use diffuse, dark skeuomorphic drops. Instead, depth is articulated through **Apple-inspired translucent layering and luminous refraction**:

1. **Surface 0 (Ground):** Solid canvas (`#09090b` in dark mode).
2. **Surface 1 (Card/Container):** Semi-opaque fills (`rgba(18, 18, 20, 0.72)`) backed by `backdrop-filter: blur(16px) saturate(180%)`. Edge definition is maintained by a 1px inner boundary stroke (`rgba(255, 255, 255, 0.08)`).
3. **Surface 2 (Floating Floating Dock & Flyouts):** Suspended above the canvas with an intensified blur (`backdrop-filter: blur(24px) saturate(190%)`), an inner glow stroke (`rgba(255, 255, 255, 0.15)`), and a sub-perceptual directional contact shadow (`box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5)`).
4. **State Layering:** Active or hovered items receive micro-increases in surface luminosity (+4% brightness) rather than physical lifts or aggressive transformations.

## Shapes

The geometry follows iOS-grade continuous squircle curves:
- **Base Components (Inputs, Buttons, Badges):** 0.5rem (`8px`) to full continuous pill shapes (`9999px`).
- **Cards, Showcase Tiles, Timeline Containers:** `rounded-lg` (`1rem` / `16px`) up to `rounded-xl` (`1.5rem` / `24px`) for large showcase units.
- **Floating Island Navigation:** Full continuous pill curvature (`9999px`) with strictly proportionate vertical and horizontal padding to echo the Apple dynamic island aesthetic.

## Components

### 1. Floating Dock / Navigation Island
- **Structure:** Centered, fixed-bottom or sticky-top floating capsule with `roundedness: 3` (`border-radius: 9999px`).
- **Material:** `rgba(18, 18, 20, 0.75)` backdrop blur (20px), bounded by a hairline `1px solid rgba(255, 255, 255, 0.1)`.
- **Items:** Subtle monochrome SVG icons and `label-md` text. Active state highlighted with a soft pill indicator (`rgba(255, 255, 255, 0.08)`).

### 2. Buttons
- **Primary:** High-contrast solid invert (`#fafafa` fill with `#09090b` typography in dark mode). Border-radius: `9999px` (pill) or `0.75rem`.
- **Secondary / Ghost:** Translucent background (`rgba(255, 255, 255, 0.05)`), hairline border (`rgba(255, 255, 255, 0.1)`), `#fafafa` text. Hover shifts background to `rgba(255, 255, 255, 0.1)`.

### 3. Project Showcase Cards
- **Container:** `1.25rem` (`20px`) border-radius, background `#121214` at 60% opacity with `backdrop-filter: blur(12px)`.
- **Border:** 1px `rgba(255, 255, 255, 0.07)`.
- **Hover Behavior:** Smooth border transition to `rgba(255, 255, 255, 0.2)` with a slight 0.5% scale spring animation.
- **Imagery:** Edge-to-edge or 12px inset with continuous matching corner radii.

### 4. Experience Timeline & CV
- **Track:** Minimal 1px vertical hairline rule (`rgba(255, 255, 255, 0.1)`).
- **Node:** 7px solid circular pip (`#fafafa`), with an outer ring ping on current active positions.
- **Entry Structure:** Left-aligned or inline metadata (dates set in `body-sm`, `#71717a`), role and organization in `headline-md`, followed by concise scannable bullet points in `body-md`.

### 5. Pill Badges / Tags
- **Structure:** Pill shape (`border-radius: 9999px`), `space-xs` vertical padding, `space-sm` horizontal padding.
- **Palette:** `rgba(255, 255, 255, 0.04)` fill, `1px solid rgba(255, 255, 255, 0.08)` border, typography set in `label-sm` with `#a1a1aa`.

### 6. Journal & Writing Entries
- **List Style:** Borderless, clean rows separated by hairline dividers (`rgba(255, 255, 255, 0.06)`).
- **Format:** Left-aligned post title (`body-lg`, `#fafafa`), right-aligned monospace publication timestamp (`body-sm`, `#71717a`). Hover induces subtle rightward chevron translation (2px).

### 7. Form & Interactive Inputs
- **Input Fields:** Hairline translucent border, `#121214` background. Focus state transitions border to `#fafafa` with zero outer ring glow. Caret is pure white.
- **Switches & Selectors:** Apple-style spring-animated switches, 20px height, inset thumb with monochrome toggle response.