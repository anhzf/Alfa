import type { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'id',
      label: 'Key',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'settings',
      label: 'Settings',
      type: 'array',
      fields: [
        {
          name: 'key',
          label: 'Key',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          label: 'Value',
          type: 'json',
        },
      ],
    },
  ],
};

export default Pages;