import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric rounded-full animate-float animation-delay-100" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-electric/60 rounded-full animate-float animation-delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-electric rounded-full animate-float animation-delay-500" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-electric/40 rounded-full animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Powering $50M+ in Amazon Sales
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Operating System for{" "}
                <span className="text-gradient-electric">Modern Ecommerce</span>
              </h1>
              <p className="text-xl text-foreground-secondary leading-relaxed max-w-lg">
                Automate your Amazon FBA business and 3PL operations with AI-powered tools that save 10+ hours weekly while scaling to millions in revenue.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start with FBA Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-electric" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-card-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric/10 text-electric">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-electric">400+</div>
                  <div className="text-sm text-foreground-muted">Features</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric/10 text-electric">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-electric">15+</div>
                  <div className="text-sm text-foreground-muted">Integrations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric/10 text-electric">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-electric">24/7</div>
                  <div className="text-sm text-foreground-muted">Automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-electric/20 rounded-2xl blur-2xl scale-105" />
              
              {/* Dashboard Image */}
              <div className="relative bg-gradient-card rounded-2xl p-2 border border-electric/20">
                <img
                  src={dashboardHero}
                  alt="Synvelo FBA Dashboard - Real-time analytics and automation"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Floating Metrics */}
                <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-electric/20">
                  <div className="text-xs text-foreground-muted">Revenue Today</div>
                  <div className="text-lg font-bold text-electric">$24,847</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-electric/20">
                  <div className="text-xs text-foreground-muted">Active Automations</div>
                  <div className="text-lg font-bold text-electric">8</div>
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