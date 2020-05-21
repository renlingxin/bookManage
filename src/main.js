import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './libs/filters'
import publicCom from './components/common/index'
import '../static/css/public.css';
import './assets/iconfont/iconfont.css'
import store from './store'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }

})

// 引入element-ui   开始
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: 'small'
});
// 引入element-ui  结束


// 引入axios 开始
import Axios from 'axios';
// 给vue原型挂载$axios对象
Vue.prototype.$axios = Axios;
// 默认的公共的头
Axios.defaults.baseURL = 'http://182.92.226.20:9999/';
// 引入axios结束

// 全局过滤器
filters(Vue)

// 全局组件
publicCom(Vue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
