'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { productFilters, products, type ProductCategory } from '@/lib/products';
import { cn } from '@/lib/utils';

export function ProductFilterGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof productFilters)[number]>('All');

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'All') {
      return products;
    }

    return products.filter((product) => product.category === (activeFilter as ProductCategory));
  }, [activeFilter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {productFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-semibold transition',
              activeFilter === filter
                ? 'border-[#1A6B3C] bg-[#1A6B3C] text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-[#1A6B3C] hover:text-[#1A6B3C]',
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product, index) => {
          const comingSoon = product.status === 'Coming Soon';

          return (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className={cn(
                'glass-card overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-[#3f8a5b]',
                comingSoon ? 'opacity-75' : '',
              )}
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#edf5ef] via-[#eef4fb] to-[#ffffff] p-5 text-[#111111]">
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(26,107,60,0.08),transparent_48%)]" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-[#1A6B3C]">{product.heroLabel}</p>
                <h3 className="relative mt-3 text-xl font-semibold leading-tight">{product.name}</h3>
                <p className="relative mt-2 text-xs text-slate-600">{product.imageHint}</p>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">{product.category}</span>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]',
                    comingSoon ? 'bg-slate-100 text-slate-500' : 'bg-emerald-50 text-emerald-700',
                  )}
                >
                  {product.status}
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-600">{product.shortDescription}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {product.specs.slice(0, 3).map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F5C400]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}&inquiryType=Place%20an%20Order`}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    comingSoon
                      ? 'pointer-events-none bg-slate-100 text-slate-500'
                      : 'bg-[#1A6B3C] text-white hover:bg-[#14552f]',
                  )}
                >
                  Request a Quote
                </Link>
                <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-[#1B4F8A] hover:text-[#1A6B3C]">
                  View Product
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
