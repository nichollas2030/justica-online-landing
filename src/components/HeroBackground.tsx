import { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  jpgSrc?: string;
  webpSrc?: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  jpgSrc = '/hero-bg.jpg',
  webpSrc = '/hero-bg.webp',
  fallbackSrc = '/hero-bg.svg',
  className = '',
  children
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const testAndLoadImage = async () => {
      // Lista de fontes por prioridade
      const sources = [
        webpSrc,  // WebP primeiro (melhor compressão)
        jpgSrc,   // JPG como principal
        fallbackSrc // SVG como último recurso
      ];

      for (const src of sources) {
        try {
          const img = new Image();
          const loadPromise = new Promise<boolean>((resolve) => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
          
          img.src = src;
          const loaded = await loadPromise;
          
          if (loaded) {
            setCurrentSrc(src);
            setIsLoaded(true);
            break;
          }
        } catch (error) {
          console.log(`Falha ao carregar ${src}, tentando próxima opção...`);
        }
      }
    };

    testAndLoadImage();
  }, [jpgSrc, webpSrc, fallbackSrc]);

  const backgroundStyles = {
    backgroundImage: currentSrc ? `url('${currentSrc}')` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' as const,
    backgroundAttachment: (window.innerWidth > 768 ? 'fixed' : 'scroll') as 'fixed' | 'scroll',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out'
  };

  return (
    <div 
      className={`absolute inset-0 will-change-transform ${className}`}
      style={backgroundStyles}
    >
      {children}
    </div>
  );
};
