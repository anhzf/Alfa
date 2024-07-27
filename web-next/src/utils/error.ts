import { notFound } from 'next/navigation';

export const toNextError = (reason: any): never => {
  const code = Number(reason.code || reason.status) || 500;

  if (code === 404) return notFound();

  const res = new Response(reason.message || 'Error', {
    status: code,
    statusText: reason.statusText || (code >= 400 || code < 500 ? `Error ${code}` : 'Internal Server Error'),
  });

  throw res;
};