import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Envecoplast Company Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-8">
      <article className="glass-card rounded-3xl p-8 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A6B3C]">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#111111]">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600">
          <p>
            This Privacy Policy explains how {site.legalName} collects, uses, and protects your information when you use our website and submit product or partnership inquiries.
          </p>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, email, phone number, organization, and inquiry details submitted through our contact forms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">How We Use Information</h2>
            <p className="mt-2">
              Information is used to respond to inquiries, provide quotes, support customer relationships, and improve our products and services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">Sharing of Information</h2>
            <p className="mt-2">
              We do not sell personal information. We may share limited data with service providers who help operate our business and website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">Data Retention</h2>
            <p className="mt-2">
              We retain inquiry and contact data only as long as necessary for business, legal, and compliance requirements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">Jurisdiction</h2>
            <p className="mt-2">This policy is governed by the laws of Kenya.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[#111111]">Contact</h2>
            <p className="mt-2">
              For privacy requests, contact us at <a href={`mailto:${site.email}`} className="text-[#1B4F8A] hover:underline">{site.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
