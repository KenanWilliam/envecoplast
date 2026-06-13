'use client';

import { cn } from '@/lib/utils';
import { Reveal } from './sections/reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <p className="fluid-eyebrow font-bold text-[#1A6B3C]">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={cn(
          "mt-6 font-bold tracking-tight text-gray-900",
          eyebrow ? "fluid-section-title" : "fluid-page-title"
        )}>
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.2}>
          <p className="mt-6 fluid-body text-gray-600">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
