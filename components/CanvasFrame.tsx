import React from 'react';
import { ModeSwitcher } from './ModeSwitcher';

interface CanvasFrameProps {
  profile?: {
    heroHeading?: string;
    heroBio?: string;
    isAvailableForWork?: boolean;
    statusText?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    email?: string;
    cvUrl?: string;
  };
}

export function CanvasFrame({ profile }: CanvasFrameProps) {
  const heading = profile?.heroHeading || 'Hey, I’m Isuru';
  const bio = profile?.heroBio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin purus pretium fermentum imperdiet.';
  const isAvailable = profile?.isAvailableForWork !== false;
  const statusText = profile?.statusText || 'AVAILABLE FOR WORK';
  const linkedinUrl = profile?.linkedinUrl || 'https://www.linkedin.com/in/sudarshanawijerathna/';
  const cvUrl = profile?.cvUrl || '#cv';

  return (
    <div className="mobile-frame" id="mobileFrame">
      {/* Inner Canvas with background */}
      <div className="canvas-inner" id="canvasInner" data-mode="build">

        {/* Top Navigation / Logo & Social Bar */}
        <div className="hero-top-bar">
          <div className="hero-logo" aria-label="Logo">
            <img src="/logo-buildmode.svg" alt="Logo" className="hero-logo-img" />
          </div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            aria-label="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        {/* Background Giant Logo Watermark (Behind Noise Overlay) */}
        <img src="/logo-buildmode.svg" alt="" className="bg-logo-watermark" aria-hidden="true" />

        {/* Noise Texture Overlay (behind portrait) */}
        <img src="/noiseoverlay001.jpg" alt="Noise Texture Overlay" className="noise-overlay" id="noiseOverlay" />

        {/* Portrait Image Wrapper (Handles Horizontal Mode Switch) */}
        <div className="portrait-wrapper" id="portraitWrapper">
          <img src="/portrait001.png" alt="Portrait" className="portrait-img" id="portraitImg" />
        </div>

        {/* Shadow Overlay (above portrait, left bottom aligned) */}
        <img src="/shadow001.png" alt="Shadow Overlay" className="shadow-overlay" id="shadowOverlay" />

        {/* Left Docked Tab: Available for Work (Using notch001.svg geometry) */}
        {isAvailable && (
          <div className="docked-tab-left" id="availableTab">
            <svg className="notch-svg" viewBox="0 0 159.7 1320.6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M0,0 v53.23 c0,56.54,30.54,108.67,79.85,136.32 c49.31,27.66,79.85,79.79,79.85,136.33 v768.84 c0,56.54,-30.54,108.67,-79.85,136.32 c-49.31,27.65,-79.85,79.78,-79.85,136.32 v53.24 V0 Z"
              />
            </svg>
            <div className="tab-content">
              <span className="status-dot"></span>
              <span className="tab-text">{statusText}</span>
            </div>
          </div>
        )}

        {/* Hero Bottom Content: Title, Bio, HR & Action Buttons */}
        <div className="hero-content" id="heroContent">
          <h1 className="hero-heading">{heading}</h1>
          <p className="hero-bio">{bio}</p>
          <hr className="hero-divider" />
          <div className="hero-actions">
            <a href="#contact" className="hero-btn btn-talk">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.057 15.057 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-.99-1.11z" />
              </svg>
              <span>Let’s talk</span>
            </a>
            <a
              href={cvUrl}
              className="hero-btn btn-cv"
              target={cvUrl.startsWith('http') || cvUrl.endsWith('.pdf') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Bottom Docked Mode Switcher */}
        <ModeSwitcher />

      </div>
    </div>
  );
}
