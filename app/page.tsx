import Navigation from './components/Navigation';
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
