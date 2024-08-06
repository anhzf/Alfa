import { withPayload } from '@payloadcms/next/withPayload';

console.log('process.env.APP_SCHEME', process.env.APP_SCHEME, process.env.APP_HOSTNAME, process.env.APP_PORT, process.env.APP_URL);


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: process.env.APP_HOSTNAME },
    ],
  },
};

export default withPayload(nextConfig);
