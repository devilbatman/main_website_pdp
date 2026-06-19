import Link from 'next/link';
import { Shield, Target, Lightbulb, CheckCircle2, Users, TrendingUp } from 'lucide-react';
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

      <main className="pt-28 pb-20 md:pt-32">
        {/* Hero Section */}
        <section className="gradient-mesh border-b border-slate-200 pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <Link href="/" className="mb-8 inline-flex text-sm font-medium text-slate-600 hover:text-slate-900">
                ← Beranda
              </Link>

              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Boutique Consultancy
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Fondasi Ekosistem Digital Indonesia yang Aman dan Terpercaya
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-slate-600">
                Kami adalah konsultan boutique yang fokus mengubah kompleksitas regulasi UU PDP menjadi
                kepatuhan operasional yang <strong className="text-slate-900">praktis, terukur, dan berkelanjutan</strong>.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 mb-4">
                  <Target className="h-8 w-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Visi Kami</h2>
              </div>

              <div className="card-premium p-8 md:p-10 text-center">
                <p className="text-2xl leading-relaxed text-slate-700 font-medium">
                  Menjadi fondasi utama terciptanya ekosistem digital Indonesia yang
                  <span className="text-brand-600"> aman</span>,
                  <span className="text-brand-600"> transparan</span>, dan
                  <span className="text-brand-600"> saling percaya</span>.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.2}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 mb-4">
                  <Shield className="h-8 w-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Misi Kami</h2>
                <p className="mt-3 text-lg text-slate-600">
                  Tiga pilar yang memandu setiap langkah kami
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Mission 1 */}
                <div className="card-premium p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Menyederhanakan Kepatuhan
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Mengubah regulasi data yang rumit menjadi solusi praktis yang mudah diadopsi oleh pelaku bisnis.
                  </p>
                </div>

                {/* Mission 2 */}
                <div className="card-premium p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Menjaga Kepercayaan
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Membantu organisasi melindungi hak-hak subjek data dengan standar integritas tertinggi.
                  </p>
                </div>

                {/* Mission 3 */}
                <div className="card-premium p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
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

        {/* Who We Are Section */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.3}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Mengapa Memilih Pendekatan Boutique?
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-600">
                  <strong className="text-slate-900">PT Patuhdata Solusi Nusantara</strong> adalah konsultan boutique
                  yang fokus pada kualitas mendalam, bukan kuantitas klien. Kami percaya bahwa kepatuhan yang sejati
                  lahir dari pemahaman konteks bisnis Anda—bukan dari template copy-paste.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Spesialisasi, Bukan Generalis</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Fokus eksklusif pada UU PDP dan tata kelola data—bukan konsultan umum yang juga menangani ISO, SOC2, atau compliance lainnya.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Operasional, Bukan Teoritis</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Kami memberikan ROPA yang bisa Anda maintain, DPIA yang tim IT pahami, dan playbook breach yang benar-benar dilatih.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Partner, Bukan Vendor</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Retainer kami dirancang untuk pendampingan jangka panjang—karena compliance adalah journey, bukan destination.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Lokal, dengan Standar Global</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Pahami nuansa regulasi Indonesia, tapi dengan metodologi yang setara dengan konsultan internasional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.4}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Layanan Kami
              </h2>

              <div className="card-premium p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-brand-600" />
                      Assessment & Advisory
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>Gap Assessment kesiapan UU PDP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>Data Protection Impact Assessment (DPIA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>Tinjauan risiko vendor dan pihak ketiga</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-brand-600" />
                      Implementation & Support
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>DPO as a Service (eksternal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>Pendampingan tata kelola data operasional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span>Pelatihan corporate governance & awareness</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                  >
                    Lihat semua layanan
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.5}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Siapa yang Kami Layani
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-premium p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Institusi Keuangan</h3>
                  <p className="text-sm text-slate-600">
                    Bank, BPR, fintech, multifinance, dan perusahaan pembiayaan yang mengelola data sensitif nasabah.
                  </p>
                </div>

                <div className="card-premium p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Scale-up & Startup</h3>
                  <p className="text-sm text-slate-600">
                    Perusahaan digital berkembang yang membutuhkan compliance untuk pitching ke enterprise atau investor.
                  </p>
                </div>

                <div className="card-premium p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Vendor Ekosistem Keuangan</h3>
                  <p className="text-sm text-slate-600">
                    SaaS, payment gateway, core banking, dan penyedia layanan yang harus lolos vendor audit.
                  </p>
                </div>

                <div className="card-premium p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">UMKM Berkembang</h3>
                  <p className="text-sm text-slate-600">
                    Bisnis digital yang ingin scale up dengan fondasi compliance yang kuat sejak awal.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What We're Not */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.6}>
              <div className="card-premium border-l-4 border-amber-500 p-6 bg-amber-50">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Klarifikasi Penting
                </h2>
                <div className="space-y-2 text-slate-700">
                  <p>
                    <strong>Patuhdata bukan firma hukum.</strong> Kami tidak memberikan opini hukum formal atau mewakili klien di litigasi.
                  </p>
                  <p>
                    <strong>Patuhdata bukan lembaga pengawas.</strong> Kami tidak mewakili Badan PDP, Komdigi, atau otoritas regulator mana pun.
                  </p>
                  <p>
                    <strong>Kami tidak menjamin kelulusan audit atau pemeriksaan.</strong> Yang kami jamin adalah dokumentasi, kontrol, dan bukti yang Anda butuhkan untuk menghadapi audit dengan percaya diri.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founder Section */}
        <FounderCredibility />

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn delay={0.7}>
              <h2 className="text-3xl font-bold text-white mb-4">
                Siap Membangun Kepatuhan yang Berkelanjutan?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Mulai dengan gap assessment atau konsultasi awal untuk memahami posisi Anda saat ini.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#assessment"
                  className="btn-primary px-8 py-4 text-base font-semibold"
                >
                  Ajukan Konsultasi
                </Link>
                <Link
                  href="/layanan/gap-assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
                >
                  Lihat Gap Assessment
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700">
                <p className="text-sm font-semibold text-slate-400 mb-3">Hubungi Kami</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-300">
                  <a href="mailto:support@patuhdata.id" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    support@patuhdata.id
                  </a>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <a href="tel:+6281903378000" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +62 819 0337 8000
                  </a>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Jakarta, Indonesia
                  </span>
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
