import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import PrimeVue from 'primevue/config'
import { router } from './router.ts'

import { DachaPreset } from './theme.ts'
import { Tag } from 'primevue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: DachaPreset
  }
})

const DEFAULT_TITLE = "Дача Minecraft";
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_TITLE} ` : DEFAULT_TITLE
  next()
})

app.use(router)
app.component('Tag', Tag) // this is for markdown
app.mount('#app')
