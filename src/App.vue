<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-04-06 19:22:35
 * @LastEditors: 郑钊宇
 * @Description: app.vue
-->
<template>

  <div>
    <Notifications />
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue'
export default {
  components: { Notifications }
  // FIXME 页面加载动画 已弃用
  // created() {
  //   let loadingPage = document.getElementsByTagName("html")[0];
  //   loadingPage.addEventListener("transitionend", () => {
  //     loadingPage.classList.add("loading-finish");
  //   });
  // }
}
</script>
<style lang="scss">
/* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #dbdbdb;
}
.tittle {
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-weight: bold;
  color: rgb(90, 90, 90);
  letter-spacing: 2px;
  padding-bottom: 5px;
}
ul {
  list-style: none;
}
.md-image {
  display: inline-block !important;
  align-items: initial !important;
}
</style>
