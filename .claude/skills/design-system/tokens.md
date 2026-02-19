# Design Tokens — Copy-Paste CSS

This file contains ready-to-use CSS for `src/app/globals.css` and font configuration for `src/app/layout.tsx`.

---

## Font Face Declaration

Add this at the top of `globals.css`, after the imports:

```css
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-VariableItalic.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
  font-style: italic;
}
```

---

## Complete globals.css

Replace the entire `src/app/globals.css` with:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-VariableItalic.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
  font-style: italic;
}

@theme inline {
  /* shadcn color mapping */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* Navy palette (primary — trust, authority) */
  --color-navy-950: #0A0F1E;
  --color-navy-900: #0F1629;
  --color-navy-800: #1A2342;
  --color-navy-700: #243056;
  --color-navy-600: #2E3D6B;
  --color-navy-500: #3A4F87;
  --color-navy-400: #5A6FA3;
  --color-navy-300: #8491B8;
  --color-navy-200: #B0B9D1;
  --color-navy-100: #E8ECF4;
  --color-navy-50: #F4F6FA;

  /* Accent palette (warm orange — sparingly) */
  --color-accent-600: #D14E0A;
  --color-accent-500: #E8590C;
  --color-accent-400: #F97316;
  --color-accent-300: #FDBA74;
  --color-accent-100: #FFF1E6;
  --color-accent-50: #FFF8F3;

  /* Neutral palette */
  --color-neutral-950: #0A0A0B;
  --color-neutral-900: #171717;
  --color-neutral-800: #262626;
  --color-neutral-700: #404040;
  --color-neutral-600: #525252;
  --color-neutral-500: #737373;
  --color-neutral-400: #A3A3A3;
  --color-neutral-300: #D4D4D4;
  --color-neutral-200: #E5E5E5;
  --color-neutral-100: #F5F5F5;
  --color-neutral-50: #FAFAFA;

  /* Semantic colors */
  --color-success: #10B981;
  --color-info: #3B82F6;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(10,15,30,0.04), 0 1px 2px rgba(10,15,30,0.02);
  --shadow-card-hover: 0 4px 16px rgba(10,15,30,0.08), 0 2px 4px rgba(10,15,30,0.04);
  --shadow-elevated: 0 8px 30px rgba(10,15,30,0.12), 0 2px 8px rgba(10,15,30,0.06);
  --shadow-glow: 0 0 20px rgba(232,89,12,0.25), 0 0 40px rgba(232,89,12,0.10);

  /* Radii */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);

  /* Font mapping */
  --font-sans: var(--font-body);
  --font-heading: var(--font-display);
}

:root {
  --radius: 0.5rem;
  --background: #F9FAFB;
  --foreground: #0A0A0B;
  --card: #FFFFFF;
  --card-foreground: #171717;
  --popover: #FFFFFF;
  --popover-foreground: #171717;
  --primary: #0F1629;
  --primary-foreground: #FFFFFF;
  --secondary: #F4F6FA;
  --secondary-foreground: #0F1629;
  --muted: #F5F5F5;
  --muted-foreground: #525252;
  --accent: #FFF1E6;
  --accent-foreground: #171717;
  --destructive: #EF4444;
  --border: #E5E7EB;
  --input: #E5E7EB;
  --ring: #E8590C;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## layout.tsx Font Configuration

Replace the font imports and configuration in `src/app/layout.tsx`:

```tsx
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
```

And update the body className:

```tsx
<body className={`${satoshi.variable} ${inter.variable} font-sans antialiased`}>
```
