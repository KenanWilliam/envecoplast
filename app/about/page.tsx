'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { whyPanels } from '@/lib/content';
import { site } from '@/lib/site';

/**
 * Option 9B — The Values Mosaic (Fluid Refined)
 */
export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="text-[var(--font-xs)] font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Our Story</p>
            <h1 className="mt-8 text-gray-900">
              Building a Circular Future.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bento Values Mosaic - Fluid Grid */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-[var(--container-gap)] md:grid-cols-4 lg:grid-rows-2">
             {/* Large Lead Tile */}
             <motion.div 
               whileHover={{ scale: 0.99 }}
               className="md:col-span-2 md:row-span-2 rounded-[3rem] bg-gray-950 p-[var(--container-gap)] text-white shadow-apple"
             >
                <Reveal>
                   <h2 className="text-[var(--font-3xl)] font-bold tracking-tight">Our Mission</h2>
                   <p className="mt-8 text-[var(--font-lg)] leading-relaxed text-gray-400">
                     To transform post-consumer plastic waste into high-performance, certified construction materials, bridging the gap between environmental responsibility and industrial excellence.
                   </p>
                </Reveal>
             </motion.div>

             {/* Staggered Bento Tiles */}
             {whyPanels.map((item, index) => (
               <Reveal key={item.title} delay={index * 0.1}>
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="flex h-full flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-[var(--container-gap)] shadow-apple"
                 >
                    <item.icon className="h-8 w-8 text-[#1A6B3C]" />
                    <div className="mt-8">
                      <h3 className="text-[var(--font-xl)] font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-3 text-[var(--font-base)] leading-relaxed text-gray-500">{item.body}</p>
                    </div>
                 </motion.div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A6B3C] py-[var(--section-padding)] text-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
           <Reveal>
             <h2 className="text-[var(--font-3xl)] font-bold leading-tight md:text-[var(--font-huge)] tracking-tighter">
               Sustainability is not a trade-off. It's an opportunity.
             </h2>
             <div className="mt-12 h-1 w-24 mx-auto bg-white/20" />
             <p className="mt-12 text-[var(--font-xl)] text-white/80 leading-relaxed italic">
               "{site.tagline}"
             </p>
           </Reveal>
        </div>
      </section>
    </main>
  );
}
