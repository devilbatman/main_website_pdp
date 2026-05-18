'use client';

import { FileKey, Handshake, Lock, MapPin } from 'lucide-react';
import FadeIn from './motion/FadeIn';

const commitments = [
  {
    icon: Handshake,
    title: 'Badan hukum tercatat',
    text: 'PT Patuhdata Solusi Nusantara—kontrak, invoice, dan engagement formal untuk institusi enterprise.',
  },
  {
    icon: Lock,
    title: 'Kerahasiaan & NDA',
    text: 'Data dan temuan assessment ditangani dengan NDA dan kebijakan kerahasiaan sebelum kick-off.',
  },
  {
    icon: FileKey,
    title: 'Deliverable terstruktur',
    text: 'Laporan gap, register vendor, prioritas risiko, dan roadmap—bukan slide deck tanpa tindak lanjut.',
  },
  {
    icon: MapPin,
    title: 'Berbasis Jakarta',
    text: 'Workshop onsite atau hybrid untuk tim legal, IT, risk, dan operasional di Jabodetabek.',
  },
];

export default function TrustCommitments() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/80">
                  <item.icon className="h-4 w-4 text-slate-700" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
