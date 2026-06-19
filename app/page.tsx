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
  title: 'Patuhdata — UU PDP Compliance Consultancy Indonesia',
  description:
    'Patuhdata provides professional UU PDP compliance advisory for banks, fintech, multifinance, and digital businesses in Indonesia. Gap assessment, DPO as a Service, and audit support.',
  path: '',
  absoluteTitle: true,
  keywords: [
    'UU PDP consultant',
    'UU PDP gap assessment',
    'Indonesia personal data protection compliance',
    'DPO as a service',
    'data compliance consultant',
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
