import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure Next for static HTML export
  // `output: 'export'` tells Next to produce a fully static site with `next export`.
  // `images.unoptimized = true` disables the built-in image optimization so
  // `<Image />` usage won't break during export. Public files will be copied
  // into the exported output and can be referenced with `/...` paths.
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
};

export default nextConfig;