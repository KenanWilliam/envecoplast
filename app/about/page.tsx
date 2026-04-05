import type { Metadata } from 'next';
import { Reveal } from '@/components/sections/reveal';
import { SectionHeading } from '@/components/section-heading';
import { missionValues } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Envecoplast transforms plastic waste into high-quality construction materials across Kenya.',
};

const teamPlaceholders = [
  { name: 'Team Member 1', role: 'Operations Lead' },
  { name: 'Team Member 2', role: 'Manufacturing Lead' },
  { name: 'Team Member 3', role: 'Commercial Lead' },
  { name: 'Team Member 4', role: 'Sustainability Lead' },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
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
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-[#f4f6fa] to-[#e8edf5] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Before</p>
                <p className="mt-2 text-xl font-semibold text-slate-800">Unmanaged plastic waste streams</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#e9f8ef] to-[#dcedff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">After</p>
                <p className="mt-2 text-xl font-semibold text-slate-800">Durable construction materials</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {missionValues.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Team"
          title="People behind the impact"
          body="Replace these placeholders with leadership and operations photos before launch."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamPlaceholders.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.04}>
              <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#e9edf4] to-[#dde5ef]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
