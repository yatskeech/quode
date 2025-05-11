import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { hostname: 'avatars.githubusercontent.com', pathname: '/**' },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
