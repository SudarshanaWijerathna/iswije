'use client';

import React, { useState } from 'react';

export interface DeepDiveProject {
  id: string;
  title: string;
  tag: string;
  abstract: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  liveDemoUrl?: string;
  githubUrl?: string;
  previewType: 'insightflow' | 'scorecast' | 'reva';
  thumbnailUrl?: string;
  architecture: {
    title: string;
    description: string;
    icon: string;
  }[];
  highlights: string[];
  stack: string[];
}

interface ProjectsGridProps {
  projects?: any[];
  githubUrl?: string;
  linkedinUrl?: string;
}

const FEATURED_PROJECTS: DeepDiveProject[] = [
  {
    id: 'insightflow',
    title: 'Insightflow',
    tag: 'Full-Stack AI · Audio Intelligence · Semantic Graphs',
    mediaUrl: '/project_thumbnail_001.png',
    mediaType: 'image',
    abstract:
      'Turn podcasts, recordings, and long-form audio conversations into structured, actionable intelligence with AI-driven semantic chunking and interactive transcript synthesis.',
    liveDemoUrl: 'https://insightflow.iswije.com',
    githubUrl: 'https://github.com/SudarshanaWijerathna/insightflow',
    previewType: 'insightflow',
    thumbnailUrl: '/project_thumbnail_001.png',
    architecture: [
      {
        title: 'Audio Ingestion & ASR',
        description: 'Multi-threaded audio processing pipeline using Whisper ASR with speaker diarization and timecode alignment.',
        icon: 'fa-solid fa-microphone-lines',
      },
      {
        title: 'Semantic Graph Engine',
        description: 'Hierarchical chunking and vector embedding via LangChain and Pinecone for instant concept cross-referencing.',
        icon: 'fa-solid fa-diagram-project',
      },
      {
        title: 'Synthesis & Summary',
        description: 'Multi-stage LLM synthesis distilling hours of discussion into structured key takeaways, action items, and topic clusters.',
        icon: 'fa-solid fa-brain',
      },
      {
        title: 'Full-Stack Interface',
        description: 'Interactive Next.js 14 frontend with real-time waveform scrubbing, synchronized transcripts, and interactive DAG canvas.',
        icon: 'fa-solid fa-layer-group',
      },
    ],
    highlights: [
      'Sub-minute processing latency for 60+ minute audio files with streaming transcription',
      'Interactive topic mindmap with clickable node citations linking directly to audio timestamps',
      'Automated extraction of decisions, blockers, action items, and executive summaries',
      'Full semantic search across entire audio repositories with cosine similarity ranking',
    ],
    stack: ['Python', 'FastAPI', 'Whisper ASR', 'LangChain', 'Pinecone', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 'scorecast',
    title: 'ScoreCast',
    tag: 'ML Predictive Engine · Real-Time Analytics · Data Pipelines',
    mediaUrl: '/project_thumbnail_001.png',
    mediaType: 'image',
    abstract:
      'High-velocity machine learning forecasting engine delivering sub-10ms probabilistic predictions, risk telemetry, and feature-importance metrics across streaming data.',
    liveDemoUrl: 'https://scorecast.iswije.com',
    githubUrl: 'https://github.com/SudarshanaWijerathna/scorecast',
    previewType: 'scorecast',
    architecture: [
      {
        title: 'Streaming Data Pipeline',
        description: 'High-throughput Kafka streaming architecture with real-time event validation and automated feature store ingestion.',
        icon: 'fa-solid fa-bolt',
      },
      {
        title: 'ML Ensemble Architecture',
        description: 'LightGBM and gradient-boosted decision trees trained with continuous online feature engineering and hyperparameter tuning.',
        icon: 'fa-solid fa-microchip',
      },
      {
        title: 'Sub-10ms Inference API',
        description: 'Ultra-low latency FastAPI microservices with model quantization, Redis caching, and automated drift detection.',
        icon: 'fa-solid fa-gauge-high',
      },
      {
        title: 'Telemetry Dashboard',
        description: 'Real-time WebSocket dashboard displaying live probabilistic distributions, SHAP feature impact, and confidence intervals.',
        icon: 'fa-solid fa-chart-line',
      },
    ],
    highlights: [
      'Engineered for 10,000+ predictions per second with p99 response times under 8ms',
      'Real-time model drift and data shift monitoring with automated fallback triggers',
      'Interactive SHAP explanation trees explaining predictive rationale on every single query',
      'Containerized microservices orchestrated with Docker and CI/CD automated test gates',
    ],
    stack: ['Python', 'Scikit-learn', 'LightGBM', 'Apache Kafka', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
  },
  {
    id: 'reva',
    title: 'Reva',
    tag: 'Autonomous Agent · Conversational AI · Workflow Orchestration',
    mediaUrl: '/project_thumbnail_001.png',
    mediaType: 'image',
    abstract:
      'Intelligent agentic assistant orchestrating multi-step autonomous workflows, deterministic tool invocation, and persistent context resolution across complex APIs.',
    liveDemoUrl: 'https://reva.iswije.com',
    githubUrl: 'https://github.com/SudarshanaWijerathna/reva',
    previewType: 'reva',
    architecture: [
      {
        title: 'Agentic Loop & DAG',
        description: 'Stateful LangGraph orchestration with recursive planning, dynamic tool selection, and automated error recovery.',
        icon: 'fa-solid fa-network-wired',
      },
      {
        title: 'Hybrid RAG Memory',
        description: 'Dual-tier memory architecture uniting short-term conversational context with long-term pgvector semantic knowledge retrieval.',
        icon: 'fa-solid fa-database',
      },
      {
        title: 'Deterministic Guardrails',
        description: 'Rigorous schema validation and safety guardrails enforcing deterministic JSON outputs and permission boundaries.',
        icon: 'fa-solid fa-shield-halved',
      },
      {
        title: 'Interactive Studio UI',
        description: 'Distraction-free Next.js interface with live thought-stream visualization, tool execution inspect panel, and step debugging.',
        icon: 'fa-solid fa-laptop-code',
      },
    ],
    highlights: [
      'Multi-turn context persistence across complex enterprise workflows and API integrations',
      'Transparent thought-stream telemetry showing exact reasoning steps and tool execution latency',
      'Zero-hallucination guardrail validation with deterministic fallback policies',
      'Self-correcting code and query execution in sandboxed virtual environments',
    ],
    stack: ['TypeScript', 'Python', 'LangGraph', 'Next.js', 'PostgreSQL (pgvector)', 'Docker', 'TailwindCSS', 'GCP', 'Vercel'],
  },
];

export function ProjectsGrid({ githubUrl, linkedinUrl }: ProjectsGridProps) {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderVisualMockup = (project: DeepDiveProject) => {
    switch (project.previewType) {
      case 'insightflow':
        return (
          <div className="deepdive-mockup preview-insightflow-mockup">
            <div className="mockup-top-bar">
              <div className="mockup-window-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup-window-title">insightflow.iswije.com/canvas</span>
              <span className="mockup-window-pill">AI LIVE</span>
            </div>
            <div className="insightflow-canvas-body">
              <div className="insightflow-audio-strip">
                <div className="audio-play-btn"><i className="fa-solid fa-play"></i></div>
                <div className="audio-waveform-wrap">
                  <div className="waveform-bar active" style={{ height: '40%' }}></div>
                  <div className="waveform-bar active" style={{ height: '70%' }}></div>
                  <div className="waveform-bar active" style={{ height: '100%' }}></div>
                  <div className="waveform-bar active" style={{ height: '60%' }}></div>
                  <div className="waveform-bar active" style={{ height: '85%' }}></div>
                  <div className="waveform-bar" style={{ height: '45%' }}></div>
                  <div className="waveform-bar" style={{ height: '30%' }}></div>
                  <div className="waveform-bar" style={{ height: '75%' }}></div>
                  <div className="waveform-bar" style={{ height: '50%' }}></div>
                  <div className="waveform-bar" style={{ height: '90%' }}></div>
                  <div className="waveform-bar" style={{ height: '40%' }}></div>
                  <div className="waveform-bar" style={{ height: '20%' }}></div>
                </div>
                <span className="audio-time">04:18 / 42:15</span>
              </div>
              <div className="insightflow-nodes-row">
                <div className="canvas-node node-core">
                  <span className="node-badge">CORE TOPIC</span>
                  <span className="node-text">LLM Optimization &amp; Latency</span>
                </div>
                <div className="canvas-connector"></div>
                <div className="canvas-node node-sub">
                  <span className="node-badge">TAKEAWAY</span>
                  <span className="node-text">SIMD Vectorization reduces p99 by 64%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'scorecast':
        return (
          <div className="deepdive-mockup preview-scorecast-mockup">
            <div className="mockup-top-bar">
              <div className="mockup-window-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup-window-title">scorecast.iswije.com/telemetry</span>
              <span className="mockup-window-pill">STREAMING</span>
            </div>
            <div className="scorecast-body">
              <div className="scorecast-metrics-grid">
                <div className="metric-box">
                  <span className="metric-label">Inference Latency</span>
                  <span className="metric-value">6.8 ms</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Model Accuracy</span>
                  <span className="metric-value">97.4%</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Throughput</span>
                  <span className="metric-value">12.4k req/s</span>
                </div>
              </div>
              <div className="scorecast-chart-sim">
                <div className="chart-line-bg">
                  <div className="chart-bar-anim" style={{ height: '65%' }}></div>
                  <div className="chart-bar-anim" style={{ height: '85%' }}></div>
                  <div className="chart-bar-anim" style={{ height: '45%' }}></div>
                  <div className="chart-bar-anim" style={{ height: '95%' }}></div>
                  <div className="chart-bar-anim" style={{ height: '70%' }}></div>
                </div>
                <span className="chart-caption">Real-Time Feature Probability Distribution (SHAP Importance)</span>
              </div>
            </div>
          </div>
        );

      case 'reva':
        return (
          <div className="deepdive-mockup preview-reva-mockup">
            <div className="mockup-top-bar">
              <div className="mockup-window-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup-window-title">reva.iswije.com/agent-studio</span>
              <span className="mockup-window-pill">AUTONOMOUS</span>
            </div>
            <div className="reva-body">
              <div className="agent-thought-stream">
                <div className="thought-step">
                  <span className="thought-badge"><i className="fa-solid fa-brain"></i> Reasoning</span>
                  <span className="thought-desc">Parsed user prompt → Identified multi-turn database schema migration task</span>
                </div>
                <div className="thought-step">
                  <span className="thought-badge tool"><i className="fa-solid fa-wrench"></i> Tool Exec</span>
                  <span className="thought-desc">query_schema(table=&apos;users&apos;) → Verified foreign key constraints (0.4ms)</span>
                </div>
                <div className="thought-step success">
                  <span className="thought-badge done"><i className="fa-solid fa-check"></i> Output</span>
                  <span className="thought-desc">Generated idempotent SQL migration with zero downtime rollback guards</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="projects-editorial-section">
      <div className="projects-editorial-list">
        {FEATURED_PROJECTS.map((project) => {
          const isExpanded = expandedProjects.has(project.id);
          return (
            <article key={project.id} className="editorial-project-item">
              {/* Main Project Header & Overview */}
              <div className="editorial-project-main">
                <div className="editorial-project-meta">
                  <h3 className="editorial-title">{project.title}</h3>

                  {/* 16:9 Video or Image Media Viewport */}
                  {project.mediaUrl && (
                    <div className="editorial-media-viewport">
                      {project.mediaType === 'video' ? (
                        <video
                          src={project.mediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="editorial-media-element"
                        />
                      ) : (
                        <img
                          src={project.mediaUrl}
                          alt={project.title}
                          className="editorial-media-element"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}

                  <p className="editorial-abstract">{project.abstract}</p>
                </div>

                {/* Action Buttons Row */}
                <div className="editorial-actions-row">
                  <button
                    type="button"
                    className={`editorial-btn view-more-btn ${isExpanded ? 'active' : ''}`}
                    onClick={() => toggleProject(project.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Architecture & Details'}</span>
                    <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn demo-btn"
                    >
                      <span>Visit Application</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn github-btn"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Expandable Architecture & Deep Dive Drawer */}
              <div className={`editorial-deepdive-drawer ${isExpanded ? 'open' : ''}`}>
                <div className="editorial-deepdive-content">
                  {/* Visual Interface Mockup Window */}
                  <div className="deepdive-mockup-wrap">
                    {renderVisualMockup(project)}
                  </div>

                  {/* Architecture & Engineering Breakdown Grid */}
                  <div className="deepdive-grid-section">
                    <h4 className="deepdive-section-heading">
                      <i className="fa-solid fa-cubes-stacked"></i>
                      <span>System Architecture &amp; Pipeline</span>
                    </h4>
                    <div className="deepdive-arch-grid">
                      {project.architecture.map((arch, aIdx) => (
                        <div key={aIdx} className="arch-card">
                          <div className="arch-card-header">
                            <i className={arch.icon}></i>
                            <span className="arch-card-title">{arch.title}</span>
                          </div>
                          <p className="arch-card-desc">{arch.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities & Benchmarks */}
                  <div className="deepdive-grid-section">
                    <h4 className="deepdive-section-heading">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>Key Highlights &amp; Capabilities</span>
                    </h4>
                    <div className="deepdive-highlights-list">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="highlight-item">
                          <i className="fa-solid fa-check"></i>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Specific Tech Stack */}
                  <div className="deepdive-stack-section">
                    <span className="deepdive-stack-title">Technologies Used:</span>
                    <div className="deepdive-stack-pills">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="deepdive-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
