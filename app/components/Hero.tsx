'use client';

import TrackedLink from './TrackedLink';
import PreliminaryGapSummaryPreview from './PreliminaryGapSummaryPreview';
import FadeIn from './motion/FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="gradient-mesh pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <FadeIn>
              <p className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm">
                UU PDP · Sektor keuangan · Kepatuhan operasional
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.15rem]">
                Tata Kelola Data untuk Sektor Keuangan Indonesia
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mt-5 text-lg font-medium leading-snug text-slate-800 md:text-xl">
                Kedalaman regulasi. Kontrol operasional. Khusus sektor keuangan.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                PatuhData membantu bank, BPR, dan fintech memetakan gap UU PDP, risiko vendor, dan bukti
                audit—selaras ekspektasi pengawasan sektor keuangan dan siap dieksekusi tim Anda.
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <TrackedLink
                  href="/layanan/pdp-readiness-assessment"
                  eventName="cta_click"
                  eventParams={{ location: 'hero', label: 'gap_assessment_pdp' }}
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Gap Assessment UU PDP
                </TrackedLink>
                <TrackedLink
                  href="#services"
                  eventName="cta_click"
                  eventParams={{ location: 'hero', label: 'see_services' }}
                  className="btn-secondary px-7 py-3.5 text-base"
                >
                  Lihat Layanan
                </TrackedLink>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.06} direction="none">
            <PreliminaryGapSummaryPreview />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
