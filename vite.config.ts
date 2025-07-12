import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/static/',
  build: {
    manifest: "manifest.json",
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.tsx'),
      },
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    cors: true,
  },
})