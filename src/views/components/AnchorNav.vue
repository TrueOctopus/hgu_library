<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-10 18:27:49
 * @LastEditTime: 2022-03-30 09:28:54
 * @LastEditors: 郑钊宇
 * @Description: 侧边导航条
-->
<template>
  <nav ref="anchorNav" class="anchor-nav">
    <a
      href="javascript:void(0)"
      style="border-radius: 3px 3px 0 0"
      @click="onTopClick('wrapper')"
    >
      搜索/服务通道
    </a>
    <a href="javascript:void(0)" @click="onTopClick('announcement')">
      新闻公告
    </a>
    <a href="javascript:void(0)" @click="onTopClick('publicity')">
      阅读推广
    </a>
    <a href="javascript:void(0)" @click="onTopClick('lecture')">
      活动讲座
    </a>
    <a href="javascript:void(0)" @click="onTopClick('characteristic')">
      特色资源
    </a>
    <a href="javascript:void(0)" @click="onTopClick('friendLink')">
      友情链接
    </a>
    <a href="https://www.hgu.edu.cn/">
      学校官网
    </a>
    <a
      href="javascript:void(0)"
      style="border-radius: 0 0 3px 3px"
      @click="onTopClick('wrapper')"
    >
      <span class="material-icons"> expand_less </span>返回顶部
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    columnType: {
      type: Number,
      default: 0
    }
  },
  watch: {
    columnType: {
      handler(newVal, oldVal) {
        // console.log(newVal, oldVal);
        this.$refs.anchorNav.children[oldVal].classList.remove('active')
        this.$refs.anchorNav.children[newVal].classList.add('active')
      }
    }
  },
  mounted() {
    const sections = this.$refs.anchorNav.children
    // console.log("sections", sections);
    sections[this.columnType].classList.add('active')
  },
  methods: {
    onTopClick(locationId) {
      // 获取目标元素
      const element = document.getElementById(locationId)
      // console.log(locationId)
      // console.log(element)
      // 元素方法调用
      element.scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
.anchor-nav {
  position: fixed;
  top: 30%;
  right: 1%;
  z-index: 500;
  text-align: center;
  box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%);
  opacity: 0.85;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
  a {
    background-color: rgba(255, 255, 255, 0.95);
    font-family: "Microsoft Yahei", sans-serif, serif;
    color: #000 !important;
    font-size: 14px;
    font-weight: bold;
    display: block;
    line-height: 45px;
    padding: 4px 8px;
    letter-spacing: 1px;

    &:hover {
      background-color: #00bcd4;
      color: #fff !important;
    }
    &.active {
      background-color: #00bcd4;
      color: #fff !important;
    }
  }
}
</style>
