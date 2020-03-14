import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // 管理员
    {
      path: '/admin',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
          path: '/',
          name: 'adminlist',
          component: resolve => require(['@/components/admin/adminlist'], resolve)
        },
        {
          path: '/admin/add',
          name: 'addmin',
          component: resolve => require(['@/components/admin/addmin'], resolve),
          meta: {
            Login: true
          }
        },
        {
          path: '/admin/make',
          name: 'make',
          component: resolve => require(['@/components/admin/make'], resolve),
          meta: {
            Login: true
          }
        },
        {
          path: '/404',
          component: resolve => require(['@/components/404'], resolve)
        }
      ]
    },
    // 用户
    {
      path: '/user',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
          path: '/',
          name: 'userlist',
          component: resolve => require(['@/components/user/userlist'], resolve),
        },
        {
          path: '/user/add',
          name: 'adduser',
          component: resolve => require(['@/components/user/adduser'], resolve),
        }, {
          path: '/user/up',
          name: 'userupdata',
          component: resolve => require(['@/components/user/userupdata'], resolve),
        },
        {
          path: '/404',
          component: resolve => require(['@/components/404'], resolve)
        }
      ]
    },
    // 书文
    {
      path: '/book',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
        path: '/',
        name: 'booklist',
        component: resolve => require(['@/components/book/booklist'], resolve),
      }, {
        path: '/book/add',
        name: 'addbook',
        component: resolve => require(['@/components/book/addbook'], resolve),
      }, {
        path: '/book/up',
        name: 'upbook',
        component: resolve => require(['@/components/book/upbook'], resolve),
      },
      {
        path: '/404',
        component: resolve => require(['@/components/404'], resolve)
      }]
    },
    // 图文
    {
      path: '/img',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
        path: '/',
        name: 'imglist',
        component: resolve => require(['@/components/img/imglist'], resolve),
      }, {
        path: '/img/up',
        name: 'upimg',
        component: resolve => require(['@/components/img/upimg'], resolve),
      }, {
        path: '/img/add',
        name: 'addimg',
        component: resolve => require(['@/components/img/addimg'], resolve),
      },
      {
        path: '/404',
        component: resolve => require(['@/components/404'], resolve)
      }]
    },
    //作者
    {
      path: '/author',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
        path: '/',
        name: 'authorlist',
        component: resolve => require(['@/components/author/authorlist'], resolve),
      }, {
        path: '/img/up',
        name: 'upauth',
        component: resolve => require(['@/components/author/upauth'], resolve),
      }, {
        path: '/img/add',
        name: 'addor',
        component: resolve => require(['@/components/author/addor'], resolve),
      },
      {
        path: '/404',
        component: resolve => require(['@/components/404'], resolve)
      }]
    },
    //商品
    {
      path: '/shop',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
        path: '/',
        name: 'shoplist',
        component: resolve => require(['@/components/shop/shoplist'], resolve),
      }, {
        path: '/shop/add',
        name: 'addshop',
        component: resolve => require(['@/components/shop/addshop'], resolve),
      }, {
        path: '/shop/up',
        name: 'upshop',
        component: resolve => require(['@/components/shop/upshop'], resolve),
      },
      {
        path: '/404',
        component: resolve => require(['@/components/404'], resolve)
      }]
    },
    //分类
    {
      path: '/category',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [
        {
        path: '/',
        name: 'categoryList',
        component: resolve => require(['@/components/Category/CategoryList'], resolve),
      }, {
        path: '/category/add',
        name: 'categoryAdd',
        component: resolve => require(['@/components/Category/CategoryAdd'], resolve),
      }, {
        path: '/category/update',
        name: 'categoryUpdate',
        component: resolve => require(['@/components/Category/CategoryUpdate'], resolve),
      },
      {
        path: '/404',
        component: resolve => require(['@/components/404'], resolve)
      }]
    }, 
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/index.vue'], resolve)
    },
    {
      path: '/',
      name: 'index',
      redirect: {
        name: 'adminlist'
      },
      component: resolve => require(['@/components/container/Home.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
