import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Envecoplast Company Limited.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl page-shell py-16 lg:py-20">
      <article className="glass-card rounded-3xl p-6 md:p-10 lg:p-12">
        <p className="fluid-eyebrow font-semibold text-[#1A6B3C]">Legal</p>
        <h1 className="mt-4 fluid-section-title font-semibold text-gray-900">Terms of Service</h1>
        <div className="mt-8 space-y-6 fluid-body text-gray-700">
          <p>
            These Terms of Service govern access and use of the website operated by {site.legalName}. By using this website, you agree to these terms.
          </p>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Use of Website</h2>
            <p className="mt-2 fluid-body">You agree to use this website only for lawful purposes and in a manner that does not violate rights of other users.</p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Product Information</h2>
            <p className="mt-2 fluid-body">
              Product descriptions, availability, and timelines are provided for general information and may change without prior notice.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Quotes and Orders</h2>
            <p className="mt-2 fluid-body">
              Submitted inquiries do not constitute a binding contract. Final commercial terms are confirmed through formal quotations and agreements.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Intellectual Property</h2>
            <p className="mt-2 fluid-body">All text, graphics, logos, and materials on this website are owned by or licensed to {site.legalName}.</p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Limitation of Liability</h2>
            <p className="mt-2 fluid-body">
              To the maximum extent permitted by law, {site.legalName} is not liable for indirect or consequential losses from website use.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Jurisdiction</h2>
            <p className="mt-2 fluid-body">These terms are governed by the laws of Kenya.</p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Contact</h2>
            <p className="mt-2 fluid-body">
              For legal inquiries, contact us at <a href={`mailto:${site.contact.email}`} className="text-[#1B4F8A] hover:underline">{site.contact.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
