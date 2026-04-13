'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { processSteps } from '@/lib/content';
import { useState } from 'react';
import { X, PlayCircle } from 'lucide-react';

/**
 * Option 10B — The Organic Flow
 * Steps are arranged in a fluid path where elements feel like floating bubbles. 
 * Interaction: users can click "Deep Dive" to reveal a technical video/modal.
 */
export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Our Process</p>
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-8xl">
              From Waste to Worth.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Organic Floating Bubbles - Option 10B */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-32">
             {processSteps.map((step, index) => (
               <Reveal key={step.title} direction={index % 2 === 0 ? 'right' : 'left'}>
                 <div className={`flex flex-col items-center gap-12 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Floating Bubble */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative h-96 w-96 flex-shrink-0"
                    >
                       <div className="absolute inset-0 rounded-full bg-gray-50 shadow-apple flex items-center justify-center p-12">
                          <div className="text-center">
                            <step.icon className="h-12 w-12 mx-auto text-[#1A6B3C]" />
                            <p className="mt-8 text-6xl font-bold text-gray-200">0{index + 1}</p>
                          </div>
                       </div>
                    </motion.div>

                    {/* Step Description */}
                    <div className="flex-1">
                       <h3 className="text-4xl font-bold text-gray-900">{step.title}</h3>
                       <p className="mt-8 text-xl leading-relaxed text-gray-600">{step.summary}</p>
                       
                       <button 
                         onClick={() => setActiveStep(index)}
                         className="mt-10 inline-flex items-center gap-3 font-bold text-[#1A6B3C] hover:underline underline-offset-8"
                       >
                         <PlayCircle className="h-5 w-5" />
                         Technical Deep Dive
                       </button>
                    </div>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive Modal - Option 10B */}
      {activeStep !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-[3rem] bg-gray-900 shadow-apple-hover"
           >
              <button 
                onClick={() => setActiveStep(null)}
                className="absolute top-8 right-8 z-10 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex h-full flex-col items-center justify-center p-20 text-center text-white">
                 <h2 className="text-4xl font-bold">{processSteps[activeStep].title}</h2>
                 <p className="mt-6 text-xl text-gray-400">Technical video/demo would play here.</p>
              </div>
           </motion.div>
        </div>
      )}
    </main>
  );
}
