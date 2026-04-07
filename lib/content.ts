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
    title: 'Plastic Waste Collection',
    summary:
      'Community, industrial, and post-consumer streams are aggregated through traceable intake partnerships across Kenya.',
  },
  {
    icon: ScanSearch,
    title: 'Sorting and Processing',
    summary:
      'Materials are cleaned, sorted by polymer type, and transformed into chips or pellets with consistent quality profiles.',
  },
  {
    icon: Factory,
    title: 'Compression and Molding',
    summary:
      'Recycled compounds are formed under controlled heat and pressure into interlocking blocks and durable components.',
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
    title: 'Best Quality Materials',
    body: 'Recycled chips, pellets, and interlocking blocks produced to dependable standards for modern construction.',
  },
  {
    icon: Wallet,
    title: 'Lower Construction Costs',
    body: 'Cut material and labor spend compared to traditional methods while keeping project quality high.',
  },
  {
    icon: Timer,
    title: 'Faster Project Completion',
    body: 'Interlocking systems remove mortar delays and help teams finish shell works in fewer site days.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Building Solution',
    body: 'Every order diverts post-consumer plastic from landfill and open dumping into useful building value.',
  },
  {
    icon: Building2,
    title: 'Strong and Long-Lasting',
    body: 'Engineered for weather resistance and dependable structural performance in demanding conditions.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Champion',
    body: 'Closing the loop from waste to worth across Kenya\'s construction and manufacturing ecosystems.',
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
    body: 'Transform plastic waste into practical construction solutions that cut costs and protect the environment.',
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
