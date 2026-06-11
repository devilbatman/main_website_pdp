'use client';

import { ArrowRight } from 'lucide-react';
import FadeIn from './motion/FadeIn';
import TrackedLink from './TrackedLink';

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#f8f9fa] pt-28 pb-20 md:pt-36 md:pb-28 flex items-center"
    >
      {/* Spacious executive background layout */}
      <div className="pointer-events-none absolute inset-0 opacity-40 governance-grid" aria-hidden />
      
      {/* Soft executive gradients */}
      <div
        className="pointer-events-none absolute -left-24 top-[10%] h-80 w-80 rounded-full bg-[#0069c7]/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[10%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#0a2540]/5 blur-3xl"
        aria-hidden
      />

      {/* Corporate Accent Borders */}
      <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a2540]/10 to-transparent" />
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0a2540]/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center justify-center">
          
          {/* Main Content: Prestigious Copy & CTAs */}
          <div className="space-y-6 max-w-4xl mx-auto flex flex-col items-center">
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0069c7] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0069c7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0069c7]"></span>
                </span>
                Konsultan Profesional Kepatuhan Data Pribadi
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0a2540] sm:text-5xl md:text-6xl">
                Kepatuhan <span className="text-[#0069c7]">UU PDP</span> yang Terpercaya.
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-600">
                Konsultan profesional untuk membantu bisnis Anda memenuhi persyaratan Undang-Undang Perlindungan Data Pribadi Indonesia.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
                <TrackedLink
                  href="#calculator"
                  eventName="cta_click"
                  eventParams={{ location: 'hero', label: 'secure_assessment_scope' }}
                  className="btn-primary group px-8 py-4 text-base font-semibold flex items-center justify-center gap-2"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </TrackedLink>
                <a
                  href="#framework"
                  className="btn-secondary px-8 py-4 text-base font-semibold flex items-center justify-center"
                >
                  Pelajari Layanan Kami
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
