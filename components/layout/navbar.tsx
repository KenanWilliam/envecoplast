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
 * Option 13A — The Glass Dock (Compact Refined)
 * Refinement: Reduced height for a sleeker profile.
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
    <div className="fixed top-0 z-50 flex w-full justify-center px-6 pt-4 transition-all duration-500">
      <header
        className={cn(
          'relative flex h-12 w-full max-w-7xl items-center justify-between rounded-full border border-gray-200 bg-white/95 px-6 backdrop-blur-md transition-all duration-500 lg:h-14 lg:px-8',
          scrolled ? 'bg-white/80 shadow-apple' : 'shadow-none'
        )}
      >
        <Logo className="h-7 lg:h-8" />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300',
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
            className="hidden rounded-full bg-[#1A6B3C] px-5 py-2 text-[12px] font-bold text-white transition-all hover:bg-[#14552f] hover:shadow-apple-hover md:inline-flex items-center justify-center"
          >
            Order Now
          </Link>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 lg:hidden"
            type="button"
            onClick={() => setOpen((state) => !state)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
              className="absolute top-16 left-0 right-0 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-apple-hover lg:hidden"
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
