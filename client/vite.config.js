import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux']
        }
      }
    },
    // Ensure service worker is not minified/chunked incorrectly
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  server: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 5173,
  },
  base: './',
  define: {
    global: 'globalThis',
  }
})
