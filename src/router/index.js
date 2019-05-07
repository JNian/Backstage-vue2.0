import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Test from '@/components/test/test'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login.vue')
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home
      // children: [
      //    path: '/test',
      //    name: 'test',
      //    component: Test
      // ]
    }
    
    // {
    //   path: '/test/:id',
    //   name: 'test',
    //   component: Test,
    //   hidden: true,
    //   meta: {
    //     title: '标题',
    //     icon: 'documentation',
    //     noCache: true,
    //     menus: ['management:advertDemandRelease:shwoDataDetail']
    //   }
    // }
  ]
})
