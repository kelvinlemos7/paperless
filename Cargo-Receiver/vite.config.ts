import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;
  const baseRoute = isVercel ? '/' : (mode === 'github' ? '/paperless/' : '/');

  return {
    base: baseRoute,
    // Define onde os arquivos fonte estão
    root: path.resolve(__dirname, "client"),
    
    plugins: [
      tailwindcss(), 
      react()        
    ],
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
      },
    },

    build: {
      // Define onde a pasta final (dist) será criada (na raiz do projeto)
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        // Garante que o Rollup encontre o arquivo de entrada
        input: path.resolve(__dirname, "client/index.html"),
      },
    },

    server: {
      port: 5000,
    }
  }
})