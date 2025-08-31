import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Shield, Zap } from "lucide-react";

const PricingSection = () => {
  const coreFeatures = [
    "Real-Time Dashboard with drag-and-drop customization",
    "AI Automation Agents for inventory & pricing",
    "Amazon SP-API integration for real-time data",
    "Multi-store management & analytics"
  ];

  const plans = [
    {
      name: "Professional",
      price: 97,
      description: "Complete Amazon FBA automation platform",
      features: coreFeatures.concat([
        "Priority support",
        "Unlimited SKUs",
        "14-day free trial"
      ]),
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 297,
      description: "For agencies and high-volume sellers",
      features: coreFeatures.concat([
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support"
      ]),
      cta: "Contact Sales",
      popular: false
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "30-Day Money-Back Guarantee",
      description: "Not satisfied? Get a full refund, no questions asked"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Get started immediately after signup"
    },
    {
      icon: Star,
      title: "Cancel Anytime",
      description: "No long-term contracts or hidden fees"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient-navy bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
            One comprehensive platform for Amazon FBA automation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-glass backdrop-blur-lg hover:bg-glass-hover transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-navy/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-navy text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-navy">${plan.price}</span>
                    <div className="text-sm text-foreground-muted">/month</div>
                  </div>
                </div>
                
                <p className="text-foreground-secondary">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline-navy"} 
                  size="lg" 
                  className="w-full group"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-xs text-foreground-muted text-center mt-3">
                  14-day free trial • No credit card required
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy/10 text-navy rounded-full mb-4">
                <guarantee.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-sm text-foreground-secondary">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-card border border-card-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Join 1,200+ Sellers Growing with Synvelo
          </h3>
          <p className="text-foreground-secondary mb-6">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button variant="hero" size="xl" className="group bg-black hover:bg-black/80 text-white">
            Start Free Trial Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;