import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: process.env.APP_SCHEME,
        hostname: process.env.APP_HOSTNAME,
        port: process.env.APP_PORT,
      }
    ],
  },
};

export default withPayload(nextConfig);
