# CLAUDE.md - Portfolio Project Guide

> Permanent project memory for future Claude Code sessions. Read this before any implementation.

---

## Project Vision

A premium portfolio website for Muhammad Aslaan — a Product Designer & Frontend Engineer who crafts products from strategy to shipped code. The portfolio demonstrates the intersection of product thinking, design, and engineering.

**Target:** Be hired by top product companies (Linear, Vercel, Figma, Stripe, Notion, Framer, Shopify, Raycast).

---

## Target Audience

- **Primary:** Design leads, engineering managers, and founders at top tech companies
- **Secondary:** Potential clients seeking product design and frontend development services
- **Tertiary:** Fellow designers and developers in the product community

**Decision Makers:** People who value both design aesthetics and engineering excellence.

---

## Target Companies

**Tier 1 - Dream Companies:**
- Linear (product-driven design)
- Vercel (frontend excellence)
- Figma (design tools)
- Stripe (design systems)
- Notion (product craft)
- Framer (creative frontend)
- Shopify (product + commerce)
- Raycast (developer tools)

These companies value: shipping real products, design systems, performance, attention to detail, and the intersection of design + code.

---

## Brand Positioning

**Brand Archetype:** The Maker — Craftsperson who ships.

**Positioning Statement:**
> "Muhammad Aslaan — Turning complex ideas into products people use."

**Brand Attributes:**
- **Authentic:** No fluff, real work, actual impact
- **Craft-focused:** Attention to detail in every pixel and line of code
- **Product-minded:** Design AND engineering, not one or the other
- **Professional:** Polished, considered, reliable

**Brand Voice:**
- Confident but not arrogant
- Clear and direct
- No jargon without purpose
- Conversational but professional

---

## Design Philosophy

### Core Principles

1. **Authenticity First**
   - Never invent metrics, research findings, or results
   - If a number isn't real, it doesn't exist
   - Real impact > impressive fiction

2. **Content Over Decoration**
   - Every element serves a purpose
   - Animations enhance, not distract
   - Whitespace is intentional

3. **Mobile-First, Desktop-Excellent**
   - Design for mobile, optimize for desktop
   - Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

4. **Performance Matters**
   - Images optimized (WebP, proper sizing)
   - Code split by route
   - Lazy loading below fold
   - Target: <2s LCP, <3s FID

5. **Accessibility is Standard**
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support
   - ARIA labels where needed
   - WCAG AA minimum

---

## Tone of Voice

### Writing Style

- **Headlines:** Bold, declarative, confident
  - "Turning complex ideas into products people use."
  - "Product Thinking × Design × Code"

- **Body Copy:** Clear, concise, professional
  - Short sentences
  - Active voice
  - No buzzwords without meaning

- **Case Studies:** Narrative structure
  - Problem → Solution → Impact
  - Show thinking, not just final output
  - Be honest about challenges

### Writing Principles

1. **Say what you mean** — No corporate speak
2. **Short beats long** — Edit ruthlessly
3. **Active beats passive** — "I shipped" not "was shipped"
4. **Specific beats vague** — Numbers and details
5. **Honest beats impressive** — Real impact > fake metrics

---

## UI Principles

### Design System

**Typography:**
- **Display:** Syne (headings, brand elements)
- **Body:** Plus Jakarta Sans (UI, content)
- **Mono:** Menlo (code, technical)

**Scale:**
- Hero: 4xl-8xl (responsive)
- Section headings: 2xl-4xl
- Body: base-lg
- Small: xs-sm

**Spacing:**
- Base unit: 4px
- Container padding: 1rem (mobile) → 2rem (desktop)
- Section spacing: 3rem (mobile) → 6rem (desktop)

**Borders:**
- Radius: 1rem (default), 3rem (cards/hero)
- Border width: 1px (default)

### Component Patterns

**Cards:**
- Rounded corners (3xl for featured, 2xl for standard)
- Border on card, not on image
- Hover: shadow + border color change
- Image aspect ratio locked (4/3 or 21/9)

**Buttons:**
- Primary: solid background, pill shape (rounded-full)
- Secondary: outlined, pill shape
- Hover: color swap with transition
- Size: sm (text-xs) → md (text-sm)

**Links:**
- Inline: underline animation (scale-x)
- Nav links: underline from bottom
- Card links: entire card clickable

### Animation Philosophy

- **Purpose:** Guide attention, not entertain
- **Duration:** 300-500ms (micro), 500-800ms (section)
- **Easing:** easeInOut or easeOut
- **Viewport:** Once per animation (viewport={{ once: true }))

---

## Code Principles

### Architecture

**Tech Stack:**
- React 18 with TypeScript
- Vite (build tool)
- Wouter (routing, <3kb)
- Tailwind CSS (styling)
- Framer Motion (animation)
- Radix UI (components)
- React Query (data fetching)

### File Structure

```
src/
├── components/
│   ├── layout/       # Layout components
│   └── ui/          # Reusable UI components
├── pages/           # Route pages
├── lib/             # Utilities
└── data/            # Static data
```

### Coding Standards

1. **Components Over Files**
   - Create components for reuse
   - Keep files <200 lines when possible
   - Extract logical pieces

2. **Type Everything**
   - No `any` types
   - Interface for props
   - Return types on functions

3. **Naming Conventions**
   - Components: PascalCase
   - Functions: camelCase
   - Constants: UPPER_SNAKE_CASE
   - Files: kebab-case

4. **Import Order**
   1. React/external libraries
   2. Internal components (@/...)
   3. Styles/data
   4. Types

5. **Performance**
   - `React.lazy` for routes
   - `loading="lazy"` on images below fold
   - Memoize expensive computations
   - Avoid inline functions in render

---

## Accessibility Principles

### Non-Negotiables

- **Semantic HTML:** `<nav>`, `<main>`, `<footer>`, `<article>`
- **ARIA Labels:** All icon-only buttons
- **Keyboard Nav:** All interactive elements reachable
- **Focus States:** Visible focus indicators
- **Color Contrast:** AA minimum (4.5:1)
- **Alt Text:** Descriptive, not decorative

### Testing Checklist

- [ ] Tab through page
- [ ] Navigate with screen reader
- [ ] Check color contrast
- [ ] Verify ARIA labels
- [ ] Test keyboard shortcuts

---

## Performance Goals

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Optimization Strategies

1. **Images:**
   - WebP format with PNG fallback
   - Responsive sizes (srcset)
   - Lazy loading below fold
   - Proper dimensions (avoid CLS)

2. **Code:**
   - Route-based code splitting
   - Tree shaking (import only what's used)
   - Minimize bundle size
   - Analyze bundle periodically

3. **Network:**
   - CDN for static assets
   - Cache headers configured
   - Prefetch critical resources

---

## SEO Goals

### Primary Keywords

- "Product Designer Frontend Engineer"
- "Full-stack Product Designer"
- "UX/UI Developer"
- "Design Systems"

### SEO Checklist

- [ ] Meta titles (60 chars max)
- [ ] Meta descriptions (155 chars max)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Alt text on images
- [ ] Semantic heading hierarchy

---

## Portfolio Philosophy

### What This Portfolio Is

- **Evidence, not claims:** Show work, don't just say it
- **Process, not just output:** Explain the thinking
- **Real, not curated:** Include actual challenges
- **Honest, not impressive:** Authentic impact over inflated metrics

### What This Portfolio Is Not

- **Not a gallery:** Process matters more than prettiness
- **Not a resume:** Narrative > bullet points
- **Not fiction:** Real work only

### Case Study Structure

Every case study should include:

1. **Context:** What, why, for whom
2. **Problem:** What was the challenge
3. **Role:** What you actually did
4. **Process:** How you approached it
5. **Solution:** What you built
6. **Impact:** What changed (with real metrics if possible)
7. **Reflection:** What you learned

---

## Hero Copy (Current Version)

### Tagline
```
"Turning complex ideas into products people use."
```

### Subtitle
```
"Product Designer & Frontend Engineer
crafting products from strategy to shipped code."
```

### Badge
```
"Product Thinking × Design × Code"
```

---

## Authenticity Rules

### NEVER INVENT

1. **Metrics**
   - No fake growth numbers
   - No invented conversion rates
   - No made-up user counts
   - If you don't know, don't say it

2. **Research**
   - No fictional user quotes
   - No invented research findings
   - No fabricated testing results
   - Qualitative > fake quantitative

3. **Results**
   - No claimed impact without proof
   - No exaggerated outcomes
   - Honest about what worked and what didn't

### Alternative When Lacking Data

- Use qualitative feedback
- Show the work itself
- Explain the reasoning
- Be honest about uncertainty

---

## Current Portfolio Structure

### Pages

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, featured work, services preview, stats |
| `/credentials` | Credentials | About, experience, skills, background |
| `/service` | Service | Services offered, process, pricing |
| `/works` | Works | All projects grid |
| `/works/:slug` | WorkDetail | Individual case study |
| `/contact` | Contact | Contact form, social links |

### Key Components

```
components/
├── layout/
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation with scroll state
│   └── Footer.tsx       # Footer with social links
├── ui/
│   ├── PageTransition.tsx  # Route animations
│   ├── Marquee.tsx         # Scrolling brand strip
│   ├── CtaBanner.tsx       # Call-to-action banner
│   ├── StatCounter.tsx    # Animated number counters
│   └── Seo.tsx            # Meta tags management
```

### Navigation Order

1. Home
2. Service
3. Works
4. Credentials
5. Contact

---

## Case Study Standards

### Minimum Content

Each case study MUST include:

1. **Project Overview** (2-3 sentences)
   - What is it?
   - Who is it for?
   - What was your role?

2. **The Problem** (1-2 paragraphs)
   - What problem were you solving?
   - Why did it matter?

3. **Your Process** (3+ sections)
   - Research/Discovery
   - Design/Exploration
   - Implementation
   - Iteration

4. **The Solution** (Visual + explanation)
   - High-quality visuals
   - Key decisions explained
   - Technical approach

5. **Outcome/Impact** (Real data preferred)
   - What changed?
   - Metrics (if available)
   - User feedback (if available)

6. **Reflection** (What you learned)
   - What went well?
   - What would you do differently?

### Quality Standards

- **Images:** High quality, optimized, properly sized
- **Typography:** Consistent hierarchy
- **Spacing:** Generous whitespace
- **Writing:** Edited, proofread, professional
- **Length:** 800-1500 words (depth over brevity)

---

## Current Design Language

### Colors (Dark Mode Only)

```css
--background: 0 0% 9%;        /* #171717 - Near black */
--foreground: 45 29% 96%;     /* #F5F5F4 - Off-white */
--primary: 30 100% 50%;        /* #F97316 - Orange accent */
--card: 0 0% 13%;             /* #222222 - Dark gray */
--muted: 0 0% 20%;            /* #333333 - Muted gray */
--border: 0 0% 20%;           /* #333333 - Border color */
```

### Typography Scale

```css
/* Display (Syne) */
text-4xl: 2.25rem (36px)      /* Mobile section headings */
text-5xl: 3rem (48px)         /* Tablet headings */
text-6xl: 3.75rem (60px)      /* Desktop headings */
text-7xl: 4.5rem (72px)       /* Large displays */
text-8xl: 6rem (96px)         /* Hero text */

/* Body (Plus Jakarta Sans) */
text-xs: 0.75rem (12px)       /* Captions, labels */
text-sm: 0.875rem (14px)      /* Secondary text */
text-base: 1rem (16px)        /* Body text */
text-lg: 1.125rem (18px)      /* Lead text */
text-xl: 1.25rem (20px)       /* Subheadings */
```

### Border Radius

```css
rounded-3xl: 1.5rem (24px)    /* Cards, large elements */
rounded-full: 9999px          /* Pills, circles */
```

### Spacing

```css
Container padding:
  Mobile: 1rem (16px)
  Desktop: 2rem (32px)

Section spacing:
  Mobile: 3rem (48px)
  Desktop: 6rem (96px)

Gap between cards:
  Mobile: 1rem (16px)
  Desktop: 1.5rem (24px)
```

---

## Important Implementation Rules

### DO

1. **Use semantic HTML** — `<article>`, `<section>`, `<nav>`
2. **Include ARIA labels** — All icon-only buttons
3. **Optimize images** — WebP, proper dimensions, lazy loading
4. **Animate with intent** — Purpose over decoration
5. **Mobile-first** — Design small, optimize large
6. **Type everything** — TypeScript strict mode
7. **Extract components** — Reuse over repeat
8. **Test keyboard nav** — Tab through everything

### DON'T

1. **Don't invent metrics** — Real data or nothing
2. **Don't use inline styles** — Use Tailwind classes
3. **Don't skip accessibility** — A non-negotiable
4. **Don't over-animate** — Subtle > flashy
5. **Don't ignore mobile** — 50%+ of traffic
6. **Don't use `any`** — Type everything properly
7. **Don't make deep trees** — Flatten components
8. **Don't skip optimization** — Performance matters

---

## How Future Decisions Should Be Evaluated

### Decision Framework

Before implementing anything new, ask:

1. **Does this serve the target audience?**
   - Will design leads at top companies care?

2. **Is this authentic?**
   - Are we inventing anything? (metrics, claims, results)

3. **Does this match the brand?**
   - Craft-focused, professional, confident

4. **Is this accessible?**
   - Keyboard navigation? Screen readers? Contrast?

5. **Is this performant?**
   - Bundle size? Image sizes? Code splitting?

6. **Is this maintainable?**
   - Will future sessions understand this?

7. **Is this necessary?**
   - What problem does this solve?

### When in Doubt

- **Subtle > flashy** — Understated professionalism
- **Real > impressive** — Authenticity always wins
- **Simple > complex** — Elegance through simplicity
- **Done > perfect** — Ship and iterate

---

## Session Protocol

### Before Any Implementation

1. **Read this file (CLAUDE.md)** — Understand the project
2. **Read PROJECT_STATUS.md** — Understand current state
3. **Check git status** — Know what's changed
4. **Review recent commits** — Understand recent decisions

### During Implementation

1. **Follow the patterns** — Match existing code style
2. **Stay on brand** — Design, tone, and values
3. **Document decisions** — Comments for non-obvious choices
4. **Test as you go** — Verify functionality

### After Implementation

1. **Update PROJECT_STATUS.md** — Log what was done
2. **Test accessibility** — Keyboard nav, screen reader
3. **Test performance** — Bundle size, load times
4. **Commit clean** — Clear commit messages

---

## Resources

### External Assets

- **Profile Image:** `https://muhammadaslaanportfolio.vercel.app/assets/profile-cDg9_8PP.jpg`
- **Icons:** Primarily from `framerusercontent.com`
- **Fonts:** Google Fonts (Plus Jakarta Sans, Syne)

### Key Services

- **Instagram:** https://instagram.com/aslaan
- **Twitter:** https://twitter.com/aslaan
- **LinkedIn:** https://linkedin.com/in/aslaan
- **Dribbble:** https://dribbble.com/aslaan

### Deployment

- **Platform:** Vercel
- **Domain:** muhammadaslaanportfolio.vercel.app
- **Build:** `npm run build`
- **Preview:** `npm run preview`

---

*Last Updated: 2025-01-12*
*Maintained by: Muhammad Aslaan*
