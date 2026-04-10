import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { homeStats, processSteps, whyPanels } from '@/lib/content';
import { liveProducts } from '@/lib/products';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Buy traceable recycled plastic chips, pellets, and interlocking construction blocks from Envecoplast Ltd, Kenya\'s leading plastic recycling and construction materials company.',
  alternates: {
    canonical: 'https://www.envecoplast.com',
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-gray-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.95),rgba(248,250,252,0.9)),url('https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(26,107,60,0.06),transparent_40%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[calc(100vh-5rem)] lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A6B3C]">Envecoplast Company Limited</p>
            <h1 className="mt-6 max-w-6xl text-5xl font-bold leading-[1.03] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              {site.headline}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-700">{site.description}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact?inquiryType=Place%20an%20Order"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#14552f]"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400"
              >
                Learn How It Works
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 inline-flex w-fit flex-col items-center gap-2 text-[#1A6B3C]">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-9 text-gray-900">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 md:grid-cols-4 lg:px-8">
          {homeStats.map((item) => (
            <div key={item.label} className="border-l border-gray-200 pl-4 first:border-l-0 first:pl-0">
              <p className="text-4xl font-bold text-[#F5C400]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-600">{item.label}</p>
              {item.qualifier && <p className="mt-2 text-xs text-gray-500">{item.qualifier}</p>}
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-[#eaf3ef] via-[#dce9f4] to-[#f7f7f7] p-5">
                  <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(26,107,60,0.08),transparent_45%)]" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B3C]">{product.heroLabel}</p>
                  <h3 className="relative mt-3 text-2xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-700">{product.shortDescription}</p>
                {product.specs.length > 0 && (
                  <p className="mt-3 text-xs font-medium text-gray-700 p-2 bg-gray-50 rounded">
                    <span className="text-[#1A6B3C] font-semibold">Spec:</span> {product.specs[0]}
                  </p>
                )}
                <Link href={`/products/${product.slug}`} className="mt-5 inline-block text-sm font-semibold text-[#1B4F8A] hover:text-[#1A6B3C]">
                  View Product
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          href="/products"
          className="mt-9 inline-flex rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:border-[#1A6B3C] hover:text-[#1A6B3C] hover:bg-gray-50"
        >
          Explore Full Catalog
        </Link>
      </section>

      <section className="section-shell border-y border-gray-200 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="A clear four-step path from discarded plastic to durable construction" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="glass-card h-full rounded-3xl p-6">
                  <p className="text-5xl font-semibold leading-none text-gray-400">0{index + 1}</p>
                  <step.icon className="mt-5 h-6 w-6 text-[#1A6B3C]" />
                  <h3 className="mt-5 text-2xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{step.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-9 inline-flex rounded-full bg-[#1B4F8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#163f6e] transition">
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
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          href="/why-us"
          className="mt-9 inline-flex rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:border-[#1A6B3C] hover:text-[#1A6B3C] hover:bg-gray-50"
        >
          Discover Why Us
        </Link>
      </section>

      <section className="bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] py-24 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/85 mb-4">Our Manifesto</p>
          <p className="text-4xl font-bold leading-tight md:text-5xl">We are not just recycling — we are redefining construction.</p>
          <p className="mt-6 text-base text-white/90 max-w-3xl mx-auto leading-relaxed">By transforming post-consumer plastic waste into durable, certified construction materials, we're proving that sustainability and performance are not trade-offs. They're opportunities.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-gradient-to-r from-[#1A6B3C] to-[#1B4F8A] p-10 text-white">
          <p className="text-4xl font-semibold leading-tight md:text-5xl">Build Smarter. Build Faster. Build Sustainably.</p>
          <p className="mt-3 max-w-2xl text-base text-white/90">Contact us today to partner or place an order.</p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
