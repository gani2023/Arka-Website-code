import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Legacy } from './components/Legacy';
import { Products } from './components/Products';
import { CustomSolutions } from './components/CustomSolutions';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TrustSection } from './components/TrustSection';
import { AIConsultant } from './components/AIConsultant';
import { AdminPortal } from './components/AdminPortal';
import { Samples } from './components/Samples';
import { PaymentSuccess } from './components/PaymentSuccess';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components with Specific SEO
const HomePage = () => (
  <>
    <SEO 
      title="Arka Originals | Speciality Coffee Roasters for B2B | Delhi NCR, Noida & North India" 
      description="Speciality Coffee Roasters for B2B supplying specialty beans to cafes in Delhi NCR, Noida, Gurgaon, Lucknow, and Jaipur. Wholesale Arabica and Robusta."
    />
    <Hero />
    <TrustSection />
    <Process />
  </>
);

const LegacyPage = () => (
  <>
    <SEO 
      title="Coffee Estate to Delhi NCR | Our Sourcing Legacy" 
      description="Direct trade coffee from Chikamagalur estates to your cafe in Delhi, Noida, or Kolkata. Traceable, shade-grown beans roasted to perfection."
    />
    <div className="pt-20"> {/* Padding for fixed navbar */}
      <Legacy />
    </div>
  </>
);

const CollectionPage = () => (
  <>
    <SEO 
      title="Wholesale Coffee Beans Delhi & Noida | Specialty Arabica" 
      description="Buy wholesale coffee beans in Delhi NCR. Premium Graded Arabica, Robusta, and Custom Blends for cafes in Gurgaon, Lucknow, and Chandigarh."
    />
    <div className="pt-20">
      <Products />
      <CustomSolutions />
    </div>
  </>
);

const ConsultantPage = () => (
  <>
    <SEO 
      title="AI Coffee Consultant | Sourcing for Indian Cafes" 
      description="Ask our AI about coffee sourcing for your cafe in Delhi, Noida, or North India. Get instant roast profile recommendations and pricing."
    />
    <div className="pt-20">
      <AIConsultant />
    </div>
  </>
);

const ContactPage = () => (
  <>
    <SEO 
      title="Contact Arka Originals | Coffee Suppliers Delhi NCR" 
      description="Request a quote for bulk coffee supply in Delhi, Noida, Gurgaon, or Chikamagalur. Custom roast profiles for hotels and cafes across North India."
    />
    <div className="pt-20">
      <Contact />
    </div>
  </>
);

const SamplesPage = () => (
  <>
    <SEO 
      title="Coffee Tasting Samples | Arka Originals" 
      description="Try our Signature Sampler Kit featuring 100% PLAAA Arabica, Espresso Blend, and Liquid Coffee Concentrate."
    />
    <div className="pt-20">
      <Samples />
    </div>
  </>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HashRouter>
        <div className="min-h-screen flex flex-col font-sans bg-coffee-50 selection:bg-coffee-900 selection:text-white overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/legacy" element={<LegacyPage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/consultant" element={<ConsultantPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/samples" element={<SamplesPage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/admin" element={<AdminPortal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;