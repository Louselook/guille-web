import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Comparator from "@/components/Comparator";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Cambia a true cuando el bottom del Hero pasa el top de la pantalla
      setScrolledPastHero(rect.bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header scrolled={scrolledPastHero} />
      <main>
        <Hero ref={heroRef} />
        <Services />
        <Comparator />
        <Solutions />
        <Process />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
