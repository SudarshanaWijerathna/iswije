import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'isFeatured', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'build',
      options: [
        { label: 'Build (Engineering)', value: 'build' },
        { label: 'Design (UI / UX)', value: 'design' },
      ],
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Spotlight / Featured Project (e.g. Insightflow top banner)',
      defaultValue: false,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle / Secondary Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logoStaticUrl',
      type: 'text',
      label: 'Static Logo URL fallback (e.g. /project_logo_001.svg)',
    },
    {
      name: 'thumbnailStaticUrl',
      type: 'text',
      label: 'Static Thumbnail URL fallback (e.g. /project_thumbnail_001.png)',
    },
    {
      name: 'liveDemoUrl',
      type: 'text',
      label: 'Live Demo URL',
    },
    {
      name: 'liveDemoText',
      type: 'text',
      label: 'Live Demo Button Text',
      defaultValue: 'Live Demo',
    },
    {
      name: 'githubUrl',
      type: 'text',
      label: 'GitHub URL',
    },
    {
      name: 'previewType',
      type: 'select',
      defaultValue: 'image',
      options: [
        { label: 'Interactive Code Window (Nexus style)', value: 'nexus-code' },
        { label: '3D Orbit Rings Scene (Aether style)', value: 'aether-3d' },
        { label: 'Latency Bar Chart (HyperScale style)', value: 'hyperscale-chart' },
        { label: 'OS Dashboard Grid (Pulse style)', value: 'pulse-dash' },
        { label: 'Static Image / Screenshot Thumbnail', value: 'image' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order (lower numbers appear first)',
    },
  ],
};
