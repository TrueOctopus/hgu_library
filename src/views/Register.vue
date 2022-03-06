<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-05 16:37:38
 * @LastEditors: 郑钊宇
 * @Description: 注册页面
-->
<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 
            md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="info" class="header">
              <h4 slot="title" class="card-title">用户注册</h4>
              <!-- <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button> -->

              <p slot="description" class="description">
                已有账号？ <router-link to="/login">登录</router-link>
              </p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>用户名...</label>
                <md-input v-model="firstname"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>邮箱地址...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>密码...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                注册
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/header.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh"
      };
    }
  }
};
</script>

<style lang="scss">
.header {
  text-align: center;
}
.card-title {
  font-family: "Microsoft Yahei", sans-serif, serif !important;
  letter-spacing: 5px;
  text-align: center;
}
// .description {

// }
</style>
