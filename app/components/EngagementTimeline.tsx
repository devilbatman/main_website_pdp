'use client';

import { useState } from 'react';
import FadeIn from './motion/FadeIn';

const timelineSteps = [
  {
    phase: 'Phase 1: Diagnose',
    subtitle: 'Gap Assessment & Legal Audit',
    description: 'We conduct a comprehensive audit of your current legal and IT infrastructure to pinpoint UU PDP compliance gaps.',
  },
  {
    phase: 'Phase 2: Design',
    subtitle: 'ROPA & DPIA Formulation',
    description: 'We map your enterprise data lifecycle into a legally structured ROPA and draft DPIA blueprints for high-risk processing.',
  },
  {
    phase: 'Phase 3: Deploy',
    subtitle: 'Governance & Policy Implementation',
    description: 'We roll out the designed frameworks, including updated privacy policies, vendor DPAs, and department-wide governance controls.',
  },
  {
    phase: 'Phase 4: Defend',
    subtitle: 'DPO-as-a-Service & Ongoing Audits',
    description: 'Continuous oversight by our certified DPOs. We manage regulatory liaison, vendor monitoring, and periodic audits to ensure sustained compliance.',
  },
];

export default function EngagementTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodologi" className="py-24 bg-[#0B132B] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#00B4D8] mb-3">
            Methodology
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Our UU PDP Compliance Methodology
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A systematic, structured approach by PT PatuhData Solusi Nusantara to mitigate legal and operational data risks.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          
          {/* Connecting Line (Desktop: Horizontal, Mobile: Vertical) */}
          <div className="absolute left-[27px] top-0 h-full w-[2px] bg-slate-800 md:left-0 md:top-[27px] md:h-[2px] md:w-full" />
          
          {/* Desktop active line */}
          <div 
            className="hidden md:block absolute left-0 top-[27px] h-[2px] bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] transition-all duration-500 ease-in-out z-0"
            style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
          />
          {/* Mobile active line */}
          <div 
            className="md:hidden absolute left-[27px] top-0 w-[2px] bg-gradient-to-b from-[#00B4D8] to-[#48CAE4] transition-all duration-500 ease-in-out z-0"
            style={{ height: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
          />

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">
            {timelineSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              
              return (
                <div 
                  key={step.phase}
                  className="relative flex flex-row md:flex-col items-start md:items-center group cursor-pointer flex-1"
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Node */}
                  <div 
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] transition-all duration-300 z-10 bg-[#0B132B] ${
                      isActive 
                        ? 'border-[#00B4D8] text-[#00B4D8] shadow-[0_0_20px_rgba(0,180,216,0.5)] scale-110' 
                        : isPast 
                          ? 'border-[#48CAE4] text-[#48CAE4]' 
                          : 'border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="font-bold text-lg">0{index + 1}</span>
                  </div>

                  {/* Step Titles */}
                  <div className="ml-6 md:ml-0 md:mt-8 md:text-center pt-2 md:pt-0">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {step.phase}
                    </h3>
                    <p className={`mt-1 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-[#00B4D8]' : 'text-slate-500'}`}>
                      {step.subtitle}
                    </p>
                    
                    {/* Description Paragraph (Visible when active) */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto text-left md:text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
