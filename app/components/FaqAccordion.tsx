'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/faqs';
import FadeIn from './motion/FadeIn';

interface FaqAccordionProps {
  items: FaqItem[];
  /** Highlight these FAQ numbers in the list (e.g. [4, 5, 6]) */
  highlightIds?: number[];
}

export default function FaqAccordion({ items, highlightIds = [] }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(highlightIds[0] ?? 1);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openId === faq.id;
        const isHighlighted = highlightIds.includes(faq.id);

        return (
          <FadeIn key={faq.id} delay={i * 0.03}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isHighlighted
                  ? 'border-brand-200/80 bg-brand-50/40'
                  : 'border-slate-200/80 bg-white'
              } ${isOpen ? 'shadow-card' : 'shadow-soft'}`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    isHighlighted
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {String(faq.id).padStart(2, '0')}
                </span>
                <span className="flex-1 pt-0.5">
                  <span className="text-sm font-semibold text-ocean-950 md:text-base">
                    {faq.q}
                  </span>
                  {isHighlighted && (
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-brand-600">
                      Topik utama
                    </span>
                  )}
                </span>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4 md:px-6 md:pl-[4.25rem]">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              )}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
