import Media from '@/collections/Media';
import { withDbPrefix } from '@/utils/cms';
import type { CollectionConfig, CollectionSlug } from 'payload';

const Clients: CollectionConfig = {
  slug: 'clients',
  dbName: withDbPrefix('clients'),
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'img',
          label: 'Image',
          type: 'upload',
          relationTo: Media.slug as CollectionSlug,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
          required: true,
        },
      ],
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: false,
    },
  ],
};

export default Clients;