'use client';

import React, { useState, useEffect } from 'react';

interface ModeSwitcherProps {
  onModeChange?: (mode: 'build' | 'design') => void;
}

export function ModeSwitcher({ onModeChange }: ModeSwitcherProps) {
  const [mode, setMode] = useState<'build' | 'design'>('build');

  const switchMode = (newMode: 'build' | 'design') => {
    setMode(newMode);
    document.body.setAttribute('data-mode', newMode);
    const canvas = document.getElementById('canvasInner');
    if (canvas) {
      canvas.setAttribute('data-mode', newMode);
    }
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  useEffect(() => {
    // Expose globally to maintain backward compatibility
    (window as any).setPortfolioMode = switchMode;
    document.body.setAttribute('data-mode', 'build');
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextMode = mode === 'build' ? 'design' : 'build';
      switchMode(nextMode);
    }
  };

  return (
    <div
      className={`docked-mode-switcher ${mode === 'design' ? 'design-active' : 'build-active'}`}
      id="modeSwitchTab"
      role="tablist"
      aria-label="Mode switcher"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Single Shared Sliding Notch Background */}
      <div className="mode-notch-slider" id="modeNotchSlider" aria-hidden="true">
        <svg className="notch-bottom-svg" viewBox="0 0 645.25 170.15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,170.15c54.36,0,102.91-34,121.51-85.07h0C140.1,34,188.66,0,243.01,0h159.23c54.36,0,102.91,34,121.51,85.07h0c18.59,51.08,67.15,85.08,121.51,85.08H0Z"
          />
        </svg>
      </div>

      {/* Build Button Tab */}
      <button
        type="button"
        className={`mode-tab mode-tab-build ${mode === 'build' ? 'active' : ''}`}
        id="buildModeBtn"
        role="tab"
        aria-selected={mode === 'build'}
        aria-label="Build mode"
        tabIndex={mode === 'build' ? 0 : -1}
        onClick={() => switchMode('build')}
      >
        <div className="mode-content">
          {/* build.svg icon */}
          <svg className="mode-icon build-icon" viewBox="-40 -40 840 750" overflow="visible" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="70">
              <polyline points="197.57 74.62 9 320.42 197.57 555.63" />
              <polyline points="562.35 74.62 750.92 320.42 562.35 555.63" />
              <line x1="180.57" y1="658.14" x2="550.86" y2="9" />
            </g>
          </svg>
          <span className="mode-text">build</span>
        </div>
      </button>

      {/* Design Button Tab */}
      <button
        type="button"
        className={`mode-tab mode-tab-design ${mode === 'design' ? 'active' : ''}`}
        id="designModeBtn"
        role="tab"
        aria-selected={mode === 'design'}
        aria-label="Design mode"
        tabIndex={mode === 'design' ? 0 : -1}
        onClick={() => switchMode('design')}
      >
        <div className="mode-content">
          {/* design.svg icon */}
          <svg className="mode-icon design-icon" viewBox="-40 -40 615 655" overflow="visible" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="50">
              <path d="M253.55,315.63c-54.38-45.57-185.55-2.11-188.04,92.92-2.49,95.03-40.98,134.47-56.51,143.24,114.26,35.85,213.28-17.32,248.5-65.85,35.23-48.53,60.03-116.69-3.95-170.31Z" />
              <path d="M203.27,297.23L428.28,28.71c19.55-23.33,54.3-26.39,77.63-6.84h0c23.33,19.55,26.39,54.3,6.84,77.63l-223.75,267.01" />
              <path d="M253.35,237.47c29.37,1.44,76.68,47.12,86.3,68.61" />
            </g>
          </svg>
          <span className="mode-text">design</span>
        </div>
      </button>
    </div>
  );
}
