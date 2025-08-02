import { useState, useEffect } from 'react';

interface ResponsiveBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
}

export const useResponsive = (): ResponsiveBreakpoints => {
  const [breakpoints, setBreakpoints] = useState<ResponsiveBreakpoints>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setBreakpoints({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1280,
        isLargeDesktop: width >= 1280,
        screenWidth: width,
        screenHeight: height,
      });
    };

    // Initial check
    updateBreakpoints();

    // Add event listener
    window.addEventListener('resize', updateBreakpoints);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoints);
  }, []);

  return breakpoints;
};

// Hook para detectar dispositivos touch
export const useTouch = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouch();
  }, []);

  return isTouch;
};

// Hook para scroll suave otimizado
export const useSmoothScroll = () => {
  const scrollToElement = (
    elementId: string, 
    offset: number = 80,
    behavior: ScrollBehavior = 'smooth'
  ) => {
    const element = document.querySelector(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: behavior,
      });
    }
  };

  return { scrollToElement };
};
