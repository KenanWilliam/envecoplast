import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { Reveal } from '@/components/sections/reveal';
import { SectionHeading } from '@/components/section-heading';
import { buyerPersonas, whyPanels } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Why Us',
  description:
    'Discover why developers, contractors, institutions, and partners choose Envecoplast solutions.',
};

export default function WhyUsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Why Choose Envecoplast"
        title="Performance, economics, and impact in one system"
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {whyPanels.map((panel, index) => (
          <Reveal key={panel.title} delay={index * 0.04}>
            <article className="glass-card rounded-3xl p-7">
              <panel.icon className="h-7 w-7 text-[#1A6B3C]" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{panel.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">{panel.body}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-20">
        <SectionHeading eyebrow="Buyer Personas" title="Built for diverse procurement realities" />
        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {buyerPersonas.map((persona, index) => (
          <Reveal key={persona.title} delay={index * 0.05}>
            <article className="glass-card rounded-3xl p-6">
              <persona.icon className="h-6 w-6 text-[#1B4F8A]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{persona.title}</h3>
              {persona.ageRange && <p className="text-xs text-gray-500 font-medium mt-1">Age: {persona.ageRange}</p>}
              <p className="mt-2 text-sm leading-7 text-gray-700">{persona.body}</p>
            </article>
          </Reveal>
        ))}
        </section>
      </section>

      <section className="mt-20 border-t border-gray-200 pt-20">
        <div className="rounded-[2rem] bg-gray-50 p-10 border border-gray-200">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Trusted by Project Leaders</h3>
              <div className="mt-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F5C400] text-[#F5C400]" />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-700">Across 185+ completed projects, developers and contractors rely on Envecoplast for consistent quality and on-time delivery.</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl bg-white p-4 border border-gray-200">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1A6B3C]">Quality Assured</p>
                <p className="mt-2 text-sm font-medium text-gray-900">All materials tested for durability and consistency</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-gray-200">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1B4F8A]">Sustainable Impact</p>
                <p className="mt-2 text-sm font-medium text-gray-900">4,200+ tonnes of plastic diverted from landfill</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
