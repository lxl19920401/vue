import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import subComponent from '@/components/subComponent'

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/subComponent',
      name: 'subComponent',
      component: subComponent
    }
]
})

