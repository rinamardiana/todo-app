import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Tasklist from './views/Tasklist'

Vue.use(Router)

const router = new Router({ 
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Input TODO'
      }
    },
    {
      path: '/list',
      name: 'List',
      component: Tasklist,
      meta: {
        title: 'List TODO'
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  Vue.progress.start()
  const routeTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title).meta.title
  if (routeTitle) document.title = routeTitle+' — TODO App'
  next()
})

router.afterEach(() => {
  Vue.progress.set(0.6)
  Vue.progress.inc()
})

export default router
