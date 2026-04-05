# Moducraft Website - Implementation Plan

**Status:** Draft | **Version:** 1.0 | **Date:** April 5, 2026

---

## Executive Summary

Build a professional, conversion-optimized website for **Moducraft** — a custom modular furniture manufacturer in Jaipur. The site will serve both B2B (architects, designers, developers) and B2C (retail customers) audiences while showcasing the manufacturing process (KOP) to establish credibility.

**Primary Goals:**
- Generate qualified leads (B2B: quotes; B2C: sales)
- Showcase portfolio & manufacturing expertise
- Build brand credibility through transparency
- Educate market about modular furniture advantages

---

## Target Audience

### B2B Personas
- **Architects** → Looking for reliable custom furniture suppliers; need bulk pricing, lead time details, specifications
- **Interior Designers** → Need design flexibility, sample options, fast turnaround, bulk discounts
- **Real Estate Developers / Builders** → Furnishing entire developments; need scalable solutions, volume discounts, contract terms

### B2C Persona
- **Retail Customers** → Want custom home furniture; browsing online, need design consultation, fair pricing, payment flexibility

---

## Feature Specification

### Phase 1: MVP (Weeks 1-4)
**Deliverables:** Functional website with core credibility pages

#### 1. Homepage
- Hero section with video (15-30 sec) + compelling copy
- 3-4 key benefit statements ("Custom", "Modular", "Jaipur's Finest")
- CTA buttons: "Browse Catalog" | "Request Quote"
- Trust signals: Founded year, client count, pieces shipped
- Features grid (3-4 items): Customization, Quality, Speed, Sustainability

#### 2. About Us / Company Story
- Company history & founding story
- Why modular? Market positioning
- Manufacturing excellence (CNC precision, quality certifications)
- Team photos (humanize production)
- Jaipur heritage & craftsmanship narrative

#### 3. Portfolio Gallery
- 30-50 high-quality project photos
- Filterable by: Room type, Style, Wood type
- Hover details: Project name, materials, timeline, budget range
- Client testimonials (text + photos)

#### 4. Contact Page / Lead Capture
- Simple contact form (Name, Email, Phone, Message, Lead Type: B2B/B2C)
- Google Maps showing factory location
- Phone, WhatsApp, email contact options
- Office hours / availability

#### 5. Basic Navigation & Footer
- Responsive mobile-first design
- Clear site map in footer
- Social media links (Facebook, Instagram, LinkedIn for B2B)
- SEO-ready structure

### Phase 2: Business Features (Weeks 5-8)
**Deliverables:** Monetization & B2B integration

#### 6. Catalog / Products
- Collections: Bedroom, Living, Office, Kitchen, Storage, Custom
- Product cards: Image, starting price, description, customization options
- "Request Customization" or "Add to Cart" CFAs
- Product detail pages: Specs, materials, finishes, lead time, reviews

#### 7. KOP Showcase (Key Operating Process)
- Interactive timeline: Design → Material → Cutting → Assembly → QC → Packaging → Delivery
- Video clips + photos from industrial profile document at each stage
- Technical specifications (wood types, finishes, dimensions)
- PDF download: Full "Key Operating Processes" document
- Virtual factory tour (360° photos or video walkthrough if possible)

#### 8. Pricing & Quotation System
- Transparent pricing matrix (starting from ₹X per category)
- Quote request form (detailed requirements for B2B)
- Lead time estimator based on complexity
- Volume discount tiers visible for bulk orders

#### 9. Blog / Resources
- 5-10 cornerstone articles: "Space-Saving Modular Solutions", "Furniture Care Guide", "Interior Trends", "Architect's Guide to Modular Design"
- SEO-optimized for local keywords
- CTA in each article to capture leads

### Phase 3: E-commerce & Advanced Features (Weeks 9+)
**Deliverables:** Full transaction capability

#### 10. E-commerce Cart & Checkout
- Shopping cart (B2C self-service)
- Customization builder: Choose wood, color, dimensions, accessories with real-time price updates
- Secure checkout: Multiple payment methods (cards, bank transfer, installments)
- Order confirmation & email receipt

#### 11. Customer Portal (Future)
- Order tracking: Visual progress through manufacturing stages
- Account history & reorder capability
- Saved favorites / design preferences
- Download invoices and shipping docs

#### 12. Admin Dashboard (Future)
- Manage products, pricing, lead time
- Track orders & production status
- View & manage leads from quote requests
- Analytics dashboard

---

## Technical Architecture

### Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Framework** | React 18 + TypeScript | Modern, component-based, team scalable |
| **Styling** | Tailwind CSS + Shadcn/ui | Rapid UI development, consistent design |
| **State Management** | TanStack Query + Zustand | Efficient data fetching & client state |
| **Forms** | React Hook Form + Zod | Type-safe form validation |
| **Backend** | Node.js + Express | Fast, JavaScript-based, easy database integration |
| **Database** | PostgreSQL | Relational data (products, orders, leads), ACID compliance |
| **CMS (Future)** | Headless CMS (Sanity/Strapi) | Non-technical content updates (blog, portfolio) |
| **Authentication** | NextAuth.js or Auth0 | Secure customer & B2B access |
| **Hosting** | Vercel (Frontend) + Railway/Render (Backend) | Simple deployment, good performance in India |
| **Email** | SendGrid / Resend | Transactional emails (order confirmation, lead notifications) |
| **CDN & Images** | Cloudinary or AWS S3 + CloudFront | Fast image delivery, optimization |
| **Analytics** | Google Analytics 4 + Hotjar | Conversion tracking, user behavior |
| **SEO Tools** | Yoast / SEMrush | Local Jaipur keyword optimization |

### Database Schema (PostgreSQL)

```sql
-- Products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(100),
  description TEXT,
  base_price DECIMAL(10,2),
  image_url VARCHAR(255),
  lead_time_days INT,
  is_customizable BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Customization Options
CREATE TABLE customization_options (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id),
  option_name VARCHAR(100), -- e.g., "Wood Type", "Color", "Dimensions"
  default_value VARCHAR(255),
  price_modifier DECIMAL(10,2)
);

-- Quote Requests (B2B)
CREATE TABLE quote_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  company_name VARCHAR(255),
  requirement_details TEXT,
  estimated_quantity INT,
  lead_source VARCHAR(100),
  status VARCHAR(50), -- pending, contacted, quoted, won, lost
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders (B2C)
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  order_date TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50), -- design, material, cutting, assembly, qc, packaging, shipped
  total_price DECIMAL(10,2),
  estimated_delivery DATE,
  actual_delivery DATE
);

-- Order Items
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT,
  selected_customizations JSONB,
  unit_price DECIMAL(10,2)
);

-- Portfolio / Projects
CREATE TABLE portfolio_projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  room_type VARCHAR(100), -- bedroom, living, kitchen, office
  style VARCHAR(100),
  image_urls TEXT[], -- array of image URLs
  client_name VARCHAR(255),
  testimonial TEXT,
  materials_used TEXT,
  timeline_weeks INT,
  budget_range VARCHAR(50),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  content TEXT,
  excerpt VARCHAR(500),
  author VARCHAR(255),
  featured_image VARCHAR(255),
  published_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Customers (B2C)
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  pincode VARCHAR(10),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Frontend Structure

```
src/
├── components/
│   ├── common/           (Header, Footer, Navigation, Hero)
│   ├── home/             (Features grid, CTA sections)
│   ├── portfolio/        (Gallery, filters, project detail)
│   ├── products/         (Product cards, customizer)
│   ├── forms/            (Contact, Quote request, Checkout)
│   ├── kop/              (Timeline, factory tour, specs)
│   └── blog/             (Post list, individual posts)
├── pages/
│   ├── index.tsx         (Homepage)
│   ├── about.tsx
│   ├── portfolio.tsx
│   ├── products.tsx
│   ├── kop.tsx           (Key Operating Process)
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── quote.tsx         (B2B quote request)
│   ├── cart.tsx
│   ├── checkout.tsx
│   └── order-tracking.tsx
├── services/
│   ├── api.ts            (API client)
│   ├── products.ts       (Product queries)
│   ├── orders.ts         (Order management)
│   ├── leads.ts          (Quote requests)
│   └── portfolio.ts      (Portfolio data)
├── hooks/
│   ├── useProducts.ts
│   ├── useQuote.ts
│   ├── useCart.ts
│   └── useAuth.ts
├── store/
│   └── cart.ts           (Zustand cart state)
├── utils/
│   ├── formatting.ts     (Currency, dates)
│   ├── validation.ts
│   └── seo.ts            (Meta tags, structured data)
├── styles/
│   ├── globals.css       (Tailwind + custom)
│   └── theme.css
└── public/
    ├── images/
    ├── videos/
    └── icons/
```

### Backend Structure

```
backend/
├── src/
│   ├── routes/
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   ├── quotes.ts
│   │   ├── portfolio.ts
│   │   ├── blog.ts
│   │   └── auth.ts
│   ├── controllers/
│   │   ├── productController.ts
│   │   ├── orderController.ts
│   │   ├── quoteController.ts
│   │   └── portfolioController.ts
│   ├── models/
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   ├── QuoteRequest.ts
│   │   └── PortfolioProject.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   ├── services/
│   │   ├── emailService.ts    (SendGrid integration)
│   │   ├── orderService.ts
│   │   └── leadService.ts
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   └── app.ts               (Express app setup)
└── .env.example
```

---

## Design System

### Color Palette
- **Primary (Earthy/Premium):** #8B7355 (Warm Brown)
- **Secondary:** #D4A574 (Light Tan)
- **Accent:** #2C3E50 (Deep Navy)
- **Neutral:** #F5F3F0 (Off-white), #FFFFFF (White), #333333 (Dark Gray)
- **Success:** #27AE60
- **Error:** #E74C3C

### Typography
- **Headlines:** "Sora" (modern, clean, geometric)
- **Body:** "Inter" (readable, professional)
- **Accent/Branding:** "Playfair Display" (elegant, craftsman heritage)

### Component Library
- Buttons (Primary, Secondary, Outline)
- Cards (Product, Portfolio, Blog)
- Forms (Input, Textarea, Select, Checkbox, Radio)
- Alerts / Notifications
- Modals
- Carousels (Portfolio slider)
- Filters (Portfolio, Products)
- Price calculator widget
- Progress tracker (Manufacturing stages)

---

## Content Strategy

### Homepage
- Hero: "Custom Modular Furniture, Built in Jaipur"
- Sub-hero: "Trusted by [X] Architects | [X] Projects Delivered | [X] Years Experience"
- 4 Key Features: Customization, Quality, Speed, Sustainability
- CTA: "Explore Catalog" | "Get a Quote"

### Portfolio
- 40-50 high-quality images (organized by room type)
- Client testimonials (architect/designer names)
- Project complexity indicators (small, medium, large scale)

### Blog (SEO-driven)
1. "5 Space-Saving Modular Furniture Solutions for Small Homes"
2. "How Modular Design Works: A Guide for Architects"
3. "Jaipur's Craftsmanship Meets Modern Design"
4. "Interior Trends 2024: Why Modular is Here to Stay"
5. "Custom Furniture Care & Maintenance Guide"

### Key Operating Process (KOP) Page
- Interactive timeline with photos/videos from industrial profile
- Transparency: "See how your furniture is made"
- Technical specs: Wood types, finishes, sustainability practices
- Lead time details

---

## Marketing & SEO

### SEO Keywords (Local Focus)
- Primary: "Custom modular furniture Jaipur"
- Secondary: "Modular design Jaipur", "Modular furniture manufacturer", "Architect furniture Jaipur"
- Tertiary: "Modular bedroom sets", "Modular living room", "Custom office furniture"

### Conversions Flow
1. **B2B Path:** Homepage → Catalog → KOP Page → Quote Form → Email to team
2. **B2C Path:** Homepage → Portfolio → Products → Customizer → Cart → Checkout

### Lead Nurturing
- Form submission triggers email to customer
- Automated: "Thanks for your interest. Our team will contact you within 24 hours."
- Weekly blog mailings to newsletter subscribers

---

## Implementation Timeline

### Week 1-2
- [ ] Project setup (Next.js/React + Express backend)
- [ ] Database design & setup (PostgreSQL)
- [ ] Design system finalization
- [ ] Homepage build + About page

### Week 3-4
- [ ] Portfolio gallery + filtering
- [ ] Contact/Quote form
- [ ] Blog template & first 3 posts
- [ ] SEO setup (Google Search Console, meta tags)

### Week 5-6
- [ ] Catalog + Product detail pages
- [ ] KOP showcase (timeline + factory photos)
- [ ] Pricing page
- [ ] Basic admin panel for content management

### Week 7-8
- [ ] E-commerce cart & checkout flow
- [ ] Payment integration (Razorpay/PayU for India)
- [ ] Order tracking page
- [ ] Email automation

### Week 9+
- [ ] Advanced analytics
- [ ] Customer portal
- [ ] CMS integration (non-technical content updates)
- [ ] Mobile app (optional)

---

## Success Metrics

### B2B KPIs
- Quote requests per month (Target: 20)
- Quote-to-order conversion rate (Target: 30%)
- Average order value (Target: ₹50,000+)

### B2C KPIs
- Monthly website visitors (Target: 5,000)
- Conversion rate (Target: 2-3%)
- Average order value (Target: ₹15,000)

### Overall KPIs
- Page load time (Target: < 2 seconds)
- Mobile traffic % (Target: 60%+)
- SEO ranking (Target: Top 3 for "custom modular furniture Jaipur")

---

## Budget & Resources

| Item | Estimated Cost | Notes |
|------|---|---|
| Domain & SSL | ₹500/year | Included in hosting |
| Hosting (Vercel + Railway) | ₹1,500-3,000/month | Scales with traffic |
| Content (Photography, Videos) | ₹30,000-50,000 | Professional shoot at factory |
| Design (Figma mockups) | ₹10,000 | Can be simplified |
| Development | Time-based | Using internal resources + Claude Copilot |
| Email Service | ₹500/month | SendGrid tier |
| Analytics & SEO Tools | ₹2,000/month | Optional premium tiers |
| **Total (First 3 months)** | **~₹50,000-100,000** | MVP + Phase 2 |

---

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| High-quality product photography unavailable | Medium | Use existing factory photos, commission professional shoot in Phase 2 |
| Payment integration complexity | Medium | Use established gateway (Razorpay), strong documentation |
| SEO takes time to mature | Medium | Blog consistently, local link building, Google Ads temporary boost |
| B2C adoption slower than expected | Low | Focus on B2B quotes initially, pivot to architects/developers |
| Content management burden | Low | Implement headless CMS in Phase 3 |

---

## Next Steps

1. ✅ **Approve Plan** — Get stakeholder buy-in on scope & timeline
2. ⬜ **Run Design Review** — Validate UI/UX mockups
3. ⬜ **Run Engineering Review** — Lock in technical architecture
4. ⬜ **Start Development** — Begin building Phase 1 (Homepage, About, Portfolio)
5. ⬜ **Content Gathering** — Collect portfolio images, testimonials, company story

---

## Appendices

### A. Brand Voice
- **Tone:** Professional yet approachable; transparent; proud of craftsmanship
- **Message:** "We don't compromise on quality. Every piece is made with precision."

### B. Compliance & Legal
- Privacy policy (GDPR-ready for international queries)
- Terms of Service
- Warranty & Returns policy
- Data protection (customer data handling)

### C. Cookies & Analytics Setup
- Google Analytics 4 for user behavior tracking
- Conversion pixels for B2B quote form submissions
- Hotjar heatmaps to optimize user journey

---

**Plan Status:** Ready for Design Review & Engineering Review
**Review Tools to Use:** /plan-design-review, /plan-eng-review, /autoplan
