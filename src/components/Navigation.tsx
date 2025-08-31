import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const productItems = [
    { label: "Features", href: "/features" },
    { label: "eCommerce Automation", href: "#ecommerce" },
    { label: "Synvelo 3PL", href: "#3pl" },
  ];

  const resourceItems = [
    { label: "Blogs", href: "#blogs" },
    { label: "Documents and Help", href: "#help" },
    { label: "Changelog", href: "#changelog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-lg">
      <div className="container mx-auto px-6 pt-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg 
              className="w-8 h-8" 
              viewBox="0 0 136.95 118.84" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M55.8598 102.318C51.5398 99.0181 52.0198 92.3781 56.7598 89.7281L65.2598 84.9781C66.9598 84.0281 69.0198 84.0281 70.7198 84.9781L82.3998 91.4981C91.0498 96.3381 101.69 95.8481 109.86 90.2581C113.99 87.4281 119.66 88.7181 122.16 93.0581L136.95 118.678H104.22C86.7398 118.668 69.7498 112.928 55.8598 102.318Z" 
                fill="currentColor" 
                className="text-navy"
              />
              <path 
                d="M54.33 56.4699C59.33 54.3499 64.87 58.0499 64.83 63.4799L64.75 73.2199C64.73 75.1599 63.71 76.9599 62.05 77.9599L50.6 84.8799C42.12 89.9999 37.28 99.4899 38.1 109.36C38.51 114.35 34.59 118.64 29.59 118.67L0 118.84L16.19 90.3999C24.84 75.2099 38.24 63.2899 54.33 56.4699Z" 
                fill="currentColor" 
                className="text-navy"
              />
              <path 
                d="M94.5498 78.5C93.8298 83.89 87.8298 86.77 83.1698 83.97L74.8198 78.95C73.1498 77.95 72.1298 76.15 72.1098 74.21L71.9798 60.83C71.8798 50.92 66.1798 41.93 57.2598 37.62C52.7498 35.44 51.0598 29.88 53.5798 25.56L68.4698 0L84.7298 28.4C93.4098 43.57 96.8598 61.17 94.5498 78.5Z" 
                fill="currentColor" 
                className="text-navy"
              />
            </svg>
            <span className="text-xl font-bold">Synvelo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground-secondary hover:text-navy transition-all duration-200 hover:scale-105 px-3 py-2 rounded-md hover:bg-glass-hover backdrop-blur-sm font-semibold">
                Products
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md shadow-professional rounded-lg p-2 min-w-[200px]">
                {productItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="flex items-center px-3 py-2 rounded-md text-foreground-secondary hover:text-navy hover:bg-navy/10 transition-all duration-200 hover:scale-105 hover:translate-x-1 cursor-pointer group">
                      <span className="group-hover:font-medium transition-all duration-200">{item.label}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company */}
            <a href="#company" className="text-foreground-secondary hover:text-navy transition-all duration-200 hover:scale-105 px-3 py-2 rounded-md hover:bg-glass-hover backdrop-blur-sm font-semibold">
              Company
            </a>

            {/* Pricing */}
            <a href="#pricing" className="text-foreground-secondary hover:text-navy transition-all duration-200 hover:scale-105 px-3 py-2 rounded-md hover:bg-glass-hover backdrop-blur-sm font-semibold">
              Pricing
            </a>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground-secondary hover:text-navy transition-all duration-200 hover:scale-105 px-3 py-2 rounded-md hover:bg-glass-hover backdrop-blur-sm font-semibold">
                Resources
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md shadow-professional rounded-lg p-2 min-w-[200px]">
                {resourceItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="flex items-center px-3 py-2 rounded-md text-foreground-secondary hover:text-navy hover:bg-navy/10 transition-all duration-200 hover:scale-105 hover:translate-x-1 cursor-pointer group">
                      <span className="group-hover:font-medium transition-all duration-200">{item.label}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm" className="bg-black hover:bg-black/80 text-white">
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
                <span className="block text-foreground font-medium px-2">Products</span>
                {productItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 ml-2 text-foreground-secondary hover:text-navy hover:bg-navy/10 rounded-md transition-all duration-200 hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Company */}
              <a
                href="#company"
                className="block px-2 py-2 text-foreground-secondary hover:text-navy hover:bg-navy/10 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                Company
              </a>

              {/* Pricing */}
              <a
                href="#pricing"
                className="block px-2 py-2 text-foreground-secondary hover:text-navy hover:bg-navy/10 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>

              {/* Resources */}
              <div className="space-y-2">
                <span className="block text-foreground font-medium px-2">Resources</span>
                {resourceItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 ml-2 text-foreground-secondary hover:text-navy hover:bg-navy/10 rounded-md transition-all duration-200 hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-secondary">Theme</span>
                  <ThemeToggle />
                </div>
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button variant="hero" size="sm" className="bg-black hover:bg-black/80 text-white">
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