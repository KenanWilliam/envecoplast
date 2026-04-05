export const site = {
  name: 'Envecoplast',
  legalName: 'Envecoplast Company Limited',
  tagline: 'Turning waste into worth - building a greener future',
  description:
    'Envecoplast Ltd transforms plastic waste into chips, pellets, and eco-friendly interlocking building blocks that make construction faster, cheaper, and more sustainable.',
  headline:
    'We Transform Post-Consumer Plastic Waste into Durable, Eco-Friendly Construction Materials',
  email: 'hello@envecoplast.com',
  phone: '+254 700 000 000',
  location: 'Nairobi, Kenya',
  whatsapp: '+254700000000',
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/xblypvvz',
  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
    whatsapp: 'https://wa.me/254700000000',
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
