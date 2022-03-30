<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-29 15:04:09
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
                <md-input v-model="userInfo.username" @blur="usernameVerify" />
                <span class="md-error">{{ usernameErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="emailMessageClass">
                <md-icon>email</md-icon>
                <label>邮箱地址...</label>
                <md-input v-model="userInfo.email" type="email" @blur="emailVerify" />
                <span class="md-error">{{ emailErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="passwordMessageClass">
                <md-icon>lock_outline</md-icon>
                <label>密码...</label>
                <md-input v-model="userInfo.password" type="password" @blur="passwordVerify" />
                <span class="md-error">{{ passwordErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="password2MessageClass" style="margin-bottom: 0;">
                <md-icon>lock_outline</md-icon>
                <label>确认密码...</label>
                <md-input v-model="userInfo.password2" type="password" @blur="password2Verify" />
                <span class="md-error">{{ password2ErrorMessage }}</span>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg" @click="submitForm">
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
import { register } from '@/api/user'

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
      userInfo: {
        username: null,
        email: null,
        password: null,
        password2: null
      },

      hasPasswordErrorMessage: false,
      passwordErrorMessage: '',
      hasPassword2ErrorMessage: false,
      password2ErrorMessage: '',
      hasEmailErrorMessage: false,
      emailErrorMessage: '',
      hasUsernameErrorMessage: false,
      usernameErrorMessage: ''
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
    emailMessageClass() {
      return {
        'md-invalid': this.hasEmailErrorMessage
      }
    },
    passwordMessageClass() {
      return {
        'md-invalid': this.hasPasswordErrorMessage
      }
    },
    password2MessageClass() {
      return {
        'md-invalid': this.hasPassword2ErrorMessage
      }
    }
  },
  methods: {
    submitForm() {
      this.usernameVerify()
      this.emailVerify()
      this.passwordVerify()
      this.password2Verify()
      if (!this.hasPasswordErrorMessage && !this.hasEmailErrorMessage &&
       !this.hasUsernameErrorMessage && !this.hasPassword2ErrorMessage) {
        const data = this.userInfo
        delete data['password2']
        register(data)
          .then(response => {
            this.$store.dispatch('notification/promptNotification', {
              noticeType: 'success',
              message: response.msg
            })
            this.$router.push('/login')
          })
      } else {
        alert('提交失败!!')
      }
    },
    usernameVerify() {
      if (this.userInfo.username === null || this.userInfo.username === '') {
        this.hasUsernameErrorMessage = true
        this.usernameErrorMessage = '用户名不能为空'
      } else {
        this.hasUsernameErrorMessage = false
        this.usernameErrorMessage = ''
      }
    },
    emailVerify() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.userInfo.email === null || this.userInfo.email === '') {
        this.hasEmailErrorMessage = true
        this.emailErrorMessage = '邮箱不能为空'
      } else if (!re.test(this.userInfo.email)) {
        this.hasEmailErrorMessage = true
        this.emailErrorMessage = '邮箱格式不正确'
      } else {
        this.hasEmailErrorMessage = false
        this.emailErrorMessage = ''
      }
    },
    passwordVerify() {
      if (this.userInfo.password === null || this.userInfo.password === '') {
        this.hasPasswordErrorMessage = true
        this.passwordErrorMessage = '密码不能为空'
      } else if (this.userInfo.password.length < 6) {
        this.hasPasswordErrorMessage = true
        this.passwordErrorMessage = '密码至少需要6位'
      } else {
        this.hasPasswordErrorMessage = false
        this.passwordErrorMessage = ''
      }
    },
    password2Verify() {
      if (this.userInfo.password2 === null || this.userInfo.password2 === '') {
        this.hasPassword2ErrorMessage = true
        this.password2ErrorMessage = '密码不能为空'
      } else if (this.userInfo.password !== this.userInfo.password2) {
        this.hasPassword2ErrorMessage = true
        this.password2ErrorMessage = '密码不一致'
      } else if (this.userInfo.password.length < 6) {
        this.hasPassword2ErrorMessage = true
        this.password2ErrorMessage = '密码至少需要6位'
      } else {
        this.hasPassword2ErrorMessage = false
        this.password2ErrorMessage = ''
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
  position: relative;
  top: 8vh;
}
</style>
