# Moducraft Website - Design System

**Version:** 1.0 | **Last Updated:** April 5, 2026 | **Status:** Active

---

## Design Philosophy

**Moducraft embodies precision, craftsmanship, and transparency.** The design system reflects:
- **Modular thinking** — Clean, component-based layouts that feel intentional
- **Premium simplicity** — No clutter; let quality speak
- **Artisan pride** — Celebrate manufacturing heritage while feeling modern
- **Trust through transparency** — Factory photos, clear process documentation
- **Jaipur authenticity** — Warm, earthy tones; subtle heritage details

---

## Color System

### Primary Palette

| Color | Hex | RGB | Usage | Psychology |
|-------|-----|-----|-------|-----------|
| **Moduwood** (Primary Brown) | #8B7355 | 139, 115, 85 | CTA buttons, headlines, primary backgrounds | Warmth, craftsmanship, stability |
| **Sandstone** (Secondary Tan) | #D4A574 | 212, 165, 116 | Accents, hover states, secondary CTAs | Approachability, material reference |
| **Slate** (Tertiary Navy) | #2C3E50 | 44, 62, 80 | Text, navigation, serious copy | Professionalism, trust |
| **Parchment** (Off-White) | #F5F3F0 | 245, 243, 240 | Page background, card backgrounds | Clean, premium feel |
| **White** | #FFFFFF | 255, 255, 255 | Content areas, floating elements | Clarity, space |
| **Charcoal** (Dark Text) | #333333 | 51, 51, 51 | Body text, navigation | Readability |

### Semantic Colors

| Semantic | Hex | Usage |
|----------|-----|-------|
| **Success/Green** | #27AE60 | Success messages, confirmed orders, availablilty |
| **Warning/Amber** | #F39C12 | Lead time warnings, stock alerts |
| **Error/Red** | #E74C3C | Form errors, cancellations, critical alerts |
| **Info/Blue** | #3498DB | Informational callouts, tips |
| **Disabled/Gray** | #BDBDBD | Inactive buttons, disabled form fields |

### Color Usage Rules

**Buttons:**
- Primary CTA (Quote, Add to Cart): Moduwood (#8B7355)
- Secondary CTA (Browse, Learn More): Sandstone (#D4A574)
- Tertiary (View Details): Text-only, Slate color
- Hover State: Darken by 15% (`#6F5C47`)

**Text:**
- Headlines H1-H3: Slate (#2C3E50)
- Body text: Charcoal (#333333)
- Secondary text (captions, meta): #666666 (60% opacity)
- Links: Moduwood (#8B7355), underlined on hover

**Backgrounds:**
- Page: Parchment (#F5F3F0)
- Cards/Components: White (#FFFFFF)
- Alternate sections: Light Parchment (#F9F8F6)

---

## Typography

### Font Stack

| Type | Font Family | Weight(s) | Usage |
|------|------------|-----------|--------|
| **Serif Headlines** | Playfair Display | 700 (Bold) | H1, hero copy; conveys premium + heritage |
| **Sans Headlines** | Sora | 600 (Semibold) | H2, H3, section titles; modern + clean |
| **Body Text** | Inter | 400 (Regular), 500 (Medium) | Body paragraphs, copy, tables |
| **Monospace** | IBM Plex Mono | 400 | Code blocks, technical specs, pricing |

### Font Sizes & Line Heights

| Level | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|-----------------|-------|
| **H1** | 48px | 1.2 (57.6px) | -0.02em | Page titles, hero statements |
| **H2** | 36px | 1.3 (46.8px) | -0.01em | Section titles |
| **H3** | 28px | 1.4 (39.2px) | 0 | Subsection titles |
| **H4** | 22px | 1.5 (33px) | 0 | Card titles, module headings |
| **Body Large** | 18px | 1.6 (28.8px) | 0 | Lead paragraphs, intros |
| **Body** | 16px | 1.6 (25.6px) | 0 | Standard paragraph text |
| **Body Small** | 14px | 1.5 (21px) | 0.3px | Secondary text, captions |
| **Label** | 12px | 1.4 (16.8px) | 0.5px | Form labels, tags, badges |

### Typography Hierarchy Example

```
H1 (Playfair Display, 48px, Bold)
   "Custom Modular Furniture, Built in Jaipur"

H2 (Sora, 36px, Semibold)
   "Our Process"

Body Large (Inter, 18px, Regular)
   "We believe in transparency. See how we craft each piece..."

Body (Inter, 16px, Regular)
   "From raw wood to precision-cut components, every step is documented.
    Quality control happens at 7 stages of production."

Body Small (Inter, 14px, Regular)
   "9-week delivery | CNC precision | 50+ wood finishes"
```

---

## Spacing & Layout

### Spacing Scale (8px base)

| Token | Pixels | Usage |
|-------|--------|-------|
| `xs` | 4px | Tight spacing between elements |
| `sm` | 8px | Small gaps, button padding |
| `md` | 16px | Standard spacing, component padding |
| `lg` | 24px | Section gaps, card margins |
| `xl` | 32px | Large section breaks |
| `2xl` | 48px | Hero sections, major layout breaks |
| `3xl` | 64px | Page-level spacing |

### Grid & Layout

- **Page Width:** 1280px (max-width on large screens)
- **Column Grid:** 12-column responsive grid
  - Desktop (1280px+): 12 columns
  - Tablet (768px-1279px): 8 columns
  - Mobile (< 768px): 4 columns
  
- **Gutters:** 24px (desktop), 16px (tablet), 12px (mobile)

### Common Layout Patterns

**Hero Section:**
- Full width background
- Content: centered, max 900px
- Top/bottom padding: 64px (3xl)
- Image: 50% width on desktop, full width mobile

**Card Grid:**
- Desktop: 3 cards per row (grid-cols-3)
- Tablet: 2 cards per row
- Mobile: 1 card per row
- Gap: 24px (lg)

**Section Layout:**
- Inner padding: 24px (lg) all sides
- Between sections: 48px (2xl) vertical gap

---

## Component Library

### Buttons

**Button Sizes & Styles:**

1. **Large Primary Button**
   - Background: Moduwood (#8B7355)
   - Text: White, Inter 16px/600
   - Padding: 16px 32px
   - Border radius: 4px
   - Hover: Background darkens to #6F5C47, slight shadow
   - Active: Further darken to #5C4A37

2. **Medium Primary Button** (default)
   - Padding: 12px 24px
   - Font: Inter 14px / 600

3. **Small Secondary Button**
   - Background: Sandstone (#D4A574)
   - Text: Slate (#2C3E50), Inter 14px / 600
   - Padding: 10px 20px
   - Hover: Darken to #C9985F

4. **Outline Button** (tertiary)
   - Background: Transparent
   - Border: 1px solid Slate (#2C3E50)
   - Text: Slate, Inter 14px / 600
   - Padding: 12px 24px
   - Hover: Background becomes Parchment

5. **Icon Button**
   - Size: 40px × 40px
   - Icon: 20px centered
   - Border radius: 50% (circle)
   - Hover: Background becomes light Parchment

### Cards

**Product Card**
```
┌─────────────────────────┐
│   [Image] (300×300px)   │
├─────────────────────────┤
│ Collection: Bedroom     │ ← Label, 12px, Slate 60% opacity
│ Modular Bed Set        │ ← H4, Slate
│                         │
│ Starting from ₹15,000  │ ← Body Large, Moduwood bold
│                         │
│ [Brown] [White] [Gray] │ ← Color swatches (20px dia)
│                         │
│ [+ Customize] [→ View] │ ← Small buttons
└─────────────────────────┘
```
- Width: 300px (fits 4 per row on desktop)
- Background: White
- Padding: 16px
- Border radius: 8px
- Shadow: 0px 4px 12px rgba(0,0,0,0.08)
- Hover: Shadow increases to 0px 8px 24px rgba(0,0,0,0.12)

**Portfolio Project Card**
```
┌────────────────────────────┐
│   [Image] (400×250px)      │
│   [Tag: Bedroom]           │
├────────────────────────────┤
│ Minimalist Living Design   │ ← H4
│ "An elegant, functional    │ ← Body Small, testimonial
│  space for a young family" │
│                            │
│ Designed by: Priya Kumar   │ ← Label
│ Materials: Teak, Plywood   │ ← Body Small
│ Timeline: 6 weeks          │ ← Body Small
│ Budget: ₹80,000            │ ← Body Small, bold
└────────────────────────────┘
```

**Testimonial Card**
- Background: Light Parchment (#F9F8F6)
- Left border: 4px solid Moduwood
- Padding: 24px
- Quote text: Body, Slate
- Author: Body Small, bold, Moduwood
- Spacing: 16px vertical

### Forms

**Input Field**
- Border: 1px solid #BDBDBD
- Border radius: 4px
- Padding: 12px 16px
- Font: Inter 14px, Charcoal
- Placeholder: 60% opacity Charcoal
- Focus: Border becomes Moduwood (#8B7355), box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1)
- Error: Border becomes Error red (#E74C3C)

**Label**
- Font: Inter 12px / 500, Slate
- Margin bottom: 8px
- Asterisk (*) in Error red if required

**Select Dropdown**
- Same styling as input
- Arrow icon: Moduwood color
- Option hover: Background Parchment

**Checkbox & Radio**
- Size: 20px × 20px
- Border: 2px solid #BDBDBD
- Checked: Background Moduwood, border Moduwood
- Label: Margin left 8px, Inter 14px

**Textarea**
- Same as input
- Min-height: 120px
- Resize: Vertical only

### Navigation

**Header Navigation**
- Background: White
- Height: 80px
- Logo: Moducraft logo (left-aligned), 40px height
- Menu items: Sora 14px / 600 (right-aligned)
- Menu spacing: 32px horizontal gap
- Active menu: Text color Moduwood, underline 2px
- Hover: Text color Moduwood, underline appears

**Desktop Navigation Items:**
- Home
- Products
- Portfolio
- About Us
- KOP (Key Operating Process)
- Blog
- Contact
- [Quote Button] (Primary CTA)

**Mobile Navigation**
- Hamburger menu (top right)
- Full-screen overlay (mobile menu)
- Menu items stack vertically, 16px padding
- Full-width buttons for CTA

**Footer**
- Background: Slate (#2C3E50)
- Text: White / Off-white
- Grid: 4 columns (Desktop) → 2 columns (Tablet) → 1 column (Mobile)
- Sections:
  - Quick Links (Products, About, Contact)
  - Company (Story, Team, Careers)
  - Resources (Blog, FAQ, Warranty)
  - Contact (Address, Phone, Email, Social icons)
- Copyright: Bottom, 12px, 70% opacity
- Height: Auto, padding 48px top/bottom, 24px left/right

### Other Components

**Badge / Tag**
- Background: Light Parchment
- Text: Slate, Inter 12px / 500
- Padding: 6px 12px
- Border radius: 20px (full round)
- Variants: Neutral (above), Success (green bg), Premium (tan bg)

**Alert / Callout**
- Padding: 16px
- Border-left: 4px solid (color by type)
- Border radius: 4px
- Background: Tinted 10% (type color)
- Icon: Left aligned, 20px
- Text: Body Small

**Breadcrumb**
- Separator: " / "
- Active: Slate, bold
- Inactive: Slate 60% opacity
- Hover: Underline inactive items
- Font: Inter 14px

**Price Display**
- Currency symbol: 12px, super-script
- Amount: 28px, bold, Moduwood
- Unit (e.g., per piece): 12px, Slate 60% opacity
- Format: "₹15,000 per 3-seater set"

**Progress Indicator (Manufacturing Stages)**
- Circular timeline: 7 rings (design, material, cutting, assembly, qc, packaging, shipped)
- Completed: Moduwood circle
- In-progress: Rotating animation, Moduwood border
- Not started: Gray circle
- Center: % complete or current stage label
- Animation: Smooth 0.3s transitions

---

## Image & Media

### Photography Style

**Product Photography:**
- Clean white background
- Soft natural light, diffused
- Multiple angles (top, front, side, detail)
- Scale reference (human arm, hand)
- Color swatches displayed nearby

**Lifestyle Photography:**
- Aspirational but authentic
- Room settings with natural lighting
- Multiple pieces shown in context
- Diversity of users/spaces

**Factory/Process Photography:**
- Bright, well-lit production floor
- Close-ups of craftsmanship (hands, details)
- Before/after shots of production stages
- Equipment precision (CNC in action)

**Testimonial/People Photography:**
- Headshots: Square, 200×200px minimum, professional lighting
- Team photos: Group shot, warm, approachable
- Candid shots of makers at work

### Video Guidelines

- **Hero Video:** 15-30 seconds, loop-able, no sound (or subtle ambient)
- **Factory Tour:** 2-3 minutes, natural sound + subtle music
- **Product Showcase:** 30-60 seconds per product, rotating view
- **Testimonial Videos:** 30-45 seconds, 1080p minimum

### Icon System

- **Source:** Heroicons (solar) or custom SVG
- **Size:** 20px (inline), 24px (normal), 32px (large)
- **Color:** Slate for icons in text, Moduwood for interactive icons
- **Set:** Consistent style, rounded corners (2px radius)

**Common Icons:**
- Product categories: Sofa, Table, Bed, Cabinet, etc.
- Actions: Cart, Heart, Share, Download, Print
- Status: Checkmark, Clock, Alert, Error
- Navigation: Menu, Close, Back, Forward

---

## Responsive Design

### Breakpoints

| Device | Width | Columns | Padding |
|--------|-------|---------|---------|
| Mobile | 320px - 639px | 4 | 16px |
| Tablet | 640px - 1023px | 8 | 24px |
| Desktop | 1024px - 1439px | 12 | 24px |
| Wide | 1440px+ | 12 | 32px |

### Responsive Behavior

**Images:**
- Desktop: Full quality (1200px max-width)
- Tablet: 70% quality, optimized for 768px
- Mobile: 50% quality, optimized for 375px

**Typography:**
- Desktop: Full size (per specs above)
- Tablet: -2px from desktop for H1-H3
- Mobile: -4px from desktop for H1-H3, but minimum 20px for H1

**Spacing:**
- Desktop: Full tokens (xs-3xl)
- Tablet: 85% of desktop spacing
- Mobile: 70% of desktop spacing

**Navigation:**
- Desktop: Horizontal menu visible
- Tablet: Horizontal menu, items wrap
- Mobile: Hamburger menu, full-screen overlay

**Cards:**
- Desktop: 3-4 per row
- Tablet: 2 per row
- Mobile: 1 per row, full width with 16px margins

---

## Motion & Animation

### Transition Principles

- **Default Duration:** 300ms (0.3s)
- **Easing:** `ease-in-out` for subtle elements, `ease-out` for entrances
- **Hover States:** 150ms for responsiveness
- **Page Transitions:** 200ms fade

### Common Animations

**Button Hover:**
- Background color: 200ms ease-in-out
- Shadow: 200ms ease-in-out
- No scale transform (premium feel, not playful)

**Link Underline:**
- Width: 0 → 100%, 300ms ease-out
- Appears on hover

**Form Focus:**
- Border color: 150ms ease-out
- Box-shadow expand: 150ms ease-out

**Card Hover:**
- Shadow increase: 200ms ease-in-out
- Slight lift: translation Y -2px, 200ms ease-out

**Fade-in Entry:**
- Opacity: 0 → 1, 400ms ease-out
- Applied to images on page load

**Scroll Animation (Optional):**
- Element fade-in on scroll into view
- 500ms staggered entry for card grids

**Progress Indicator (Active Stage):**
- Pulse effect: 1s infinite, opacity 0.5 → 1 → 0.5
- Rotation: Continuous 360° over 3s (if loading)

---

## Accessibility

### Color Contrast

- Body text on backgrounds: WCAG AA minimum (4.5:1)
- Large text (18px+) on backgrounds: WCAG AA minimum (3:1)
- Icons: Minimum 4.5:1 against background

### Interactive Elements

- Minimum target size: 44×44px (buttons, links)
- Focus indicator: Visible outline (2px, Moduwood color)
- Skip navigation link: First focusable element on every page

### Semantic HTML

- Proper heading hierarchy (H1 per page, sequential H2-H4)
- Form labels associated with inputs (`<label for="...">`)
- Alt text on all images (descriptive, not "image of...")
- ARIA labels for icon-only buttons

### Keyboard Navigation

- All interactive elements accessible via Tab key
- Logical tab order (top-to-bottom, left-to-right)
- Dropdowns: Arrow keys to navigate, Enter to select
- Modals: Trap focus inside modal until closed

---

## Component States

### Button States

1. **Default** → `background: Moduwood`
2. **Hover** → `background: darken 15%`
3. **Active/Pressed** → `background: darken 25%`
4. **Focus** → `outline: 2px solid Moduwood`
5. **Disabled** → `background: #BDBDBD, cursor: not-allowed`
6. **Loading** → `spinner: center, text: hidden`

### Form States

1. **Default** → `border: #BDBDBD, background: white`
2. **Focused** → `border: Moduwood, box-shadow: 0 0 0 3px rgba(139,115,85,0.1)`
3. **Filled** → `border: Moduwood, text: Charcoal`
4. **Error** → `border: #E74C3C, background: rgba(231,76,60,0.05)`
5. **Success** → `border: #27AE60, background: rgba(39,174,96,0.05)`
6. **Disabled** → `border: #BDBDBD, background: #F5F3F0, cursor: not-allowed`

### Card States

1. **Default** → `shadow: 0px 4px 12px rgba(0,0,0,0.08)`
2. **Hover** → `shadow: 0px 8px 24px rgba(0,0,0,0.12), transform: translateY(-2px)`
3. **Active/Selected** → `border: 2px solid Moduwood`
4. **Loading** → `opacity: 0.6, skeleton shimmer applied`

---

## Usage Examples

### Homepage Hero Section Layout

```
┌─────────────────────────────────────────────────────┐
│                                                       │
│     [Moducraft Logo]                    [Nav Items] │
│                                      [Quote Button]  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                       │
│        "Custom Modular Furniture,        [Hero      │
│         Built in Jaipur"                 Video]     │
│                                                       │
│    ↓ Scroll to explore our work ↓                   │
│                                                       │
│    [Browse Catalog]    [Request Quote]              │
│                                                       │
│    🔍 Since 2018 | 500+ Projects | 2000+ Customers │
│                                                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Why Moducraft?                                      │
│                                                       │
│  [Custom]      [Quality]      [Speed]      [Local]  │
│   Icon          Icon           Icon         Icon     │
│   Copy          Copy           Copy         Copy     │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Product Catalog Layout

```
[Filter by: Room | Style | Material | Price Range]

┌──────────┬──────────┬──────────┐
│ Card 1   │ Card 2   │ Card 3   │
│(Product) │(Product) │(Product) │
├──────────┼──────────┼──────────┤
│ Card 4   │ Card 5   │ Card 6   │
│(Product) │(Product) │(Product) │
└──────────┴──────────┴──────────┘

[Pagination] [Load More]
```

---

## Compliance & Standards

- **WCAG 2.1 Level AA** compliance
- **Mobile-first** responsive design
- **Core Web Vitals** optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **SEO-ready** semantic HTML, structured data (schema.org)
- **Performance:** Lighthouse score target 90+

---

## Tools & Resources

- **Design:** Figma (components library, design specs)
- **Prototyping:** Figma, Framer (interactive prototypes)
- **Component Library:** Shadcn/ui + Tailwind CSS (production)
- **Icons:** Heroicons (solar set)
- **Fonts:** Google Fonts (Playfair Display, Sora, Inter, IBM Plex Mono)
- **Accessibility Checker:** WAVE, Axe DevTools, Lighthouse
- **Performance:** GTmetrix, WebPageTest, Chrome DevTools

---

## Versioning & Updates

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 5, 2026 | Initial system launch |

**Next Review:** June 5, 2026 (post-MVP launch)
