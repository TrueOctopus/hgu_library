<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:07:21
 * @LastEditTime: 2022-03-19 10:44:24
 * @LastEditors: 郑钊宇
 * @Description:
-->

<template>
  <div>
    <div class="L1menu" @click="change">
      <slot name="title" />
    </div>
    <div v-show="flag" class="sub">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  data() {
    return { flag: false }
  },
  methods: {
    change() {
      this.flag = !this.flag
    }
  }
}
</script>
<style lang="scss">
.sub a {
  padding-left: 9vh !important;
}
</style>
