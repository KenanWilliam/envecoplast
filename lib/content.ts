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
  { label: 'Industrial Capacity', value: '500T+', qualifier: 'monthly throughput' },
  { label: 'Reliable Lead-time', value: '72hr', qualifier: 'average dispatch' },
  { label: 'Counties Served', value: '21', qualifier: 'across Kenya' },
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
      'Quality sorted plastics are crushed into chips with consistent quality profiles for industrial and manufacturing use.',
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
      'Each batch is tested for consistency, purity, and readiness before dispatch to industrial partners.',
  },
] as const;

export const whyPanels = [
  {
    icon: ScanSearch,
    title: 'Traceable Supply Chain',
    body: 'We provide full visibility into our material sourcing, ensuring every tonne of plastic is ethically and transparently recovered.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Material Standards',
    body: 'Our chips and pellets undergo rigorous testing to ensure consistent polymer purity and industrial performance.',
  },
  {
    icon: Factory,
    title: 'High-Volume Capacity',
    body: 'Equipped with industrial-scale processing lines, we meet the high-volume feedstock demands of large-scale manufacturers.',
  },
  {
    icon: Timer,
    title: 'Fast Lead-time',
    body: 'Optimized logistics and inventory management ensure rapid fulfillment and reliable delivery to your production site.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Champion',
    body: 'Leading Kenya’s shift from waste to worth by closing the loop for the manufacturing and industrial sectors.',
  },
  {
    icon: Handshake,
    title: 'Reliability & Partnership',
    body: 'We act as a dependable extension of your supply chain, providing consistent feedstock quality and volume year-round.',
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
    icon: Factory,
    title: 'Industrial Manufacturer',
    body: 'Secure consistent, high-purity recycled plastic feedstock (chips/pellets) to replace virgin polymers in your production lines.',
  },
  {
    icon: Landmark,
    title: 'Real Estate Developer',
    body: 'Enhance project ESG ratings and reduce environmental footprint by sourcing certified, high-performance recycled materials.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Partner',
    body: 'Collaborate on large-scale resource recovery initiatives and close the loop on post-consumer plastic waste.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Manager',
    body: 'Ensure production continuity with a reliable, high-capacity supplier offering fast lead-times and traceable sourcing.',
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
