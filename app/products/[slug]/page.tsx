import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, liveProducts } from '@/lib/products';
import { ProductJsonLd } from '@/components/seo/json-ld';

export function generateStaticParams() {
  return liveProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const title = `${product.name} — Recycled Construction Material | Kenya`;
  const description = `${product.shortDescription} Available from Envecoplast Ltd, Kenya. Request a quote today.`;
  const url = `https://www.envecoplast.com/products/${product.slug}`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.name} Kenya`,
      `buy ${product.name}`,
      `${product.name} price`,
      `recycled ${product.name} supplier`,
      'Envecoplast',
      'recycled plastic construction materials Kenya',
    ],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.status === 'Coming Soon') {
    notFound();
  }

  const relatedProducts = liveProducts.filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_320px] lg:px-8">
      <ProductJsonLd product={product} />
      <div>
        <section className="glass-card rounded-[2rem] p-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#eef5ef] via-[#eef4fb] to-[#ffffff] p-8 text-gray-900">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(26,107,60,0.08),transparent_50%)]" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B3C]">{product.heroLabel}</p>
            <h1 className="relative mt-4 text-4xl font-semibold tracking-tight">{product.name}</h1>
            <p className="relative mt-3 text-lg text-gray-700">{product.tagline}</p>
            <p className="relative mt-6 max-w-xl text-sm text-gray-700">{product.imageHint}</p>
          </div>

          <p className="mt-6 text-base leading-8 text-gray-700">{product.description}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Features and Specs</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-200">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900 border-r border-gray-200">{idx === 0 ? 'Dimensions' : idx === 1 ? 'Material' : idx === 2 ? 'Performance' : 'Feature'}</td>
                        <td className="py-3 px-4 text-gray-700">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Use Cases</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
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
          <h2 className="text-2xl font-semibold text-gray-900">Related Products</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {relatedProducts.map((item) => (
              <article key={item.slug} className="glass-card rounded-3xl p-5">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.shortDescription}</p>
                <Link href={`/products/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#1B4F8A] hover:text-[#1A6B3C]">
                  View Product
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="glass-card rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-gray-900">Need a Quote?</h2>
          <p className="mt-2 text-sm leading-7 text-gray-700">Send project requirements and expected volume for a tailored quotation.</p>
          <div className="mt-5 space-y-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&inquiryType=Place%20an%20Order`}
              className="block rounded-full bg-[#1A6B3C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#14552f]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}
