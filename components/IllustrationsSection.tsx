'use client';

import React, { useState } from 'react';

export interface IllustrationItem {
  id: string;
  title: string;
  category: string;
  palette: string[];
  description: string;
  illustrationSvg: React.ReactNode;
}

const ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 'ill-1',
    title: 'Cyberpunk Neon Metropolis',
    category: 'Isometric & Sci-Fi',
    palette: ['#0f172a', '#06b6d4', '#ec4899', '#f97316'],
    description: 'Isometric cityscape exploring high-density vertical architecture, glowing skybridge transitways, and moody neon backlighting.',
    illustrationSvg: (
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
        <rect width="320" height="220" fill="#090d16" rx="14" />
        {/* Background Grid & Stars */}
        <line x1="0" y1="180" x2="320" y2="180" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" />
        <line x1="0" y1="195" x2="320" y2="195" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
        <line x1="0" y1="210" x2="320" y2="210" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
        {/* Neon City Towers */}
        <rect x="40" y="70" width="44" height="110" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
        <rect x="52" y="85" width="8" height="14" fill="#38bdf8" opacity="0.8" />
        <rect x="66" y="85" width="8" height="14" fill="#ec4899" opacity="0.8" />
        <rect x="52" y="110" width="8" height="14" fill="#38bdf8" opacity="0.8" />
        <rect x="66" y="110" width="8" height="14" fill="#38bdf8" opacity="0.8" />
        {/* Center Main Mega Skyscraper */}
        <polygon points="160,20 200,60 200,180 120,180 120,60" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
        <line x1="160" y1="20" x2="160" y2="180" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="135" y="75" width="14" height="60" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1" />
        <rect x="170" y="75" width="14" height="60" fill="rgba(236, 72, 153, 0.15)" stroke="#ec4899" strokeWidth="1" />
        <polygon points="160,10 160,20 162,20" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
        {/* Right Building */}
        <rect x="230" y="55" width="50" height="125" fill="#18181b" stroke="#ec4899" strokeWidth="2" />
        <circle cx="255" cy="85" r="14" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="1.5" />
        {/* Skybridge */}
        <line x1="84" y1="100" x2="120" y2="100" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
        <line x1="200" y1="95" x2="230" y2="95" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
        {/* Flying Vehicle Drone */}
        <ellipse cx="100" cy="45" rx="14" ry="4" fill="#38bdf8" />
        <line x1="75" y1="45" x2="90" y2="45" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'ill-2',
    title: 'Deep Space Horizon Explorer',
    category: 'Cosmic & Sci-Fi',
    palette: ['#030712', '#3b82f6', '#8b5cf6', '#f43f5e'],
    description: 'Astronomical vector exploration depicting orbital planetary alignments, gravitational rings, and deep-space telemetry arcs.',
    illustrationSvg: (
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
        <rect width="320" height="220" fill="#020617" rx="14" />
        {/* Stars */}
        <circle cx="50" cy="30" r="1.5" fill="#ffffff" opacity="0.8" />
        <circle cx="120" cy="20" r="1" fill="#38bdf8" opacity="0.9" />
        <circle cx="280" cy="40" r="1.5" fill="#ffffff" opacity="0.7" />
        <circle cx="230" cy="80" r="1" fill="#ec4899" opacity="0.8" />
        <circle cx="40" cy="140" r="1" fill="#ffffff" opacity="0.5" />
        {/* Giant Ringed Gas Planet */}
        <circle cx="160" cy="110" r="50" fill="url(#planetGrad)" />
        <ellipse cx="160" cy="110" rx="90" ry="22" stroke="url(#ringGrad)" strokeWidth="4" transform="rotate(-20 160 110)" />
        {/* Moon */}
        <circle cx="240" cy="65" r="12" fill="#f43f5e" />
        <circle cx="236" cy="62" r="3" fill="#ffffff" opacity="0.6" />
        {/* Trajectory Arcs */}
        <path d="M20,180 Q160,60 300,180" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
        <defs>
          <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="60%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'ill-3',
    title: 'Minimalist Botanical Harmony',
    category: 'Editorial & Organic',
    palette: ['#1c1917', '#d97706', '#10b981', '#fef3c7'],
    description: 'Warm, modern editorial composition combining organic flora silhouettes, earthy terracotta textures, and clean geometric arcs.',
    illustrationSvg: (
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
        <rect width="320" height="220" fill="#1c1917" rx="14" />
        {/* Sun Circle */}
        <circle cx="210" cy="85" r="44" fill="#d97706" opacity="0.85" />
        {/* Arch */}
        <path d="M60,190 L60,110 A50,50 0 0,1 160,110 L160,190 Z" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="2" />
        {/* Botanical Stalk & Leaves */}
        <path d="M120,190 Q125,120 170,70" stroke="#10b981" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="140" cy="130" rx="18" ry="8" fill="#34d399" transform="rotate(-35 140 130)" />
        <ellipse cx="115" cy="110" rx="16" ry="7" fill="#10b981" transform="rotate(30 115 110)" />
        <ellipse cx="155" cy="90" rx="18" ry="8" fill="#6ee7b7" transform="rotate(-25 155 90)" />
        {/* Baseline Accent */}
        <line x1="40" y1="190" x2="280" y2="190" stroke="#78716c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'ill-4',
    title: 'Synthwave Wireframe Grid',
    category: 'Retro & Vector',
    palette: ['#09090b', '#ec4899', '#8b5cf6', '#06b6d4'],
    description: 'Perspectival 80s synthwave horizon with vector wireframe neon mountain ranges and radiant gradient solar disk.',
    illustrationSvg: (
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration-svg">
        <rect width="320" height="220" fill="#09090b" rx="14" />
        {/* Radiant Sun */}
        <circle cx="160" cy="90" r="48" fill="url(#synthSun)" />
        {/* Sun horizontal blinds stripes */}
        <line x1="112" y1="80" x2="208" y2="80" stroke="#09090b" strokeWidth="3" />
        <line x1="114" y1="92" x2="206" y2="92" stroke="#09090b" strokeWidth="4" />
        <line x1="118" y1="106" x2="202" y2="106" stroke="#09090b" strokeWidth="5" />
        <line x1="126" y1="120" x2="194" y2="120" stroke="#09090b" strokeWidth="6" />
        {/* Mountain Wireframes */}
        <polygon points="40,140 100,70 160,140" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2" />
        <polygon points="140,140 210,50 280,140" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2" />
        {/* Grid Floor */}
        <line x1="0" y1="140" x2="320" y2="140" stroke="#06b6d4" strokeWidth="2" />
        <line x1="0" y1="155" x2="320" y2="155" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="0" y1="175" x2="320" y2="175" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="0" y1="200" x2="320" y2="200" stroke="#06b6d4" strokeWidth="2" />
        {/* Grid Vanishing Lines */}
        <line x1="160" y1="140" x2="20" y2="220" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="160" y1="140" x2="90" y2="220" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="160" y1="140" x2="160" y2="220" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="160" y1="140" x2="230" y2="220" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="160" y1="140" x2="300" y2="220" stroke="#06b6d4" strokeWidth="1.5" />
        <defs>
          <linearGradient id="synthSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export function IllustrationsSection() {
  const [selectedIll, setSelectedIll] = useState<IllustrationItem | null>(null);

  return (
    <div className="illustrations-section-wrapper" id="illustrationsSection">
      {/* Section Header */}
      <div className="works-header ill-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge ill-badge">ILLUSTRATIONS &amp; VECTOR ART</span>
        </div>
        <h2 className="works-title">Illustrations &amp; Digital Art</h2>
        <p className="works-subtitle">
          Vector artworks, sci-fi concept environments, isometric scenes, and editorial illustrations crafted in Adobe Illustrator.
        </p>
      </div>

      {/* Illustrations Grid */}
      <div className="illustrations-grid">
        {ILLUSTRATIONS.map((item) => (
          <article
            key={item.id}
            className="illustration-card"
            onClick={() => setSelectedIll(item)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedIll(item);
              }
            }}
          >
            <div className="illustration-media-wrap">
              {item.illustrationSvg}
              <div className="illustration-hover-overlay">
                <span>View Artwork</span>
              </div>
            </div>
            <div className="illustration-card-body">
              <div className="ill-cat-tag">{item.category}</div>
              <h3 className="illustration-title">{item.title}</h3>
              <p className="illustration-desc">{item.description}</p>
              <div className="ill-palette-row">
                {item.palette.map((c, idx) => (
                  <span key={idx} className="brand-color-swatch" style={{ backgroundColor: c }}></span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIll && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedIll(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedIll.title}
        >
          <div className="brand-modal-card ill-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="brand-modal-close"
              onClick={() => setSelectedIll(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="brand-modal-header">
              <span className="brand-modal-cat">{selectedIll.category}</span>
              <h3 className="brand-modal-title">{selectedIll.title}</h3>
            </div>

            <div className="ill-modal-stage">
              {selectedIll.illustrationSvg}
            </div>

            <div className="brand-modal-details">
              <div className="brand-detail-block">
                <h4 className="detail-label">Concept &amp; Style</h4>
                <p className="detail-value">{selectedIll.description}</p>
              </div>

              <div className="brand-detail-block">
                <h4 className="detail-label">Palette Scheme</h4>
                <div className="modal-palette-grid">
                  {selectedIll.palette.map((color, idx) => (
                    <div key={idx} className="modal-palette-item">
                      <span className="modal-swatch" style={{ backgroundColor: color }}></span>
                      <span className="modal-hex">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
