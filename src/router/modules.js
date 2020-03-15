export default [
  // 管理员
  {
    path: '/admin',
    meta: {
      title: '管理员'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
        path: '/',
        name: 'adminlist',
        meta: {
          title: '管理员-列表'
        },
        component: resolve => require(['@/components/admin/index.vue'], resolve)
      },
      {
        path: '/admin/add',
        name: 'addmin',
        meta: {
          title: '管理员-添加',
          Login: true
        },
        component: resolve => require(['@/components/admin/addmin'], resolve)
      },
      {
        path: '/admin/make',
        name: 'make',
        meta: {
          title: '编辑-管理',
          Login: true
        },
        component: resolve => require(['@/components/admin/make'], resolve)
      }
    ]
  },
  // 用户
  {
    path: '/user',
    meta: {
      title: '用户'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
        path: '/',
        name: 'userlist',
        meta: {
          title: '用户-列表'
        },
        component: resolve => require(['@/components/user/userlist'], resolve),
      },
      {
        path: '/user/add',
        name: 'adduser',
        meta: {
          title: '用户-添加'
        },
        component: resolve => require(['@/components/user/adduser'], resolve),
      }, {
        path: '/user/up',
        name: 'userupdata',
        meta: {
          title: '用户-编辑'
        },
        component: resolve => require(['@/components/user/userupdata'], resolve),
      }
    ]
  },
  // 书文
  {
    path: '/book',
    meta: {
      title: '书文'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
      path: '/',
      name: 'booklist',
      meta: {
        title: '书文-列表'
      },
      component: resolve => require(['@/components/book/booklist'], resolve)
    }, {
      path: '/book/add',
      name: 'addbook',
      meta: {
        title: '书文-添加'
      },
      component: resolve => require(['@/components/book/addbook'], resolve)
    }, {
      path: '/book/up',
      name: 'upbook',
      meta: {
        title: '书文-编辑'
      },
      component: resolve => require(['@/components/book/upbook'], resolve)
    }]
  },
  // 图文
  {
    path: '/img',
    meta: {
      title: '图文'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
      path: '/',
      name: 'imglist',
      meta: {
        title: '图文-列表'
      },
      component: resolve => require(['@/components/img/imglist'], resolve)
    }, {
      path: '/img/up',
      name: 'upimg',
      meta: {
        title: '图文-编辑'
      },
      component: resolve => require(['@/components/img/upimg'], resolve)
    }, {
      path: '/img/add',
      name: 'addimg',
      meta: {
        title: '图文-添加'
      },
      component: resolve => require(['@/components/img/addimg'], resolve)
    }]
  },
  //作者
  {
    path: '/author',
    meta: {
      title: '作者'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
      path: '/',
      name: 'authorlist',
      meta: {
        title: '作者-列表'
      },
      component: resolve => require(['@/components/author/authorlist'], resolve)
    }, {
      path: '/img/up',
      name: 'upauth',
      meta: {
        title: '作者-编辑'
      },
      component: resolve => require(['@/components/author/upauth'], resolve)
    }, {
      path: '/img/add',
      name: 'addor',
      meta: {
        title: '作者-添加'
      },
      component: resolve => require(['@/components/author/addor'], resolve)
    }]
  },
  //商品
  {
    path: '/shop',
    meta: {
      title: '商品'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    children: [{
      path: '/',
      name: 'shoplist',
      meta: {
        title: '商品-列表'
      },
      component: resolve => require(['@/components/shop/shoplist'], resolve)
    }, {
      path: '/shop/add',
      name: 'addshop',
      meta: {
        title: '商品-添加'
      },
      component: resolve => require(['@/components/shop/addshop'], resolve)
    }, {
      path: '/shop/up',
      name: 'upshop',
      meta: {
        title: '商品-编辑'
      },
      component: resolve => require(['@/components/shop/upshop'], resolve)
    }]
  },
  //分类
  {
    path: '/category',
    component: resolve => require(['@/components/container/Home.vue'], resolve),
    meta: {
      title: '分类'
    },
    children: [{
      path: '/',
      name: 'categoryList',
      meta: {
        title: '分类-列表'
      },
      component: resolve => require(['@/components/Category/CategoryList'], resolve),
    }, {
      path: '/category/add',
      name: 'categoryAdd',
      meta: {
        title: '分类-添加'
      },
      component: resolve => require(['@/components/Category/CategoryAdd'], resolve),
    }, {
      path: '/category/update',
      name: 'categoryUpdate',
      meta: {
        title: '分类-编辑'
      },
      component: resolve => require(['@/components/Category/CategoryUpdate'], resolve),
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: resolve => require(['@/components/login/index.vue'], resolve)
  },
  {
    path: '/',
    name: 'index',
    redirect: {
      name: 'adminlist'
    },
    component: resolve => require(['@/components/container/Home.vue'], resolve)
  },
  {
    path: '/404',
    name: '404',
    component: resolve => require(['@/components/404.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/404'
  }
]
