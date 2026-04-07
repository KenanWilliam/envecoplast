import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Go to homepage">
      <img
        src="/envecoplast-wm-horizontal.svg"
        alt="Envecoplast logo"
        className={cn('h-12 w-auto', className)}
      />
    </Link>
  );
}
