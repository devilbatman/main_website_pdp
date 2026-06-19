import Link from 'next/link';
import { FileQuestion } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 pt-28">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-slate-100 p-6">
              <FileQuestion className="h-12 w-12 text-slate-400" />
            </div>
          </div>

          <h1 className="text-4xl font-semibold text-slate-900">404</h1>
          <p className="mt-3 text-xl font-medium text-slate-700">Halaman tidak ditemukan</p>
          <p className="mt-3 text-slate-600">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center px-6 py-3"
            >
              Kembali ke Beranda
            </Link>
            <Link
              href="/layanan"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-400"
            >
              Lihat Layanan
            </Link>
          </div>

          <div className="mt-10 text-sm text-slate-500">
            Butuh bantuan?{' '}
            <Link href="/#assessment" className="font-medium text-brand-600 hover:underline">
              Hubungi kami
            </Link>
          </div>
        </div>
      </main>
      <Footer variant="minimal" />
    </div>
  );
}
