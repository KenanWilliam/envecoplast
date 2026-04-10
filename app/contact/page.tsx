import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Request a Quote or Order',
  description:
    'Contact Envecoplast to request a quote for recycled plastic chips, pellets, or construction blocks. Fast response. Bulk orders welcome.',
  alternates: {
    canonical: 'https://www.envecoplast.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let us discuss your project or partnership"
        body="Use the form to request a quote. We will follow up with pricing, lead times, and production capacity details."
      />

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="glass-card rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-gray-900">Envecoplast Company Limited</h2>
          <div className="mt-5 space-y-4 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#1A6B3C]" />
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#1A6B3C]" />
              <a href={`tel:${site.contact.phone.replaceAll(' ', '')}`} className="hover:underline">
                {site.contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#1A6B3C]" />
              <span>{site.locationDetailed}</span>
            </p>
          </div>

        </aside>

        <Suspense
          fallback={
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-gray-900">Contact Form</h3>
              <p className="mt-3 text-sm text-gray-700">If the form doesn't load, please reach out directly:</p>
              <div className="mt-4 space-y-2 text-sm">
                <a href={`mailto:${site.contact.email}`} className="block font-semibold text-[#1A6B3C] hover:underline">
                  {site.contact.email}
                </a>
                <a href={`tel:${site.contact.phone.replaceAll(' ', '')}`} className="block font-semibold text-[#1A6B3C] hover:underline">
                  {site.contact.phone}
                </a>
              </div>
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
}
