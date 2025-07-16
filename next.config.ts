// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: false, // ✅ correct way to disable Turbopack in Next.js 14+
};

export default nextConfig;
