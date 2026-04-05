import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Envecoplast Company Limited.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-8">
      <article className="glass-card rounded-3xl p-8 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5C400]">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-200">
          <p>
            These Terms of Service govern access and use of the website operated by {site.legalName}. By using this website, you agree to these terms.
          </p>
          <section>
            <h2 className="text-xl font-semibold text-white">Use of Website</h2>
            <p className="mt-2">You agree to use this website only for lawful purposes and in a manner that does not violate rights of other users.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Product Information</h2>
            <p className="mt-2">
              Product descriptions, availability, and timelines are provided for general information and may change without prior notice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Quotes and Orders</h2>
            <p className="mt-2">
              Submitted inquiries do not constitute a binding contract. Final commercial terms are confirmed through formal quotations and agreements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
            <p className="mt-2">All text, graphics, logos, and materials on this website are owned by or licensed to {site.legalName}.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, {site.legalName} is not liable for indirect or consequential losses from website use.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Jurisdiction</h2>
            <p className="mt-2">These terms are governed by the laws of Kenya.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-2">
              For legal inquiries, contact us at <a href={`mailto:${site.email}`} className="text-[#F5C400] hover:underline">{site.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
