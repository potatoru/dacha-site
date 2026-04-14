import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItClass from 'markdown-it-class'
import MarkdownItAttrs from 'markdown-it-attrs'

import Components from 'unplugin-vue-components/vite'
import {PrimeVueResolver} from '@primevue/auto-import-resolver'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownSetup(md) {
        const mapping = {
          h1: ['text-4xl', 'font-bold', 'text-900', 'mb-4', 'mt-0'],
          h2: ['text-2xl', 'font-bold', 'text-900', 'mb-3', 'mt-5', 'pb-2', 'border-bottom-1', 'surface-border'],
          h3: ['font-medium', 'text-800', 'mb-3', 'mt-3'],
          p: ['line-height-3', 'text-700', 'my-1'],
          a: ['text-primary'],
          li: ['line-height-3'],
          img: ['max-w-full'],
          ul: ['list-none', 'p-0', 'm-0', 'flex', 'flex-column', 'gap-2', 'mb-4', 'pl-3', 'border-left-2', 'surface-border'],
          code: ['font-mono', 'bg-surface-100', 'px-2', 'py-1', 'border-round', 'text-sm', 'text-900'],
          table: ['w-full', 'text-left', 'border-collapse'],
          td: ['p-1', 'border-bottom-1', 'surface-border', 'text-700']
        }

        // replace inline code with Tag
        md.renderer.rules.code_inline = (tokens, idx) => {
          const content = tokens[idx].content;
          return `<Tag severity="secondary" value="${content}" class="font-mono" />`;
        }

        md.use(MarkdownItClass, mapping)
        md.use(MarkdownItAttrs)
      }
    }),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],

  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      }
    }
  }
})
