import type { Metadata } from 'next';
import { ProductFilterGrid } from '@/components/products/product-filter-grid';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Products — Recycled Plastic Chips, Pellets & Building Blocks',
  description:
    'Order recycled plastic chips, pellets, and interlocking construction blocks from Envecoplast. Bulk supply available. Fast dispatch across Kenya.',
  keywords: [
    'buy recycled plastic Kenya',
    'recycled chips pellets blocks Kenya',
    'plastic construction materials price Kenya',
    'interlocking block supplier Nairobi',
  ],
  alternates: {
    canonical: 'https://www.envecoplast.com/products',
  },
};

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Mini Marketplace"
        title="Product Catalog"
        body="Filter by category, review key specs, and request a quote instantly."
      />
      <div className="mt-10">
        <ProductFilterGrid />
      </div>
    </main>
  );
}
