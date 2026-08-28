import type { CollectionConfig } from 'payload';

export const Certificates: CollectionConfig = {
  slug: 'certificates',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'issuer', 'category', 'issueDate', 'isFeatured', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Certificate / Qualification Title',
    },
    {
      name: 'issuer',
      type: 'text',
      required: true,
      label: 'Issuing Organization / Platform (e.g. AWS, DeepLearning.AI, Stanford)',
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'ai-ml',
      options: [
        { label: 'AI & Machine Learning', value: 'ai-ml' },
        { label: 'Cloud & DevOps', value: 'cloud-devops' },
        { label: 'Software Engineering', value: 'software-eng' },
        { label: 'Data Science & Analytics', value: 'data-science' },
        { label: 'Design & UX', value: 'design' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'issueDate',
      type: 'text',
      required: true,
      label: 'Issue Date (e.g. Jan 2024 or 2024)',
    },
    {
      name: 'expiryDate',
      type: 'text',
      label: 'Expiration Date (Optional, e.g. Jan 2027 or No Expiration)',
    },
    {
      name: 'credentialId',
      type: 'text',
      label: 'Credential / License ID (Optional)',
    },
    {
      name: 'credentialUrl',
      type: 'text',
      label: 'Verification URL (e.g. Credly or certificate verification link)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Short Summary of Topics / Competencies',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Certificate Badge / Thumbnail Image',
    },
    {
      name: 'imageStaticUrl',
      type: 'text',
      label: 'Static Image / Logo URL fallback',
    },
    {
      name: 'pdfUrl',
      type: 'text',
      label: 'Direct PDF URL (Optional)',
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills / Technologies',
      fields: [
        {
          name: 'skill',
          type: 'text',
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Highlight / Featured Certificate',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order (lower numbers appear first)',
    },
  ],
};
