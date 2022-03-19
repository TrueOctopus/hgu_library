<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 17:08:15
 * @LastEditTime: 2022-03-18 17:46:17
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <SubNavBox :menu-tittle="menuTittle">
    <template v-for="menu in menuList">
      <MenuItem v-if="!menu.children" :key="menu.title">
        <router-link :to="menu.link">{{ menu.title }}
        </router-link>
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
  }
}
</script>
