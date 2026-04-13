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
    slug: 'chips',
    name: 'Plastic Chips',
    tagline: 'High-purity recycled feedstock for industrial manufacturing',
    shortDescription: 'Precision-sorted and crushed recycled plastic chips, ready for production.',
    description:
      'Our recycled plastic chips are the result of a rigorous sorting and processing workflow. We transform post-consumer plastic into high-purity industrial feedstock, providing a reliable and sustainable alternative to virgin polymers for manufacturers focused on circular production.',
    category: 'Raw Materials',
    status: 'In Stock',
    specs: [
      '100% post-consumer recycled content',
      'Precision-sorted by polymer type (HDPE, PP, etc.)',
      'Consistent chip size for easy processing',
      'Bulk supply available for commercial orders',
    ],
    useCases: [
      'Manufacturers requiring high-quality recycled input',
      'Industrial processors seeking stable feedstock',
      'Circular economy projects and pilot plants',
    ],
    heroLabel: 'Industrial Grade',
    imageHint: 'Sorted recycled chips in industrial processing trays',
  },
  {
    slug: 'pellets',
    name: 'Plastic Pellets',
    tagline: 'Production-ready recycled pellets for scalable manufacturing',
    shortDescription: 'Uniform recycled pellets optimized for extrusion and molding workflows.',
    description:
      'Envecoplast recycled pellets deliver a stable, uniform material for advanced manufacturing. By processing crushed chips into high-quality pellets, we enable factories to seamlessly integrate recycled content into their existing production lines without compromising on quality.',
    category: 'Raw Materials',
    status: 'In Stock',
    specs: [
      'Uniform pellet size for consistent flow',
      'Optimized for extrusion and injection molding',
      'Strict quality control for material purity',
      'Available in bulk for large-scale production',
    ],
    useCases: [
      'Factories seeking repeatable recycled inputs',
      'Plastic fabricators building sustainable products',
      'Institutional procurement for impact-led production',
    ],
    heroLabel: 'Manufacturing Grade',
    imageHint: 'Consistent recycled pellets prepared for bulk dispatch',
  },
  {
    slug: 'interlocking-construction-block',
    name: 'Interlocking Construction Block',
    tagline: 'Sustainable building through circular recycling',
    shortDescription: 'Mortar-free blocks manufactured from 100% recycled plastic waste.',
    description:
      'Envecoplast interlocking blocks represent the final stage of our recycling value chain. By transforming processed plastic waste into durable structural components, we provide a circular construction solution that diverts waste from landfills while offering a faster, more sustainable building method.',
    category: 'Blocks',
    status: 'In Stock',
    specs: [
      'Manufactured from 100% recycled polymers',
      'Diverts significant plastic waste per unit',
      'Interlocking profile for rapid dry-stack assembly',
      'Weather-resistant and maintenance-free',
    ],
    useCases: [
      'Developers focused on sustainable site works',
      'Rapid-build infrastructure for institutions',
      'Contractors looking to reduce waste and mortar use',
    ],
    heroLabel: 'Circular Output',
    imageHint: 'Interlocking block stack on active construction site',
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
