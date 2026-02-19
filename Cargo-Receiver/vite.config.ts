import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig(({ mode }) => {
  // Se estiver na Vercel, a base é '/'. Se for build 'github', é '/paperless/'
  const baseRoute = process.env.VERCEL ? '/' : (mode === 'github' ? '/paperless/' : '/');

  return {
    base: baseRoute,
    root: path.resolve(__dirname, "client"),
    plugins: [
      tailwindcss(), 
      react()        
    ],
    server: {
      port: 5000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    }
  }
})