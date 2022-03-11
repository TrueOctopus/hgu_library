<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-10 18:27:49
 * @LastEditTime: 2022-03-11 10:39:57
 * @LastEditors: 郑钊宇
 * @Description: 侧边导航条
-->
<template>
  <nav class="anchor-nav">
    <a class="current" href="#">搜索/服务通道</a>
    <a href="#">新闻公告</a>
    <a href="#">阅读推广</a>
    <a href="#">活动讲座</a>
    <a href="#">特色资源</a>
    <a href="#">友情链接</a>
    <a href="#">↑回到顶部</a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.anchor-nav {
  position: fixed;
  top: 30%;
  right: 1%;
  z-index: 5000;
  text-align: center;
  box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%);
  opacity: 0.9;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
  a {
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Microsoft Yahei", sans-serif, serif;
    color: #000 !important;
    font-size: 14px;
    font-weight: bold;
    display: block;
    line-height: 45px;
    padding: 4px 8px;
    letter-spacing: 1px;
  }
  a:hover {
    background-color: #00bcd4;
    color: #fff !important;
  }
}
// a.current {
//   background-color: #000;
// }
</style>
