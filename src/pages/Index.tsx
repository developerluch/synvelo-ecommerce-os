import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { BackgroundPaths } from "@/components/BackgroundPaths";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary relative">
      {/* Global Background Paths */}
      <div className="fixed inset-0 z-0">
        <BackgroundPaths />
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <FeaturesGrid />
        <SocialProof />
        <PricingSection />
        <FAQ />
        <Footer />
        <LiveChat />
      </div>
    </div>
  );
};

export default Index;
