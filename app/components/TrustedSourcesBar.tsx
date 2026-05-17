import { ExternalLink } from 'lucide-react';
import { trustedBreachSources } from '@/data/trustedSources';

export default function TrustedSourcesBar() {
  return (
    <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
        Sumber terpercaya
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        PatuhData menggabungkan kurasi editorial dengan data terverifikasi dari katalog industri.
      </p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {trustedBreachSources.map((source) => (
          <li
            key={source.name}
            className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
          >
            <p className="font-semibold text-slate-900">{source.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{source.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline"
              >
                Kunjungi
                <ExternalLink className="h-3 w-3" />
              </a>
              {'checkUrl' in source && source.checkUrl && (
                <a
                  href={source.checkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-slate-800"
                >
                  {source.checkLabel}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
