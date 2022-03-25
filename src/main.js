/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-03-25 08:27:25
 * @LastEditors: 郑钊宇
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import MaterialKit from './plugins/material-kit'

Vue.config.productionTip = false

Vue.use(MaterialKit)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import animated from 'animate.css'

Vue.use(animated)

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
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
  render: h => h(App)
}).$mount('#app')
