import { Button } from "@/components/ui/button";
import { Package, Waves, Grid3x3 } from "lucide-react";

export default function Solutions() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const products = [
    {
      icon: Package,
      title: "Panel absorbente broadband",
      description: "Paneles de 45-100 mm de espesor con materiales de alta densidad y telas acústicas premium. Absorción efectiva en el rango completo de frecuencias. Incluye sistema de montaje profesional.",
      features: ["45-100 mm espesor", "Telas acústicas premium", "Montaje incluido"],
      image: "/images/products/absorbente broadband.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Waves,
      title: "Bass trap de esquina",
      description: "Control preciso de modos resonantes en bajas frecuencias. Diseñados específicamente para esquinas y uniones techo-pared donde se acumulan los problemas de graves. Mejora dramática en la respuesta de bajos.",
      features: ["Control de modos LF", "Diseño para esquinas", "Alta eficiencia"],
      image: "/images/products/Bass trap.png",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Grid3x3,
      title: "Difusor QRD/PRD",
      description: "Difusores de secuencia cuadrática (QRD) y residuos primos (PRD) para mejorar la espacialidad sin reducir energía. Perfectos para salas de mezcla, auditorios y espacios que requieren detalle acústico sin sobre-amortiguamiento.",
      features: ["Mejora espacial", "Preserva energía", "Detalle acústico"],
      image: "/images/products/DIFUSORE QRD.png",
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <section id="soluciones" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Soluciones acústicas
          </h2>
          <p className="text-lg text-muted-foreground">
            Productos diseñados y fabricados bajo estándares profesionales
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                data-testid={`card-solution-${index}`}
              >
                {/* Product Image with Gradient Background */}
                <div className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                  {/* Optional Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <Icon className="w-8 h-8 text-white opacity-70" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full rounded-lg"
                    variant="outline"
                    data-testid={`button-cotizar-${index}`}
                  >
                    Cotizar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
