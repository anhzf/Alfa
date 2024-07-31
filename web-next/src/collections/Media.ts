import { withDbPrefix } from '@/utils/cms';
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  dbName: withDbPrefix('media'),
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'sm',
        width: 200,
      },
      {
        name: 'md',
        width: 480,
      },
      {
        name: 'lg',
        width: 1024,
      },
      {
        name: 'xl',
        width: 1600,
      },
    ],
    adminThumbnail: 'sm',
  },
};

export default Media;
