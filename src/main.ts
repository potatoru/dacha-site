import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { router } from './router.ts'
import { DachaPreset } from './theme.ts'
import { Tag } from 'primevue'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import '@app/style.scss'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: DachaPreset,
  },
})

const DEFAULT_TITLE = 'Дача Minecraft'
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} | ${DEFAULT_TITLE} `
    : DEFAULT_TITLE
  next()
})

app.use(router)
// this is for markdown
app.component('Tag', Tag)

app.mount('#app')
