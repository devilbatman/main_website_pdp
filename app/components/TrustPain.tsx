'use client';

import { Building2, FileWarning, Layers, ShieldAlert } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const painPoints = [
  {
    icon: Building2,
    title: 'Tinjauan Pengadaan Enterprise',
    description:
      'Vendor yang berkembang menghadapi kuesioner keamanan, due diligence, dan gerbang procurement sebelum kontrak tertutup.',
  },
  {
    icon: ShieldAlert,
    title: 'Risiko Vendor & Paparan Data',
    description:
      'Alat pihak ketiga dan mitra outsourcing memperluas jejak data tanpa kepemilikan atau penilaian risiko yang jelas.',
  },
  {
    icon: FileWarning,
    title: 'Tantangan Kesiapan UU PDP',
    description:
      'Persyaratan UU PDP di Indonesia membutuhkan kontrol operasional—bukan sekadar kebijakan—untuk melindungi data pribadi dalam skala besar.',
  },
  {
    icon: Layers,
    title: 'Kompleksitas Tata Kelola Operasional',
    description:
      'Spreadsheet dan tinjauan ad hoc mudah jebol ketika tim, vendor, dan beban kepatuhan terus bertambah.',
  },
];

export default function TrustPain() {
  return (
    <section id="challenges" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Perusahaan Berkembang Menghadapi Tekanan Tata Kelola yang Meningkat
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pembeli enterprise mengharapkan kematangan operasional. Regulator mengharapkan
            akuntabilitas. Infrastruktur tata kelola Anda perlu mengikuti laju tersebut.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="card-premium group h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
