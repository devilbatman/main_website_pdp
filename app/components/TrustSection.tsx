const challenges = [
  'Vendor & IT outsourcing: evidence diligence saat audit',
  'Data pelanggan & pembayaran tersebar di banyak sistem',
  'AI dipakai tim tanpa inventaris use case & risiko',
  'Temuan assessment tidak punya owner & status penutupan',
];

export default function TrustSection() {
  return (
    <section id="tantangan" className="py-14 bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950">Tantangan umum</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {challenges.map((challenge) => (
            <div key={challenge} className="flex gap-2 rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-sm font-medium leading-snug text-slate-800">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
