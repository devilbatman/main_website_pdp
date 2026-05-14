const industries = [
  {
    title: 'Clinics & Healthcare',
    description: 'Pengelolaan data pasien dan operasional klinik.',
  },
  {
    title: 'Fintech & Digital Services',
    description: 'Governance onboarding, vendor, dan data pelanggan.',
  },
  {
    title: 'Enterprises',
    description: 'Operational governance dan risk readiness untuk organisasi modern.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Who We Help</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 mb-3">{industry.title}</h3>
              <p className="text-slate-600 leading-relaxed">{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
