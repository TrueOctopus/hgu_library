<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-06-09 10:28:11
 * @LastEditors: 郑钊宇
 * @Description: 背景组件
-->
<template>
  <div :style="styles">
    <slot />
  </div>
</template>
<script>
function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}
export default {
  name: 'Parallax',
  data() {
    return {
      styles: {},
      debounceTimeout: 6
    }
  },
  mounted() {
    const self = this
    window.addEventListener('scroll', function() {
      if (window.innerWidth > 991) {
        const scrollVal = this.scrollY
        self.checkForParallax(scrollVal)
      }
    })
  },
  methods: {
    handleScroll(scrollVal) {
      const oVal = scrollVal / 3
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`
      }
    },
    checkForParallax(scrollVal) {
      const fn = debounce(
        () => this.handleScroll(scrollVal),
        this.debounceTimeout
      )
      fn()
    }
  }
}
</script>
