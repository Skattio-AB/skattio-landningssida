---
name: design-system
description: Skattio visual identity and design tokens. Defines color palette, typography, spacing, shadows, layout rules, and component styling for a professional, trust-building Swedish tax service. Use when making any visual or styling decision.
---

# Skattio Design System

## Brand Identity

Trust + competence + clarity + approachability. We handle people's taxes — every pixel should communicate "we know what we're doing."

**Visual references**: Stripe, Mercury, Brex, Klarna
**NOT**: generic SaaS templates, bright startup palettes, Notion/Linear clones, "vibecoded" AI slop

---

## Color Palette

### Primary: Navy (trust, authority)

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#0A0F1E` | Darkest bg (CTA section, footer) |
| `navy-900` | `#0F1629` | Dark surfaces, primary color for shadcn |
| `navy-800` | `#1A2342` | Cards on dark backgrounds |
| `navy-700` | `#243056` | Borders on dark, secondary text on dark |
| `navy-600` | `#2E3D6B` | Muted elements on dark |
| `navy-500` | `#3A4F87` | Icons, decorative on dark |
| `navy-400` | `#5A6FA3` | Placeholder text on dark |
| `navy-300` | `#8491B8` | Subtle text on dark |
| `navy-200` | `#B0B9D1` | Borders on light |
| `navy-100` | `#E8ECF4` | Light borders, dividers |
| `navy-50` | `#F4F6FA` | Subtle blue-gray surface (alternate sections) |

### Accent: Warm Orange (energy, CTAs — use sparingly)

| Token | Hex | Usage |
|---|---|---|
| `accent-600` | `#D14E0A` | CTA hover state |
| `accent-500` | `#E8590C` | CTA button background, primary accent |
| `accent-400` | `#F97316` | Highlights on dark backgrounds |
| `accent-300` | `#FDBA74` | Subtle warm highlights |
| `accent-100` | `#FFF1E6` | Subtle warm tint surface |
| `accent-50` | `#FFF8F3` | Barely-there warm bg |

### The Orange Rule

**Maximum 3 orange elements per viewport.** Ratio: 70% navy/neutrals, 20% white, 10% orange.

Orange is NEVER used as:
- Section backgrounds
- Large fills or gradients
- Card backgrounds
- Text color (except small labels/badges)

Orange IS used for:
- CTA buttons (1-2 per viewport)
- Small accent badges
- Icon highlights (sparingly)
- Focus rings

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `neutral-950` | `#0A0A0B` | Headings on light bg |
| `neutral-900` | `#171717` | Body text (primary) |
| `neutral-800` | `#262626` | Strong secondary text |
| `neutral-700` | `#404040` | Secondary text |
| `neutral-600` | `#525252` | Muted text |
| `neutral-500` | `#737373` | Placeholder, caption |
| `neutral-400` | `#A3A3A3` | Disabled text |
| `neutral-300` | `#D4D4D4` | Borders, dividers |
| `neutral-200` | `#E5E5E5` | Light borders, card borders |
| `neutral-100` | `#F5F5F5` | Subtle surface |
| `neutral-50` | `#FAFAFA` | Alt section background |

### Semantic

- Success: `#10B981` — checkmarks, confirmation
- Info: `#3B82F6` — informational badges
- Warning: `#F59E0B` — caution states
- Error: `#EF4444` — form errors, destructive

---

## Typography

### Font Stack

- **Headings**: Satoshi (self-hosted variable, `--font-display` / `font-heading`). Geometric, premium, confident.
- **Body**: Inter (Google Fonts variable, `--font-body` / `font-sans`). Neutral, professional, excellent readability.

Font files: `public/fonts/Satoshi-Variable.woff2`, `public/fonts/Satoshi-VariableItalic.woff2`

### Weight Scale

| Weight | Token | Usage |
|---|---|---|
| 400 | Regular | Body text, paragraphs |
| 500 | Medium | Labels, emphasis, nav links |
| 600 | Semibold | Subheadings, card titles |
| 700 | Bold | Section headings (h2, h3) |
| 800 | Extrabold | Hero h1 only |

### Type Scale

| Element | Mobile | Desktop | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Hero h1 | `text-3xl` | `text-5xl sm:text-6xl` | 800 | `leading-[1.1]` | `tracking-tight` |
| Section h2 | `text-2xl` | `text-3xl sm:text-4xl` | 700 | `leading-[1.15]` | `tracking-tight` |
| Section subtitle | `text-lg` | `text-lg sm:text-xl` | 400 | `leading-relaxed` | — |
| Card title | `text-lg` | `text-xl` | 600 | `leading-snug` | — |
| Body | `text-base` | `text-base` | 400 | `leading-relaxed` | — |
| Small/caption | `text-sm` | `text-sm` | 500 | `leading-normal` | — |

### Text Colors by Surface

**On light backgrounds**: headings `text-neutral-950`, body `text-neutral-700`, muted `text-neutral-500`
**On dark (navy) backgrounds**: headings `text-white`, body `text-navy-300`, muted `text-navy-400`

**Rule**: Never use `#000000` pure black. Darkest text is `neutral-950` (#0A0A0B).
**Rule**: Body text max-width `max-w-2xl` for readability.

---

## Shadows

Purposeful escalation — shadows communicate hierarchy, not decoration.

| Token | Value | Usage |
|---|---|---|
| `shadow-card` | `0 1px 3px rgba(10,15,30,0.04), 0 1px 2px rgba(10,15,30,0.02)` | Card resting state |
| `shadow-card-hover` | `0 4px 16px rgba(10,15,30,0.08), 0 2px 4px rgba(10,15,30,0.04)` | Card hover state |
| `shadow-elevated` | `0 8px 30px rgba(10,15,30,0.12), 0 2px 8px rgba(10,15,30,0.06)` | Pricing featured card, modals |
| `shadow-glow` | `0 0 20px rgba(232,89,12,0.25), 0 0 40px rgba(232,89,12,0.10)` | CTA button on dark bg |

---

## Section Flow

The page follows a **light-to-dark narrative arc**. Light hero builds approachability, dark CTA/footer closes with authority.

| # | Section | Background | Text | Notes |
|---|---|---|---|---|
| 1 | Hero | White/warm subtle gradient | Navy headings, neutral body | Light & welcoming, orange CTA button |
| 2 | HowItWorks | White `#FFFFFF` | Standard neutral text | Clean, spacious |
| 3 | Features | `navy-50` or white | Standard neutral text | Visual variety with bento/asymmetric grid |
| 4 | Pricing | White `#FFFFFF` | Standard neutral text | Featured card gets `shadow-elevated` + accent border |
| 5 | FAQ | `neutral-50` | Standard neutral text | Left-aligned heading |
| 6 | CTA | **`navy-950`** | White headings, navy-300 body | The dramatic dark shift — authority close |
| 7 | Footer | `navy-900` | navy-300 body, white links | Continues dark authority |

**Rules**:
- Never two identical backgrounds adjacent
- Hero is always light (not dark)
- CTA section is always the dark dramatic moment
- Vary section padding: hero `py-24 sm:py-32`, standard `py-20 sm:py-28`, CTA `py-16 sm:py-24` (tighter)

---

## Layout Variation

**Critical rule**: NOT every section should be center-aligned with a 3-column grid. Vary layouts:

- **Hero**: Left-aligned or center, large headline + subtitle + CTA
- **HowItWorks**: Horizontal numbered steps or timeline
- **Features**: Bento grid (varying `col-span`, `row-span`) or 2-column asymmetric (text left, visual right)
- **Pricing**: Center-aligned cards, featured card elevated
- **FAQ**: Left-aligned heading + right-aligned accordion (or full-width accordion with left heading)
- **CTA**: Centered, tight, dark bg

Container: `mx-auto max-w-6xl px-6` (consistent)

---

## Icon Treatment

**On light backgrounds**: `bg-navy-50 text-navy-700` icon container, `rounded-lg p-2.5`
**On dark backgrounds**: `bg-white/10 text-white` icon container, `rounded-lg p-2.5`
**Accent icon**: `bg-accent-100 text-accent-500` (use sparingly, counts toward orange budget)

---

## Implementation References

- **CSS tokens**: See `tokens.md` for copy-paste-ready `globals.css` replacement
- **Component classes**: See `components.md` for Tailwind class strings per component
