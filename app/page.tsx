import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import OperationalFramework from './components/OperationalFramework';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
      <OperationalFramework />
      <Services />
      <Industries />
      <About />
      <ConsultationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
