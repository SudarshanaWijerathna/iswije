import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email and password are automatically added by auth: true
    {
      name: 'name',
      type: 'text',
    },
  ],
};
