import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <nav 
      className="fixed z-[1000] flex items-center justify-center w-full"
      style={{
        top: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: "24px",
        padding: "12px 20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        minWidth: "auto",
        width: "fit-content"
      }}
    >
      <div className="flex items-center gap-2">
        {/* Navigation Items */}
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="hidden md:inline-block text-white/90 hover:text-white font-medium transition-all duration-300 ease-cubic-bezier hover:bg-white/15 hover:transform hover:-translate-y-0.5 hover:shadow-lg px-4 py-2 rounded-2xl text-sm"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none"
            }}
          >
            {item.label}
          </a>
        ))}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;