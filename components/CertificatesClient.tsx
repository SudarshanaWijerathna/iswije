'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export interface CertificateItem {
  id?: string;
  title: string;
  issuer: string;
  category?: 'ai-ml' | 'cloud-devops' | 'software-eng' | 'data-science' | 'design' | 'other' | string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  imageUrl?: string;
  pdfUrl?: string;
  skills?: { skill?: string }[];
  isFeatured?: boolean;
  order?: number;
}

interface CertificatesClientProps {
  initialCertificates: CertificateItem[];
  profile?: {
    heroHeading?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    email?: string;
    cvUrl?: string;
  };
}

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cloud & DevOps', value: 'cloud-devops' },
  { label: 'Software Engineering', value: 'software-eng' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'Design & UX', value: 'design' },
];

export function CertificatesClient({ initialCertificates, profile }: CertificatesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewModalCert, setPreviewModalCert] = useState<CertificateItem | null>(null);

  const linkedinUrl = profile?.linkedinUrl || 'https://www.linkedin.com/in/sudarshanawijerathna/';
  const githubUrl = profile?.githubUrl || 'https://github.com/SudarshanaWijerathna';
  const cvUrl = profile?.cvUrl || '#cv';

  // Handle 1-click Copy ID
  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Filter and search logic
  const filteredCertificates = useMemo(() => {
    return initialCertificates.filter((cert) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        cert.category === selectedCategory ||
        (selectedCategory === 'ai-ml' && cert.category?.includes('ai')) ||
        (selectedCategory === 'cloud-devops' && cert.category?.includes('cloud')) ||
        (selectedCategory === 'software-eng' && cert.category?.includes('software')) ||
        (selectedCategory === 'data-science' && cert.category?.includes('data'));

      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const titleMatch = cert.title?.toLowerCase().includes(query);
      const issuerMatch = cert.issuer?.toLowerCase().includes(query);
      const descMatch = cert.description?.toLowerCase().includes(query);
      const credMatch = cert.credentialId?.toLowerCase().includes(query);
      const skillMatch = cert.skills?.some((s) => s.skill?.toLowerCase().includes(query));

      return matchesCategory && (titleMatch || issuerMatch || descMatch || credMatch || skillMatch);
    });
  }, [initialCertificates, selectedCategory, searchQuery]);

  // Distinct count statistics
  const totalCount = initialCertificates.length;
  const verifiedCount = initialCertificates.filter((c) => !!c.credentialUrl).length;
  const uniqueIssuers = useMemo(() => {
    const set = new Set(initialCertificates.map((c) => c.issuer));
    return set.size;
  }, [initialCertificates]);

  const getCategoryBadgeClass = (category?: string) => {
    switch (category) {
      case 'ai-ml':
        return 'cert-badge-ai';
      case 'cloud-devops':
        return 'cert-badge-cloud';
      case 'software-eng':
        return 'cert-badge-swe';
      case 'data-science':
        return 'cert-badge-data';
      case 'design':
        return 'cert-badge-design';
      default:
        return 'cert-badge-default';
    }
  };

  const formatCategoryName = (category?: string) => {
    switch (category) {
      case 'ai-ml':
        return 'AI & ML';
      case 'cloud-devops':
        return 'Cloud & DevOps';
      case 'software-eng':
        return 'Software Eng';
      case 'data-science':
        return 'Data Science';
      case 'design':
        return 'Design / UX';
      default:
        return 'Certification';
    }
  };

  return (
    <div className="certs-page-wrapper">
      {/* Top Floating Navigation Bar */}
      <header className="certs-top-nav">
        <Link href="/" className="certs-back-link" title="Return to Main Portfolio">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Portfolio</span>
        </Link>

        <div className="certs-nav-actions">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="certs-nav-icon-btn"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="certs-nav-icon-btn"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          {cvUrl && (
            <a
              href={cvUrl}
              target={cvUrl.startsWith('http') || cvUrl.endsWith('.pdf') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="certs-nav-pill-btn"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>CV</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Certificate Frame Content */}
      <main className="certs-container">
        {/* Hero Header Section */}
        <section className="certs-hero-header">
          <div className="certs-badge-pill">
            <span className="certs-verified-dot"></span>
            <span>VERIFIED ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>

          <h1 className="certs-main-title">Certifications &amp; Accreditations</h1>
          <p className="certs-main-subtitle">
            A comprehensive record of specialized training, industry certifications, and validated competencies across AI, machine learning, cloud architecture, and software engineering.
          </p>

          {/* Key Metrics Strip */}
          <div className="certs-stats-strip">
            <div className="cert-stat-item">
              <span className="cert-stat-num">{totalCount}</span>
              <span className="cert-stat-lbl">Credentials</span>
            </div>
            <div className="cert-stat-divider"></div>
            <div className="cert-stat-item">
              <span className="cert-stat-num">{verifiedCount}</span>
              <span className="cert-stat-lbl">Direct Verifications</span>
            </div>
            <div className="cert-stat-divider"></div>
            <div className="cert-stat-item">
              <span className="cert-stat-num">{uniqueIssuers}</span>
              <span className="cert-stat-lbl">Institutions</span>
            </div>
          </div>
        </section>

        {/* Filter Controls Bar: Search & Category Tabs */}
        <section className="certs-controls-section">
          {/* Search Box */}
          <div className="certs-search-wrap">
            <svg className="certs-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="certs-search-input"
              placeholder="Search by certificate title, issuer, or skill (e.g., PyTorch, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search certificates"
            />
            {searchQuery && (
              <button
                type="button"
                className="certs-clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="certs-categories-scroll" role="tablist" aria-label="Certificate categories">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`certs-cat-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="certs-grid-section">
          {filteredCertificates.length > 0 ? (
            <div className="certs-grid">
              {filteredCertificates.map((cert, index) => {
                const isFeatured = cert.isFeatured;
                return (
                  <article
                    key={cert.id || index}
                    className={`cert-card ${isFeatured ? 'cert-card-featured' : ''}`}
                  >
                    {/* Top Row: Category & Issue Date */}
                    <div className="cert-card-top">
                      <span className={`cert-category-badge ${getCategoryBadgeClass(cert.category)}`}>
                        {formatCategoryName(cert.category)}
                      </span>
                      <span className="cert-date-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>{cert.issueDate}</span>
                      </span>
                    </div>

                    {/* Issuer */}
                    <div className="cert-issuer-wrap">
                      <div className="cert-issuer-icon">
                        <i className="fa-solid fa-award"></i>
                      </div>
                      <span className="cert-issuer-name">{cert.issuer}</span>
                    </div>

                    {/* Certificate Title */}
                    <h2 className="cert-title">{cert.title}</h2>

                    {/* Description */}
                    {cert.description && (
                      <p className="cert-description">{cert.description}</p>
                    )}

                    {/* Skills Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="cert-skills-wrap">
                        {cert.skills.map((s, sIdx) => {
                          if (!s.skill) return null;
                          return (
                            <span key={sIdx} className="cert-skill-tag">
                              {s.skill}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* Credential ID Bar (with 1-click Copy) */}
                    {cert.credentialId && (
                      <div className="cert-credential-id-bar">
                        <span className="cert-id-label">Credential ID:</span>
                        <code className="cert-id-code">{cert.credentialId}</code>
                        <button
                          type="button"
                          className="cert-copy-btn"
                          onClick={() => handleCopyId(cert.credentialId!)}
                          title="Copy Credential ID"
                          aria-label="Copy Credential ID"
                        >
                          {copiedId === cert.credentialId ? (
                            <span className="cert-copied-text">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>Copied!</span>
                            </span>
                          ) : (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Card Footer Actions */}
                    <div className="cert-card-footer">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-action-btn cert-verify-btn"
                        >
                          <span>Verify Credential</span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      ) : (
                        <span className="cert-verified-standalone">
                          <span className="cert-dot-verified"></span> Verified Record
                        </span>
                      )}

                      {cert.imageUrl && (
                        <button
                          type="button"
                          className="cert-action-btn cert-preview-btn"
                          onClick={() => setPreviewModalCert(cert)}
                          title="Preview Certificate"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>Preview</span>
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="certs-empty-state">
              <div className="certs-empty-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3 className="certs-empty-title">No certificates found</h3>
              <p className="certs-empty-desc">
                No credentials matched your search query &quot;{searchQuery}&quot; in the selected filter.
              </p>
              <button
                type="button"
                className="certs-reset-btn"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="certs-page-footer">
          <div className="footer-divider"></div>
          <p className="footer-copy">
            Direct credential link for resume &amp; portfolio verification.
          </p>
          <Link href="/" className="certs-footer-home-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Return to Main Portfolio</span>
          </Link>
        </footer>
      </main>

      {/* Lightbox / Preview Modal */}
      {previewModalCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setPreviewModalCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div>
                <h3 className="cert-modal-title">{previewModalCert.title}</h3>
                <p className="cert-modal-subtitle">{previewModalCert.issuer} · {previewModalCert.issueDate}</p>
              </div>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setPreviewModalCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-body">
              {previewModalCert.imageUrl && (
                <img
                  src={previewModalCert.imageUrl}
                  alt={previewModalCert.title}
                  className="cert-modal-img"
                />
              )}
            </div>
            <div className="cert-modal-footer">
              {previewModalCert.credentialUrl && (
                <a
                  href={previewModalCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-verify-btn"
                >
                  <span>Open Verification Portal</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
              <button
                type="button"
                className="cert-modal-dismiss-btn"
                onClick={() => setPreviewModalCert(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
