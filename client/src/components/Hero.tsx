import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const technicalBadges = ["RT/EDT", "C50/C80", "D50", "G", "LF/LFC", "STI"];

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium">
              <TrendingUp size={16} className="text-primary" />
              <span>Ingeniería acústica para espacios reales</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Claridad, control e inteligibilidad{" "}
              <span className="text-primary">medibles</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              Modelamos, medimos y mejoramos el sonido de tus espacios para lograr
              claridad, control e inteligibilidad.
            </p>

            {/* Technical Badges */}
            <div className="flex flex-wrap gap-2">
              {technicalBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-md text-xs font-mono font-medium tracking-wide text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("comparador")}
                size="lg"
                className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Ver mejora de una sala
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection("contacto")}
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white hover:text-white shadow-lg transition-all hover:scale-105"
              >
                Solicitar diagnóstico
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Hero Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <img
                  src="/images/hero-room.jpg"
                  alt="Sala tratada acústicamente"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900/10 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
