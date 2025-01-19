/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'next-ecommerce-template-4.vercel.app',
      'cdn.sanity.io',
    ],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID="tgfvld8n",
    SANITY_DATASET: process.env.SANITY_DATASET="production", 
    SANITY_TOKEN: process.env.SANITY_TOKEN="skDLPxqwwqMl2PyglQoxj2jIgOzcEAMnhbford11xBNQEB8afBC1JxStYjJtJcud1sSWLnGpodU3hyUIJOXEspedWeJx2OnXh7vrRaHFD9hXBYzfWnShuu16h35MpjqZ2o5twx5LFyoBFYTDBXDvQg45bvE0EhKMN33Pwx6loEEOGLBGbFt7",
  },
};

export default nextConfig;
