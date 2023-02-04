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
    path: '/profil',
    name: 'profil',
    component: () => import('@/views/ProfilView.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('@/views/Confirm.vue'),
  },
  {
    path: '/passwordReset',
    name: 'passwordReset',
    component: () => import('@/views/PasswordResetView.vue'),
  },
  {
    path: '/passwordChange',
    name: 'passwordChange',
    component: () => import('@/views/PasswordChangeView.vue'),
  },
  {
    path: '/googleLogin',
    name: 'googleLogin',
    component: () => import('@/views/GoogleLoginView.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403View.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404View.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router