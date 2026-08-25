import React from 'react';

export interface ExperimentItem {
  id?: string;
  title: string;
  link?: string;
  tags?: { tag?: string }[];
}

interface ExperimentsSectionProps {
  experiments?: ExperimentItem[];
}

export function ExperimentsSection({ experiments }: ExperimentsSectionProps) {
  const defaultExperiments: ExperimentItem[] = [
    {
      id: 'n-beats',
      title: 'N-BEATS Forecasting',
      tags: [{ tag: 'Time Series' }, { tag: 'PyTorch' }],
    },
    {
      id: 'sinhala-lm',
      title: 'Sinhala Language Model',
      tags: [{ tag: 'NLP' }, { tag: 'SLM' }],
    },
    {
      id: 'land-price',
      title: 'Land Price Prediction',
      tags: [{ tag: 'Regression' }, { tag: 'LightGBM' }],
    },
    {
      id: 'rag-exp',
      title: 'RAG Experiments',
      tags: [{ tag: 'LLM' }, { tag: 'Retrieval' }],
    },
  ];

  const items = experiments && experiments.length > 0 ? experiments : defaultExperiments;

  return (
    <div className="content-section" id="experiments">
      <div className="section-header-compact">
        <div className="section-title-wrap">
          <h2 className="section-heading">Experiments &amp; Research</h2>
          <p className="section-subtext">Things I built while trying to understand something.</p>
        </div>
      </div>

      <div className="experiments-grid">
        {items.map((exp, idx) => (
          <div key={exp.id || idx} className="experiment-card">
            <div className="exp-header">
              <h3 className="exp-title">{exp.title}</h3>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="exp-arrow">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            {exp.tags && exp.tags.length > 0 && (
              <div className="exp-tags">
                {exp.tags.map((t, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="exp-tag">{t.tag}</span>
                    {tIdx < exp.tags.length - 1 && <span className="exp-tag-dot">·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
