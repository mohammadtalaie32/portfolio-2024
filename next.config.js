/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.icons8.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
    experimental: {
      taint: true,
    },
    // ...other config settings
  };
  
  export default nextConfig;