import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve( __dirname, 'src/index.html'),  // <-- aponto pro novo index
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});