import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { OrganizationJsonLd } from '@/components/seo/json-ld';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const sora = Sora({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.envecoplast.com'),
  title: {
    default: 'Envecoplast Ltd — Recycled Plastic Construction Materials | Kenya',
    template: '%s | Envecoplast Ltd',
  },
  description:
    'Envecoplast Ltd provides high-purity recycled plastic chips and pellets for industrial manufacturing. We transform post-consumer waste into high-quality feedstock and sustainable construction materials in Kenya.',
  keywords: [
    'recycled plastic construction materials Kenya',
    'interlocking building blocks Kenya',
    'plastic recycling company Nairobi',
    'eco-friendly construction blocks',
    'recycled plastic chips pellets Kenya',
    'sustainable building materials Africa',
    'plastic waste recycling Nairobi',
    'construction blocks from recycled plastic',
    'buy plastic pellets Kenya',
    'green building materials Kenya',
    'Envecoplast',
    'recycled plastic blocks for sale',
    'circular economy construction Africa',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.envecoplast.com',
    siteName: 'Envecoplast Ltd',
    title: 'Envecoplast Ltd — Recycled Plastic Construction Materials | Kenya',
    description:
      'High-purity recycled plastic chips and pellets for industrial manufacturing. Transforming waste into value with sustainable raw materials and circular building solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Envecoplast Ltd — Recycled Plastic Construction Materials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envecoplast Ltd — Recycled Construction Materials | Kenya',
    description:
      'Recycled plastic chips, pellets, and interlocking blocks for fast, affordable, sustainable construction.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.envecoplast.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'google-site-verification=AcVnGNOMCNCq-2UxFrZ_dDWL8qk4DvXWUfEx7q7RxR0',
  },
  icons: {
    icon: '/brand/envecoplast-logo.svg',
    shortcut: '/brand/envecoplast-logo.svg',
    apple: '/brand/envecoplast-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} bg-white text-gray-900 antialiased`}>
        <OrganizationJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
  <Footer />
      </body>
    </html>
  );
}
