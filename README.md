# Envecoplast Website

Production-ready, multi-page website and quote-request marketplace for Envecoplast Company Limited.

## Tech Stack

- Next.js App Router (Node.js standalone)
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod
- TypeScript

## Project Routes

- / (Homepage)
- /about
- /products
- /products/[slug]
- /how-it-works
- /why-us
- /contact
- /privacy-policy
- /terms

## Key Features

- Dark-first, cinematic brand styling
- Typed content architecture in lib files
- Filterable marketplace catalog
- Product detail pages with optional pre-rendering via generateStaticParams
- Quote request links that prefill contact form
- Client-side form submission (Formspree) with validation
- Framer Motion section reveal animations
- SEO metadata and Open Graph defaults
- Production-ready for Spaceship Node.js app hosting

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build (Node.js Standalone)

This project is configured with `output: 'standalone'` in `next.config.ts`.

```bash
npm run build
```

After build completes, use `.next/standalone/server.js` as your startup file in cPanel.

## Configure Formspree

1. Create a free Formspree form and copy your endpoint URL.
2. Set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.production`.
3. Build again to include the updated endpoint in the static bundle.

## Spaceship Deployment Guide (Setup Node.js App)

1. Run a clean build.
2. Confirm `.next/standalone/server.js` exists.
3. Copy static assets into standalone:

```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

4. Upload the contents of `.next/standalone/` to your Spaceship app folder.
5. In cPanel Setup Node.js App, set startup file to `server.js`.
6. Configure environment variables in cPanel (or via `.env.production`).
7. Restart the Node.js app and verify routes and form submission.

## Content and Data

The website is content-driven and CMS-ready. Update these files without changing page component logic:

- `lib/site.ts`
- `lib/content.ts`
- `lib/products.ts`

## Future Marketplace Expansion

This release is quote-request only (no cart and no checkout).

Potential v2 expansion points:

- Cart state and line-items on product pages
- Payment integration (Stripe, Flutterwave, M-Pesa bridges)
- CRM sync after inquiry submission
