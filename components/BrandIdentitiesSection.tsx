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
  isWide2x1?: boolean;
  bg?: string;
  imgSrc?: string;
}

const GALLERY_LOGOS: LogoGalleryItem[] = [
  {
    id: 'mark-1',
    name: 'Aether Isometric Hyper-Torus',
    isFeatured2x2: true,
    bg: '#da324f',
    imgSrc: '/logo_001.svg',
    svgMark: null,
  },
  {
    id: 'mark-2',
    name: 'Kinetix Möbius Ribbon',
    isFeatured2x2: false,
    bg: '#edf4fc',
    imgSrc: '/logo_002.svg',
    svgMark: null,
  },
  {
    id: 'mark-3',
    name: 'Vanguard Precision Monogram',
    isFeatured2x2: false,
    bg: '#fff3e1',
    imgSrc: '/logo_003.svg',
    svgMark: null,
  },
  {
    id: 'mark-4',
    name: 'Geometric Vector Monogram',
    isFeatured2x2: false,
    bg: '#2b2d33',
    imgSrc: '/logo_004.svg',
    svgMark: null,
  },
  {
    id: 'mark-5',
    name: 'Morpho Wordmark & Identity',
    isWide2x1: true,
    bg: '#ffffff',
    imgSrc: '/logo_005.svg',
    svgMark: null,
  },
  {
    id: 'mark-6',
    name: 'ScoreCast Gaming Wordmark',
    isWide2x1: true,
    bg: '#15803d',
    imgSrc: '/logo_006.svg',
    svgMark: null,
  },
  {
    id: 'mark-7',
    name: 'ScoreCast Pixel Glyph',
    isFeatured2x2: false,
    bg: '#72c66d',
    imgSrc: '/logo_007.svg',
    svgMark: null,
  },
  {
    id: 'mark-8',
    name: 'LayerLoom Geometric Ribbon',
    isFeatured2x2: false,
    bg: '#0b1329',
    imgSrc: '/logo_008.svg',
    svgMark: null,
  },
  {
    id: 'mark-9',
    name: 'LayerLoom Lab Alchemist Flask',
    isFeatured2x2: false,
    bg: '#581c87',
    imgSrc: '/logo_009.svg',
    svgMark: null,
  },
  {
    id: 'mark-10',
    name: 'Origami Heart Loop Glyph',
    isFeatured2x2: false,
    bg: '#ea580c',
    imgSrc: '/logo_010.svg',
    svgMark: null,
  },
  {
    id: 'mark-11',
    name: 'Atlas Pixel Wings Monogram',
    isFeatured2x2: false,
    bg: '#ffffff',
    imgSrc: '/logo_011.svg',
    svgMark: null,
  },
  {
    id: 'mark-12',
    name: 'ScoreCast Linked Emblem',
    isWide2x1: true,
    bg: '#163820',
    imgSrc: '/logo_012.svg',
    svgMark: null,
  },
];

export function BrandIdentitiesSection() {
  const [selectedLogo, setSelectedLogo] = useState<LogoGalleryItem | null>(null);

  return (
    <div className="design-mode-only" id="designModeContent">
      {/* Section Header */}
      <div className="works-header design-works-header">
        <h2 className="works-title">Logos &amp; Brand Identities</h2>
        <p className="works-subtitle">
          Vector logomarks, wordmarks, and visual identity systems crafted for real and concept brands — built on geometry, intentional colour, and typographic precision.
        </p>
      </div>

      {/* 3-Column Bento Grid Logo Gallery */}
      <div className="logo-gallery-grid" role="region" aria-label="Logo Gallery">
        {GALLERY_LOGOS.map((item) => (
          <div
            key={item.id}
            className={`logo-gallery-item ${item.isFeatured2x2 ? 'featured-2x2' : ''} ${item.isWide2x1 ? 'wide-2x1' : ''}`}
            onClick={() => setSelectedLogo(item)}
            role="button"
            tabIndex={0}
            aria-label={`Inspect ${item.name}`}
            style={item.bg ? { background: item.bg } : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedLogo(item);
              }
            }}
          >
            <div className="logo-gallery-svg-wrap">
              {item.imgSrc ? (
                <img src={item.imgSrc} alt={item.name} className="logo-gallery-svg" />
              ) : (
                item.svgMark
              )}
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
                <div className="brand-modal-glyph-wrap">
                  {selectedLogo.imgSrc ? (
                    <img src={selectedLogo.imgSrc} alt={selectedLogo.name} className="logo-gallery-svg" />
                  ) : (
                    selectedLogo.svgMark
                  )}
                </div>
              </div>
              <div className="brand-showcase-panel light-panel">
                <span className="panel-label">Light Surface</span>
                <div className="brand-modal-glyph-wrap light-glyph">
                  {selectedLogo.imgSrc ? (
                    <img src={selectedLogo.imgSrc} alt={selectedLogo.name} className="logo-gallery-svg" />
                  ) : (
                    selectedLogo.svgMark
                  )}
                </div>
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
