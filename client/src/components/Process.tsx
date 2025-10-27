import { Search, BarChart3, Hammer, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Diagnóstico",
      description: "Evaluación inicial del espacio, identificación de problemas acústicos y definición de objetivos medibles.",
      color: "bg-blue-500"
    },
    {
      number: 2,
      icon: BarChart3,
      title: "Modelación",
      description: "Simulación acústica predictiva con CATT-Acoustic. Optimizamos el diseño antes de cualquier inversión.",
      color: "bg-primary"
    },
    {
      number: 3,
      icon: Hammer,
      title: "Implementación",
      description: "Fabricación e instalación de tratamiento acústico según especificaciones técnicas del proyecto.",
      color: "bg-emerald-500"
    },
    {
      number: 4,
      icon: CheckCircle2,
      title: "Verificación",
      description: "Mediciones post-implementación según ISO 3382 para comprobar cumplimiento de objetivos.",
      color: "bg-violet-500"
    }
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Metodología probada que garantiza resultados medibles
          </p>
        </div>

        {/* Process Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Connector */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary via-emerald-500 to-violet-500 opacity-20"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative"
                  data-testid={`step-${index}`}
                >
                  {/* Step Card */}
                  <div className="bg-white border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Number Circle */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${step.color} flex items-center justify-center shadow-lg relative z-10`}>
                      <span className="text-2xl font-display font-bold text-white">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-foreground/70" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-32 -right-4 w-8 h-8 flex items-center justify-center z-20">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative pl-20"
                data-testid={`step-mobile-${index}`}
              >
                {/* Number Circle */}
                <div className={`absolute left-0 top-0 w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-xl font-display font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Vertical Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-border"></div>
                )}

                {/* Card */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4 mb-3">
                    <Icon className="w-6 h-6 text-foreground/70 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
