import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  base: './', // Electron için önemli
  build: {
    outDir: 'dist',
    assetsDir: '.'
  }
})