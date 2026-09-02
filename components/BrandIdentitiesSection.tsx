'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MotionSection } from './MotionSection';
import { IllustrationsSection } from './IllustrationsSection';
import { UiUxSection } from './UiUxSection';
import { DesignToolsSection } from './DesignToolsSection';

export interface LogoGalleryItem {
  id: string;
  name: string;
  categoryLabel?: string;
  bg?: string;
  imgSrc: string;
}

const COLUMN_1_LOGOS: LogoGalleryItem[] = [
  { id: 'mark-1', name: 'Aether Isometric Hyper-Torus', categoryLabel: 'Geometric & 3D', bg: '#da324f', imgSrc: '/logo_001.svg' },
  { id: 'mark-5', name: 'Morpho Wordmark & Identity', categoryLabel: 'Wordmarks', bg: '#ffffff', imgSrc: '/logo_005.svg' },
  { id: 'mark-9', name: 'LayerLoom Lab Alchemist Flask', categoryLabel: 'Abstract & Emblems', bg: '#581c87', imgSrc: '/logo_009.svg' },
];

const COLUMN_2_LOGOS: LogoGalleryItem[] = [
  { id: 'mark-2', name: 'Kinetix Möbius Ribbon', categoryLabel: 'Geometric & 3D', bg: '#edf4fc', imgSrc: '/logo_002.svg' },
  { id: 'mark-6', name: 'ScoreCast Gaming Wordmark', categoryLabel: 'Gaming & Esports', bg: '#15803d', imgSrc: '/logo_006.svg' },
  { id: 'mark-10', name: 'Origami Heart Loop Glyph', categoryLabel: 'Abstract & Emblems', bg: '#ea580c', imgSrc: '/logo_010.svg' },
];

const COLUMN_3_LOGOS: LogoGalleryItem[] = [
  { id: 'mark-3', name: 'Vanguard Precision Monogram', categoryLabel: 'Monograms', bg: '#fff3e1', imgSrc: '/logo_003.svg' },
  { id: 'mark-7', name: 'ScoreCast Pixel Glyph', categoryLabel: 'Gaming & Esports', bg: '#72c66d', imgSrc: '/logo_007.svg' },
  { id: 'mark-11', name: 'Atlas Pixel Wings Monogram', categoryLabel: 'Monograms', bg: '#ffffff', imgSrc: '/logo_011.svg' },
];

const COLUMN_4_LOGOS: LogoGalleryItem[] = [
  { id: 'mark-4', name: 'Geometric Vector Monogram', categoryLabel: 'Monograms', bg: '#2b2d33', imgSrc: '/logo_004.svg' },
  { id: 'mark-8', name: 'LayerLoom Geometric Ribbon', categoryLabel: 'Geometric & 3D', bg: '#0b1329', imgSrc: '/logo_008.svg' },
  { id: 'mark-12', name: 'ScoreCast Linked Emblem', categoryLabel: 'Gaming & Esports', bg: '#163820', imgSrc: '/logo_012.svg' },
];

export function BrandIdentitiesSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      const offset = (windowHeight / 2) - (rect.top + rect.height / 2);
      setScrollDelta(offset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  const col1Items = [...COLUMN_1_LOGOS, ...COLUMN_1_LOGOS, ...COLUMN_1_LOGOS, ...COLUMN_1_LOGOS];
  const col2Items = [...COLUMN_2_LOGOS, ...COLUMN_2_LOGOS, ...COLUMN_2_LOGOS, ...COLUMN_2_LOGOS];
  const col3Items = [...COLUMN_3_LOGOS, ...COLUMN_3_LOGOS, ...COLUMN_3_LOGOS, ...COLUMN_3_LOGOS];
  const col4Items = [...COLUMN_4_LOGOS, ...COLUMN_4_LOGOS, ...COLUMN_4_LOGOS, ...COLUMN_4_LOGOS];

  return (
    <div className="design-mode-only" id="designModeContent">
      {/* Section Header */}
      <div className="works-header design-works-header">
        <h2 className="works-title">Logos &amp; Brand Identities</h2>
      </div>

      {/* 4 Multi-Directional Parallax Logo Stream Stage (-30 deg Rotated) */}
      <div className="logos-showcase-stage" ref={sectionRef} role="region" aria-label="Logo Showcase Stream">
        <div className="logos-angled-container">
          {/* Column 1: Moves UP on scroll */}
          <div
            className="logos-stream-col logos-col-1"
            style={{
              transform: `translate3d(0, calc(-120px - ${scrollDelta * 0.35}px), 0)`,
            }}
          >
            {col1Items.map((item, idx) => (
              <div
                key={`col1-${item.id}-${idx}`}
                className="logo-stream-card"
                style={item.bg ? { background: item.bg } : undefined}
                title={item.name}
              >
                <div className="logo-stream-svg-wrap">
                  <img src={item.imgSrc} alt={item.name} className="logo-stream-svg" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Moves DOWN on scroll */}
          <div
            className="logos-stream-col logos-col-2"
            style={{
              transform: `translate3d(0, calc(-360px + ${scrollDelta * 0.35}px), 0)`,
            }}
          >
            {col2Items.map((item, idx) => (
              <div
                key={`col2-${item.id}-${idx}`}
                className="logo-stream-card"
                style={item.bg ? { background: item.bg } : undefined}
                title={item.name}
              >
                <div className="logo-stream-svg-wrap">
                  <img src={item.imgSrc} alt={item.name} className="logo-stream-svg" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Moves UP on scroll */}
          <div
            className="logos-stream-col logos-col-3"
            style={{
              transform: `translate3d(0, calc(-600px - ${scrollDelta * 0.35}px), 0)`,
            }}
          >
            {col3Items.map((item, idx) => (
              <div
                key={`col3-${item.id}-${idx}`}
                className="logo-stream-card"
                style={item.bg ? { background: item.bg } : undefined}
                title={item.name}
              >
                <div className="logo-stream-svg-wrap">
                  <img src={item.imgSrc} alt={item.name} className="logo-stream-svg" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 4: Moves DOWN on scroll */}
          <div
            className="logos-stream-col logos-col-4"
            style={{
              transform: `translate3d(0, calc(-840px + ${scrollDelta * 0.35}px), 0)`,
            }}
          >
            {col4Items.map((item, idx) => (
              <div
                key={`col4-${item.id}-${idx}`}
                className="logo-stream-card"
                style={item.bg ? { background: item.bg } : undefined}
                title={item.name}
              >
                <div className="logo-stream-svg-wrap">
                  <img src={item.imgSrc} alt={item.name} className="logo-stream-svg" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-Aligned Description & View More Button inside the Stage */}
        <div className="logos-stage-bottom-overlay">
          <p className="logos-stage-desc">
            Vector logomarks, wordmarks, and visual identity systems crafted for real and concept brands — built on geometry, intentional colour, and typographic precision.
          </p>

          <Link href="/logos" className="logos-view-more-btn" title="Explore All Logos & Brand Identities">
            <span>View More</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

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
