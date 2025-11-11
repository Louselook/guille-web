import React from "react";
import BeforeAfter from "./BeforeAfter";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Comparator() {
  // define aquí las parejas: antes/después de la misma sala
  const imagePairs = [
    {
      before: "/images/sala5A-1/antes.jpg",
      after: "/images/sala5A-1/despues.jpg",
      id: "image-1",
    },
    {
      before: "/images/sala5A-2/antes.jpg",
      after: "/images/sala5A-2/despues.jpg",
      id: "image-1",
    },
    {
      before: "/images/sala5A-3/antes.jpg",
      after: "/images/sala5A-3/despues.jpg",
      id: "image-1",
    },
    {
      before: "/images/sala5A-4/antes.jpg",
      after: "/images/sala5A-4/despues.jpg",
      id: "image-1",
    },
  ];

  const improvements = [
    { label: "RT60", change: "down", description: "Tiempo de reverberación reducido" },
    { label: "C50/C80", change: "up", description: "Claridad mejorada" },
    { label: "STI", change: "up", description: "Inteligibilidad aumentada" }
  ];

  const glossary = [
    {
      term: "RT60 / EDT",
      title: "Tiempo de Reverberación",
      description: "El tiempo que tarda el sonido en desvanecerse en un espacio. Espacios con RT60 muy alto suenan 'vivos' o con mucho eco, mientras que valores muy bajos pueden sonar 'muertos'. El objetivo es encontrar el balance ideal según el uso del espacio."
    },
    {
      term: "C50 / C80",
      title: "Claridad del Sonido",
      description: "Mide qué tan claro se escucha el sonido directo comparado con las reflexiones tardías. Valores más altos significan mayor claridad y definición, especialmente importante para voz (C50) y música (C80)."
    },
    {
      term: "STI",
      title: "Inteligibilidad del Habla",
      description: "Índice de Transmisión del Habla (Speech Transmission Index). Mide qué tan fácil es entender las palabras habladas en un espacio. Va de 0 (incomprensible) a 1 (perfecto). Para conferencias y aulas, se busca STI > 0.6."
    }
  ];

  return (
    <section id="comparador" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Antes y Después
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados medibles y comprobables en cada proyecto
          </p>
        </div>

        {/* Grid o columna de comparadores */}
        <div className="mb-12 space-y-8">
          {imagePairs.map((p, i) => (
            <BeforeAfter
              key={p.id}
              beforeSrc={p.before}
              afterSrc={p.after}
              beforeLabel="ANTES"
              afterLabel="DESPUÉS"
              initialPosition={50}
              height="h-[350px] md:h-[500px]"
              testId={`beforeafter-${i}`}
            />
          ))}
        </div>

        {/* Improvements */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {improvements.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg border border-border shadow-sm"
              data-testid={`improvement-${item.label.toLowerCase().replace('/', '-')}`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-mono font-bold text-lg text-foreground">
                  {item.label}
                </span>
                {item.change === "down" ? (
                  <TrendingDown className="text-emerald-600" size={20} />
                ) : (
                  <TrendingUp className="text-emerald-600" size={20} />
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Glossary */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6 text-center">
            ¿Qué significan estos parámetros?
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {glossary.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg overflow-hidden"
                data-testid={`glossary-item-${index}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-sm font-medium rounded">
                      {item.term}
                    </span>
                    <span className="font-semibold text-left">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
