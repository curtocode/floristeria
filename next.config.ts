import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimiza el build para Docker, genera una carpeta standalone con todo lo necesario
};

export default nextConfig;
