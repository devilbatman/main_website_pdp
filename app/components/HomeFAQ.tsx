'use client';

import { homeFaqs } from '@/data/homeFaqs';
import FadeIn from './motion/FadeIn';

export default function HomeFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 section-padding bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Pertanyaan yang sering diajukan
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {homeFaqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.04}>
              <details className="group card-premium p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
