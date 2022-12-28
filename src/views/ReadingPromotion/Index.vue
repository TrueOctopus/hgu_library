<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:25:59
 * @LastEditTime: 2022-03-25 16:59:51
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/reading' }">
          阅读推广
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="阅读推广" />
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
      detailTittle: '阅读推广',
      // TODO 修改名称
      menuList: [
        { title: '读书推荐', link: 'recommendedReading' },
        { title: '新书通报', link: 'bookReport' },
        {
          title: '主题活动',
          children: [
            { title: '读书月', link: 'readingMonth' }
          ]
        }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      const news = ['recommendedReading', 'bookReport', 'readingMonth']
      const newsCN = ['读书推荐', '新书通报', '读书月']
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
