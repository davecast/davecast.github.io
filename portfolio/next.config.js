/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "",
  env: {
    instagramToken:
      "IGQWROaEdHMkdCZA09xQW1EbEVyT2hrdzE0T0F0X0pIcUM0R3ZAaMHpDbVR2bW5fVkZAieUVKQlRfRVFLMFoxWi1YejAxemlveFBDb1pGYU1UN2dPVFRiRTFlMzJkVTB6Y0NQRlJHQ3ZAweGlzaXlFM1piWTExTk9STmcZD",
  },
};

module.exports = nextConfig;
