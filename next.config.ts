// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Only run ESLint during builds for these directories
    dirs: ['app', 'pages', 'components', 'lib'],

    // Set to true if you want to ignore ESLint during builds
    // ignoreDuringBuilds: true,

    // Optional: Make warnings fail builds (default in Next.js)
    // warning: false // Set to false to allow warnings
  },
  typescript: {
    // Optional: Ignore TypeScript errors during build
    // ignoreBuildErrors: true,
  },
  // Add other Next.js config options here
};

export default nextConfig;