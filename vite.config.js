import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Window Dimensions",
        short_name: "Window Dimensions",
        start_url: "/",
        display: "standalone",
        background_color: "#242424",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "vite.svg",
            sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
        theme_color: "#242424",
      },
    }),
  ],
});
