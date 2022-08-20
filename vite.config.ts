import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import legacy from "@vitejs/plugin-legacy";
import vitePluginImp from "vite-plugin-imp";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    manualChunksPlugin(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    vitePluginImp({
      libList: [],
    }),
    eslintPlugin(),
  ],
  esbuild: {
    treeShaking: false,
  },
  build: {
    cssTarget: ["chrome61"],
    reportCompressedSize: false,
    sourcemap: false,
    minify: "esbuild",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
