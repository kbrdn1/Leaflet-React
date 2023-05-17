import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/',
      '@app': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@interfaces': '/src/interfaces',
      '@services': '/src/services',
      '@public': '/public',
      '@constants': '/src/constants'
    }
  },
})
