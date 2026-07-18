export const site = {
  name: 'Envecoplast',
  legalName: 'Envecoplast Company Limited',
  tagline: 'Turning waste into worth - building a greener future',
  description:
    'We believe that high quality recycled products go hand in hand with creating jobs and protecting the planet from too much pollution.',
  headline:
    'Envecoplast transforms traceable waste plastics into high quality chips, pellets, and bricks for industrial use',
  location: 'Nairobi, Kenya',
  locationDetailed: 'P.O. Box 12559-00100, Njiru Area, Nairobi, Kenya',
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/xblypvvz',
  contact: {
    email: 'hello@envecoplast.com',
    phones: ['+254 714 485 999', '+254 743 052 002'],
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
