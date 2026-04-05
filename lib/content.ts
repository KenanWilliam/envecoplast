import { Truck, ScanSearch, Factory, ShieldCheck, Leaf, Wallet, Timer, Recycle, Building2, Handshake, Landmark, Hammer } from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
] as const;

export const homeStats = [
  { label: 'Tonnes of Plastic Diverted', value: '4,200+' },
  { label: 'Projects Completed', value: '185+' },
  { label: 'Faster Construction', value: '35%' },
  { label: 'Counties Served', value: '21' },
] as const;

export const processSteps = [
  {
    icon: Truck,
    title: 'Plastic Waste Collection',
    summary: 'Community, industrial, and post-consumer collection streams are aggregated for traceable intake.',
  },
  {
    icon: ScanSearch,
    title: 'Sorting and Processing',
    summary: 'Materials are cleaned, sorted, and transformed into chips or pellets for production quality.',
  },
  {
    icon: Factory,
    title: 'Compression and Molding',
    summary: 'Recycled compounds are molded under controlled pressure into interlocking construction products.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Check and Dispatch',
    summary: 'Finished products are tested, approved, and prepared for direct delivery to project sites.',
  },
] as const;

export const whyPanels = [
  {
    icon: ShieldCheck,
    title: 'Best Quality Materials',
    body: 'Recycled chips, pellets, and interlocking blocks produced to dependable quality standards.',
  },
  {
    icon: Wallet,
    title: 'Lower Construction Costs',
    body: 'Cut material and labor spend compared to traditional building methods.',
  },
  {
    icon: Timer,
    title: 'Faster Project Completion',
    body: 'Interlocking systems reduce installation complexity and save critical days on-site.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Building Solution',
    body: 'Every order helps divert plastic waste away from landfill and open dumping.',
  },
  {
    icon: Building2,
    title: 'Strong and Long-Lasting',
    body: 'Engineered for weather resistance and reliable long-term structural performance.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy Champion',
    body: 'Closing the loop from waste to worth across the Kenyan construction ecosystem.',
  },
] as const;

export const buyerPersonas = [
  {
    icon: Landmark,
    title: 'Real Estate Developer (30-70)',
    body: 'Reduce cost, compress timelines, and increase predictability in delivery.',
  },
  {
    icon: Hammer,
    title: 'Contractor / Fundi (25-60)',
    body: 'Simplify site execution and build faster with fewer process bottlenecks.',
  },
  {
    icon: Building2,
    title: 'Institutions: Schools, NGOs, Gov',
    body: 'Access affordable and sustainable materials for scale-ready construction.',
  },
  {
    icon: Handshake,
    title: 'Eco-Conscious Investor / Partner',
    body: 'Back measurable environmental impact with strong commercial relevance.',
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
