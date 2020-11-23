import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultView from '@/views/DefaultView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SongsView from '@/views/SongsView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultView
  },
  {
    path: '/login',
    name: 'login',
    component:  LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/songs',
    name: 'songs',
    component: SongsView
  }
]

const router = new VueRouter({
  routes
})

export default router
