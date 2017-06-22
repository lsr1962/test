import Vue from 'vue'
import Router from 'vue-router'
import MakePages from '@/pages/MakePages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MakePages',
      component: MakePages
    }
  ]
})
