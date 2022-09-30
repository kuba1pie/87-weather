import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'

import '@kidonng/daisyui/index.css'
import 'uno.css'

import routes from '~pages'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const head = createHead()

createApp(App).use(router).use(pinia).use(head).mount('#app')
