/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-03-29 15:43:26
 * @LastEditors: 郑钊宇
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router/router'
import '@/router/guards'

// material-icons 引入
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import MaterialKit from './plugins/material-kit'
Vue.use(MaterialKit)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

const NavbarStore = {
  showNavbar: false
}

Vue.mixin({
  data() {
    return {
      NavbarStore
    }
  }
})

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
  render: h => h(App)
}).$mount('#app')
