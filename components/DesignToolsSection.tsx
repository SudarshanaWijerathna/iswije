'use client';

import React from 'react';

interface OrbitItem {
  id: number;
  src: string;
  alt: string;
}

const ORBIT_ITEMS: OrbitItem[] = [
  { id: 1, src: '/orbit_images/Group 1.png', alt: 'Adobe After Effects' },
  { id: 2, src: '/orbit_images/Group 2.png', alt: 'Affinity Designer' },
  { id: 3, src: '/orbit_images/Group 3.png', alt: 'Adobe Photoshop' },
  { id: 4, src: '/orbit_images/Group 4.png', alt: 'Figma' },
  { id: 5, src: '/orbit_images/Group 5.png', alt: 'Adobe Illustrator' },
  { id: 6, src: '/orbit_images/Group 6.png', alt: 'Adobe Premiere Pro' },
];

export function DesignToolsSection() {
  return (
    <div className="tools-section-wrapper" id="designToolsSection">
      {/* Section Header */}
      <div className="works-header tools-works-header">
        <div className="design-badge-wrap">
          <span className="design-badge tools-badge">CREATIVE STACK</span>
        </div>
        <h2 className="works-title">Tools I Work With</h2>
        <p className="works-subtitle">
          The industry-standard creative suites I leverage daily — spanning UI/UX design in Figma, vector craft in Adobe Illustrator &amp; Affinity, motion design in After Effects, video editing in Premiere Pro, and visual compositing in Photoshop.
        </p>
      </div>

      {/* 3D Orbit Stage */}
      <div className="tools-portrait-showcase">
        <div className="orbit-stage-wrapper">
          {/* 3D Rotating Ring Carousel */}
          <div className="orbit-carousel-3d">
            {ORBIT_ITEMS.map((item, index) => {
              const itemAngle = (index * 360) / ORBIT_ITEMS.length;
              return (
                <div
                  key={item.id}
                  className="orbit-card-3d"
                  style={{
                    '--item-angle': `${itemAngle}deg`,
                  } as React.CSSProperties}
                >
                  <div className="orbit-card-inner">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="orbit-card-img"
                      draggable={false}
                    />
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
              alt="Sudarshana Wijerathna working with creative design tools"
              className="tools-portrait-img"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
