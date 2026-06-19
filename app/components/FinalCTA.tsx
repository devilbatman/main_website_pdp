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
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Start Your UU PDP Compliance Journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-sky-100/80">
                Professional compliance advisory for Indonesia&apos;s digital economy.
              </p>
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'final_cta', label: 'request_consultation' }}
                className="btn-primary mt-8 inline-flex gap-2"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
