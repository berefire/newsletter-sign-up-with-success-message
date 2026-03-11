import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),

            "@css": path.resolve(__dirname, "src/css"),
            "@tokens": path.resolve(__dirname, "src/css/tokens"),
            "@base": path.resolve(__dirname, "src/css/base"),
            "@utilities": path.resolve(__dirname, "src/css/utilities"),
            "@components": path.resolve(__dirname, "src/css/components"),



            "@js": path.resolve(__dirname, "src/js"),
            "@assets": path.resolve(__dirname, "public/assets")
        }
    }
});