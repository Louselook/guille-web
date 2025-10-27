import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, TrendingDown, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Comparator() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Antes y Después
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados medibles y comprobables en cada proyecto
          </p>
        </div>

        {/* Interactive Comparator */}
        <div className="mb-12">
          <div
            ref={containerRef}
            className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            data-testid="comparator-container"
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200">
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-10 h-10 text-emerald-600" />
                  </div>
                  <p className="text-sm text-emerald-700 font-medium">
                    Coloca despues-1.jpg en<br />/client/public/images/
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-lg shadow-lg uppercase tracking-wide">
                DESPUÉS
              </div>
            </div>

            {/* Before Image (Foreground with Clip) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                    <TrendingDown className="w-10 h-10 text-red-600" />
                  </div>
                  <p className="text-sm text-red-700 font-medium">
                    Coloca antes-1.jpg en<br />/client/public/images/
                  </p>
                </div>
              </div>
              <div className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white font-bold text-sm rounded-lg shadow-lg uppercase tracking-wide">
                ANTES
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary cursor-grab active:cursor-grabbing">
                <div className="flex flex-col items-center">
                  <ChevronUp size={16} className="text-primary -mb-1" />
                  <ChevronDown size={16} className="text-primary -mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Improvements Bar */}
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
        </div>

        {/* Mini Glossary */}
        <div className="max-w-4xl mx-auto">
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
