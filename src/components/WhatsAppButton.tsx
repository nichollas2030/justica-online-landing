
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const message = "Olá! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Conversar no WhatsApp</span>
    </Button>
  );
};
