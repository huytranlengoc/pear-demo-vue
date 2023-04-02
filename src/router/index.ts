import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Home from '@/views/HomeView.vue'
import Forgot from '@/views/ForgotView.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/forgot', component: Forgot},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
3