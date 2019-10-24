import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // 管理员
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
          path: '/admin',
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
        }
      ]
    },
    // 用户
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
          path: '/user/list',
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
        }
      ]
    },
    // 书文
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
        path: '/book/list',
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
      }]
    },
    // 图文
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
        path: '/img/list',
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
      }]
    },
    //作者
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
        path: '/author/list',
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
      }]
    },
    //商品
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
        path: '/shop/list',
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
      }]
    },
    //分类
    {
      path: '/',
      component: resolve => require(['@/components/container/Home.vue'], resolve),
      children: [{
        path: '/type/list',
        name: 'typelist',
        component: resolve => require(['@/components/type/typelist'], resolve),
      }, {
        path: '/type/add',
        name: 'addtype',
        component: resolve => require(['@/components/type/addtype'], resolve),
      }, {
        path: '/type/up',
        name: 'uptype',
        component: resolve => require(['@/components/type/uptype'], resolve),
      }]
    },
  ]
})

// import login from '@/components/login'
// import adminlist from '@/components/admin/adminlist'
// import addmin from '@/components/admin/addmin'
// import make from '@/components/admin/make'
// import index from '@/components/index'
// import userlist from '@/components/user/userlist'
// import adduser from '@/components/user/adduser'
// import userupdata from '@/components/user/userupdata'
// import booklist from '@/components/book/booklist'
// import addbook from '@/components/book/addbook'
// import upbook from '@/components/book/upbook'
// import imglist from '@/components/img/imglist'
// import upimg from '@/components/img/upimg'
// import addimg from '@/components/img/addimg'
// import authorlist from '@/components/author/authorlist'
// import addor from '@/components/author/addor'
// import upauth from '@/components/author/upauth'
// import shoplist from '@/components/shop/shoplist'
// import addshop from '@/components/shop/addshop'
// import upshop from '@/components/shop/upshop'
// import typelist from '@/components/type/typelist'
// import uptype from '@/components/type/uptype'
// import addtype from '@/components/type/addtype'
// import adive from '@/components/adive'



// export default new Router({
//   routes: [{
//       path: '/',
//       name: 'index',
//       component: index,
//       meta: {
//         Login: true
//       }
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: login
//     }, {
//       path: '/admin',
//       name: 'adminlist',
//       component: adminlist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/admin/add',
//       name: 'addmin',
//       component: addmin,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/admin/make',
//       name: 'make',
//       component: make,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/user/list',
//       name: 'userlist',
//       component: userlist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/user/add',
//       name: 'adduser',
//       component: adduser,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/user/up',
//       name: 'userupdata',
//       component: userupdata,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/book/list',
//       name: 'booklist',
//       component: booklist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/book/add',
//       name: 'addbook',
//       component: addbook,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/book/up',
//       name: 'upbook',
//       component: upbook,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/img/list',
//       name: 'imglist',
//       component: imglist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/img/up',
//       name: 'upimg',
//       component: upimg,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/img/add',
//       name: 'addimg',
//       component: addimg,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/author/list',
//       name: 'authorlist',
//       component: authorlist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/img/up',
//       name: 'upauth',
//       component: upauth,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/img/add',
//       name: 'addor',
//       component: addor,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/shop/list',
//       name: 'shoplist',
//       component: shoplist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/shop/add',
//       name: 'addshop',
//       component: addshop,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/shop/up',
//       name: 'upshop',
//       component: upshop,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/type/list',
//       name: 'typelist',
//       component: typelist,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/type/add',
//       name: 'addtype',
//       component: addtype,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/type/up',
//       name: 'uptype',
//       component: uptype,
//       meta: {
//         Login: true
//       }
//     }, {
//       path: '/adive',
//       name: 'adive',
//       component: adive,
//       meta: {
//         Login: true
//       }
//     }
//   ]
// })
