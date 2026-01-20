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
                quality: 65
            },
            jpeg: {
                quality: 65
            },
            jpg: {
                quality: 65
            },
            avif: {
                quality: 65
            }
        })
    ]
});