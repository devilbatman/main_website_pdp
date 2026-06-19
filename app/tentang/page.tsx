import Link from 'next/link';
import Footer from '@/app/components/Footer';
import FounderCredibility from '@/app/components/FounderCredibility';
import Navigation from '@/app/components/Navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import JsonLd from '@/app/components/JsonLd';
import FadeIn from '@/app/components/motion/FadeIn';
import { createPageMetadata, getFounderPersonJsonLd } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Tentang Patuhdata',
  description:
    'Konsultan boutique kepatuhan UU PDP Indonesia. Menyederhanakan regulasi menjadi solusi praktis, menjaga kepercayaan, dan mengedukasi ekosistem digital yang aman dan transparan.',
  path: '/tentang',
  keywords: [
    'tentang Patuhdata',
    'konsultan boutique UU PDP',
    'PT Patuhdata Solusi Nusantara',
    'konsultan tata kelola data Indonesia',
    'kepatuhan sektor keuangan',
    'vendor risk Indonesia',
  ],
});

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={getFounderPersonJsonLd()} />
      <Navigation />

      <main className="pt-28 pb-20 md:pt-32 md:pb-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Boutique Consultancy untuk Kepatuhan UU PDP
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                Kami mengubah kompleksitas regulasi data menjadi kepatuhan operasional yang praktis, terukur, dan berkelanjutan.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Visi</h2>
                <p className="text-2xl md:text-3xl leading-relaxed text-slate-700">
                  Menjadi fondasi utama terciptanya ekosistem digital Indonesia yang aman, transparan, dan saling percaya.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Misi</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Menyederhanakan Kepatuhan
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Mengubah regulasi data yang rumit menjadi solusi praktis yang mudah diadopsi oleh pelaku bisnis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Menjaga Kepercayaan
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Membantu organisasi melindungi hak-hak subjek data dengan standar integritas tertinggi.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Mengedukasi Ekosistem
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Membangun kesadaran akan pentingnya pelindungan data sebagai aset bisnis strategis, bukan sekadar pemenuhan hukum.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Boutique Section */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Boutique?
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-12">
                PT Patuhdata Solusi Nusantara fokus pada kualitas mendalam, bukan kuantitas klien. Kepatuhan yang sejati lahir dari pemahaman konteks bisnis Anda—bukan dari template copy-paste.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-brand-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Spesialisasi, Bukan Generalis</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fokus eksklusif pada UU PDP dan tata kelola data—bukan konsultan umum yang juga menangani ISO, SOC2, atau compliance lainnya.
                  </p>
                </div>

                <div className="border-l-4 border-brand-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Operasional, Bukan Teoritis</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kami memberikan ROPA yang bisa Anda maintain, DPIA yang tim IT pahami, dan playbook breach yang benar-benar dilatih.
                  </p>
                </div>

                <div className="border-l-4 border-brand-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Partner, Bukan Vendor</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Retainer kami dirancang untuk pendampingan jangka panjang—karena compliance adalah journey, bukan destination.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.4}>
              <FounderCredibility />
            </FadeIn>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 md:py-24 bg-slate-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn delay={0.5}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Membangun Kepatuhan yang Berkelanjutan?
              </h2>

              <Link
                href="/#assessment"
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Ajukan Konsultasi
              </Link>

              <div className="mt-16 pt-12 border-t border-slate-800">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400">
                  <a href="mailto:support@patuhdata.id" className="hover:text-white transition-colors">
                    support@patuhdata.id
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a href="tel:+6281903378000" className="hover:text-white transition-colors">
                    +62 819 0337 8000
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
