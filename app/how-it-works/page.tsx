import type { Metadata } from 'next';
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

      <div className="relative mt-14 space-y-8 border-l-2 border-[#d7e7dc] pl-8">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <article className="glass-card relative rounded-3xl p-7">
              <span className="absolute -left-[2.8rem] top-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e7dc] bg-[#1A6B3C] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="flex items-start gap-4">
                <step.icon className="mt-1 h-7 w-7 text-[#1A6B3C]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step 0{index + 1}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#111111]">{step.title}</h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">{step.summary}</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-[#f6faf7] to-[#f4f8ff] p-5 text-sm text-slate-600">
                Visual placeholder: process photography to be replaced with real facility shots.
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
