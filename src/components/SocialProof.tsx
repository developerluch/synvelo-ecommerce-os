import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Clock, TrendingUp, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
const SocialProof = () => {
  const [currentRevenue, setCurrentRevenue] = useState(250000);
  const [currentTimeSpent, setCurrentTimeSpent] = useState(40);
  const calculateSavings = () => {
    const monthlySavings = currentTimeSpent * 4 * 25; // hours * weeks * hourly rate
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
  const testimonials = [{
    name: "Sarah Chen",
    role: "Amazon FBA Seller",
    revenue: "$2.4M Annual",
    content: "Synvelo's AI agents saved me 15 hours per week. The ROI was immediate.",
    rating: 5,
    verified: true
  }, {
    name: "Marcus Rodriguez",
    role: "3PL Owner",
    revenue: "500K Orders/Year",
    content: "TikTok Live integration alone increased our client revenue by 300%.",
    rating: 5,
    verified: true
  }, {
    name: "Jennifer Walsh",
    role: "Multi-Channel Seller",
    revenue: "$1.8M Annual",
    content: "Replaced 6 different tools with Synvelo. The automation is incredible.",
    rating: 5,
    verified: true
  }];
  const companyLogos = [{
    name: "Fulfillment by Amazon",
    logo: "FBA"
  }, {
    name: "Shopify Plus",
    logo: "S+"
  }, {
    name: "BigCommerce",
    logo: "BC"
  }, {
    name: "WooCommerce",
    logo: "WC"
  }, {
    name: "Walmart Marketplace",
    logo: "WM"
  }, {
    name: "eBay",
    logo: "EB"
  }];
  const metrics = [{
    label: "Revenue Processed",
    value: "$50M+",
    icon: DollarSign
  }, {
    label: "Hours Saved Weekly",
    value: "10,000+",
    icon: Clock
  }, {
    label: "Active Automations",
    value: "25K+",
    icon: TrendingUp
  }, {
    label: "Happy Customers",
    value: "1,200+",
    icon: Users
  }];
  const features = ["8 AI agents working 24/7", "11 Amazon SP-API endpoints", "Automated checkout bots", "Multi-channel notifications", "Real-time profit analytics", "Inventory optimization"];
  return <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          
          
        </div>

        

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-up animation-delay-300">
          {metrics.map((metric, index) => <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-navy/10 text-navy">
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{metric.value}</div>
              <div className="text-foreground-muted">{metric.label}</div>
            </div>)}
        </div>

        {/* Company Logos */}
        

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-glass backdrop-blur-lg hover:bg-glass-hover transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-navy text-navy" />)}
                  </div>
                  {testimonial.verified && <div className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full font-medium">
                      Verified
                    </div>}
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
            </Card>)}
        </div>
      </div>
    </section>;
};
export default SocialProof;