'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const credentials = [
  'Tech Lead — delivery, arsitektur, dan keamanan operasional',
  'Tata kelola (governance), risk & data controls',
  'Pengalaman di perusahaan bersertifikasi ISO 27001',
  'Gap assessment, vendor, dan bukti audit untuk sektor finansial',
];

export default function FounderCredibility() {
  return (
    <section className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="card-premium overflow-hidden lg:grid lg:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-slate-200 bg-slate-900 p-8 text-white lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Tim inti</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Richard Rusli</h2>
              <p className="mt-1 text-sm text-slate-300">Founder, Patuhdata</p>
              <p className="mt-2 text-sm text-slate-400">
                Tech Lead · Governance · lingkungan ISO 27001
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
                Richard membangun Patuhdata setelah bertahun-tahun sebagai Tech Lead di lingkungan tata kelola
                dan keamanan—termasuk perusahaan bersertifikasi ISO 27001. Fokusnya memindahkan regulasi
                (UU PDP) ke kontrol operasional yang bisa dijalankan tim: gap assessment, vendor, audit trail,
                dan bukti yang dapat dipertanggungjawabkan ke manajemen dan mitra institusi keuangan.
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
                Kami mengakui keterbatasan: bukan firma hukum dan tidak mewakili otoritas regulator. Nilai
                kami ada pada eksekusi operasional dan deliverable yang jelas.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
