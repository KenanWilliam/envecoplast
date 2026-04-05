import { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4F8A]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {body ? <div className="mt-4 text-base leading-7 text-slate-600">{body}</div> : null}
    </div>
  );
}
