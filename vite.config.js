import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                pictures: resolve(__dirname, "pictures.html"),
                publish: resolve(__dirname, "publish.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 75
            },
            jpeg: {
                quality: 75
            },
            jpg: {
                quality: 75
            },
            webp: {
                enabled: true,
                quality: 75
            },
            avif: {
                enabled: true,
                quality: 75
            }
        })
    ]
});