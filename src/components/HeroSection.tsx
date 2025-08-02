import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image JPG Simples */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay aprimorado com gradiente suave e melhor contraste */}
      <div className="hero-overlay-enhanced" />
      
      {/* Overlay secundário para profundidade e transição suave */}
      <div className="hero-overlay-gradient" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-primary mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
            Defenda Seus Direitos com{" "}
            <span className="text-hero-accent">Especialistas</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-hero-secondary mb-8 sm:mb-10 md:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            Mais de 15 anos de experiência em advocacia especializada. 
            Oferecemos soluções jurídicas completas com excelência, 
            ética e resultados comprovados para indivíduos e empresas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-14 px-2 sm:px-0">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="hero-btn-primary w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl font-semibold shadow-hero-primary transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Agendar Consulta Gratuita
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="hero-btn-secondary w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 sm:px-10 py-4 text-lg sm:text-xl font-medium bg-white/10 backdrop-blur-md shadow-hero-secondary transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce hidden sm:block">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center text-hero-muted hover:text-hero-secondary transition-colors focus-visible:ring-4 focus-visible:ring-white/30 rounded-full p-2"
              aria-label="Rolar para a seção de serviços"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Otimizados para mobile */}
      <div className="absolute top-1/4 left-2 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-2 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};
