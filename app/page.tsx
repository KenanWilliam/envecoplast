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
      className={cn(
        "flex flex-col items-center px-8 text-center",
        !isLast && "border-r border-gray-100"
      )}
    >
      <p className="text-4xl font-bold tracking-tighter text-[#1A6B3C] md:text-5xl">
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

  // Sequential fade logic: individual elements react to different scroll ranges
  const eybrowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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

      {/* Hero Section - Option 2B Refined */}
      <section ref={heroRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 lg:px-8 lg:pt-40">
        <motion.div 
          style={{ scale: heroScale }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div style={{ opacity: eybrowOpacity }}>
            <Reveal delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Envecoplast Company Limited</p>
            </Reveal>
          </motion.div>
          
          <motion.div style={{ opacity: headingOpacity }}>
            <Reveal delay={0.2}>
              {/* Swapped content: Headline is now site.description, Subtitle is site.headline */}
              <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-7xl lg:text-[5.5rem]">
                {site.description}
              </h1>
            </Reveal>
          </motion.div>

          <motion.div style={{ opacity: subOpacity }}>
            <Reveal delay={0.3}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
                {site.headline}
              </p>
            </Reveal>
          </motion.div>

          <motion.div style={{ opacity: buttonsOpacity }}>
            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap justify-center gap-5">
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
          </motion.div>
        </motion.div>

        {/* High-Fidelity Focal - Option 2B */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03]">
           <div className="h-[80vh] w-[80vh] rounded-full border border-[#1A6B3C] blur-3xl" />
        </div>

        <motion.div 
          style={{ opacity: eybrowOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-gray-400" />
        </motion.div>
      </section>

      {/* Stats Bar - Option 3A */}
      <section className="relative z-20 -mt-10 flex justify-center px-6">
        <div className="glass-card flex w-full max-w-5xl flex-wrap justify-center divide-x divide-gray-100 rounded-[2.5rem] bg-white/80 py-10 shadow-apple backdrop-blur-xl md:flex-nowrap">
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
      <section className="section-shell overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Market Ready"
            title="Engineered materials for immediate impact"
            body="Our active production line delivers market-ready outputs for developers and industrial buyers."
          />
        </div>

        <div className="mt-20 flex w-full gap-8 overflow-x-auto pb-12 pl-[calc((100vw-80rem)/2+2rem)] pr-8 scrollbar-hide snap-x">
          {liveProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[32rem] w-[24rem] flex-shrink-0 snap-center overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-apple transition-all hover:shadow-apple-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-full flex-col p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1A6B3C]">{product.heroLabel}</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 group-hover:text-white transition-colors">{product.name}</h3>
                
                <div className="mt-auto flex flex-col opacity-0 transition-all translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm leading-relaxed text-white/80">{product.shortDescription}</p>
                  <Link href={`/products/${product.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-white underline underline-offset-8">
                    View Specifications <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gray-50/50" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Steps - Option 4A */}
      <section className="section-shell border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="The Journey" title="A clear four-step path to durability" />
          
          <div className="mt-24 grid gap-12 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} direction="right">
                <motion.div 
                  whileHover={{ rotateX: 5, rotateY: 5 }}
                  className="relative flex flex-col items-start p-2"
                >
                  <span className="absolute -top-12 -left-4 text-9xl font-bold text-gray-50 opacity-50 select-none">
                    0{index + 1}
                  </span>
                  <div className="relative z-10 mt-6 rounded-3xl bg-gray-50 p-4 transition-colors group-hover:bg-[#1A6B3C]/10">
                    <step.icon className="h-8 w-8 text-[#1A6B3C]" />
                  </div>
                  <h3 className="relative z-10 mt-8 text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="relative z-10 mt-4 text-base leading-relaxed text-gray-600">{step.summary}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Option 5B */}
      <section className="section-shell relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Strategic Edge" title="Built for speed, savings, and measurable impact" />
          
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {whyPanels.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-apple transition-all hover:shadow-apple-hover"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A6B3C]/0 to-[#1A6B3C]/0 transition-all duration-500 group-hover:from-[#1A6B3C]/5 group-hover:to-[#1B4F8A]/5" />
                  <div className="relative z-10">
                    <item.icon className="h-10 w-10 text-[#1A6B3C]" />
                    <h3 className="mt-8 text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{item.body}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Strip */}
      <section className="bg-gray-950 py-32 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">Our Manifesto</p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">We are not just recycling — we are redefining construction.</h2>
            <p className="mt-10 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">By transforming post-consumer plastic waste into certified construction materials, we're proving that sustainability and performance are not trade-offs.</p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-shell mx-auto w-full max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] px-10 py-20 text-white md:px-20 md:py-24">
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-4xl font-bold leading-tight md:text-5xl tracking-tight">Build Smarter.<br/>Build Sustainably.</h2>
                <p className="mt-6 max-w-lg text-lg text-white/80 font-medium">Contact us today to partner or place an order for market-ready recycled materials.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-gray-900 shadow-apple transition-all hover:bg-gray-100"
                >
                  Get In Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
