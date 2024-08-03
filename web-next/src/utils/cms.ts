import { DB_PREFIX } from '@/constants';

export const withDbPrefix = (name: string) => [DB_PREFIX, name].join('');
