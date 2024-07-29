import { withDbPrefix } from '@/utils/cms';
import type { CollectionConfig } from 'payload';

const Categories: CollectionConfig = {
  slug: 'categories',
  dbName: withDbPrefix('categories'),
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
  ],
};

export default Categories;