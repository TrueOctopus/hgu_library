/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-02-16 19:50:43
 * @LastEditors: 郑钊宇
 * @Description: 入口文件
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
