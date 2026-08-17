import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh in dev mode
      fastRefresh: true,
      // Don't transform during serve - faster HMR
      babel: {
        plugins: process.env.NODE_ENV === 'development' ? [] : undefined,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  root: path.resolve(__dirname),

  // Faster dev server with esbuild
  esbuild: {
    target: 'es2020',
    // Minify in dev for faster parsing
    minify: process.env.NODE_ENV === 'production',
  },

  // Optimize dependencies for faster dev start
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      'framer-motion',
      'react-hook-form',
      'zod',
      '@tanstack/react-query',
      'lucide-react',
      'react-icons',
    ],
    // Force pre-bundle for faster cold starts
    force: false,
  },
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
    // Faster HMR
    hmr: {
      overlay: true,
    },
    // Watch settings for better performance
    watch: {
      // Ignore node_modules to reduce file watching
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
  },
});
