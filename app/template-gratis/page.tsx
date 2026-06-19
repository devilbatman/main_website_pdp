import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import ResourceDownloadForm from '@/app/components/ResourceDownloadForm';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import { FREE_RESOURCE_DOWNLOADS, TEMPLATE_GRATIS_PATH } from '@/data/freeResources';
import { createPageMetadata } from '@/lib/seo';
import { FileSpreadsheet, FileText } from 'lucide-react';

export const metadata = createPageMetadata({
  title: 'Template Gratis',
  description:
    'Unduh ceklist kesiapan operasional UU PDP (PDF) dan template ROPA starter (Excel) dari Patuhdata—dengan petunjuk dan contoh.',
  path: TEMPLATE_GRATIS_PATH,
  ogTitle: 'Template Gratis | Patuhdata',
  keywords: [
    'template UU PDP gratis',
    'checklist kepatuhan UU PDP',
    'template ROPA Indonesia',
    'dokumen perlindungan data gratis',
    'template compliance Indonesia',
  ],
});

export default function TemplateGratisPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation />

      <main>
        <section className="gradient-mesh border-b border-slate-200/80 pt-28 pb-12 md:pt-36 md:pb-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/layanan" className="text-sm font-medium text-brand-600 hover:underline">
              ← Layanan
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Template gratis
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ocean-950 md:text-4xl">
              Mulai dokumentasi PDP dengan struktur yang jelas
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Dua alat gratis untuk tim legal, DPO, compliance, dan operasi—bukan file kosong, ada
              petunjuk dan contoh. Untuk penilaian 52 kontrol dan roadmap remediasi, lihat{' '}
              <Link href="/layanan/pdp-readiness-assessment" className="font-semibold text-brand-600 hover:underline">
                Gap Assessment
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <article className="card-premium p-5">
                <FileText className="h-7 w-7 text-brand-600" />
                <h2 className="mt-3 font-semibold text-ocean-950">
                  {FREE_RESOURCE_DOWNLOADS.pdf.label}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {FREE_RESOURCE_DOWNLOADS.pdf.description}
                </p>
              </article>
              <article className="card-premium p-5">
                <FileSpreadsheet className="h-7 w-7 text-brand-600" />
                <h2 className="mt-3 font-semibold text-ocean-950">
                  {FREE_RESOURCE_DOWNLOADS.excel.label}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {FREE_RESOURCE_DOWNLOADS.excel.description}
                </p>
              </article>
            </div>

            <ResourceDownloadForm />

            <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
              Kerangka operasional Patuhdata diselaraskan prinsip UU PDP—bukan checklist resmi
              Kemkomdigi/Badan PDP. Template ini tidak menggantikan assessment profesional.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
