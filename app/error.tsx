'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-6">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-slate-900">Terjadi Kesalahan</h1>
        <p className="mt-3 text-xl font-medium text-slate-700">Ups! Ada yang tidak beres</p>
        <p className="mt-3 text-slate-600">
          Maaf, terjadi kesalahan saat memproses permintaan Anda. Tim kami telah diberitahu dan
          sedang menangani masalah ini.
        </p>

        {error.digest && (
          <p className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-xs font-mono text-slate-600">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center justify-center px-6 py-3"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-400"
          >
            Kembali ke Beranda
          </Link>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          Masalah berlanjut?{' '}
          <a
            href="mailto:support@patuhdata.id"
            className="font-medium text-brand-600 hover:underline"
          >
            Hubungi support
          </a>
        </div>
      </div>
    </div>
  );
}
