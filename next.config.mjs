/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: ['@auth0/nextjs-auth0'],
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

export default nextConfig;
