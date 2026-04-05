# ModuCraft Brand Pivot & Website Redesign — Implementation Plan

**Version:** 1.0.0  
**Status:** In Progress  
**Last Updated:** April 6, 2026

---

## Executive Summary

**Transformation:** Product-centric e-commerce → Premium "Space Partner" platform  
**New Positioning:** "Bridging Design & Execution" — Material Mastery + Manufacturing Precision  
**Target Audience:** Architects, Interior Designers, Homeowners, Professionals  
**Aesthetic:** Minimalist Architectural (Apple + Bauhaus)  
**Launch Goal:** Complete rebrand + component build + pro-portal setup + SEO refresh

---

## Phase Breakdown

### PHASE 1: Design System Refresh ✓ (Next)
- [ ] Update color palette to "Premium Architectural" (warm grays, blacks, accent colors)
- [ ] Refine typography for "professional, transparent" feel
- [ ] Create spacing/sizing hierarchy for precision aesthetic
- [ ] Update component styles (buttons, cards, forms)
- [ ] Add "Material Library" color swatches

**Deliverable:** Updated `DESIGN.md` + new color tokens in `tailwind.config.js`

### PHASE 2: Page Restructuring ✓ (Parallel)
- [ ] **index.tsx** — New hero: "Material Roots" (Shri Ram) → "CNC Precision" (VKIA Factory)
- [ ] **about.tsx** — Timeline: Trading → In-House Manufacturing (July 2025)
- [ ] **contact.tsx** — Add "Professional Type" segmentation + lead routing
- [ ] **heritage.tsx** — NEW: Deep dive into Shri Ram Timber supply chain
- [ ] **pro/** — NEW: Pro portal section structure

**Deliverable:** 5 restructured/new pages with brand messaging

### PHASE 3: New Components ✓ (Parallel)
- [ ] **MaterialLibrary.tsx** — Interactive material grid (Plywood, Timber, HDHMR, Acrylics)
- [ ] **ProcessTimeline.tsx** — Visual flow: Material → CNC → Installation
- [ ] **SpacePlanner.tsx** — "Build Your Choice" lead gen (Kitchen/Wardrobe selector)
- [ ] **PrecisionStats.tsx** — Key differentiators (10+ years, in-house machinery, 0-waste)

**Deliverable:** 4 new interactive components ready to integrate

### PHASE 4: Pro Portal Setup ✓ (Next)
- [ ] `/pro` landing (gateway for architects/designers)
- [ ] `/pro/specs` — Technical specs, CAD-ready designs
- [ ] `/pro/materials` — Material certifications, sourcing
- [ ] `/pro/partnership` — Partnership benefits, bulk pricing, timelines
- [ ] Navigation logic: Detect visitor type in header

**Deliverable:** Pro portal structure + navigation hooks

### PHASE 5: SEO Optimization ✓ (Final)
- [ ] Primary keywords: "Modular Kitchen Manufacturer Jaipur", "BWP Plywood", "Architectural Partner"
- [ ] Update page titles, descriptions, meta tags
- [ ] Schema markup for organization/business
- [ ] Internal linking strategy
- [ ] Update sitemap + robots.txt

**Deliverable:** SEO-optimized pages + metadata

---

## Design System Changes

### Color Palette (Minimalist Architectural)

**Primary Palette:**
- **Charcoal Black** `#1a1a1a` — Primary text, high contrast
- **Stone Gray** `#4a4a4a` — Secondary text, UI elements
- **Marble White** `#f8f7f5` — Backgrounds, clean spaces
- **Warm Beige** `#e8e3db` — Subtle accents, material warmth

**Accent Colors:**
- **Natural Oak** `#a89968` — Material highlight, premium feel
- **Copper Accent** `#b8884d` — CTAs, highlights (premium warmth)
- **Deep Forest** `#2d4a3f` — Heritage/materials section

**Semantic:**
- Success: `#4a9d6f` (warm green)
- Error: `#c65d5d` (warm red)
- Warning: `#d89d4a` (warm orange)
- Info: `#5a8fa0` (cool blue)

### Typography Updates

**Headlines** (Playfair Display 700, tighter tracking):
- H1: 56px / tracking -0.5px
- H2: 40px / tracking -0.3px
- H3: 32px / tracking -0.2px

**Body** (Inter, increase line-height for readability):
- Body: 16px / line-height 1.7 (luxury spacing)
- Labels: 12px uppercase / letter-spacing +0.1em

**New Font for Architecture:** Consider adding **TeX Gyre Termes** or **Lora** for heritage/craftsmanship sections

### Spacing (Precision Grid)

**Base Unit:** 8px (professional, architectural precision)
```
xs: 4px
sm: 8px
md: 16px
lg: 32px (2 x 16)
xl: 48px (3 x 16)
2xl: 64px (4 x 16)
3xl: 96px (6 x 16)
```

---

## Page Structure (Before & After)

### HOME
**Before:** Generic hero + product cards + testimonials  
**After:**
1. Hero Section: Layered (Material Roots → CNC Precision → Why Choose)
2. "Why Material Mastery?" (Stats: 10+ years, 100% in-house, 0-waste)
3. Process Timeline (Material → Production → Installation)
4. Space Planner CTA (Kitchen/Wardrobe selector for leads)
5. Material Library Preview
6. Trust Signals (Certifications, partnerships, projects)

### ABOUT
**Before:** Generic company story  
**After:**
1. Timeline: Shri Ram Trading (Legacy) → In-House VKIA (2025 Pivot)
2. "The Factory" section (CNC machinery, precision capabilities)
3. Material Sourcing (Parent company authority)
4. Team & Craftsmanship
5. Sustainability commitment (0-waste factory process)

### CONTACT
**Before:** Generic contact form  
**After:**
1. Lead segmentation: Are you a "Professional" (Architect/Designer) or "Homeowner"?
2. Conditional fields based on type
3. Pro routing: Quick response to architects, schedule consultation for homeowners
4. Multi-channel: Form + WhatsApp bot + Call scheduler

### NEW: HERITAGE
1. Shri Ram Timber Supply Chain (10+ years)
2. Material sourcing story
3. "From Raw Material to Your Space" visual guide
4. Certifications & compliance

### NEW: PRO PORTAL
**Entry point:** `/pro`  
**Subsections:**
- `/pro/specs` — CAD files, technical drawings, material specs
- `/pro/materials` — Sourcing, certifications, bulk availability
- `/pro/partnership` — Volume pricing, turntime, custom commissions
- `/pro/support` — Technical support, project tracking (future: API)

---

## New Components Detailed

### MaterialLibrary.tsx
**Purpose:** Showcase raw material authority (interactive grid)

**Props:**
```tsx
interface MaterialLibraryProps {
  featured?: boolean;          // Show featured materials only
  onMaterialSelect?: (material: string) => void;
}
```

**Content:**
```
Row 1: BWP Plywood (Grades: 710, 710M, 710H)
Row 2: Timber (Teak, Oak, Walnut, Veneer)
Row 3: HDHMR (Colors & finishes)
Row 4: Acrylics (Matte, Glossy, Textured)
Row 5: Hardware (Hinges, Handles, Tracks)
```

**Each card shows:**
- Material image/swatch
- Name & grade
- Key specs (thickness, finish options, durability)
- Hover: "Select for your space"

### ProcessTimeline.tsx
**Purpose:** Visual flow from material selection to installation (builds confidence)

**Steps:**
1. 📋 Material Selection → Choose from curated library
2. 🤖 CNC Precision → Factory floor imagery, step-by-step visualization
3. 🚚 Quality Check → Precision measurements, certifications
4. 📦 Packaging → Factory-finished, ready to install
5. 🏗️ Installation → On-site assembly (no carpentry mess)

**Interactive:** Show time estimate for each phase (e.g., "Material Selection: 2 days, Production: 7 days...")

### SpacePlanner.tsx
**Purpose:** Lead generation UI with room-based workflow

**Flow:**
1. "Choose Your Space" (Kitchen, Wardrobe, Study, Bedroom, Dining, Living)
2. "Select Materials" (Material Library grid filtered by room)
3. "Finishes" (Matte, Glossy, Wood texture, Color)
4. "Budget Range" (Quick filter)
5. "Get Your Custom Quote" (Lead capture form pre-filled with selections)

**Lead Conversion:** Route to pro team or sales team based on complexity

### PrecisionStats.tsx
**Purpose:** Trust-building differentiators (stats section)

**Key Stats:**
```
"10+ Years" of Material Mastery (Shri Ram heritage)
"100% In-House" Manufacturing (VKIA factory, no outsourcing)
"0-Waste" Factory Process (sustainability + precision)
"7-14 Days" Turntime (factory to your space)
"Zero Carpentry" Mess (factory-finished precision)
```

**Design:** Dark background, large bold numbers, minimal text

---

## Pro Portal Navigation Logic

**Header Detection:**
```tsx
// If visitor selects "I'm a Professional" in header > role selector
// OR visits /pro directly
// Show pro-specific CTA: "Access Pro Portal"

// Pro portal shows:
// - Technical specs & CAD downloads
// - Material certifications
// - Partnership benefits
// - Bulk pricing calculator
// - Direct contact to pro team
```

---

## SEO Strategy

### Primary Keywords (Priority Order)
1. Modular Kitchen Manufacturer Jaipur
2. BWP Plywood Modular Furniture
3. Architectural Partner Jaipur
4. Custom Furniture Factory Jaipur
5. Precision Manufacturing Jaipur

### Page-Level SEO

| Page | Focus Keywords | Title | Meta Description |
|------|---|---|---|
| / | Factory precision, modular solutions | ModuCraft \| Premium Modular Furniture Manufacturer, Jaipur | "In-house factory precision. 10+ years of material mastery. Zero outsourcing." |
| /about | Heritage, transparency, factory | Our Story \| From Trading to Manufacturing (July 2025) | "The evolution of Shri Ram Timber into ModuCraft. In-house CNC precision." |
| /pro | Architect partnership, technical specs | Professional Portal \| CAD-Ready Designs & Technical Specs | "Exclusive access for architects. CAD files, certifications, bulk pricing." |
| /contact | Lead capture, professional routing | Contact ModuCraft \| Custom Quotes & Consultations | "Architects, designers, homeowners — let's build your perfect space." |
| /heritage | Supply chain, material authority | Our Materials \| 10+ Years of Timber Mastery | "From forest to factory. Complete supply chain transparency." |

### Schema Markup
- Organization schema (company info, addresses)
- LocalBusiness schema (Jaipur, VKIA address)
- Product schema (for materials/products)
- BreadcrumbList (for navigation)

---

## Implementation Timeline

| Phase | Tasks | Timeline | Status |
|-------|-------|----------|--------|
| **1** | Design System Refresh | Day 1-2 | ⏳ Starting |
| **2** | Page Restructuring | Day 2-4 | ⏳ Queued |
| **3** | New Components | Day 4-5 | ⏳ Queued |
| **4** | Pro Portal Setup | Day 5-6 | ⏳ Queued |
| **5** | SEO Optimization | Day 6-7 | ⏳ Queued |
| **6** | Testing & Deployment | Day 7-8 | ⏳ Final |

---

## Files to Create/Modify

### Modified Files
- `tailwind.config.js` ← Color tokens, typography updates
- `DESIGN.md` ← Premium aesthetic documentation
- `pages/index.tsx` ← New hero structure
- `pages/about.tsx` ← Heritage timeline
- `pages/contact.tsx` ← Pro segmentation
- `next.config.js` ← SEO headers

### New Files
- `pages/heritage.tsx` ← Material mastery story
- `pages/pro/index.tsx` ← Pro portal gateway
- `pages/pro/specs.tsx` ← Technical specifications
- `pages/pro/materials.tsx` ← Material library + sourcing
- `pages/pro/partnership.tsx` ← Partnership benefits
- `components/MaterialLibrary.tsx` ← Interactive material grid
- `components/ProcessTimeline.tsx` ← Visual production flow
- `components/SpacePlanner.tsx` ← Room-based lead gen
- `components/PrecisionStats.tsx` ← Trust-building stats
- `data/materials.ts` ← Material data (plywood, timber, etc.)
- `data/process.ts` ← Production process steps

---

## Launch Checklist

- [ ] Design system updated (colors, fonts, spacing)
- [ ] Home page hero rebuilt with layered sections
- [ ] About page refactored with heritage timeline
- [ ] Contact form updated with professional segmentation
- [ ] Heritage page created and linked
- [ ] Pro portal structure in place
- [ ] All new components built and integrated
- [ ] SEO metadata optimized
- [ ] Mobile responsiveness verified
- [ ] Performance tested (build size, load time)
- [ ] Staging deployment verified
- [ ] Production deployment to Vercel
- [ ] Analytics tracking configured
- [ ] Team notified of changes

---

## Success Metrics

- **Pro Signup Rate:** Track architects/designers using pro portal
- **Lead Segmentation:** Monitor professional vs homeowner conversion
- **Material Library Engagement:** Track material selections in SpacePlanner
- **SEO Rankings:** Monitor keyword improvements (6-8 weeks)
- **Load Time:** Maintain <3s first load (include video/image assets)
- **Mobile Traffic:** Ensure >50% responsive experience
- **Pro Portal Adoption:** Track first 100 pro users

---

## Next Steps

1. ✅ Approve design aesthetic & color palette
2. ✅ Approve page structure & component specs
3. ⏳ **START: Design System Refresh** (Colors in tailwind.config.js)
4. ⏳ Build & integrate components
5. ⏳ Refactor pages with new messaging
6. ⏳ Set up pro portal navigation
7. ⏳ Optimize for SEO
8. ⏳ Deploy & announce rebrand

---

**Ready to begin? Let's build the "Architect's Workshop." 🏗️**

