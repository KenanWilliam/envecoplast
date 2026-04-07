import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/sections/reveal';
import { SectionHeading } from '@/components/section-heading';
import { processSteps } from '@/lib/content';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Follow Envecoplast process from plastic collection to quality-tested construction materials.',
};

export default function HowItWorksPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="From waste stream to construction site"
        body="A transparent production pipeline designed for quality, speed, and circular impact."
      />

      <div className="relative mt-14 space-y-8 border-l-2 border-gray-300 pl-8">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <article className="glass-card relative rounded-3xl p-7">
              <span className="absolute -left-[2.8rem] top-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-[#1A6B3C] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="flex items-start gap-4">
                <step.icon className="mt-1 h-7 w-7 text-[#1A6B3C]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Step 0{index + 1}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-900">{step.title}</h2>
                  <p className="mt-3 text-base leading-8 text-gray-700">{step.summary}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-gray-200 bg-gray-50 p-10">
        <h2 className="text-3xl font-semibold text-gray-900">Ready to use our materials in your next project?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">Get in touch with our team to discuss your project requirements, timing, and budget.</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#14552f] transition"
        >
          Contact Our Team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
