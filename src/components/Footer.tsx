
import { Scale, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const legalLinks = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-xl sm:text-2xl font-bold">Advocacia & Direito</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Há mais de 15 anos oferecendo soluções jurídicas especializadas com 
              excelência, ética e comprometimento. Seu futuro jurídico começa aqui.
            </p>
            
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Av. Paulista, 1500 - 15º andar, São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@advocaciadireito.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Informações Legais</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 sm:mt-6">
              <p className="text-xs text-primary-foreground/60">
                OAB/SP nº 123.456<br />
                CNPJ: 12.345.678/0001-90
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Advocacia & Direito. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm text-primary-foreground/60 mt-2">
            Seu futuro jurídico começa aqui.
          </p>
        </div>
      </div>
    </footer>
  );
};
