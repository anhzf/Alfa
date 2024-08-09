import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import Clients from '@/collections/Clients';
import Categories from './collections/Categories';
import Media from './collections/Media';
import Products from './collections/Products';
import Settings from './collections/Settings';
import Users from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Settings, Categories, Products, Clients],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: {
          prefix: 'media',
        },
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN!,
    }),
  ],
});

export default config;
