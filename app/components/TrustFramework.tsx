'use client';

import FadeIn from './motion/FadeIn';

const steps = [
  {
    step: '01',
    title: 'Assess',
    description: 'Review governance and operational maturity across vendors, data, and controls.',
  },
  {
    step: '02',
    title: 'Evaluate',
    description: 'Identify readiness gaps and operational risks with structured assessment.',
  },
  {
    step: '03',
    title: 'Remediate',
    description: 'Prioritize governance and operational fixes with clear accountability.',
  },
  {
    step: '04',
    title: 'Monitor',
    description: 'Maintain compliance visibility and governance continuity over time.',
  },
];

export default function TrustFramework() {
  return (
    <section id="framework" className="section-padding scroll-mt-24 gradient-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Our Methodology
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
            The Patuhdata Framework
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A systematic, repeatable approach—from first assessment to sustained governance visibility.
          </p>
        </FadeIn>

        <div className="relative mt-16">
          <div
            className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div
                      className={`card-premium p-6 md:max-w-md ${
                        i % 2 === 1 ? 'md:ml-auto md:text-left' : 'md:mr-auto'
                      }`}
                    >
                      <span className="text-xs font-bold tracking-widest text-brand-600">
                        {item.step}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-ocean-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex shrink-0 justify-center md:w-16">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-950 text-sm font-bold text-white shadow-ocean-lg ring-4 ring-white">
                      {item.step}
                    </div>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
