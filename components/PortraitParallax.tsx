'use client';

import { useEffect } from 'react';

export function PortraitParallax() {
  useEffect(() => {
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const parallaxOffset = scrollY * 0.20;
      document.documentElement.style.setProperty('--portrait-scroll-y', `${parallaxOffset.toFixed(1)}px`);
      ticking = false;
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
