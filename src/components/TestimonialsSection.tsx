
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Excelente atendimento e resultados excepcionais. O escritório me ajudou a resolver um processo trabalhista complexo com total profissionalismo.",
      rating: 5,
      result: "Processo ganho em 1ª instância"
    },
    {
      name: "João Santos",
      role: "Contador",
      content: "Recomendo fortemente! A equipe é extremamente competente e sempre disponível para esclarecer dúvidas. Minha empresa está em ótimas mãos.",
      rating: 5,
      result: "Regularização fiscal completa"
    },
    {
      name: "Ana Costa",
      role: "Professora",
      content: "Profissionalismo e humanidade em um só lugar. Me senti acolhida durante todo o processo de divórcio. Gratidão eterna pela dedicação!",
      rating: 5,
      result: "Acordo amigável alcançado"
    },
    {
      name: "Carlos Oliveira",
      role: "Comerciante",
      content: "Escritório de confiança! Me orientaram em uma questão imobiliária complexa e conseguiram um resultado muito além das minhas expectativas.",
      rating: 5,
      result: "Recuperação de R$ 150.000"
    },
    {
      name: "Lucia Pereira",
      role: "Médica",
      content: "Atendimento personalizado e estratégia jurídica impecável. O cuidado com os detalhes fez toda a diferença no resultado do meu caso.",
      rating: 5,
      result: "Liminar concedida"
    },
    {
      name: "Roberto Lima",
      role: "Engenheiro",
      content: "Transparência total em todos os processos. A comunicação é clara e sempre fui mantido informado sobre cada etapa do meu caso.",
      rating: 5,
      result: "Acordo de R$ 80.000"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 1.000 clientes confiaram em nosso trabalho. 
            Conheça alguns depoimentos e resultados alcançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    ✓ {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
