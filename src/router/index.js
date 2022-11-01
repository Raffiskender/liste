import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/suscribe',
    name: 'suscribe',
    component: () => import('@/views/Suscribe.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/Lists.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('@/views/confirme.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router