'use client';

import { use, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/sections/reveal';
import { liveProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * Option 8A — The Split Narrative
 * 50/50 split layout where the left side is a "sticky" product image 
 * that changes as you scroll through features on the right. 
 * The CTA is a fixed-bottom "Purchase Bar" that appears dynamically.
 */
export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = liveProducts.find((p) => p.slug === slug);
  const [showPurchaseBar, setShowPurchaseBar] = useState(false);
  const containerRef = useRef(null);

  if (!product) notFound();

  useEffect(() => {
    const handleScroll = () => {
      setShowPurchaseBar(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white">
      <div ref={containerRef} className="relative mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        <Link href="/products" className="group mb-12 inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Back to Catalog
        </Link>

        <div className="lg:flex lg:gap-24">
          {/* Left Side: Sticky Image - Option 8A */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] lg:w-1/2">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-gray-50 p-12 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A6B3C]/5 to-[#1B4F8A]/5" />
                <div className="relative h-full w-full rounded-3xl border border-gray-100 bg-white/50 shadow-apple backdrop-blur-sm" />
                <p className="absolute top-12 left-12 text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">
                  {product.heroLabel}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Scrollable Content - Option 8A */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:py-12">
            <Reveal>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
                {product.name}
              </h1>
              <p className="mt-10 text-xl leading-relaxed text-gray-600">
                {product.description || product.shortDescription}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-16">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Technical Specifications</h3>
                <div className="mt-8 space-y-1">
                  {product.specs.map((spec, i) => {
                    const [label, ...val] = spec.split(':');
                    return (
                      <div key={spec} className="flex justify-between border-b border-gray-100 py-6">
                        <span className="text-sm font-bold text-gray-900">{label}</span>
                        <span className="text-sm text-gray-500">{val.join(':').trim() || 'Certified'}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-20 rounded-[2.5rem] bg-gray-50 p-10">
                 <h3 className="text-2xl font-bold text-gray-900">Key Benefits</h3>
                 <ul className="mt-8 space-y-6">
                   {['Eco-certified traceability', 'Superior durability vs traditional', 'Fast lead times', 'Reduced installation costs'].map(benefit => (
                     <li key={benefit} className="flex items-center gap-4 text-gray-700">
                       <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A6B3C]/10 text-[#1A6B3C]">
                         <Check className="h-4 w-4" />
                       </div>
                       <span className="font-medium">{benefit}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </Reveal>

            <div className="mt-20">
               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={`/contact?inquiryType=Place%20an%20Order&product=${product.name}`}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1A6B3C] py-5 text-lg font-bold text-white shadow-apple hover:bg-[#14552f] transition-all"
                  >
                    Request Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
               </motion.div>
            </div>
            
            <div className="h-32" /> {/* Extra scroll space */}
          </div>
        </div>
      </div>

      {/* Fixed-Bottom Purchase Bar - Option 8A */}
      <AnimatePresence>
        {showPurchaseBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-6 right-6 z-40 lg:bottom-10"
          >
            <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-gray-100 bg-white/90 p-4 shadow-apple-hover backdrop-blur-xl">
              <div className="hidden items-center gap-4 px-6 md:flex">
                 <p className="text-sm font-bold text-gray-900">{product.name}</p>
                 <div className="h-4 w-[1px] bg-gray-200" />
                 <p className="text-xs font-medium text-gray-500">{product.category}</p>
              </div>
              <Link
                href={`/contact?inquiryType=Place%20an%20Order&product=${product.name}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1A6B3C] py-3 text-sm font-bold text-white transition hover:bg-[#14552f] md:flex-none md:px-10"
              >
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
