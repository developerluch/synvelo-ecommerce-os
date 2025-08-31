import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Shield, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: 47,
      originalPrice: 97,
      badge: "Limited Time",
      description: "Perfect for new sellers getting started",
      features: [
        "Real-time FBA Dashboard",
        "4 AI Automation Agents",
        "Basic integrations (5)",
        "Email support",
        "Up to 1,000 SKUs",
        "Basic reporting"
      ],
      limitations: [
        "No checkout bots",
        "Limited API calls",
        "Basic notifications"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 97,
      originalPrice: 197,
      badge: "Most Popular",
      description: "Everything you need to scale your business",
      features: [
        "Everything in Starter",
        "8 AI Automation Agents",
        "Checkout Bot Network",
        "All 15+ integrations",
        "Priority support",
        "Unlimited SKUs",
        "Advanced analytics",
        "Custom notifications",
        "Multi-store management",
        "API access"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 297,
      originalPrice: 497,
      badge: "Best Value",
      description: "For agencies and high-volume sellers",
      features: [
        "Everything in Professional",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "Advanced compliance tools",
        "Team collaboration",
        "Custom reporting",
        "SLA guarantees",
        "Developer API access"
      ],
      limitations: [],
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
            Replace $500+ in monthly tool costs with one comprehensive platform
          </p>
          
          {/* Savings Banner */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy/10 rounded-full text-navy font-semibold mb-8">
            <Star className="w-5 h-5" />
            Limited Time: Save 50% on your first 3 months
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-glass backdrop-blur-lg hover:bg-glass-hover transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-navy/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-navy text-white px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  {!plan.popular && plan.badge && (
                    <Badge variant="outline" className="text-xs">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-navy">${plan.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-foreground-muted line-through">
                        ${plan.originalPrice}
                      </div>
                      <div className="text-sm text-foreground-muted">/month</div>
                    </div>
                  </div>
                  <div className="text-sm text-navy font-medium mt-1">
                    Save ${plan.originalPrice - plan.price}/month
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
                  
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-60">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-1 h-1 bg-foreground-muted rounded-full" />
                      </div>
                      <span className="text-sm line-through">{limitation}</span>
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
        <div className="text-center bg-glass backdrop-blur-lg rounded-2xl p-8">
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