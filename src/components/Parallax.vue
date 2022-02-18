<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-02-17 14:18:56
 * @LastEditors: 郑钊宇
 * @Description: 
-->
<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>
<script>
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
export default {
  name: "parallax",
  data() {
    return {
      styles: {},
      debounceTimeout: 6
    };
  },
  methods: {
    handleScroll(scrollVal) {
      let oVal = scrollVal / 3;
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`
      };
    },
    checkForParallax(scrollVal) {
      let fn = debounce(
        () => this.handleScroll(scrollVal),
        this.debounceTimeout
      );
      fn();
    }
  },
  mounted() {
    let self = this;
    window.addEventListener("scroll", function() {
      if (window.innerWidth > 991) {
        let scrollVal = this.scrollY;
        self.checkForParallax(scrollVal);
      }
    });
  }
};
</script>
