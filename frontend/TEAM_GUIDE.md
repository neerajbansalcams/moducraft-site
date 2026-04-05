# Moducraft Website — Team Guide & Reference

**Last Updated:** April 5, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Design System](#design-system)
3. [Architecture & Directory Structure](#architecture--directory-structure)
4. [Technology Stack](#technology-stack)
5. [Development Workflow](#development-workflow)
6. [Deployment & Release](#deployment--release)
7. [Component Library](#component-library)
8. [Adding New Pages](#adding-new-pages)
9. [Styling & Tailwind](#styling--tailwind)
10. [SEO & Metadata](#seo--metadata)
11. [Performance & Optimization](#performance--optimization)
12. [Troubleshooting](#troubleshooting)
13. [Future Enhancements](#future-enhancements)

---

## Project Overview

### What is Moducraft?

**Moducraft** is a premium custom modular furniture e-commerce and portfolio website designed and manufactured in Jaipur. The website showcases:
- 🛋️ **Product Collections** — Modular furniture systems (sofas, storage, desks, bedroom sets)
- 🎨 **Portfolio** — Real-world project showcases with customization examples
- 📝 **Blog** — Articles about interior design, furniture trends, and modular living
- 📧 **Contact & Inquiry** — Lead capture for custom quotation requests

### Target Audience

- **Interior Designers** (B2B) — Professional portfolio, technical specs, custom quotes
- **Architects** (B2B) — Space planning tools, sustainability info, bulk pricing
- **Homeowners** (B2C) — Visual inspiration, product browsing, easy contact

### Brand Positioning

**"Premium Custom Modular Furniture for Design-Conscious Spaces"**

- **Premium** — Luxury materials, artisanal craftsmanship, attention to detail
- **Customizable** — Modular systems that adapt to any space
- **Local** — Proudly designed and made in Jaipur
- **Timeless** — Contemporary design that lasts decades

---

## Design System

### Color Palette

All colors are defined in `tailwind.config.js` and DESIGN.md.

| Color | Hex | Usage | Purpose |
|-------|-----|-------|---------|
| **Moduwood** | `#8B7355` | Primary buttons, headings, accents | Brand primary color, warm brown |
| **Moduwood Dark** | `#6F5C47` | Hover states, dark sections | Depth and emphasis |
| **Moduwood Darker** | `#5C4A37` | Pressed states, active nav | Maximum contrast |
| **Sandstone** | `#D4A574` | Secondary accents, highlights | Warm secondary |
| **Slate** | `#2C3E50` | Primary text, body copy | Dark professional color |
| **Parchment** | `#F5F3F0` | Card backgrounds, light surfaces | Warm light neutral |
| **Success** | `#27AE60` | Form validation, confirmations | Green (positive) |
| **Error** | `#E74C3C` | Form errors, alerts | Red (negative) |
| **Warning** | `#F39C12` | Caution messages | Orange (caution) |
| **Info** | `#3498DB` | Informational messages | Blue (info) |

### Typography

| Font | Purpose | Usage | Weight |
|------|---------|-------|--------|
| **Playfair Display** | Headlines & hero | H1-H3, page titles, feature headers | 400, 700 |
| **Sora** | Navigation & UI | Buttons, menu items, labels | 400, 500, 600, 700 |
| **Inter** | Body text | Paragraph text, descriptions, body copy | 400, 500 |
| **IBM Plex Mono** | Code | Code blocks, technical content | 400 |

### Type Scale

```
H1:  48px / Playfair 700 (Hero titles)
H2:  36px / Playfair 700 (Section headers)
H3:  28px / Playfair 600 (Subheadings)
H4:  24px / Sora 600 (Feature headers)
H5:  20px / Sora 600 (Card titles)
H6:  16px / Sora 600 (Labels)

Body Large:  18px / Inter 400
Body:        16px / Inter 400
Body Small:  14px / Inter 400
```

### Spacing System

**Base Unit:** 4px

```
xs:  4px   (Icon spacing, small gaps)
sm:  8px   (Input padding, small margins)
md:  16px  (Default paragraph margin, card padding)
lg:  24px  (Section padding, large gaps)
xl:  32px  (Section margins)
2xl: 48px  (Major spacing)
3xl: 64px  (Hero to content, page sections)
```

### Component Styles

**Primary Button**
```css
@apply px-6 py-3 bg-moduwood text-white font-bold rounded-sm 
       hover:bg-moduwood-dark transition-colors duration-200
```

**Card**
```css
@apply bg-parchment border border-sandstone rounded-lg 
       p-6 shadow-md hover:shadow-lg transition-shadow duration-200
```

**Input/Form Field**
```css
@apply w-full px-4 py-2 border border-gray-300 rounded 
       focus:border-moduwood focus:ring-2 focus:ring-moduwood/20
```

### Design System Reference

For complete design details including Do's/Don'ts, accessibility guidelines, and component specifications:

👉 **Read:** `frontend/DESIGN.md`  
👉 **Preview:** `/design-system` page on live site

---

## Architecture & Directory Structure

### Project Layout

```
moducraft-site/
├── frontend/                          # Next.js frontend (production code)
│   ├── pages/                         # Next.js pages (auto-routed)
│   │   ├── index.tsx                  # Home page
│   │   ├── about.tsx                  # About page
│   │   ├── products.tsx               # Products listing
│   │   ├── portfolio.tsx              # Portfolio showcase
│   │   ├── blog.tsx                   # Blog listing
│   │   ├── blog/
│   │   │   └── [slug].tsx             # Dynamic blog post (ISR)
│   │   ├── contact.tsx                # Contact form
│   │   ├── design-system.tsx          # Design system reference
│   │   ├── _app.tsx                   # Global wrapper (ErrorBoundary)
│   │   └── _document.tsx              # Document wrapper (optional)
│   │
│   ├── components/                    # Reusable React components
│   │   ├── Layout.tsx                 # Main layout (header, nav, footer)
│   │   ├── Hero.tsx                   # Hero section component
│   │   ├── ProductCard.tsx            # Product display card
│   │   ├── ErrorBoundary.tsx          # Error handling component
│   │   └── LoadingSpinner.tsx         # Loading indicator
│   │
│   ├── styles/                        # CSS files
│   │   └── globals.css                # Global styles, Tailwind imports
│   │
│   ├── utils/                         # Utility functions
│   │   ├── api.ts                     # API client with error handling
│   │   └── validation.ts              # Form validation functions
│   │
│   ├── public/                        # Static assets
│   │   ├── robots.txt                 # SEO: crawler directives
│   │   ├── sitemap.xml                # SEO: site map
│   │   └── favicon.ico                # Browser icon
│   │
│   ├── middleware.ts                  # Next.js middleware (security headers)
│   ├── tailwind.config.js             # Tailwind CSS configuration
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── next.config.js                 # Next.js configuration
│   ├── package.json                   # Dependencies & scripts
│   ├── .nvmrc                         # Node.js version (24.14.0)
│   ├── DESIGN.md                      # Design system documentation
│   └── PRODUCTION_SUMMARY.md          # Build & deployment info
│
├── .github/                           # GitHub workflows (CI/CD)
├── TEAM_GUIDE.md                      # This file
└── README.md                          # Project README

```

### Key Files Explained

| File | Purpose |
|------|---------|
| `pages/index.tsx` | Home page — hero, features, testimonials, CTA |
| `pages/[page].tsx` | Static pages (about, products, portfolio, contact, blog listing) |
| `pages/blog/[slug].tsx` | Dynamic blog posts with ISR (Incremental Static Regeneration) |
| `components/Layout.tsx` | Header, navigation, footer — wraps all pages |
| `middleware.ts` | Security headers, CSP policies |
| `DESIGN.md` | Complete design system reference |
| `tailwind.config.js` | Design tokens (colors, fonts, spacing) |
| `next.config.js` | Security headers, image optimization, compression |

---

## Technology Stack

### Frontend Dependencies

```
Next.js 14.2.35        — React framework, SSG, ISR, routing
React 18.2             — UI library
TypeScript 5.2         — Type safety
Tailwind CSS 3.3       — Utility-first CSS framework
PostCSS 8.4            — CSS processing
Lucide React           — Icon library (32+ icons)
```

### Build Tools

```
Node.js 24.14.0        — Runtime (pinned in .nvmrc)
npm 11.x               — Package manager
SWC                    — Next.js JavaScript compiler (built-in)
```

### Development Tools

```
ESLint                 — Code linting
Prettier (optional)    — Code formatting
TypeScript             — Static type checking
```

### Hosting & Deployment

```
Vercel                 — Frontend hosting (auto-deploy on push)
GitHub                 — Version control, CI/CD triggers
```

### Performance Features

```
ISR (Incremental Static Regeneration) — Blog posts revalidate every 3600s
Image Optimization                     — AVIF, WebP, lazy loading
Code Splitting                         — Automatic by Next.js
Compression                            — Enabled (gzip, brotli)
Source Maps Disabled                   — Production security
```

---

## Development Workflow

### 1. Local Setup (First Time)

```bash
# Clone repository
git clone https://github.com/neerajbansalcams/moducraft-site.git
cd moducraft-site/frontend

# Install dependencies
npm install

# Create .env.local (copy from .env.example)
cp .env.example .env.local

# Update .env.local with your values
# NEXT_PUBLIC_API_URL=https://api.moducraft.in
# NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### 2. Local Development

```bash
# Start dev server (auto-reload on changes)
npm run dev

# Server runs at: http://localhost:3001
# Watch for TypeScript errors and ESLint issues
```

### 3. Development Workflow (Making Changes)

1. **Create a feature branch** (optional but recommended):
   ```bash
   git checkout -b feature/add-testimonial-carousel
   ```

2. **Make your changes** (pages, components, styles)
   - Edit files in `pages/`, `components/`, or `styles/`
   - Changes auto-reload in browser
   - Check console for TypeScript/ESLint errors

3. **Test locally**:
   ```bash
   npm run build              # Verify production build works
   ```

4. **Commit & push**:
   ```bash
   git add .
   git commit -m "Feat: Add testimonial carousel"
   git push origin feature/add-testimonial-carousel
   ```

5. **Create Pull Request** on GitHub (optional for team review)

6. **Merge to main** — Auto-deploys to Vercel within 3-5 minutes

### 4. Useful Commands

```bash
npm run dev               # Start development server
npm run build             # Create production build
npm run start             # Start production server
npm run lint              # Run ESLint
npm run lint --fix        # Auto-fix linting issues
```

### 5. Git Workflow

```bash
# Check status
git status

# View recent commits
git log --oneline -10

# Push changes
git push origin main

# Pull latest changes
git pull origin main
```

---

## Deployment & Release

### Automatic Deployment (Recommended)

**Trigger:** Every push to `main` branch automatically deploys to Vercel

```
1. Make local changes
2. Commit: git commit -m "Feat: ..."
3. Push: git push origin main
4. Vercel builds automatically (~3-5 minutes)
5. Live at: https://moducraft-site.vercel.app
```

### Vercel Dashboard Access

- **URL:** https://vercel.com/dashboard
- **Project:** moducraft-site
- **Production URL:** https://moducraft-site.vercel.app
- **Environment:** Automatically uses latest main branch commit

### Environment Variables (on Vercel)

Set these in Vercel Project Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL = https://api.moducraft.in
NEXT_PUBLIC_SITE_URL = https://moducraft-site.vercel.app
NODE_ENV = production
```

### Build Verification

After each deployment, Vercel shows:
- ✅ Build status (success/failed)
- Build time (~2-3 minutes)
- Size metrics
- Any errors or warnings

### Rollback (If Needed)

In case of issues:
1. Go to Vercel Dashboard
2. Click latest deployment
3. Choose "Redeploy" to rebuild, or
4. Navigate to a previous working commit in Git and push again

---

## Component Library

### Available Components

#### Layout.tsx
Global wrapper for all pages. Provides header, navigation, and footer.

```tsx
<Layout title="Custom Title" description="Meta description">
  <main>Your page content</main>
</Layout>
```

**Props:**
- `title` (string) — Page title for browser tab and meta
- `description` (string) — Meta description for SEO
- `children` (React.ReactNode) — Page content

#### Hero.tsx
Flexible hero section with background image and CTAs.

```tsx
<Hero
  title="Transform Your Space"
  subtitle="With Custom Modular Furniture"
  description="Optional longer description"
  ctaText="Get Started"
  ctaHref="/contact"
  backgroundImage="https://..."
  dark={false}
/>
```

**Props:**
- `title` — Main heading
- `subtitle` — Secondary text
- `description` — Optional paragraph
- `ctaText` — Button label
- `ctaHref` — Button link
- `backgroundImage` — Hero background URL
- `dark` — Apply dark overlay (true/false)

#### ProductCard.tsx
Display a product with image, price, colors, and description.

```tsx
<ProductCard
  title="Modern Modular Sofa"
  startingPrice="₹45,000"
  image="https://..."
  colors={['#8B7355', '#D4A574', '#2C3E50']}
  description="Premium sectional with customizable modules"
/>
```

#### ErrorBoundary.tsx
Wraps pages to catch React errors and show fallback UI.

Already integrated in `_app.tsx` — handles all page errors gracefully.

#### LoadingSpinner.tsx
Animated loading indicator.

```tsx
<LoadingSpinner size="md" />  {/* size: sm | md | lg */}
```

### Creating New Components

**File naming:** `components/ComponentName.tsx`

**Template:**
```tsx
import React from 'react';

interface ComponentNameProps {
  prop1: string;
  prop2?: number;
  children?: React.ReactNode;
}

export default function ComponentName({
  prop1,
  prop2,
  children,
}: ComponentNameProps) {
  return (
    <div className="bg-parchment p-lg rounded-lg">
      {/* Component JSX */}
    </div>
  );
}
```

**Best practices:**
- Use TypeScript interfaces for props
- Document large components with JSDoc comments
- Use Tailwind classes (no inline styles)
- Keep components focused and testable
- Export as default function

---

## Adding New Pages

### Simple Static Page

**File:** `pages/blog-resources.tsx`

```tsx
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function BlogResources() {
  return (
    <Layout
      title="Blog Resources — Moducraft"
      description="Read articles about modular furniture design"
    >
      <Hero
        title="Resources & Articles"
        subtitle="Learn about modular living"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-3xl">
        <h2 className="font-playfair text-3xl font-bold text-moduwood mb-2xl">
          Coming Soon
        </h2>
        <p className="text-lg text-slate">
          Subscribe for updates on new resources and guides.
        </p>
      </div>
    </Layout>
  );
}
```

**Auto-routed as:** `/blog-resources`

### Dynamic Pages (Using [slug])

**File:** `pages/projects/[id].tsx`

```tsx
import Layout from '@/components/Layout';

export default function ProjectDetail({ id }: { id: string }) {
  const projects = {
    'minimal-studio': { title: 'Minimal Studio Apartment', year: '2024' },
    'luxury-penthouse': { title: 'Luxury Penthouse', year: '2024' },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="text-center py-3xl">Project not found</div>
      </Layout>
    );
  }

  return (
    <Layout title={project.title}>
      <div className="max-w-7xl mx-auto px-4 py-3xl">
        <h1 className="font-playfair text-4xl font-bold mb-lg">
          {project.title}
        </h1>
        <p className="text-slate text-lg">{project.year}</p>
      </div>
    </Layout>
  );
}
```

**Routed as:** `/projects/minimal-studio`, `/projects/luxury-penthouse`

### Pages with Data Fetching

```tsx
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

export default function DataPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(setError);
  }, []);

  if (error) return <Layout><div>Error loading data</div></Layout>;
  if (!data) return <Layout><div>Loading...</div></Layout>;

  return (
    <Layout>
      <div>{/* Render data */}</div>
    </Layout>
  );
}
```

### Adding to Navigation

Edit `components/Layout.tsx` — update `menuItems` array:

```tsx
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'New Page', href: '/new-page' },  // ← Add here
  { label: 'Contact', href: '/contact' },
];
```

---

## Styling & Tailwind

### Using Tailwind Classes

All Tailwind utilities are available. Use class names for all styling:

```tsx
<div className="bg-parchment p-lg rounded-lg shadow-md hover:shadow-lg">
  <h2 className="font-playfair text-2xl font-bold text-moduwood mb-md">
    Card Title
  </h2>
  <p className="text-slate text-sm leading-relaxed">
    Card description
  </p>
</div>
```

### Responsive Design

Use Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

**Breakpoints:**
- `sm: 640px` — Small devices
- `md: 768px` — Tablets
- `lg: 1024px` — Desktops
- `xl: 1280px` — Large screens

### Centering & Layout Patterns

**Centered container:**
```tsx
<div className="max-w-7xl mx-auto px-4">Content</div>
```

**Flex layout:**
```tsx
<div className="flex items-center justify-between gap-lg">
  <div>Left</div>
  <div>Right</div>
</div>
```

**Grid layout:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Custom Colors in Classnames

Use the design system colors defined in `tailwind.config.js`:

```tsx
// Background colors
className="bg-moduwood bg-sandstone bg-parchment bg-slate"

// Text colors
className="text-moduwood text-slate text-error text-success"

// Border colors
className="border-sandstone border-moduwood"

// Custom opacity
className="bg-moduwood/50 bg-moduwood/20"
```

### Adding Custom CSS (if needed)

Edit `styles/globals.css`:

```css
@layer components {
  .card-custom {
    @apply bg-parchment border border-sandstone rounded-lg p-lg shadow-md;
  }
}
```

Then use: `className="card-custom"`

---

## SEO & Metadata

### Page-Level SEO

Each page should have proper meta tags:

```tsx
<Layout
  title="Products — Moducraft"
  description="Browse our collection of custom modular furniture systems"
>
  {/* Page content */}
</Layout>
```

This automatically sets:
- `<title>` tag
- `<meta name="description">`
- Open Graph tags for social sharing

### Global SEO Configuration

Edit `next.config.js` to update:
- Security headers
- Meta viewport
- Theme color

### Sitemap & Robots

**Generated automatically:**
- `public/sitemap.xml` — All 10 pages listed
- `public/robots.txt` — Crawler directives

**For new pages:** Manually add to sitemap.xml:

```xml
<url>
  <loc>https://moducraft-site.vercel.app/new-page</loc>
  <lastmod>2026-04-05</lastmod>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
```

### Open Graph for Social Sharing

Automatically included in Layout component. Images use default Unsplash URLs. For custom sharing:

```tsx
<meta property="og:image" content="https://..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

---

## Performance & Optimization

### Image Optimization

Use Next.js `Image` component for all images:

```tsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  alt="Descriptive alt text"
  width={500}
  height={400}
  priority={false}  // true only for above-fold images
/>
```

**Benefits:**
- Automatic WebP/AVIF conversion
- Lazy loading (below-fold)
- Responsive sizing
- Performance optimization

### Build Output

Latest build stats:

```
✓ Compiled successfully
✓ Generating static pages (11/11)

/                        3.69 kB
/about                   2.21 kB
/contact                 1.99 kB
/blog                    2.65 kB
/blog/[slug]             3.28 kB (ISR)
/design-system           3.8 kB
/portfolio               2.11 kB
/products                2.47 kB

First Load JS: 86.4 kB (includes Tailwind utilities)
Middleware: 26.7 kB (security headers)
```

### Caching Strategy

- **Pages:** Static (prerendered at build time)
- **Blog posts:** ISR (revalidate every 3600 seconds)
- **Images:** Cached for 60 seconds minimum
- **Middleware:** Runs on every request (security)

### Monitoring Performance

Check Vercel Analytics:
1. Go to Vercel Dashboard
2. Select moducraft-site
3. Click "Analytics" tab
4. View Core Web Vitals and load times

---

## Troubleshooting

### Local Dev Server Won't Start

**Issue:** `npm run dev` fails or port 3001 in use

**Solution:**
```bash
# Kill any process on port 3001
lsof -i :3001                    # macOS/Linux
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess  # Windows

# Clear cache and restart
rm -rf .next
npm run dev
```

### TypeScript Errors

**Issue:** Build fails with TypeScript errors

**Solution:**
```bash
# Check for specific errors
npm run build

# View issues in VS Code Problems panel
# Fix type mismatches in the code
```

**Common fixes:**
- Missing type imports: `import type { ComponentProps } from 'react'`
- Unused variables: Remove or use `_prefix` (`_unused`)
- Check DESIGN.md and existing pages for patterns

### Tailwind Classes Not Working

**Issue:** Tailwind utilities not applying

**Solution:**
1. Check `tailwind.config.js` content paths are correct
2. Verify file is saved and dev server restarted
3. Check class name spelling (case-sensitive)
4. Ensure class follows Tailwind syntax

### Build Failures on Vercel

**Check:**
1. Push to main branch (`git push origin main`)
2. Go to Vercel Dashboard → deployments
3. Click latest deployment
4. View build logs for errors
5. Fix in code, commit, and push again

### Styling Inconsistencies

**Verify:**
1. Using design system colors (`bg-moduwood`, not `bg-custom-brown`)
2. Using spacing scale (`p-lg`, not `p-20px`)
3. Using defined fonts (Playfair, Sora, Inter)
4. Responsive design tested on mobile (`md:`, `lg:` prefixes)

### Performance Issues

**Check:**
1. Images optimized with `<Image>` component
2. No large JavaScript libraries without lazy-loading
3. Run `npm run build` to check bundle size
4. Check Vercel Analytics for slow routes

---

## Future Enhancements

### Planned Features

| Feature | Priority | Timeline | Effort |
|---------|----------|----------|--------|
| Product filter by collection | High | Q2 2026 | 1-2 days |
| Advanced blog search | Medium | Q2 2026 | 1-2 days |
| Customer testimonial carousel | Medium | Q2 2026 | 1 day |
| Image gallery / lightbox | Medium | Q3 2026 | 1-2 days |
| Newsletter signup form | High | Q2 2026 | 1 day |
| Analytics integration | Medium | Q2 2026 | 1 day |
| Dark mode toggle | Low | Q3 2026 | 1-2 days |
| Mobile app (React Native) | Low | Q4 2026 | 4+ weeks |

### Adding Features (Step-by-Step)

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/product-filters
   ```

2. **Make changes** (components, pages, styles)

3. **Test locally:**
   ```bash
   npm run build  # Verify production build
   npm run dev    # Test in browser
   ```

4. **Commit & push:**
   ```bash
   git commit -m "Feat: Add product filters"
   git push origin feature/product-filters
   ```

5. **Deploy** (merge to main):
   ```bash
   git checkout main
   git merge feature/product-filters
   git push origin main
   ```

### Backend Integration (When Needed)

Currently hardcoded data in components. For backend integration:

1. **Create API utilities** — Already done in `utils/api.ts`
2. **Fetch data in useEffect or getStaticProps**
3. **Handle loading/error states**
4. **Update pages to use real data**

Example:
```tsx
// Use the api utility
import { apiGet } from '@/utils/api';

useEffect(() => {
  apiGet('/products')
    .then(setProducts)
    .catch(setError);
}, []);
```

### Monitoring & Analytics

Recommended integrations (not yet added):

- **Sentry** — Error tracking
- **Google Analytics 4** — User behavior
- **Vercel Analytics** — Core Web Vitals
- **LogRocket** — Session replay (debugging)

Setup instructions in `PRODUCTION_DEPLOYMENT.md`.

---

## Code Standards & Best Practices

### Component Structure

```tsx
// Imports
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

// Types
interface MyComponentProps {
  title: string;
  onClose: () => void;
}

// Component
export default function MyComponent({
  title,
  onClose,
}: MyComponentProps) {
  // Hooks first
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleOpen = () => setIsOpen(true);

  // Render
  return (
    <div className="...">
      <h1>{title}</h1>
    </div>
  );
}
```

### Naming Conventions

- **Files:** PascalCase for components (`ProductCard.tsx`)
- **Files:** camelCase for utilities (`validationUtils.ts`)
- **Functions:** camelCase (`handleSubmit`, `fetchProducts`)
- **Variables:** camelCase (`isLoading`, `userData`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_RETRIES = 3`)
- **Types/Interfaces:** PascalCase (`ProductProps`, `ApiResponse`)

### Styling Guidelines

✅ **DO:**
- Use Tailwind utility classes
- Use design system colors (`bg-moduwood`)
- Use spacing scale (`p-lg`, `gap-md`)
- Use responsive prefixes (`md:`, `lg:`)

❌ **DON'T:**
- Inline styles (`style={{ color: 'red' }}`)
- Custom CSS (use globals.css if necessary)
- Hardcoded colors (use design system)
- Magic numbers (use spacing scale)

### TypeScript Best Practices

✅ **DO:**
- Type all props with interfaces
- Use `type` for object shapes, `interface` for components
- Import types: `import type { ComponentProps } from 'react'`
- Avoid `any` type

❌ **DON'T:**
- Use loose types (`type Props = {}`)
- Props without types
- `any` type (use `unknown` instead)

### Testing (When Needed)

Framework ready for Jest + React Testing Library (not yet set up).

To add testing:
```bash
npm install -D jest @testing-library/react jest-environment-jsdom
npx jest init
```

---

## Quick Reference

### File Structure at a Glance

```
frontend/
  pages/              → Add new pages here
  components/         → Reusable components
  styles/             → Global CSS
  utils/              → Helper functions
  public/             → Static assets
  DESIGN.md           → Design system reference
  tailwind.config.js  → Design tokens
```

### Essential Links

- **Live Site:** https://moducraft-site.vercel.app
- **GitHub Repo:** https://github.com/neerajbansalcams/moducraft-site
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Design System:** `/design-system` page on live site
- **DESIGN.md:** `frontend/DESIGN.md` file

### Key Commands

```bash
npm run dev            # Start local dev server
npm run build          # Create production build
npm run lint --fix     # Auto-fix linting issues
git push origin main   # Deploy to production
```

### Support & Questions

- **Design questions?** → Read `DESIGN.md` or visit `/design-system`
- **Build issues?** → Check `PRODUCTION_DEPLOYMENT.md`
- **Component help?** → Review existing similar components
- **TypeScript errors?** → Check type definitions in components

---

## Changelog

| Date | Version | Change | Author |
|------|---------|--------|--------|
| 2026-04-05 | 1.0.0 | Initial TEAM_GUIDE created | Design Team |
| | | Complete design system documented | |
| | | Architecture & workflow guide | |
| | | Troubleshooting & best practices | |

---

## Summary

**Moducraft website is production-ready with:**
- ✅ 11 pages built and optimized
- ✅ Complete design system (colors, fonts, spacing)
- ✅ Security & error handling
- ✅ SEO optimization
- ✅ Auto-deployment via GitHub → Vercel
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Performance optimized (86.4 kB first load)

**For team members:**
- Start with this TEAM_GUIDE for project overview
- Read DESIGN.md for design decisions
- Use components/pages as templates for new work
- Follow the development workflow for changes
- Push to main branch to auto-deploy

**Questions?** Check DESIGN.md, PRODUCTION_DEPLOYMENT.md, or existing code files for patterns.

---

**Last Updated:** April 5, 2026  
**Status:** Production Ready ✅  
**Next Review:** Q2 2026

