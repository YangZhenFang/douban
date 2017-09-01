import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      component: resolve => require(['components/view/Index.vue'], resolve),
      name: '首页'
    },
    {
      path: '/movie',
      component: resolve => require(['components/view/Movie.vue'], resolve),
      name: '电影'
    },
    {
      path: '/comment',
      component: resolve => require(['components/view/Movie.vue'], resolve),
      name: '评论'
    }
  ]
})
