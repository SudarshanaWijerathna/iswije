'use client';

import React from 'react';

interface BackToTopProps {
  footerCopy?: string;
}

export function BackToTop({ footerCopy = 'Crafted with precision & modern web standards.' }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="works-footer">
      <div className="footer-divider"></div>
      <p className="footer-copy">{footerCopy}</p>
      <button type="button" className="back-to-top-btn" onClick={scrollToTop}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        <span>Back to Top</span>
      </button>
    </footer>
  );
}
