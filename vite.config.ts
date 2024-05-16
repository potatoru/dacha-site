import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ mode }) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return defineConfig({
    plugins: [
      vue(),
      getLegacyPlugin(process.env)
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
}

function getLegacyPlugin(env) {
  if (env.NODE_ENV !== 'production') {
    legacy({
      targets: 'defaults, android >= 5.0, ios >= 8',
    })
  }
}
