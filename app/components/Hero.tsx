'use client';

import { ArrowRight, Shield, FileSignature, BarChart4 } from 'lucide-react';
import FadeIn from './motion/FadeIn';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0B132B] pt-28 pb-20 md:pt-36 md:pb-28 flex items-center border-b border-slate-800"
    >
      {/* Premium Corporate Gradients */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00B4D8]/10 via-[#0B132B]/0 to-transparent pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Premium Copy & CTAs */}
          <div className="space-y-8 max-w-2xl text-left">
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-sm border-l-2 border-[#00B4D8] bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 backdrop-blur-sm">
                PT PatuhData Solusi Nusantara
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white">
                Enterprise Data Protection & <br className="hidden sm:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-slate-300">UU PDP Compliance</span> Advisory.
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg leading-relaxed text-slate-400 font-light">
                PT PatuhData Solusi Nusantara provides end-to-end corporate consultancy, gap assessments, and managed framework implementation to safeguard your organization against regulatory and operational liabilities.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <a
                  href="#assessment"
                  className="group inline-flex items-center justify-center gap-2 rounded bg-[#00B4D8] hover:bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B132B] transition-all duration-300"
                >
                  Request Proposal
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Structured Risk Matrix Graphic */}
          <FadeIn delay={0.3} className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative border border-slate-700/50 bg-[#0B132B]/80 p-8 backdrop-blur-md shadow-2xl overflow-hidden group">
              {/* Corporate Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="border-b border-slate-700 pb-4 mb-8 flex justify-between items-center">
                  <h3 className="text-xs font-mono text-slate-400 tracking-widest uppercase">Compliance Risk Matrix</h3>
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                </div>

                {/* Data Row 1 */}
                <div className="flex items-center justify-between border border-slate-800 bg-slate-900/50 p-4 transition-colors group-hover:border-[#00B4D8]/30">
                  <div className="flex items-center gap-4">
                    <Shield className="h-5 w-5 text-[#00B4D8]" />
                    <div>
                      <p className="text-sm font-semibold text-white">Regulatory Alignment</p>
                      <p className="text-xs text-slate-500 font-mono mt-1">UU No. 27/2022 Coverage</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#10B981]">Audited</span>
                  </div>
                </div>

                {/* Data Row 2 */}
                <div className="flex items-center justify-between border border-slate-800 bg-slate-900/50 p-4 transition-colors group-hover:border-[#00B4D8]/30">
                  <div className="flex items-center gap-4">
                    <FileSignature className="h-5 w-5 text-[#00B4D8]" />
                    <div>
                      <p className="text-sm font-semibold text-white">Contractual Obligations</p>
                      <p className="text-xs text-slate-500 font-mono mt-1">Vendor DPA Executed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#10B981]">Verified</span>
                  </div>
                </div>

                {/* Data Row 3 */}
                <div className="flex items-center justify-between border border-slate-800 bg-slate-900/50 p-4 transition-colors group-hover:border-[#00B4D8]/30">
                  <div className="flex items-center gap-4">
                    <BarChart4 className="h-5 w-5 text-slate-500" />
                    <div>
                      <p className="text-sm font-semibold text-white">Risk Exposure</p>
                      <p className="text-xs text-slate-500 font-mono mt-1">Identified Operational Gaps</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-amber-500">Pending</span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Subtle backlight */}
            <div className="absolute -inset-4 bg-[#00B4D8] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-700 -z-10"></div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
