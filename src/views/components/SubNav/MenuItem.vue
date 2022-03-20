<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:06:05
 * @LastEditTime: 2022-03-19 17:33:17
 * @LastEditors: 郑钊宇
 * @Description: 没有子节点，所要展示的标题
-->
<template>
  <li @click="activeLi($event)"><slot /></li>
</template>

<script>
export default {
  name: 'MenuItem',
  methods: {
    activeLi(e) {
      // console.log(e.currentTarget)
      const list = document.getElementsByTagName('li')
      list.forEach(l => {
        l.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
    }
  }
}
</script>

