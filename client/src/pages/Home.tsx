import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
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
