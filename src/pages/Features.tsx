import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Bot, ShoppingCart, BarChart3, Zap, Brain, Target, TrendingUp, 
  CheckCircle, Users, Globe, Lock, Rocket, DollarSign, Eye, 
  MessageSquare, Bell, Database, Cloud, Shield, Code, Smartphone,
  Store, Package, Truck, ArrowRight, Filter
} from "lucide-react";

const Features = () => {
  const [selectedStoreType, setSelectedStoreType] = useState("all");

  const storeTypes = [
    { id: "all", name: "All Features", icon: Globe },
    { id: "amazon-fba", name: "Amazon FBA", icon: Package },
    { id: "amazon-fbm", name: "Amazon FBM", icon: Store },
    { id: "3pl", name: "3PL Operations", icon: Truck },
    { id: "multi-channel", name: "Multi-Channel", icon: Smartphone }
  ];

  const featureCategories = {
    automation: {
      title: "Automation & AI",
      icon: Bot,
      features: [
        {
          title: "Inventory Optimization Agent",
          description: "AI-powered demand forecasting and stock level optimization",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl"],
          benefits: ["Prevent stockouts", "Reduce storage fees", "Optimize cash flow"]
        },
        {
          title: "Dynamic Pricing Agent",
          description: "Automated competitive pricing with profit protection",
          storeTypes: ["amazon-fba", "amazon-fbm", "multi-channel"],
          benefits: ["Win more Buy Box", "Maximize profits", "React to competition"]
        },
        {
          title: "PPC Campaign Agent",
          description: "Autonomous Amazon PPC management and optimization",
          storeTypes: ["amazon-fba", "amazon-fbm"],
          benefits: ["Reduce ACoS", "Increase visibility", "Scale campaigns"]
        },
        {
          title: "Review Management Agent",
          description: "Automated review monitoring and response system",
          storeTypes: ["amazon-fba", "amazon-fbm", "multi-channel"],
          benefits: ["Improve ratings", "Handle negative reviews", "Boost credibility"]
        },
        {
          title: "Compliance Monitor Agent",
          description: "24/7 policy monitoring and compliance alerts",
          storeTypes: ["amazon-fba", "amazon-fbm"],
          benefits: ["Avoid suspensions", "Stay policy compliant", "Risk mitigation"]
        },
        {
          title: "3PL Automation Suite",
          description: "Complete warehouse management and order fulfillment",
          storeTypes: ["3pl"],
          benefits: ["Streamline operations", "Reduce errors", "Scale efficiently"]
        }
      ]
    },
    analytics: {
      title: "Analytics & Reporting",
      icon: BarChart3,
      features: [
        {
          title: "Real-Time P&L Dashboard",
          description: "Live profit and loss tracking with detailed breakdowns",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl", "multi-channel"],
          benefits: ["Track profitability", "Identify top performers", "Monitor expenses"]
        },
        {
          title: "FBA Fee Calculator",
          description: "Accurate Amazon fee calculations and projections",
          storeTypes: ["amazon-fba"],
          benefits: ["Precise cost analysis", "Pricing optimization", "Profit forecasting"]
        },
        {
          title: "Sales Velocity Tracking",
          description: "Monitor product performance and sales trends",
          storeTypes: ["amazon-fba", "amazon-fbm", "multi-channel"],
          benefits: ["Identify trends", "Optimize inventory", "Predict demand"]
        },
        {
          title: "Warehouse Analytics",
          description: "3PL performance metrics and operational insights",
          storeTypes: ["3pl"],
          benefits: ["Optimize workflows", "Track efficiency", "Reduce costs"]
        },
        {
          title: "Multi-Channel Reporting",
          description: "Unified reporting across all sales channels",
          storeTypes: ["multi-channel"],
          benefits: ["Centralized insights", "Cross-channel analysis", "Unified metrics"]
        }
      ]
    },
    operations: {
      title: "Operations Management",
      icon: Package,
      features: [
        {
          title: "FBA Shipment Planner",
          description: "Automated shipment creation and optimization",
          storeTypes: ["amazon-fba"],
          benefits: ["Save time", "Optimize costs", "Streamline process"]
        },
        {
          title: "Multi-Channel Inventory Sync",
          description: "Real-time inventory synchronization across platforms",
          storeTypes: ["multi-channel", "amazon-fbm"],
          benefits: ["Prevent overselling", "Centralized control", "Real-time updates"]
        },
        {
          title: "Order Management System",
          description: "Unified order processing and fulfillment",
          storeTypes: ["amazon-fbm", "3pl", "multi-channel"],
          benefits: ["Streamline fulfillment", "Reduce errors", "Faster processing"]
        },
        {
          title: "Returns Processing",
          description: "Automated returns handling and restocking",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl"],
          benefits: ["Efficient processing", "Reduce losses", "Improve satisfaction"]
        },
        {
          title: "Supplier Management",
          description: "Vendor communication and purchase order automation",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl"],
          benefits: ["Streamline sourcing", "Better relationships", "Cost control"]
        }
      ]
    },
    integrations: {
      title: "Integrations & APIs",
      icon: Code,
      features: [
        {
          title: "Amazon SP-API Suite",
          description: "Complete Amazon Seller Central integration",
          storeTypes: ["amazon-fba", "amazon-fbm"],
          benefits: ["Real-time data", "Automated actions", "Full access"]
        },
        {
          title: "3PL Software Integrations",
          description: "Connect with popular 3PL and WMS systems",
          storeTypes: ["3pl"],
          benefits: ["Seamless workflow", "Data synchronization", "Operational efficiency"]
        },
        {
          title: "Marketplace Connectors",
          description: "Integrate with eBay, Walmart, Shopify, and more",
          storeTypes: ["multi-channel"],
          benefits: ["Expand reach", "Unified management", "Cross-platform sync"]
        },
        {
          title: "Accounting Integrations",
          description: "QuickBooks, Xero, and other accounting software",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl", "multi-channel"],
          benefits: ["Automated bookkeeping", "Financial accuracy", "Tax preparation"]
        },
        {
          title: "Business Intelligence Tools",
          description: "Connect with Tableau, Power BI, and data warehouses",
          storeTypes: ["amazon-fba", "amazon-fbm", "3pl", "multi-channel"],
          benefits: ["Advanced analytics", "Custom reporting", "Data insights"]
        }
      ]
    }
  };

  const getFilteredFeatures = (features: any[]) => {
    if (selectedStoreType === "all") return features;
    return features.filter(feature => feature.storeTypes.includes(selectedStoreType));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
                <Filter className="w-4 h-4" />
                Comprehensive Feature Overview
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Features Built for{" "}
                <span className="text-gradient-navy bg-clip-text text-transparent">Every Business Model</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
                Discover how Synvelo adapts to your specific eCommerce operation, whether you're running Amazon FBA, FBM, 3PL, or multi-channel stores.
              </p>
            </div>

            {/* Store Type Filter */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-lg font-semibold text-center mb-6">Select Your Business Model</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {storeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedStoreType(type.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 flex flex-col items-center gap-2 hover:scale-105 ${
                      selectedStoreType === type.id
                        ? "border-navy bg-navy/10 text-navy"
                        : "border-card-border bg-card hover:bg-card-hover"
                    }`}
                  >
                    <type.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="automation" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="automation">Automation & AI</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>

              {Object.entries(featureCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy/10 text-navy">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredFeatures(category.features).map((feature, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-card-border bg-card">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-lg leading-tight">{feature.title}</CardTitle>
                            <div className="flex gap-1 flex-wrap">
                              {feature.storeTypes.map((type) => {
                                const storeType = storeTypes.find(st => st.id === type);
                                return (
                                  <Badge 
                                    key={type} 
                                    variant="secondary" 
                                    className="text-xs bg-navy/10 text-navy"
                                  >
                                    {storeType?.name || type}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                          <CardDescription className="text-foreground-secondary leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-navy mb-3">Key Benefits:</h4>
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-foreground-muted">
                                <CheckCircle className="w-4 h-4 text-navy flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {getFilteredFeatures(category.features).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-foreground-secondary">
                        No features available for the selected business model in this category.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card border-y border-card-border">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial and see how Synvelo can automate and optimize your specific business model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group bg-black hover:bg-black/80 text-white">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-navy" size="xl" className="group">
                Schedule Demo
                <Eye className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;