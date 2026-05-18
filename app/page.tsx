import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import JsonLd from './components/JsonLd';
import { createPageMetadata, getFaqPageJsonLd } from '@/lib/seo';
import { homeFaqs } from '@/data/homeFaqs';

export const metadata: Metadata = createPageMetadata({
  title: 'PatuhData — Tata Kelola Data Sektor Keuangan Indonesia',
  description:
    'Konsultan tata kelola data & UU PDP untuk bank, BPR, dan fintech. Gap assessment, vendor risk, kebocoran data, dan bukti audit operasional.',
  path: '',
  absoluteTitle: true,
  keywords: [
    'konsultan UU PDP',
    'gap assessment PDP',
    'tata kelola data perbankan',
    'kepatuhan data pribadi Indonesia',
    'PatuhData',
  ],
});
import Hero from './components/Hero';
import PositioningMatrix from './components/PositioningMatrix';
import WhoWeServe from './components/WhoWeServe';
import TrustCommitments from './components/TrustCommitments';
import HomeRegulatorStrip from './components/HomeRegulatorStrip';
import Insights from './components/Insights';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import PdpGapFramework from './components/PdpGapFramework';
import DeliverablesProof from './components/DeliverablesProof';
import EngagementExample from './components/EngagementExample';
import HomeFAQ from './components/HomeFAQ';
import FinalCTA from './components/FinalCTA';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={getFaqPageJsonLd([...homeFaqs])} />
      <Navigation />
      <Hero />
      <TrustCommitments />
      <PositioningMatrix />
      <WhoWeServe />
      <HomeRegulatorStrip />
      <HowItWorks />
      <Services />
      <PdpGapFramework compact showLink />
      <DeliverablesProof />
      <EngagementExample />
      <Insights />
      <HomeFAQ />
      <FinalCTA />
      <ConsultationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
