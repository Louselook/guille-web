export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { label: "Servicios", id: "servicios" },
    { label: "Antes/Después", id: "comparador" },
    { label: "Soluciones", id: "soluciones" },
    { label: "Proceso", id: "proceso" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              data-testid="button-footer-logo"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-xl font-display font-bold text-primary">RQ</span>
              </div>
              <span className="text-lg font-display font-semibold">
                RoomIQ Acoustics
              </span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ingeniería acústica para espacios reales
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegación</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-sm text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 text-left"
                  data-testid={`link-footer-${section.id}`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <a
                  href="mailto:bitcow@gmail.com"
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  data-testid="link-footer-email"
                >
                  bitcow@gmail.com
                </a>
              </p>
              <p>Medellín, Colombia</p>
              <p className="pt-2 text-xs text-slate-500">
                Lun - Vie: 8:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {currentYear} RoomIQ Acoustics. Ingeniería acústica para espacios reales.
            </p>
            
            {/* Technical Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-mono rounded">
                ISO 3382
              </span>
              <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-mono rounded">
                CATT-Acoustic
              </span>
              <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-mono rounded">
                STI Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
