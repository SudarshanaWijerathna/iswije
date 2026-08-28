import React from 'react';

export interface ProjectItem {
  id?: string;
  title: string;
  category?: 'build' | 'design';
  description: string;
  liveDemoUrl?: string;
  liveDemoText?: string;
  githubUrl?: string;
  previewType?: 'nexus-code' | 'aether-3d' | 'hyperscale-chart' | 'pulse-dash' | 'image' | 'insightflow';
  thumbnailUrl?: string;
  logoUrl?: string;
  tags?: { tag?: string }[];
}

interface ProjectsGridProps {
  projects?: ProjectItem[];
  githubUrl?: string;
  linkedinUrl?: string;
}

export function ProjectsGrid({
  projects,
  githubUrl = 'https://github.com/SudarshanaWijerathna',
  linkedinUrl = 'https://www.linkedin.com/in/sudarshanawijerathna/',
}: ProjectsGridProps) {
  // Default projects matching original index.html exactly
  const defaultProjects: ProjectItem[] = [
    {
      id: 'insightflow',
      title: 'Insightflow',
      category: 'build',
      previewType: 'insightflow',
      thumbnailUrl: '/project_thumbnail_001.png',
      logoUrl: '/project_logo_001.svg',
      description:
        'Turn podcasts and audio conversations into actionable key takeaways with AI-powered semantic intelligence and structured transcript synthesis.',
      liveDemoUrl: '#demo',
      liveDemoText: 'Live Demo',
      githubUrl: '#source',
    },
    {
      id: 'nexus-ai',
      title: 'Nexus AI',
      category: 'build',
      previewType: 'nexus-code',
      description:
        'Autonomous multi-agent orchestration engine with real-time streaming AST synthesis, visual DAG pipeline editor, and sub-millisecond state execution.',
      liveDemoUrl: '#demo',
      liveDemoText: 'Live Demo',
      githubUrl: '#source',
    },
    {
      id: 'aether-3d',
      title: 'Aether 3D',
      category: 'build',
      previewType: 'aether-3d',
      description:
        'High-performance interactive 3D spatial canvas with raymarched volumetric noise, real-time audio FFT frequency analysis, and custom post-processing shaders.',
      liveDemoUrl: '#demo',
      liveDemoText: 'Launch Canvas',
      githubUrl: '#source',
    },
    {
      id: 'hyperscale-db',
      title: 'HyperScale Vector DB',
      category: 'build',
      previewType: 'hyperscale-chart',
      description:
        'Client-side embedded vector database compiled to WebAssembly with SIMD acceleration, HNSW cosine indexing, and real-time CRDT peer synchronization.',
      liveDemoUrl: '#demo',
      liveDemoText: 'Benchmarks',
      githubUrl: '#source',
    },
    {
      id: 'pulse-os',
      title: 'Pulse OS Workspace',
      category: 'build',
      previewType: 'pulse-dash',
      description:
        'Keyboard-driven modular desktop workspace uniting terminal execution, markdown knowledge graphs, and live telemetry in a distraction-free glassmorphic environment.',
      liveDemoUrl: '#demo',
      liveDemoText: 'View Release',
      githubUrl: '#source',
    },
  ];

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  const renderPreview = (project: ProjectItem) => {
    switch (project.previewType) {
      case 'insightflow':
      case 'image':
        return (
          <div className="project-preview preview-insightflow">
            <img
              src={project.thumbnailUrl || '/project_thumbnail_001.png'}
              alt={project.title}
              className="project-preview-img"
            />
          </div>
        );

      case 'nexus-code':
        return (
          <div className="project-preview preview-nexus">
            <div className="preview-glow"></div>
            <div className="preview-mockup">
              <div className="mockup-bar">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="mockup-url">nexus-ai.dev/engine</span>
              </div>
              <div className="mockup-body">
                <div className="code-line"><span className="c-purple">const</span> agent = <span className="c-blue">new</span> <span className="c-yellow">NexusEngine</span>({'{'}</div>
                <div className="code-line indent"><span className="c-cyan">mode</span>: <span className="c-green">&apos;autonomous&apos;</span>,</div>
                <div className="code-line indent"><span className="c-cyan">astAnalysis</span>: <span className="c-orange">true</span></div>
                <div className="code-line">{'}'});</div>
                <div className="code-status"><span className="status-pulse"></span> Streaming 1.2M tokens/s</div>
              </div>
            </div>
          </div>
        );

      case 'aether-3d':
        return (
          <div className="project-preview preview-aether">
            <div className="preview-glow glow-cyan"></div>
            <div className="preview-mockup">
              <div className="mockup-3d-scene">
                <div className="scene-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
                <div className="scene-hud">
                  <span className="hud-fps">60 FPS</span>
                  <span className="hud-glsl">GLSL 3.0</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'hyperscale-chart':
        return (
          <div className="project-preview preview-hyperscale">
            <div className="preview-glow glow-emerald"></div>
            <div className="preview-mockup">
              <div className="mockup-chart">
                <div className="chart-bars">
                  <div className="bar bar-1"><span>0.8ms</span></div>
                  <div className="bar bar-2"><span>1.2ms</span></div>
                  <div className="bar bar-3"><span>0.4ms</span></div>
                  <div className="bar bar-4"><span>0.6ms</span></div>
                </div>
                <div className="chart-legend">
                  <span>HNSW Query Latency (p99)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pulse-dash':
        return (
          <div className="project-preview preview-pulse">
            <div className="preview-glow glow-purple"></div>
            <div className="preview-mockup">
              <div className="mockup-dash">
                <div className="dash-tile tile-1"><span className="tile-label">CPU Core</span><span className="tile-val">4.2 GHz</span></div>
                <div className="dash-tile tile-2"><span className="tile-label">Memory</span><span className="tile-val">98.4 MB</span></div>
                <div className="dash-tile tile-3"><span className="tile-label">Active Tasks</span><span className="tile-val">12 Running</span></div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="project-preview" style={{ background: '#111418' }}>
            {project.thumbnailUrl ? (
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div className="preview-glow"></div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="works-grid-wrapper">
      <div className="works-grid-notch">
        {/* Left Notch Plateau (Dynamic Width with 20px Corner Radius) */}
        <div className="notch-plateau">
          <span className="notch-text">find more projects on</span>
          <div className="notch-actions">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="notch-icon-link"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="notch-icon-link"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right S-Curve Fillet (Pure 1:1 Aspect Ratio, Never Distorts) */}
        <svg className="notch-fillet-svg" viewBox="0 0 243.01 170.15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0,0c54.36,0,102.91,34,121.51,85.07h0c18.59,51.08,67.15,85.08,121.5,85.08H0V0Z" fill="#484540" />
        </svg>
      </div>

      {/* Works Grid / Cards Container */}
      <div className="works-grid" id="worksGrid">
        {displayProjects.map((project, idx) => (
          <article
            key={project.id || idx}
            className="project-card"
            data-category={project.category || 'build'}
          >
            {renderPreview(project)}
            <div className="project-info">
              <div className="project-title-wrap-row">
                {project.logoUrl && (
                  <img src={project.logoUrl} alt="" className="project-logo-badge" />
                )}
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} className="project-link primary-link">
                    <span>{project.liveDemoText || 'Live Demo'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link secondary-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
