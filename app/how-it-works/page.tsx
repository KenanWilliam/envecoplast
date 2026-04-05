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
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="From waste stream to construction site"
        body="A transparent production pipeline designed for quality, speed, and circular impact."
      />

      <div className="relative mt-14 space-y-8 border-l-2 border-[#1A6B3C]/20 pl-8">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <article className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="absolute -left-[2.6rem] top-8 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6B3C] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="flex items-start gap-4">
                <step.icon className="mt-1 h-6 w-6 text-[#1B4F8A]" />
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{step.title}</h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">{step.summary}</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-[#edf4ff] to-[#eef8f1] p-5 text-sm text-slate-600">
                Visual placeholder for step photography or operations media.
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
