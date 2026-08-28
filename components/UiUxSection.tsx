'use client';

import React, { useState } from 'react';

export interface UiUxProjectItem {
  id: string;
  title: string;
  category: string;
  platform: string;
  summary: string;
  tags: string[];
  uiMockup: React.ReactNode;
}

const UI_UX_PROJECTS: UiUxProjectItem[] = [
  {
    id: 'ui-1',
    title: 'Nova Pay — Neobank & Wealth OS',
    category: 'FinTech Mobile App',
    platform: 'iOS & Android • Figma',
    summary: 'High-trust mobile banking experience featuring frictionless global transfers, real-time portfolio allocations, and tactile glassmorphic card switching.',
    tags: ['Design System', 'User Flow', 'Interactive Prototype', 'Dark UI'],
    uiMockup: (
      <div className="ui-mockup-screen screen-novapay">
        <div className="ui-phone-notch"></div>
        <div className="ui-screen-header">
          <div className="ui-user-avatar"></div>
          <div className="ui-badge-pill">PREMIUM</div>
        </div>
        <div className="ui-balance-card">
          <span className="ui-bal-label">TOTAL ASSETS</span>
          <span className="ui-bal-amount">$84,290.50</span>
          <span className="ui-bal-growth">+14.8% this month</span>
        </div>
        <div className="ui-actions-row">
          <div className="ui-action-btn"><i className="fa-solid fa-arrow-up-right-from-square"></i> Send</div>
          <div className="ui-action-btn"><i className="fa-solid fa-arrow-down"></i> Receive</div>
          <div className="ui-action-btn"><i className="fa-solid fa-chart-pie"></i> Invest</div>
        </div>
        <div className="ui-recent-tx">
          <div className="ui-tx-item">
            <div className="ui-tx-icon tx-aether"></div>
            <div className="ui-tx-info">
              <span className="ui-tx-name">Stripe Payout</span>
              <span className="ui-tx-date">Today, 2:15 PM</span>
            </div>
            <span className="ui-tx-val positive">+$4,200.00</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ui-2',
    title: 'Chronos OS — Distributed Cloud Analytics',
    category: 'Enterprise SaaS Dashboard',
    platform: 'Web Desktop • Figma',
    summary: 'A unified telemetry dashboard designed for infrastructure engineers to visualize distributed mesh topology, query latencies, and service level metrics.',
    tags: ['Dashboard UI', 'Data Viz', 'Component Library', 'Design Tokens'],
    uiMockup: (
      <div className="ui-mockup-screen screen-chronos">
        <div className="ui-dash-topbar">
          <div className="ui-dash-breadcrumbs">
            <span className="ui-crumb active">Production Cluster</span>
            <span className="ui-crumb-sep">/</span>
            <span className="ui-crumb">us-east-1</span>
          </div>
          <span className="ui-status-dot online">Healthy (99.99%)</span>
        </div>
        <div className="ui-dash-metric-cards">
          <div className="ui-dash-metric">
            <span className="metric-label">Latency p99</span>
            <span className="metric-val text-cyan">1.8 ms</span>
          </div>
          <div className="ui-dash-metric">
            <span className="metric-label">Throughput</span>
            <span className="metric-val text-emerald">124k req/s</span>
          </div>
        </div>
        <div className="ui-dash-chart-frame">
          <div className="ui-chart-bar" style={{ height: '60%' }}></div>
          <div className="ui-chart-bar" style={{ height: '85%' }}></div>
          <div className="ui-chart-bar" style={{ height: '40%' }}></div>
          <div className="ui-chart-bar" style={{ height: '95%' }}></div>
          <div className="ui-chart-bar" style={{ height: '70%' }}></div>
          <div className="ui-chart-bar" style={{ height: '80%' }}></div>
        </div>
      </div>
    ),
  },
  {
    id: 'ui-3',
    title: 'Aetheria — 3D Generative Creative Studio',
    category: 'Spatial Design Software',
    platform: 'Desktop macOS • Figma & Spline',
    summary: 'A futuristic creative canvas interface combining procedural node graphs, 3D viewport spatial controls, and AI prompt engineering tools.',
    tags: ['Creative Tool', 'Node UI', 'Spatial Canvas', 'Dark Mode'],
    uiMockup: (
      <div className="ui-mockup-screen screen-aetheria">
        <div className="ui-studio-header">
          <span className="studio-brand">AETHERIA STUDIO</span>
          <div className="studio-tools-bar">
            <span className="tool-dot active"></span>
            <span className="tool-dot"></span>
            <span className="tool-dot"></span>
          </div>
        </div>
        <div className="ui-studio-viewport">
          <div className="ui-3d-wireframe-cube"></div>
          <div className="ui-floating-node-pill">Prompt: Radiant Glass Orb</div>
        </div>
        <div className="ui-studio-timeline">
          <div className="timeline-playhead"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'ui-4',
    title: 'Pulse Vitals — Biometric Health Tracker',
    category: 'Health & Wearable App',
    platform: 'iOS & watchOS • Figma',
    summary: 'Holistic health and cardiovascular monitoring application integrating circadian rhythm sleep scoring, live ECG heart rate telemetry, and workout zones.',
    tags: ['Mobile UI', 'Wearable', 'Health Tech', 'Micro-Interactions'],
    uiMockup: (
      <div className="ui-mockup-screen screen-pulse">
        <div className="ui-phone-notch"></div>
        <div className="ui-health-rings-wrap">
          <div className="health-ring ring-red"></div>
          <div className="health-ring ring-green"></div>
          <div className="health-ring ring-blue"></div>
          <div className="health-center-score">
            <span className="score-val">94</span>
            <span className="score-label">OPTIMAL</span>
          </div>
        </div>
        <div className="ui-ecg-waveform">
          <svg viewBox="0 0 160 30" fill="none" className="ecg-svg">
            <path d="M0,15 L40,15 L48,5 L54,25 L60,15 L70,15 L76,2 L84,28 L90,15 L160,15" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="ui-health-stat-pill">Heart Rate: 68 BPM (Resting)</div>
      </div>
    ),
  },
];

export function UiUxSection() {
  const [selectedUi, setSelectedUi] = useState<UiUxProjectItem | null>(null);

  return (
    <div className="uiux-section-wrapper" id="uiuxSection">
      {/* Section Header */}
      <div className="works-header uiux-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge uiux-badge">PRODUCT &amp; UI/UX DESIGN</span>
        </div>
        <h2 className="works-title">UI / UX &amp; Digital Products</h2>
        <p className="works-subtitle">
          Design systems, mobile application concepts, enterprise SaaS platforms, and responsive user flows engineered with mathematical precision in Figma.
        </p>
      </div>

      {/* UI/UX Grid */}
      <div className="uiux-grid">
        {UI_UX_PROJECTS.map((item) => (
          <article
            key={item.id}
            className="uiux-card"
            onClick={() => setSelectedUi(item)}
            role="button"
            tabIndex={0}
            aria-label={`Inspect ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedUi(item);
              }
            }}
          >
            {/* Visual Viewport Mockup Area */}
            <div className="uiux-card-viewport">
              {item.uiMockup}
              <div className="uiux-inspect-overlay">
                <span>View Prototype Specs</span>
              </div>
            </div>

            {/* Info Body */}
            <div className="uiux-card-body">
              <div className="uiux-cat-row">
                <span className="uiux-cat-tag">{item.category}</span>
                <span className="uiux-platform-tag">{item.platform}</span>
              </div>
              <h3 className="uiux-title">{item.title}</h3>
              <p className="uiux-desc">{item.summary}</p>
              <div className="uiux-tags-row">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="uiux-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Prototype Inspection Modal */}
      {selectedUi && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedUi(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedUi.title}
        >
          <div className="brand-modal-card uiux-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="brand-modal-close"
              onClick={() => setSelectedUi(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="brand-modal-header">
              <span className="brand-modal-cat">{selectedUi.category}</span>
              <h3 className="brand-modal-title">{selectedUi.title}</h3>
              <p className="brand-modal-sector">{selectedUi.platform}</p>
            </div>

            <div className="uiux-modal-stage">
              {selectedUi.uiMockup}
            </div>

            <div className="brand-modal-details">
              <div className="brand-detail-block">
                <h4 className="detail-label">Design System &amp; Solution</h4>
                <p className="detail-value">{selectedUi.summary}</p>
              </div>

              <div className="brand-detail-block">
                <h4 className="detail-label">Design Deliverables</h4>
                <div className="uiux-tags-row">
                  {selectedUi.tags.map((t, idx) => (
                    <span key={idx} className="uiux-tag modal-ui-tag">
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
