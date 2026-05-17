import TrackedLink from './TrackedLink';

const outcomes = [
  {
    title: 'Kesiapan untuk meja investor',
    description: 'Peta risiko data, vendor, dan alur kerja—dengan prioritas dan bukti yang ringkas.',
  },
  {
    title: 'Sinyal “bisa diatur”',
    description: 'Kebijakan selaras operasi, register vendor, dan jejak keputusan yang jelas.',
  },
  {
    title: 'UU PDP proporsional',
    description: 'Kerangka kepatuhan tanpa kompleksitas GRC enterprise yang tidak realistis untuk skala Anda.',
  },
];

export default function UmkmReadiness() {
  return (
    <section id="umkm" className="scroll-mt-24 border-y border-blue-100 bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">UMKM & pendanaan</p>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-blue-950 md:text-3xl">
            Kesiapan data agar due diligence tidak menghambat investasi
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Investor sering menunda karena data, vendor, dan kepatuhan tidak terlihat. Kami membantu penilaian risiko
            dan tata kelola proporsional—bukan janji pendanaan.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-blue-950">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <TrackedLink
            href="/#konsultasi"
            eventName="cta_click"
            eventParams={{ location: 'umkm_section', label: 'umkm_investment_risk_assessment' }}
            className="inline-flex rounded-lg bg-blue-700 px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-blue-800"
          >
            Jadwalkan konsultasi
          </TrackedLink>
          <TrackedLink
            href="/layanan/pdp-readiness-assessment"
            eventName="cta_click"
            eventParams={{ location: 'umkm_section', label: 'pdp_readiness_umkm' }}
            className="text-base font-semibold text-blue-700 underline-offset-4 hover:underline"
          >
            PDP Readiness
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
