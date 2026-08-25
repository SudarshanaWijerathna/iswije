import React from 'react';

interface AboutSectionProps {
  lead?: string;
  paragraphs?: string[];
  highlight?: string;
}

export function AboutSection({ lead, paragraphs, highlight }: AboutSectionProps) {
  const leadText = lead || 'I started by making things people could see.';
  const defaultParagraphs = [
    'Before university, I was making YouTube videos, editing footage, designing thumbnails and creating visual identities for clients.',
    'Later, I started building software and became interested in AI and machine learning.',
  ];
  const paras = paragraphs && paragraphs.length > 0 ? paragraphs : defaultParagraphs;
  const highlightText =
    highlight ||
    "Today, I work somewhere between the two — building technical products while bringing a designer's perspective to how they look, communicate and feel.";

  return (
    <div className="content-section" id="about">
      <div className="section-header-compact">
        <div className="section-title-wrap">
          <h2 className="section-heading">About</h2>
          <p className="section-subtext">The story behind the craft.</p>
        </div>
      </div>

      <div className="about-card">
        <p className="about-lead">{leadText}</p>
        <div className="about-paragraphs">
          {paras.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <p className="about-highlight">{highlightText}</p>
        </div>
      </div>
    </div>
  );
}
