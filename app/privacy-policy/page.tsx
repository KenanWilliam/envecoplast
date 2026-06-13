import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Envecoplast Company Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl page-shell py-16 lg:py-20">
      <article className="glass-card rounded-3xl p-6 md:p-10 lg:p-12">
        <p className="fluid-eyebrow font-semibold text-[#1A6B3C]">Legal</p>
        <h1 className="mt-4 fluid-section-title font-semibold text-gray-900">Privacy Policy</h1>
        <div className="mt-8 space-y-6 fluid-body text-gray-700">
          <p>
            This Privacy Policy explains how {site.legalName} collects, uses, and protects your information when you use our website and submit product or partnership inquiries.
          </p>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-2 fluid-body">
              We collect information you provide directly, such as your name, email, phone number, organization, and inquiry details submitted through our contact forms.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">How We Use Information</h2>
            <p className="mt-2 fluid-body">
              Information is used to respond to inquiries, provide quotes, support customer relationships, and improve our products and services.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Sharing of Information</h2>
            <p className="mt-2 fluid-body">
              We do not sell personal information. We may share limited data with service providers who help operate our business and website.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Data Retention</h2>
            <p className="mt-2 fluid-body">
              We retain inquiry and contact data only as long as necessary for business, legal, and compliance requirements.
            </p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Jurisdiction</h2>
            <p className="mt-2 fluid-body">This policy is governed by the laws of Kenya.</p>
          </section>
          <section>
            <h2 className="fluid-card-title font-semibold text-gray-900">Contact</h2>
            <p className="mt-2 fluid-body">
              For privacy requests, contact us at <a href={`mailto:${site.contact.email}`} className="text-[#1B4F8A] hover:underline">{site.contact.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
