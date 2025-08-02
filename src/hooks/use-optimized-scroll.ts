import { useEffect, useRef } from 'react';

type ScrollCallback = () => void;

class ScrollManager {
  private callbacks: Set<ScrollCallback> = new Set();
  private isRegistered = false;
  private lastScrollY = 0;
  private ticking = false;

  private handleScroll = () => {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.callbacks.forEach(callback => callback());
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  subscribe(callback: ScrollCallback) {
    this.callbacks.add(callback);
    
    if (!this.isRegistered) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.isRegistered = true;
    }

    return () => {
      this.callbacks.delete(callback);
      
      if (this.callbacks.size === 0 && this.isRegistered) {
        window.removeEventListener('scroll', this.handleScroll);
        this.isRegistered = false;
      }
    };
  }

  getScrollY() {
    return this.lastScrollY;
  }
}

const scrollManager = new ScrollManager();

export const useOptimizedScroll = (callback: ScrollCallback) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const wrappedCallback = () => callbackRef.current();
    return scrollManager.subscribe(wrappedCallback);
  }, []);
};

export const useScrollPosition = () => {
  const scrollY = scrollManager.getScrollY();
  return scrollY;
};
