
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackToTopButtonProps {
  onClick: () => void;
}

export const BackToTopButton = ({ onClick }: BackToTopButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
      size="sm"
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Voltar ao topo</span>
    </Button>
  );
};
