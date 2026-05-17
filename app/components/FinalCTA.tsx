'use client';

import TrackedLink from './TrackedLink';
import FadeIn from './motion/FadeIn';

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="gradient-cta relative overflow-hidden rounded-3xl border border-slate-200/80 px-8 py-16 text-center shadow-soft sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
              aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Siap hadapi regulator?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Mulai dengan gap assessment UU PDP atau konsultasi layanan lainnya.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <TrackedLink
                  href="/layanan/pdp-readiness-assessment"
                  eventName="cta_click"
                  eventParams={{ location: 'final_cta', label: 'gap_assessment_pdp' }}
                  className="btn-primary px-8 py-3.5 text-base"
                >
                  Gap Assessment UU PDP
                </TrackedLink>
                <TrackedLink
                  href="#assessment"
                  eventName="cta_click"
                  eventParams={{ location: 'final_cta', label: 'consultation' }}
                  className="btn-secondary px-8 py-3.5 text-base"
                >
                  Ajukan konsultasi
                </TrackedLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
