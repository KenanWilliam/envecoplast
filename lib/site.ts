export const site = {
  name: 'Envecoplast',
  legalName: 'Envecoplast Company Limited',
  tagline: 'Turning waste into worth - building a greener future',
  description:
    'We are a forward-thinking recycling company that removes waste plastic from landfills and transforms it into high-quality raw materials.',
  headline:
    'Envecoplast transforms traceable waste plastics into high quality chips and pellets for industrial use',
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
