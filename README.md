# Moducraft Website - Complete Setup Guide

Complete implementation plan, design system, and project structure for the Moducraft custom modular furniture e-commerce platform.

## 📂 Project Structure

```
moducraft-website/
├── frontend/                  # Next.js + React + TypeScript
│   ├── src/
│   │   ├── pages/            # Next.js pages (routing)
│   │   ├── components/       # Reusable React components
│   │   ├── services/         # API client & data fetching
│   │   ├── hooks/            # Custom React hooks
│   │   ├── store/            # Zustand state management
│   │   ├── types/            # TypeScript interfaces
│   │   ├── utils/            # Utility functions
│   │   ├── styles/           # Global styles & CSS
│   │   └── public/           # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── .env.example
│
├── backend/                   # Node.js + Express + PostgreSQL
│   ├── src/
│   │   ├── index.ts          # Express app entry
│   │   ├── routes/           # API endpoints
│   │   ├── controllers/      # Route handlers
│   │   ├── models/           # Data models / DB queries
│   │   ├── services/         # Business logic
│   │   ├── middleware/       # Express middleware
│   │   ├── db/               # Database config & migrations
│   │   ├── types/            # TypeScript interfaces
│   │   ├── config/           # Configuration
│   │   └── utils/            # Utility functions
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── PLAN.md                    # Implementation roadmap
├── DESIGN.md                  # Design system & guidelines
├── package.json               # Root scripts for concurrency
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x
- npm 9.x
- PostgreSQL 12+
- Git

### Installation

1. **Clone and Navigate**
   ```bash
   cd Moducraft-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # Also installs frontend and backend dependencies
   ```

3. **Setup Environment Variables**
   ```bash
   # Frontend
   cp frontend/.env.example frontend/.env.local
   
   # Backend
   cp backend/.env.example backend/.env
   ```

4. **Configure Database**
   ```bash
   # Create PostgreSQL database
   createdb moducraft
   
   # Run migrations
   cd backend
   npm run migrate
   npm run seed
   cd ..
   ```

5. **Start Development Servers**
   ```bash
   npm run dev
   # Runs frontend on http://localhost:3000
   # Runs backend on http://localhost:4000
   ```

## 📋 Key Documentation

### Implementation Plan
- **File:** [PLAN.md](./PLAN.md)
- **Contains:** 
  - Feature specifications (Phase 1-3)
  - Technical architecture & database schema
  - Frontend/Backend folder structure
  - Implementation timeline (9 weeks)
  - Success metrics & KPIs
  - Risk mitigation

### Design System
- **File:** [DESIGN.md](./DESIGN.md)
- **Contains:**
  - Color palette & typography
  - Component library & states
  - Spacing, layout & grid system
  - Responsive breakpoints
  - Motion & animations
  - Accessibility standards
  - Brand voice & tone

## 🎨 Tech Stack

### Frontend
- **Framework:** Next.js 14 + React 18 + TypeScript
- **Styling:** Tailwind CSS + custom design tokens
- **State Management:** Zustand + TanStack Query
- **Forms:** React Hook Form + Zod validation
- **Authentication:** NextAuth.js
- **Components:** Shadcn/ui + custom components
- **Icons:** Heroicons (solar set)

### Backend
- **Runtime:** Node.js 18
- **Framework:** Express.js 4
- **Database:** PostgreSQL (with pg driver)
- **Auth:** JWT + bcryptjs
- **Validation:** Express-validator + Joi
- **Email:** SendGrid
- **Security:** Helmet, CORS, rate limiting
- **Testing:** Jest + Supertest

## 🏗️ Project Phases

### Phase 1: MVP (Weeks 1-4) ✖️ Not Started
- Homepage with hero & trust signals
- About Us / Company Story
- Portfolio Gallery with filters
- Contact / Lead Capture forms
- Blog template & SEO setup

### Phase 2: Business Features (Weeks 5-8) 🟡 Planning
- Product Catalog with customization
- KOP (Key Operating Process) showcase
- B2B Quote request system
- Pricing & Lead time estimator
- Admin panel (basic)

### Phase 3: E-commerce (Weeks 9+) 🔵 Future
- Shopping cart & checkout
- Payment integration (Razorpay)
- Customer portal & order tracking
- Advanced analytics

## 🔑 Key Features

### B2B Capabilities
- Quote request forms (bulk ordering)
- Volume discount tiers
- Account manager assignment (future)
- Net-30 payment terms (future)

### B2C Capabilities
- Product catalog with search/filters
- Real-time customization preview
- Shopping cart & secure checkout
- Order tracking (production stages)
- Customer account & order history

### Content & Marketing
- Portfolio showcase (40-50 projects)
- Process transparency (KOP documentation)
- Blog (SEO-optimized)
- Client testimonials
- Factory photos/videos

## 📊 Database Schema

Key tables included:
- `products` — Product catalog
- `customization_options` — Price modifiers for options
- `quote_requests` — B2B leads (name, email, requirements)
- `orders` — B2C orders with status tracking
- `order_items` — Line items with customizations
- `portfolio_projects` — Gallery projects
- `blog_posts` — Content
- `customers` — User accounts

See [PLAN.md](./PLAN.md) SQL schema section for full details.

## 🖥️ API Endpoints (Coming Soon)

**Planned Routes:**
- `POST /api/products` — Get products with filters
- `POST /api/quote-requests` — Submit B2B quote request
- `POST /api/orders` — Create order (B2C)
- `GET /api/portfolio` — Get projects
- `POST /api/contact` — Contact form submission
- `GET /api/config` — Site configuration

## 🎯 Success Metrics

### B2B
- 20 quote requests/month (target)
- 30% quote-to-order conversion
- ₹50,000+ average order value

### B2C
- 5,000 monthly visitors (target)
- 2-3% conversion rate
- ₹15,000 average order value

### Overall
- < 2s page load time
- 60%+ mobile traffic
- Top 3 Google ranking for "custom modular furniture Jaipur"

## 🔐 Security & Compliance

- WCAG 2.1 Level AA accessibility
- GDPR-ready privacy policy
- Helmet security headers
- CORS protection
- JWT authentication
- Password hashing (bcryptjs)
- Input validation & sanitization
- Rate limiting (planned)

## 📧 Contact & Leads

### Automated Email Flows
- Quote request confirmation → Team notification
- Order confirmation → Customer notification
- Order status updates → Real-time tracking
- Newsletter signup → Marketing list

**Email Service:** SendGrid

## 🚢 Deployment

### Frontend
- **Platform:** Vercel (recommended)
- **Build:** `npm run build:frontend`
- **Start:** `npm run start:frontend`

### Backend
- **Platform:** Railway / Render / AWS EC2
- **Build:** `npm run build:backend`
- **Start:** `npm run start:backend`
- **Database:** Managed PostgreSQL

## 🐛 Development Workflow

### Code Quality
```bash
# Format code
npm run format

# Lint code
npm run lint

# Type checking
npm run type-check

# Run tests
npm run test
```

### Database Management
```bash
# Run migrations
cd backend && npm run migrate

# Seed sample data
cd backend && npm run seed

# Reset database (dev only)
cd backend && npm run db:reset
```

## 📝 Next Steps

1. ✅ Review [PLAN.md](./PLAN.md) for implementation strategy
2. ✅ Review [DESIGN.md](./DESIGN.md) for UI/UX guidelines
3. 🔄 Set up local development environment
4. 🔄 Run CEO Review (`/plan-ceo-review`) for scope validation
5. 🔄 Run Engineering Review (`/plan-eng-review`) for architecture sign-off
6. 🔄 Begin Phase 1 development (Homepage, About, Portfolio)
7. 🔄 Content gathering (photos, testimonials, copy)

## 🤝 Contributing

### Branch Naming
- `feature/` — New features
- `bugfix/` — Bug fixes
- `docs/` — Documentation
- `content/` — Content updates

### Commit Messages
```
[Type] Short description

- Detailed point 1
- Detailed point 2
```

## 📞 Support

For questions or issues:
- **Email:** team@moducraft.in
- **GitHub Issues:** [Report bugs here]
- **Documentation:** See PLAN.md & DESIGN.md

## 📄 License

MIT License - See LICENSE file

---

**Made with ❤️ for Moducraft by the Development Team**

**Last Updated:** April 5, 2026 | **Version:** 1.0.0
