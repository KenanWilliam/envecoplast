import type { Metadata } from 'next';
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
              <h2 className="mt-4 text-xl font-semibold text-[#111111]">{panel.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{panel.body}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-20">
        <SectionHeading eyebrow="Buyer Personas" title="Built for diverse procurement realities" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buyerPersonas.map((persona, index) => (
            <Reveal key={persona.title} delay={index * 0.05}>
              <article className="glass-card rounded-3xl p-6">
                <persona.icon className="h-6 w-6 text-[#1B4F8A]" />
                <h3 className="mt-4 text-lg font-semibold text-[#111111]">{persona.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{persona.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
