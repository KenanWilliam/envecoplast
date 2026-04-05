'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const inquiryTypes = ['Place an Order', 'Partnership', 'Investment Inquiry', 'General Question'] as const;
const productOptions = ['Interlocking Blocks', 'Plastic Chips', 'Plastic Pellets', 'Other'] as const;

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  organization: z.string().optional(),
  inquiryType: z.enum(inquiryTypes),
  products: z.array(z.enum(productOptions)).min(1, 'Select at least one product of interest'),
  message: z.string().min(10, 'Please share a little more detail'),
});

type FormValues = z.infer<typeof schema>;

function guessProductOptions(productName: string): FormValues['products'] {
  const lowered = productName.toLowerCase();

  if (lowered.includes('block')) {
    return ['Interlocking Blocks'];
  }

  if (lowered.includes('chip')) {
    return ['Plastic Chips'];
  }

  if (lowered.includes('pellet')) {
    return ['Plastic Pellets'];
  }

  return ['Other'];
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get('product') ?? '';
  const prefilledInquiry = searchParams.get('inquiryType');

  const defaults = useMemo<FormValues>(
    () => ({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      inquiryType: (prefilledInquiry as FormValues['inquiryType']) || 'Place an Order',
      products: prefilledProduct ? guessProductOptions(prefilledProduct) : ['Interlocking Blocks'],
      message: prefilledProduct
        ? `I would like a quote for ${prefilledProduct}. Please share pricing, minimum order quantity, and lead time.`
        : '',
    }),
    [prefilledInquiry, prefilledProduct],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });

  const selectedProducts = watch('products');

  const onSubmit = async (data: FormValues) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const subject = encodeURIComponent(`Envecoplast Inquiry: ${data.inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nOrganization: ${data.organization || '-'}\nProducts: ${data.products.join(', ')}\n\n${data.message}`,
    );

    window.location.href = `mailto:hello@envecoplast.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-xl font-semibold text-emerald-800">Inquiry Sent</h3>
        <p className="mt-2 text-sm leading-7 text-emerald-700">
          Thank you for reaching out. Our team will respond shortly with pricing and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name *" error={errors.fullName?.message}>
          <input {...register('fullName')} className="input" />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input {...register('email')} type="email" className="input" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register('phone')} className="input" />
        </Field>
        <Field label="Organisation / Company" error={errors.organization?.message}>
          <input {...register('organization')} className="input" />
        </Field>
      </div>

      <Field label="Inquiry Type" error={errors.inquiryType?.message}>
        <select {...register('inquiryType')} className="input">
          {inquiryTypes.map((inquiry) => (
            <option key={inquiry} value={inquiry}>
              {inquiry}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Product of Interest" error={errors.products?.message}>
        <div className="grid gap-2 sm:grid-cols-2">
          {productOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={selectedProducts.includes(option)}
                onChange={(event) => {
                  const next = event.target.checked
                    ? [...selectedProducts, option]
                    : selectedProducts.filter((item) => item !== option);

                  setValue('products', next, { shouldValidate: true });
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="Message / Requirements *" error={errors.message?.message}>
        <textarea {...register('message')} rows={5} className="input resize-none" />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-[#1A6B3C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#14552f] disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
