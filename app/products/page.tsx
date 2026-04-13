'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { liveProducts } from '@/lib/products';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

/**
 * Option 7A — The Segmented Control
 * An Apple-style horizontal pill switcher with a sliding background highlight. 
 * Card designs feature 1px borders that glow green on hover.
 */
export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Construction', 'Raw Materials'];

  const filteredProducts = liveProducts.filter(product => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Construction') return product.category === 'Blocks';
    if (activeFilter === 'Raw Materials') return product.category === 'Raw Materials';
    return true;
  });

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
           <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Our Catalog</p>
            <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-8xl">
              Engineered for Sustainability.
            </h1>
          </Reveal>

          {/* Segmented Control - Option 7A */}
          <div className="mt-20 flex justify-center">
            <div className="relative flex rounded-full bg-gray-50 p-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300",
                    activeFilter === filter ? "text-white" : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-[#1A6B3C] shadow-apple"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-24 grid gap-8 md:grid-cols-3 pb-32">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/products/${product.slug}`} className="group block h-full">
                    <article className="glass-card flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 p-8 transition-all duration-500 hover:border-[#1A6B3C]/40 hover:shadow-apple-hover">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A6B3C]/5 to-[#1B4F8A]/5" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                           {/* Product Illustration / Placeholder */}
                           <div className="text-center">
                             <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Preview</p>
                           </div>
                        </div>
                        {/* In-stock Badge - Option 7A */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900">Ready to Ship</span>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col flex-grow">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[#1A6B3C]">
                          {product.name}
                        </h3>
                        <p className="mt-4 line-clamp-2 text-base leading-relaxed text-gray-500">
                          {product.shortDescription}
                        </p>
                        
                        <div className="mt-auto pt-8">
                          <div className="flex flex-wrap gap-2">
                             {product.specs.slice(0, 2).map(spec => (
                               <span key={spec} className="rounded-full bg-gray-50 px-3 py-1 text-[10px] font-bold text-gray-500">
                                 {spec}
                               </span>
                             ))}
                          </div>
                          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:translate-x-2 transition-transform">
                             View Product <ArrowRight className="h-4 w-4 text-[#1A6B3C]" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
