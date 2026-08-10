import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem
          'react-vendor': ['react', 'react-dom'],
          // Router
          'router': ['wouter'],
          // Animation
          'animation': ['framer-motion'],
          // UI components
          'ui-core': [
            '@radix-ui/react-slot',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
          ],
          // Form components
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Data fetching
          'data': ['@tanstack/react-query'],
          // Icons
          'icons': ['lucide-react', 'react-icons'],
        },
      },
    },
    // Increase chunk size warning limit slightly
    chunkSizeWarningLimit: 600,
    // CSS code splitting
    cssCodeSplit: true,
  },
  server: {
    port: 5173,
    host: true,
    open: true,
  },
});
