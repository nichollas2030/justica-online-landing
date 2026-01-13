
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Trophy } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "Anos de Experiência",
      description: "Tradição e confiança com o mercado"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clientes Atendidos",
      description: "Satisfação garantida"
    },
    {
      icon: Trophy,
      number: "95%",
      label: "Casos Bem-sucedidos",
      description: "Resultados comprovados"
    },
    {
      icon: Award,
      number: "50+",
      label: "Reconhecimentos",
      description: "Excelência reconhecida"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Sobre Nosso Escritório
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Fundado em 2008, nosso escritório de advocacia se consolidou como referência 
                em excelência jurídica, combinando tradição, inovação e comprometimento com 
                resultados excepcionais para nossos clientes.
              </p>
              
              <p>
                Nossa equipe multidisciplinar é formada por advogados especialistas em 
                diversas áreas do direito, unidos pela paixão pela justiça e pela busca 
                constante da satisfação do cliente.
              </p>
              
              <p>
                Acreditamos que cada caso é único e merece atenção personalizada. Por isso, 
                desenvolvemos estratégias jurídicas sob medida, sempre priorizando a ética, 
                transparência e comunicação clara com nossos clientes.
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Nossos Valores</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Excelência e qualidade em todos os serviços
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Ética e transparência nas relações
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Comprometimento com resultados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Atendimento humanizado e personalizado
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border will-change-transform">
                <CardContent className="p-0">
                  <div className="mb-3 sm:mb-4 mx-auto w-fit p-2 sm:p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-card-foreground mb-1 text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
