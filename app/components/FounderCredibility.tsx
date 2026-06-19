'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const credentials = [
  'Tech Lead — delivery, architecture, and operational security',
  'Governance, risk & data controls',
  'Experience in ISO 27001-certified environments',
  'Gap assessment, vendor management & audit evidence for the financial sector',
];

export default function FounderCredibility() {
  return (
    <section className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="card-premium overflow-hidden lg:grid lg:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-slate-200 bg-slate-900 p-8 text-white lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Core Team</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Richard Rusli</h2>
              <p className="mt-1 text-sm text-slate-300">Founder, Patuhdata</p>
              <p className="mt-2 text-sm text-slate-400">
                Tech Lead · Governance · ISO 27001 environments
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Link
                  href="https://www.linkedin.com/in/richard-r-b51120129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 hover:text-white"
                >
                  LinkedIn Richard Rusli
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/patuhdata-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
                >
                  LinkedIn Patuhdata
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-base leading-relaxed text-slate-600">
                Richard built Patuhdata after years as a Tech Lead in governance and security environments—including ISO 27001-certified companies. His focus: translating UU PDP regulation into operational controls that teams can actually run—gap assessments, vendor management, audit trails, and evidence that stands up to management scrutiny and institutional financial partners.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                We acknowledge our boundaries: we are not a law firm and do not represent regulatory authority. Our value lies in operational execution and clear, deliverable outcomes.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
