# ModuCraft Brand Pivot & Website Redesign
**Date:** 2026-04-06  
**Status:** Approved for Implementation  
**Approach:** Parallel `/v2` route structure (zero regression to existing site)

---

## Overview

A full brand pivot and website redesign for ModuCraft, shifting from a basic e-commerce/portfolio site to a sophisticated "Space Partner" platform targeting Architects, Interior Designers, and Homeowners. The redesign lives under `frontend/pages/v2/` and is developed in isolation from the current site.

**Brand Identity:**
- Parent company: Shri Ram Timber & Plywood (Gandhi Path, Jaipur) — 10+ years material authority
- Factory: ModuCraft by Jai Shri Ram Furniture (VKIA, Jaipur) — established July 2025
- Core value: "Bridging the gap between design and execution"
- Differentiator: No outsourcing — owns timber supply, CNC machinery, and installation

---

## Architecture

### Route Structure
All new pages live under `frontend/pages/v2/`:

```
/v2                        → Home (split hero + 3 CTA paths)
/v2/for-architects         → Pro Portal (specs, CAD, partnership)
/v2/for-homeowners         → Space Visionary (quiz flow, renovation)
/v2/our-heritage           → Shri Ram Timber story + VKIA factory
/v2/about                  → July 2025 transition story
/v2/contact                → Segmented contact form
/v2/blog                   → Carried over from existing blog
```

### New Shared Components
All new components live in `frontend/components/v2/`:
- `MaterialLibrary.tsx`
- `ProcessTimeline.tsx`
- `SpacePlanner.tsx`
- `V2Layout.tsx` (new nav/footer, independent of existing Layout.tsx)

### Cutover
When approved, `frontend/pages/index.tsx` is updated to redirect `/` → `/v2`. Existing pages remain intact until explicitly removed.

---

## Design System

### Color Palette
```
Background:   #F5F0EB  (warm off-white)
Surface:      #FFFFFF
Text primary: #1A1A18  (warm near-black)
Text muted:   #6B6B5E  (warm grey)
Accent:       #8B6F47  (teak brown)
Border:       #E0D9CF  (warm stone)
```

### Typography
- Headings: `Cormorant Garamond` (Google Fonts) — editorial, architectural
- Body: `Inter` — clean, readable
- Monospace/specs: `JetBrains Mono` — precision/CNC aesthetic

### Spacing & Layout
- Max content width: `1280px`
- Desktop padding: `px-8`
- Section vertical rhythm: `py-24`
- Cards: `1px` warm border, `8px` radius, `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`

### Motion
- Fade-in on scroll via `IntersectionObserver` (no animation libraries)
- Hover: border color shifts to accent `#8B6F47`, no scale transforms

### Aesthetic Reference
Studio Mumbai / Neri & Hu — warm craftsmanship meets modern minimalism, material-forward storytelling.

---

## Pages

### `/v2` — Home
- **Hero:** Full-width split-screen. Left: close-up timber/material texture (placeholder image). Right: headline `"Where Material Mastery Meets Modern Manufacturing"` + 3 CTA cards (For Architects / For Homeowners / Our Heritage)
- **Trust bar:** 3-column — "10+ Years in Timber", "VKIA Factory, Jaipur", "CNC-Precision Finish"
- **ProcessTimeline:** Embedded as teaser section mid-page
- **Footer CTA:** "Start Your Space" → `/v2/for-homeowners` (SpacePlanner)

### `/v2/for-architects` — Pro Portal
- **Hero:** `"Built for the Way You Work"`
- **Benefits grid:** CAD-ready designs, factory tolerance specs, project timelines, bulk pricing
- **MaterialLibrary:** Embedded in technical spec view mode
- **Lead form:** Name, Firm, Project Type, WhatsApp

### `/v2/for-homeowners` — Space Visionary
- **Hero:** `"Your Dream Space, Factory Finished"`
- **SpacePlanner:** Full quiz flow embedded
- **Before/after section:** Renovation concept (placeholder imagery)

### `/v2/our-heritage` — Heritage
- **Shri Ram Timber story:** Founding, Gandhi Path location, 10+ years in BWP plywood, HDHMR, Teak, hardware
- **Material authority grid:** BWP Plywood, HDHMR, Teak, Acrylics — grade callouts per material
- **Factory section:** VKIA address, machinery list (CNC Router, Beam Saw, Edge Banding, Cold Press) with role descriptions
- **Timeline:** Trading model → July 2025 VKIA launch → ModuCraft brand

### `/v2/about`
Condensed heritage narrative with team focus, mission statement, and the "Why ModuCraft" differentiator.

### `/v2/contact`
- Professional Type radio: Architect / Interior Designer / Homeowner / Other
- Fields: Name, Phone, Project Description, Preferred Contact Method
- On submit: form data posted to existing contact API or `mailto:` fallback

---

## New Components

### `MaterialLibrary.tsx`
- Interactive grid of material cards
- Each card: name, grade/type badge, description, key properties, warm swatch color block
- Click to expand: full spec detail panel
- Dual view mode via prop: `mode="technical"` (for Architects) | `mode="aesthetic"` (for Homeowners)
- Data source: local `frontend/data/materials.ts` config — no component changes needed to add materials

**Material entries to include:**
| Material | Grade | Key Properties |
|----------|-------|----------------|
| BWP Plywood | IS:710 | Boiling water resistant, marine grade |
| HDHMR | High Density | Moisture resistant, screw-holding strength |
| Teak Wood | A-grade | Natural oils, termite resistant |
| Acrylic Finish | UV-coated | High gloss, scratch resistant |
| Hardware | Hettich/Hafele | German-grade hinges and channels |

### `ProcessTimeline.tsx`
- 5-step timeline: Material Selection → CNC Cutting → Edge Banding → Cold Press Assembly → Precision Installation
- Desktop: horizontal scroll; Mobile: vertical stacked
- Each step: icon, title, 2-line description, "Why this matters" callout
- Step connector line animates in on scroll via `IntersectionObserver`

### `SpacePlanner.tsx`
4-step guided quiz with progress bar:

| Step | Label | Input Type |
|------|-------|-----------|
| 1 | Room | Icon grid: Kitchen / Wardrobe / Living Unit / Study |
| 2 | Style | Image cards: Minimal / Warm Wood / Contemporary / Industrial |
| 3 | Material | Swatch grid: BWP Plywood / HDHMR / Acrylic / Veneer |
| 4 | Contact | Name, Phone, City, Notes textarea + Submit |

- State managed locally with `useState`
- On submit: stores to `localStorage` + fires `fetch` to contact endpoint
- Confirmation screen: estimated timeline + "We'll call within 24 hours"

### `V2Layout.tsx`
- Nav: Logo left, links right — "For Architects" / "For Homeowners" / "Our Heritage" / "Contact"
- Mobile: hamburger menu
- Footer: address (VKIA, Jaipur), parent company credit (Shri Ram Timber & Plywood), WhatsApp CTA

---

## SEO & Metadata

| Page | `<title>` | Primary Keywords |
|------|-----------|-----------------|
| `/v2` | ModuCraft — Modular Furniture Manufacturer, Jaipur | Modular Kitchen Manufacturer Jaipur, BWP Plywood Modular Furniture |
| `/v2/for-architects` | Pro Partner Portal — ModuCraft Jaipur | Architectural Partner Jaipur, CNC Modular Furniture |
| `/v2/for-homeowners` | Build Your Dream Space — ModuCraft | Modular Kitchen Jaipur, Custom Wardrobe Jaipur |
| `/v2/our-heritage` | Shri Ram Timber & ModuCraft — Material Authority | BWP Plywood Supplier Jaipur, HDHMR Furniture Jaipur |
| `/v2/contact` | Contact ModuCraft — Get a Quote | Modular Furniture Quote Jaipur |

- Open Graph tags on all pages
- `robots.txt` and `sitemap.xml` updated to include `/v2` routes
- Canonical URLs set to `/v2` equivalents

---

## Content Strategy

All content is professional placeholder copy. Tone: authoritative, warm, precise — no marketing fluff.

Key narrative threads to maintain across all pages:
1. **Material authority** — We source it, we know it, we use it
2. **Factory ownership** — No outsourcing, end-to-end control
3. **Design + execution bridge** — For professionals and homeowners alike
4. **Heritage** — 10+ years of Shri Ram Timber backing ModuCraft's precision

---

## Implementation Notes

- All new code in `frontend/pages/v2/` and `frontend/components/v2/` — no modifications to existing files
- Google Fonts added to `frontend/pages/v2/_document.tsx` (scoped, not global)
- Tailwind custom tokens added under `v2` prefix in `tailwind.config.js` to avoid conflicts
- No new npm dependencies required except potentially `@headlessui/react` for the SpacePlanner step transitions (already common in Next.js stacks)
