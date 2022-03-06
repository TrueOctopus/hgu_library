<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-03-06 18:57:39
 * @LastEditors: 郑钊宇
 * @Description: 
-->
<template>
  <div>
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
export default {
  created() {
    // let loadingPage = document.getElementById("loading");
    // loadingPage.classList.remove("animate__fadeInUpBig");
    // loadingPage.classList.add("animate__fadeOutUpBig");
    // let loadingTittle = document.getElementById("loadingTittle");
    // loadingTittle.classList.remove("animate__fadeInUp");
    // loadingTittle.classList.add("animate__fadeOutUp");
  }
};
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
}
</style>
