import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  publicDir: 'public',
  server: {
    host: '::',
    port: 8080,
    fs: {
      allow: ['..']
    },
    watch: {
      usePolling: true,
      interval: 1000,
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@prestations': path.resolve(__dirname, './src/components/prestations'),
      '@partenaires': path.resolve(__dirname, './src/components/partenaires'),
      '@data': path.resolve(__dirname, './src/data'),
      'lodash': 'lodash-es'
    },
    dedupe: ['react', 'react-dom', '@supabase/supabase-js', 'lodash', 'lodash-es', 'recharts']
  },
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          'vendor-utils': ['lodash-es', 'date-fns', 'zod'],
          'vendor-charts': ['recharts', 'leaflet']
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
      maxParallelFileOps: 1,
      cache: false
    },
    chunkSizeWarningLimit: 5000,
    minify: 'esbuild',
    sourcemap: false,
    target: 'esnext',
    modulePreload: {
      polyfill: false
    },
    reportCompressedSize: false,
    emptyOutDir: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      'date-fns',
      'zod',
      'class-variance-authority',
      'tailwind-merge',
      '@supabase/supabase-js',
      '@supabase/postgrest-js',
      'lodash-es',
      'recharts'
    ],
    exclude: [
      'react-leaflet',
      '@tanstack/react-query',
      'framer-motion',
      'lucide-react'
    ],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
}));
