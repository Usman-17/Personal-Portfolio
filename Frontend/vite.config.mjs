import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Use the ESM version of path resolve
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        // target: "https://personal-portfolio-gamma-flax-60.vercel.app/",
        changeOrigin: true,
        secure: false,
      },
    },
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    chunkSizeWarningLimit: 500,
  },
  define: {
    "process.env": {},
  },
});
