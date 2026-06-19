'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FounderCredibility() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Founder</h2>

      <div className="border-l-4 border-brand-600 pl-6">
        <h3 className="text-2xl font-bold text-slate-900">Richard Rusli</h3>
        <p className="text-lg text-slate-600 mt-2">
          Founder & Lead Consultant
        </p>

        <p className="text-base leading-relaxed text-slate-600 mt-6">
          Richard built Patuhdata after years as a Tech Lead in governance and security environments—including ISO 27001-certified companies. His focus: translating UU PDP regulation into operational controls that teams can actually run—gap assessments, vendor management, audit trails, and evidence that stands up to scrutiny.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="https://www.linkedin.com/in/richard-r-b51120129/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            LinkedIn Profile
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/patuhdata-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Company Page
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
