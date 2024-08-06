import { withPayload } from '@payloadcms/next/withPayload';

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
