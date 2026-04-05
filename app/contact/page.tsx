import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send project requirements, request a quote, or discuss partnerships with Envecoplast.',
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let us discuss your project or partnership"
        body="Use the form to request a quote. We will follow up with pricing, lead times, and production capacity details."
      />

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Envecoplast Company Limited</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#1B4F8A]" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#1B4F8A]" />
              <a href={`tel:${site.phone.replaceAll(' ', '')}`} className="hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#1B4F8A]" />
              {site.location}
            </p>
          </div>

          <a
            href={site.social.whatsapp}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A6B3C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#14552f]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          <div className="mt-6 flex items-center gap-3">
            <a href={site.social.instagram} className="rounded-full border border-slate-300 p-2 text-slate-700">
              <Globe className="h-4 w-4" />
            </a>
            <a href={site.social.linkedin} className="rounded-full border border-slate-300 p-2 text-slate-700">
              <Send className="h-4 w-4" />
            </a>
            <a href={site.social.facebook} className="rounded-full border border-slate-300 p-2 text-slate-700">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </aside>

        <Suspense
          fallback={
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              Loading form...
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
}
