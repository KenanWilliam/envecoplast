'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/content';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

/**
 * Option 13A — The Glass Dock
 * A floating pill-shaped nav that sits 20px from the top. 
 * On scroll, it shrinks and becomes more transparent while increasing the backdrop-blur. 
 * The active link is indicated by a "blob" that slides behind the text.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 flex w-full justify-center px-6 pt-5 transition-all duration-500">
      <header
        className={cn(
          'relative flex h-14 items-center justify-between rounded-full border border-gray-200 bg-white/80 px-6 backdrop-blur-md transition-all duration-500 lg:h-16 lg:px-8',
          scrolled ? 'max-w-4xl bg-white/70 shadow-apple' : 'max-w-7xl bg-white/95 shadow-none'
        )}
      >
        <Logo className="h-8 lg:h-10" />

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                  active ? 'text-[#1A6B3C]' : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {active && (
                  <motion.div
                    layoutId="nav-blob"
                    className="absolute inset-0 z-[-1] rounded-full bg-[#1A6B3C]/5"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?inquiryType=Place%20an%20Order"
            className="hidden rounded-full bg-[#1A6B3C] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#14552f] hover:shadow-apple-hover md:inline-flex"
          >
            Order Now
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 lg:hidden"
            type="button"
            onClick={() => setOpen((state) => !state)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="absolute top-20 left-0 right-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-apple-hover lg:hidden"
            >
              <nav className="flex flex-col p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-gray-900 transition hover:bg-gray-50 hover:text-[#1A6B3C]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact?inquiryType=Place%20an%20Order"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex justify-center rounded-full bg-[#1A6B3C] py-4 text-base font-semibold text-white shadow-apple"
                >
                  Order Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
