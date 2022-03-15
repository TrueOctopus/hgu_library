<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-15 19:45:11
 * @LastEditors: 郑钊宇
 * @Description: 移动端菜单模块
-->
<template>
  <md-list
    v-if="navMobileSectionStart === 'true'"
    class="nav-mobile-menu nav-mobile-section-start"
  >
    <slot />
  </md-list>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    navMobileSectionStart: {
      type: String,
      default: 'false'
    }
  }
}
</script>
