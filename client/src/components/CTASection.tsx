import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { getWhatsAppLink } from "@/config/contact";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const whatsappLink = getWhatsAppLink("573024165377");

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
          ¿Listo para oír la diferencia?
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Obtén un diagnóstico profesional y descubre cómo podemos mejorar tu espacio
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
            data-testid="button-whatsapp-cta"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={20} />
              Escríbenos por WhatsApp
            </a>
          </Button>

          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white hover:text-white shadow-lg transition-all hover:scale-105"
            data-testid="button-solicitar-diagnostico-cta"
          >
            <Send className="mr-2" size={20} />
            Solicitar diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
}
