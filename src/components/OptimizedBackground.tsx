import { useOptimizedImage } from '@/hooks/use-optimized-image';

interface OptimizedBackgroundProps {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  lazy?: boolean;
  priority?: boolean;
}

export const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({
  src,
  webpSrc,
  avifSrc,
  placeholder = '',
  alt,
  className = '',
  children,
  lazy = true,
  priority = false
}) => {
  const { currentSrc, isLoaded, error } = useOptimizedImage({
    src,
    webpSrc,
    avifSrc,
    placeholder,
    lazy: lazy && !priority
  });

  // CSS otimizado para performance
  const backgroundStyles = {
    backgroundImage: currentSrc ? `url("${currentSrc}")` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Otimizações para mobile
    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
    willChange: 'transform',
    backfaceVisibility: 'hidden' as const,
    transform: 'translateZ(0)', // Hardware acceleration
  };

  return (
    <div
      data-optimized-image
      className={`${className} transition-opacity duration-700 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={backgroundStyles}
      role="img"
      aria-label={alt}
      {...(priority && { 'data-priority': 'true' })}
    >
      {/* Preload hint para browsers */}
      {priority && currentSrc && (
        <>
          <link rel="preload" as="image" href={currentSrc} />
          {webpSrc && (
            <link rel="preload" as="image" href={webpSrc} type="image/webp" />
          )}
          {avifSrc && (
            <link rel="preload" as="image" href={avifSrc} type="image/avif" />
          )}
        </>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
          <div className="text-white/70 text-sm bg-black/20 px-4 py-2 rounded backdrop-blur-sm">
            Imagem temporariamente indisponível
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
};
