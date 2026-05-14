import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Operationalizing Trust</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Operational Data Governance <br />
            <span className="text-blue-300">untuk Bisnis Modern</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
            PatuhData membantu organisasi mengelola risiko data, kesiapan UU PDP, dan tata kelola AI menjadi proses operasional yang praktis dan scalable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#konsultasi"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:opacity-90 transition-all hover:scale-105 text-lg shadow-lg"
            >
              Schedule Assessment
            </Link>
            <Link
              href="#konsultasi"
              className="px-8 py-4 bg-blue-600/50 border-2 border-blue-400/30 text-white font-semibold rounded-lg hover:bg-blue-600/70 transition-all text-lg backdrop-blur-sm"
            >
              Konsultasi Awal
            </Link>
          </div>

          {/* Brands */}
          <div className="mt-24 pt-8 border-t border-blue-400/20">
            <p className="text-blue-200 text-sm font-medium mb-8 tracking-wider uppercase">
              Brand yang pernah ditangani oleh konsultan kami
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="bg-white rounded-lg p-4 transition-transform hover:scale-105 shadow-md">
                <Image
                  src="/blibli.jpg"
                  alt="Blibli"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
