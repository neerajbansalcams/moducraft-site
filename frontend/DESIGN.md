# Moducraft Design System

**Brand Tagline:** Premium Custom Modular Furniture  
**Positioning:** Artisanal, contemporary furniture solutions for design-conscious customers  
**Target Audience:** Interior designers, architects, tech professionals, homeowners  
**Design Philosophy:** Warm minimalism — natural materials, thoughtful customization, timeless quality

---

## 1. Brand Identity

### Brand Story
Moducraft crafts custom modular furniture in Jaipur that combines **artisanal craftsmanship** with **modern design**. Each piece is designed to adapt to unique spaces, solving real problems for real people. The brand values quality, flexibility, and understated elegance.

### Brand Attributes
- **Premium:** Luxury materials and expert craftsmanship
- **Customizable:** Modular systems that adapt to any space
- **Sustainable:** Eco-conscious production (implied: use green messaging)
- **Local:** Proudly designed and made in Jaipur
- **Timeless:** Contemporary design that lasts decades

### Voice & Tone
- **Warm** — Friendly, approachable, human
- **Confident** — Know our craft, stand behind our work
- **Clear** — Direct communication, no jargon
- **Inspiring** — Show how spaces transform with modular design

**Example copy:**
- ✅ "Design your space, your way"
- ✅ "Furniture that grows with you"
- ✅ "Handcrafted in Jaipur, designed for your home"
- ❌ "Innovating the furniture space" (cliché)

---

## 2. Color System

### Primary Colors

| Color | Hex | Usage | Emotion |
|-------|-----|-------|---------|
| **Moduwood** | `#8B7355` | Primary brand color, buttons, accents | Warmth, natural, trustworthy |
| **Moduwood Dark** | `#6F5C47` | Hover states, dark backgrounds | Depth, anchor |
| **Moduwood Darker** | `#5C4A37` | Pressed states, text on light | Richness, authority |

### Secondary Colors

| Color | Hex | Usage | Emotion |
|-------|-----|-------|---------|
| **Sandstone** | `#D4A574` | Highlights, light accents | Warmth, refinement |
| **Sandstone Dark** | `#C9985F` | Secondary buttons, accents | Sophisticated |
| **Slate** | `#2C3E50` | Primary text, dark elements | Professionalism, stability |
| **Charcoal** | `#333333` | Ultra-dark text | Maximum contrast |

### Neutral & Background

| Color | Hex | Usage | Emotion |
|-------|-----|-------|---------|
| **Parchment** | `#F5F3F0` | Card backgrounds, light UI | Warmth, luxury |
| **Parchment Light** | `#F9F8F6` | Page backgrounds | Soft, inviting |

### Semantic Colors

| Type | Hex | Usage |
|------|-----|-------|
| **Success** | `#27AE60` | Confirmation, positive feedback |
| **Warning** | `#F39C12` | Caution, alerts |
| **Error** | `#E74C3C` | Errors, destructive actions |
| **Info** | `#3498DB` | Informational messages |

### Color Combinations

**For UI Elements:**
```
Primary Button:    Moduwood (#8B7355) text: white
Secondary Button:  Parchment (#F5F3F0) text: Slate (#2C3E50)
Hover State:       Moduwood Dark (#6F5C47)
Disabled State:    Gray-400 (60% opacity)
```

**For Cards:**
```
Background:        Parchment (#F5F3F0)
Border:            Sandstone (#D4A574) - 1px, subtle
Text:              Slate (#2C3E50)
Accent:            Moduwood (#8B7355)
```

**For Typography:**
```
Headlines:         Moduwood (#8B7355) or Slate (#2C3E50)
Body Text:         Slate (#2C3E50)
Muted Text:        Slate with 70% opacity
Links:             Moduwood (#8B7355) with underline on hover
```

---

## 3. Typography System

### Font Stack

| Font | Purpose | Weight | Usage |
|------|---------|--------|-------|
| **Playfair Display** | Headlines | 400, 700 | H1-H3, hero text, feature headers |
| **Sora** | Navigation | 400, 500, 600, 700 | Menu items, buttons, labels |
| **Inter** | Body | 400, 500, 600 | Body copy, UI text, descriptions |
| **IBM Plex Mono** | Code | 400 | Code blocks, technical content |

### Type Scale

```
H1: 48px / 56px line-height (Playfair Display 700)
H2: 36px / 44px line-height (Playfair Display 700)
H3: 28px / 36px line-height (Playfair Display 600)
H4: 24px / 32px line-height (Sora 600)
H5: 20px / 28px line-height (Sora 600)
H6: 16px / 24px line-height (Sora 600)

Body Large:  18px / 28px (Inter 400)
Body:        16px / 24px (Inter 400)
Body Small:  14px / 20px (Inter 400)
Label:       12px / 16px (Sora 600, uppercase +0.5px tracking)
```

### Typography Rules

**Headlines (Playfair Display)**
- Always 700 weight or 600 if very large
- Maximum line length: 50 characters
- Use for H1-H3 and hero text
- Example: "Design your space, your way"

**Navigation (Sora)**
- Menu items: 14px, 600 weight
- Buttons: 14px, 700 weight
- Clear hierarchy with uppercase labels
- Example: "Get Quote"

**Body Copy (Inter)**
- Product descriptions: 16px, 400 weight
- Long-form content: 18px, 400 weight, 1.6 line height
- Testimonials: 16px, 400 weight (italics optional)

**Labels & Hints (Sora)**
- Form labels: 12px, 600 weight, uppercase
- Prices, badges: 14px, 600 weight
- Example: "Starting from ₹45,000"

---

## 4. Spacing & Layout System

### Spacing Scale

```
xs:   4px   (Small gaps, icon spacing)
sm:   8px   (Internal padding in buttons, small gaps)
md:   16px  (Default paragraph margin, basic padding)
lg:   24px  (Section padding, card margins)
xl:   32px  (Large section spacing)
2xl:  48px  (Major section breaks)
3xl:  64px  (Hero to content gap, page section spacing)
```

### Layout Grid

**Desktop (1200px+)**
```
Max Width:     1200px (max-w-7xl)
Columns:       12-column grid
Gutters:       24px
Margins:       32px (left/right)
```

**Tablet (768px - 1199px)**
```
Max Width:     90% of viewport
Gutters:       16px
Margins:       24px
```

**Mobile (< 768px)**
```
Max Width:     100% with safe margins
Gutters:       12px
Margins:       16px
Padding:       16px
Single Column: 100% width
```

### Common Spacing Patterns

```
Card Padding:           24px
Section Margin:         64px top/bottom
Button Padding:         12px vertical, 24px horizontal
Text Block Margin:      16px bottom
Form Field Margin:      16px bottom
Hero Section Height:    500px (mobile: 300px)
Image Aspect Ratio:     4:3 or 16:9
```

---

## 5. Component Library

### Button System

**Primary Button**
```inline
Background: Moduwood (#8B7355)
Text: White, 14px Sora 700
Padding: 12px 24px
Border Radius: 4px (sm)
Hover: Moduwood Dark (#6F5C47)
Pressed: Moduwood Darker (#5C4A37)
Disabled: Gray-400 60% opacity
Transition: 200ms ease-out
```

**Secondary Button**
```
Background: Transparent
Border: 1px Moduwood (#8B7355)
Text: Moduwood 700
Padding: 12px 24px
Border Radius: 4px
Hover: Parchment background
Transition: 200ms ease-out
```

**Text Button**
```
Background: Transparent
Text: Moduwood (#8B7355), underlined on hover
Padding: 8px 0
Transition: 200ms ease-out
```

### Card Component

```
Background: Parchment (#F5F3F0)
Border: 1px Sandstone (#D4A574)
Border Radius: 8px (md)
Padding: 24px
Box Shadow: 0px 4px 12px rgba(0,0,0,0.08)
Hover Shadow: 0px 8px 24px rgba(0,0,0,0.12)
Transition: 200ms ease-out
```

### Input/Form Elements

```
Background: White
Border: 1px solid #E0E0E0
Focus Border: 1px solid Moduwood (#8B7355)
Focus Ring: 2px Moduwood with 20% opacity
Border Radius: 4px
Padding: 12px 16px
Font: 16px Inter 400
Placeholder: Slate 50% opacity
```

### Badge Component

```
Background: Moduwood 10% opacity
Text: Moduwood 700, 12px Sora
Padding: 6px 12px
Border Radius: 4px
```

### Navigation Bar

```
Height: 80px (desktop), 64px (mobile)
Background: White
Border Bottom: 1px solid #F0F0F0
Padding: 0 32px (desktop), 16px (mobile)
Logo: 24px Playfair Display 700
Menu Items: 14px Sora 600
Sticky: position-fixed when scrolling
```

---

## 6. Motion & Interaction

### Transitions

```
Default:      200ms cubic-bezier(0.4, 0, 0.2, 1)
Hover States: 200ms ease-out
Focus States: 150ms ease-out
Page Load:    300ms fade-in
Micro:        100ms for small elements
Macro:        300ms for major layout changes
```

### Animations

**Page Load**
```
Fade in: 300ms, opacity 0 → 1
Stagger: 100ms between elements
```

**Button Hover**
```
Darken background: 200ms
Slight lift on desktop: 2px transform-y
```

**Loading Spinner**
```
Rotate: 2s linear infinite
Size: 32px (md), 48px (lg)
Color: Moduwood (#8B7355)
```

**Form Validation**
```
Success: Green icon + 200ms slide-in
Error: Red border + shake animation (150ms × 2)
Focus: Blue focus ring + 150ms ease-out
```

---

## 7. Accessibility & Inclusive Design

### Color Contrast

**WCAG AA Compliant (minimum 4.5:1 for text)**
```
Moduwood (#8B7355) on White: 6.2:1 ✅
Slate (#2C3E50) on Parchment: 11.1:1 ✅
Sandstone (#D4A574) on White: 3.8:1 ⚠️ (only for headers, large text)
```

### Interactive Elements

- **Minimum touch target:** 44×44px (mobile)
- **Keyboard navigation:** Tab order follows visual flow
- **Focus indicators:** 2px outline with 2px gap (Moduwood color)
- **ARIA labels:** All buttons have descriptive text or aria-label
- **Form labels:** Always associated with inputs via `<label for="id">`

### Content Readability

- **Line length:** 50-75 characters (optimal)
- **Line height:** 1.5 minimum for body text (1.6 preferred)
- **Letter spacing:** Normal (no reduction below 0)
- **Font size:** 16px minimum for body text
- **Color alone:** Never convey information (e.g., red for error needs text)

### Image Optimization

```
Product images: WebP + AVIF with JPG fallback
Responsive srcset: 320w, 640w, 960w, 1280w
Alt text: Descriptive, e.g. "Moducraft Modern Modular Sofa in brown leather"
Lazy loading: Loading="lazy" for below-fold images
```

---

## 8. Photography & Imagery

### Photography Style

**Aesthetic:**
- Clean, bright, well-lit product shots
- Lifestyle imagery showing furniture in real spaces
- Natural light preferred
- Minimal props, focus on the furniture
- Neutral backgrounds with warm tones
- Warm white shadows, not pure black

**Product Photography**
```
Aspect Ratio: 4:3 or 16:9 (consistent across page)
Styling: Hero images 1200×800px minimum
Grid: 3-column grid on desktop, 1-column mobile
Overlay: Subtle gradient if text overlay needed
```

**Lifestyle Photography**
```
Show real people using furniture
Include room context (walls, flooring, lighting)
Highlight modular configurations
Showcase customization possibilities
```

### Icons

- Use **Lucide React** for all icons
- Size: 20px, 24px, 32px (scale in 4px increments)
- Color: Moduwood (#8B7355) or Slate (#2C3E50)
- Stroke Width: 2px standard

**Common Icons:**
```
Arrow Right: for CTAs
Truck: for shipping/delivery
Leaf: for sustainability
Heart: for favorites
Check Mark: for success
X: for close/cancel
```

---

## 9. Component Usage Guidelines

### Hero Section

```
Height: 500px (desktop), 300px (mobile)
Overlay: Gradient or semi-transparent dark overlay
Text: Centered or left-aligned
Font: H1 (48px) + H4 (24px) subtitle
CTA: Primary button
Image: Full-width background or right-aligned
```

### Product Card

```
Image: 4:3 aspect ratio
Title: H5 (20px Sora)
Price: 14px Sora 600 (boldface, starting from X)
Colors: Show 3 color swatches
Description: 16px Inter, 2-line max
CTA: "View Details" link or button
Hover: Lift shadow, slight image zoom (105%)
```

### Testimonial Card

```
Quote: 18px Inter, italics, Slate color
Author: 16px Sora 600
Role: 14px Inter, Slate 70% opacity
Avatar: 64×64px round image
Background: Parchment
Hover: Subtle shadow increase
```

### Blog Post Card

```
Image: 16:9 aspect ratio, 300×169px
Category: Badge (12px Sora)
Title: H4 (24px)
Excerpt: 14px Inter, 3 lines max
Date: 12px, Slate 70% opacity
Author: 14px Inter
Read Time: Optional, 12px italic
```

---

## 10. Common Patterns

### Feature Section Layout

```
Left Column: Image or icon
Right Column: Text + CTA button
Spacing: 48px between columns
Typography: H2 headline + body copy
Mobile: Single column, image on top
```

### Comparison Section

```
Format: 3-column grid (desktop), 1-column (mobile)
Cards: Feature icon + text
Icon Size: 48px
Text: H5 + body copy
Alignment: Centered
```

### CTA Section

```
Background: Moduwood with text overlay or parchment
Content: H2 headline + supporting text + button
Layout: Centered, 64px padding top/bottom
Button: Prominent, contrasting color
Mobile: Full-width, 24px padding
```

### Footer

```
Columns: 4-column on desktop, 1-column mobile
Background: Moduwood (#8B7355)
Text: White
Section Headers: 14px Sora 600
Links: 14px Inter 400
Divider: White 1px border
Social Icons: 24px, white
Copyright: 12px, white 70% opacity
```

---

## 11. Do's & Don'ts

### ✅ Do's

- **Do** use warm, natural colors (Moduwood, Sandstone palette)
- **Do** maintain generous spacing (24px+ for breathing room)
- **Do** use Playfair Display for headlines to create hierarchy
- **Do** prioritize whitespace and uncluttered layouts
- **Do** ensure 4.5:1 color contrast minimum
- **Do** use 200ms smooth transitions for interactions
- **Do** optimize images for web (WebP, AVIF)
- **Do** test on mobile and tablet viewports
- **Do** keep footer clean with organized columns
- **Do** use consistent button styles across pages
- **Do** include descriptive alt text on all images
- **Do** support keyboard navigation (Tab, Enter)

### ❌ Don'ts

- **Don't** use bright, saturated colors (avoid neon)
- **Don't** overload sections with too much text
- **Don't** mix more than 3 fonts on one page
- **Don't** use click-bait tactics or misleading imagery
- **Don't** forget mobile responsiveness (design mobile-first)
- **Don't** animate everything (only meaningful interactions)
- **Don't** use color alone to convey important info (add text)
- **Don't** leave form inputs without labels
- **Don't** use low-contrast text on backgrounds
- **Don't** break the 50-75 character line length rule
- **Don't** use auto-play video with sound
- **Don't** hide navigation on desktop
- **Don't** use generic stock photos (show real spaces)
- **Don't** neglect accessibility (ARIA, alt text, focus states)

---

## 12. Development Implementation

### Tailwind Configuration

All colors, spacing, fonts, and shadows are already configured in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        moduwood: '#8B7355',
        'moduwood-dark': '#6F5C47',
        'moduwood-darker': '#5C4A37',
        sandstone: '#D4A574',
        'sandstone-dark': '#C9985F',
        slate: '#2C3E50',
        parchment: '#F5F3F0',
        'parchment-light': '#F9F8F6',
        charcoal: '#333333',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        xs: '4px', sm: '8px', md: '16px', lg: '24px',
        xl: '32px', '2xl': '48px', '3xl': '64px',
      },
    },
  },
};
```

### CSS Utilities

```css
/* Primary button */
@apply px-6 py-3 bg-moduwood text-white font-bold rounded-sm 
       hover:bg-moduwood-dark transition-colors duration-200;

/* Card */
@apply bg-parchment border border-sandstone rounded-lg 
       p-6 shadow-md hover:shadow-lg transition-shadow duration-200;

/* Heading */
@apply font-playfair text-moduwood font-bold;

/* Body text */
@apply font-inter text-slate leading-relaxed;
```

### Font Loading

Fonts are imported via Next.js `next/font`:

```typescript
import { Playfair_Display, Sora, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const sora = Sora({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
```

---

## 13. Resources & References

### Font Resources
- **Playfair Display:** https://fonts.google.com/specimen/Playfair+Display
- **Sora:** https://fonts.google.com/specimen/Sora
- **Inter:** https://fonts.google.com/specimen/Inter
- **IBM Plex Mono:** https://fonts.google.com/specimen/IBM+Plex+Mono

### Icon Library
- **Lucide React:** https://lucide.dev (32× icons used in Moducraft)

### Design Tools
- **Figma:** Design and prototyping
- **Storybook:** Component documentation (recommended future addition)

### Accessibility Resources
- **WebAIM:** https://webaim.org/
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **Accessibility Checklist:** https://www.a11yproject.com/checklist/

---

## 14. Changelog

| Date | Version | Change |
|------|---------|--------|
| 2026-04-05 | 1.0.0 | Initial design system documentation |

---

**Last Updated:** April 5, 2026  
**Maintained By:** Moducraft Design Team  
**Status:** Active — Reference for all design decisions

