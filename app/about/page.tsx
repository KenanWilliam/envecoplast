'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { whyPanels } from '@/lib/content';
import { site } from '@/lib/site';

/**
 * Option 9B — The Values Mosaic
 * A "Bento-style" layout for company values where each tile has staggered reveals. 
 * The mission statement is a "sticky" center element that remains fixed while values scroll around it.
 */
export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Our Story</p>
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-8xl">
              Building a Circular Future.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bento Values Mosaic - Option 9B */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-rows-2">
             {/* Large Lead Tile */}
             <motion.div 
               whileHover={{ scale: 0.99 }}
               className="md:col-span-2 md:row-span-2 rounded-[3rem] bg-gray-950 p-12 text-white shadow-apple"
             >
                <Reveal>
                   <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Our Mission</h2>
                   <p className="mt-8 text-xl leading-relaxed text-gray-400">
                     To transform traceable post-consumer plastic waste from landfills into high performance, certified materials bridging the gap between environmental responsibility and industrial excellence.
                   </p>
                </Reveal>
             </motion.div>

             {/* Team Cards - Replaced whyPanels */}
             <div className="md:col-span-2 md:row-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
                <Reveal delay={0.1}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col h-full rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-apple"
                  >
                    <div className="h-32 w-32 rounded-3xl bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 font-bold">GA</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Grace Adera</h3>
                      <p className="text-[#1A6B3C] font-bold text-sm mb-4">Partner</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Grace Adera is a co-founder at Envecoplast, leading strategic partnerships and circular economy initiatives. Her focus is on scaling environmental impact through traceable waste-to-worth systems.
                      </p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal delay={0.2}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col h-full rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-apple"
                  >
                    <div className="h-32 w-32 rounded-3xl bg-gray-100 mb-6 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-400 font-bold">TS</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Ted Surname</h3>
                      <p className="text-[#1A6B3C] font-bold text-sm mb-4">Partner</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Ted is a co-founder at Envecoplast, overseeing industrial excellence and manufacturing operations. He ensures that every material produced meets rigorous certification and performance standards.
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
             </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-[#1A6B3C] py-32 text-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
           <Reveal>
             <h2 className="text-4xl font-bold leading-tight md:text-7xl tracking-tighter">
               Sustainability is not a trade-off. It's an opportunity.
             </h2>
             <div className="mt-12 h-1 w-24 mx-auto bg-white/20" />
             <p className="mt-12 text-xl text-white/80 leading-relaxed italic">
               "{site.tagline}"
             </p>
           </Reveal>
        </div>
      </section>
    </main>
  );
}
