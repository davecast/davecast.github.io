/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    instagramToken: process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
  },
};

module.exports = nextConfig;
