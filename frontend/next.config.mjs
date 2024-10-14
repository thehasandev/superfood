/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-bay-kappa-25.vercel.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
