import React from 'react';
import type { Metadata } from 'next';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { CertificatesClient, CertificateItem } from '@/components/CertificatesClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Certificates & Credentials | Sudarshana Wijerathna',
  description: 'Verified academic and professional certifications in AI, Machine Learning, Cloud Architecture, and Software Engineering.',
  openGraph: {
    title: 'Certificates & Credentials | Sudarshana Wijerathna',
    description: 'Verified academic and professional certifications in AI, Machine Learning, Cloud Architecture, and Software Engineering.',
    type: 'website',
  },
};

// Real certificate items loaded from certificates directory
const DEFAULT_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University (Coursera)',
    category: 'ai-ml',
    issueDate: 'Nov 2025',
    credentialId: 'STXINBTSDZZ7',
    credentialUrl: 'https://coursera.org/verify/STXINBTSDZZ7',
    description: 'Mastered core machine learning foundations, linear regression, logistic regression, gradient descent algorithms, cost functions, and regularization techniques under Andrew Ng.',
    imageUrl: '/certificates/previews/supervised-learning-regression-classification.png',
    pdfUrl: '/certificates/docs/supervised-learning-regression-classification.pdf',
    skills: [
      { skill: 'Supervised Learning' },
      { skill: 'Linear Regression' },
      { skill: 'Logistic Regression' },
      { skill: 'Gradient Descent' },
      { skill: 'Regularization' },
      { skill: 'Python / NumPy' },
    ],
    isFeatured: true,
    order: 1,
  },
  {
    id: 'cert-2',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford University (Coursera)',
    category: 'ai-ml',
    issueDate: 'Dec 2025',
    credentialId: 'R9F4U59H09GZ',
    credentialUrl: 'https://coursera.org/verify/R9F4U59H09GZ',
    description: 'Built and trained multi-layer artificial neural networks with TensorFlow, implemented decision trees, random forests, XGBoost tree ensembles, and machine learning diagnostic methods.',
    imageUrl: '/certificates/previews/advanced-learning-algorithms.png',
    pdfUrl: '/certificates/docs/advanced-learning-algorithms.pdf',
    skills: [
      { skill: 'Neural Networks' },
      { skill: 'TensorFlow' },
      { skill: 'Decision Trees' },
      { skill: 'Random Forests' },
      { skill: 'XGBoost' },
      { skill: 'Model Evaluation' },
    ],
    isFeatured: true,
    order: 2,
  },
  {
    id: 'cert-3',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford University (Coursera)',
    category: 'ai-ml',
    issueDate: 'Mar 2026',
    credentialId: 'II10SNZ662BG',
    credentialUrl: 'https://coursera.org/verify/II10SNZ662BG',
    description: 'Implemented K-means clustering, anomaly detection with Gaussian distribution models, collaborative filtering & content-based recommender systems, PCA dimensionality reduction, and deep Q-learning.',
    imageUrl: '/certificates/previews/unsupervised-learning-recommenders-reinforcement-learning.png',
    pdfUrl: '/certificates/docs/unsupervised-learning-recommenders-reinforcement-learning.pdf',
    skills: [
      { skill: 'Unsupervised Learning' },
      { skill: 'K-Means Clustering' },
      { skill: 'Anomaly Detection' },
      { skill: 'Recommender Systems' },
      { skill: 'Reinforcement Learning' },
      { skill: 'PCA' },
    ],
    isFeatured: true,
    order: 3,
  },
  {
    id: 'cert-4',
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI (Coursera)',
    category: 'ai-ml',
    issueDate: 'Oct 2025',
    credentialId: '6SZH120EFAPU',
    credentialUrl: 'https://coursera.org/verify/6SZH120EFAPU',
    description: 'Explored generative AI capabilities, LLM architectures, prompt engineering, Retrieval-Augmented Generation (RAG), diffusion models, AI project lifecycle, and strategic enterprise operationalization.',
    imageUrl: '/certificates/previews/generative-ai-for-everyone.png',
    pdfUrl: '/certificates/docs/generative-ai-for-everyone.pdf',
    skills: [
      { skill: 'Generative AI' },
      { skill: 'LLMs' },
      { skill: 'Prompt Engineering' },
      { skill: 'RAG' },
      { skill: 'AI Lifecycle' },
      { skill: 'Diffusion Models' },
    ],
    isFeatured: true,
    order: 4,
  },
  {
    id: 'cert-5',
    title: 'Front-End Web Development',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
    category: 'software-eng',
    issueDate: '2025',
    credentialId: 'cXpTJVIEEn',
    credentialUrl: 'https://open.uom.lk/verify',
    description: 'Comprehensive curriculum in modern responsive web development, semantic HTML5, CSS3 styling systems, client-side JavaScript architecture, and responsive UI engineering.',
    imageUrl: '/certificates/previews/front-end-web-development-uom.png',
    pdfUrl: '/certificates/docs/front-end-web-development-uom.pdf',
    skills: [
      { skill: 'HTML5' },
      { skill: 'CSS3' },
      { skill: 'JavaScript' },
      { skill: 'Responsive Design' },
      { skill: 'DOM Manipulation' },
      { skill: 'Web Standards' },
    ],
    isFeatured: true,
    order: 5,
  },
  {
    id: 'cert-6',
    title: 'PHP Bootcamp: The Complete Programming Course With MYSQL',
    issuer: 'Udemy (Knowledge Nest)',
    category: 'software-eng',
    issueDate: 'Jun 2025',
    credentialId: 'UC-3b46872d-69de-44ae-b083-c34dd65765c2',
    credentialUrl: 'https://ude.my/UC-3b46872d-69de-44ae-b083-c34dd65765c2',
    description: 'Full backend engineering course covering PHP syntax, Object-Oriented Programming (OOP), MySQL relational database design, PDO queries, session management, and authentication security.',
    imageUrl: '/certificates/previews/udemy-certificate.png',
    pdfUrl: '/certificates/docs/udemy-certificate.pdf',
    skills: [
      { skill: 'PHP' },
      { skill: 'MySQL' },
      { skill: 'OOP' },
      { skill: 'PDO' },
      { skill: 'Backend Development' },
      { skill: 'Database Modeling' },
    ],
    isFeatured: false,
    order: 6,
  },
  {
    id: 'cert-7',
    title: 'Web Design for Beginners',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa',
    category: 'design',
    issueDate: '2025',
    credentialId: 'pkwKRmvG9q',
    credentialUrl: 'https://open.uom.lk/verify',
    description: 'Foundational web design principles covering layout structure, visual hierarchy, color theory, typography standards, UI wireframing, and user-centric web interface design.',
    imageUrl: '/certificates/previews/web-design-for-beginners-uom.png',
    pdfUrl: '/certificates/docs/web-design-for-beginners-uom.pdf',
    skills: [
      { skill: 'Web Design' },
      { skill: 'UI Wireframing' },
      { skill: 'Visual Hierarchy' },
      { skill: 'Color Theory' },
      { skill: 'Typography' },
      { skill: 'Layout Systems' },
    ],
    isFeatured: false,
    order: 7,
  },
];

export default async function CertificatesPage() {
  let certificatesList: CertificateItem[] = [];
  let profileData: any = null;

  try {
    const payload = await getPayload({ config: configPromise });

    // 1. Fetch Profile Global
    try {
      profileData = await payload.findGlobal({ slug: 'profile' as any });
    } catch (e) {
      // fallback
    }

    // 2. Fetch Certificates Collection
    try {
      const res = await payload.find({
        collection: 'certificates' as any,
        sort: 'order',
        limit: 100,
      });

      if (res.docs && res.docs.length > 0) {
        certificatesList = res.docs.map((doc: any) => ({
          id: String(doc.id),
          title: doc.title,
          issuer: doc.issuer,
          category: doc.category,
          issueDate: doc.issueDate,
          expiryDate: doc.expiryDate,
          credentialId: doc.credentialId,
          credentialUrl: doc.credentialUrl,
          description: doc.description,
          imageUrl:
            typeof doc.image === 'object' && doc.image?.url
              ? doc.image.url
              : doc.imageStaticUrl,
          pdfUrl: doc.pdfUrl,
          skills: doc.skills,
          isFeatured: doc.isFeatured,
          order: doc.order,
        }));
      }
    } catch (e) {
      // fallback
    }
  } catch (err) {
    // Database fallback
  }

  const finalCertificates = certificatesList.length > 0 ? certificatesList : DEFAULT_CERTIFICATES;

  return (
    <CertificatesClient
      initialCertificates={finalCertificates}
      profile={profileData}
    />
  );
}
