/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'progineer.fr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  output: 'standalone',
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig; 