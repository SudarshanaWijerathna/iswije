import type { CollectionConfig } from 'payload';

export const Capabilities: CollectionConfig = {
  slug: 'capabilities',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'iconType', 'order'],
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
      name: 'iconType',
      type: 'select',
      defaultValue: 'ai',
      options: [
        { label: 'AI Sparkle Icon', value: 'ai' },
        { label: 'Machine Learning Hexagon/Cube Icon', value: 'ml' },
        { label: 'Full-Stack Monitor/Browser Icon', value: 'fs' },
        { label: 'Data & Research Cylinder Database Icon', value: 'data' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlight Tags (Pills)',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};
