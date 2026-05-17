import TrackedLink from './TrackedLink';

const workflow = ['Evaluasi', 'Daftar', 'Prioritas', 'Tugaskan', 'Perbaiki', 'Bukti'];

const capabilities = [
  {
    title: 'Register risiko terpadu',
    description: 'Satu daftar prioritas untuk risiko data, vendor, AI, dan kepatuhan.',
  },
  {
    title: 'Kepemilikan jelas',
    description: 'Pemilik, status, tenggat, dan tindakan berikutnya—lintas legal, IT, risk, dan operasi.',
  },
  {
    title: 'Bukti siap audit',
    description: 'Keputusan, SOP, persetujuan, dan bukti implementasi yang tertelusur.',
  },
];

export default function RiskOrchestration() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Tata Kelola Risiko</p>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-blue-950 md:text-4xl">
              Dari temuan sekali jalan ke risiko yang terkelola dan terbukti
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Visibilitas risiko berkelanjutan, kepemilikan yang jelas, pelacakan perbaikan, dan bukti untuk manajemen
              atau audit.
            </p>
            <TrackedLink
              href="/layanan/risk-orchestration-readiness"
              eventName="cta_click"
              eventParams={{ location: 'risk_orchestration_section', label: 'explore_risk_orchestration' }}
              className="inline-flex rounded-lg bg-blue-700 px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-blue-800"
            >
              Pelajari tata kelola risiko
            </TrackedLink>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-slate-50 p-5 shadow-sm md:p-6">
            <div className="grid gap-2 md:grid-cols-6">
              {workflow.map((step, index) => (
                <div key={step} className="relative">
                  <div className="rounded-xl border border-blue-100 bg-white p-3 text-center shadow-sm">
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-xs font-bold text-blue-950">{step}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute left-full top-1/2 z-10 h-px w-3 -translate-y-1/2 bg-blue-200" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-xl bg-white p-4 shadow-sm">
                  <h3 className="mb-1.5 text-base font-bold text-blue-950">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
