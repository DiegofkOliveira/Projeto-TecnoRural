import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite o acesso pelo IP da máquina
    port: 5173, // Define a porta que será usada pelo servidor
  },
  resolve: {
    alias: {
      '/assets': '/src/assets'
    }
  }
})
