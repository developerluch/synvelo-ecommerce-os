import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoModal from "@/components/DemoModal";
import { Bot, ShoppingCart, BarChart3, Zap, Brain, Target, TrendingUp, ArrowRight, CheckCircle, Users, Globe, Lock, Rocket, DollarSign, Eye, MessageSquare, Bell, Database, Cloud, Shield, Code, Smartphone } from "lucide-react";
const FeaturesGrid = () => {
  const coreFeatures = [{
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Widget-based modular dashboard with drag-and-drop customization and live data updates",
    features: ["Multi-store management", "Dark/light mode", "Custom layouts", "Mobile responsive"]
  }, {
    icon: Bot,
    title: "8 AI Automation Agents",
    description: "Autonomous agents handling inventory, pricing, PPC, reviews, and compliance 24/7",
    features: ["Demand forecasting", "Dynamic repricing", "Campaign optimization", "Risk monitoring"]
  }, {
    icon: ShoppingCart,
    title: "Checkout Bot Network",
    description: "Industry-first automated purchasing from WebstaurantStore, Sam's Club, Costco",
    features: ["Price drop triggers", "Multi-item optimization", "Auto-apply coupons", "Spending controls"]
  }, {
    icon: Database,
    title: "11 Amazon SP-APIs",
    description: "Complete integration with Amazon's seller APIs for real-time data and automation",
    features: ["Inventory tracking", "Order management", "Financial reports", "FBA operations"]
  }];
  const automationFeatures = [{
    icon: Brain,
    title: "AI Agents Suite",
    description: "8 specialized AI agents working autonomously on different aspects of your business",
    agents: ["Inventory Optimization Agent", "Pricing Strategy Agent", "PPC Campaign Agent", "Product Research Agent", "Review Management Agent", "Compliance Monitor Agent", "Financial Optimization Agent", "Customer Service Agent"]
  }, {
    icon: Target,
    title: "Smart Notifications",
    description: "Multi-channel alert system keeps you informed without overwhelming you",
    channels: ["Discord webhooks", "Email campaigns", "SMS alerts", "In-app notifications", "Slack integration"]
  }];
  const analyticsFeatures = [{
    title: "Profit & Loss Analytics",
    metrics: ["Real-time P&L", "Product profitability", "ROI analysis", "Fee breakdowns"]
  }, {
    title: "Performance Tracking",
    metrics: ["Sales velocity", "Buy Box win rate", "PPC performance", "Organic vs paid"]
  }, {
    title: "Predictive Insights",
    metrics: ["Demand forecasting", "Seasonal trends", "Competitor analysis", "Market opportunities"]
  }];
  const integrations = [{
    name: "Keepa",
    type: "Price History"
  }, {
    name: "Jungle Scout",
    type: "Product Research"
  }, {
    name: "Helium 10",
    type: "Keywords"
  }, {
    name: "QuickBooks",
    type: "Accounting"
  }, {
    name: "Google Sheets",
    type: "Data Export"
  }, {
    name: "Zapier",
    type: "Workflows"
  }, {
    name: "Stripe",
    type: "Payments"
  }, {
    name: "Plaid",
    type: "Banking"
  }];
  return <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 text-navy text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Synvelo FBA Dashboard
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The Ultimate{" "}
            <span className="text-gradient-navy bg-clip-text text-transparent">Amazon FBA Platform</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-4xl mx-auto mb-8">
            Replace $500+ in monthly tools with our comprehensive eCommerce automation platform. 
            400+ features designed to scale your Amazon business to millions in revenue.
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">400+</div>
              <div className="text-sm text-foreground-muted">Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">$50M+</div>
              <div className="text-sm text-foreground-muted">Sales Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">10+</div>
              <div className="text-sm text-foreground-muted">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">$97</div>
              <div className="text-sm text-foreground-muted">Monthly (vs $500+ competitors)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="mb-20">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {})}
          </div>
        </div>

        {/* Feature Categories Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="automation">Automation & AI</TabsTrigger>
              <TabsTrigger value="analytics">Analytics & Reports</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automation" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {automationFeatures.map((feature, index) => <Card key={index} className="p-6 bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy/10 text-navy">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{feature.title}</h4>
                      </div>
                    </div>
                    <p className="text-foreground-secondary mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {(feature.agents || feature.channels)?.map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          
                          {item}
                        </div>)}
                    </div>
                  </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {analyticsFeatures.map((category, index) => <Card key={index} className="p-6 bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                    <div className="space-y-2">
                      {category.metrics.map((metric, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-navy" />
                          {metric}
                        </div>)}
                    </div>
                  </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {integrations.map((integration, index) => <Card key={index} className="p-4 text-center bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                    <div className="font-semibold text-navy">{integration.name}</div>
                    <div className="text-sm text-foreground-muted">{integration.type}</div>
                  </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="enterprise" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                  <Shield className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Security & Compliance</h4>
                  <p className="text-foreground-secondary text-sm">GDPR compliant, encrypted data, 2FA, audit logs</p>
                </Card>
                <Card className="p-6 text-center bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                  <Cloud className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Scalable Infrastructure</h4>
                  <p className="text-foreground-secondary text-sm">Docker, Kubernetes, Redis caching, 99.9% uptime</p>
                </Card>
                <Card className="p-6 text-center bg-glass backdrop-blur-md hover:bg-glass-hover transition-all duration-300">
                  <Code className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Developer Platform</h4>
                  <p className="text-foreground-secondary text-sm">RESTful API, GraphQL, webhooks, SDK libraries</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pricing CTA */}
        
      </div>
    </section>;
};
export default FeaturesGrid;