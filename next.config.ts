/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["headless-cms.local"],
  },
  //Ignore the type errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
