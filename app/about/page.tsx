import type { Metadata } from 'next';
import { Reveal } from '@/components/sections/reveal';
import { SectionHeading } from '@/components/section-heading';
import { missionValues } from '@/lib/content';
import { ArrowRight, Trash2, Hammer, Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Envecoplast — Plastic Recycling & Construction Materials',
  description:
    'Envecoplast Ltd transforms post-consumer plastic waste into durable construction materials. Learn about our mission, process, and impact across Kenya.',
  alternates: {
    canonical: 'https://www.envecoplast.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="About Us"
            title="Building the future of circular construction in Africa"
            body={
              <>
                <p>
                  Envecoplast is a forward-thinking manufacturing company transforming plastic waste into high-quality construction materials. We believe Africa&apos;s waste problem is also its greatest opportunity.
                </p>
                <p className="mt-4">
                  By converting discarded plastics into chips, pellets, and interlocking building blocks, we are reducing environmental pollution, lowering construction costs, and accelerating building timelines.
                </p>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1A6B3C] mb-3">Before</p>
                <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 bg-gradient-to-br from-[#edf0ed] to-[#f0f0f0] flex items-center justify-center">
                  <div className="text-center">
                    <Trash2 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Unmanaged plastic waste</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1B4F8A] mb-3">After</p>
                <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 bg-gradient-to-br from-[#eef5ef] to-[#f0f4ff] flex items-center justify-center">
                  <div className="text-center">
                    <Hammer className="h-12 w-12 text-[#1A6B3C] mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Durable construction materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              <ArrowRight className="h-5 w-5 text-[#1A6B3C]" />
              <p className="text-sm font-medium text-gray-600">Transformation through innovation</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 rounded-3xl bg-gray-50 p-10 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
        <p className="mt-4 text-lg leading-8 text-gray-700 max-w-3xl">
          Envecoplast was founded with a clear mission: to turn Kenya's mounting plastic waste challenge into a thriving circular manufacturing opportunity. Since our establishment, we've diverted over 4,200 tonnes of post-consumer plastic from landfills, completed 185+ construction projects, and partnered with contractors and developers across 21 counties. We're building the infrastructure for sustainable construction—one block, one chip, one pellet at a time.
        </p>
      </section>

      <section className="mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {missionValues.map((item, index) => {
            const icons = [Target, Eye, Heart];
            const Icon = icons[index];
            const colors = ['#1A6B3C', '#1B4F8A', '#DC2626'];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="glass-card rounded-3xl p-6 border-l-4" style={{ borderLeftColor: colors[index] }}>
                  <Icon className="h-8 w-8" style={{ color: colors[index] }} />
                  <h3 className="mt-4 text-2xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Team"
          title="People behind the impact"
        />
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-700">To learn more about our leadership and team, please reach out through our contact page or connect with us on LinkedIn.</p>
        </div>
      </section>
    </main>
  );
}
