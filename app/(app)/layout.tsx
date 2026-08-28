import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../../style.css';

export const metadata: Metadata = {
  title: 'Sudarshana Wijerathna',
  description: 'AI, software, and data engineering portfolio.',
  icons: {
    icon: '/logo-buildmode.svg',
    shortcut: '/logo-buildmode.svg',
    apple: '/logo-buildmode.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-buildmode.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <div className="screen-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
