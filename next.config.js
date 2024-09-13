/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/uk',
      },
    ];
  },
};

module.exports = nextConfig;
