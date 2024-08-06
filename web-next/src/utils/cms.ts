import { DB_PREFIX } from '@/constants';

export const withDbPrefix = (name: string) => [DB_PREFIX, name].join('');

/** See https://github.com/payloadcms/payload/issues/6886 */
export const contentAsset = (path: string) => process.env.NEXT_PUBLIC_HOST + path;