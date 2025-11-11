import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  altBefore?: string;
  altAfter?: string;
  initialPosition?: number; // 0 - 100
  className?: string;
  height?: string; // tailwind height e.g. "h-[350px]" or "h-[500px]"
  testId?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  altBefore = "Imagen antes",
  altAfter = "Imagen después",
  initialPosition = 50,
  className = "",
  height = "h-[350px]",
  testId,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  // move handler: clientX -> percent
  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  // Pointer handlers (unify mouse/touch)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  // keyboard accessibility for the handle
  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - (e.shiftKey ? 10 : 1)));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + (e.shiftKey ? 10 : 1)));
    } else if (e.key === "Home") {
      setPosition(0);
    } else if (e.key === "End") {
      setPosition(100);
    }
  };

  // update position if container resizes (so clipPath remains correct)
  useEffect(() => {
    const onResize = () => {
      // keep percentage — no action needed, but could force re-render if needed
      setPosition((p) => Math.max(0, Math.min(100, p)));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${height} rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      data-testid={testId}
    >
      {/* After (background) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${afterSrc}')` }}
        aria-hidden={false}
      >
        <span className="sr-only">{altAfter}</span>
        <div className="absolute top-4 right-4 px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-lg shadow-lg uppercase tracking-wide">
          {afterLabel}
        </div>
      </div>

      {/* Before (foreground clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${beforeSrc}')`,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
        aria-hidden={false}
      >
        <span className="sr-only">{altBefore}</span>
        <div className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white font-bold text-sm rounded-lg shadow-lg uppercase tracking-wide">
          {beforeLabel}
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-xl"
        style={{ left: `${position}%`, transform: `translateX(-50%)` }}
        aria-hidden
      />

      {/* Handle (keyboard accessible) */}
      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-label={`Comparador: ${Math.round(position)}%`}
        onKeyDown={onHandleKeyDown}
        style={{ left: `${position}%`, transform: `translate(-50%, -50%)` }}
        className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary cursor-grab active:cursor-grabbing"
      >
        <div className="flex flex-col items-center">
          <ChevronUp size={14} className="text-primary -mb-1" />
          <ChevronDown size={14} className="text-primary -mt-1" />
        </div>
      </div>
    </div>
  );
}
