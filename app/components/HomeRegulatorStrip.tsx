'use client';

import { Building2, FileCheck2, Shield } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const items = [
  {
    icon: Building2,
    title: 'Selaras regulator',
    text: 'Kami membantu perusahaan menyelaraskan operasi dengan UU PDP dan kesiapan menghadapi pengawasan—bukan sekadar teks kebijakan.',
  },
  {
    icon: FileCheck2,
    title: 'Bukti yang dipercaya',
    text: 'Alert kritis, monitoring log, dan audit log terstruktur menjadi bahan jawaban saat regulator atau mitra menuntut bukti kontrol.',
  },
  {
    icon: Shield,
    title: 'Otoritas di lapangan',
    text: 'Pendekatan praktisi: dokumentasi, ritme review, dan integrasi dengan tata kelola IT & keamanan yang sudah Anda miliki.',
  },
];

export default function HomeRegulatorStrip() {
  return (
    <section id="mengapa" className="scroll-mt-24 border-y border-slate-200/80 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Kepatuhan finansial yang bisa dibuktikan
          </h2>
          <p className="mt-4 text-slate-600">
            Kami menyatukan kedalaman UU PDP dengan kontrol operasional yang regulator dan mitra institusi
            dapat verifikasi.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="card-premium h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
