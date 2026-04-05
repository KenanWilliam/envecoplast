# Envecoplast Website

Production-ready Next.js website for Envecoplast Company Limited with a mini quote-request marketplace.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod
- TypeScript

## Routes

- / - Homepage
- /about - About Us
- /products - Product Catalog
- /products/[slug] - Product Detail
- /how-it-works - Process Page
- /why-us - Why Choose Envecoplast
- /contact - Contact and Quote Form
- /privacy-policy - Privacy Policy
- /terms - Terms of Service
- /api/contact - API stub for form integration

## Features

- Responsive multi-page layout
- Light-first branded visual system
- SVG logo component
- Filterable product marketplace grid
- Product detail pages for in-stock products
- Quote request links prefill contact form
- Contact form validation with Zod
- Framer Motion reveal animations
- Page metadata and Open Graph-ready defaults

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm run start
```

## Data and Content

Structured typed content lives in:

- lib/site.ts
- lib/content.ts
- lib/products.ts

These files are CMS-ready and can be swapped with headless content sources later.

## Deployment

The project includes `vercel.json` and is ready to deploy on Vercel.

## Notes for Future Marketplace Expansion

Current implementation is a quote-request marketplace (no cart or checkout).
Future checkout integration can plug into:

- cart state and checkout actions on product pages
- API routes under app/api
- payment provider integration (Stripe, Flutterwave, etc.)
