const challenges = [
  'Data pelanggan tersebar di banyak sistem',
  'Penggunaan AI tanpa tata kelola yang jelas',
  'SOP pengelolaan data belum terstruktur',
  'Risiko vendor dan pihak ketiga belum dimonitor',
  'Persiapan audit dan dokumentasi masih manual',
  'Kontrol akses internal belum jelas',
];

export default function TrustSection() {
  return (
    <section id="tantangan" className="py-20 bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Tantangan Operasional yang Sering Terjadi</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <div key={challenge} className="flex gap-3 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-sm font-medium leading-relaxed text-slate-800">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
