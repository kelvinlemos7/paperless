import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  base: "/",
  // Se o terminal estiver na 'paperless', ele entra em 'Cargo-Receiver/client'
  root: path.resolve(__dirname, "Cargo-Receiver/client"),
  
  plugins: [
    tailwindcss(), 
    react()        
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "Cargo-Receiver/client/src"),
    },
  },

  build: {
    // Joga a pasta dist para a raiz total (paperless/dist)
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "Cargo-Receiver/client/index.html"),
    },
  }
})