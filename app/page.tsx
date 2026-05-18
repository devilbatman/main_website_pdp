import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import JsonLd from './components/JsonLd';
import Hero from './components/Hero';
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
  title: 'Patuhdata — Operational Trust & Vendor Governance',
  description:
    'Patuhdata helps organizations operationalize trust, vendor governance, and UU PDP readiness for banks, fintech, SaaS vendors, and regulated digital businesses.',
  path: '',
  absoluteTitle: true,
  keywords: [
    'operational trust',
    'vendor governance',
    'UU PDP readiness',
    'vendor trust assessment',
    'enterprise governance Indonesia',
    'Patuhdata',
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <JsonLd data={getFaqPageJsonLd(faqsForSchema)} />
      <Navigation darkHero />
      <Hero />
      <TrustChallenges />
      <FlagshipService />
      <TrustFramework />
      <IndustriesSection />
      <ThoughtLeadership />
      <FinalCTA />
      <ConsultationForm />
      <Footer variant="minimal" />
      <WhatsAppButton />
    </main>
  );
}
