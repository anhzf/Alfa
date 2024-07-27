import Categories from './Categories';
import { Media } from './Media';
import type { CollectionConfig, CollectionSlug } from 'payload';

const Products: CollectionConfig = {
  slug: 'products',
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
      type: 'textarea',
      required: false,
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: Categories.slug as CollectionSlug,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'relationship',
      relationTo: Media.slug as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
    }
  ],
};

export default Products;