<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-15 19:45:52
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <component :is="tag" class="badge" :class="`badge-${type}`">
    <slot />
  </component>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    type: {
      type: String,
      default: 'default',
      validator: value => {
        const acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'rose',
          'default'
        ]
        return acceptedValues.indexOf(value) !== -1
      }
    }
  }
}
</script>
<style></style>
