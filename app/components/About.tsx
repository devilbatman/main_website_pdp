'use client';

import Image from 'next/image';
import FadeIn from './motion/FadeIn';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Tentang
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Infrastruktur kepercayaan operasional untuk ekonomi digital Indonesia
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              PatuhData bermitra dengan perusahaan SaaS berkembang, vendor fintech, platform HR, dan
              penyedia layanan digital untuk mengoperasionalkan tata kelola—bukan sekadar
              mendokumentasikannya. Kami menggabungkan pengalaman praktisi dengan alur kerja terstruktur
              agar tim Anda dapat berkembang dengan percaya diri.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Dari penilaian risiko vendor hingga kesiapan UU PDP dan pelacakan perbaikan, kami membantu
              Anda membangun lapisan operasional yang diharapkan pembeli enterprise dan regulator.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <Image
                  src="/iso27001lead.png"
                  alt="Lead Auditor ISO 27001"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Dipimpin praktisi bersertifikat</p>
                <p className="text-sm text-slate-600">
                  Lead Auditor ISO 27001 · Pengalaman tata kelola enterprise
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Fokus', value: 'Tata kelola operasional' },
                { label: 'Klien', value: 'Bisnis digital berkembang' },
                { label: 'Wilayah', value: 'Indonesia' },
                { label: 'Pendekatan', value: 'Tinjau → Operasi → Pertahankan' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
