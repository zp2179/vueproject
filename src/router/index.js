import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test2 from '@/components/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})
