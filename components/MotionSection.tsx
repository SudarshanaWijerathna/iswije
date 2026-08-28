'use client';

import React, { useState } from 'react';

export interface MotionProjectItem {
  id: string;
  title: string;
  tools: string[];
  duration: string;
  fps: string;
  description: string;
  previewClass: string;
  animatedGraphic: React.ReactNode;
}

const MOTION_PROJECTS: MotionProjectItem[] = [
  {
    id: 'motion-1',
    title: 'Quantum Core Simulation',
    tools: ['After Effects', 'Cinema 4D', 'Red Giant Trapcode'],
    duration: '0:15 Loop',
    fps: '60 FPS',
    description: '3D particle physics simulation with dynamic gravitational lens distortion, chromatic dispersion, and volumetric glow compositing.',
    previewClass: 'motion-preview-quantum',
    animatedGraphic: (
      <div className="motion-scene motion-scene-quantum">
        <div className="quantum-core-glow"></div>
        <div className="quantum-ring ring-1"></div>
        <div className="quantum-ring ring-2"></div>
        <div className="quantum-ring ring-3"></div>
        <div className="quantum-particle-burst"></div>
      </div>
    ),
  },
  {
    id: 'motion-2',
    title: 'Futuristic HUD & Hologram Telemetry',
    tools: ['After Effects', 'Illustrator', 'Expressions'],
    duration: '0:20 Loop',
    fps: '60 FPS',
    description: 'FUI sci-fi interface animation featuring procedural holographic telemetry, scanning radar sweeps, and glitch keyframing.',
    previewClass: 'motion-preview-hud',
    animatedGraphic: (
      <div className="motion-scene motion-scene-hud">
        <div className="hud-grid-bg"></div>
        <div className="hud-radar-sweep"></div>
        <div className="hud-crosshair"></div>
        <div className="hud-circle-ring"></div>
        <div className="hud-telemetry-text">
          <span>SCAN: ACTIVE</span>
          <span>FPS: 60.0</span>
        </div>
      </div>
    ),
  },
  {
    id: 'motion-3',
    title: 'Kinetic Typography & Title Reveal',
    tools: ['After Effects', 'Premiere Pro', 'Type Rig'],
    duration: '0:12 Loop',
    fps: '60 FPS',
    description: 'Syncopated typographic rhythm with dynamic variable font axis distortion, geometric split-screen wipe transitions, and camera tracking.',
    previewClass: 'motion-preview-typo',
    animatedGraphic: (
      <div className="motion-scene motion-scene-typo">
        <div className="typo-kinetic-row row-1">
          <span>CREATE • EXPLORE • DESIGN •</span>
        </div>
        <div className="typo-kinetic-row row-2">
          <span>MOTION • KEYFRAMES • RHYTHM •</span>
        </div>
        <div className="typo-kinetic-badge">AE COMP</div>
      </div>
    ),
  },
  {
    id: 'motion-4',
    title: '3D Glass Caustics & Fluid Dynamics',
    tools: ['After Effects', 'Blender', 'Octane Render'],
    duration: '0:18 Loop',
    fps: '60 FPS',
    description: 'Raytraced chromatic refraction with liquid surface deformation, caustics light projection, and post-processed optical flares.',
    previewClass: 'motion-preview-glass',
    animatedGraphic: (
      <div className="motion-scene motion-scene-glass">
        <div className="glass-orb-container">
          <div className="glass-orb-body"></div>
          <div className="glass-caustic-light"></div>
          <div className="glass-reflection-sweep"></div>
        </div>
      </div>
    ),
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
            className="motion-card"
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
            <div className={`motion-card-viewport ${item.previewClass}`}>
              {item.animatedGraphic}

              {/* Status Badges */}
              <div className="motion-viewport-badges">
                <span className="motion-badge-pill motion-fps-pill">{item.fps}</span>
                <span className="motion-badge-pill motion-time-pill">{item.duration}</span>
              </div>

              {/* Play Overlay */}
              <div className="motion-play-overlay">
                <div className="motion-play-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="motion-play-text">Inspect Composition</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="motion-card-body">
              <h3 className="motion-card-title">{item.title}</h3>
              <p className="motion-card-desc">{item.description}</p>
              <div className="motion-tools-row">
                {item.tools.map((tool, idx) => (
                  <span key={idx} className="motion-tool-tag">
                    {tool}
                  </span>
                ))}
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
              <span className="brand-modal-cat">AFTER EFFECTS COMPOSITION</span>
              <h3 className="brand-modal-title">{activeMotion.title}</h3>
            </div>

            {/* Large Stage Viewport */}
            <div className={`motion-modal-stage ${activeMotion.previewClass}`}>
              {activeMotion.animatedGraphic}
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
                <span className="spec-value">3840 × 2160 (4K UHD)</span>
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
