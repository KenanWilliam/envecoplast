# Envecoplast Website

Production-ready, multi-page website and quote-request marketplace for Envecoplast Company Limited.

## Tech Stack

- Next.js App Router (static export)
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
- Static product detail pages via generateStaticParams
- Quote request links that prefill contact form
- Client-side form submission (Formspree) with validation
- Framer Motion section reveal animations
- SEO metadata and Open Graph defaults
- Static export ready for shared hosting

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build (Static Export)

This project is configured with `output: 'export'` in `next.config.ts`.

```bash
npm run build
```

After build completes, deploy the contents of the `out/` directory.

## Configure Formspree

1. Create a free Formspree form and copy your endpoint URL.
2. Update `formspreeEndpoint` in `lib/site.ts`.
3. Build again to include the updated endpoint in the static bundle.

## Spaceship Deployment Guide (FTP/SFTP)

1. Run `npm run build`.
2. Confirm an `out/` folder is generated.
3. Open your Spaceship hosting panel and connect via FTP/SFTP (or File Manager).
4. Upload all files and folders from inside `out/` to your domain root (usually `public_html`).
5. Ensure `.htaccess` is present in deployment root:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

6. Clear browser cache and reload your domain.
7. Test core pages and a product detail route.

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
