export default function About() {
  const features = [
    {
      title: 'Keahlian Profesional',
      description: 'Tim ahli bersertifikat dengan pengalaman mendalam dalam regulasi perlindungan data pribadi Indonesia',
    },
    {
      title: 'Pendekatan Praktis',
      description: 'Solusi yang disesuaikan dengan kebutuhan bisnis Anda, bukan hanya teori tetapi implementasi nyata',
    },
    {
      title: 'Dukungan Berkelanjutan',
      description: 'Kami tidak hanya konsultan, tetapi mitra jangka panjang dalam perjalanan kepatuhan Anda',
    },
    {
      title: 'Hasil Terukur',
      description: 'Fokus pada hasil konkret dengan timeline dan milestone yang jelas',
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-blue-300">Patuh Data</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Partner terpercaya Anda dalam navigasi kompleksitas Undang-Undang Perlindungan Data Pribadi Indonesia
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - About Text */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-300">
              Mengapa Memilih Kami?
            </h3>
            <div className="space-y-4 text-blue-50 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Patuh Data</strong> adalah firma konsultan kepatuhan yang berdedikasi untuk membantu organisasi di Indonesia memenuhi persyaratan Undang-Undang Perlindungan Data Pribadi (UU PDP).
              </p>
              <p>
                Dengan pengalaman bertahun-tahun dalam privasi data dan keamanan informasi, kami memahami tantangan unik yang dihadapi bisnis Indonesia dalam era digital ini.
              </p>
              <p>
                Pendekatan kami menggabungkan keahlian teknis, pemahaman hukum, dan wawasan bisnis untuk memberikan solusi kepatuhan yang tidak hanya memenuhi persyaratan regulasi, tetapi juga mendukung pertumbuhan bisnis Anda.
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-blue-300/20 rounded-lg p-6 hover:bg-white/15 transition-all"
              >
                <h4 className="text-xl font-bold mb-2 text-blue-300">
                  {feature.title}
                </h4>
                <p className="text-blue-50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-blue-300/20 pt-16">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Nilai-Nilai <span className="text-blue-300">Kami</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-300">
                <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Integritas</h4>
              <p className="text-blue-100">
                Kami berkomitmen pada standar etika tertinggi dalam setiap aspek pekerjaan kami
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-300">
                <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Inovasi</h4>
              <p className="text-blue-100">
                Menggunakan pendekatan dan teknologi terbaru untuk solusi kepatuhan yang efektif
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-300">
                <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Kolaborasi</h4>
              <p className="text-blue-100">
                Bekerja sama erat dengan tim Anda untuk mencapai tujuan bersama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
