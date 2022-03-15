<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-15 19:45:50
 * @LastEditors: 郑钊宇
 * @Description:
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
    }
  },
  data() {
    return {
      cardHidden: true
    }
  },
  beforeMount() {
    setTimeout(this.showCard, 400)
  },
  methods: {
    showCard: function() {
      this.cardHidden = false
    },
    getClass: function(headerColor) {
      return 'md-card-header-' + headerColor + ''
    }
  }
}
</script>

<style lang="scss"></style>
