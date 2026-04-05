import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { liveProducts, getProductBySlug } from '@/lib/products';

export function generateStaticParams() {
  return liveProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product || product.status === 'Coming Soon') {
    notFound();
  }

  const relatedProducts = liveProducts.filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_320px] lg:px-8">
      <div>
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-3xl bg-gradient-to-br from-[#1B4F8A] via-[#1A6B3C] to-[#F5C400] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">{product.heroLabel}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-3 text-lg text-white/90">{product.tagline}</p>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700">{product.description}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Features and Specs</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1A6B3C]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Use Cases</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {product.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1B4F8A]" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Related Products</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {relatedProducts.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.shortDescription}</p>
                <Link href={`/products/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#1B4F8A] hover:underline">
                  View Product
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Need a Quote?</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">Send your project requirements and volume estimates for pricing.</p>
          <div className="mt-5 space-y-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&inquiryType=Place%20an%20Order`}
              className="block rounded-full bg-[#1A6B3C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#14552f]"
            >
              Request a Quote
            </Link>
            <button type="button" className="w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700">
              Download Spec Sheet (PDF)
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}
