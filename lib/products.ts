export type ProductCategory = 'Blocks' | 'Raw Materials' | 'Coming Soon';

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  tagline: string;
  category: ProductCategory;
  status: 'In Stock' | 'Coming Soon';
  specs: string[];
  useCases: string[];
  heroLabel: string;
  imageHint: string;
};

export const products: Product[] = [
  {
    slug: 'interlocking-construction-block',
    name: 'Recycled Interlocking Block',
    tagline: 'High-performance construction from diverted plastic waste',
    shortDescription: '100% recycled plastic blocks designed for mortar-free, rapid, and sustainable construction.',
    description:
      'Envecoplast recycled interlocking blocks transform post-consumer plastic waste into high-performance structural components. By diverting tonnes of plastic from landfills and oceans, we provide a circular construction solution that is weather-resistant, durable, and significantly faster to install than traditional masonry.',
    category: 'Blocks',
    status: 'In Stock',
    specs: [
      '100% recycled polymer composition',
      'Interlocking profile for dry-stack assembly',
      'Zero-mortar required for shell works',
      'Diverts approx. 2.5kg of plastic per block',
    ],
    useCases: [
      'Eco-conscious developers building sustainable estates',
      'NGOs and institutions for rapid-response facilities',
      'Contractors seeking to reduce carbon footprint and cost',
    ],
    heroLabel: 'Circular Construction',
    imageHint: 'Recycled interlocking block stack on active construction site',
  },
  {
    slug: 'chips',
    name: 'Chips',
    tagline: 'Sorted and graded feedstock from post-consumer materials',
    shortDescription: 'Post-consumer sourced chips, sorted and graded for manufacturing reuse.',
    description:
      'Our chips are produced from responsibly sourced post-consumer materials and processed through strict sorting and grading workflows. They provide a dependable raw material stream for industrial users focused on circular production.',
    category: 'Raw Materials',
    status: 'In Stock',
    specs: [
      'Post-consumer sourced input stream',
      'Sorted and graded by material profile',
      'Bulk supply available for commercial orders',
      'Prepared for downstream processing',
    ],
    useCases: [
      'Manufacturers requiring recycled polymer input',
      'Processors seeking stable feedstock quality',
      'Circular economy projects and pilot plants',
    ],
    heroLabel: 'Industrial Input',
    imageHint: 'Sorted recycled chips in industrial processing trays',
  },
  {
    slug: 'pellets',
    name: 'Pellets',
    tagline: 'Consistent-grade recycled pellets for scalable production',
    shortDescription: 'Processed pellets with consistent grade and bulk availability.',
    description:
      'Envecoplast pellets deliver a stable, production-ready recycled material for extrusion, molding, and fabrication workflows. The process emphasizes consistency and traceability to support reliable manufacturing output.',
    category: 'Raw Materials',
    status: 'In Stock',
    specs: [
      'Processed for consistent grade output',
      'Production-ready for common molding workflows',
      'Bulk dispatch capability',
      'Quality-checked before dispatch',
    ],
    useCases: [
      'Factories seeking repeatable recycled inputs',
      'Fabricators building material-based products',
      'Institutional procurement for impact-led production',
    ],
    heroLabel: 'Production Grade',
    imageHint: 'Consistent recycled pellets prepared for bulk dispatch',
  },
  {
    slug: 'pavers',
    name: 'Pavers',
    tagline: 'Durable paving systems from recycled polymers',
    shortDescription: 'Road and compound paving options currently in development.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Product concept – launching Q3 2026',
  },
  {
    slug: 'roofing-tiles',
    name: 'Roofing Tiles',
    tagline: 'Lightweight roofing alternatives',
    shortDescription: 'Weather-resistant recycled roofing tiles in development.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Product concept – launching Q3 2026',
  },
  {
    slug: 'lumber',
    name: 'Lumber',
    tagline: 'Engineered polymer lumber for durable builds',
    shortDescription: 'Low-maintenance structural profiles in development.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Product concept – launching Q3 2026',
  },
  {
    slug: 'custom-molded-products',
    name: 'Custom Molded Products',
    tagline: 'Client-specific molded outputs',
    shortDescription: 'Custom tooling and molded products currently in planning.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Product concept – launching Q3 2026',
  },
];

export const liveProducts = products.filter((product) => product.status === 'In Stock');

export const productFilters: Array<'All' | ProductCategory> = ['All', 'Blocks', 'Raw Materials', 'Coming Soon'];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
