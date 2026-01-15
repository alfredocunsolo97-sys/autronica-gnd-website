/* Design Philosophy: Cyber-Tuning Dinamico - Header con effetti glassmorphism e neon */
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src="/images/logo-autronica.png" 
                alt="Autronica GND Logo" 
                className="h-14 w-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-wider">
                  AUTRONICA <span className="text-primary">GND</span>
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  Garage Smart Tuning
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium transition-all duration-300 cursor-pointer relative group ${
                    location === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/70 hover:scale-105"
              asChild
            >
              <a href="tel:+390802146765">
                <Phone className="mr-2 h-5 w-5" />
                Chiama Ora
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`text-lg font-medium transition-colors cursor-pointer block py-2 ${
                      location === item.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/50 w-full mt-4"
                asChild
              >
                <a href="tel:+390802146765">
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama Ora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
