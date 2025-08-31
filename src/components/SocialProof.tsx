import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SocialProof = () => {
  const [currentRevenue, setCurrentRevenue] = useState(250000);
  const [currentTimeSpent, setCurrentTimeSpent] = useState(40);
  
  const calculateSavings = () => {
    const monthlySavings = (currentTimeSpent * 4 * 25); // hours * weeks * hourly rate
    const toolSavings = 400; // Replaced tools savings
    const totalMonthlySavings = monthlySavings + toolSavings;
    const annualSavings = totalMonthlySavings * 12;
    const timeSavedWeekly = Math.floor(currentTimeSpent * 0.25); // 25% time savings
    
    return {
      monthlySavings: totalMonthlySavings,
      annualSavings,
      timeSavedWeekly
    };
  };

  const savings = calculateSavings();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Amazon FBA Seller",
      revenue: "$2.4M Annual",
      content: "Synvelo's AI agents saved me 15 hours per week. The ROI was immediate.",
      rating: 5,
      verified: true
    },
    {
      name: "Marcus Rodriguez", 
      role: "3PL Owner",
      revenue: "500K Orders/Year",
      content: "TikTok Live integration alone increased our client revenue by 300%.",
      rating: 5,
      verified: true
    },
    {
      name: "Jennifer Walsh",
      role: "Multi-Channel Seller", 
      revenue: "$1.8M Annual",
      content: "Replaced 6 different tools with Synvelo. The automation is incredible.",
      rating: 5,
      verified: true
    }
  ];

  const companyLogos = [
    { name: "Fulfillment by Amazon", logo: "FBA" },
    { name: "Shopify Plus", logo: "S+" },
    { name: "BigCommerce", logo: "BC" },
    { name: "WooCommerce", logo: "WC" },
    { name: "Walmart Marketplace", logo: "WM" },
    { name: "eBay", logo: "EB" }
  ];

  const metrics = [
    { label: "Revenue Processed", value: "$50M+", icon: DollarSign },
    { label: "Hours Saved Weekly", value: "10,000+", icon: Clock },
    { label: "Active Automations", value: "25K+", icon: TrendingUp },
    { label: "Happy Customers", value: "1,200+", icon: Users }
  ];

  const features = [
    "8 AI agents working 24/7",
    "11 Amazon SP-API endpoints",
    "Automated checkout bots",
    "Multi-channel notifications",
    "Real-time profit analytics",
    "Inventory optimization"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See Your Potential{" "}
            <span className="text-gradient-navy">ROI</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Calculate how much time and money Synvelo can save your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* ROI Calculator */}
          <Card className="bg-glass backdrop-blur-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-navy" />
                ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Monthly Revenue
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="25000"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-right text-lg font-bold text-navy mt-2">
                    ${currentRevenue.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Hours Spent on Manual Tasks (Weekly)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                  <input
                    type="range"
                    min="10"
                    max="80"
                    step="5"
                    value={currentTimeSpent}
                    onChange={(e) => setCurrentTimeSpent(Number(e.target.value))}
                    className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-right text-lg font-bold text-navy mt-2">
                    {currentTimeSpent} hours
                  </div>
                </div>
              </div>

              <div className="bg-navy/10 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-navy">Your Potential Savings:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monthly Savings:</span>
                    <span className="font-bold text-navy">${savings.monthlySavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Savings:</span>
                    <span className="font-bold text-navy">${savings.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Saved (Weekly):</span>
                    <span className="font-bold text-navy">{savings.timeSavedWeekly}+ hours</span>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* What You Get */}
          <div className="space-y-8 animate-slide-in-left animation-delay-200">
            <div>
              <h3 className="text-2xl font-bold mb-4">What You Get for $97/month:</h3>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-navy flex-shrink-0" />
                    <span className="text-foreground-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-glass backdrop-blur-md rounded-lg p-6">
              <h4 className="font-semibold mb-4">Replaces These Expensive Tools:</h4>
              <div className="space-y-2 text-sm text-foreground-muted">
                <div className="flex justify-between">
                  <span>Helium 10 (Platinum)</span>
                  <span>$97/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Jungle Scout (Suite)</span>
                  <span>$84/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>FeedbackWhiz</span>
                  <span>$59/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>ManageByStats</span>
                  <span>$69/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Keepa API</span>
                  <span>$39/mo</span>
                </div>
                <div className="border-t border-card-border pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total Replaced:</span>
                    <span className="text-destructive">$348/mo</span>
                  </div>
                  <div className="flex justify-between font-semibold text-navy">
                    <span>Synvelo Cost:</span>
                    <span>$97/mo</span>
                  </div>
                  <div className="flex justify-between font-bold text-navy text-lg">
                    <span>You Save:</span>
                    <span>$251/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-up animation-delay-300">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-navy/10 text-navy">
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{metric.value}</div>
              <div className="text-foreground-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mb-16 animate-fade-in-up animation-delay-300">
          <h3 className="text-center text-lg font-semibold text-foreground-muted mb-8">
            Trusted by sellers on these platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center w-16 h-16 bg-glass backdrop-blur-lg rounded-lg hover:opacity-80 transition-all duration-300">
                <span className="font-bold text-navy text-sm">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-glass backdrop-blur-lg hover:bg-glass-hover transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-navy text-navy" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full font-medium">
                      Verified
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-navy transition-colors">{testimonial.name}</CardTitle>
                <div className="text-sm text-foreground-muted">
                  {testimonial.role} • {testimonial.revenue}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;