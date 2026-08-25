import React from 'react';

export interface CapabilityItem {
  id?: string;
  title: string;
  iconType?: 'ai' | 'ml' | 'fs' | 'data';
  description: string;
  highlights?: { name?: string }[];
}

interface CapabilitiesSectionProps {
  capabilities?: CapabilityItem[];
}

export function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
  const defaultCapabilities: CapabilityItem[] = [
    {
      id: 'ai-products',
      title: 'AI Products',
      iconType: 'ai',
      description: 'Building applications around LLMs, RAG, multimodal models and intelligent agents.',
      highlights: [{ name: 'InsightFlow' }, { name: 'Reva' }, { name: 'Atlasflow' }],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      iconType: 'ml',
      description: 'Predictive modelling, time-series forecasting, feature engineering and model evaluation.',
      highlights: [{ name: 'LightGBM' }, { name: 'PyTorch' }, { name: 'TensorFlow' }, { name: 'Scikit-learn' }],
    },
    {
      id: 'full-stack',
      title: 'Full-Stack',
      iconType: 'fs',
      description: 'Building complete products from frontend to backend, databases and deployment.',
      highlights: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'FastAPI' }, { name: 'PostgreSQL' }, { name: 'Docker' }],
    },
    {
      id: 'data-research',
      title: 'Data & Research',
      iconType: 'data',
      description: 'Exploring datasets, modelling approaches and experimental AI systems.',
      highlights: [{ name: 'Exploratory Analysis' }, { name: 'Hypothesis Testing' }, { name: 'Agentic Systems' }],
    },
  ];

  const items = capabilities && capabilities.length > 0 ? capabilities : defaultCapabilities;

  const renderIcon = (type?: string) => {
    switch (type) {
      case 'ml':
        return (
          <div className="capability-icon-wrap icon-ml">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        );
      case 'fs':
        return (
          <div className="capability-icon-wrap icon-fs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
        );
      case 'data':
        return (
          <div className="capability-icon-wrap icon-data">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
        );
      case 'ai':
      default:
        return (
          <div className="capability-icon-wrap icon-ai">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="capabilities-section" id="whatIBuild">
      <div className="capabilities-header">
        <h2 className="capabilities-title">What I Build</h2>
        <p className="capabilities-subtitle">
          Core capabilities, architectures, and technical domains across AI systems, machine learning, and full-stack engineering.
        </p>
      </div>

      <div className="capabilities-grid">
        {items.map((item, idx) => (
          <div key={item.id || idx} className="capability-card">
            {renderIcon(item.iconType)}
            <div className="capability-body">
              <h3 className="capability-heading">{item.title}</h3>
              <p className="capability-desc">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <div className="capability-highlights">
                  {item.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="highlight-item">
                      {h.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
