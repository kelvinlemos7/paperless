import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  // Root aponta para a pasta onde está o index.html
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
    // Sai da pasta client e cria a dist na pasta Cargo-Receiver
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  }
})