
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOptimizedScroll } from "@/hooks/use-optimized-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useOptimizedScroll(() => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className={cn(
              "h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )} />
            <span className={cn(
              "text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              <span className="hidden sm:inline">Advocacia & Direito</span>
              <span className="sm:hidden">A&D</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "transition-colors duration-200 font-medium hover:scale-105 transform",
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary-foreground/80"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("#contato")}
              className={cn(
                "font-semibold px-4 lg:px-6 py-2 transition-all duration-300 hover:scale-105 transform",
                isScrolled 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                  : "bg-white hover:bg-white/90 text-primary"
              )}
            >
              <span className="hidden lg:inline">Agendar Consulta</span>
              <span className="lg:hidden">Consulta</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-all duration-300 hover:scale-110 transform",
              isScrolled 
                ? "text-foreground hover:text-primary" 
                : "text-white hover:text-primary-foreground/80"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <nav className="py-4 space-y-1 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 rounded-md"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection("#contato")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
