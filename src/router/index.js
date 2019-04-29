import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
    meta: '官网首页'
  },
  {
    path: '/products/rural-household-toilet',
    name: 'product',
    component: () => import('@/pages/products/rural-household-toilet.vue'),
    meta: '产品中心'
  },
  {
    path: '/cases/rural-household-toilet',
    name: 'expression',
    component: () => import('@/pages/cases/rural-household-toilet.vue'),
    meta: '应用案例'
  },
  {
    path: '/cases/bio-toilet',
    name: 'expression',
    component: () => import('@/pages/cases/bio-toilet.vue'),
    meta: '应用案例'
  },
  {
    path: '/news/page/:id',
    name: 'news',
    component: () => import('@/pages/news/page.vue'),
    meta: '新闻中心'
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: () => import('@/pages/news/index.vue'),
    meta: '新闻详情'
  },
  {
    path: '/government-officials',
    name: 'leader',
    component: () => import('@/pages/government-officials/index.vue'),
    meta: '领导关怀'
  },
  {
    path: '/leaderDetail',
    name: 'leaderDetail',
    component: () => import('@/pages/leaderDetail/index.vue'),
    meta: '领导关怀'
  },
  {
    path: '/products/bio-toilet',
    name: 'washroom',
    component: () => import('@/pages/products/bio-toilet.vue'),
    meta: '产品中心'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about/index.vue'),
    meta: '关于我们'
  },
  {
    path: '/internet-plus',
    name: 'net',
    component: () => import('@/pages/internet-plus/index.vue'),
    meta: '互联网+'
  }
  ]
})
