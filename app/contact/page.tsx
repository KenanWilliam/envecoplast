'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/sections/reveal';
import { site } from '@/lib/site';
import { ArrowRight, CheckCircle2, ChevronDown, Send } from 'lucide-react';

/**
 * Option 12 Combo — Elastic Precision + Success Bloom
 * Inputs expand elastically on focus. 
 * Errors trigger a "shake" animation.
 * Success dissolves the form into a circular progress success message.
 */
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="bg-white">
      <section className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1A6B3C]">Get in Touch</p>
                <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-8xl">
                  Lets Recycle Together
                </h1>
                <p className="mt-10 text-xl leading-relaxed text-gray-500 max-w-lg">
                  Whether you're placing an order or looking for a strategic partner, our team is ready to assist.
                </p>
              </Reveal>

              <div className="mt-20 space-y-12">
                 <Reveal delay={0.1}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Direct Contact</h3>
                    <p className="mt-4 text-3xl font-bold text-gray-900">{site.contact.email}</p>
                    <p className="mt-2 text-xl font-medium text-gray-600">{site.contact.phone}</p>
                 </Reveal>
                 <Reveal delay={0.2}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</h3>
                    <p className="mt-4 text-xl font-medium text-gray-900">{site.locationDetailed}</p>
                 </Reveal>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card rounded-[3rem] border border-gray-100 p-10 shadow-apple md:p-16"
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Name</label>
                          <input required className="input" placeholder="Jane Doe" type="text" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Email</label>
                          <input required className="input" placeholder="jane@company.com" type="email" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Subject</label>
                         <div className="relative">
                           <select className="input w-full appearance-none bg-white pr-10">
                             <option>General Inquiry</option>
                             <option>Order Placement</option>
                             <option>Partnership</option>
                           </select>
                           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                             <ChevronDown className="h-4 w-4" />
                           </div>
                         </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Message</label>
                        <textarea required className="input min-h-[150px] resize-none" placeholder="Tell us about your project..." />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shimmer relative flex w-full items-center justify-center gap-3 rounded-full bg-[#1A6B3C] py-5 text-lg font-bold text-white shadow-apple hover:bg-[#14552f] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    className="flex min-h-[500px] flex-col items-center justify-center rounded-[3rem] border border-gray-100 bg-white p-16 text-center shadow-apple-hover"
                  >
                    <div className="relative mb-10">
                       <motion.div 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 1, ease: "easeInOut" }}
                         className="absolute inset-0 h-32 w-32 -rotate-90 text-[#1A6B3C]"
                       >
                         <svg viewBox="0 0 100 100" className="h-full w-full">
                           <circle
                             cx="50" cy="50" r="45"
                             fill="none" stroke="currentColor"
                             strokeWidth="4" strokeLinecap="round"
                             strokeDasharray="283"
                           />
                         </svg>
                       </motion.div>
                       <CheckCircle2 className="h-32 w-32 text-[#1A6B3C]" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">Message Received.</h2>
                    <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                      Thank you for reaching out. A representative will contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-12 font-bold text-[#1A6B3C] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <div className="h-32" />
    </main>
  );
}
