import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <Hero />
      <FeaturesGrid />
      <SocialProof />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
