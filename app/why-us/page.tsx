'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { whyPanels } from '@/lib/content';
import { Check, X } from 'lucide-react';

/**
 * Option 11A — The Comparison Table
 * An ultra-clean, Apple-style comparison grid (Our Blocks vs. Traditional). 
 * Features "Checkmarks" that animate in with a "pop" physics effect.
 */
export default function WhyUsPage() {
  const comparison = [
    { feature: 'Traceable Supply Chain', envecoplast: true, traditional: false },
    { feature: 'Quality Material Certification', envecoplast: true, traditional: false },
    { feature: 'Polymer Purity', envecoplast: '99%+', traditional: 'Variable' },
    { feature: 'Monthly Capacity', envecoplast: '500T+', traditional: 'Limited' },
    { feature: 'Fulfillment Lead-time', envecoplast: '72 Hours', traditional: '7-14 Days' },
    { feature: 'Industrial Reliability', envecoplast: 'Consistent', traditional: 'Baseline' },
  ];

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Why Us</p>
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-8xl">
              Industrial Reliability. Circular Excellence.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Comparison Grid - Option 11A */}
      <section className="section-shell">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
             <div className="overflow-hidden rounded-[3rem] border border-gray-100 bg-white shadow-apple">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-10 py-8 text-xs font-bold uppercase tracking-widest text-gray-400">Parameter</th>
                      <th className="px-10 py-8 text-center text-xl font-bold text-[#1A6B3C]">Envecoplast</th>
                      <th className="px-10 py-8 text-center text-xl font-bold text-gray-400">Traditional</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {comparison.map((row, i) => (
                      <tr key={row.feature} className="group hover:bg-gray-50/30 transition-colors">
                        <td className="px-10 py-8 font-bold text-gray-900">{row.feature}</td>
                        <td className="px-10 py-8 text-center">
                           <div className="flex justify-center">
                             {typeof row.envecoplast === 'boolean' ? (
                               <motion.div 
                                 initial={{ scale: 0 }} 
                                 whileInView={{ scale: 1 }} 
                                 viewport={{ once: true }}
                                 transition={{ type: 'spring', delay: i * 0.1 }}
                                 className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6B3C] text-white"
                               >
                                 <Check className="h-5 w-5" />
                               </motion.div>
                             ) : (
                               <span className="font-bold text-[#1A6B3C]">{row.envecoplast}</span>
                             )}
                           </div>
                        </td>
                        <td className="px-10 py-8 text-center">
                           <div className="flex justify-center">
                             {typeof row.traditional === 'boolean' ? (
                               <X className="h-6 w-6 text-gray-300" />
                             ) : (
                               <span className="font-medium text-gray-500">{row.traditional}</span>
                             )}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Why Us Cards (Redux) */}
      <section className="section-shell bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {whyPanels.map((panel, index) => (
               <Reveal key={panel.title} delay={index * 0.1}>
                 <div className="glass-card rounded-[2.5rem] p-12 hover:shadow-apple-hover">
                   <panel.icon className="h-10 w-10 text-[#1A6B3C]" />
                   <h3 className="mt-10 text-3xl font-bold text-gray-900">{panel.title}</h3>
                   <p className="mt-6 text-lg leading-relaxed text-gray-500">{panel.body}</p>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
