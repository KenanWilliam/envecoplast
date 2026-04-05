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
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(17,17,17,0.7),rgba(17,17,17,0.45)),url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,196,0,0.3),transparent_32%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-20 lg:min-h-[calc(100vh-5rem)] lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C400]">Envecoplast Company Limited</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
              We Transform Post-Consumer Plastic Waste into Durable, Eco-Friendly Construction Materials
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Envecoplast Ltd transforms plastic waste into chips, pellets, and eco-friendly interlocking building blocks that make construction faster, cheaper, and more sustainable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?inquiryType=Place%20an%20Order"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#14552f]"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn How It Works
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 inline-flex w-fit flex-col items-center gap-2 text-white/85">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <span className="h-9 w-5 rounded-full border border-white/60 p-1">
              <span className="block h-2 w-2 animate-bounce rounded-full bg-white" />
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-8 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 md:grid-cols-4 lg:px-8">
          {homeStats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-[#F5C400]">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Products Snapshot"
          title="Built for practical impact on real construction projects"
          body="Our current production line focuses on market-ready products with immediate value for builders and industrial buyers."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {liveProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="rounded-2xl bg-gradient-to-br from-[#1B4F8A] via-[#1A6B3C] to-[#F5C400] p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">{product.heroLabel}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{product.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.shortDescription}</p>
                <Link href={`/products/${product.slug}`} className="mt-5 inline-block text-sm font-semibold text-[#1B4F8A] hover:underline">
                  View Product
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Link href="/products" className="mt-8 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
          Explore Full Catalog
        </Link>
      </section>

      <section className="border-y border-black/10 bg-[#f8fbf8] py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Four clear steps from collection to construction" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <step.icon className="h-6 w-6 text-[#1A6B3C]" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#1B4F8A]">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-8 inline-flex rounded-full bg-[#1B4F8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163f6e]">
            See Full Process
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="High-conviction outcomes for modern builders" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyPanels.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-[#1A6B3C]" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link href="/why-us" className="mt-8 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#1B4F8A] hover:text-[#1B4F8A]">
          Discover Why Us
        </Link>
      </section>

      <section className="bg-[#111111] py-24 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <p className="text-4xl font-semibold leading-tight md:text-5xl">"We are not just recycling - we are redefining construction."</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] p-10 text-white">
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
