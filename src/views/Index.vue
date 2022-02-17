<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:25:02
 * @LastEditTime: 2022-02-16 20:51:32
 * @LastEditors: 郑钊宇
 * @Description: 主页面
-->
<template>
  <div class="wrapper">
    <parallax class="page-header" :style="headerStyle">
      <div class="image-wrapper">
        <div class="brand">
          <h1>河北地质大学图书馆</h1>
          <h3>HeBei GEO University Library</h3>
        </div>
      </div>
    </parallax>
    <div class="main">
      <div class="test"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/header.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style scoped>
.test {
  height: 1000px;
  background-color: rgb(101, 75, 196);
}
</style>
