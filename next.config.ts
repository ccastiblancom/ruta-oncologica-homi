// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Forzamos a Next.js a ser estricto con las rutas */
  trailingSlash: false, 
  // Esto ayuda a Vercel a entender mejor la carpeta app
  distDir: '.next',
};

export default nextConfig;