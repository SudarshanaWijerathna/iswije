'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export interface LogoDetailItem {
  id: string;
  name: string;
  category: 'geometric' | 'monogram' | 'wordmark' | 'gaming' | 'abstract';
  categoryLabel: string;
  bg?: string;
  imgSrc: string;
  year?: string;
  client?: string;
  description: string;
  tags: string[];
  gridSystem?: string;
  primaryColor?: string;
  aspectClass?: string;
}

export const ALL_LOGOS: LogoDetailItem[] = [
  {
    id: 'mark-1',
    name: 'Aether Isometric Hyper-Torus',
    category: 'geometric',
    categoryLabel: 'Geometric & 3D',
    bg: '#da324f',
    imgSrc: '/logo_001.svg',
    year: '2025',
    client: 'Aether Quantum Labs',
    description: 'Isometric hyper-torus wireframe and multidimensional ribbon mark designed for high-precision quantum data visualization platforms.',
    tags: ['Isometric', 'Hyper-Torus', 'Topology', 'Data Viz'],
    gridSystem: '30° Isometric Grid',
    primaryColor: '#da324f',
    aspectClass: 'featured-2x2',
  },
  {
    id: 'mark-2',
    name: 'Kinetix Möbius Ribbon',
    category: 'geometric',
    categoryLabel: 'Geometric & 3D',
    bg: '#edf4fc',
    imgSrc: '/logo_002.svg',
    year: '2025',
    client: 'Kinetix Logistics Automation',
    description: 'Continuous non-orientable topological manifold ribbon conveying infinite kinetic energy and modern robotics automation.',
    tags: ['Möbius Loop', 'Kinetic', 'Automation', 'Topology'],
    gridSystem: 'Golden Spiral Geometry',
    primaryColor: '#edf4fc',
  },
  {
    id: 'mark-3',
    name: 'Vanguard Precision Monogram',
    category: 'monogram',
    categoryLabel: 'Monograms',
    bg: '#fff3e1',
    imgSrc: '/logo_003.svg',
    year: '2025',
    client: 'Vanguard Ventures',
    description: 'Sharp architectural V monogram with diagonal chamfers and golden-ratio line balance for venture capital branding.',
    tags: ['Monogram', 'Chamfer', 'Fintech', 'Architectural'],
    gridSystem: '45° Diagonal Matrix',
    primaryColor: '#fff3e1',
  },
  {
    id: 'mark-4',
    name: 'Geometric Vector Monogram',
    category: 'monogram',
    categoryLabel: 'Monograms',
    bg: '#2b2d33',
    imgSrc: '/logo_004.svg',
    year: '2024',
    client: 'Modular Consulting',
    description: 'Modular interlocking geometric monogram engineered on an isometric grid for tech consultancy identities.',
    tags: ['Interlocking', 'Isometric', 'Consultancy', 'Grid'],
    gridSystem: 'Hexagonal Grid',
    primaryColor: '#2b2d33',
  },
  {
    id: 'mark-5',
    name: 'Morpho Wordmark & Identity',
    category: 'wordmark',
    categoryLabel: 'Wordmarks',
    bg: '#ffffff',
    imgSrc: '/logo_005.svg',
    year: '2025',
    client: 'Morpho Design Systems',
    description: 'Bespoke high-contrast geometric wordmark with fluid ligature transitions for creative studio & design system suites.',
    tags: ['Typography', 'Wordmark', 'Ligature', 'Design System'],
    gridSystem: 'Baseline & Cap-Height System',
    primaryColor: '#ffffff',
    aspectClass: 'wide-2x1',
  },
  {
    id: 'mark-6',
    name: 'ScoreCast Gaming Wordmark',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    bg: '#15803d',
    imgSrc: '/logo_006.svg',
    year: '2025',
    client: 'ScoreCast Esports Broadcast',
    description: 'High-octane esports typography and dynamic diagonal cuts optimized for competitive gaming broadcasts and overlays.',
    tags: ['Esports', 'Gaming', 'Display Font', 'Broadcast'],
    gridSystem: 'Slanted 15° Italic Grid',
    primaryColor: '#15803d',
    aspectClass: 'wide-2x1',
  },
  {
    id: 'mark-7',
    name: 'ScoreCast Pixel Glyph',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    bg: '#72c66d',
    imgSrc: '/logo_007.svg',
    year: '2025',
    client: 'ScoreCast Arena',
    description: 'Chunky 8-bit inspired arcade pixel glyph representing retro agility, high scores, and community gaming platforms.',
    tags: ['Pixel Art', 'Glyph', 'Arcade', 'Retro'],
    gridSystem: '8x8 Pixel Grid',
    primaryColor: '#72c66d',
  },
  {
    id: 'mark-8',
    name: 'LayerLoom Geometric Ribbon',
    category: 'geometric',
    categoryLabel: 'Geometric & 3D',
    bg: '#0b1329',
    imgSrc: '/logo_008.svg',
    year: '2024',
    client: 'LayerLoom Code Synthesis',
    description: 'Multi-layered overlapping isometric planes symbolizing modular software synthesis and seamless code weaving.',
    tags: ['Layering', 'Isometric Planes', 'DevTools', 'SaaS'],
    gridSystem: '60° Isometric Rhombus Grid',
    primaryColor: '#0b1329',
  },
  {
    id: 'mark-9',
    name: 'LayerLoom Lab Alchemist Flask',
    category: 'abstract',
    categoryLabel: 'Abstract & Emblems',
    bg: '#581c87',
    imgSrc: '/logo_009.svg',
    year: '2025',
    client: 'LayerLoom R&D Lab',
    description: 'Minimalist chemistry beaker silhouette integrated with golden ratio geometry for experimental research labs.',
    tags: ['Alchemy', 'Flask', 'R&D', 'Minimalism'],
    gridSystem: 'Circular Golden Ratio Arcs',
    primaryColor: '#581c87',
  },
  {
    id: 'mark-10',
    name: 'Origami Heart Loop Glyph',
    category: 'abstract',
    categoryLabel: 'Abstract & Emblems',
    bg: '#ea580c',
    imgSrc: '/logo_010.svg',
    year: '2024',
    client: 'CardioCare Community',
    description: 'Precision-folded continuous faceted heart geometry for health-tech, humanitarian initiatives, and community impact.',
    tags: ['Origami', 'Heart', 'HealthTech', 'Faceted'],
    gridSystem: 'Triangular Mesh Geometry',
    primaryColor: '#ea580c',
  },
  {
    id: 'mark-11',
    name: 'Atlas Pixel Wings Monogram',
    category: 'monogram',
    categoryLabel: 'Monograms',
    bg: '#ffffff',
    imgSrc: '/logo_011.svg',
    year: '2025',
    client: 'Atlas Aerospace Software',
    description: 'Aerodynamic pixelated wing crest combining retro digital heritage with modern aerospace software identity.',
    tags: ['Wings', 'Aerospace', 'Pixel Monogram', 'Crest'],
    gridSystem: '16x16 Symmetric Pixel Matrix',
    primaryColor: '#ffffff',
  },
  {
    id: 'mark-12',
    name: 'ScoreCast Linked Emblem',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    bg: '#163820',
    imgSrc: '/logo_012.svg',
    year: '2025',
    client: 'ScoreCast Tournaments',
    description: 'Interlocked geometric shield crest symbolizing unified team spirit, tournament brackets, and competitive fortitude.',
    tags: ['Shield', 'Tournament', 'Emblem', 'Championship'],
    gridSystem: 'Symmetrical Shield Grid',
    primaryColor: '#163820',
    aspectClass: 'wide-2x1',
  },
];

const LOGO_CATEGORIES = [
  { label: 'All Logos', value: 'all' },
  { label: 'Geometric & 3D', value: 'geometric' },
  { label: 'Monograms', value: 'monogram' },
  { label: 'Wordmarks', value: 'wordmark' },
  { label: 'Gaming & Esports', value: 'gaming' },
  { label: 'Abstract & Emblems', value: 'abstract' },
];

export function LogosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLogo, setSelectedLogo] = useState<LogoDetailItem | null>(null);

  const filteredLogos = useMemo(() => {
    return ALL_LOGOS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const nameMatch = item.name.toLowerCase().includes(query);
      const clientMatch = item.client?.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const tagMatch = item.tags.some((t) => t.toLowerCase().includes(query));
      const catMatch = item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && (nameMatch || clientMatch || descMatch || tagMatch || catMatch);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="certs-page-wrapper logos-page-wrapper">
      {/* Top Floating Navigation Bar */}
      <header className="certs-top-nav">
        <Link href="/?mode=design#designModeContent" className="certs-back-link" title="Return to Logos & Brand Identities in Design Mode">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Portfolio</span>
        </Link>
        <div className="certs-nav-actions">
          <span className="certs-count-pill">{filteredLogos.length} Marks</span>
          <a
            href="https://github.com/SudarshanaWijerathna"
            target="_blank"
            rel="noopener noreferrer"
            className="certs-nav-icon-btn"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sudarshanawijerathna/"
            target="_blank"
            rel="noopener noreferrer"
            className="certs-nav-icon-btn"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="certs-container">
        {/* Hero Header Section */}
        <section className="certs-hero-header">
          <div className="certs-badge-pill logos-badge-pill">
            <span className="logos-badge-dot"></span>
            <span>VECTOR IDENTITY &amp; BRAND DESIGN</span>
          </div>
          <h1 className="certs-main-title">Logos &amp; Brand Identities</h1>
          <p className="certs-main-subtitle">
            A comprehensive archive of vector logomarks, monograms, wordmarks, and visual identity systems crafted with geometric precision, intentional colour theory, and bespoke typography.
          </p>

          {/* Key Metrics Strip */}
          <div className="certs-stats-strip">
            <div className="cert-stat-item">
              <span className="cert-stat-num">{ALL_LOGOS.length}</span>
              <span className="cert-stat-lbl">Vector Marks</span>
            </div>
            <div className="cert-stat-divider"></div>
            <div className="cert-stat-item">
              <span className="cert-stat-num">5</span>
              <span className="cert-stat-lbl">Design Styles</span>
            </div>
            <div className="cert-stat-divider"></div>
            <div className="cert-stat-item">
              <span className="cert-stat-num">100%</span>
              <span className="cert-stat-lbl">Scalable SVG</span>
            </div>
          </div>
        </section>

        {/* Filter Controls Bar: Search & Category Tabs */}
        <section className="certs-controls-section">
          {/* Search Box */}
          <div className="certs-search-wrap">
            <svg className="certs-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="certs-search-input"
              placeholder="Search marks by name, style, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search marks"
            />
            {searchQuery && (
              <button
                type="button"
                className="certs-clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="certs-categories-scroll" role="tablist" aria-label="Logo categories">
            {LOGO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`certs-cat-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Logo Gallery Grid */}
        <section className="certs-grid-section">
          {filteredLogos.length > 0 ? (
            <div className="logo-page-grid">
              {filteredLogos.map((item) => (
                <article
                  key={item.id}
                  className={`logo-page-card ${item.aspectClass ? item.aspectClass : ''}`}
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
                  {/* Visual SVG Stage */}
                  <div
                    className="logo-page-stage"
                    style={item.bg ? { background: item.bg } : undefined}
                  >
                    <div className="logo-page-svg-wrap">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="logo-page-svg"
                        loading="lazy"
                      />
                    </div>
                    <div className="logo-page-hover-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>Inspect Mark</span>
                    </div>
                  </div>

                  {/* Meta Bar */}
                  <div className="logo-page-meta">
                    <div className="logo-page-meta-top">
                      <span className="logo-page-cat-badge">{item.categoryLabel}</span>
                      {item.year && <span className="logo-page-year">{item.year}</span>}
                    </div>
                    <h2 className="logo-page-title">{item.name}</h2>
                    <p className="logo-page-desc">{item.description}</p>
                    <div className="logo-page-tags">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="cert-skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="certs-empty-state">
              <div className="certs-empty-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3 className="certs-empty-title">No marks found</h3>
              <p className="certs-empty-desc">
                No logo designs matched &quot;{searchQuery}&quot; in the selected category.
              </p>
              <button
                type="button"
                className="certs-reset-btn"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="certs-page-footer">
          <div className="footer-divider"></div>
          <div className="footer-copyright-row">
            <span className="footer-copy">© 2026 Sudarshana Wijerathna</span>
            <span className="footer-sep">·</span>
            <span className="footer-rights">All rights reserved</span>
          </div>
          <p className="certs-footer-note">
            Vector identity design, brand typography &amp; design systems.
          </p>
          <Link href="/?mode=design#designModeContent" className="certs-footer-home-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Return to Logos in Design Mode</span>
          </Link>
        </footer>
      </main>

      {/* Inspection Modal */}
      {selectedLogo && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedLogo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedLogo.name}
        >
          <div className="brand-modal-card logo-detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <span className="brand-modal-cat">{selectedLogo.categoryLabel}</span>
                <h3 className="cert-modal-title">{selectedLogo.name}</h3>
                {selectedLogo.client && (
                  <p className="cert-modal-subtitle">{selectedLogo.client} · {selectedLogo.year}</p>
                )}
              </div>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedLogo(null)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div className="brand-modal-body-scroll">
              {/* Dual Theme Showcase (Dark & Light Surfaces) */}
              <div className="brand-showcase-split">
                <div className="brand-showcase-panel dark-panel">
                  <span className="panel-label">Dark Surface</span>
                  <div className="brand-modal-glyph-wrap">
                    <img src={selectedLogo.imgSrc} alt={selectedLogo.name} className="logo-gallery-svg" />
                  </div>
                </div>
                <div className="brand-showcase-panel light-panel">
                  <span className="panel-label">Light Surface</span>
                  <div className="brand-modal-glyph-wrap light-glyph">
                    <img src={selectedLogo.imgSrc} alt={selectedLogo.name} className="logo-gallery-svg" />
                  </div>
                </div>
              </div>

              {/* Specs & Construction Breakdown */}
              <div className="logo-modal-specs">
                <div className="motion-spec-item">
                  <span className="spec-label">Grid System</span>
                  <span className="spec-value">{selectedLogo.gridSystem || 'Isometric Vector'}</span>
                </div>
                <div className="motion-spec-item">
                  <span className="spec-label">Format</span>
                  <span className="spec-value">Scalable Vector (SVG)</span>
                </div>
                <div className="motion-spec-item">
                  <span className="spec-label">Category</span>
                  <span className="spec-value">{selectedLogo.categoryLabel}</span>
                </div>
              </div>

              <div className="brand-detail-block">
                <h4 className="detail-label">Design Rationale</h4>
                <p className="detail-value">{selectedLogo.description}</p>
              </div>

              {selectedLogo.tags && selectedLogo.tags.length > 0 && (
                <div className="logo-modal-tags-wrap">
                  {selectedLogo.tags.map((t, idx) => (
                    <span key={idx} className="cert-skill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="cert-modal-footer">
              <a
                href={selectedLogo.imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-verify-btn"
                download
              >
                <span>View Raw Vector SVG</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <button
                type="button"
                className="cert-modal-dismiss-btn"
                onClick={() => setSelectedLogo(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
