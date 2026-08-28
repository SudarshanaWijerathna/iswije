import React from 'react';

interface ContactSectionProps {
  prompt?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  cvUrl?: string;
}

export function ContactSection({
  prompt = 'Have something worth building?',
  email = 'hello@example.com',
  linkedinUrl = 'https://www.linkedin.com/in/sudarshanawijerathna/',
  githubUrl = 'https://github.com',
  cvUrl = '#cv',
}: ContactSectionProps) {
  return (
    <div className="content-section contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-portrait-wrap">
          <img
            src="/portrait002.png"
            alt="Sudarshana Wijerathna"
            className="contact-portrait-img"
          />
        </div>

        <div className="contact-card-content">
          <h3 className="contact-prompt">
            <span className="prompt-build">{prompt || 'Have something worth building?'}</span>
            <span className="prompt-design">Have something worth creating?</span>
          </h3>
          <a href={`mailto:${email}`} className="contact-cta-btn">
            <span>Let&apos;s talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <div className="contact-links-row">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-pill-link">
              <span>LinkedIn</span>
            </a>
            <span className="contact-sep">·</span>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-pill-link">
              <span>GitHub</span>
            </a>
            <span className="contact-sep">·</span>
            <a href={`mailto:${email}`} className="contact-pill-link">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
