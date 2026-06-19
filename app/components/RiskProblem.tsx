const challenges = [
  'Enterprise procurement demanding security questionnaires?',
  'Unsure how to structure vendor governance?',
  'Preparing for UU PDP readiness?',
  'Managing sensitive customer data without clear controls?',
  'Need operational governance without enterprise-scale complexity?',
];

export default function RiskProblem() {
  return (
    <section id="tantangan" className="bg-slate-950 py-16 text-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Common Challenges</p>
            <h2 className="mb-4 text-2xl font-bold leading-tight md:text-4xl">
              Reduce operational risk. Build enterprise client trust.
            </h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              We help Indonesian technology vendors become genuinely trustworthy—not just checkbox-compliant.
            </p>
          </div>

          <div className="grid gap-3">
            {challenges.map((challenge) => (
              <div key={challenge} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold">
                    ?
                  </span>
                  <p className="text-sm leading-relaxed text-slate-100 md:text-base">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
