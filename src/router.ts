import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue'
import Rules from './views/Rules.vue'
import Donate from './views/Donate.vue'
import BanList from '@app/views/BanList.vue'
import Tech from '@app/views/Tech.vue'

const routes = [
  {
    path: '/',
    component: Index,
    name: 'home',
  },
  {
    path: '/rules',
    component: Rules,
    name: 'rules',
    meta: { title: 'Правила' }
  },
  {
    path: '/donate',
    component: Donate,
    name: 'donate',
    meta: { title: 'Донат' }
  },
  {
    path: '/bans',
    component: BanList,
    name: 'bans',
    meta: { title: 'Бан-лист' }
  },
  {
    path: '/tech',
    component: Tech,
    name: 'tech',
    meta: { title: 'Механики сервера' }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
