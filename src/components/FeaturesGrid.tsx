import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  Zap, 
  Shield,
  ArrowRight,
  Warehouse,
  TrendingUp
} from "lucide-react";
import warehouseImage from "@/assets/warehouse-3d.jpg";

const FeaturesGrid = () => {
  const fbaFeatures = [
    {
      icon: Bot,
      title: "AI Automation Agents",
      description: "8 autonomous AI agents working 24/7 on inventory, pricing, and optimization",
      metric: "10+ hours saved weekly"
    },
    {
      icon: ShoppingCart,
      title: "Automated Checkout Bots",
      description: "Purchase inventory from WebstaurantStore, Sam's Club, and Costco automatically",
      metric: "Only platform with this feature"
    },
    {
      icon: BarChart3,
      title: "Amazon SP-API Integration",
      description: "11 direct API endpoints for real-time data and profit analytics",
      metric: "Real-time sync"
    },
    {
      icon: Zap,
      title: "Multi-Channel Notifications",
      description: "Discord, SMS, and Email alerts for critical business events",
      metric: "Never miss an opportunity"
    }
  ];

  const threePlFeatures = [
    {
      icon: Warehouse,
      title: "Multi-Tenant Architecture",
      description: "Serve multiple clients with isolated inventory and order management",
      metric: "Unlimited clients"
    },
    {
      icon: TrendingUp,
      title: "TikTok Live Integration",
      description: "First 3PL platform with direct TikTok Live selling integration",
      metric: "Industry first"
    },
    {
      icon: Truck,
      title: "ShipStation Integration",
      description: "Seamless shipping management with real-time tracking updates",
      metric: "Multi-carrier support"
    },
    {
      icon: Shield,
      title: "Inventory Protection",
      description: "Dynamic allocation prevents overselling across all channels",
      metric: "Zero oversells"
    }
  ];

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,136,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Two Powerful Products,{" "}
            <span className="text-gradient-electric">One Ecosystem</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Whether you're scaling your Amazon business or running a 3PL operation, 
            Synvelo provides the automation and insights you need to succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FBA Dashboard Section */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Synvelo FBA Dashboard
              </div>
              <h3 className="text-3xl font-bold mb-4">Amazon Seller Automation</h3>
              <p className="text-foreground-secondary text-lg mb-6">
                Replaces $500+ in monthly tools with one comprehensive platform
              </p>
              <div className="text-2xl font-bold text-electric mb-6">$97/month</div>
            </div>

            <div className="grid gap-4">
              {fbaFeatures.map((feature, index) => (
                <Card key={index} className="group hover:border-electric/30 transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric/10 text-electric group-hover:bg-electric/20 transition-colors">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{feature.title}</CardTitle>
                        <div className="text-xs text-electric font-medium">{feature.metric}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-foreground-secondary">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group w-full lg:w-auto">
              Explore FBA Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* 3PL Section */}
          <div className="space-y-8 animate-slide-in-left animation-delay-200">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-4">
                <Warehouse className="w-4 h-4" />
                Synvelo 3PL
              </div>
              <h3 className="text-3xl font-bold mb-4">Warehouse Management</h3>
              <p className="text-foreground-secondary text-lg mb-6">
                Pay-as-you-go pricing with zero setup fees
              </p>
              <div className="text-2xl font-bold text-electric mb-6">$0.50/order + storage</div>
            </div>

            <div className="grid gap-4">
              {threePlFeatures.map((feature, index) => (
                <Card key={index} className="group hover:border-electric/30 transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric/10 text-electric group-hover:bg-electric/20 transition-colors">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{feature.title}</CardTitle>
                        <div className="text-xs text-electric font-medium">{feature.metric}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-foreground-secondary">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline-electric" size="lg" className="group w-full lg:w-auto">
              Explore 3PL Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* 3D Warehouse Visualization */}
        <div className="mt-20 animate-scale-in animation-delay-400">
          <div className="relative">
            <div className="absolute inset-0 bg-electric/10 rounded-3xl blur-3xl scale-105" />
            <div className="relative bg-gradient-card rounded-3xl p-4 border border-electric/20">
              <img
                src={warehouseImage}
                alt="Modern 3PL warehouse with automation systems"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold mb-2">Future-Ready Infrastructure</h4>
                <p className="text-foreground-secondary">
                  Built for the next generation of ecommerce operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;