<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2023-02-07 19:53:42
 * @LastEditors: 郑钊宇
 * @Description: 登录页面
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
              <h4 slot="title" class="card-title">用户登录</h4>
              <!-- <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button> -->

              <p slot="description" class="description">
                没有账号？<router-link to="/register">注册</router-link>
              </p>
              <md-field slot="inputs" class="md-form-group" :class="usernameMessageClass">
                <md-icon>face</md-icon>
                <label>用户名或邮箱...</label>
                <md-input v-model="userInfo.username" @blur="usernameVerify" />
                <span class="md-error">{{ UsernameErrorMessage }}</span>
              </md-field>
              <md-field slot="inputs" class="md-form-group" :class="passwordMessageClass" style="margin-bottom: 0;">
                <md-icon>lock_outline</md-icon>
                <label>密码...</label>
                <md-input v-model="userInfo.password" type="password" @blur="passwordVerify" />
                <span class="md-error">{{ passwordErrorMessage }}</span>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg" @click="submitForm">
                登录
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
      userInfo: {
        username: '',
        password: ''
      },

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
    submitForm() {
      this.usernameVerify()
      this.passwordVerify()
      if (!this.hasPasswordErrorMessage && !this.hasUsernameErrorMessage) {
        this.$store.dispatch('user/login', this.userInfo).then(() => {
          this.$store.dispatch('notification/promptNotification', {
            noticeType: 'success',
            message: '登录成功'
          })
          this.$router.push('/commentHub/comment')
        })
      } else {
        alert('信息填写错误!!')
      }
    },
    usernameVerify() {
      if (this.userInfo.username === null || this.userInfo.username === '') {
        this.hasUsernameErrorMessage = true
        this.UsernameErrorMessage = '用户名不能为空'
      } else {
        this.hasUsernameErrorMessage = false
        this.UsernameErrorMessage = ''
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
// .description {

// }
</style>
