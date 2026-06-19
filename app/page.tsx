import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import JsonLd from './components/JsonLd';
import Hero from './components/Hero';
import FlagshipService from './components/FlagshipService';
import EngagementTimeline from './components/EngagementTimeline';
import EnterpriseReadiness from './components/EnterpriseReadiness';
import FinalCTA from './components/FinalCTA';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WhoIsThisFor from './components/WhoIsThisFor';
import { createPageMetadata, getFaqPageJsonLd } from '@/lib/seo';
import { faqsForSchema } from '@/data/faqs';

export const metadata: Metadata = createPageMetadata({
  title: 'Patuhdata — Konsultan Kepatuhan UU PDP Indonesia',
  description:
    'Konsultan profesional kepatuhan UU PDP untuk bank, fintech, multifinance, dan bisnis digital di Indonesia. Gap Assessment, DPO as a Service, dan dukungan audit.',
  path: '',
  absoluteTitle: true,
  keywords: [
    'konsultan UU PDP',
    'kepatuhan UU PDP',
    'gap assessment UU PDP',
    'konsultan perlindungan data pribadi',
    'DPO as a service Indonesia',
    'kepatuhan data pribadi',
    'UU PDP compliance',
    'data protection consultant Indonesia',
    'Patuhdata',
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#1a202c] antialiased">
      <JsonLd data={getFaqPageJsonLd(faqsForSchema)} />
      <Navigation />
      <Hero />
      <FlagshipService />
      <EngagementTimeline />
      <WhoIsThisFor />
      <EnterpriseReadiness />
      <FinalCTA />
      <hr className="border-slate-200 mx-auto max-w-7xl" />
      <ConsultationForm />
      <Footer variant="minimal" />
      <WhatsAppButton />
    </main>
  );
}
