import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import JsonLd from './components/JsonLd';
import Hero from './components/Hero';
import ExposureCalculator from './components/ExposureCalculator';
import TrustChallenges from './components/TrustChallenges';
import FlagshipService from './components/FlagshipService';
import TrustFramework from './components/TrustFramework';
import IndustriesSection from './components/IndustriesSection';
import ThoughtLeadership from './components/ThoughtLeadership';
import FinalCTA from './components/FinalCTA';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { createPageMetadata, getFaqPageJsonLd } from '@/lib/seo';
import { faqsForSchema } from '@/data/faqs';

export const metadata: Metadata = createPageMetadata({
  title: 'Patuhdata — Konsultan Kepatuhan UU PDP Indonesia',
  description:
    'Patuhdata adalah konsultan profesional kepatuhan UU PDP untuk bank, fintech, multifinance, dan bisnis digital Indonesia. Gap assessment, DPO as a Service, dan pendampingan audit.',
  path: '',
  absoluteTitle: true,
  keywords: [
    'konsultan UU PDP',
    'gap assessment UU PDP',
    'kepatuhan data pribadi Indonesia',
    'DPO as a service',
    'konsultan kepatuhan data',
    'Patuhdata',
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#1a202c] antialiased">
      <JsonLd data={getFaqPageJsonLd(faqsForSchema)} />
      <Navigation darkHero />
      <Hero />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <ExposureCalculator />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <TrustChallenges />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <FlagshipService />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <TrustFramework />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <IndustriesSection />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <ThoughtLeadership />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <FinalCTA />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <ConsultationForm />
      <Footer variant="minimal" />
      <WhatsAppButton />
    </main>
  );
}
