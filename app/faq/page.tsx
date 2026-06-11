import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import JsonLd from '@/app/components/JsonLd';
import FaqAccordion from '@/app/components/FaqAccordion';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import TrackedLink from '@/app/components/TrackedLink';
import { faqs, faqsForSchema } from '@/data/faqs';
import { createPageMetadata, getFaqPageJsonLd } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'FAQ — Pertanyaan Umum',
  description:
    'Jawaban tentang Patuhdata, UU PDP, Badan PDP, program kepercayaan vendor, DPO, dan siapa yang kami layani—bank, fintech, multifinance, SaaS, dan UMKM.',
  path: '/faq',
  ogTitle: 'FAQ Patuhdata | Operational Trust & Vendor Governance',
});

const featuredIds = [4, 5, 6];

export default function FaqPage() {
  const featured = faqs.filter((f) => featuredIds.includes(f.id));
  const rest = faqs.filter((f) => !featuredIds.includes(f.id));

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <JsonLd data={getFaqPageJsonLd(faqsForSchema)} />
      <Navigation />

      <main className="pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex text-sm font-medium text-slate-600 hover:text-ocean-950"
          >
            ← Kembali ke beranda
          </Link>

          <header className="mb-12 border-b border-slate-200 pb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">FAQ</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
              Pertanyaan yang sering diajukan
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Tentang peran Patuhdata, kepatuhan UU PDP, kepercayaan vendor, dan siapa yang kami
              dampingi di ekosistem teregulasi Indonesia.
            </p>
          </header>

          <section className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Topik utama
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Kemkomdigi &amp; Badan PDP, program vendor trust, dan cakupan layanan untuk berbagai
              jenis organisasi.
            </p>
            <div className="mt-6">
              <FaqAccordion items={featured} highlightIds={featuredIds} />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Semua pertanyaan
            </h2>
            <div className="mt-6">
              <FaqAccordion items={rest} />
            </div>
          </section>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
            <h2 className="text-xl font-semibold text-ocean-950">Masih ada pertanyaan?</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tim kami dapat membantu memetakan kebutuhan assessment atau vendor governance Anda.
            </p>
            <TrackedLink
              href="/#assessment"
              eventName="cta_click"
              eventParams={{ location: 'faq_page', label: 'book_assessment' }}
              className="btn-primary-dark mt-6 inline-flex"
            >
              Book Assessment
            </TrackedLink>
          </div>
        </div>
      </main>

      <Footer variant="minimal" />
      <WhatsAppButton />
    </div>
  );
}
