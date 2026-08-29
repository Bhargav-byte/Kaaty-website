import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/convex')) {
            return 'vendor-convex'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide'
          }
          return undefined
        },
      },
    },
  },
})
