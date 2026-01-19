import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOoptions: {
            input: {
                main: resolve(__dirnamn, "index.html"),
                pictures: resolve(__dirname, "pictures.html")
                publish: resolve(__dirname, "publish.html")
            }
        }
    }
})