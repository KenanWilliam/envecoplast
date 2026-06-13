'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, animate, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { homeStats, processSteps, whyPanels } from '@/lib/content';
import { liveProducts } from '@/lib/products';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

/**
 * Counter Component for Option 3A
 */
function Counter({ value, label, qualifier, isLast }: { value: string, label: string, qualifier?: string, isLast: boolean }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    return rounded.onChange((v) => setDisplayValue(v.toString()));
  }, [rounded]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, numericValue, { duration: 2, ease: "easeOut" });
      }}
      className="flex flex-col items-center px-8 py-6 md:py-0 text-center w-full md:w-1/3"
    >
      <p className="fluid-card-title font-bold tracking-tighter text-[#1A6B3C]">
        {displayValue}{suffix}
      </p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{label}</p>
      {qualifier && <p className="mt-1 text-[9px] text-gray-400">{qualifier}</p>}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  return (
    <main className="bg-white">
      {/* Scroll Progress Line - Option 2B */}
      <motion.div 
        className="fixed right-4 top-1/2 z-50 h-32 w-[1px] -translate-y-1/2 bg-gray-200"
        style={{ originY: 0 }}
      >
        <motion.div 
          className="h-full w-full bg-[#1A6B3C]" 
          style={{ scaleY: scrollYProgress }}
        />
      </motion.div>

      {/* Hero Section - Perfectly Centered & Dynamic */}
      <section ref={heroRef} className="relative flex flex-col overflow-hidden page-shell pb-12 md:pb-16">
        {/* 1. Nav Spacer - Defines the top boundary */}
        <div className="h-16 md:h-20 lg:h-24" />

        {/* 2. Main Content Area - Equally centered in remaining space */}
        <div 
          className="relative z-10 flex flex-1 flex-col items-center justify-center text-center max-w-7xl mx-auto w-full mt-10 md:mt-16"
        >
          <div>
            <Reveal delay={0.1}>
              <p className="text-[clamp(0.6rem,1.5vh,0.75rem)] font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">
                Envecoplast Company Limited
              </p>
            </Reveal>
          </div>
          
          <div className="mt-[2vh] mb-[1vh]">
            <Reveal delay={0.2}>
              <h1 className="max-w-5xl text-[clamp(2rem,8vh,3.5rem)] font-bold leading-[1.15] tracking-tight text-gray-900 text-center">
                {site.headline}
              </h1>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.3}>
              <p className="max-w-3xl text-[clamp(0.9rem,2.2vh,1.125rem)] leading-relaxed text-gray-600 text-center">
                {site.description}
              </p>
            </Reveal>
          </div>

          <div className="mt-[4vh]">
            <Reveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-5">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact?inquiryType=Place%20an%20Order"
                    className="btn-shimmer relative inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-10 py-4 text-sm font-bold text-white shadow-apple transition-all hover:bg-[#14552f] hover:shadow-apple-hover"
                  >
                    Order Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-10 py-4 text-sm font-bold text-gray-900 shadow-apple transition-all hover:border-gray-300 hover:bg-gray-50"
                  >
                    Learn How It Works
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Bottom Spacer & Scroll Hint */}
        <div 
          className="relative z-10 pb-12 mt-12 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Explore</p>
          <ChevronDown className="h-5 w-5 animate-bounce text-[#1A6B3C]" />
        </div>

        {/* High-Fidelity Focal Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] overflow-hidden">
           <div className="h-[min(80vh,80vw)] w-[min(80vh,80vw)] rounded-full border border-[#1A6B3C] blur-3xl" />
        </div>
      </section>

      {/* Stats Bar - Option 3A */}
      <section className="relative z-20 mt-0 mb-8 flex justify-center page-shell">
        <div className="glass-card flex w-full max-w-5xl flex-wrap justify-center divide-y divide-gray-100 md:divide-y-0 md:divide-x divide-gray-100 rounded-[2.5rem] bg-white/80 py-8 shadow-apple backdrop-blur-xl md:flex-nowrap">
          {homeStats.map((item, index) => (
            <Counter 
              key={item.label} 
              value={item.value} 
              label={item.label} 
              qualifier={item.qualifier}
              isLast={index === homeStats.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Product Preview Strip - Option 6B */}
      <section className="section-shell">
        <div className="mx-auto max-w-7xl page-shell">
          <SectionHeading
            eyebrow="Market Ready"
            title="Recycled materials for immediate manufacturing"
            body="Our active production line delivers market-ready outputs for developers and industrial buyers."
          />

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {liveProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[28rem] sm:h-[32rem] w-full overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-apple transition-all hover:shadow-apple-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-full flex-col p-10">
                  <p className="fluid-small font-bold uppercase tracking-widest text-[#1A6B3C]">{product.heroLabel}</p>
                  <h3 className="mt-4 fluid-card-title font-bold tracking-tight text-gray-900 group-hover:text-white transition-colors">{product.name}</h3>
                  
                  <div className="mt-auto flex flex-col opacity-0 transition-all translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="fluid-body text-white/80">{product.shortDescription}</p>
                    <Link href={`/products/${product.slug}`} className="mt-6 inline-flex items-center gap-2 fluid-small font-bold text-white underline underline-offset-8">
                      View Specifications <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 -z-10 bg-gray-50/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Option 4A */}
      <section className="section-shell border-y border-gray-100 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl page-shell">
          <SectionHeading eyebrow="The Journey" title="A clear five-step path to industrial excellence" />
          
          <div className="mt-8 grid gap-10 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} direction="right">
                <motion.div 
                  whileHover={{ rotateX: 5, rotateY: 5 }}
                  className="relative flex flex-col items-start p-2"
                >
                  <span className="absolute -top-12 -left-4 text-[clamp(4.5rem,10vw,7rem)] font-bold text-gray-50 opacity-50 select-none">
                    0{index + 1}
                  </span>
                  <div className="relative z-10 mt-6 rounded-3xl bg-gray-50 p-4 transition-colors group-hover:bg-[#1A6B3C]/10">
                    <step.icon className="h-8 w-8 text-[#1A6B3C]" />
                  </div>
                  <h3 className="relative z-10 mt-8 text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="relative z-10 mt-2 text-sm text-gray-500">{step.summary}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Option 5B */}
      <section className="section-shell relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl page-shell">
          <SectionHeading eyebrow="Strategic Edge" title="Built for scale, quality, and measurable impact" />
          
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {whyPanels.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-apple transition-all hover:shadow-apple-hover"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A6B3C]/0 to-[#1A6B3C]/0 transition-all duration-500 group-hover:from-[#1A6B3C]/5 group-hover:to-[#1B4F8A]/5" />
                  <div className="relative z-10">
                    <item.icon className="h-10 w-10 text-[#1A6B3C]" />
                    <h3 className="mt-8 text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{item.body}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Strip */}
      <section className="bg-gray-950 py-24 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="mb-6 fluid-eyebrow font-bold text-gray-400">Our Manifesto</p>
            <h2 className="fluid-section-title font-bold tracking-tight">We are not just recycling — we are redefining industrial supply.</h2>
            <p className="mx-auto mt-8 max-w-3xl fluid-body text-gray-400">By transforming post-consumer plastic waste into high-performance industrial raw materials, we're proving that sustainability and industrial excellence are not trade-offs.</p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-shell mx-auto w-full max-w-7xl page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] px-8 py-16 text-white md:px-16 md:py-20">
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="fluid-section-title font-bold tracking-tight text-white">Scale Smarter.<br/>Source Sustainably.</h2>
                <p className="mt-6 max-w-lg fluid-body font-medium text-white/80">Contact us today to secure high-volume, traceable recycled feedstock for your industrial production line.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 fluid-small font-bold text-[#1A6B3C] shadow-apple transition-all hover:bg-gray-100"
                >
                  <span className="text-[#1A6B3C]">Get In Touch</span>
                  <ArrowRight className="h-5 w-5 text-[#1A6B3C]" />
                </Link>
              </motion.div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
