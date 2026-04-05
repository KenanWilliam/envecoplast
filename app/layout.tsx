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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Sustainable Construction Materials`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} bg-[#080b09] text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
