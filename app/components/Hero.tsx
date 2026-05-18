'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from './motion/FadeIn';
import TrackedLink from './TrackedLink';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-ocean-hero pt-28 pb-20 md:min-h-[88vh] md:pt-36 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-cloud-soft" aria-hidden />
      <div className="pointer-events-none absolute inset-0 governance-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f8fafc] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[18%] left-1/2 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[16%] left-1/2 h-32 w-[min(70%,480px)] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-100/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              Operational Trust &amp; Vendor Governance
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.35rem]">
              Operational Trust &amp; Vendor Governance for Indonesia&apos;s Digital Economy
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sky-100/85 md:text-xl">
              Helping organizations evaluate vendor readiness, operational governance, and UU PDP
              alignment—so enterprise partnerships and regulatory expectations are met with clarity.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'hero', label: 'book_assessment' }}
                className="btn-primary min-w-[200px] gap-2"
              >
                Book Assessment
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link href="#framework" className="btn-ghost-light min-w-[200px]">
                View Framework
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-12 text-sm text-sky-200/60">
              The trust governance infrastructure layer for regulated ecosystems in Indonesia.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.22} direction="none">
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="card-ocean rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {[
                  { label: 'Vendors assessed', value: 'Readiness' },
                  { label: 'Governance score', value: 'Structured' },
                  { label: 'UU PDP alignment', value: 'Mapped' },
                  { label: 'Remediation', value: 'Tracked' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-widest text-sky-200/70">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
