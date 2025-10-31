/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // can define acceptable addresses here to navigate around cors errors
  reactCompiler: true,
  images: {
    remotePatterns: [{
            protocol: 'https',
            hostname: 'cataas.com',
            pathname: '/**', // Wildcard for any sub-path
          }],
  },
};  

export default nextConfig;
