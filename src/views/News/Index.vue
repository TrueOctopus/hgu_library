<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-06-09 14:25:35
 * @LastEditors: 郑钊宇
 * @Description: 各类新闻公告列表 包括查询
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/announcement' }">
          新闻公告
        </el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: '/announcement' }"
        >
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="新闻中心" />
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
      detailTittle: '新闻公告',
      // buttonClass: {
      //   newsType: 'All',
      //   isAllActive: false,
      //   isNewsActive: true,
      //   isNotesActive: true,
      //   isBuyActive: true,
      //   isTryActive: true
      // },

      // TODO 修改名称
      menuList: [
        { title: '资讯一览', link: 'all' },
        {
          title: '新闻公告',
          children: [
            { title: '新闻列表', link: 'news' },
            { title: '公告列表', link: 'notes' }
          ]
        },
        {
          title: '资源信息',
          children: [
            { title: '资源购买', link: 'buy' },
            { title: '资源试用', link: 'try' }
          ]
        },
        { title: '活动通知', link: 'activity' },
        { title: '讲座通知', link: 'lecture' }

      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      // 面包屑最后一个
      const news = ['all', 'news', 'notes', 'buy', 'try', 'lecture']
      const newsCN = ['资讯一览', '新闻', '公告', '购买', '试用', '讲座']
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
