<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:07:21
 * @LastEditTime: 2022-03-18 16:59:31
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
.sub li {
  padding-left: 20px !important;
}
</style>
