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
    slug: 'interlocking-plastic-construction-block',
    name: 'Interlocking Plastic Construction Block',
    tagline: 'Fast-build blocks for resilient projects',
    shortDescription: 'No mortar required, weather resistant, and designed for rapid construction.',
    description:
      'Envecoplast interlocking blocks are engineered to accelerate construction while reducing material waste and site labor. The lock-and-stack format makes installations cleaner, faster, and more predictable across housing, schools, and utility structures.',
    category: 'Blocks',
    status: 'In Stock',
    specs: [
      'Interlocking profile for dry-stack assembly',
      'Weather-resistant recycled polymer blend',
      'Reduced mortar and labor requirements',
      'Consistent dimensions for fast site work',
    ],
    useCases: [
      'Real estate developers reducing build timelines',
      'Contractors executing high-speed shell works',
      'Institutions building affordable facilities',
    ],
    heroLabel: 'Flagship Block System',
    imageHint: 'Interlocking block stack on active construction site',
  },
  {
    slug: 'plastic-chips',
    name: 'Plastic Chips',
    tagline: 'Sorted and graded feedstock from post-consumer plastic',
    shortDescription: 'Post-consumer sourced chips, sorted and graded for manufacturing reuse.',
    description:
      'Our plastic chips are produced from responsibly sourced post-consumer materials and processed through strict sorting and grading workflows. They provide a dependable raw material stream for industrial users focused on circular production.',
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
    slug: 'plastic-pellets',
    name: 'Plastic Pellets',
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
      'Fabricators building plastic-based products',
      'Institutional procurement for impact-led production',
    ],
    heroLabel: 'Production Grade',
    imageHint: 'Consistent recycled pellets prepared for bulk dispatch',
  },
  {
    slug: 'plastic-pavers',
    name: 'Plastic Pavers',
    tagline: 'Durable paving systems from recycled polymers',
    shortDescription: 'Road and compound paving options currently in development.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Future product concept placeholder',
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
    imageHint: 'Future product concept placeholder',
  },
  {
    slug: 'plastic-lumber',
    name: 'Plastic Lumber',
    tagline: 'Engineered polymer lumber for durable builds',
    shortDescription: 'Low-maintenance structural profiles in development.',
    description: 'Coming soon product line.',
    category: 'Coming Soon',
    status: 'Coming Soon',
    specs: ['Coming soon'],
    useCases: ['Coming soon'],
    heroLabel: 'Coming Soon',
    imageHint: 'Future product concept placeholder',
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
    imageHint: 'Future product concept placeholder',
  },
];

export const liveProducts = products.filter((product) => product.status === 'In Stock');

export const productFilters: Array<'All' | ProductCategory> = ['All', 'Blocks', 'Raw Materials', 'Coming Soon'];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
