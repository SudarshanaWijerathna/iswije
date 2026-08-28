'use client';

import React from 'react';

interface BackToTopProps {
  footerCopy?: string;
  rightsReserved?: string;
}

export function BackToTop({
  footerCopy = '© 2026 Sudarshana Wijerathna',
  rightsReserved = 'All rights reserved',
}: BackToTopProps) {
  return (
    <footer className="works-footer">
      <div className="footer-copyright-row">
        <span className="footer-copy">{footerCopy}</span>
        <span className="footer-sep">·</span>
        <span className="footer-rights">{rightsReserved}</span>
      </div>
    </footer>
  );
}

