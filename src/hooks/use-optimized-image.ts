import { useState, useEffect, useCallback } from 'react';

interface UseOptimizedImageOptions {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  lazy?: boolean;
  threshold?: number;
}

interface UseOptimizedImageReturn {
  currentSrc: string;
  isLoaded: boolean;
  isInView: boolean;
  error: string | null;
}

export const useOptimizedImage = ({
  src,
  webpSrc,
  avifSrc,
  placeholder = '',
  lazy = true,
  threshold = 0.1
}: UseOptimizedImageOptions): UseOptimizedImageReturn => {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [error, setError] = useState<string | null>(null);

  // Detectar suporte a formatos de imagem modernos
  const checkImageFormat = useCallback(async (format: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const testImages: Record<string, string> = {
        webp: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=',
        avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABkAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI='
      };

      const img = new Image();
      img.onload = () => resolve(img.width > 0 && img.height > 0);
      img.onerror = () => resolve(false);
      img.src = testImages[format] || '';
    });
  }, []);

  // Escolher o melhor formato suportado
  const getBestImageSrc = useCallback(async (): Promise<string> => {
    // Verificar suporte a AVIF primeiro (melhor compressão)
    if (avifSrc && await checkImageFormat('avif')) {
      return avifSrc;
    }
    
    // Depois WebP (boa compressão e suporte amplo)
    if (webpSrc && await checkImageFormat('webp')) {
      return webpSrc;
    }
    
    // Fallback para formato original
    return src;
  }, [src, webpSrc, avifSrc, checkImageFormat]);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' }
    );

    const target = document.querySelector('[data-optimized-image]');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [lazy, threshold]);

  // Carregar imagem quando estiver em vista
  useEffect(() => {
    if (!isInView) return;

    let cancelled = false;

    const loadImage = async () => {
      try {
        setError(null);
        const bestSrc = await getBestImageSrc();
        
        if (cancelled) return;

        const img = new Image();
        
        // Preload para melhor UX
        img.loading = 'eager';
        img.decoding = 'async';
        
        img.onload = () => {
          if (!cancelled) {
            setCurrentSrc(bestSrc);
            setIsLoaded(true);
          }
        };
        
        img.onerror = () => {
          if (!cancelled) {
            if (bestSrc !== src) {
              // Tentar fallback
              const fallbackImg = new Image();
              fallbackImg.onload = () => {
                if (!cancelled) {
                  setCurrentSrc(src);
                  setIsLoaded(true);
                }
              };
              fallbackImg.onerror = () => {
                if (!cancelled) {
                  setError('Erro ao carregar imagem');
                }
              };
              fallbackImg.src = src;
            } else {
              setError('Erro ao carregar imagem');
            }
          }
        };
        
        img.src = bestSrc;
      } catch (err) {
        if (!cancelled) {
          setError('Erro ao processar imagem');
        }
      }
    };

    loadImage();

    return () => {
      cancelled = true;
    };
  }, [isInView, src, getBestImageSrc]);

  return {
    currentSrc,
    isLoaded,
    isInView,
    error
  };
};
