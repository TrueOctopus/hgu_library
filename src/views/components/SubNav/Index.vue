<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 17:08:15
 * @LastEditTime: 2022-04-05 15:33:51
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <SubNavBox :menu-tittle="menuTittle">
    <template v-for="menu in menuList">
      <MenuItem v-if="!menu.children" :key="menu.title">
        <router-link :name="menu.link" :to="menu.link">{{ menu.title }}</router-link>
      </MenuItem>
      <Menu v-else :key="menu.title" :data="menu" />
    </template>
  </SubNavBox>
</template>

<script>
import SubNavBox from './SubNavBox.vue'
import Menu from './Menu'
import MenuItem from './MenuItem'
export default {
  components: {
    SubNavBox,
    Menu,
    MenuItem
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    menuTittle: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // console.log(this.$route.path.split('/')[2])
    const item = document.querySelector(`a[name=${this.$route.path.split('/')[2]}]`)
    this.activeLi(item)
  },
  methods: {
    activeLi(e) {
      // console.log(e.currentTarget)
      const list = document.getElementsByTagName('li')
      // console.log('list', list.length)
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
      }
      e.parentElement.classList.add('active')
      e.parentElement.parentElement.style.display = 'inherit'
      // console.log(e.parentElement.parentElement.style)
    }
  }
}
</script>
