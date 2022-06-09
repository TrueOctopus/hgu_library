<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-06-09 10:24:53
 * @LastEditors: 郑钊宇
 * @Description: 登录选项卡
-->
<template>
  <md-card class="md-card-login" :class="{ 'md-card-hidden': cardHidden }">
    <md-card-header :class="getClass(headerColor)">
      <slot name="title" />
      <div class="social-line">
        <slot name="buttons" />
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description" />
      <slot name="inputs" />
    </md-card-content>

    <md-card-actions>
      <slot name="footer" />
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'LoginCard',
  props: {
    headerColor: {
      type: String,
      default: ''
    } // 卡片头部颜色
  },
  data() {
    return {
      cardHidden: true // 卡片是否隐藏
    }
  },
  beforeMount() {
    setTimeout(this.showCard, 400)
  },
  methods: {
    showCard: function() { // 显示卡片
      this.cardHidden = false
    },
    getClass: function(headerColor) { // 设定卡片头部颜色
      return 'md-card-header-' + headerColor + ''
    }
  }
}
</script>

<style lang="scss"></style>
