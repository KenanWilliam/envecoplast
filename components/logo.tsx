import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <svg viewBox="0 0 72 72" role="img" aria-label="Envecoplast logo" className="h-10 w-10">
        <defs>
          <linearGradient id="env-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A6B3C" />
            <stop offset="55%" stopColor="#1B4F8A" />
            <stop offset="100%" stopColor="#F5C400" />
          </linearGradient>
        </defs>
        <rect x="9" y="9" width="54" height="54" rx="16" fill="#0f1512" stroke="#2b3b33" />
        <path
          d="M37 13c-6 0-11 5-11 11v7h8v-6a3 3 0 0 1 3-3h10v-9H37Z"
          fill="url(#env-gradient)"
        />
        <path d="M59 37c0-6-5-11-11-11h-7v8h6a3 3 0 0 1 3 3v10h9V37Z" fill="#1B4F8A" />
        <path d="M35 59c6 0 11-5 11-11v-7h-8v6a3 3 0 0 1-3 3H25v9h10Z" fill="#1A6B3C" />
        <path d="M13 35c0 6 5 11 11 11h7v-8h-6a3 3 0 0 1-3-3V25h-9v10Z" fill="#E63027" />
        <path d="M34 21l3-4 3 4z" fill="#F5C400" />
        <path d="M51 34l4 3-4 3z" fill="#F5C400" />
        <path d="M38 51l-3 4-3-4z" fill="#F5C400" />
        <path d="M21 38l-4-3 4-3z" fill="#F5C400" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-current">{site.name}</span>
    </div>
  );
}
