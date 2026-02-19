---
name: frontend-dev
description: Component architecture, animation system, and development patterns for the Skattio Next.js landing page. Use when building or modifying sections, components, or animations.
---

# Frontend Development Patterns

## Section Component Template

Every section follows this structure:

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function SectionName() {
  return (
    <section id="section-id" className="py-20 sm:py-28 bg-white">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp}>
          {/* Section header */}
        </motion.div>

        <motion.div variants={fadeUp}>
          {/* Section content */}
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### Key rules:
- Always `"use client"` (framer-motion requires it)
- Data is defined inline as constants (no external data fetching)
- Export named function (not default)
- Section ID in Swedish for anchor nav

---

## Adding a New Section

1. Create `src/components/sections/NewSection.tsx` using the template above
2. Add to `src/app/page.tsx` in the correct visual order
3. If it needs an anchor, add the ID to the Header nav links
4. Follow the section flow from the design system (check bg color assignment)

---

## Animation System

### Existing variants (`src/lib/animations.ts`)

| Variant | Effect | Use for |
|---|---|---|
| `fadeUp` | Translate Y + opacity | Default for most content blocks |
| `fadeIn` | Opacity only | Overlays, subtle reveals |
| `staggerContainer` | Parent stagger orchestrator | Wrapping multiple animated children |

### Springs

| Spring | Config | Use for |
|---|---|---|
| `springSnappy` | stiffness: 300, damping: 30 | Buttons, small interactions |
| `springGentle` | stiffness: 200, damping: 25 | Cards, larger elements |

### Additional variants to add when needed

```ts
// Scale up — for cards, pricing, feature items
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Slide from left — for asymmetric layouts
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Blur in — for hero text, premium feel
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};
```

### Animation Rules

1. **Animate at the block level**, not every individual element. A card animates as one unit, not each line of text inside it.
2. Always use `viewport={{ once: true, margin: "-100px" }}` — elements animate once when ~100px from entering.
3. Stagger timing: `0.08` to `0.12` seconds between children.
4. **Vary animations across sections** — don't use `fadeUp` for everything. Mix in `scaleUp` for cards, `slideFromLeft` for asymmetric layouts.
5. Hero can use `blurIn` for the headline for a premium feel.
6. Keep animation durations between `0.4` and `0.6` seconds.

---

## Responsive Design

- **Mobile-first**: write base styles for mobile, enhance with breakpoints
- Primary breakpoints: `sm:` (640px) and `lg:` (1024px)
- Use `md:` sparingly, only when the `sm` → `lg` jump is too abrupt
- Test: Hero headline readable on 320px width, cards stack cleanly on mobile

---

## Grid Patterns

### 3-column (standard — HowItWorks, Pricing)
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
```

### 2-column asymmetric (Features — text + visual)
```
grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-12 items-center
```

### Bento grid (Features — varied sizes)
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
/* Use col-span-2, row-span-2 on featured items */
```

### FAQ split (heading + accordion)
```
grid lg:grid-cols-[1fr,1.5fr] gap-12 items-start
```

---

## shadcn/ui Conventions

- Import from `@/components/ui/<component>`
- Use `cn()` from `@/lib/utils` for conditional classes
- **Never modify** files in `src/components/ui/` — override with className
- Use `asChild` prop when wrapping Next.js `<Link>` in `<Button>`
- Add new components: `pnpx shadcn@latest add <component>`

---

## File Naming

| Type | Convention | Example |
|---|---|---|
| Section components | PascalCase | `HowItWorks.tsx` |
| UI components | lowercase | `button.tsx` (shadcn default) |
| Lib utilities | camelCase | `animations.ts` |
| Config files | camelCase | `site.ts` |

---

## Import Order

1. React / Next.js
2. Third-party (framer-motion, lucide-react)
3. `@/components/ui/*`
4. `@/components/*`
5. `@/lib/*`
6. `@/config/*`

---

## Common Patterns

### CTA link to app

```tsx
import { siteConfig } from "@/config/site";

<a href={siteConfig.links.app}>
  Kom igång
</a>
```

All CTA buttons link to `siteConfig.links.app` (app.skattio.se).

### Icon usage

```tsx
import { ArrowRight, Check } from "lucide-react";

<ArrowRight className="w-4 h-4" />
```

Only use `lucide-react`. Never Font Awesome, Heroicons, etc.

### Container pattern

Every section content area uses:
```
mx-auto max-w-6xl px-6
```

This is consistent across all sections. Don't use `max-w-7xl` or `max-w-5xl` unless the design system explicitly calls for it (e.g., `max-w-3xl` for CTA section text).
