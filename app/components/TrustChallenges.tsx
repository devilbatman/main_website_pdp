'use client';

import { Eye, FileCheck, ShieldCheck, Users } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const challenges = [
  {
    icon: Eye,
    title: 'Visibilitas Risiko Pihak Ketiga',
    description:
      'Pahami bagaimana vendor mengelola data dan kontrol keamanan—sebelum pengadaan, audit, atau tinjauan enterprise terhambat.',
  },
  {
    icon: ShieldCheck,
    title: 'Kepercayaan dalam Pengadaan',
    description:
      'Berikan bukti nyata kematangan tata kelola kepada pembeli dan mitra—bukan sekadar janji di dalam presentasi.',
  },
  {
    icon: FileCheck,
    title: 'Kesiapan UU PDP',
    description:
      'Dari kebijakan ke bukti operasional—kontrol yang dijalankan tim Anda dan dapat diverifikasi oleh pemangku kepentingan.',
  },
  {
    icon: Users,
    title: 'Akuntabilitas Tata Kelola',
    description:
      'Pemilik yang jelas, prioritas, dan jalur remediasi—satu pandangan tentang kepatuhan di seluruh vendor dan operasional.',
  },
];

export default function TrustChallenges() {
  return (
    <section id="why-trust" className="section-padding-sm scroll-mt-24 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0069c7]">
            Tantangan Saat Ini
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold font-display tracking-tight text-[#0a2540] md:text-4xl">
            Mengapa Kepatuhan Data Penting
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Ekosistem bisnis yang diatur bergantung pada kepercayaan—terhadap vendor, pengelolaan data, dan bagaimana organisasi membuktikan kepatuhannya setiap hari.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="card-premium group h-full p-6 bg-white border border-slate-200">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#0069c7] ring-1 ring-[#0069c7]/15 transition-colors group-hover:bg-[#0069c7]/10">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold font-display text-[#0a2540]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
