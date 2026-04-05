'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Go to homepage" className="text-[#111111]">
          <Image
            src="/brand/envecoplast-full-vert.svg"
            alt="Envecoplast logo"
            width={52}
            height={220}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition',
                  active ? 'text-[#1A6B3C]' : 'text-slate-700 hover:text-[#1B4F8A]',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?inquiryType=Place%20an%20Order"
            className="hidden rounded-full bg-[#1A6B3C] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#14552f] md:inline-flex"
          >
            Order Now
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-700 lg:hidden"
            type="button"
            onClick={() => setOpen((state) => !state)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1A6B3C]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?inquiryType=Place%20an%20Order"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-[#1A6B3C] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Order Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
