'use client';

import React, { useState, useRef } from 'react';

interface StoryStep {
  stepNum: string;
  stepTotal: string;
  stage: 'CREATE' | 'BUILD' | 'COMBINE';
  title: string;
  content: React.ReactNode;
}

const STORY_STEPS: StoryStep[] = [
  {
    stepNum: '01',
    stepTotal: '04',
    stage: 'CREATE',
    title: 'THE BEGINNING',
    content: (
      <p className="slide-lead">I started creating long before I started coding.</p>
    ),
  },
  {
    stepNum: '02',
    stepTotal: '04',
    stage: 'CREATE',
    title: 'THE CREATOR',
    content: (
      <>
        <p>
          As a teenager, I ran a YouTube channel where I was the presenter, editor, and thumbnail designer.
        </p>
        <p>
          Later, that interest turned into freelance work — designing logos, flyers, animations and videos for people and businesses.
        </p>
      </>
    ),
  },
  {
    stepNum: '03',
    stepTotal: '04',
    stage: 'BUILD',
    title: 'THE SHIFT',
    content: (
      <>
        <p>
          When I started studying Information Technology, my canvas changed.
        </p>
        <p>
          I moved from designing things people could see to building things people could use — exploring software engineering, AI, machine learning and data.
        </p>
      </>
    ),
  },
  {
    stepNum: '04',
    stepTotal: '04',
    stage: 'COMBINE',
    title: 'TODAY',
    content: (
      <>
        <p>
          Today, I sit somewhere between the two.
        </p>
        <p className="slide-highlight">
          I build technical products with a designer&apos;s instinct for how they should look, communicate and feel.
        </p>
      </>
    ),
  },
];

const STAGES = [
  { label: 'CREATE', stepIndex: 0 },
  { label: 'CREATE', stepIndex: 1 },
  { label: 'BUILD', stepIndex: 2 },
  { label: 'COMBINE', stepIndex: 3 },
];

interface AboutSectionProps {
  lead?: string;
  paragraphs?: string[];
  highlight?: string;
}

export function AboutSection(_props?: AboutSectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [animating, setAnimating] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const goToStep = (newIndex: number, direction?: 'next' | 'prev') => {
    if (newIndex === currentStep || animating) return;
    const dir = direction || (newIndex > currentStep ? 'next' : 'prev');
    setSlideDirection(dir);
    setAnimating(true);
    setCurrentStep(newIndex);
    setTimeout(() => setAnimating(false), 400);
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1, 'prev');
    }
  };

  const handleNext = () => {
    if (currentStep < STORY_STEPS.length - 1) {
      goToStep(currentStep + 1, 'next');
    } else {
      goToStep(0, 'next');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const activeData = STORY_STEPS[currentStep];

  return (
    <div className="content-section" id="about">
      <div className="section-header-compact">
        <div className="section-title-wrap">
          <span className="about-label">About</span>
          <h2 className="about-title">Medium changed. Curiosity didn&apos;t.</h2>
        </div>
      </div>

      <div
        className="about-timeline-card"
        id="aboutTimelineCard"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Timeline Bar */}
        <div className="timeline-top-bar">
          <div className={`timeline-stage-badge stage-${activeData.stage.toLowerCase()}`}>
            <span className="stage-dot" />
            <span className="stage-name">{activeData.stage}</span>
          </div>

          <div className="timeline-counter">
            <span className="counter-curr">{activeData.stepNum}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{activeData.stepTotal}</span>
          </div>
        </div>

        {/* Slides Track Viewport */}
        <div className="timeline-slides-viewport">
          <div
            key={currentStep}
            className={`timeline-slide active slide-enter-${slideDirection}`}
          >
            <div className="slide-header">
              <span className="slide-number">{activeData.stepNum}</span>
              <span className="slide-divider">—</span>
              <h3 className="slide-step-title">{activeData.title}</h3>
            </div>
            <div className="slide-body">
              {activeData.content}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation & Progress Track (Outside the card) */}
      <div className="timeline-bottom-bar">
        <button
          type="button"
          className="timeline-nav-btn prev-btn"
          onClick={handlePrev}
          disabled={currentStep === 0}
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 19" />
          </svg>
        </button>

        <div className="timeline-progress-track">
          {STORY_STEPS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`progress-segment ${idx <= currentStep ? 'active' : ''}`}
              onClick={() => goToStep(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="timeline-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {/* About Closing Text */}
      <div className="about-closing-text">
        <p>
          I&apos;m focused on building AI-powered software and intelligent products — particularly systems that turn complex technology into something people can actually use.
        </p>
        <p>
          My design background still follows me into everything I build, from the interface and interaction to the way the product communicates.
        </p>
      </div>
    </div>
  );
}
