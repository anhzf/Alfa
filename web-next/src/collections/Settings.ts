import { withDbPrefix } from '@/utils/cms';
import type { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
  slug: 'settings',
  dbName: withDbPrefix('settings'),
  admin: {
    useAsTitle: 'key',
  },
  fields: [
    {
      name: 'key',
      label: 'Key',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'value',
      label: 'Value',
      type: 'json',
    },
  ],
};

export default Pages;