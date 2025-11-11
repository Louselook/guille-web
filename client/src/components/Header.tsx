import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Servicios", id: "servicios" },
    { label: "Antes/Después", id: "comparador" },
    { label: "Soluciones", id: "soluciones" },
    { label: "Proceso", id: "proceso" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between h-20 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <span
                className={`text-2xl font-display font-bold transition-colors duration-500 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                RQ
              </span>
            </div>
            <span
              className={`text-xl font-display font-semibold transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-white"
              } hidden sm:block`}
            >
              RoomIQ Acoustics
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/80 hover:text-primary"
              } transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 ${
            scrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </header>

  );
}
