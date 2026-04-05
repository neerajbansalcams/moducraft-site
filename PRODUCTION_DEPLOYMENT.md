# Moducraft Website - Production Deployment Guide

## Overview
Moducraft is a Next.js-based website for custom modular furniture. This guide covers deployment, monitoring, and maintenance.

## Quick Links
- **Live Site**: https://moducraft-site.vercel.app
- **GitHub Repository**: https://github.com/neerajbansalcams/moducraft-site
- **Vercel Dashboard**: https://vercel.com/dashboard

## Prerequisites
- Node.js 24.x (`nvm use` to switch versions)
- npm 11.x
- GitHub account with push access
- Vercel account (for deployments)

## Local Development

```bash
# Install dependencies
cd frontend
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm run start
```

## Deployment to Vercel

### First-Time Setup
1. Push code to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click "New Project" → Import `moducraft-site`
4. Set **Root Directory** to `frontend`
5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL
   - `NEXT_PUBLIC_SITE_URL`: Production site URL
6. Click **Deploy**

### Subsequent Deployments
Automatic: Every push to `main` branch triggers automatic redeployment
Manual: Go to Vercel Dashboard → Select Project → Click "Redeploy"

## Environment Variables

### Required for Production
```
NEXT_PUBLIC_API_URL=https://api.moducraft.in
NEXT_PUBLIC_SITE_URL=https://moducraft-site.vercel.app
NODE_ENV=production
```

### Optional for Analytics
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=  # Google Tag Manager ID
SENTRY_AUTH_TOKEN=  # For error tracking
```

## Performance Optimization

### Build Optimization
- Tailwind CSS is optimized with PurgeCSS
- Images are automatically optimized using next/image
- JavaScript is minified using SWC
- Static pages are pre-rendered at build time

### Caching Strategy
- Static assets cached with long TTL (1 year)
- API responses cached based on revalidate time
- ISR (Incremental Static Regeneration) for blog posts (3600s)

## Security Features

### Implemented
- ✅ HTTPS only (Vercel enforces)
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Input validation on forms
- ✅ Error boundaries for graceful failures
- ✅ No sensitive data in code
- ✅ Production logs disabled

### Recommendations
- [ ] Setup Sentry for error tracking
- [ ] Enable 2FA on GitHub and Vercel
- [ ] Regular dependency updates
- [ ] Security headers monitoring

## Monitoring & Alerting

### Key Metrics to Monitor
1. **Build Status**: Check Vercel Dashboard for failed builds
2. **Core Web Vitals**: Google Search Console
3. **Error Rate**: Setup Sentry integration
4. **Uptime**: Use service like UptimeRobot
5. **Performance**: Google Lighthouse

### Recommended Tools
- **Error Tracking**: Sentry
- **Monitoring**: Datadog, New Relic
- **Analytics**: Google Analytics 4
- **Uptime**: UptimeRobot, Pingdom

## Troubleshooting

### Build Fails on Vercel
1. Check build logs in Vercel Dashboard
2. Verify environment variables are set
3. Test build locally: `npm run build`
4. Ensure Node version matches (.nvmrc)

### Pages Not Updating
- Check ISR revalidate time in getStaticProps
- Clear browser cache (Ctrl+Shift+Delete)
- Check Vercel deployment was successful

### Images Not Loading
- Verify image URLs are accessible
- Check image optimization settings in next.config.js
- Use Google Chrome DevTools Network tab for 404s

## Maintenance

### Weekly
- Monitor Vercel Dashboard for errors
- Check Google Search Console for issues
- Review analytics for unusual patterns

### Monthly  
- Update dependencies: `npm update`
- Review security advisories: `npm audit`
- Check error tracking (Sentry) for recurring issues
- Test core user flows end-to-end

### Quarterly
- Security audit of codebase
- Performance optimization review
- Update documentation
- Plan feature releases

## Rollback Procedure

If deployment has issues:
1. Go to Vercel Dashboard
2. Select Project → Deployments
3. Find previous successful deployment
4. Click three dots → Promote to Production
5. Verify rollback successful

## Contact & Support
- **Developer**: Neeraj Bansal
- **GitHub Issues**: Report bugs in repository
- **Urgent Issues**: Check Vercel status page

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Web Vitals](https://web.dev/vitals/)
