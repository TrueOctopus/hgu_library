<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-23 19:37:46
 * @LastEditTime: 2022-04-24 16:24:36
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/characteristic' }">
          特色资源
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="特色资源" />
    </template>
    <template #text>
      <router-view />
    </template>

  </TemplePage>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import SubNav from '../components/SubNav/Index.vue'

export default {
  name: 'NewsList',
  components: {
    TemplePage,
    SubNav
  },
  data() {
    return {
      detailTittle: '特色资源',

      // TODO 修改名称
      menuList: [
        { title: '成果', link: 'achievement' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
