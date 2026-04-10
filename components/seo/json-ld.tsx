'use client';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Envecoplast Ltd',
    url: 'https://www.envecoplast.com',
    logo: 'https://www.envecoplast.com/brand/envecoplast-logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254700000000',
      email: 'hello@envecoplast.com',
      contactType: 'customer service',
      areaServed: 'KE',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  product,
}: {
  product: { name: string; description: string; slug: string };
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Envecoplast Ltd' },
    url: `https://www.envecoplast.com/products/${product.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KES',
      seller: { '@type': 'Organization', name: 'Envecoplast Ltd' },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
