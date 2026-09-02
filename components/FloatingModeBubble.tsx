'use client';

import React, { useState, useEffect, useRef } from 'react';

export function FloatingModeBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<'build' | 'design'>('build');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const modeRef = useRef<'build' | 'design'>('build');
  modeRef.current = mode;

  // Track mode from document / custom event
  useEffect(() => {
    const checkCurrentMode = () => {
      const current = document.body.getAttribute('data-mode') as 'build' | 'design' | null;
      if (current && (current === 'build' || current === 'design')) {
        setMode(current);
      }
    };

    checkCurrentMode();

    const handleModeEvent = (e: any) => {
      if (e.detail?.mode) {
        setMode(e.detail.mode);
      }
    };

    window.addEventListener('portfolioModeChange', handleModeEvent);

    // MutationObserver to track data-mode on document.body
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-mode') {
          checkCurrentMode();
        }
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['data-mode'] });

    return () => {
      window.removeEventListener('portfolioModeChange', handleModeEvent);
      observer.disconnect();
    };
  }, []);

  // Track scroll position to show/hide when passed the build design toggle
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const toggle = document.getElementById('modeSwitchTab');
          if (toggle) {
            const rect = toggle.getBoundingClientRect();
            // When the bottom edge of the mode switcher has passed above the top of the viewport
            setIsVisible(rect.bottom < 0);
          } else {
            // Fallback if toggle is not mounted
            setIsVisible(window.scrollY > 500);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth scroll helper returning a promise when scroll target is reached
  const smoothScrollTo = (targetY: number): Promise<void> => {
    return new Promise((resolve) => {
      const startY = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(startY - targetY) < 5) {
        resolve();
        return;
      }

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });

      let checkInterval: NodeJS.Timeout;
      let timeoutId: NodeJS.Timeout;
      let lastPos = window.pageYOffset || document.documentElement.scrollTop;
      let stationaryCount = 0;

      const finish = () => {
        clearInterval(checkInterval);
        clearTimeout(timeoutId);
        resolve();
      };

      checkInterval = setInterval(() => {
        const currentPos = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentPos - targetY) <= 6) {
          finish();
        } else if (Math.abs(currentPos - lastPos) < 2) {
          stationaryCount++;
          if (stationaryCount >= 5) {
            finish();
          }
        } else {
          stationaryCount = 0;
        }
        lastPos = currentPos;
      }, 50);

      timeoutId = setTimeout(finish, 1400);
    });
  };

  const handleBubbleClick = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const targetMode = modeRef.current === 'build' ? 'design' : 'build';

    // 1. Scroll page all the way up to the top
    await smoothScrollTo(0);

    // 2. Switch to the other mode
    if (typeof (window as any).setPortfolioMode === 'function') {
      (window as any).setPortfolioMode(targetMode);
    } else {
      window.dispatchEvent(new CustomEvent('portfolioModeChange', { detail: { mode: targetMode } }));
      document.body.setAttribute('data-mode', targetMode);
    }

    // 3. Pause briefly to showcase the hero transition & mode switch animation
    await new Promise((resolve) => setTimeout(resolve, 450));

    // 4. Scroll down until the build design toggle passes the screen
    const toggle = document.getElementById('modeSwitchTab');
    const mobileFrame = document.getElementById('mobileFrame');
    let targetScroll = window.innerHeight;
    if (toggle) {
      const rect = toggle.getBoundingClientRect();
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      targetScroll = rect.top + currentScroll + rect.height + 24;
    } else if (mobileFrame) {
      targetScroll = mobileFrame.offsetTop + mobileFrame.offsetHeight + 24;
    }

    await smoothScrollTo(targetScroll);
    setIsTransitioning(false);
  };

  // When in build mode, show design icon (to switch to design)
  // When in design mode, show build icon (to switch to build)
  const targetMode = mode === 'build' ? 'design' : 'build';
  const labelText = targetMode === 'design' ? 'Switch to Design' : 'Switch to Build';

  return (
    <div
      className={`floating-mode-bubble-wrap ${isVisible ? 'visible' : ''} ${
        isTransitioning ? 'transitioning' : ''
      }`}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        className={`floating-mode-bubble ${mode === 'design' ? 'in-design-mode' : 'in-build-mode'}`}
        onClick={handleBubbleClick}
        aria-label={labelText}
        title={labelText}
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="bubble-tooltip">{labelText}</span>

        <div className="bubble-icon-container">
          {mode === 'build' ? (
            /* Show Design Icon when in Build mode */
            <svg
              className="bubble-icon bubble-icon-design"
              viewBox="-40 -40 615 655"
              overflow="visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="50"
              >
                <path d="M253.55,315.63c-54.38-45.57-185.55-2.11-188.04,92.92-2.49,95.03-40.98,134.47-56.51,143.24,114.26,35.85,213.28-17.32,248.5-65.85,35.23-48.53,60.03-116.69-3.95-170.31Z" />
                <path d="M203.27,297.23L428.28,28.71c19.55-23.33,54.3-26.39,77.63-6.84h0c23.33,19.55,26.39,54.3,6.84,77.63l-223.75,267.01" />
                <path d="M253.35,237.47c29.37,1.44,76.68,47.12,86.3,68.61" />
              </g>
            </svg>
          ) : (
            /* Show Build Icon when in Design mode */
            <svg
              className="bubble-icon bubble-icon-build"
              viewBox="-40 -40 840 750"
              overflow="visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="70"
              >
                <polyline points="197.57 74.62 9 320.42 197.57 555.63" />
                <polyline points="562.35 74.62 750.92 320.42 562.35 555.63" />
                <line x1="180.57" y1="658.14" x2="550.86" y2="9" />
              </g>
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
