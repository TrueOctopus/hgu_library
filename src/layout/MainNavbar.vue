<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2023-02-07 20:57:48
 * @LastEditors: 郑钊宇
 * @Description: 顶部菜单模块
-->
<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-absolute md-white toolbar-ontop"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row toolbar-top">
      <!-- <div class="md-toolbar-section-start">
        河北地质大学图书馆
      </div> -->
      <!-- <div class="md-toolbar-section-end">
        <a
          href="https://tsg.hgu.edu.cn/"
          style="
            color: red;
            font-size: 14px;
            font-weight: 800;
          "
        >
          返回旧版
        </a>
        <span class="material-icons">
          info
        </span>
        开馆时间 8:00~22:00
        <template v-if="peopleNumber > -1">
          <span class="material-icons">
            perm_identity
          </span>
          当前馆内人数 {{ peopleNumber }}/2000
        </template>
      </div> -->
    </div>
    <!-- <div class="md-toolbar-row md-collapse-lateral">
      <h3 class="md-title">河北地质大学图书馆</h3>
    </div> -->
    <div class="md-toolbar-row md-collapse-lateral">
      <a v-if="showLogo" href="https://www.hgu.edu.cn/">
        <img
          :src="logoImage"
          alt="Logo image"
          style="margin-right:5px;width: 258px;"
        >
      </a>
      <div class="md-toolbar-section-start">
        <md-list>
          <md-list-item href="/">
            <p>首页</p>
          </md-list-item>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>新闻中心</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <el-row>
                      <el-col :span="24" style="width: 30vh">
                        <ul>
                          <li class="dropdown-header">资讯浏览</li>
                          <li>
                            <a href="/announcement/all" class="dropdown-item">资讯一览</a>
                          </li>
                          <li>
                            <a href="/announcement/activity" class="dropdown-item">活动通知</a>
                          </li>
                          <li>
                            <a href="/announcement/lecture" class="dropdown-item">讲座通知</a>
                          </li>
                        </ul>
                      </el-col>
                    </el-row>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>资源</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <el-row>
                      <el-col :span="24" style="width: 30vh">
                        <ul>
                          <li class="dropdown-header">资源服务</li>
                          <!-- <li>
                            <a href="/resouce/collection" class="dropdown-item">馆藏目录</a>
                          </li> -->
                          <li>
                            <a href="/resouce/all" class="dropdown-item">数据库导航</a>
                          </li>
                          <li>
                            <a href="/resouce/try" class="dropdown-item">试用资源</a>
                          </li>
                          <li>
                            <a href="/resouce/characteristic" class="dropdown-item">特色资源</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li>
                            <a href="/resouce/delivery" class="dropdown-item">文献传递</a>
                          </li>
                          <li class="dropdown-divider" />
                        </ul>
                      </el-col>
                    </el-row>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>读者服务</p>
                  </md-button>
                  <ul class="dropdown-menu" style="width: 60vh">
                    <el-row>
                      <el-col :span="12">
                        <ul>
                          <li>
                            <a href="/service/opentime" class="dropdown-item">开馆时间</a>
                          </li>
                          <li>
                            <a href="/service/distribution" class="dropdown-item">馆藏分布</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li class="dropdown-header">借阅服务</li>
                          <li>
                            <a href="/service/borrowRules" class="dropdown-item">借阅规则</a>
                          </li>
                          <li>
                            <a href="/service/borrowProcess" class="dropdown-item">借阅流程</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li class="dropdown-header">反馈中心</li>
                          <li>
                            <a href="/commentHub/common" class="dropdown-item">常见问题</a>
                          </li>
                          <li>
                            <a href="/commentHub/comment" class="dropdown-item">留言板</a>
                          </li>
                        </ul>
                      </el-col>
                      <el-col :span="12">
                        <ul>
                          <li class="dropdown-header">预约服务</li>
                          <li>
                            <a href="/service/seatOrder" class="dropdown-item">座位预约</a>
                          </li>
                          <li>
                            <a href="/service/labOrder" class="dropdown-item">研修室预约</a>
                          </li>
                          <li>
                            <a href="/service/lectureOrder" class="dropdown-item">讲座预约</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li>
                            <a href="/staffnumber" class="dropdown-item">职工读书证号查询</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li>
                            <a href="/service/donation" class="dropdown-item">捐赠</a>
                          </li>
                        </ul>
                      </el-col>
                    </el-row>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>阅读推广</p>
                  </md-button>
                  <ul class="dropdown-menu" style="width: 30vh">
                    <li>
                      <a href="/reading/recommendedReading" class="dropdown-item">读书推荐</a>
                    </li>
                    <li>
                      <a href="/reading/bookClub" class="dropdown-item">山水读书社</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li class="dropdown-header">主题活动</li>
                    <li>
                      <a href="/reading/readingMonth" class="dropdown-item">读书月</a>
                    </li>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>学习支持</p>
                  </md-button>
                  <ul class="dropdown-menu" style="width: 30vh">
                    <li>
                      <a href="/studysupport/admissionEducation" class="dropdown-item">新生入馆教育</a>
                    </li>
                    <li>
                      <a href="/studysupport/readerTraining" class="dropdown-item">读者培训</a>
                    </li>
                    <li>
                      <a href="/studysupport/VPNusage" class="dropdown-item">校外访问</a>
                    </li>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <li class="md-list-item">
            <a
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>概况</p>
                  </md-button>
                  <ul class="dropdown-menu" style="width: 30vh">
                    <li>
                      <a href="/introduction/libraryIntroduction" class="dropdown-item">本馆概况</a>
                    </li>
                    <li>
                      <a href="/introduction/leaderIntroduction" class="dropdown-item">现任领导</a>
                    </li>
                    <li>
                      <a href="/introduction/departmentIntroduction" class="dropdown-item">部门介绍</a>
                    </li>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>
        </md-list>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="true">
              <!-- <md-list>
                <h3 class="md-title">河北地质大学图书馆</h3>
              </md-list> -->
              <!-- TODO 手机版导航 -->
              <md-list>
                <md-list-item href="/">
                  <p>首页</p>
                </md-list-item>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>新闻中心</p>
                        </md-button>
                        <ul class="dropdown-menu">
                          <el-row>
                            <el-col :span="24" style="width: 30vh">
                              <ul>
                                <li class="dropdown-header">资讯浏览</li>
                                <li>
                                  <a href="/announcement/all" class="dropdown-item">资讯一览</a>
                                </li>
                                <li>
                                  <a href="/announcement/activity" class="dropdown-item">活动通知</a>
                                </li>
                                <li>
                                  <a href="/announcement/lecture" class="dropdown-item">讲座通知</a>
                                </li>
                              </ul>
                            </el-col>
                          </el-row>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>资源</p>
                        </md-button>
                        <ul class="dropdown-menu">
                          <el-row>
                            <el-col :span="24" style="width: 30vh">
                              <ul>
                                <li class="dropdown-header">资源服务</li>
                                <!-- <li>
                                  <a href="/resouce/collection" class="dropdown-item">馆藏目录</a>
                                </li> -->
                                <li>
                                  <a href="/resouce/all" class="dropdown-item">数据库导航</a>
                                </li>
                                <li>
                                  <a href="/resouce/try" class="dropdown-item">试用资源</a>
                                </li>
                                <li>
                                  <a href="/resouce/characteristic" class="dropdown-item">特色资源</a>
                                </li>
                                <li class="dropdown-divider" />
                                <li>
                                  <a href="/resouce/delivery" class="dropdown-item">文献传递</a>
                                </li>
                                <li class="dropdown-divider" />
                              </ul>
                            </el-col>
                          </el-row>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>读者服务</p>
                        </md-button>
                        <ul class="dropdown-menu" style="width: 60vh">
                          <el-row>
                            <el-col :span="12">
                              <ul>
                                <li>
                                  <a href="/service/opentime" class="dropdown-item">开馆时间</a>
                                </li>
                                <li>
                                  <a href="/service/distribution" class="dropdown-item">馆藏分布</a>
                                </li>
                                <li class="dropdown-divider" />
                                <li class="dropdown-header">借阅服务</li>
                                <li>
                                  <a href="/service/borrowRules" class="dropdown-item">借阅规则</a>
                                </li>
                                <li>
                                  <a href="/service/borrowProcess" class="dropdown-item">借阅流程</a>
                                </li>
                                <li class="dropdown-divider" />
                                <li class="dropdown-header">反馈中心</li>
                                <li>
                                  <a href="/commentHub/common" class="dropdown-item">常见问题</a>
                                </li>
                                <li>
                                  <a href="/commentHub/comment" class="dropdown-item">留言板</a>
                                </li>
                              </ul>
                            </el-col>
                            <el-col :span="12">
                              <ul>
                                <li class="dropdown-header">预约服务</li>
                                <li>
                                  <a href="/service/seatOrder" class="dropdown-item">座位预约</a>
                                </li>
                                <li>
                                  <a href="/service/labOrder" class="dropdown-item">研修室预约</a>
                                </li>
                                <li>
                                  <a href="/service/lectureOrder" class="dropdown-item">讲座预约</a>
                                </li>
                                <li class="dropdown-divider" />
                                <li>
                                  <a href="/staffnumber" class="dropdown-item">职工读书证号查询</a>
                                </li>
                                <li class="dropdown-divider" />
                                <li>
                                  <a href="/service/donation" class="dropdown-item">捐赠</a>
                                </li>
                              </ul>
                            </el-col>
                          </el-row>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>阅读推广</p>
                        </md-button>
                        <ul class="dropdown-menu" style="width: 30vh">
                          <li>
                            <a href="/reading/recommendedReading" class="dropdown-item">读书推荐</a>
                          </li>
                          <li>
                            <a href="/reading/bookClub" class="dropdown-item">山水读书社</a>
                          </li>
                          <li class="dropdown-divider" />
                          <li class="dropdown-header">主题活动</li>
                          <li>
                            <a href="/reading/readingMonth" class="dropdown-item">读书月</a>
                          </li>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>学习支持</p>
                        </md-button>
                        <ul class="dropdown-menu" style="width: 30vh">
                          <li>
                            <a href="/studysupport/admissionEducation" class="dropdown-item">新生入馆教育</a>
                          </li>
                          <li>
                            <a href="/studysupport/readerTraining" class="dropdown-item">读者培训</a>
                          </li>
                          <li>
                            <a href="/studysupport/VPNusage" class="dropdown-item">校外访问</a>
                          </li>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>

                <li class="md-list-item">
                  <a
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down direction="down">
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <p>概况</p>
                        </md-button>
                        <ul class="dropdown-menu" style="width: 30vh">
                          <li>
                            <a href="/introduction/libraryIntroduction" class="dropdown-item">本馆概况</a>
                          </li>
                          <li>
                            <a href="/introduction/leaderIntroduction" class="dropdown-item">现任领导</a>
                          </li>
                          <li>
                            <a href="/introduction/departmentIntroduction" class="dropdown-item">部门介绍</a>
                          </li>
                        </ul>
                      </drop-down>
                    </div>
                  </a>
                </li>
              </md-list>
            </mobile-menu>

            <md-list>
              <md-list-item @keydown.enter="handleSearch">
                <div class="md-autocomplete">
                  <md-autocomplete
                    v-model="searchQuery"
                    class="search has-info"
                    :md-options="employees"
                    :md-open-on-focus="false"
                  >
                    <label class="searchLabel">搜索...</label>
                  </md-autocomplete>
                </div>
              </md-list-item>

              <md-list-item>
                <md-button v-if="!username" class="md-info" href="/login">留言登录</md-button>

                <el-dropdown v-else>
                  <span class="el-dropdown-link">
                    <router-link to="/profile" style="margin-top: 0.5rem">{{ username }}</router-link>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <a href="/profile"><el-dropdown-item>个人信息</el-dropdown-item></a>
                    <a @click="logout"><el-dropdown-item>登出</el-dropdown-item></a>
                  </el-dropdown-menu>
                </el-dropdown>

              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

import MobileMenu from '@/layout/MobileMenu'
import { mapGetters } from 'vuex'
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      extraNavClasses: 'initBar', // 导航栏额外class
      toggledClass: false, // 按钮切换标志符
      logoImage: require('@/assets/img/tsgLogo.jpg'), // 顶部图

      searchQuery: '', // 搜索框默认配置
      employees: [], // 搜索框数据

      mobileFlag: false, // 移动端激活标志
      showLogo: true, // 顶部图显示标志

      peopleNumber: -1 // 馆内人数
    }
  },
  computed: {
    ...mapGetters([
      'username' // 用户名
    ])
  },
  mounted() {
    // 添加滚动监听
    document.addEventListener('scroll', this.scrollListener)
    // console.log(screen.width)
    if (screen.width < 1300 && screen.width > 990) {
      this.showLogo = false
    } else if (screen.width <= 990) {
      this.mobileFlag = true
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener) // 移除监听
  },
  methods: {
    bodyClick() {
      const bodyClick = document.getElementById('bodyClick')

      if (bodyClick === null) {
        const body = document.querySelector('body')
        const elem = document.createElement('div')
        elem.setAttribute('id', 'bodyClick')
        body.appendChild(elem)

        const bodyClick = document.getElementById('bodyClick')
        bodyClick.addEventListener('click', this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile() { // 移动端导航栏切换
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll() { // 滚动监听
      const scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      const navbarColor = document.getElementById('toolbar')
      // let searchColor = document.getElementsByClassName("search")[0];
      // let searchLabel = document.getElementsByTagName("label")[0];
      this.currentScrollValue = scrollValue
      this.$bus.$emit('scrollValue', scrollValue)

      if (!this.mobileFlag) {
        if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
          // console.log(this.colorOnScroll);
          this.extraNavClasses = 'navHidden'
        } else {
          if (this.extraNavClasses) {
            // this.logoImage = require("@/assets/img/shoolLogo-white.png");
            this.extraNavClasses = 'navShow'
            // navbarColor.classList.add("md-transparent");
            // searchColor.classList.remove("has-info");
            // searchColor.classList.add("has-white");
            // searchLabel.classList.add("searchLabel");
          }
        }
        if (
          this.scrollValueFlag > this.currentScrollValue &&
          scrollValue > this.colorOnScroll
        ) {
          // this.logoImage = require("@/assets/img/shoolLogo-black.png");
          this.extraNavClasses = `md-${this.type} navShow`
          // navbarColor.classList.remove("md-transparent");
          navbarColor.classList.remove('toolbar-ontop')
          // searchColor.classList.remove("has-white");
          // searchColor.classList.add("has-info");
          // searchLabel.classList.remove("searchLabel");
        }
        this.scrollValueFlag = this.currentScrollValue
      } else {
        // searchColor.classList.remove("has-white");
        // searchColor.classList.add("has-info");
        if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
          // this.logoImage = require("@/assets/img/shoolLogo-black.png");
          this.extraNavClasses = `md-${this.type}`
          // navbarColor.classList.remove("md-transparent");
          navbarColor.classList.remove('toolbar-ontop')
        } else {
          if (this.extraNavClasses) {
            // this.logoImage = require("@/assets/img/shoolLogo-white.png");
            this.extraNavClasses = ''
            // navbarColor.classList.add("md-transparent");
          }
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll)
    },
    handleSearch() { // 搜索框搜索
      this.$router.push({
        path: '/search',
        query: {
          searchQuery: this.searchQuery
        }
      })
      this.searchQuery = ''
    },
    async logout() { // 登出
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col ul{
  padding: 0;
}
#toolbar {
  * {
    font-size: 18px;
  }
  label {
    font-size: 16px !important;
  }
}
.toolbar-top div {
  font-size: 14px !important;
  color: #ababab;
  height: 0px;
  font-weight: 400;
  transition: height 0.3s ease;
  letter-spacing: 1px;
  overflow: hidden;
  padding-right: 1.5%;
  span {
    margin: 0 3px 0 10px;
  }
}
.toolbar-top .md-toolbar-section-start {
  font-size: 14px !important;
  margin-left: 1.3%;
  font-family: "STXingkai", Tahoma, Helvetica, Arial, "宋体", sans-serif;
}
.toolbar-ontop .toolbar-top div {
  height: 18px;
}

/*导航栏隐藏*/
.initBar {
  top: 0px;
}
.navHidden {
  top: -150px;
  transition: 1.2s;
}
.navShow {
  top: 0px;
  transition: 0.8s;
}
/* 其他设置 */
.md-toolbar-row {
  max-width: 90%;
}
.el-dropdown-menu__item {
  &:hover {
    color: #fff !important;
    background-color: #2196f3 !important;
  }
}
</style>
