<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-27 14:54:41
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
            <login-card
              header-color="info"
              class="header animate__animated animate__slow animate__fadeInLeft"
            >
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
              <md-field slot="inputs" class="md-form-group" :class="usernameMessageClass">
                <md-icon>face</md-icon>
                <label>用户名...</label>
                <md-input v-model="username" @blur="usernameVerify" />
                <span class="md-error">{{ UsernameErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="passwordMessageClass">
                <md-icon>lock_outline</md-icon>
                <label>密码...</label>
                <md-input v-model="password" type="password" @blur="passwordVerify" />
                <span class="md-error">{{ passwordErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="passwordMessageClass" style="margin-bottom: 0;">
                <md-icon>lock_outline</md-icon>
                <label>确认密码...</label>
                <md-input v-model="password2" type="password" @blur="passwordVerify" />
                <span class="md-error">{{ passwordErrorMessage }}</span>
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
import { LoginCard } from '@/components'

export default {
  components: {
    LoginCard
  },
  bodyClass: 'login-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/header.jpg')
    }
  },
  data() {
    return {
      username: null,
      password: null,
      password2: null,

      hasPasswordErrorMessage: false,
      passwordErrorMessage: '',
      hasUsernameErrorMessage: false,
      UsernameErrorMessage: ''
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh'
      }
    },
    usernameMessageClass() {
      return {
        'md-invalid': this.hasUsernameErrorMessage
      }
    },
    passwordMessageClass() {
      return {
        'md-invalid': this.hasPasswordErrorMessage
      }
    }
  },
  methods: {
    usernameVerify() {
      if (this.username === null || this.username === '') {
        this.hasUsernameErrorMessage = true
        this.UsernameErrorMessage = '用户名不能为空'
      } else {
        this.hasUsernameErrorMessage = false
        this.UsernameErrorMessage = ''
      }
    },
    passwordVerify() {
      if (this.password === null || this.password === '' || this.password2 === null || this.password2 === '') {
        this.hasPasswordErrorMessage = true
        this.passwordErrorMessage = '密码不能为空'
      } else if (this.password !== this.password2) {
        this.hasPasswordErrorMessage = true
        this.passwordErrorMessage = '密码不一致'
      } else if (this.password.length < 6) {
        this.hasPasswordErrorMessage = true
        this.passwordErrorMessage = '密码至少需要6位'
      } else {
        this.hasPasswordErrorMessage = false
        this.passwordErrorMessage = ''
      }
    }
  }
}
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
.md-error {
  position: relative;
  top: 5vh;
}
.md-card-content {
  .md-field {
    margin-bottom: 3.5vh;
  }
}
.md-card-login {
  margin-top: 10vh !important;
}
</style>
