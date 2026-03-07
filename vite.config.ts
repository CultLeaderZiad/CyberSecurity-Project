import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      sentryVitePlugin({
        org: "cybersecurity-project",
        project: "javascript-react",
        authToken: env.SENTRY_AUTH_TOKEN,
      }),
    ],
    base: "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    build: {
      sourcemap: true, // Source map generation must be turned on
    }
  };
});
