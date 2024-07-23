import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

// // https://vitejs.dev/config/
// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// });
