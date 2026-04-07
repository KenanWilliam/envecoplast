import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const sora = Sora({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Sustainable Construction Materials`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL('https://envecoplast.com'),
  openGraph: {
    title: `${site.name} | Sustainable Construction Materials`,
    description: site.description,
    siteName: site.name,
    type: 'website',
    locale: 'en_KE',
    images: [
      {
        url: 'https://envecoplast.com/brand/envecoplast-full-hrtl.svg',
        width: 1200,
        height: 627,
        alt: 'Envecoplast - Transforming plastic waste into construction materials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Sustainable Construction Materials`,
    description: site.description,
    images: ['https://envecoplast.com/brand/envecoplast-full-hrtl.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} bg-white text-gray-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
