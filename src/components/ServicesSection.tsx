
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, Building, Heart, Shield, Briefcase } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e obrigações. Soluções completas para questões do dia a dia.",
      features: ["Contratos", "Indenizações", "Propriedade"]
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas, desde a constituição até fusões e aquisições.",
      features: ["Constituição", "Contratos", "Compliance"]
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas tanto para empregados quanto empregadores com eficiência.",
      features: ["CLT", "Processos", "Rescisões"]
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Orientação sensível e especializada em questões familiares, priorizando o bem-estar de todos.",
      features: ["Divórcio", "Pensão", "Guarda"]
    },
    {
      icon: Shield,
      title: "Direito Penal",
      description: "Defesa criminal experiente e estratégica para garantir seus direitos fundamentais.",
      features: ["Defesa", "Habeas Corpus", "Recursos"]
    },
    {
      icon: Building,
      title: "Direito Imobiliário",
      description: "Segurança jurídica em transações imobiliárias, financiamento e regularização de imóveis.",
      features: ["Compra/Venda", "Financiamento", "Regularização"]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Expertise especializada em diversas áreas do direito para atender 
            todas as suas necessidades jurídicas com excelência e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border will-change-transform"
            >
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 sm:p-6 pt-0">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full transition-colors hover:bg-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
