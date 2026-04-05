import Link from 'next/link';
import { Globe, MessageCircle, Send } from 'lucide-react';
import { site } from '@/lib/site';
import { Logo } from '@/components/logo';
import { liveProducts } from '@/lib/products';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-gradient-to-br from-[#f8fbf6] to-[#f5f8fc]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="text-[#111111]">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-600">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1B4F8A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Products</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {liveProducts.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="transition hover:text-[#1B4F8A]">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>{site.location}</p>
            <a href={`mailto:${site.email}`} className="block transition hover:text-[#1B4F8A]">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replaceAll(' ', '')}`} className="block transition hover:text-[#1B4F8A]">
              {site.phone}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3 text-slate-700">
            <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border border-black/10 p-2 hover:border-[#1B4F8A]">
              <Globe className="h-4 w-4" />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="rounded-full border border-black/10 p-2 hover:border-[#1B4F8A]">
              <Send className="h-4 w-4" />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border border-black/10 p-2 hover:border-[#1B4F8A]">
              <Globe className="h-4 w-4" />
            </a>
            <a href={site.social.whatsapp} aria-label="WhatsApp" className="rounded-full border border-black/10 p-2 hover:border-[#1B4F8A]">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-600 md:flex-row lg:px-8">
          <p>© 2025 Envecoplast Company Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#1B4F8A]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1B4F8A]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
