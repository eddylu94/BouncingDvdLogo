import Vue from 'vue'
import Router from 'vue-router'
import TvScreen from '@/components/TvScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TvScreen',
      component: TvScreen
    }
  ]
})
