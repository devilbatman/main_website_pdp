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
      <div
        className="pointer-events-none absolute inset-0 animate-cloud-drift bg-cloud-soft"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 governance-grid opacity-50" aria-hidden />

      <div
        className="pointer-events-none absolute -left-24 top-[20%] h-72 w-72 animate-float-slow rounded-full bg-sky-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-[35%] h-96 w-96 animate-float-slow rounded-full bg-brand-400/10 blur-3xl [animation-delay:2s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[12%] h-48 w-[min(90%,640px)] -translate-x-1/2 rounded-full bg-white/8 blur-3xl animate-float-slow [animation-delay:1s]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute bottom-[22%] left-1/2 h-px w-[min(92%,760px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-100/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
              Operational Trust &amp; Vendor Governance
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.25rem]">
              Operational Trust &amp; Vendor Governance
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sky-100/85 md:text-xl">
              Helping organizations become enterprise-ready through vendor governance, operational
              trust, and UU PDP readiness.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'hero', label: 'discuss_assessment_scope' }}
                className="btn-primary min-w-[240px] gap-2"
              >
                Discuss Assessment Scope
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
              <Link href="#framework" className="btn-ghost-light min-w-[200px]">
                Explore Framework
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-12 text-sm text-sky-200/60">
              The operational trust infrastructure layer for Indonesia&apos;s regulated digital
              economy.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.22} direction="none">
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="card-ocean rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {[
                  { label: 'Governance', value: 'Assessed' },
                  { label: 'Vendor trust', value: 'Structured' },
                  { label: 'UU PDP', value: 'Operational' },
                  { label: 'Readiness', value: 'Visible' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center transition-colors hover:border-white/20 hover:bg-white/[0.07]"
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
