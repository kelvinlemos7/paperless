import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig(({ mode }) => ({
  // Define /restaurante/ se for build do GitHub, senão usa a raiz /
  base: mode === 'github' ? '/paperless/' : '/',
  
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

  // Importante: Como o root é 'client', forçamos o build para a pasta dist na raiz do projeto
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  }
}))