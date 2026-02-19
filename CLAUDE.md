# CLAUDE.md

## Project

Skattio (skattio.se) — Swedish tax service landing page. All content in Swedish.

## Stack

Next.js 16, React 19, Tailwind CSS 4, shadcn/ui (new-york style), framer-motion, pnpm

## Commands

- `pnpm dev` — Dev server (localhost:3000)
- `pnpm build` — Production build
- `pnpm lint` — ESLint
- `pnpx shadcn@latest add <component>` — Add shadcn/ui components

## Architecture

Single route (`src/app/page.tsx`) composing sections in order:
Header → Hero → HowItWorks → Features → Pricing → FAQ → CTA → Footer

### Key paths

- `src/components/sections/` — Page sections (self-contained `"use client"` components)
- `src/components/ui/` — shadcn/ui primitives
- `src/components/` — Header, Footer
- `src/config/site.ts` — Site config; all CTA links → `siteConfig.links.app`
- `src/lib/animations.ts` — Shared framer-motion variants
- `src/lib/utils.ts` — `cn()` utility

## Conventions

- Path alias: `@/*` → `./src/*`
- Icons: lucide-react only
- Fonts: Satoshi (headings, `--font-display`), Inter (body, `--font-body`)
- Section IDs: `#hur-det-fungerar`, `#funktioner`, `#priser`, `#faq`
- Container: `mx-auto max-w-6xl px-6`

## Skills

When making **any visual or styling decision**, load the `design-system` skill (`.claude/skills/design-system/SKILL.md`).
When **building or modifying components**, load the `frontend-dev` skill (`.claude/skills/frontend-dev/SKILL.md`).
