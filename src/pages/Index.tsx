
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main className="relative">
        <HeroSection />
        <div className="relative">
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      {showBackToTop && <BackToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default Index;
