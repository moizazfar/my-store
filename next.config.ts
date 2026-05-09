import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid bundling native DB drivers with the server bundle (recommended for Prisma + Vercel Node).
  serverExternalPackages: ["@prisma/client", "prisma", "pg"],
};

export default nextConfig;
