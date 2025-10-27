import { Settings, LineChart, Activity, Building2, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Diseño y tratamiento acústico",
      description: "Paneles absorbentes/difractores, bass traps, nubes y cabinas diseñados específicamente para tu espacio.",
      color: "text-blue-500"
    },
    {
      icon: LineChart,
      title: "Modelación predictiva",
      description: "CATT-Acoustic/TUCT — Análisis completo de RT/EDT, C50/C80, D50, G, LF/LFC, STI antes de la implementación.",
      color: "text-primary"
    },
    {
      icon: Activity,
      title: "Mediciones in situ",
      description: "ISO 3382/60268 — Respuesta impulsiva, tiempo de reverberación, STI, ruido de fondo y verificación básica de aislamiento.",
      color: "text-emerald-500"
    },
    {
      icon: Building2,
      title: "Aplicaciones",
      description: "Estudios de grabación, salas de conferencias, aulas, auditorios, iglesias y oficinas abiertas.",
      color: "text-amber-500"
    },
    {
      icon: FileText,
      title: "Entrega ejecutiva",
      description: "Renders profesionales, mapas de parámetros acústicos, memorias de cálculo y recomendaciones costo/beneficio.",
      color: "text-violet-500"
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Servicios especializados
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones acústicas integrales basadas en mediciones científicas y resultados comprobables
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-card-border rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`${service.color} w-6 h-6`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
