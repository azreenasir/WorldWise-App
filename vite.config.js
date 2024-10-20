import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import estlint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), estlint()],
});
