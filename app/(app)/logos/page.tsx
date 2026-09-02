import React from 'react';
import type { Metadata } from 'next';
import { LogosClient } from '@/components/LogosClient';

export const metadata: Metadata = {
  title: 'Logos & Brand Identities | Sudarshana Wijerathna',
  description:
    'A curated archive of vector logomarks, monograms, wordmarks, and visual identity systems crafted by Sudarshana Wijerathna.',
  openGraph: {
    title: 'Logos & Brand Identities | Sudarshana Wijerathna',
    description:
      'A curated archive of vector logomarks, monograms, wordmarks, and visual identity systems crafted by Sudarshana Wijerathna.',
    type: 'website',
  },
};

export default function LogosPage() {
  return <LogosClient />;
}
