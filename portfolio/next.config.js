/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "",
  // env: {
  //   instagramToken:
  //     "",
  // },
};

module.exports = nextConfig;
