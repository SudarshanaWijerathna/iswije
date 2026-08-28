'use client';

import React from 'react';

export interface ToolCategory {
  categoryName: string;
  categoryIcon: string;
  tools: {
    name: string;
    level: string;
    useCase: string;
    iconClass: string;
  }[];
}

const DESIGN_TOOL_CATEGORIES: ToolCategory[] = [
  {
    categoryName: 'UI / UX & Prototyping',
    categoryIcon: 'fa-solid fa-layer-group',
    tools: [
      { name: 'Figma', level: 'Expert', useCase: 'Design systems, tokens, components & high-fidelity interactive prototypes', iconClass: 'fa-brands fa-figma' },
      { name: 'FigJam', level: 'Advanced', useCase: 'User flows, journey mapping & collaborative wireframing', iconClass: 'fa-solid fa-map' },
      { name: 'Framer', level: 'Advanced', useCase: 'Production-ready responsive layouts & scroll interactions', iconClass: 'fa-solid fa-cube' },
      { name: 'Principle', level: 'Advanced', useCase: 'Timeline micro-interactions & tactile haptic states', iconClass: 'fa-solid fa-mobile-screen' },
      { name: 'Rive', level: 'Proficient', useCase: 'State machine interactive vector animations for apps', iconClass: 'fa-solid fa-play' },
    ],
  },
  {
    categoryName: 'Motion Graphics & 3D',
    categoryIcon: 'fa-solid fa-film',
    tools: [
      { name: 'After Effects', level: 'Expert', useCase: 'Kinetic typography, motion branding, particle VFX & expressions', iconClass: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Cinema 4D', level: 'Advanced', useCase: '3D motion design, geometric polyhedra & dynamics', iconClass: 'fa-solid fa-cubes' },
      { name: 'Blender', level: 'Advanced', useCase: 'Raytraced caustics, procedural glass shaders & lighting', iconClass: 'fa-solid fa-circle-nodes' },
      { name: 'Lottie / JSON', level: 'Expert', useCase: 'Vector animation compression & web runtime playback', iconClass: 'fa-solid fa-code' },
      { name: 'Premiere Pro', level: 'Advanced', useCase: 'Video pacing, sound design sync & showreels', iconClass: 'fa-solid fa-video' },
      { name: 'DaVinci Resolve', level: 'Proficient', useCase: 'Color grading, node-based correction & LUTs', iconClass: 'fa-solid fa-palette' },
    ],
  },
  {
    categoryName: 'Visual Identity & Vector Art',
    categoryIcon: 'fa-solid fa-bezier-curve',
    tools: [
      { name: 'Adobe Illustrator', level: 'Expert', useCase: 'Vector logomarks, geometric grids & typography systems', iconClass: 'fa-solid fa-pen-nib' },
      { name: 'Adobe Photoshop', level: 'Advanced', useCase: 'Image compositing, lighting textures & mockups', iconClass: 'fa-solid fa-image' },
      { name: 'Spline 3D', level: 'Advanced', useCase: 'Web 3D assets, camera orbits & glass shaders', iconClass: 'fa-solid fa-shapes' },
      { name: 'Procreate', level: 'Proficient', useCase: 'Digital concept sketching & ideation thumbnails', iconClass: 'fa-solid fa-paintbrush' },
    ],
  },
  {
    categoryName: 'Creative Frontend & Code',
    categoryIcon: 'fa-solid fa-code-branch',
    tools: [
      { name: 'HTML5 & CSS3', level: 'Expert', useCase: 'Fluid typography, CSS grid, keyframes & glassmorphism', iconClass: 'fa-brands fa-html5' },
      { name: 'React & TypeScript', level: 'Expert', useCase: 'Design system component libraries & dynamic state', iconClass: 'fa-brands fa-react' },
      { name: 'Three.js / WebGL', level: 'Advanced', useCase: 'Interactive 3D canvas viewports & shader effects', iconClass: 'fa-solid fa-vr-cardboard' },
      { name: 'GSAP / Motion', level: 'Advanced', useCase: 'Physics springs, scroll parallax & stagger choreography', iconClass: 'fa-solid fa-bolt' },
    ],
  },
];

export function DesignToolsSection() {
  return (
    <div className="tools-section-wrapper" id="designToolsSection">
      {/* Section Header */}
      <div className="works-header tools-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge tools-badge">CREATIVE TOOLKIT</span>
        </div>
        <h2 className="works-title">Tools I'm Comfortable With</h2>
        <p className="works-subtitle">
          The software suites, 3D engines, motion suites, and frontend technologies I leverage to craft visual experiences.
        </p>
      </div>

      {/* Tools Category Groups */}
      <div className="tools-categories-list">
        {DESIGN_TOOL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="tool-category-card">
            <div className="tool-cat-header">
              <i className={`${cat.categoryIcon} tool-cat-icon`}></i>
              <h3 className="tool-cat-title">{cat.categoryName}</h3>
            </div>

            <div className="tool-items-grid">
              {cat.tools.map((tool, tIdx) => (
                <div key={tIdx} className="tool-pill-item">
                  <div className="tool-pill-top">
                    <div className="tool-name-wrap">
                      <i className={`${tool.iconClass} tool-pill-icon`}></i>
                      <span className="tool-name">{tool.name}</span>
                    </div>
                    <span className={`tool-level-badge level-${tool.level.toLowerCase()}`}>
                      {tool.level}
                    </span>
                  </div>
                  <p className="tool-usecase">{tool.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
