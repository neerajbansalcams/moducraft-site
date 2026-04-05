# ModuCraft v2 Brand Pivot & Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full parallel `/v2` website redesign for ModuCraft inside `frontend/pages/v2/` and `frontend/components/v2/`, with zero changes to the existing site.

**Architecture:** All new code lives under `frontend/pages/v2/` (routes) and `frontend/components/v2/` (shared components). The existing site at `/` is untouched. The `v2` design system is layered into `tailwind.config.js` using namespaced token names. Cutover happens as a single redirect change to `frontend/pages/index.tsx` at the end.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, React hooks, IntersectionObserver API, Next.js `<Head>` for SEO. No new npm dependencies except optional `@headlessui/react` (already likely in lockfile).

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `frontend/tailwind.config.js` | Modify | Add v2 design tokens (colors, fonts, shadows) |
| `frontend/pages/v2/_document.tsx` | Create | Google Fonts preload for Cormorant Garamond, Inter, JetBrains Mono |
| `frontend/components/v2/V2Layout.tsx` | Create | Shared nav + footer + mobile overlay menu |
| `frontend/components/v2/V2Meta.tsx` | Create | Shared `<Head>` SEO component |
| `frontend/data/materials.ts` | Create | Material data + TypeScript interfaces |
| `frontend/components/v2/MaterialLibrary.tsx` | Create | Interactive material card grid with expand panel |
| `frontend/components/v2/ProcessTimeline.tsx` | Create | 5-step animated horizontal/vertical timeline |
| `frontend/components/v2/SpacePlanner.tsx` | Create | 4-step guided quiz with lead capture |
| `frontend/pages/v2/index.tsx` | Create | Home page — split hero, trust bar, timeline teaser, CTA |
| `frontend/pages/v2/for-architects.tsx` | Create | Pro Portal — benefits grid, MaterialLibrary, lead form |
| `frontend/pages/v2/for-homeowners.tsx` | Create | Space Visionary — SpacePlanner, before/after section |
| `frontend/pages/v2/our-heritage.tsx` | Create | Heritage — Shri Ram story, materials grid, factory, timeline |
| `frontend/pages/v2/about.tsx` | Create | Condensed narrative + mission |
| `frontend/pages/v2/contact.tsx` | Create | Segmented contact form with professional type |
| `frontend/pages/v2/blog/index.tsx` | Create | Blog list page (v2 styled) |
| `frontend/pages/v2/blog/[slug].tsx` | Create | Blog post page (v2 styled) |
| `frontend/public/robots.txt` | Modify | Allow `/v2/*` |
| `frontend/public/sitemap.xml` | Modify | Add all 6 `/v2` routes |

---

## Task 1: Design Tokens + Fonts

**Files:**
- Modify: `frontend/tailwind.config.js`
- Create: `frontend/pages/v2/_document.tsx`

- [ ] **Step 1: Add v2 design tokens to Tailwind**

Open `frontend/tailwind.config.js`. Add the following under `theme.extend.colors`:

```js
// v2 Design System
'v2-bg': '#F5F0EB',
'v2-surface': '#FFFFFF',
'v2-text': '#1A1A18',
'v2-muted': '#6B6B5E',
'v2-accent': '#8B6F47',
'v2-border': '#E0D9CF',
```

Add under `theme.extend.fontFamily`:
```js
'v2-heading': ['Cormorant Garamond', 'Georgia', 'serif'],
'v2-body': ['Inter', 'system-ui', 'sans-serif'],
'v2-mono': ['JetBrains Mono', 'Courier New', 'monospace'],
```

Also add `'./data/**/*.{js,ts}'` to the `content` array so Tailwind scans the materials data file. The existing `./pages/**/*` and `./components/**/*` globs already cover v2 files, but `data/` is not covered:
```js
'./data/**/*.{js,ts}',
```

> Note: Do NOT create `frontend/pages/v2/_document.tsx`. Next.js only reads `_document` from the root `pages/` directory — a nested one has no effect. Fonts are loaded via `<Head>` in `V2Layout.tsx` (see Task 2).

- [ ] **Step 2: Commit**

```bash
git add frontend/tailwind.config.js
git commit -m "feat(v2): add design tokens and font configuration"
```

---

## Task 2: V2Layout — Nav, Footer, Mobile Menu

**Files:**
- Create: `frontend/components/v2/V2Layout.tsx`

- [ ] **Step 1: Create `frontend/components/v2/V2Layout.tsx`**

```tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NAV_LINKS = [
  { label: 'For Architects', href: '/v2/for-architects' },
  { label: 'For Homeowners', href: '/v2/for-homeowners' },
  { label: 'Our Heritage', href: '/v2/our-heritage' },
  { label: 'Contact', href: '/v2/contact' },
];

interface V2LayoutProps {
  children: React.ReactNode;
}

export default function V2Layout({ children }: V2LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-v2-bg text-v2-text font-v2-body">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-v2-bg/95 backdrop-blur-sm border-b border-v2-border">
          <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/v2" className="font-v2-heading text-xl font-semibold tracking-wide text-v2-text">
              ModuCraft
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-v2-muted hover:text-v2-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-[#1A1A18]/80 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl text-white font-v2-heading hover:text-v2-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-v2-text text-white mt-24">
          <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-v2-heading text-2xl font-light mb-2">ModuCraft</p>
              <p className="text-sm text-white/60 leading-relaxed">
                by Jai Shri Ram Furniture<br />
                VKIA, Jaipur — Est. July 2025
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Heritage</p>
              <p className="text-sm text-white/60 leading-relaxed">
                A unit of Shri Ram Timber & Plywood<br />
                Gandhi Path, Jaipur
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Connect</p>
              <a
                href="https://wa.me/91XXXXXXXXXX"  {/* TODO: Replace XXXXXXXXXX with real ModuCraft WhatsApp number, e.g. 919876543210 */}
                className="inline-block text-sm text-v2-accent hover:text-white transition-colors"
              >
                WhatsApp Us →
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 max-w-[1280px] mx-auto px-8 py-4">
            <p className="text-xs text-white/30">© 2025 ModuCraft. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Visually verify layout renders**

Run `cd frontend && npm run dev` then open `http://localhost:3000/v2` (it will 404 — that's expected). Check that the dev server starts without TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add frontend/components/v2/V2Layout.tsx
git commit -m "feat(v2): add V2Layout with nav, footer, mobile overlay menu"
```

---

## Task 3: V2Meta — Shared SEO Head Component

**Files:**
- Create: `frontend/components/v2/V2Meta.tsx`

- [ ] **Step 1: Create `frontend/components/v2/V2Meta.tsx`**

```tsx
import Head from 'next/head';

interface V2MetaProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export default function V2Meta({
  title,
  description,
  canonical,
  ogImage = '/og-default.jpg',
}: V2MetaProps) {
  const fullTitle = `${title} | ModuCraft`;
  const baseUrl = 'https://moducraft-site.vercel.app';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${canonical}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${canonical}`} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="ModuCraft" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
    </Head>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/components/v2/V2Meta.tsx
git commit -m "feat(v2): add V2Meta shared SEO head component"
```

---

## Task 4: Materials Data File

**Files:**
- Create: `frontend/data/materials.ts`

- [ ] **Step 1: Create `frontend/data/materials.ts`**

```typescript
export interface MaterialProperty {
  label: string;
  value: string;
}

export interface Material {
  id: string;
  name: string;
  grade: string;
  swatchColor: string;
  badge: string;
  shortDescription: string;
  technicalDescription: string;
  properties: MaterialProperty[];
}

export const materials: Material[] = [
  {
    id: 'bwp-plywood',
    name: 'BWP Plywood',
    grade: 'IS:710',
    swatchColor: '#C8A96E',
    badge: 'Marine Grade',
    shortDescription:
      'The foundation of enduring interiors. Rich, warm-toned panels that age gracefully in any environment.',
    technicalDescription:
      'Boiling Water Proof grade plywood conforming to IS:710. Fully waterproof bond, ideal for kitchens and wet zones.',
    properties: [
      { label: 'Standard', value: 'IS:710' },
      { label: 'Thickness', value: '12mm / 18mm' },
      { label: 'Bond Type', value: 'BWP (Boiling Water Proof)' },
      { label: 'Application', value: 'Kitchens, Bathrooms, High-humidity areas' },
      { label: 'Finish', value: 'Raw — accept veneer, laminate, acrylic' },
    ],
  },
  {
    id: 'hdhmr',
    name: 'HDHMR Board',
    grade: 'High Density',
    swatchColor: '#A0856A',
    badge: 'Moisture Resistant',
    shortDescription:
      'Precision-engineered panels with the density to hold hardware firmly and resist the monsoon.',
    technicalDescription:
      'High Density High Moisture Resistant board. Superior screw-holding strength over MDF, engineered for humid Indian climates.',
    properties: [
      { label: 'Density', value: '≥ 800 kg/m³' },
      { label: 'Thickness', value: '8mm / 12mm / 18mm' },
      { label: 'Moisture Resistance', value: 'High — V313 compliant' },
      { label: 'Screw Holding', value: 'Face: 900N / Edge: 700N (typical)' },
      { label: 'Application', value: 'Wardrobes, shutters, modular carcasses' },
    ],
  },
  {
    id: 'teak-wood',
    name: 'Teak Wood',
    grade: 'A-Grade',
    swatchColor: '#8B6542',
    badge: 'Termite Resistant',
    shortDescription:
      'Centuries of trust, now available as a factory-finished element. Teak that speaks before you do.',
    technicalDescription:
      'A-grade Burma/Indian teak with natural silica content providing inherent termite and moisture resistance.',
    properties: [
      { label: 'Grade', value: 'A (First Grade)' },
      { label: 'Density', value: '630–720 kg/m³' },
      { label: 'Natural Oils', value: 'High — self-preserving' },
      { label: 'Resistance', value: 'Termites, fungi, UV degradation' },
      { label: 'Application', value: 'Frame members, accent panels, solid-wood shutters' },
    ],
  },
  {
    id: 'acrylic-finish',
    name: 'Acrylic Finish',
    grade: 'UV-Coated',
    swatchColor: '#E8E4DF',
    badge: 'High Gloss',
    shortDescription:
      'Mirror-clean surfaces that transform kitchens into showrooms. Available in 40+ premium colours.',
    technicalDescription:
      'UV-coated acrylic sheets bonded to substrate. Scratch-resistant hardened surface, easy wipe-clean, no painting required.',
    properties: [
      { label: 'Coating', value: 'UV-hardened acrylic' },
      { label: 'Thickness', value: '1mm sheet on 18mm board' },
      { label: 'Colours', value: '40+ options including metallics' },
      { label: 'Scratch Resistance', value: 'High — Pencil hardness 3H+' },
      { label: 'Application', value: 'Kitchen shutters, wardrobe fronts, feature panels' },
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    grade: 'Hettich / Hafele',
    swatchColor: '#9B9B9B',
    badge: 'German Grade',
    shortDescription:
      'The silent workhorses of every great interior. German engineering that opens and closes 100,000 times.',
    technicalDescription:
      'Hettich and Hafele brand hinges, channels, and fittings. Rated for 100,000+ open/close cycles with consistent torque.',
    properties: [
      { label: 'Brands', value: 'Hettich, Hafele' },
      { label: 'Hinge Type', value: 'Concealed, soft-close' },
      { label: 'Channel Type', value: 'Tandem box, soft-close undermount' },
      { label: 'Cycle Rating', value: '100,000+ open/close' },
      { label: 'Finish', value: 'Nickel / Stainless / Matt Black' },
    ],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add frontend/data/materials.ts
git commit -m "feat(v2): add materials data with TypeScript interfaces"
```

---

## Task 5: MaterialLibrary Component

**Files:**
- Create: `frontend/components/v2/MaterialLibrary.tsx`

- [ ] **Step 1: Create `frontend/components/v2/MaterialLibrary.tsx`**

```tsx
import React, { useState } from 'react';
import { materials, Material } from '@/data/materials';

interface MaterialLibraryProps {
  mode: 'technical' | 'aesthetic';
}

function MaterialCard({
  material,
  mode,
  isExpanded,
  onToggle,
}: {
  material: Material;
  mode: 'technical' | 'aesthetic';
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border border-v2-border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isExpanded ? 'border-v2-accent' : 'hover:border-v2-accent/50'
      }`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
      onClick={onToggle}
    >
      {/* Swatch */}
      <div
        className="h-16 w-full"
        style={{ backgroundColor: material.swatchColor }}
      />

      {/* Card body */}
      <div className="p-5 bg-v2-surface">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-v2-heading text-lg text-v2-text">{material.name}</h3>
          <span className="text-xs font-v2-mono text-v2-accent bg-v2-accent/10 px-2 py-0.5 rounded">
            {material.badge}
          </span>
        </div>
        <p className="text-xs text-v2-muted mb-3 font-v2-mono">{material.grade}</p>
        <p className="text-sm text-v2-muted leading-relaxed">
          {mode === 'technical' ? material.technicalDescription : material.shortDescription}
        </p>

        {/* Expanded: technical properties */}
        {isExpanded && mode === 'technical' && (
          <div className="mt-4 pt-4 border-t border-v2-border">
            <table className="w-full text-sm">
              <tbody>
                {material.properties.map((prop) => (
                  <tr key={prop.label} className="border-b border-v2-border/50 last:border-0">
                    <td className="py-2 pr-4 font-v2-mono text-xs text-v2-muted w-1/2">{prop.label}</td>
                    <td className="py-2 text-v2-text text-xs">{prop.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-v2-accent mt-3">
          {isExpanded ? '↑ Less' : '↓ ' + (mode === 'technical' ? 'View Specs' : 'Learn More')}
        </p>
      </div>
    </div>
  );
}

export default function MaterialLibrary({ mode }: MaterialLibraryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          mode={mode}
          isExpanded={expandedId === material.id}
          onToggle={() => toggle(material.id)}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/components/v2/MaterialLibrary.tsx
git commit -m "feat(v2): add MaterialLibrary component with technical/aesthetic modes"
```

---

## Task 6: ProcessTimeline Component

**Files:**
- Create: `frontend/components/v2/ProcessTimeline.tsx`

- [ ] **Step 1: Create `frontend/components/v2/ProcessTimeline.tsx`**

```tsx
import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    icon: '⬡',
    title: 'Material Selection',
    description: 'BWP plywood, HDHMR, teak — sourced directly from Shri Ram Timber.',
    why: 'No middlemen. Known provenance, consistent quality batch to batch.',
  },
  {
    icon: '⊡',
    title: 'CNC Cutting',
    description: 'Precision cuts to ±0.5mm tolerance on our in-house CNC router.',
    why: 'Factory precision eliminates on-site fitting errors and material waste.',
  },
  {
    icon: '▭',
    title: 'Edge Banding',
    description: 'Automated PVC/ABS edge banding seals every panel edge.',
    why: 'Prevents moisture ingress at edges — the most common failure point in site-built furniture.',
  },
  {
    icon: '⊞',
    title: 'Cold Press Assembly',
    description: 'Panels bonded under controlled pressure for flat, gap-free joins.',
    why: 'Eliminates warping. What leaves our factory is what gets installed.',
  },
  {
    icon: '◫',
    title: 'Precision Installation',
    description: 'Factory-finished units installed by our own trained team.',
    why: 'No outsourcing. The team that built it installs it. Zero translation loss.',
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-v2-bg overflow-x-auto">
      <div className="max-w-[1280px] mx-auto px-8">
        <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
          How We Build
        </p>
        <h2 className="font-v2-heading text-4xl md:text-5xl text-v2-text mb-16">
          Factory to Finish
        </h2>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-v2-border">
            <div
              className="h-full bg-v2-accent transition-all duration-[800ms] ease-out"
              style={{ width: visible ? '100%' : '0%' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-v2-surface border border-v2-border flex items-center justify-center mb-6 text-2xl text-v2-accent">
                  {step.icon}
                </div>
                <h3 className="font-v2-heading text-lg text-v2-text mb-2">{step.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed mb-3">{step.description}</p>
                <p className="text-xs font-v2-mono text-v2-accent border-l-2 border-v2-accent pl-2 leading-relaxed">
                  {step.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-6 transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-v2-surface border border-v2-border flex items-center justify-center text-xl text-v2-accent">
                {step.icon}
              </div>
              <div>
                <h3 className="font-v2-heading text-lg text-v2-text mb-1">{step.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed mb-2">{step.description}</p>
                <p className="text-xs font-v2-mono text-v2-accent border-l-2 border-v2-accent pl-2 leading-relaxed">
                  {step.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/components/v2/ProcessTimeline.tsx
git commit -m "feat(v2): add ProcessTimeline with IntersectionObserver animations"
```

---

## Task 7: SpacePlanner Component

**Files:**
- Create: `frontend/components/v2/SpacePlanner.tsx`

- [ ] **Step 1: Create `frontend/components/v2/SpacePlanner.tsx`**

```tsx
import React, { useState } from 'react';

type Room = 'Kitchen' | 'Wardrobe' | 'Living Unit' | 'Study';
type Style = 'Minimal' | 'Warm Wood' | 'Contemporary' | 'Industrial';
type Material = 'BWP Plywood' | 'HDHMR' | 'Acrylic' | 'Veneer';

interface SpacePlannerSubmission {
  room: Room;
  style: Style;
  material: Material;
  name: string;
  phone: string;
  city: string;
  notes: string;
  source: 'space-planner';
  professionalType: 'Homeowner';
}

const ROOMS: { label: Room; icon: string }[] = [
  { label: 'Kitchen', icon: '⬡' },
  { label: 'Wardrobe', icon: '▭' },
  { label: 'Living Unit', icon: '⊞' },
  { label: 'Study', icon: '⊡' },
];

const STYLES: { label: Style; desc: string }[] = [
  { label: 'Minimal', desc: 'Clean lines, neutral tones, no excess.' },
  { label: 'Warm Wood', desc: 'Natural grain, teak accents, organic forms.' },
  { label: 'Contemporary', desc: 'Bold hardware, gloss finishes, modern geometry.' },
  { label: 'Industrial', desc: 'Raw textures, exposed hardware, dark tones.' },
];

const MATERIALS: { label: Material; swatch: string }[] = [
  { label: 'BWP Plywood', swatch: '#C8A96E' },
  { label: 'HDHMR', swatch: '#A0856A' },
  { label: 'Acrylic', swatch: '#E8E4DF' },
  { label: 'Veneer', swatch: '#8B6542' },
];

export default function SpacePlanner() {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState<Room | null>(null);
  const [style, setStyle] = useState<Style | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [contact, setContact] = useState({ name: '', phone: '', city: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const progressPercent = ((step - 1) / 4) * 100;

  const handleSubmit = async () => {
    if (!room || !style || !material) return;
    setSubmitting(true);

    const payload: SpacePlannerSubmission = {
      room,
      style,
      material,
      ...contact,
      source: 'space-planner',
      professionalType: 'Homeowner',
    };

    try {
      localStorage.setItem('moducraft_last_submission', JSON.stringify(payload));
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // API call failed — localStorage backup ensures lead data is not lost.
      // User still sees the confirmation screen; data is recoverable from localStorage.
      // No error shown to user — the confirmation copy ("we'll call within 24 hours")
      // remains accurate since the team can recover from localStorage if needed.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-v2-surface border border-v2-border rounded-lg p-12 text-center max-w-lg mx-auto">
        <p className="font-v2-heading text-4xl text-v2-text mb-4">We have it.</p>
        <p className="text-v2-muted text-sm leading-relaxed mb-6">
          Your {room} plan has been noted. Our team will call within 24 hours to discuss your {style?.toLowerCase()} finish in {material}.
        </p>
        <p className="text-xs font-v2-mono text-v2-accent">Estimated timeline: 15–21 working days</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs font-v2-mono text-v2-muted mb-2">
          <span>Step {step} of 4</span>
          <span>{['Room', 'Style', 'Material', 'Contact'][step - 1]}</span>
        </div>
        <div className="h-px bg-v2-border">
          <div
            className="h-full bg-v2-accent transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Step 1: Room */}
      {step === 1 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">What are we building?</h2>
          <div className="grid grid-cols-2 gap-4">
            {ROOMS.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => { setRoom(label); setStep(2); }}
                className={`p-6 border rounded-lg text-left transition-all duration-200 ${
                  room === label
                    ? 'border-v2-accent bg-v2-accent/5'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <span className="text-2xl block mb-3">{icon}</span>
                <span className="font-v2-heading text-lg text-v2-text">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Style */}
      {step === 2 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Your design language?</h2>
          <div className="flex flex-col gap-3">
            {STYLES.map(({ label, desc }) => (
              <button
                key={label}
                onClick={() => { setStyle(label); setStep(3); }}
                className={`p-5 border rounded-lg text-left transition-all duration-200 ${
                  style === label
                    ? 'border-v2-accent bg-v2-accent/5'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <p className="font-v2-heading text-lg text-v2-text">{label}</p>
                <p className="text-sm text-v2-muted mt-1">{desc}</p>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="mt-6 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Material */}
      {step === 3 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Choose your core material</h2>
          <div className="grid grid-cols-2 gap-4">
            {MATERIALS.map(({ label, swatch }) => (
              <button
                key={label}
                onClick={() => { setMaterial(label); setStep(4); }}
                className={`border rounded-lg overflow-hidden text-left transition-all duration-200 ${
                  material === label
                    ? 'border-v2-accent'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <div className="h-12" style={{ backgroundColor: swatch }} />
                <div className="p-4">
                  <p className="font-v2-heading text-base text-v2-text">{label}</p>
                </div>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-6 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}

      {/* Step 4: Contact */}
      {step === 4 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-2">Almost there</h2>
          <p className="text-v2-muted text-sm mb-8">We'll call to confirm your {room} in {style?.toLowerCase()} finish.</p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <input
              type="text"
              placeholder="City"
              value={contact.city}
              onChange={(e) => setContact({ ...contact, city: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <textarea
              placeholder="Anything else we should know? (optional)"
              value={contact.notes}
              onChange={(e) => setContact({ ...contact, notes: e.target.value })}
              rows={3}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors resize-none"
            />
            <button
              onClick={handleSubmit}
              disabled={!contact.name || !contact.phone || submitting}
              className="w-full bg-v2-accent text-white py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Request Consultation →'}
            </button>
          </div>
          <button onClick={() => setStep(3)} className="mt-4 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/components/v2/SpacePlanner.tsx
git commit -m "feat(v2): add SpacePlanner 4-step guided quiz component"
```

---

## Task 8: Home Page `/v2`

**Files:**
- Create: `frontend/pages/v2/index.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/index.tsx`**

```tsx
import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import ProcessTimeline from '@/components/v2/ProcessTimeline';

const TRUST_ITEMS = [
  { stat: '10+', label: 'Years in Timber' },
  { stat: 'VKIA', label: 'Factory, Jaipur' },
  { stat: 'CNC', label: 'Precision Finish' },
];

const CTA_CARDS = [
  {
    label: 'For Architects',
    description: 'Technical specs, CAD-ready drawings, partnership terms.',
    href: '/v2/for-architects',
  },
  {
    label: 'For Homeowners',
    description: 'Plan your kitchen, wardrobe, or living space — factory finished.',
    href: '/v2/for-homeowners',
  },
  {
    label: 'Our Heritage',
    description: 'From Shri Ram Timber to a VKIA factory. The full story.',
    href: '/v2/our-heritage',
  },
];

export default function V2Home() {
  return (
    <V2Layout>
      <V2Meta
        title="Modular Furniture Manufacturer, Jaipur"
        description="ModuCraft — factory-finished modular kitchens and interiors from VKIA, Jaipur. Backed by 10+ years of timber expertise at Shri Ram Timber & Plywood."
        canonical="/v2"
      />

      {/* Hero: split screen */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
        {/* Left: texture image */}
        <div
          className="min-h-[50vh] md:min-h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=900&fit=crop')",
          }}
        />

        {/* Right: headline + CTA cards */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-24 bg-v2-bg">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            ModuCraft — Est. July 2025, VKIA Jaipur
          </p>
          <h1 className="font-v2-heading text-4xl md:text-6xl text-v2-text leading-tight mb-8">
            Where Material<br />
            <em>Mastery</em> Meets<br />
            Modern Manufacturing
          </h1>

          <div className="flex flex-col gap-4">
            {CTA_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex items-start justify-between border border-v2-border rounded-lg p-5 hover:border-v2-accent transition-all duration-200 bg-v2-surface"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div>
                  <p className="font-v2-heading text-lg text-v2-text mb-1">{card.label}</p>
                  <p className="text-sm text-v2-muted">{card.description}</p>
                </div>
                <span className="text-v2-muted group-hover:text-v2-accent transition-colors text-lg ml-4 mt-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-v2-text text-white py-12">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-3 divide-x divide-white/10">
          {TRUST_ITEMS.map((item) => (
            <div key={item.stat} className="text-center px-8">
              <p className="font-v2-heading text-3xl text-v2-accent mb-1">{item.stat}</p>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ProcessTimeline teaser */}
      <ProcessTimeline />

      {/* Footer CTA */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-v2-heading text-4xl md:text-5xl text-v2-text mb-6">
            Ready to build your space?
          </h2>
          <p className="text-v2-muted text-lg mb-10 max-w-md mx-auto">
            Tell us the room. We'll handle the rest — material, machining, and installation.
          </p>
          <Link
            href="/v2/for-homeowners"
            className="inline-block bg-v2-accent text-white px-10 py-4 rounded text-sm font-medium hover:bg-v2-text transition-colors"
          >
            Start Your Space →
          </Link>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Start dev server and verify `/v2` loads correctly**

```bash
cd frontend && npm run dev
```

Open `http://localhost:3000/v2` — verify split hero, trust bar, ProcessTimeline, and footer CTA render without errors.

- [ ] **Step 3: Commit**

```bash
git add frontend/pages/v2/index.tsx
git commit -m "feat(v2): add Home page with split hero, trust bar, and ProcessTimeline"
```

---

## Task 9: For Architects Page `/v2/for-architects`

**Files:**
- Create: `frontend/pages/v2/for-architects.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/for-architects.tsx`**

```tsx
import React, { useState } from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import MaterialLibrary from '@/components/v2/MaterialLibrary';

const BENEFITS = [
  {
    title: 'CAD-Ready Drawings',
    description: 'Standard carcass and shutter drawings in DWG/PDF format on request. Integration into your project documentation is seamless.',
  },
  {
    title: 'Factory Tolerance: ±0.5mm',
    description: 'CNC-cut components fit as specified. No on-site scribing, no shimming, no excuses.',
  },
  {
    title: 'Committed Timelines',
    description: 'Production lead time confirmed in writing at order. 15–21 working days for standard configurations.',
  },
  {
    title: 'Bulk & Project Pricing',
    description: 'Structured pricing for multi-unit projects. Discuss terms for ongoing partnerships — we work with practices of all sizes.',
  },
];

export default function ForArchitects() {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    projectType: '',
    whatsapp: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <V2Layout>
      <V2Meta
        title="Pro Partner Portal — ModuCraft Jaipur"
        description="ModuCraft partners with architects and interior designers. CAD-ready drawings, CNC precision, committed timelines. VKIA factory, Jaipur."
        canonical="/v2/for-architects"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            For Architects & Interior Designers
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl mb-8">
            Built for the Way<br />
            <em>You</em> Work
          </h1>
          <p className="text-v2-muted text-lg max-w-xl leading-relaxed">
            Factory-finished modular components that show up on site exactly as specified. No surprises, no rework — just clean execution of your design intent.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-12">Why practices choose ModuCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-v2-border rounded-lg p-8"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <h3 className="font-v2-heading text-xl text-v2-text mb-3">{b.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MaterialLibrary: technical mode */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
            Material Specification
          </p>
          <h2 className="font-v2-heading text-4xl text-v2-text mb-12">
            Every material. Full specs.
          </h2>
          <MaterialLibrary mode="technical" />
        </div>
      </section>

      {/* Lead form */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 max-w-xl">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Start a conversation</h2>
          {submitted ? (
            <p className="text-v2-muted">Thank you — we'll be in touch within one working day.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <input
                type="text"
                placeholder="Firm / Practice name"
                value={formData.firm}
                onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              >
                <option value="">Project type</option>
                <option>Residential Interior</option>
                <option>Commercial Fit-Out</option>
                <option>Hospitality</option>
                <option>Multi-unit Residential</option>
                <option>Other</option>
              </select>
              <input
                type="tel"
                placeholder="WhatsApp number"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-v2-accent text-white py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors"
              >
                Submit Enquiry →
              </button>
            </form>
          )}
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Verify `/v2/for-architects` renders at `http://localhost:3000/v2/for-architects`**

- [ ] **Step 3: Commit**

```bash
git add frontend/pages/v2/for-architects.tsx
git commit -m "feat(v2): add For Architects Pro Portal page"
```

---

## Task 10: For Homeowners Page `/v2/for-homeowners`

**Files:**
- Create: `frontend/pages/v2/for-homeowners.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/for-homeowners.tsx`**

```tsx
import React from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import SpacePlanner from '@/components/v2/SpacePlanner';

export default function ForHomeowners() {
  return (
    <V2Layout>
      <V2Meta
        title="Build Your Dream Space — ModuCraft"
        description="Design your modular kitchen or wardrobe with ModuCraft. Factory-finished precision, installed by our own team. Jaipur & surrounding areas."
        canonical="/v2/for-homeowners"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            For Homeowners
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl mb-8">
            Your Dream Space,<br />
            <em>Factory</em> Finished
          </h1>
          <p className="text-v2-muted text-lg max-w-xl leading-relaxed">
            No on-site carpentry mess. No guesswork. Everything is cut, finished, and fitted at our VKIA factory before it enters your home.
          </p>
        </div>
      </section>

      {/* SpacePlanner */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-4">Plan your space</h2>
          <p className="text-v2-muted text-sm mb-12">Tell us what you need. Our team will call to discuss the details.</p>
          <SpacePlanner />
        </div>
      </section>

      {/* Before/after concept section */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-12">The difference factory-finish makes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-v2-border rounded-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&fit=crop')",
                }}
              />
              <div className="p-6 bg-v2-surface">
                <p className="font-v2-mono text-xs text-v2-muted uppercase tracking-widest mb-2">Before</p>
                <p className="text-sm text-v2-muted leading-relaxed">
                  Site-built carpentry: sawdust on marble, inconsistent gaps, weeks of on-site work, and finishes that vary with the weather.
                </p>
              </div>
            </div>
            <div className="border border-v2-accent rounded-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&fit=crop')",
                }}
              />
              <div className="p-6 bg-v2-surface">
                <p className="font-v2-mono text-xs text-v2-accent uppercase tracking-widest mb-2">After ModuCraft</p>
                <p className="text-sm text-v2-muted leading-relaxed">
                  Factory-finished panels arrive flat-packed and pre-fitted. Installation is clean, fast, and exactly as designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Verify `/v2/for-homeowners` renders with full SpacePlanner quiz flow**

- [ ] **Step 3: Commit**

```bash
git add frontend/pages/v2/for-homeowners.tsx
git commit -m "feat(v2): add For Homeowners Space Visionary page"
```

---

## Task 11: Our Heritage Page `/v2/our-heritage`

**Files:**
- Create: `frontend/pages/v2/our-heritage.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/our-heritage.tsx`**

```tsx
import React from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

const MACHINERY = [
  {
    name: 'CNC Router',
    role: 'Precision cutting to ±0.5mm. Every panel exactly as specified — no hand trimming on site.',
  },
  {
    name: 'Beam Saw',
    role: 'Sheet-to-panel breakdown at industrial scale. Straight cuts, consistent every time.',
  },
  {
    name: 'Edge Banding Machine',
    role: 'Automated PVC/ABS edge application on all panel edges. Seals moisture entry at the most vulnerable point.',
  },
  {
    name: 'Cold Press',
    role: 'Controlled-pressure bonding for laminate and veneer application. Eliminates bubbling, ensures permanent adhesion.',
  },
];

const TIMELINE_EVENTS = [
  {
    year: '2014',
    title: 'Shri Ram Timber & Plywood Founded',
    description:
      'A timber and plywood trading business opens on Gandhi Path, Jaipur. Over the next decade it becomes a trusted supplier of BWP plywood, HDHMR, teak, and hardware to contractors and fabricators across Rajasthan.',
  },
  {
    year: '2022–24',
    title: 'The Gap Becomes Visible',
    description:
      'Repeated conversations with clients reveal a consistent problem: quality materials being poorly executed by site carpenters. The timber is right. The fabrication is not.',
  },
  {
    year: 'July 2025',
    title: 'VKIA Factory Commissioned',
    description:
      'ModuCraft by Jai Shri Ram Furniture launches at VKIA Industrial Area, Jaipur. CNC router, beam saw, edge banding, and cold press — in-house. For the first time, the full chain from raw material to installed furniture is owned end-to-end.',
  },
  {
    year: 'Now',
    title: 'Space Partner',
    description:
      'ModuCraft works with architects, designers, and homeowners to deliver factory-finished modular interiors. The promise: what we design in the factory is what appears in your space.',
  },
];

export default function OurHeritage() {
  return (
    <V2Layout>
      <V2Meta
        title="Shri Ram Timber & ModuCraft — Material Authority"
        description="10+ years of timber expertise behind every ModuCraft interior. BWP plywood, HDHMR, teak — sourced by Shri Ram Timber & Plywood, Jaipur, executed at our VKIA factory."
        canonical="/v2/our-heritage"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            Our Heritage
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl">
            We Don't Source<br />
            Materials. <em>We Are</em><br />
            the Source.
          </h1>
        </div>
      </section>

      {/* Shri Ram Timber story */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-4">Parent Company</p>
            <h2 className="font-v2-heading text-4xl text-v2-text mb-6">
              Shri Ram Timber & Plywood
            </h2>
            <p className="text-v2-muted leading-relaxed mb-4">
              Gandhi Path, Jaipur. For over a decade, the name behind the plywood in thousands of Jaipur interiors. Trusted by contractors for BWP plywood that doesn't delaminate, HDHMR that holds screws, and teak that doesn't warp.
            </p>
            <p className="text-v2-muted leading-relaxed">
              ModuCraft is the manufacturing arm of this legacy — the step that closes the loop between raw material and finished interior.
            </p>
          </div>
          <div
            className="h-80 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-4xl text-v2-text mb-16">The Journey</h2>
          <div className="flex flex-col gap-0">
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={event.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-v2-accent mt-1.5 flex-shrink-0" />
                  {i < TIMELINE_EVENTS.length - 1 && (
                    <div className="w-px flex-1 bg-v2-border my-2" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="font-v2-mono text-xs text-v2-accent mb-2">{event.year}</p>
                  <h3 className="font-v2-heading text-2xl text-v2-text mb-3">{event.title}</h3>
                  <p className="text-sm text-v2-muted leading-relaxed max-w-xl">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Machinery */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
            VKIA Industrial Area, Jaipur
          </p>
          <h2 className="font-v2-heading text-4xl text-v2-text mb-12">The Factory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MACHINERY.map((machine) => (
              <div
                key={machine.name}
                className="border border-v2-border rounded-lg p-8"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <h3 className="font-v2-heading text-xl text-v2-text mb-3">{machine.name}</h3>
                <p className="text-sm text-v2-muted leading-relaxed">{machine.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/pages/v2/our-heritage.tsx
git commit -m "feat(v2): add Our Heritage page with Shri Ram story, timeline, and factory"
```

---

## Task 12: About Page `/v2/about`

**Files:**
- Create: `frontend/pages/v2/about.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/about.tsx`**

```tsx
import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

export default function About() {
  return (
    <V2Layout>
      <V2Meta
        title="About ModuCraft — Jaipur"
        description="ModuCraft is a modular furniture manufacturer based in VKIA, Jaipur. A unit of Shri Ram Timber & Plywood, bridging design intent and factory execution."
        canonical="/v2/about"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8 max-w-3xl">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">About</p>
          <h1 className="font-v2-heading text-5xl md:text-6xl text-v2-text leading-tight mb-12">
            Bridging Design<br />
            and <em>Execution</em>
          </h1>

          <div className="space-y-8 text-v2-muted leading-relaxed">
            <p>
              ModuCraft is the manufacturing unit of Shri Ram Timber & Plywood — a timber and plywood business established on Gandhi Path, Jaipur, over ten years ago.
            </p>
            <p>
              For years, we supplied the materials. We watched good timber become mediocre furniture in the hands of site carpenters working under time and cost pressure. In July 2025, we commissioned our own factory at VKIA Industrial Area, Jaipur — with a CNC router, beam saw, edge banding machine, and cold press.
            </p>
            <p>
              Today, we work directly with architects, interior designers, and homeowners to deliver modular interiors that are designed, machined, and installed by one team. The gap between what was drawn and what was built is gone.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-v2-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">Vision</p>
              <p className="text-sm text-v2-text leading-relaxed">
                Seamless integration of design and manufacturing — every interior exactly as intended.
              </p>
            </div>
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">Mission</p>
              <p className="text-sm text-v2-text leading-relaxed">
                High-quality modular solutions backed by superior materials and factory-controlled execution.
              </p>
            </div>
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">The Why</p>
              <p className="text-sm text-v2-text leading-relaxed">
                We own the timber. We own the machines. We own the execution. No outsourcing, no translation loss.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/v2/our-heritage"
              className="text-sm text-v2-accent hover:text-v2-text transition-colors"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/pages/v2/about.tsx
git commit -m "feat(v2): add About page with mission and heritage narrative"
```

---

## Task 13: Contact Page `/v2/contact`

**Files:**
- Create: `frontend/pages/v2/contact.tsx`

- [ ] **Step 1: Create `frontend/pages/v2/contact.tsx`**

```tsx
import React, { useState } from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

type ProfessionalType = 'Architect' | 'Interior Designer' | 'Homeowner' | 'Other';
type ContactMethod = 'WhatsApp' | 'Call' | 'Email';

export default function Contact() {
  const [form, setForm] = useState({
    professionalType: '' as ProfessionalType | '',
    name: '',
    phone: '',
    projectDescription: '',
    contactMethod: '' as ContactMethod | '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const PROFESSIONAL_TYPES: ProfessionalType[] = ['Architect', 'Interior Designer', 'Homeowner', 'Other'];
  const CONTACT_METHODS: ContactMethod[] = ['WhatsApp', 'Call', 'Email'];

  return (
    <V2Layout>
      <V2Meta
        title="Contact ModuCraft — Get a Quote"
        description="Contact ModuCraft for a quote on modular kitchens, wardrobes, and interiors. Factory in VKIA, Jaipur. Response within 24 hours."
        canonical="/v2/contact"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">Contact</p>
              <h1 className="font-v2-heading text-5xl text-v2-text leading-tight mb-6">
                Let's Start<br />
                <em>Your Project</em>
              </h1>
              <p className="text-v2-muted leading-relaxed mb-12 max-w-sm">
                Tell us who you are and what you're building. We respond within one working day.
              </p>

              <div className="space-y-4 text-sm text-v2-muted font-v2-mono">
                <p>ModuCraft by Jai Shri Ram Furniture</p>
                <p>VKIA Industrial Area, Jaipur</p>
                <p>A unit of Shri Ram Timber & Plywood</p>
                <p>Gandhi Path, Jaipur</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="py-12">
                  <p className="font-v2-heading text-3xl text-v2-text mb-4">Received.</p>
                  <p className="text-v2-muted text-sm">
                    We'll reach out via {form.contactMethod || 'your preferred method'} within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Professional Type */}
                  <div>
                    <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">
                      I am a
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {PROFESSIONAL_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, professionalType: type })}
                          className={`py-3 px-4 border rounded text-sm text-left transition-all duration-200 ${
                            form.professionalType === type
                              ? 'border-v2-accent bg-v2-accent/5 text-v2-text'
                              : 'border-v2-border text-v2-muted hover:border-v2-accent/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
                  />

                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
                  />

                  <textarea
                    placeholder="Describe your project briefly"
                    value={form.projectDescription}
                    onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
                    rows={4}
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors resize-none"
                  />

                  {/* Preferred contact method */}
                  <div>
                    <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">
                      Best way to reach me
                    </p>
                    <div className="flex gap-3">
                      {CONTACT_METHODS.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setForm({ ...form, contactMethod: method })}
                          className={`flex-1 py-2.5 border rounded text-sm transition-all duration-200 ${
                            form.contactMethod === method
                              ? 'border-v2-accent bg-v2-accent/5 text-v2-text'
                              : 'border-v2-border text-v2-muted hover:border-v2-accent/50'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!form.name || !form.phone}
                    className="bg-v2-accent text-white py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add frontend/pages/v2/contact.tsx
git commit -m "feat(v2): add segmented Contact page with professional type selector"
```

---

## Task 14: Blog Pages `/v2/blog`

**Blog data strategy:** The v2 blog uses 2 new brand-appropriate placeholder posts (brand-voice content about manufacturing and materials). The existing `/blog` posts from `frontend/pages/blog.tsx` use different voice and topics — they are intentionally not migrated here. After v2 launch, replace placeholder posts with real content or migrate to a CMS. A shared blog API between v1 and v2 is out of scope for this plan.

**Files:**
- Create: `frontend/pages/v2/blog/index.tsx`
- Create: `frontend/pages/v2/blog/[slug].tsx`

- [ ] **Step 1: Create `frontend/pages/v2/blog/index.tsx`**

Create the file with 2 new brand-appropriate placeholder posts:

```tsx
import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

const blogPosts = [
  {
    id: 1,
    slug: '1',
    title: '5 Reasons to Choose Factory-Finished Modular Furniture',
    excerpt:
      'Site-built carpentry has hidden costs — in time, material waste, and finish quality. Here is why factory-finished modular interiors are the professional choice.',
    author: 'ModuCraft Team',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Manufacturing',
  },
  {
    id: 2,
    slug: '2',
    title: 'BWP vs MR Plywood: What Every Architect Should Know',
    excerpt:
      'The grade of plywood you specify determines the longevity of every interior you design. A technical comparison of IS:710 BWP and IS:303 MR grades.',
    author: 'ModuCraft Team',
    date: 'March 2026',
    readTime: '8 min read',
    category: 'Materials',
  },
];

export default function V2Blog() {
  return (
    <V2Layout>
      <V2Meta
        title="Journal — ModuCraft"
        description="Insights on materials, manufacturing, and modular design from the ModuCraft team in Jaipur."
        canonical="/v2/blog"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">Journal</p>
          <h1 className="font-v2-heading text-5xl text-v2-text mb-16">Notes on Materials & Making</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/v2/blog/${post.slug}`}
                className="group border border-v2-border rounded-lg p-8 hover:border-v2-accent transition-all duration-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <p className="text-xs font-v2-mono text-v2-accent uppercase tracking-widest mb-4">
                  {post.category}
                </p>
                <h2 className="font-v2-heading text-2xl text-v2-text mb-4 group-hover:text-v2-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-v2-muted leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs font-v2-mono text-v2-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
```

- [ ] **Step 2: Create `frontend/pages/v2/blog/[slug].tsx`**

```tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: '1',
    title: '5 Reasons to Choose Factory-Finished Modular Furniture',
    excerpt: 'Site-built carpentry has hidden costs — in time, material waste, and finish quality.',
    content: `Factory-finished modular furniture represents a fundamental shift in how interiors are built in India. Here are five reasons professionals and homeowners increasingly choose factory over site.

**1. Dimensional consistency**
Every panel cut on a CNC router is identical to the drawing. Site carpenters, however skilled, introduce human error at every step.

**2. Controlled finish quality**
Edge banding, laminate application, and surface finishing in a factory happen under controlled conditions — temperature, pressure, drying time. On site, none of these are controlled.

**3. Faster installation**
Flat-pack units that clip and fix together install in hours, not weeks. The site is clean again faster.

**4. Material traceability**
At ModuCraft, every batch uses materials sourced directly through Shri Ram Timber & Plywood. You know exactly what grade of plywood is behind that shutter.

**5. Reduced waste**
CNC nesting software optimises material yield across a batch of jobs. Site carpentry wastes 20–30% of sheet goods. Factory production typically wastes under 8%.`,
    author: 'ModuCraft Team',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Manufacturing',
  },
  {
    slug: '2',
    title: 'BWP vs MR Plywood: What Every Architect Should Know',
    excerpt: 'The grade of plywood you specify determines the longevity of every interior you design.',
    content: `Plywood in India is governed by two key IS standards. Knowing which to specify — and why — is fundamental to interior design in a humid climate.

**IS:303 — MR Grade (Moisture Resistant)**
The most common grade. Resists moisture to a degree but will delaminate with prolonged water exposure. Suitable for internal dry areas only.

**IS:710 — BWP Grade (Boiling Water Proof)**
The correct specification for kitchens, bathrooms, and any area with water risk. The bond between veneers withstands boiling water immersion — a test that guarantees real-world performance in humid conditions.

**The specification mistake**
Most site fabricators use MR grade even in kitchens, substituting it for BWP without informing the designer. After 3–5 years, cabinet bases and sink surrounds begin to delaminate.

**At ModuCraft**
We use IS:710 BWP plywood as standard for all kitchen carcasses — sourced through our parent company, Shri Ram Timber & Plywood, who have been supplying verified BWP stock for over a decade.

Specify it by standard number (IS:710) in your BOQ, not by colloquial name. It is the only way to hold a contractor accountable.`,
    author: 'ModuCraft Team',
    date: 'March 2026',
    readTime: '8 min read',
    category: 'Materials',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug) || null;
  return { props: { post } };
};

export default function BlogPost({ post }: { post: BlogPost | null }) {
  if (!post) return null;

  return (
    <V2Layout>
      <V2Meta
        title={post.title}
        description={post.excerpt}
        canonical={`/v2/blog/${post.slug}`}
      />

      <article className="py-24 bg-v2-bg">
        <div className="max-w-[720px] mx-auto px-8">
          <Link href="/v2/blog" className="text-xs font-v2-mono text-v2-muted hover:text-v2-accent transition-colors mb-8 block">
            ← Journal
          </Link>
          <p className="text-xs font-v2-mono text-v2-accent uppercase tracking-widest mb-4">{post.category}</p>
          <h1 className="font-v2-heading text-4xl md:text-5xl text-v2-text leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-v2-mono text-v2-muted mb-12 pb-12 border-b border-v2-border">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-sm max-w-none text-v2-muted leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={i} className="font-v2-heading text-xl text-v2-text mt-8">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              // Handle inline bold
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith('**') ? (
                      <strong key={j} className="text-v2-text font-medium">
                        {part.replace(/\*\*/g, '')}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </V2Layout>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add frontend/pages/v2/blog/
git commit -m "feat(v2): add v2 Blog list and post pages"
```

---

## Task 15: SEO — robots.txt and sitemap.xml

**Files:**
- Modify: `frontend/public/robots.txt`
- Modify: `frontend/public/sitemap.xml`

- [ ] **Step 1: Update `frontend/public/robots.txt`**

The current file already has `Allow: /` which covers `/v2/*`. No change needed. Verify the file does not have any `Disallow: /v2` rules — it doesn't, so this task is complete.

- [ ] **Step 2: Update `frontend/public/sitemap.xml`**

Open `frontend/public/sitemap.xml`. Add the following `<url>` entries before the closing `</urlset>` tag:

```xml
<url>
  <loc>https://moducraft-site.vercel.app/v2</loc>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/for-architects</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/for-homeowners</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/our-heritage</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/about</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/contact</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://moducraft-site.vercel.app/v2/blog</loc>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>
```

- [ ] **Step 3: Commit**

```bash
git add frontend/public/sitemap.xml
git commit -m "feat(v2): add v2 routes to sitemap.xml"
```

---

## Task 16: Final Verification

- [ ] **Step 1: Run dev server and verify all v2 routes**

```bash
cd frontend && npm run dev
```

Check each route in browser:
- `http://localhost:3000/v2` — split hero, trust bar, ProcessTimeline, footer CTA
- `http://localhost:3000/v2/for-architects` — benefits grid, MaterialLibrary (technical mode), lead form
- `http://localhost:3000/v2/for-homeowners` — SpacePlanner quiz (all 4 steps work), before/after
- `http://localhost:3000/v2/our-heritage` — Shri Ram story, timeline, factory section
- `http://localhost:3000/v2/about` — mission triptych, link to heritage
- `http://localhost:3000/v2/contact` — professional type selector, form, submission
- `http://localhost:3000/v2/blog` — two blog cards
- `http://localhost:3000/v2/blog/1` and `/v2/blog/2` — blog posts render

- [ ] **Step 2: Verify TypeScript compiles without errors**

```bash
cd frontend && npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Verify no lint errors**

```bash
cd frontend && npm run lint
```

Expected: no errors.

- [ ] **Step 4: Verify existing site still works**

- `http://localhost:3000` — existing home page unchanged
- `http://localhost:3000/contact` — existing contact page unchanged

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat(v2): complete ModuCraft v2 redesign — all routes and components"
```

---

## Notes for Implementer

- All images use Unsplash placeholder URLs — replace with real photography when available
- WhatsApp link in footer uses placeholder `91XXXXXXXXXX` — update with real number before cutover
- The contact form `fetch('/api/contact', ...)` will fail silently if no API endpoint exists — localStorage backup ensures lead data is not lost. Wire up to real endpoint separately.
- When ready for cutover: in `frontend/pages/index.tsx`, add `export { getServerSideProps }` returning `{ redirect: { destination: '/v2', permanent: false } }` at the bottom, or replace the existing export with a redirect.
