/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-06-09 14:37:58
 * @LastEditors: 郑钊宇
 * @Description: 配置文件
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router/router'
import '@/router/guards'

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
