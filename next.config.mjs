/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build/test run (NEXT_DIST_DIR=.next-prod) alongside `npm run dev`.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};
export default nextConfig;
