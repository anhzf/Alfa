import { once } from '@/utils/function';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

export const getCms = once(() => getPayloadHMR({ config }));