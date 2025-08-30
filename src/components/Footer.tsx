import { Button } from "@/components/ui/button";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const productLinks = [
    { label: "FBA Dashboard", href: "#fba" },
    { label: "3PL Solutions", href: "#3pl" },
    { label: "API Access", href: "#api" },
    { label: "Integrations", href: "#integrations" }
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Case Studies", href: "#cases" }
  ];

  const supportLinks = [
    { label: "Documentation", href: "#docs" },
    { label: "Discord Community", href: "#discord" },
    { label: "Email Support", href: "#support" },
    { label: "Status Page", href: "#status" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Data Processing", href: "#data" },
    { label: "Security", href: "#security" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-card-border">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Signup */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-electric/20 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with <span className="text-gradient-electric">Synvelo</span>
          </h3>
          <p className="text-foreground-secondary mb-6 max-w-md mx-auto">
            Get the latest updates on new features, integrations, and ecommerce insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-card-border text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-electric"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-electric text-electric-foreground">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Synvelo</span>
            </div>
            <p className="text-foreground-secondary mb-6 max-w-sm">
              The operating system for modern ecommerce. Automate your Amazon FBA business and 3PL operations with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground-muted hover:text-electric transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-electric transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-electric transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-electric transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-card-border">
          <div className="text-foreground-muted text-sm mb-4 md:mb-0">
            © 2024 Synvelo. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric rounded-full animate-pulse-electric" />
              <span>All systems operational</span>
            </div>
            <span>SOC 2 Compliant</span>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;