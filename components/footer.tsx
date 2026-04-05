import { Container } from '@/components/container';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{site.legalName}</p>
          <p className="mt-2 max-w-2xl text-sm text-slate-200">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <a href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms/" className="transition hover:text-white">
            Terms of Service
          </a>
          <a href={`mailto:${site.email}`} className="transition hover:text-white">
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
