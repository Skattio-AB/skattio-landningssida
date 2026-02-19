# Component Styling Patterns

Exact Tailwind class strings for every component variant. Use these when building or modifying components.

---

## Buttons

### Primary CTA (orange — counts toward orange budget)

```
On light bg:
bg-accent-500 hover:bg-accent-600 text-white font-semibold
px-6 py-3 rounded-lg
transition-colors duration-200
shadow-sm hover:shadow-md

On dark bg (CTA section):
bg-accent-500 hover:bg-accent-600 text-white font-semibold
px-8 py-4 rounded-lg text-lg
transition-all duration-200
shadow-[0_0_20px_rgba(232,89,12,0.25),0_0_40px_rgba(232,89,12,0.10)]
hover:shadow-[0_0_25px_rgba(232,89,12,0.35),0_0_50px_rgba(232,89,12,0.15)]
```

### Secondary (outline)

```
On light bg:
border border-neutral-300 hover:border-navy-200 bg-white hover:bg-navy-50
text-neutral-900 font-medium
px-6 py-3 rounded-lg
transition-colors duration-200

On dark bg:
border border-navy-700 hover:border-navy-600 bg-transparent hover:bg-navy-800
text-white font-medium
px-6 py-3 rounded-lg
transition-colors duration-200
```

### Ghost

```
text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100
font-medium px-4 py-2 rounded-lg
transition-colors duration-200
```

### Link style

```
text-accent-500 hover:text-accent-600 font-medium
underline underline-offset-4 decoration-accent-500/30 hover:decoration-accent-500
transition-colors duration-200
```

---

## Cards

### Light card (default — white bg sections)

```
bg-white border border-neutral-200 rounded-xl
shadow-[0_1px_3px_rgba(10,15,30,0.04),0_1px_2px_rgba(10,15,30,0.02)]
hover:shadow-[0_4px_16px_rgba(10,15,30,0.08),0_2px_4px_rgba(10,15,30,0.04)]
transition-shadow duration-300
p-6
```

### Dark card (navy bg sections)

```
bg-navy-800 border border-navy-700 rounded-xl
p-6
```

### Elevated card (featured pricing, key highlight)

```
bg-white border-2 border-accent-500/20 rounded-xl
shadow-[0_8px_30px_rgba(10,15,30,0.12),0_2px_8px_rgba(10,15,30,0.06)]
p-8
ring-1 ring-accent-500/10
```

Alternative: accent border-top only:
```
bg-white border border-neutral-200 border-t-4 border-t-accent-500 rounded-xl
shadow-[0_8px_30px_rgba(10,15,30,0.12),0_2px_8px_rgba(10,15,30,0.06)]
p-8
```

---

## Badges

### Accent badge (counts toward orange budget)

```
bg-accent-100 text-accent-600 text-xs font-semibold
px-3 py-1 rounded-full
```

### Neutral badge

```
bg-neutral-100 text-neutral-700 text-xs font-semibold
px-3 py-1 rounded-full
```

### Navy badge

```
bg-navy-50 text-navy-700 text-xs font-semibold
px-3 py-1 rounded-full
```

### Badge on dark bg

```
bg-white/10 text-white text-xs font-semibold
px-3 py-1 rounded-full
```

---

## Section Headers

### On light background

```
Overline/badge: (use badge pattern above)

Heading (h2):
text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
text-neutral-950 font-heading

Subtitle:
text-lg sm:text-xl text-neutral-600 leading-relaxed
max-w-2xl mt-4
```

### On dark (navy) background

```
Heading (h2):
text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
text-white font-heading

Subtitle:
text-lg sm:text-xl text-navy-300 leading-relaxed
max-w-2xl mt-4
```

---

## Pricing Card

### Standard tier

```
bg-white border border-neutral-200 rounded-xl p-8
shadow-[0_1px_3px_rgba(10,15,30,0.04),0_1px_2px_rgba(10,15,30,0.02)]
```

### Featured/recommended tier

```
bg-white border-2 border-accent-500 rounded-xl p-8 relative
shadow-[0_8px_30px_rgba(10,15,30,0.12),0_2px_8px_rgba(10,15,30,0.06)]

"Recommended" badge (absolute positioned):
absolute -top-3 left-1/2 -translate-x-1/2
bg-accent-500 text-white text-xs font-semibold
px-4 py-1 rounded-full
```

### Price display

```
Price number:
text-4xl sm:text-5xl font-extrabold text-neutral-950 font-heading

Price suffix (/mån):
text-neutral-500 text-base font-normal ml-1
```

### Feature list item (with checkmark)

```
flex items-start gap-3

Check icon:
text-success w-5 h-5 mt-0.5 flex-shrink-0

Text:
text-neutral-700 text-sm
```

---

## FAQ Accordion

```
Container section:
bg-neutral-50 py-20 sm:py-28

Layout:
grid lg:grid-cols-[1fr,1.5fr] gap-12 items-start

Left column (heading):
sticky top-24

Accordion item:
border-b border-neutral-200

Trigger:
text-left font-semibold text-neutral-900 py-5
hover:text-neutral-950

Content:
text-neutral-600 pb-5 leading-relaxed
```

---

## Header / Navigation

```
At top (transparent):
bg-transparent

On scroll:
bg-white/90 backdrop-blur-md border-b border-neutral-100
shadow-[0_1px_3px_rgba(10,15,30,0.04)]

Transition:
transition-all duration-300

Nav links:
text-neutral-600 hover:text-neutral-900 font-medium text-sm
transition-colors duration-200

CTA button in header:
bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold
px-4 py-2 rounded-lg
```

---

## CTA Section (dark)

```
Section:
bg-navy-950 py-16 sm:py-24

Content container:
text-center max-w-3xl mx-auto px-6

Heading:
text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
text-white font-heading

Subtitle:
text-lg text-navy-300 leading-relaxed mt-4 max-w-2xl mx-auto

CTA button:
(use Primary CTA "on dark bg" pattern above)
mt-8
```

---

## Icon Containers

### On light background

```
bg-navy-50 text-navy-700 rounded-lg p-2.5
```

### On dark background

```
bg-white/10 text-white rounded-lg p-2.5
```

### Accent icon (sparingly — counts toward orange budget)

```
bg-accent-100 text-accent-500 rounded-lg p-2.5
```

---

## Separator / Divider

```
On light: border-t border-neutral-200
On dark:  border-t border-navy-800
```
