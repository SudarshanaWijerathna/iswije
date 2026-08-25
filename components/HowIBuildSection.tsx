import React from 'react';

export function HowIBuildSection() {
  const workflowSteps = [
    { num: '01', name: 'IDEA' },
    { num: '02', name: 'RESEARCH' },
    { num: '03', name: 'DATA' },
    { num: '04', name: 'MODEL' },
    { num: '05', name: 'PRODUCT' },
    { num: '06', name: 'DEPLOY' },
    { num: '07', name: 'ITERATE' },
  ];

  const stackCategories = [
    {
      category: 'Languages',
      pills: ['Python', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
      category: 'AI / ML',
      pills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace', 'LangChain', 'LightGBM'],
    },
    {
      category: 'Backend',
      pills: ['FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    {
      category: 'Frontend',
      pills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Three.js'],
    },
    {
      category: 'Infrastructure',
      pills: ['Docker', 'GitHub Actions', 'AWS', 'GCP', 'Vercel'],
    },
  ];

  return (
    <div className="content-section" id="howIBuild">
      <div className="section-header-compact">
        <div className="section-title-wrap">
          <h2 className="section-heading">How I Build</h2>
          <p className="section-subtext">Engineering workflow &amp; technical stack.</p>
        </div>
      </div>

      {/* Workflow Pipeline */}
      <div className="workflow-container">
        <div className="workflow-label-row">
          <span className="workflow-label">ENGINEERING PIPELINE</span>
        </div>
        <div className="workflow-steps">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="wf-step">
                <span className="wf-num">{step.num}</span>
                <span className="wf-name">{step.name}</span>
              </div>
              {idx < workflowSteps.length - 1 && <span className="wf-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Categorized Stack */}
      <div className="stack-categories">
        {stackCategories.map((cat, idx) => (
          <div key={idx} className="stack-row">
            <span className="stack-cat-title">{cat.category}</span>
            <div className="stack-pills">
              {cat.pills.map((pill, pIdx) => (
                <span key={pIdx} className="stack-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
