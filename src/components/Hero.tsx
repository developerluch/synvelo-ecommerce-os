import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

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

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 border border-navy/20 text-navy text-sm font-medium animate-fade-in-up">
            <TrendingUp className="w-4 h-4" />
            Powering $50M+ in Amazon Sales
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in-up animation-delay-100">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tighter">
              The Next Generation of{" "}
              <span className="text-gradient-navy">eCommerce Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-[1.6] max-w-2xl mx-auto font-normal">
              Automate your Amazon FBA business and 3PL operations with AI-powered tools that save 10+ hours weekly while scaling to millions in revenue.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up animation-delay-200">
            <Button variant="hero" size="xl" className="group rounded-sm shadow-professional">
              Start with FBA Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-navy" size="xl" className="group rounded-sm border-border/20">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/10 text-navy">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">400+</div>
                <div className="text-sm text-foreground-muted">Features</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/10 text-navy">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">15+</div>
                <div className="text-sm text-foreground-muted">Integrations</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy/10 text-navy">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">24/7</div>
                <div className="text-sm text-foreground-muted">Automation</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Below */}
          <div className="pt-16 animate-scale-in animation-delay-400">
            <div className="relative max-w-4xl mx-auto">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-navy/10 rounded-2xl blur-3xl scale-105" />
              
              {/* Dashboard Image */}
              <div className="relative bg-gradient-card rounded-2xl p-3 border border-navy/20">
                <img
                  src={dashboardHero}
                  alt="Synvelo FBA Dashboard - Real-time analytics and automation"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Floating Metrics */}
                <div className="absolute top-8 left-8 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-navy/20">
                  <div className="text-xs text-foreground-muted">Revenue Today</div>
                  <div className="text-lg font-bold text-navy">$24,847</div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-navy/20">
                  <div className="text-xs text-foreground-muted">Active Automations</div>
                  <div className="text-lg font-bold text-navy">8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;