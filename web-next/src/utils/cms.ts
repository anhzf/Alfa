import { DB_PREFIX } from '@/constants';
import { once } from '@/utils/function';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

export const withDbPrefix = (name: string) => [DB_PREFIX, name].join('');

export const getCms = once(() => getPayloadHMR({ config }));