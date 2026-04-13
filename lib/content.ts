import {
  Truck,
  ScanSearch,
  Factory,
  ShieldCheck,
  Leaf,
  Wallet,
  Timer,
  Recycle,
  Building2,
  Handshake,
  Landmark,
  Hammer,
} from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
] as const;

export const homeStats = [
  { label: 'Tonnes of Plastic Diverted', value: '4,200+', qualifier: 'as of Q1 2026' },
  { label: 'Projects Completed', value: '185+', qualifier: 'as of Q1 2026' },
  { label: 'Faster Construction Cycles', value: '35%', qualifier: 'average reduction' },
  { label: 'Counties Served', value: '21', qualifier: 'in Kenya' },
] as const;

export const processSteps = [
  {
    icon: Truck,
    title: 'Waste Collection',
    summary:
      'Community, industrial, and post-consumer streams are aggregated through traceable intake partnerships across Kenya.',
  },
  {
    icon: ScanSearch,
    title: 'Sorting',
    summary:
      'Materials are carefully sorted by polymer type to ensure the highest purity for downstream processing.',
  },
  {
    icon: Factory,
    title: 'Processing',
    summary:
      'Quality sorted plastics are crushed into chips with consistent quality profiles for industrial and construction use.',
  },
  {
    icon: Recycle,
    title: 'Pelleting',
    summary:
      'Crushed chips are processed into pellets with consistent quality profiles, ready for advanced manufacturing.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Check and Dispatch',
    summary:
      'Each batch is tested for consistency, durability, and readiness before dispatch to active project sites.',
  },
] as const;

export const whyPanels = [
  {
    icon: ShieldCheck,
    title: 'High-Purity Recycled Input',
    body: 'Our chips and pellets are precision-sorted and processed to provide high-quality recycled feedstock for manufacturing.',
  },
  {
    icon: Wallet,
    title: 'Industrial Supply Stability',
    body: 'Access a dependable stream of recycled plastic materials to replace virgin polymers and reduce production costs.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Partner',
    body: 'We help manufacturers close the loop by providing production-ready recycled materials for scalable impact.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Resource Recovery',
    body: 'Every tonne of chips and pellets supplied diverts post-consumer plastic from landfills into useful value.',
  },
  {
    icon: Factory,
    title: 'Engineered for Industry',
    body: 'Optimized for extrusion and molding, our recycled pellets integrate seamlessly into existing production lines.',
  },
  {
    icon: Building2,
    title: 'Durable Circular Products',
    body: 'Beyond raw materials, our interlocking blocks offer a structural application for recovered plastic waste.',
  },
] as const;

export type BuyerPersona = {
  icon: any;
  title: string;
  ageRange?: string;
  body: string;
};

export const buyerPersonas: BuyerPersona[] = [
  {
    icon: Landmark,
    title: 'Real Estate Developer',
    ageRange: '30-70',
    body: 'Reduce cost, compress timelines, and increase delivery predictability across multi-unit projects.',
  },
  {
    icon: Hammer,
    title: 'Contractor / Fundi',
    ageRange: '25-60',
    body: 'Simplify site execution and build faster with fewer bottlenecks and reduced mortar dependency.',
  },
  {
    icon: Building2,
    title: 'Institutions: Schools, NGOs, Gov',
    body: 'Access affordable and sustainable materials for classrooms, clinics, and public-use construction.',
  },
  {
    icon: Handshake,
    title: 'Eco-Conscious Investor / Partner',
    body: 'Back measurable environmental impact with strong commercial relevance and long-term demand.',
  },
] as const;

export const missionValues = [
  {
    title: 'Mission',
    body: 'To transform traceable post-consumer plastic waste from landfills into high performance, certified materials bridging the gap between environmental responsibility and industrial excellence.',
  },
  {
    title: 'Vision',
    body: 'Lead Africa in circular manufacturing for affordable, high-performance sustainable building materials.',
  },
  {
    title: 'Values',
    body: 'Innovation, measurable impact, quality delivery, and long-term partnerships.',
  },
] as const;
