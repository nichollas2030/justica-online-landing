
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackToTopButtonProps {
  onClick: () => void;
}

export const BackToTopButton = ({ onClick }: BackToTopButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover-scale will-change-transform touch-friendly"
      size="sm"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="sr-only">Voltar ao topo</span>
    </Button>
  );
};
