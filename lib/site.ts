export const site = {
  name: 'Envecoplast',
  legalName: 'Envecoplast Company Limited',
  tagline: 'Turning waste into worth - building a greener future',
  description:
    'Envecoplast Ltd is a circular manufacturing company transforming plastic waste into high-performance construction materials. We produce 100% recycled interlocking blocks, chips, and pellets for sustainable building.',
  headline:
    'Envecoplast Ltd transforms post-consumer plastic waste into high-quality recycled interlocking blocks, chips, and pellets for sustainable construction',
  location: 'Nairobi, Kenya',
  locationDetailed: 'P.O. Box 12559-00100, Njiru Area, Nairobi, Kenya',
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/xblypvvz',
  contact: {
    email: 'hello@envecoplast.com',
    phone: '+254 700 000 000',
  },
  colors: {
    green: '#1A6B3C',
    blue: '#1B4F8A',
    black: '#111111',
    red: '#E63027',
    yellow: '#F5C400',
    white: '#FFFFFF',
  },
} as const;
