import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Welcome from '@/components/welcome'
import Diary from '@/components/diary'
import Article from '@/components/article'
import Essay from '@/components/essay'
import account from '@/components/account'
import blank1 from '@/components/blank1'
import blank2 from '@/components/blank2'
import blank3 from '@/components/blank3'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/blank1',
      component: blank1
    },
    {
      path: '/blank2',
      component: blank2
    },
    {
      path: '/blank3',
      component: blank3
    },
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'/',
          component:Welcome
        },
        {
          path:'/diary',
          component:Diary
        },
        {
          path:'/article',
          component:Article
        },
        {
          path:'/essay',
          component:Essay
        },
        {
          path: '/account',
          component: account
        }
      ]
    }
  ]
})
