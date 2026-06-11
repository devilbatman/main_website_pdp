'use client';

import { ArrowRight, ClipboardCheck, Scale, Shield, UserCheck } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './motion/FadeIn';

const services = [
  {
    icon: Shield,
    title: 'Kesiapan Tata Kelola Vendor',
    summary:
      'Saat procurement meminta bukti, spreadsheet tersebar sering gagal uji. Kami membantu merakit berkas vendor yang dapat dipertanggungjawabkan, jawaban kuesioner keamanan, dan skor risiko yang selaras dengan cara pembeli enterprise menilai Anda.',
    items: [
      'Penilaian vendor bertingkat dan prioritas perbaikan',
      'Paket due diligence untuk RFP dan tinjauan keamanan',
      'Jawaban kuesioner keamanan yang mencerminkan kondisi nyata',
      'Skoring risiko vendor dan ritme pemantauan',
    ],
    href: '/layanan/vendor-risk-review',
  },
  {
    icon: ClipboardCheck,
    title: 'Gap Assessment UU PDP',
    summary:
      'Gap assessment operasional terhadap UU PDP: temukan celah pada proses data, kontrol, dan vendor—dengan prioritas perbaikan yang jelas.',
    items: [
      'Pemetaan pemrosesan dan alur data yang dapat dipertahankan',
      'Akses, retensi, dan minimisasi pada sistem yang benar-benar berjalan',
      'Playbook pelanggaran & notifikasi mengikuti tenggat hukum',
      'Kontrak pemroses dan tinjauan penanganan data vendor',
    ],
    href: '/layanan/pdp-readiness-assessment',
  },
  {
    icon: Scale,
    title: 'Risiko Operasional & Tata Kelola',
    summary:
      'Tata kelola yang hanya hidup di slide deck akan bergeser begitu tim bertambah. Kami merancang alur kerja, kepemilikan, dan pustaka bukti agar pertanyaan audit dijawab dari operasi—bukan improvisasi menit terakhir.',
    items: [
      'Alur tata kelola lintas fungsi dengan pemilik yang jelas',
      'Kesiapan audit & tinjauan manajemen tanpa panik mendadak',
      'Bukti terpusat: keputusan, persetujuan, dan bukti implementasi',
      'Pelacakan perbaikan dari temuan hingga penutupan dengan akuntabilitas',
    ],
    href: '/layanan/risk-orchestration-readiness',
  },
  {
    icon: UserCheck,
    title: 'DPO as a Service',
    summary:
      'Layanan Data Protection Officer eksternal untuk mendampingi kepatuhan perlindungan data pribadi secara berkelanjutan tanpa harus merekrut tim purna waktu.',
    items: [
      'Pendampingan tata kelola dan kepatuhan harian',
      'Tinjauan dampak pelindungan data (DPIA)',
      'Manajemen respons insiden dan permintaan subjek data',
      'Penghubung dengan otoritas pengawas',
    ],
    href: '/layanan/dpo-as-a-service',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Layanan
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Layanan untuk institusi keuangan
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Vendor, UU PDP, risiko operasional—dirancang untuk bank, BPR, fintech, dan multifinance.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <article className="card-premium flex h-full flex-col p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                  <service.icon className="h-6 w-6 text-slate-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors hover:text-brand-600"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
