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

// Fallback certificate items in case database is empty or running before first seed
const DEFAULT_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    category: 'ai-ml',
    issueDate: '2024',
    credentialId: 'DL-SPEC-982471',
    credentialUrl: 'https://coursera.org/verify/specialization/sample',
    description: 'Mastered neural networks, CNNs, RNNs, Transformers, optimization algorithms (Adam, RMSProp), and deep learning engineering best practices.',
    skills: [
      { skill: 'Deep Learning' },
      { skill: 'PyTorch' },
      { skill: 'Transformers' },
      { skill: 'CNNs & RNNs' },
    ],
    isFeatured: true,
    order: 1,
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    category: 'cloud-devops',
    issueDate: '2024',
    expiryDate: '2027',
    credentialId: 'AWS-SAA-839201',
    credentialUrl: 'https://aws.amazon.com/verification',
    description: 'Designing highly available, scalable, fault-tolerant, and secure distributed cloud systems on AWS architecture.',
    skills: [
      { skill: 'AWS Cloud' },
      { skill: 'Distributed Systems' },
      { skill: 'ECS / EKS' },
      { skill: 'IAM & Security' },
    ],
    isFeatured: true,
    order: 2,
  },
  {
    id: 'cert-3',
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online & DeepLearning.AI',
    category: 'ai-ml',
    issueDate: '2023',
    credentialId: 'STANFORD-ML-44102',
    credentialUrl: 'https://coursera.org/verify/specialization/sample',
    description: 'Supervised and unsupervised learning, decision trees, ensemble methods, anomaly detection, recommender systems, and reinforcement learning fundamentals.',
    skills: [
      { skill: 'Machine Learning' },
      { skill: 'Scikit-Learn' },
      { skill: 'Algorithms' },
      { skill: 'Gradient Boosting' },
    ],
    isFeatured: true,
    order: 3,
  },
  {
    id: 'cert-4',
    title: 'Professional Data Engineering',
    issuer: 'Google Cloud Platform (GCP)',
    category: 'data-science',
    issueDate: '2023',
    credentialId: 'GCP-PDE-119382',
    credentialUrl: 'https://cloud.google.com/certification',
    description: 'Building data processing pipelines, BigQuery warehousing, real-time stream processing with Pub/Sub & Dataflow, and MLOps operationalization.',
    skills: [
      { skill: 'BigQuery' },
      { skill: 'Data Pipelines' },
      { skill: 'Apache Beam' },
      { skill: 'MLOps' },
    ],
    isFeatured: false,
    order: 4,
  },
  {
    id: 'cert-5',
    title: 'Full Stack Software Architecture & Design',
    issuer: 'Meta / Coursera',
    category: 'software-eng',
    issueDate: '2023',
    credentialId: 'META-FSD-771290',
    credentialUrl: 'https://coursera.org/verify/sample',
    description: 'Advanced React patterns, Next.js architecture, RESTful & GraphQL API design, database modeling, and microservices design principles.',
    skills: [
      { skill: 'React / Next.js' },
      { skill: 'TypeScript' },
      { skill: 'API Design' },
      { skill: 'System Architecture' },
    ],
    isFeatured: false,
    order: 5,
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
