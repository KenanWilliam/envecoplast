'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/sections/reveal';
import { site } from '@/lib/site';

/**
 * Restructured responsive About Page
 * Displays the full-width mission tile above side-by-side Grace and Edward profiles.
 * Grace's profile uses the local '/images/grace.jpeg' file.
 */
export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="page-shell pt-[clamp(7rem,10vw,9rem)]">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="fluid-eyebrow font-bold text-[#1A6B3C]">Our Story</p>
            <h1 className="mt-6 fluid-display-title font-bold tracking-tight text-gray-900">
              Building a Circular Future.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Bento Values Mosaic */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl page-shell">
          <div className="flex flex-col gap-6">
             {/* Large Lead Tile */}
             <motion.div 
               whileHover={{ scale: 0.995 }}
               className="w-full rounded-[3rem] bg-gray-950 p-10 text-white shadow-apple lg:p-12"
             >
                <Reveal>
                   <h2 className="fluid-section-title font-bold tracking-tight">Our Mission</h2>
                   <p className="mt-6 fluid-body text-gray-400">
                     To transform traceable post-consumer plastic waste from landfills into high performance, certified materials bridging the gap between environmental responsibility and industrial excellence.
                   </p>
                </Reveal>
             </motion.div>

             {/* Team Cards */}
             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Reveal delay={0.1}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex h-full flex-col rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-apple"
                  >
                    <div className="w-full max-w-[16rem] rounded-3xl bg-gray-100 mb-6 overflow-hidden">
                      <img 
                        src="/images/grace.jpeg" 
                        alt="Grace Adera" 
                        className="w-full h-auto" 
                      />
                    </div>
                    <div>
                      <h3 className="fluid-card-title font-bold text-gray-900">Grace Adera</h3>
                      <p className="mb-4 fluid-small font-bold text-[#1A6B3C]">Partner</p>
                      <p className="fluid-small text-gray-500">
                        Grace Adera is a serial entrepreneur with decades of experience in business management. She brings extensive management expertise in operations, partner relations, emerging market infrastructure, and strategic planning across diverse sectors, including FMCG, the circular economy (renewable energy and plastic recycling), and agriculture.
                      </p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal delay={0.2}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex h-full flex-col rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-apple"
                  >
                    <div className="w-full max-w-[16rem] rounded-3xl bg-gray-100 mb-6 overflow-hidden">
                      <img 
                        src="/images/ted.jpeg" 
                        alt="Edward Okoth" 
                        className="w-full h-auto" 
                      />
                    </div>
                    <div>
                      <h3 className="fluid-card-title font-bold text-gray-900">Edward Okoth</h3>
                      <p className="mb-4 fluid-small font-bold text-[#1A6B3C]">Partner</p>
                      <p className="fluid-small text-gray-500">
                        Edward Okoth is a seasoned entrepreneur and a recipient of the National 'Most Innovative Company of the year award'. He brings in a wealth of experience in Industrial production and manufacturing, risk management and compliance and business strategic planning. He has also been featured as a founder of Top 100 startups globally at the start-up Istanbul summit.
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
             </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-[#1A6B3C] py-12 text-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
           <Reveal>
             <h2 className="fluid-section-title font-bold tracking-tighter text-white">
               Sustainability is not a trade-off. It's an opportunity.
             </h2>
             <div className="mt-8 h-1 w-24 mx-auto bg-white/20" />
             <p className="mt-8 fluid-body italic text-white/80">
               "{site.tagline}"
             </p>
           </Reveal>
        </div>
      </section>
    </main>
  );
}
