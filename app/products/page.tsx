import type { Metadata } from 'next';
import { ProductFilterGrid } from '@/components/products/product-filter-grid';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Envecoplast products, request quotes, and discover recycled construction materials ready for delivery.',
};

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Mini Marketplace"
        title="Product Catalog"
        body="Filter by category and request a quote directly from any product."
      />
      <div className="mt-10">
        <ProductFilterGrid />
      </div>
    </main>
  );
}
