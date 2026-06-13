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
    <footer className="relative overflow-hidden border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl page-shell">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-10" />
            <p className="mt-6 max-w-xs fluid-small text-gray-500">
              {site.tagline}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="fluid-small font-bold uppercase tracking-[0.2em] text-gray-400">Navigation</h4>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link href={link.href} className="fluid-small font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="fluid-small font-bold uppercase tracking-[0.2em] text-gray-400">Legal</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <motion.div whileHover={{ x: 4 }}>
                  <Link href="/privacy-policy" className="fluid-small font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                    Privacy Policy
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }}>
                  <Link href="/terms" className="fluid-small font-medium text-gray-600 transition-colors hover:text-[#1A6B3C]">
                    Terms of Service
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="fluid-small font-bold uppercase tracking-[0.2em] text-gray-400">Contact</h4>
            <ul className="mt-6 space-y-3">
              <li className="fluid-small text-gray-600">{site.location}</li>
              <li className="fluid-small font-bold text-gray-900">{site.contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="fluid-small text-gray-400">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <span className="hidden md:inline text-gray-300">•</span>
            <p className="fluid-small text-gray-400">
              Molded from recycled pixels by{' '}
              <a 
                href="https://www.linkedin.com/in/kenanwilliam/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-500 hover:text-[#1A6B3C] transition-colors underline underline-offset-4"
              >
                Kenan William
              </a>
            </p>
          </div>
          <div className="flex gap-8">
             {/* Social placeholders could go here */}
          </div>
        </div>
      </div>

      {/* Oversized Monochromatic Logo Watermark */}
      <div className="pointer-events-none absolute bottom-0 translate-y-[25%] left-6 right-6 select-none text-center lg:left-8 lg:right-8">
        <h2 
          style={{
            textShadow: [
              '-1px -1px 0px rgba(17, 17, 17, 0.05)',
              '-1px -2px 1px rgba(17, 17, 17, 0.03)',
              '-2px -3px 3px rgba(17, 17, 17, 0.01)',
              '1px 1px 0px rgba(255, 255, 255, 0.6)',
              '2px 2px 1px rgba(255, 255, 255, 0.4)',
              '3px 4px 3px rgba(255, 255, 255, 0.2)'
            ].join(', ')
          }}
          className="text-[clamp(1.75rem,10vw,11rem)] font-black leading-none tracking-tighter text-[#f8f8f8] [-webkit-text-stroke:0.5px_rgba(17,17,17,0.01)]"
        >
          envecoplast
        </h2>
      </div>
    </footer>
  );
}
