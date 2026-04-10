import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
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
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="text-gray-900">
            <Image
              src="/brand/envecoplast-full-vert.svg"
              alt="Envecoplast logo"
              width={220}
              height={270}
              className="h-auto w-64"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-[#1A6B3C]">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">Products</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>{site.location}</p>
            <a href={`mailto:${site.contact.email}`} className="block transition hover:text-[#1B4F8A]">
              {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phone.replaceAll(' ', '')}`} className="block transition hover:text-[#1B4F8A]">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-600 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Envecoplast Company Limited. All rights reserved.</p>
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
