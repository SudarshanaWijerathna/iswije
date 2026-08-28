import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'worksTitle',
      type: 'text',
      defaultValue: 'Selected Works',
    },
    {
      name: 'buildSubtitle',
      type: 'textarea',
      defaultValue: "A selection of products, systems, and experiments I've built across AI, software, and data.",
    },
    {
      name: 'designSubtitle',
      type: 'textarea',
      defaultValue: 'Design systems, interaction prototypes, and spatial user experiences crafted with micro-precision.',
    },
    {
      name: 'aboutLead',
      type: 'text',
      defaultValue: 'I started creating long before I started coding.',
    },
    {
      name: 'aboutParagraphs',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'aboutHighlight',
      type: 'textarea',
      defaultValue: "Today, I sit somewhere between the two. I build technical products with a designer's instinct for how they should look, communicate and feel.",
    },
    {
      name: 'contactPrompt',
      type: 'text',
      defaultValue: 'Have something worth building?',
    },
    {
      name: 'footerCopy',
      type: 'text',
      defaultValue: 'Crafted with precision & modern web standards.',
    },
  ],
};
