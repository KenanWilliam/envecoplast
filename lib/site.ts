export const site = {
  name: 'Envecoplast',
  legalName: 'Envecoplast Company Limited',
  tagline: 'Turning waste into worth - building a greener future',
  description: 'Turning waste into worth - building a greener future',
  headline:
    'Envecoplast Ltd sells traceable pre-processed recycled plastics from the land fills and transforms them into high quality plastic chips and pellets',
  location: 'Nairobi, Kenya',
  locationDetailed: 'Industrial Area, Nairobi, Kenya',
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
