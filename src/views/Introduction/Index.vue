<!--
 * @Author: 郑钊宇
 * @Date: 2023-02-07 20:03:10
 * @LastEditTime: 2023-02-07 20:08:50
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/introduction' }">
          概况
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="概况" />
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
  name: 'StudySupport',
  components: {
    TemplePage,
    SubNav
  },
  data() {
    return {
      detailTittle: '概况',
      // TODO 修改名称
      menuList: [
        { title: '本馆概况', link: 'libraryIntroduction' },
        { title: '现任领导', link: 'leaderIntroduction' },
        { title: '部门介绍', link: 'departmentIntroduction' }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      const news = ['libraryIntroduction', 'leaderIntroduction', 'departmentIntroduction']
      const newsCN = ['本馆概况', '现任领导', '部门介绍']
      let type = ''
      news.forEach((e, index) => {
        // console.log(e, index, this.$route.path.split('/')[2])
        if (e === this.$route.path.split('/')[2]) {
          type = newsCN[index]
        }
      })
      return type
    }
  }
}
</script>

<style lang="scss" scoped></style>
