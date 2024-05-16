import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: 'defaults, android >= 5.0, ios >= 8',
    })
  ],


  root: './src',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    manifest: false,
    rollupOptions: {
      input: '/index.html',
    },
    // target: 'es2015',
    assetsInlineLimit: 4096,

    cssCodeSplit: false,
  },
})
