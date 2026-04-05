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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F5C400]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {body ? <div className="mt-5 text-base leading-8 text-slate-200">{body}</div> : null}
    </div>
  );
}
