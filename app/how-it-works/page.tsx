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
      <section className="page-shell pt-[clamp(7rem,10vw,9rem)]">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="fluid-eyebrow font-bold text-[#1A6B3C]">Our Process</p>
            <h1 className="mt-6 fluid-display-title font-bold tracking-tight text-gray-900">
              From Waste to Worth.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Organic Floating Bubbles - Option 10B */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl page-shell">
          <div className="flex flex-col gap-12">
             {processSteps.map((step, index) => (
                <Reveal key={step.title} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className={`flex flex-col items-center gap-6 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                     {/* Floating Bubble */}
                     <motion.div 
                       animate={{ y: [0, -10, 0] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="relative h-48 w-48 md:h-64 md:w-64 flex-shrink-0"
                     >
                        <div className="absolute inset-0 rounded-full bg-gray-50 shadow-apple flex items-center justify-center p-6">
                           <div className="text-center">
                             <step.icon className="h-8 w-8 mx-auto text-[#1A6B3C]" />
                              <p className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold text-gray-200">0{index + 1}</p>
                           </div>
                        </div>
                     </motion.div>

                     {/* Step Description */}
                     <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="mt-3 text-sm md:text-base text-gray-600">{step.summary}</p>
                        
                        <button 
                          onClick={() => setActiveStep(index)}
                          className="mt-5 inline-flex items-center gap-3 font-bold text-[#1A6B3C] hover:underline underline-offset-8"
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
              
                <div className="flex h-full flex-col items-center justify-center p-12 text-center text-white md:p-16">
                  <h2 className="fluid-section-title font-bold text-white">{processSteps[activeStep].title}</h2>
                  <p className="mt-6 fluid-body text-gray-400">Technical video/demo would play here.</p>
              </div>
           </motion.div>
        </div>
      )}
    </main>
  );
}
