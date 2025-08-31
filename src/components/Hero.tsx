import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import DemoModal from "@/components/DemoModal";
import { ContainerScroll } from "@/components/ContainerScroll";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-navy/30 rounded-full animate-float animation-delay-100" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-navy/20 rounded-full animate-float animation-delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-navy/30 rounded-full animate-float animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-navy/10 text-navy text-xs sm:text-sm font-medium animate-fade-in-up">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Powering $50M+ in Amazon Sales</span>
            <span className="xs:hidden">$50M+ in Sales</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animation-delay-100">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tighter text-foreground/95 px-2 sm:px-0 xl:text-8xl py-0">
              <span className="word-reveal block sm:inline">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl mx-0 my-0 px-[200px] xl:text-6xl">Experience the power of</span>
                <br className="block sm:hidden" />
                <span className="text-navy font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> Synvelo</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-secondary/90 leading-[1.5] sm:leading-[1.6] max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto font-normal stagger-children px-4 sm:px-0">
              Automate your eCommerce platforms with AI
            </p>
            
            {/* Experience power text moved to center */}
            <div className="pt-8">
              
            </div>
          </div>

          {/* CTAs */}
          

          {/* Trust Metrics */}
          

        </div>
        
        {/* Dashboard Preview with ContainerScroll - moved to center */}
        <div className="mt-16 sm:mt-24">
          <ContainerScroll titleComponent={<div className="mx-auto text-center mb-20">
                
                
              </div>}>
            <img src={dashboardHero} alt="Synvelo FBA Dashboard - Real-time analytics and automation" className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
          </ContainerScroll>
        </div>
      </div>
    </section>;
};
export default Hero;