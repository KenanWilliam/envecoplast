'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { navLinks } from '@/lib/content';
import { Logo } from '@/components/logo';

/**
 * Option 14A — The Columnar Grid
 * Four perfectly spaced columns with ultra-fine (12px) labels. 
 * The logo is oversized and monochromatic, serving as a watermark. 
 * Hovering over links triggers a "slide-right" animation (4px).
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-10 opacity-80" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-gray-500">
              {site.tagline}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Navigation</h4>
            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link href={link.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Legal</h4>
            <ul className="mt-6 space-y-4">
              <li>
                <motion.div whileHover={{ x: 4 }}>
                  <Link href="/privacy-policy" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                    Privacy Policy
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }}>
                  <Link href="/terms" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                    Terms of Service
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Contact</h4>
            <ul className="mt-6 space-y-4">
              <li className="text-sm text-gray-600">{site.location}</li>
              <li className="text-sm font-bold text-gray-900">{site.contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Oversized Monochromatic Logo Watermark - Option 14A */}
        <div className="pointer-events-none absolute -bottom-16 -right-16 select-none opacity-[0.03]">
          <h2 className="text-[20rem] font-bold leading-none tracking-tighter text-gray-900">
            ENV
          </h2>
        </div>

        <div className="mt-24 border-t border-gray-100 pt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-8">
             {/* Social placeholders could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
