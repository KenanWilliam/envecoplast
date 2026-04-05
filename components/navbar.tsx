import { Container } from '@/components/container';
import { site } from '@/lib/site';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/brand/envecoplast-logo.svg" alt={`${site.name} logo`} className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{site.name}</p>
            <p className="text-xs text-slate-200">Waste to worth construction materials</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Place an order
        </a>
      </Container>
    </header>
  );
}
