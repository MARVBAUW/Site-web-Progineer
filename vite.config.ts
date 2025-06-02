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
      'lodash': 'lodash-es',
      'lodash/get': 'lodash-es/get',
      'lodash/isFunction': 'lodash-es/isFunction',
      'lodash/isString': 'lodash-es/isString',
      'lodash/isObject': 'lodash-es/isObject',
      'lodash/isNil': 'lodash-es/isNil',
      'lodash/isEqual': 'lodash-es/isEqual',
      'lodash/max': 'lodash-es/max',
      'lodash/maxBy': 'lodash-es/maxBy',
      'lodash/min': 'lodash-es/min',
      'lodash/upperFirst': 'lodash-es/upperFirst',
      'lodash/mapValues': 'lodash-es/mapValues',
      'lodash/find': 'lodash-es/find',
      'lodash/memoize': 'lodash-es/memoize',
      'lodash/uniqBy': 'lodash-es/uniqBy',
      'lodash/isNaN': 'lodash-es/isNaN',
      'lodash/isArray': 'lodash-es/isArray',
      'lodash/isNumber': 'lodash-es/isNumber',
      'lodash/isBoolean': 'lodash-es/isBoolean',
      'lodash/isDate': 'lodash-es/isDate',
      'lodash/isEmpty': 'lodash-es/isEmpty',
      'lodash/isFinite': 'lodash-es/isFinite',
      'lodash/isInteger': 'lodash-es/isInteger',
      'lodash/isNull': 'lodash-es/isNull',
      'lodash/isUndefined': 'lodash-es/isUndefined',
      'lodash/isSymbol': 'lodash-es/isSymbol',
      'lodash/isRegExp': 'lodash-es/isRegExp',
      'lodash/isError': 'lodash-es/isError',
      'lodash/isMap': 'lodash-es/isMap',
      'lodash/isSet': 'lodash-es/isSet',
      'lodash/isWeakMap': 'lodash-es/isWeakMap',
      'lodash/isWeakSet': 'lodash-es/isWeakSet',
      'lodash/isArrayBuffer': 'lodash-es/isArrayBuffer',
      'lodash/isArrayLike': 'lodash-es/isArrayLike',
      'lodash/isBuffer': 'lodash-es/isBuffer',
      'lodash/isElement': 'lodash-es/isElement',
      'lodash/isLength': 'lodash-es/isLength',
      'lodash/isMatch': 'lodash-es/isMatch',
      'lodash/isNative': 'lodash-es/isNative',
      'lodash/isPlainObject': 'lodash-es/isPlainObject',
      'lodash/isTypedArray': 'lodash-es/isTypedArray',
      'lodash/isValidDate': 'lodash-es/isValidDate',
      'lodash/isValidNumber': 'lodash-es/isValidNumber',
      'lodash/isValidString': 'lodash-es/isValidString',
      'lodash/isValidBoolean': 'lodash-es/isValidBoolean',
      'lodash/isValidArray': 'lodash-es/isValidArray',
      'lodash/isValidObject': 'lodash-es/isValidObject',
      'lodash/isValidFunction': 'lodash-es/isValidFunction',
      'lodash/isValidSymbol': 'lodash-es/isValidSymbol',
      'lodash/isValidRegExp': 'lodash-es/isValidRegExp',
      'lodash/isValidError': 'lodash-es/isValidError',
      'lodash/isValidMap': 'lodash-es/isValidMap',
      'lodash/isValidSet': 'lodash-es/isValidSet',
      'lodash/isValidWeakMap': 'lodash-es/isValidWeakMap',
      'lodash/isValidWeakSet': 'lodash-es/isValidWeakSet',
      'lodash/isValidArrayBuffer': 'lodash-es/isValidArrayBuffer',
      'lodash/isValidArrayLike': 'lodash-es/isValidArrayLike',
      'lodash/isValidBuffer': 'lodash-es/isValidBuffer',
      'lodash/isValidElement': 'lodash-es/isValidElement',
      'lodash/isValidLength': 'lodash-es/isValidLength',
      'lodash/isValidMatch': 'lodash-es/isValidMatch',
      'lodash/isValidNative': 'lodash-es/isValidNative',
      'lodash/isValidPlainObject': 'lodash-es/isValidPlainObject',
      'lodash/isValidTypedArray': 'lodash-es/isValidTypedArray'
    },
    dedupe: ['@supabase/supabase-js', 'lodash', 'lodash-es', 'recharts']
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('@radix-ui')) {
              return 'vendor-react';
            }
            if (id.includes('lodash') || id.includes('date-fns') || id.includes('zod')) {
              return 'vendor-utils';
            }
            if (id.includes('recharts') || id.includes('leaflet')) {
              return 'vendor-charts';
            }
            return 'vendor-other';
          }
          if (id.includes('src/components/prestations')) {
            return 'prestations';
          }
          if (id.includes('src/data')) {
            return 'data';
          }
          if (id.includes('src/components/partenaires')) {
            return 'partenaires';
          }
          return 'app';
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
