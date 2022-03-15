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
      <div class="md-toolbar-section-end">
        <span class="material-icons">
          info
        </span>
        开馆时间 8:00~22:00
        <span class="material-icons">
          perm_identity
        </span>
        当前馆内人数 {{ peopleNumber }}/2000
      </div>
    </div>
    <!-- <div class="md-toolbar-row md-collapse-lateral">
      <h3 class="md-title">河北地质大学图书馆</h3>
    </div> -->
    <div class="md-toolbar-row md-collapse-lateral">
      <a v-if="showLogo" href="https://www.hgu.edu.cn/">
        <img
          :src="logoImage"
          alt="Logo image"
          style="height:40px; margin-right:15px;"
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
                    <p>资源</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">Dropdown header</li>
                    <li>
                      <a href="kits" class="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >Something else here</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a href="#pablo" class="dropdown-item">Separated link</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >One more separated link</a>
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
                    <p>读者服务</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">Dropdown header</li>
                    <li>
                      <a href="kits" class="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >Something else here</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a href="#pablo" class="dropdown-item">Separated link</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >One more separated link</a>
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
                    <p>阅读推广</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">Dropdown header</li>
                    <li>
                      <a href="kits" class="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >Something else here</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a href="#pablo" class="dropdown-item">Separated link</a>
                    </li>
                    <li class="dropdown-divider" />
                    <li>
                      <a
                        href="#pablo"
                        class="dropdown-item"
                      >One more separated link</a>
                    </li>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>

          <md-list-item href="/introduction">
            <p>概况</p>
          </md-list-item>
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
            </mobile-menu>

            <md-list>
              <md-list-item>
                <div class="md-autocomplete">
                  <md-autocomplete
                    v-model="selectedEmployee"
                    class="search has-info"
                    :md-options="employees"
                    :md-open-on-focus="false"
                  >
                    <label class="searchLabel">搜索...</label>
                  </md-autocomplete>
                </div>
              </md-list-item>

              <md-list-item>
                <md-button class="md-info" href="/login">登录</md-button>
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
      logoImage: require('@/assets/img/shoolLogo-black.png'), // 顶部图

      selectedEmployee: '', // 搜索框默认配置
      employees: [],

      mobileFlag: false, // 移动端激活标志
      showLogo: true,

      peopleNumber: 900 // 馆内人数
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener)
    // console.log(screen.width);
    if (screen.width < 1300 && screen.width > 990) {
      this.showLogo = false
    } else if (screen.width <= 990) {
      this.mobileFlag = true
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener)
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
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll() {
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
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
