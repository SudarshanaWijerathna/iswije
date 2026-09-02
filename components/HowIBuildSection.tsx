'use client';

import React, { useEffect, useRef, useState } from 'react';

interface WorkflowStep {
  num: string;
  name: string;
  icon: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  { num: '01', name: 'IDEA', icon: 'fa-solid fa-lightbulb' },
  { num: '02', name: 'RESEARCH', icon: 'fa-solid fa-compass' },
  { num: '03', name: 'DATA', icon: 'fa-solid fa-database' },
  { num: '04', name: 'MODEL', icon: 'fa-solid fa-microchip' },
  { num: '05', name: 'PRODUCT', icon: 'fa-solid fa-cube' },
  { num: '06', name: 'DEPLOY', icon: 'fa-solid fa-rocket' },
  { num: '07', name: 'ITERATE', icon: 'fa-solid fa-arrows-rotate' },
];

interface TechItem {
  name: string;
  icon: string;
}

const STACK_CATEGORIES = [
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

// 4 Distinct Curated Sequences to ensure no duplicate adjacent icons
const COLUMN_1_TECH: TechItem[] = [
  { name: 'Python', icon: '/tech_icons/python.svg' },
  { name: 'PyTorch', icon: '/tech_icons/pytorch.svg' },
  { name: 'React', icon: '/tech_icons/react.svg' },
  { name: 'Docker', icon: '/tech_icons/docker.svg' },
  { name: 'FastAPI', icon: '/tech_icons/fastapi.svg' },
  { name: 'Java', icon: '/tech_icons/java.svg' },
  { name: 'GitHub', icon: '/tech_icons/github.svg' },
  { name: 'LangChain', icon: '/tech_icons/langchain.svg' },
  { name: 'TailwindCSS', icon: '/tech_icons/tailwindcss.svg' },
  { name: 'PostgreSQL', icon: '/tech_icons/postgresql.svg' },
  { name: 'AWS', icon: '/tech_icons/aws.svg' },
  { name: 'Scikit-learn', icon: '/tech_icons/scikitlearn.svg' },
];

const COLUMN_2_TECH: TechItem[] = [
  { name: 'TypeScript', icon: '/tech_icons/typescript.svg' },
  { name: 'Next.js', icon: '/tech_icons/nextjs.svg' },
  { name: 'TensorFlow', icon: '/tech_icons/tensorflow.svg' },
  { name: 'Node.js', icon: '/tech_icons/nodejs.svg' },
  { name: 'C++', icon: '/tech_icons/cplusplus.svg' },
  { name: 'HuggingFace', icon: '/tech_icons/huggingface.svg' },
  { name: 'Vercel', icon: '/tech_icons/vercel.svg' },
  { name: 'Flask', icon: '/tech_icons/flask.svg' },
  { name: 'Redis', icon: '/tech_icons/redis.svg' },
  { name: 'GCP', icon: '/tech_icons/gcp.svg' },
  { name: 'Three.js', icon: '/tech_icons/threejs.svg' },
  { name: 'SQL', icon: '/tech_icons/sql.svg' },
];

const COLUMN_3_TECH: TechItem[] = [
  { name: 'LangChain', icon: '/tech_icons/langchain.svg' },
  { name: 'PostgreSQL', icon: '/tech_icons/postgresql.svg' },
  { name: 'Three.js', icon: '/tech_icons/threejs.svg' },
  { name: 'Python', icon: '/tech_icons/python.svg' },
  { name: 'Scikit-learn', icon: '/tech_icons/scikitlearn.svg' },
  { name: 'Docker', icon: '/tech_icons/docker.svg' },
  { name: 'React', icon: '/tech_icons/react.svg' },
  { name: 'GitHub Actions', icon: '/tech_icons/githubactions.svg' },
  { name: 'Java', icon: '/tech_icons/java.svg' },
  { name: 'FastAPI', icon: '/tech_icons/fastapi.svg' },
  { name: 'LightGBM', icon: '/tech_icons/lightgbm.svg' },
  { name: 'TypeScript', icon: '/tech_icons/typescript.svg' },
];

const COLUMN_4_TECH: TechItem[] = [
  { name: 'HuggingFace', icon: '/tech_icons/huggingface.svg' },
  { name: 'Vercel', icon: '/tech_icons/vercel.svg' },
  { name: 'Redis', icon: '/tech_icons/redis.svg' },
  { name: 'Next.js', icon: '/tech_icons/nextjs.svg' },
  { name: 'TensorFlow', icon: '/tech_icons/tensorflow.svg' },
  { name: 'TailwindCSS', icon: '/tech_icons/tailwindcss.svg' },
  { name: 'GCP', icon: '/tech_icons/gcp.svg' },
  { name: 'Node.js', icon: '/tech_icons/nodejs.svg' },
  { name: 'C++', icon: '/tech_icons/cplusplus.svg' },
  { name: 'PyTorch', icon: '/tech_icons/pytorch.svg' },
  { name: 'GitHub', icon: '/tech_icons/github.svg' },
  { name: 'Flask', icon: '/tech_icons/flask.svg' },
];

export function HowIBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [scrollDelta, setScrollDelta] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      // Distance from center of viewport
      const offset = (windowHeight / 2) - (rect.top + rect.height / 2);
      setScrollDelta(offset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const col1Items = [...COLUMN_1_TECH, ...COLUMN_1_TECH, ...COLUMN_1_TECH];
  const col2Items = [...COLUMN_2_TECH, ...COLUMN_2_TECH, ...COLUMN_2_TECH];
  const col3Items = [...COLUMN_3_TECH, ...COLUMN_3_TECH, ...COLUMN_3_TECH];
  const col4Items = [...COLUMN_4_TECH, ...COLUMN_4_TECH, ...COLUMN_4_TECH];

  return (
    <div className="how-i-build-section-wrap" id="howIBuild">
      {/* 3D Orbit Showcase Card with Gradient Background */}
      <div className="pipeline-section-wrapper">
        {/* Section Header */}
        <div className="works-header pipeline-works-header">
          <div className="pipeline-badge-wrap">
            <span className="pipeline-badge">ENGINEERING PIPELINE</span>
          </div>
          <h2 className="works-title">How I Build</h2>
          <p className="works-subtitle">
            A continuous 7-stage development lifecycle — transforming initial hypotheses and research into scalable data architectures, trained models, production-grade products, and iterative deployments.
          </p>
        </div>

        {/* 3D Orbit Stage for the 7 Engineering Steps */}
        <div className="pipeline-portrait-showcase">
          <div className="orbit-stage-wrapper pipeline-orbit-stage">
            {/* 3D Rotating Ring Carousel (Reverse Rotation) */}
            <div className="orbit-carousel-3d pipeline-orbit-carousel">
              {WORKFLOW_STEPS.map((step, index) => {
                const itemAngle = (index * 360) / WORKFLOW_STEPS.length;
                return (
                  <div
                    key={step.num}
                    className="orbit-card-3d pipeline-orbit-card"
                    style={{
                      '--item-angle': `${itemAngle}deg`,
                    } as React.CSSProperties}
                  >
                    <div className="pipeline-step-inner">
                      <span className="pipeline-step-num">{step.num}</span>
                      <i className={`${step.icon} pipeline-step-icon`}></i>
                      <span className="pipeline-step-name">{step.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Portrait Sitting with Laptop & Doodle Background */}
            <div className="tools-portrait-wrap">
              <img
                src="/doodle_01.svg"
                alt=""
                className="portrait-doodle-bg"
                aria-hidden="true"
              />
              <img
                src="/portrait003.png"
                alt="Sudarshana Wijerathna building engineering pipelines"
                className="tools-portrait-img"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Parallax Tech Stack Showcase with Expandable Drawer */}
      <div className="tech-showcase-section" ref={sectionRef}>
        <div className="tech-showcase-content">
          <div className="tech-showcase-header">
            <h3 className="tech-showcase-title">Key Technologies &amp; Platforms</h3>
          </div>
          
          <p className="tech-showcase-desc">
            Production-proven languages, AI/ML frameworks, distributed backend engines, cloud platforms, and frontend architectures I leverage to deliver high-performance digital systems.
          </p>
          
          {/* Expandable Full Categorized Tech Stack Drawer (Above the Button) */}
          <div
            ref={drawerRef}
            className={`tech-expanded-drawer ${isExpanded ? 'open' : ''}`}
          >
            <div className="tech-expanded-inner">
              {STACK_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="tech-expanded-row">
                  <span className="tech-expanded-cat">{cat.category}</span>
                  <span className="tech-expanded-divider">—</span>
                  <span className="tech-expanded-words">
                    {cat.pills.map((pill, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <span className="tech-word">{pill}</span>
                        {pIdx < cat.pills.length - 1 && <span className="tech-dot">·</span>}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Expand / Collapse Button (Below the List) */}
          <button
            ref={buttonRef}
            type="button"
            className={`tech-showcase-cta ${isExpanded ? 'active' : ''}`}
            onClick={toggleExpand}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide Tech Stack' : 'Explore Tech Stack'}</span>
            <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
        </div>

        {/* 4 Multi-Directional Parallax Columns */}
        <div className="tech-columns-stage">
          {/* Column 1: Moves UP on scroll */}
          <div
            className="tech-col tech-col-1"
            style={{
              transform: `translate3d(0, calc(-80px - ${scrollDelta * 0.32}px), 0)`,
            }}
          >
            {col1Items.map((item, idx) => (
              <div key={`col1-${idx}`} className="tech-icon-card" title={item.name}>
                <img src={item.icon} alt={item.name} className="tech-icon-img" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 2: Moves DOWN on scroll */}
          <div
            className="tech-col tech-col-2"
            style={{
              transform: `translate3d(0, calc(-320px + ${scrollDelta * 0.32}px), 0)`,
            }}
          >
            {col2Items.map((item, idx) => (
              <div key={`col2-${idx}`} className="tech-icon-card" title={item.name}>
                <img src={item.icon} alt={item.name} className="tech-icon-img" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 3: Moves UP on scroll */}
          <div
            className="tech-col tech-col-3"
            style={{
              transform: `translate3d(0, calc(-560px - ${scrollDelta * 0.32}px), 0)`,
            }}
          >
            {col3Items.map((item, idx) => (
              <div key={`col3-${idx}`} className="tech-icon-card" title={item.name}>
                <img src={item.icon} alt={item.name} className="tech-icon-img" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 4: Moves DOWN on scroll */}
          <div
            className="tech-col tech-col-4"
            style={{
              transform: `translate3d(0, calc(-800px + ${scrollDelta * 0.32}px), 0)`,
            }}
          >
            {col4Items.map((item, idx) => (
              <div key={`col4-${idx}`} className="tech-icon-card" title={item.name}>
                <img src={item.icon} alt={item.name} className="tech-icon-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
