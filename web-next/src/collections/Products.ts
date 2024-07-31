import { withDbPrefix } from '@/utils/cms';
import Categories from './Categories';
import { Media } from './Media';
import type { CollectionConfig, CollectionSlug } from 'payload';

const Products: CollectionConfig = {
  slug: 'products',
  dbName: withDbPrefix('products'),
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: false,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: Categories.slug as CollectionSlug,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: Media.slug as CollectionSlug,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
      ],
    },
    {
      name: 'price',
      label: 'Price (IDR)',
      type: 'number',
      required: true,
    },
    {
      name: 'specs',
      label: 'Spesifikasi',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              label: 'Nama',
              type: 'text',
            },
            {
              name: 'value',
              label: 'Nilai',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};

export default Products;