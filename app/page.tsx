import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { homeStats, processSteps, whyPanels } from '@/lib/content';
import { liveProducts } from '@/lib/products';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Home',
  description: site.description,
};

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.92),rgba(246,248,251,0.84)),url('https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center" />
        <div className="brand-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(26,107,60,0.12),transparent_40%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[calc(100vh-5rem)] lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A6B3C]">Envecoplast Company Limited</p>
            <h1 className="mt-6 max-w-6xl text-5xl font-bold leading-[1.03] tracking-tight text-[#111111] md:text-6xl lg:text-7xl">
              {site.headline}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">{site.description}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact?inquiryType=Place%20an%20Order"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#14552f]"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-slate-50"
              >
                Learn How It Works
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 inline-flex w-fit flex-col items-center gap-2 text-slate-500">
            <span className="text-[11px] uppercase tracking-[0.24em]">Scroll</span>
            <span className="h-10 w-5 rounded-full border border-slate-300 p-1">
              <span className="block h-2 w-2 animate-bounce rounded-full bg-[#1A6B3C]" />
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-9 text-[#111111]">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 md:grid-cols-4 lg:px-8">
          {homeStats.map((item) => (
            <div key={item.label} className="border-l border-slate-200 pl-4 first:border-l-0 first:pl-0">
              <p className="text-4xl font-bold text-[#F5C400]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products Snapshot"
          title="Engineered materials ready for immediate project impact"
          body="Our active production line delivers market-ready outputs for developers, contractors, and industrial buyers."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {liveProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <article className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-[#3f8a5b]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#eaf3ef] via-[#dce9f4] to-[#f7f7f7] p-5">
                  <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(26,107,60,0.08),transparent_45%)]" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B3C]">{product.heroLabel}</p>
                  <h3 className="relative mt-3 text-2xl font-semibold text-[#111111]">{product.name}</h3>
                  <p className="relative mt-2 text-sm text-slate-600">{product.imageHint}</p>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">{product.shortDescription}</p>
                <Link href={`/products/${product.slug}`} className="mt-5 inline-block text-sm font-semibold text-[#1B4F8A] hover:text-[#1A6B3C]">
                  View Product
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          href="/products"
          className="mt-9 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:border-[#1A6B3C] hover:text-[#1A6B3C]"
        >
          Explore Full Catalog
        </Link>
      </section>

      <section className="section-shell border-y border-black/10 bg-[#f9fbfc]">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="A clear four-step path from discarded plastic to durable construction" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="glass-card h-full rounded-3xl p-6">
                  <p className="text-5xl font-semibold leading-none text-slate-500">0{index + 1}</p>
                  <step.icon className="mt-5 h-6 w-6 text-[#1A6B3C]" />
                  <h3 className="mt-5 text-2xl font-semibold text-[#111111]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{step.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/how-it-works"
            className="mt-9 inline-flex rounded-full bg-[#1B4F8A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163f6e]"
          >
            See Full Process
          </Link>
        </div>
      </section>

      <section className="section-shell mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Built for teams that need speed, savings, and measurable impact" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyPanels.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-[#356ea8]">
                <item.icon className="h-7 w-7 text-[#1A6B3C]" />
                <h3 className="mt-4 text-xl font-semibold text-[#111111]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          href="/why-us"
          className="mt-9 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:border-[#1A6B3C] hover:text-[#1A6B3C]"
        >
          Discover Why Us
        </Link>
      </section>

      <section className="bg-white py-24 text-[#111111]">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <p className="text-4xl font-semibold leading-tight md:text-6xl">&quot;We are not just recycling - we are redefining construction.&quot;</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] p-10 text-white">
          <p className="text-4xl font-semibold leading-tight md:text-5xl">Build Smarter. Build Faster. Build Sustainably.</p>
          <p className="mt-3 max-w-2xl text-base text-white/90">Contact us today to partner or place an order.</p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition hover:scale-[1.02]"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
