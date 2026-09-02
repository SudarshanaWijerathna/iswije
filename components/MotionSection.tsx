'use client';

import React, { useState } from 'react';

export interface MotionDualVideoItem {
  src: string;
  label: string;
}

export interface MotionProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string[];
  duration: string;
  fps: string;
  resolution: string;
  description: string;
  previewClass: string;
  aspectRatio: string;
  videoSrc?: string;
  dualVideos?: MotionDualVideoItem[];
}

const MOTION_PROJECTS: MotionProjectItem[] = [
  {
    id: 'motion-0',
    title: 'Black Hole — Illustrated Motion Study',
    category: 'VFX & Scientific Visualization',
    tools: ['After Effects', 'Illustrator'],
    duration: '0:15 Loop',
    fps: '24 FPS',
    resolution: '1280 × 720 (16:9 Widescreen)',
    description: 'Stylised motion graphic exploring black hole anatomy — layered accretion disk strokes, photon ring glow, and event horizon depth rendered in a flat illustrated design language.',
    previewClass: 'motion-preview-blackhole',
    aspectRatio: '16 / 9',
    videoSrc: '/motion/black-hole-motion-study.webm',
  },
  {
    id: 'motion-1',
    title: 'Interactive Character Micro-Interactions — Sign-Up & Auth Suite',
    category: 'UI/UX & Character Motion',
    tools: ['After Effects', 'Figma', 'Illustrator'],
    duration: '0:07 Dual Loop',
    fps: '30 FPS',
    resolution: 'Dual 500 × 500 (16:9 Combined Canvas)',
    description: 'Bespoke robot companion micro-interactions designed for seamless onboarding — featuring tactile input state morphing during registration and continuous biometric fingerprint scanning transitions.',
    previewClass: 'motion-preview-dual-suite',
    aspectRatio: '16 / 9',
    dualVideos: [
      {
        src: '/motion/signup-interaction-flow.webm',
        label: 'Registration Flow',
      },
      {
        src: '/motion/authentication-state-transition.webm',
        label: 'Biometric Auth State',
      },
    ],
  },
];

export function MotionSection() {
  const [activeMotion, setActiveMotion] = useState<MotionProjectItem | null>(null);

  return (
    <div className="motion-section-wrapper" id="motionSection">
      {/* Section Header */}
      <div className="works-header motion-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge motion-badge">MOTION DESIGN &amp; VFX</span>
        </div>
        <h2 className="works-title">Motion Graphics &amp; 3D</h2>
        <p className="works-subtitle">
          Keyframed animations, 3D simulations, visual effects, and dynamic micro-interactions crafted in After Effects and motion suites.
        </p>
      </div>

      {/* Motion Grid */}
      <div className="motion-grid">
        {MOTION_PROJECTS.map((item) => (
          <article
            key={item.id}
            className="motion-card motion-card-full"
            onClick={() => setActiveMotion(item)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} animation`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveMotion(item);
              }
            }}
          >
            {/* Visual Screen Area */}
            <div
              className={`motion-card-viewport ${item.previewClass}`}
              style={{ aspectRatio: item.aspectRatio }}
            >
              {item.dualVideos ? (
                <div className="motion-dual-stage">
                  <div className="motion-dual-pane motion-pane-left">
                    <video
                      src={item.dualVideos[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="motion-dual-video"
                    />
                  </div>
                  <div className="motion-dual-divider"></div>
                  <div className="motion-dual-pane motion-pane-right">
                    <video
                      src={item.dualVideos[1].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="motion-dual-video"
                    />
                  </div>
                </div>
              ) : (
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="motion-card-video"
                />
              )}

              {/* Hover Info Overlay */}
              <div className="motion-hover-overlay">
                <span className="motion-hover-cat">{item.category}</span>
                <h3 className="motion-hover-title">{item.title}</h3>
                <p className="motion-hover-desc">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Preview */}
      {activeMotion && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setActiveMotion(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeMotion.title}
        >
          <div className="brand-modal-card motion-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="brand-modal-close"
              onClick={() => setActiveMotion(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="brand-modal-header">
              <span className="brand-modal-cat">{activeMotion.category}</span>
              <h3 className="brand-modal-title">{activeMotion.title}</h3>
            </div>

            {/* Large Stage Viewport with 16:9 ratio */}
            <div
              className={`motion-modal-stage ${activeMotion.previewClass}`}
              style={{ aspectRatio: activeMotion.aspectRatio }}
            >
              {activeMotion.dualVideos ? (
                <div className="motion-dual-stage">
                  <div className="motion-dual-pane motion-pane-left">
                    <video
                      src={activeMotion.dualVideos[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="motion-dual-video"
                    />
                  </div>
                  <div className="motion-dual-divider"></div>
                  <div className="motion-dual-pane motion-pane-right">
                    <video
                      src={activeMotion.dualVideos[1].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="motion-dual-video"
                    />
                  </div>
                </div>
              ) : (
                <video
                  src={activeMotion.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="motion-modal-video"
                />
              )}
            </div>

            <div className="motion-modal-specs-grid">
              <div className="motion-spec-item">
                <span className="spec-label">Timeline Duration</span>
                <span className="spec-value">{activeMotion.duration}</span>
              </div>
              <div className="motion-spec-item">
                <span className="spec-label">Render Rate</span>
                <span className="spec-value">{activeMotion.fps}</span>
              </div>
              <div className="motion-spec-item">
                <span className="spec-label">Resolution</span>
                <span className="spec-value">{activeMotion.resolution}</span>
              </div>
            </div>

            <div className="brand-modal-details">
              <div className="brand-detail-block">
                <h4 className="detail-label">Motion Design Breakdown</h4>
                <p className="detail-value">{activeMotion.description}</p>
              </div>

              <div className="brand-detail-block">
                <h4 className="detail-label">Software Stack</h4>
                <div className="motion-tools-row">
                  {activeMotion.tools.map((t, idx) => (
                    <span key={idx} className="motion-tool-tag modal-tool-tag">
                      {t}
                    </span>
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
