export default function About() {
  const reasons = [
    'Fokus pada implementasi operasional',
    'Pendekatan praktis dan scalable',
    'Memahami alur onboarding dan risiko data',
    'Mendukung kesiapan bisnis modern & AI governance',
    'Tata kelola yang dapat diterapkan sehari-hari',
  ];

  const cases = [
    {
      title: 'Healthcare Clinic',
      description: 'Pendampingan SOP pengelolaan data pasien dan kontrol akses internal.',
    },
    {
      title: 'Fintech Platform',
      description: 'Assessment onboarding workflow dan vendor governance readiness.',
    },
    {
      title: 'Digital Business',
      description: 'Penyusunan tata kelola data dan operational readiness framework.',
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why PatuhData</h2>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-blue-50 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-300/20 text-blue-100">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div id="about" className="rounded-2xl bg-white/10 border border-blue-300/25 p-8 scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About PatuhData</h2>
            <div className="space-y-5 text-blue-50 text-lg leading-relaxed">
              <p>PatuhData membantu organisasi menerjemahkan regulasi menjadi operasional yang nyata.</p>
              <p>
                Dengan pengalaman di area onboarding, risk assessment, dan tata kelola data, kami membantu bisnis membangun proses
                yang lebih aman, terstruktur, dan scalable.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-300/20 pt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Operational Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white/10 border border-blue-300/20 p-6">
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
