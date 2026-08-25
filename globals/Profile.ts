import type { GlobalConfig } from 'payload';

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroHeading',
      type: 'text',
      defaultValue: 'Hey, I’m Isuru',
      required: true,
    },
    {
      name: 'heroBio',
      type: 'textarea',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin purus pretium fermentum imperdiet.',
      required: true,
    },
    {
      name: 'isAvailableForWork',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show "Available for Work" left dock tab',
    },
    {
      name: 'statusText',
      type: 'text',
      defaultValue: 'AVAILABLE FOR WORK',
      label: 'Tab Status Text',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      defaultValue: 'https://www.linkedin.com/in/sudarshanawijerathna/',
    },
    {
      name: 'githubUrl',
      type: 'text',
      defaultValue: 'https://github.com/SudarshanaWijerathna',
    },
    {
      name: 'email',
      type: 'text',
      defaultValue: 'hello@example.com',
    },
    {
      name: 'cvFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Downloadable CV File (PDF)',
    },
  ],
};
