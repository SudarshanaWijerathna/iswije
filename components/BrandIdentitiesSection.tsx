'use client';

import React, { useState } from 'react';
import { MotionSection } from './MotionSection';
import { IllustrationsSection } from './IllustrationsSection';
import { UiUxSection } from './UiUxSection';
import { DesignToolsSection } from './DesignToolsSection';

export interface LogoGalleryItem {
  id: string;
  name: string;
  svgMark: React.ReactNode;
  isFeatured2x2?: boolean;
}

const GALLERY_LOGOS: LogoGalleryItem[] = [
  {
    id: 'mark-1',
    name: 'Aether Isometric Hyper-Torus',
    isFeatured2x2: true,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#06b6d4" strokeWidth="6" strokeLinejoin="round" fill="rgba(6, 182, 212, 0.08)" />
        <polygon points="100,50 145,75 145,125 100,150 55,125 55,75" stroke="#3b82f6" strokeWidth="5" strokeLinejoin="round" fill="rgba(59, 130, 246, 0.12)" />
        <line x1="100" y1="20" x2="100" y2="50" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <line x1="170" y1="60" x2="145" y2="75" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <line x1="170" y1="140" x2="145" y2="125" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="180" x2="100" y2="150" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="140" x2="55" y2="125" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="60" x2="55" y2="75" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="100" r="14" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    id: 'mark-2',
    name: 'Kinetix Möbius Ribbon',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <path
          d="M60,100 C60,65 95,50 120,70 C145,90 155,130 125,145 C95,160 50,135 60,100 Z"
          stroke="url(#galKinetix1)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M140,100 C140,135 105,150 80,130 C55,110 45,70 75,55 C105,40 150,65 140,100 Z"
          stroke="url(#galKinetix2)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="100" cy="100" r="9" fill="#ec4899" />
        <defs>
          <linearGradient id="galKinetix1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="galKinetix2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'mark-3',
    name: 'Vanguard Precision Monogram',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <path d="M100,22 L172,94 L142,124 L100,82 L58,124 L28,94 Z" fill="#10b981" />
        <path d="M100,78 L150,128 L120,158 L100,138 L80,158 L50,128 Z" fill="#34d399" />
        <path d="M100,132 L130,162 L100,192 L70,162 Z" fill="#6ee7b7" />
      </svg>
    ),
  },
  {
    id: 'mark-4',
    name: 'Lumina Harmonic Wave',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <circle cx="100" cy="100" r="72" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <path d="M46,100 Q73,25 100,100 T154,100" stroke="#6366f1" strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M46,100 Q73,175 100,100 T154,100" stroke="#a855f7" strokeWidth="9" strokeLinecap="round" fill="none" />
        <circle cx="73" cy="62" r="8" fill="#818cf8" />
        <circle cx="127" cy="138" r="8" fill="#c084fc" />
        <circle cx="100" cy="100" r="10" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'mark-5',
    name: 'Hyperion Tesseract Lattice',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <polygon points="100,20 168,59 168,141 100,180 32,141 32,59" stroke="#0284c7" strokeWidth="7" fill="rgba(2, 132, 199, 0.06)" />
        <polygon points="100,58 136,79 136,121 100,142 64,121 64,79" stroke="#38bdf8" strokeWidth="6" fill="rgba(56, 189, 248, 0.16)" />
        <line x1="100" y1="20" x2="100" y2="58" stroke="#38bdf8" strokeWidth="4" />
        <line x1="168" y1="59" x2="136" y2="79" stroke="#38bdf8" strokeWidth="4" />
        <line x1="168" y1="141" x2="136" y2="121" stroke="#38bdf8" strokeWidth="4" />
        <line x1="100" y1="180" x2="100" y2="142" stroke="#38bdf8" strokeWidth="4" />
        <line x1="32" y1="141" x2="64" y2="121" stroke="#38bdf8" strokeWidth="4" />
        <line x1="32" y1="59" x2="64" y2="79" stroke="#38bdf8" strokeWidth="4" />
      </svg>
    ),
  },
  {
    id: 'mark-6',
    name: 'Solstice Eclipse Portal',
    isFeatured2x2: true,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <path d="M38,162 L38,90 A62,62 0 0,1 162,90 L162,162 Z" stroke="#d97706" strokeWidth="9" strokeLinejoin="round" fill="rgba(217, 119, 6, 0.08)" />
        <circle cx="100" cy="85" r="32" fill="#fbbf24" />
        <line x1="24" y1="162" x2="176" y2="162" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'mark-7',
    name: 'Nova Quantum Prism',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <path d="M100,15 L118,82 L185,100 L118,118 L100,185 L82,118 L15,100 L82,82 Z" fill="url(#novaGrad2)" stroke="#f43f5e" strokeWidth="3" />
        <circle cx="100" cy="100" r="16" fill="#ffffff" />
        <circle cx="100" cy="100" r="28" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4 4" />
        <defs>
          <linearGradient id="novaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'mark-8',
    name: 'Chroma Tri-Ribbon',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <polygon points="100,28 172,152 28,152" stroke="#8b5cf6" strokeWidth="10" strokeLinejoin="round" fill="none" />
        <polygon points="100,60 148,142 52,142" stroke="#ec4899" strokeWidth="7" strokeLinejoin="round" fill="rgba(236, 72, 153, 0.1)" />
        <circle cx="100" cy="115" r="14" fill="#06b6d4" />
      </svg>
    ),
  },
  {
    id: 'mark-9',
    name: 'Apex Dual-Facet Crystal',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <polygon points="100,25 160,85 100,175 40,85" stroke="#3b82f6" strokeWidth="6" fill="rgba(59, 130, 246, 0.08)" />
        <line x1="40" y1="85" x2="160" y2="85" stroke="#60a5fa" strokeWidth="5" />
        <line x1="100" y1="25" x2="100" y2="175" stroke="#93c5fd" strokeWidth="4" strokeDasharray="5 5" />
        <circle cx="100" cy="85" r="12" fill="#38bdf8" />
      </svg>
    ),
  },
  {
    id: 'mark-10',
    name: 'Nexus Neural Node',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <circle cx="100" cy="100" r="65" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="4" />
        <circle cx="100" cy="50" r="14" fill="#10b981" />
        <circle cx="58" cy="125" r="14" fill="#34d399" />
        <circle cx="142" cy="125" r="14" fill="#059669" />
        <line x1="100" y1="50" x2="58" y2="125" stroke="#10b981" strokeWidth="5" />
        <line x1="58" y1="125" x2="142" y2="125" stroke="#10b981" strokeWidth="5" />
        <line x1="142" y1="125" x2="100" y2="50" stroke="#10b981" strokeWidth="5" />
        <circle cx="100" cy="100" r="8" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'mark-11',
    name: 'Orbit Planetary Rings',
    isFeatured2x2: false,
    svgMark: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-gallery-svg">
        <circle cx="100" cy="100" r="32" fill="#eab308" />
        <ellipse cx="100" cy="100" rx="76" ry="24" stroke="#fef08a" strokeWidth="6" transform="rotate(-28 100 100)" />
        <circle cx="152" cy="72" r="8" fill="#ffffff" />
      </svg>
    ),
  },
];

export function BrandIdentitiesSection() {
  const [selectedLogo, setSelectedLogo] = useState<LogoGalleryItem | null>(null);

  return (
    <div className="design-mode-only" id="designModeContent">
      {/* Section Header */}
      <div className="works-header design-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge">LOGOS &amp; BRAND IDENTITIES</span>
        </div>
        <h2 className="works-title">Selected Marks</h2>
        <p className="works-subtitle">
          A gallery of vector marks, emblems, and visual identity systems.
        </p>
      </div>

      {/* 3-Column Bento Grid Logo Gallery */}
      <div className="logo-gallery-grid" role="region" aria-label="Logo Gallery">
        {GALLERY_LOGOS.map((item) => (
          <div
            key={item.id}
            className={`logo-gallery-item ${item.isFeatured2x2 ? 'featured-2x2' : ''}`}
            onClick={() => setSelectedLogo(item)}
            role="button"
            tabIndex={0}
            aria-label={`Inspect ${item.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedLogo(item);
              }
            }}
          >
            <div className="logo-gallery-svg-wrap">
              {item.svgMark}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Preview Modal */}
      {selectedLogo && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedLogo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedLogo.name}
        >
          <div className="brand-modal-card logo-gallery-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="brand-modal-close"
              onClick={() => setSelectedLogo(null)}
              aria-label="Close preview"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="brand-modal-header">
              <span className="brand-modal-cat">VECTOR MARK</span>
              <h3 className="brand-modal-title">{selectedLogo.name}</h3>
            </div>

            {/* Dual Theme Showcase (Dark & Light Viewports) */}
            <div className="brand-showcase-split">
              <div className="brand-showcase-panel dark-panel">
                <span className="panel-label">Dark Surface</span>
                <div className="brand-modal-glyph-wrap">{selectedLogo.svgMark}</div>
              </div>
              <div className="brand-showcase-panel light-panel">
                <span className="panel-label">Light Surface</span>
                <div className="brand-modal-glyph-wrap light-glyph">{selectedLogo.svgMark}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Motion Design & After Effects Animations Section */}
      <MotionSection />

      {/* Illustrations & Vector Art Section */}
      <IllustrationsSection />

      {/* UI / UX & Digital Products Section */}
      <UiUxSection />

      {/* Creative Tools & Stack Section */}
      <DesignToolsSection />
    </div>
  );
}
