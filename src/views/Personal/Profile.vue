<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <!-- <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  >
                </div> -->
                <div class="name">
                  <h2 class="title">{{ userInfo.username }}</h2>
                  <h6>{{ role[userInfo.jurisdiction] }}</h6>
                  <p v-if="!flag">
                    <md-button class="md-simple" style="text-transform: none;" @click="flag = !flag">
                      {{ userInfo.email }}
                      <md-tooltip md-direction="bottom">点击修改</md-tooltip>
                    </md-button>
                  </p>
                  <br v-if="flag">
                  <p v-if="flag">
                    <md-field class="md-form-group" :class="emailMessageClass">
                      <md-icon>email</md-icon>
                      <label>邮箱地址...</label>
                      <md-input v-model="userInfo.email" type="email" placeholder="填写邮箱以便我们与您联系" @keydown.enter="submit" @blur="emailVerify" />
                      <span class="md-error">{{ emailErrorMessage }}</span>
                    </md-field>
                    <md-button class="md-success" @click="submit">更新邮箱</md-button>
                    <md-button class="md-danger" @click="flag = !flag">取消修改</md-button>
                  </p>
                  <!-- <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                  ><i class="fab fa-dribbble" /></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                  ><i class="fab fa-twitter" /></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                  ><i class="fab fa-pinterest" /></md-button> -->
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              让我做个宁静的梦吧，不要离开我，那条很短很短的街，我们已经走了很长很长的岁月。
            </p>
            <p>
              —— 舒婷《会唱歌的鸢尾花》
            </p>
          </div>
          <div class="profile-tabs">
            <!-- <tabs
              :tab-name="['Studio', 'Work', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            > -->
            <!-- here you can add your content for tab-content -->
            <!-- <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded">
                    <img :src="tabPane1[1].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded">
                    <img :src="tabPane1[2].image" class="rounded">
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded">
                    <img :src="tabPane2[1].image" class="rounded">
                    <img :src="tabPane2[2].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded">
                    <img :src="tabPane2[4].image" class="rounded">
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded">
                    <img :src="tabPane3[1].image" class="rounded">
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded">
                    <img :src="tabPane3[3].image" class="rounded">
                    <img :src="tabPane3[4].image" class="rounded">
                  </div>
                </div>
              </template>
            </tabs> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfo, userUpdate } from '@/api/user'
export default {
  bodyClass: 'profile-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/header.jpg')
    }
    // img: {
    //   type: String,
    //   default: require('@/assets/img/faces/christian.jpg')
    // }
  },
  data() {
    return {
      userInfo: {
        id: '',
        username: '',
        email: '',
        jurisdiction: ''

      },
      emailErrorMessage: '',
      hasEmailErrorMessage: false,
      role: ['读 者', '编 辑', '管理员'],
      flag: false
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      }
    },
    emailMessageClass() {
      return {
        'md-invalid': this.hasEmailErrorMessage
      }
    }
  },
  created() {
    getInfo(this.$store.getters.token).then(res => {
      // console.log(res)
      this.userInfo.username = res.data.userInfo.username
      this.userInfo.email = res.data.userInfo.email
      this.userInfo.id = res.data.userInfo.id
      this.userInfo.jurisdiction = res.data.userInfo.jurisdiction
    })
  },
  methods: {
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
    async submit() {
      this.emailVerify()
      if (!this.hasEmailErrorMessage) {
        await userUpdate(this.userInfo).then(res => {
          // console.log(res)
          this.$store.dispatch('notification/promptNotification', {
            noticeType: 'success',
            message: '修改成功'
          })
        })
        this.flag = false
        getInfo(this.$store.getters.token).then(res => {
          console.log(res)
          this.userInfo.username = res.data.userInfo.username
          this.userInfo.email = res.data.userInfo.email
          this.userInfo.id = res.data.userInfo.id
          this.userInfo.jurisdiction = res.data.userInfo.jurisdiction
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 55vh;
}
.section {
  padding: 0;
  .md-error {
    position: absolute;
    top: 35px;
    left: 35px;
  }
}

.profile-page .profile {
  margin-top: 150px;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
h6 {
  font-size: 16px;
}
</style>
