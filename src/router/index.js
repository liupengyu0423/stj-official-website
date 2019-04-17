import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
    meta: '官网首页'
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/pages/product/index.vue'),
    meta: '产品中心'
  },
  {
    path: '/expression',
    name: 'expression',
    component: () => import('@/pages/expression/index.vue'),
    meta: '应用案例'
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/news/index.vue'),
    meta: '应用案例'
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('@/pages/newsDetail/index.vue'),
    meta: '应用案例'
  },
  {
    path: '/leader',
    name: 'leader',
    component: () => import('@/pages/leader/index.vue'),
    meta: '领导关怀'
  },
  {
    path: '/leaderDetail',
    name: 'leaderDetail',
    component: () => import('@/pages/leaderDetail/index.vue'),
    meta: '领导关怀'
  },
  {
    path: '/washroom',
    name: 'washroom',
    component: () => import('@/pages/washroom/index.vue'),
    meta: '产品中心'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about/index.vue'),
    meta: '关于我们'
  },
  {
    path: '/net',
    name: 'net',
    component: () => import('@/pages/net/index.vue'),
    meta: '互联网+'
  }
  ]
})
