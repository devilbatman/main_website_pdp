'use client';

import FadeIn from './motion/FadeIn';

const faqs = [
  {
    q: 'Apakah PatuhData firma hukum atau perwakilan regulator?',
    a: 'Tidak. Kami konsultan operasional tata kelola data berbasis UU PDP. Untuk opini hukum formal, kami dapat berkoordinasi dengan mitra legal Anda.',
  },
  {
    q: 'Berapa lama gap assessment biasanya berjalan?',
    a: 'Untuk institusi keuangan menengah, kerangka 2–4 minggu umum dipakai—tergantung jumlah proses, sistem, dan vendor yang dinilai.',
  },
  {
    q: 'Apakah Badan PDP sudah beroperasi?',
    a: 'Per Mei 2026, Badan Perlindungan Data Pribadi belum berdiri resmi. Pengawasan sementara masih melibatkan Kemkomdigi sementara Perpres kelembagaan dalam harmonisasi. Kewajiban UU PDP tetap berlaku—termasuk pengamanan data, hak subjek, dan kesiapan insiden.',
  },
  {
    q: 'Apakah DPO internal wajib menurut UU PDP?',
    a: 'Tidak untuk semua organisasi secara otomatis. UU PDP mengatur kewajiban menunjuk Petugas Perlindungan Data Pribadi (DPO) jika memenuhi kriteria tertentu—misalnya pemrosesan skala besar, kegiatan inti berupa pemrosesan data, atau pemrosesan data sensitif dalam skala signifikan. Institusi keuangan sering masuk profil ini, tetapi penunjukan bisa internal, eksternal, atau gabungan selama mandat, akses, dan independensi terdokumentasi. Gap assessment kami memetakan apakah Anda wajib menunjuk, peran yang belum terisi, dan struktur tata kelola minimum.',
  },
  {
    q: 'Bagaimana data kami ditangani selama proyek?',
    a: 'NDA sebelum kick-off, akses minimum yang diperlukan, dan penghapusan/return materi sesuai kesepakatan kontrak.',
  },
  {
    q: 'Apakah layanan hanya untuk bank besar?',
    a: 'Tidak. Kami juga mendampingi BPR, fintech, dan vendor yang melayani institusi keuangan—dengan pendekatan yang disesuaikan skala.',
  },
  {
    q: 'Apa langkah pertama yang disarankan?',
    a: 'Mulai dengan konsultasi singkat atau preliminary gap review untuk memetakan prioritas sebelum engagement penuh.',
  },
  {
    q: 'Apa yang dimaksud 52 kontrol?',
    a: 'Kerangka operasional PatuhData untuk menilai kesiapan UU PDP—dari DPO dan consent hingga vendor, keamanan, dan bukti audit. Detail ada di halaman Gap Assessment.',
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 section-padding bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Pertanyaan yang sering diajukan
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.04}>
              <details className="group card-premium p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
