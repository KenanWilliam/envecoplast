import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <svg viewBox="0 0 64 64" role="img" aria-label="Envecoplast logo" className="h-10 w-10">
        <defs>
          <linearGradient id="env-loop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A6B3C" />
            <stop offset="52%" stopColor="#1B4F8A" />
            <stop offset="100%" stopColor="#F5C400" />
          </linearGradient>
        </defs>
        <path d="M33 7c-8 0-14 6-14 14v7h9v-6a5 5 0 0 1 5-5h10V7H33Z" fill="url(#env-loop)" />
        <path d="M57 31c0-8-6-14-14-14h-7v9h6a5 5 0 0 1 5 5v10h10V31Z" fill="#1B4F8A" />
        <path d="M31 57c8 0 14-6 14-14v-7h-9v6a5 5 0 0 1-5 5H21v10h10Z" fill="#1A6B3C" />
        <path d="M7 33c0 8 6 14 14 14h7v-9h-6a5 5 0 0 1-5-5V23H7v10Z" fill="#E63027" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#111111]">{site.name}</span>
    </div>
  );
}
