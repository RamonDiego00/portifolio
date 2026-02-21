import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessário para o GitHub Pages (subpath do repositório)
  base: '/portifolio/',
})
