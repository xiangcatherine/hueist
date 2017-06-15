import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Choose from '@/components/Choose'
import viewHistory from '@/components/ViewHistory'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/choose',
      name: 'Choose',
      component: Choose
    },
    {
      path: '/view-history',
      name: 'viewHistory',
      component: viewHistory
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
