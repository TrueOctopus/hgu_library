<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:06:05
 * @LastEditTime: 2022-04-05 14:32:04
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
      // console.log('list', list.length)
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      e.currentTarget.classList.add('active')
    }
  }
}
</script>

