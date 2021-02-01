// import Vue from 'vue'
// import Router from 'vue-router'
import routes from './routes'
import store from '@/store'
import { createRouterLayout } from 'vue-router-layout'

// Vue.use(Router)

const RouterLayout = createRouterLayout(() => {
    return import('./layouts/default.vue')
})

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.name
  next()
})

export default router