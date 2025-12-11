import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/kutkarshh-3ed1ed89/",git add vite.config.ts && git commit -m "Fix: Remove lovable-tagger and add base URL for GitHub Pages" && git push
    
  server: {
    host: "::",
    port: 8080,
  },
      plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
