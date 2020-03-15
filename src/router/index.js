import Vue from 'vue'
import Router from 'vue-router'
import routes from './modules'
import {
  showTitle
} from '@/libs/publicMethods'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})
// 全局路由-前置钩子
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('admin') && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
// 全局路由-后置钩子
router.afterEach(to => {
  // console.log(to)
  showTitle(to)
})
export default router;
