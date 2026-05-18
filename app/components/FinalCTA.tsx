'use client';

import { ArrowRight } from 'lucide-react';
import FadeIn from './motion/FadeIn';
import TrackedLink from './TrackedLink';

export default function FinalCTA() {
  return (
    <section className="section-padding-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="none">
          <div className="relative overflow-hidden rounded-3xl bg-ocean-hero px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-cloud-soft opacity-80" aria-hidden />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Build Enterprise Trust with Confidence
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-sky-100/80">
                Start with a structured assessment—vendor readiness, governance scoring, and a clear
                path to UU PDP alignment.
              </p>
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'final_cta', label: 'talk_to_patuhdata' }}
                className="btn-primary mt-8 inline-flex gap-2"
              >
                Talk to PatuhData
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
