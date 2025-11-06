import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react() // plugin React estándar
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // alias para tu código
      "@assets": path.resolve(__dirname, "attached_assets") // si usas assets
    },
  },
  root: path.resolve(__dirname, "client"), // carpeta donde está tu index.html
  build: {
    outDir: path.resolve(__dirname, "dist"), // carpeta final para producción
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true, // seguridad de archivos
      deny: ["**/.*"],
    },
  },
});
