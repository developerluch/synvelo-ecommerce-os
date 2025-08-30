import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const productItems = [
    { label: "eCommerce Automation", href: "#ecommerce" },
    { label: "Synvelo 3PL", href: "#3pl" },
  ];

  const resourceItems = [
    { label: "Blogs", href: "#blogs" },
    { label: "Documents and Help", href: "#help" },
    { label: "Changelog", href: "#changelog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 pt-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-navy-foreground">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">Synvelo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground-secondary hover:text-navy transition-colors">
                Products
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-card-border">
                {productItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="text-foreground-secondary hover:text-navy">
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company */}
            <a href="#company" className="text-foreground-secondary hover:text-navy transition-colors">
              Company
            </a>

            {/* Pricing */}
            <a href="#pricing" className="text-foreground-secondary hover:text-navy transition-colors">
              Pricing
            </a>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground-secondary hover:text-navy transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-card-border">
                {resourceItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="text-foreground-secondary hover:text-navy">
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-4">
              {/* Products */}
              <div className="space-y-2">
                <span className="block text-foreground font-medium">Products</span>
                {productItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block pl-4 text-foreground-secondary hover:text-navy transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Company */}
              <a
                href="#company"
                className="block text-foreground-secondary hover:text-navy transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Company
              </a>

              {/* Pricing */}
              <a
                href="#pricing"
                className="block text-foreground-secondary hover:text-navy transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>

              {/* Resources */}
              <div className="space-y-2">
                <span className="block text-foreground font-medium">Resources</span>
                {resourceItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block pl-4 text-foreground-secondary hover:text-navy transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button variant="hero" size="sm">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;