<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <!-- <div class="md-toolbar-row md-collapse-lateral">
      <h3 class="md-title">河北地质大学图书馆</h3>
    </div> -->
    <div class="md-toolbar-row md-collapse-lateral">
      <a href="https://www.hgu.edu.cn/">
        <img
          :src="image"
          alt="Logo Image"
          class="rounded"
          style="margin-left:-15px;width:250px;"
        />
      </a>
      <div class="md-toolbar-section-start">
        <md-list>
          <md-list-item href="#/">
            <p>首页</p>
          </md-list-item>

          <md-list-item href="javascript:void(0)">
            <p>Link2</p>
          </md-list-item>

          <li class="md-list-item">
            <a
              href="javascript:void(0)"
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down direction="down">
                  <md-button
                    slot="title"
                    class="md-button md-button-link md-white md-simple dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <p>Dropdown</p>
                  </md-button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">Dropdown header</li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <a href="#pablo" class="dropdown-item"
                        >Something else here</a
                      >
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a href="#pablo" class="dropdown-item">Separated link</a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a href="#pablo" class="dropdown-item"
                        >One more separated link</a
                      >
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
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="true">
              <md-list>
                <!-- <h3 class="md-title">河北地质大学图书馆</h3> -->
              </md-list>
            </mobile-menu>
            <md-list>
              <md-list-item href="javascript:void(0)">
                <p>登录</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "initBar",
      toggledClass: false,
      image: require("@/assets/img/shoolLogo-white.png")
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;

      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = "navHidden";
      } else {
        if (this.extraNavClasses) {
          this.image = require("@/assets/img/shoolLogo-white.png");
          this.extraNavClasses = "navShow";
          navbarColor.classList.add("md-transparent");
        }
      }
      if (
        this.scrollValueFlag > this.currentScrollValue &&
        scrollValue > this.colorOnScroll
      ) {
        this.image = require("@/assets/img/shoolLogo-black.png");
        this.extraNavClasses = `md-${this.type} navShow`;
        navbarColor.classList.remove("md-transparent");
      }
      this.scrollValueFlag = this.currentScrollValue;
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style scoped>
/*导航栏隐藏*/
.initBar {
  top: 0px;
}
.navHidden {
  top: -100px;
  transition: 1.2s;
}
.navShow {
  top: 0px;
  transition: 0.8s;
}
</style>
