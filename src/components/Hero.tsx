import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ContainerScroll";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import DemoModal from "@/components/DemoModal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tighter text-foreground/95 px-2 sm:px-0">
              <span className="word-reveal block sm:inline">Experience the power of Synvelo</span>{" "}
              <div className="word-rotate text-shimmer inline-block mt-2 sm:mt-0">
                <span>eCommerce Automation</span>
                <span>Amazon FBA Tools</span>
                <span>3PL Operations</span>
              </div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-secondary/90 leading-[1.5] sm:leading-[1.6] max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto font-normal stagger-children px-4 sm:px-0">
              <span className="block sm:inline">Automate your Amazon FBA business and 3PL operations</span>
              <span className="block sm:inline"> with AI-powered tools that save 10+ hours weekly</span>
              <span className="block sm:inline"> while scaling to millions in revenue.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-200 px-4 sm:px-0">
            <div className="inline-block group relative bg-gradient-to-b from-navy/10 to-white/10 p-px rounded-lg backdrop-blur-lg overflow-hidden shadow-professional hover:shadow-xl transition-shadow duration-300">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group rounded-lg px-6 sm:px-8 py-4 sm:py-6 backdrop-blur-md bg-white hover:bg-white/90 text-black transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
                >
                  <span className="font-medium group-hover:opacity-100 transition-opacity">
                    7 Day Free Trial
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </motion.div>
            </div>
            <DemoModal 
              trigger={
                <Button variant="outline-navy" size="xl" className="group rounded-sm px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Demo
                </Button>
              }
            />
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 animate-fade-in-up animation-delay-300 px-4 sm:px-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-navy/10 text-navy">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-navy hover-lift">400+</div>
                <div className="text-xs sm:text-sm text-foreground-muted">Features</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-navy/10 text-navy">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-navy hover-lift">15+</div>
                <div className="text-xs sm:text-sm text-foreground-muted">Integrations</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-navy/10 text-navy">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-navy hover-lift">24/7</div>
                <div className="text-xs sm:text-sm text-foreground-muted">Automation</div>
              </div>
            </div>
          </div>

          {/* Interactive Scroll Dashboard */}
          <div className="pt-12 sm:pt-16">
            <ContainerScroll
              titleComponent={
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-navy/90 mb-2">
                    Experience the Power
                  </h3>
                  <p className="text-foreground-secondary max-w-2xl mx-auto">
                    Scroll to see your future dashboard come to life
                  </p>
                </div>
              }
            >
              <div className="relative h-full w-full">
                <img
                  src={dashboardHero}
                  alt="Interactive Dashboard Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Floating Metrics with enhanced styling */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold">$24,847</div>
                  <div className="text-sm opacity-80">Revenue Today</div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-green-400">+23%</div>
                  <div className="text-sm opacity-80">Growth Rate</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">Active Automations</div>
                </motion.div>
              </div>
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;