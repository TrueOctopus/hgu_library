<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 14:30:26
 * @LastEditTime: 2022-03-18 17:05:13
 * @LastEditors: 郑钊宇
 * @Description: 侧边递归树菜单
-->
<template>
  <SubMenu>
    <template #title>
      {{ data.title }}
      <div class="material-icons">
        arrow_right
      </div>
    </template>
    <template v-for="child in data.children">
      <MenuItem v-if="!child.children" :key="child.title"><router-link :to="child.link">{{ child.title }}</router-link></MenuItem>
      <Menu v-else :key="child.title" :data="child" />
    </template>
  </SubMenu>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: 'Menu',
  components: {
    SubMenu,
    MenuItem
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss">
ul .material-icons {
  position: relative;
  top: 5px;
}
</style>
