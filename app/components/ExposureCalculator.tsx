'use client';

import { useState } from 'react';
import FadeIn from './motion/FadeIn';
import { ArrowRight, ShieldCheck, Calculator, AlertOctagon, HelpCircle } from 'lucide-react';
import TrackedLink from './TrackedLink';

export default function ExposureCalculator() {
  const [revenue, setRevenue] = useState(50); // In billions IDR

  const calculateExposure = (rev: number) => {
    return rev * 0.02; // 2% exposure under UU PDP
  };

  const formatCurrency = (val: number) => {
    if (val >= 1000) {
      const trillionVal = (val / 1000).toFixed(1);
      return `Rp ${trillionVal} Triliun`;
    }
    return `Rp ${val} Miliar`;
  };

  const exposure = calculateExposure(revenue);

  const presets = [
    { label: 'Fintech P2P', value: 25 },
    { label: 'BPD / Regional Bank', value: 100 },
    { label: 'KBMI 2 Bank', value: 500 },
    { label: 'KBMI 3 Enterprise', value: 2000 },
  ];

  return (
    <section id="calculator" className="relative py-24 bg-[#f8f9fa] border-t border-slate-200">
      {/* Absolute grid background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-15 governance-grid" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0069c7]">
              <Calculator className="h-4 w-4" /> Estimasi Risiko Denda
            </p>
          </FadeIn>
          
          <FadeIn delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0a2540] sm:text-4xl">
              Kalkulator Potensi Denda UU PDP
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="mt-4 text-base text-slate-600">
              Berdasarkan Pasal 57 UU No. 27/2022, sanksi administratif dapat mencapai 2% dari total pendapatan tahunan. Hitung estimasi risiko denda untuk perusahaan Anda.
            </p>
          </FadeIn>
        </div>

        {/* Calculator layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Slider & Presets Input Card */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold font-display text-[#0a2540] tracking-wide uppercase">
                  1. Pilih atau Masukkan Pendapatan Tahunan
                </h3>
                <span className="text-xs text-slate-500 font-mono">Pasal 57 UU No. 27/2022</span>
              </div>

              {/* Presets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setRevenue(preset.value)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      revenue === preset.value
                        ? 'border-[#0069c7] bg-slate-50 text-[#0069c7] shadow-sm font-semibold'
                        : 'border-slate-250 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-800'
                    }`}
                  >
                    <p className="text-[10px] uppercase font-mono tracking-wider">{preset.label}</p>
                    <p className="text-xs font-bold mt-1 text-[#0a2540]">{formatCurrency(preset.value)}</p>
                  </button>
                ))}
              </div>

              {/* Range Slider */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="revenue-range" className="text-xs font-bold text-slate-600">
                    Pendapatan Tahunan Kustom:
                  </label>
                  <span className="text-xl font-bold font-display text-[#0069c7] font-mono">
                    {formatCurrency(revenue)}
                  </span>
                </div>
                <input
                  id="revenue-range"
                  type="range"
                  min="5"
                  max="5000"
                  step="5"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0069c7]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>Rp 5 Miliar</span>
                  <span>Rp 2.5 Triliun</span>
                  <span>Rp 5.0 Triliun</span>
                </div>
              </div>
            </div>

            {/* Sub-text clarification */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3 text-xs text-slate-500 leading-relaxed">
              <AlertOctagon className="h-5 w-5 text-amber-600 shrink-0" />
              <span>
                Catatan: Selain sanksi administratif 2%, perusahaan yang tidak patuh juga menghadapi risiko reputasi, tanggung jawab tata kelola perusahaan, dan kebijakan daftar hitam dari bank KBMI Tier 1.
              </span>
            </div>
          </div>

          {/* Calculations & Results Display Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0069c7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0069c7] animate-ping" />
                Proyeksi Risiko
              </div>

              {/* Big Exposure Number */}
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">
                  Estimasi Maksimum Denda UU PDP
                </p>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#0a2540] tracking-tight leading-none pt-1">
                  {formatCurrency(exposure)}
                </div>
                <p className="text-[11px] text-[#0069c7] font-mono mt-1 font-semibold">
                  Tepat: Rp {(exposure * 1000000000).toLocaleString('id-ID')}
                </p>
              </div>

              {/* Cost-Benefit Contrast */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex justify-between text-xs items-center">
                  <span className="text-slate-500">Biaya Audit Proaktif</span>
                  <span className="text-[#0a2540] font-semibold font-mono">Rp 120+ Juta</span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-slate-500">Tingkat Mitigasi Risiko</span>
                  <span className="text-emerald-700 font-bold font-mono">Berkurang 99.8%</span>
                </div>
                
                {/* Visual Ratio Line */}
                <div className="pt-2">
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-600 h-full w-[2%]" title="Audit Cost (approx 0.1 - 0.5%)" />
                    <div className="bg-red-500 h-full w-[98%]" title="Unmitigated Risk Exposure" />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1.5">
                    <span className="text-emerald-600">■ Biaya Audit (~0.2%)</span>
                    <span className="text-red-500 font-semibold">■ Risiko Denda (99.8%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 relative z-10 space-y-4">
              <TrackedLink
                href="#assessment"
                eventName="cta_click"
                eventParams={{ location: 'calculator', label: 'discuss_mitigation_plan', revenue_estimate: revenue.toString() }}
                className="btn-primary-dark w-full group flex items-center justify-center gap-2 py-3.5 text-base font-semibold"
              >
                Diskusikan Rencana Mitigasi
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </TrackedLink>
              <div className="text-center">
                <span className="text-[10px] text-slate-500 font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Simulasi anonim & aman
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
