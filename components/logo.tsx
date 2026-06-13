import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  const hasHeight = className && /\bh-/.test(className);
  return (
    <Link href="/" aria-label="Go to homepage">
      <img
        src="/envecoplast-wm copy.svg"
        alt="Envecoplast logo"
        className={cn('w-auto', !hasHeight && 'h-12', className)}
      />
    </Link>
  );
}
