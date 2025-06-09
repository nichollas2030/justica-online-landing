
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
    <section id="servicos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise especializada em diversas áreas do direito para atender 
            todas as suas necessidades jurídicas com excelência e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
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
