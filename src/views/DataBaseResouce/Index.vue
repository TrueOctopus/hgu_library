<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 08:39:26
 * @LastEditTime: 2023-02-07 20:56:55
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/resouce' }">
          资源
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="资源导航" />
    </template>
    <template #text>
      <template>
        <router-view />
      </template>
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
      detailTittle: '资源服务',
      // TODO 修改名称
      menuList: [
        { title: '馆藏目录', link: 'collection' },
        {
          title: '数据库导航',
          children: [
            { title: '全部', link: 'all' },
            { title: '中文资源', link: 'cn' },
            { title: '外文资源', link: 'foreign' },
            { title: '试用资源', link: 'try' },
            { title: '开放资源', link: 'open' }
          ]
        },
        { title: '特色资源', link: 'characteristic' },
        { title: '文献传递', link: 'delivery' }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      const news = ['collection', 'all', 'cn', 'foreign', 'try', 'open',
        'characteristic', 'delivery']
      const newsCN = ['馆藏目录', '全部资源', '中文资源', '外文资源', '试用资源', '开放资源',
        '特色资源', '文献传递']
      let type = ''
      news.forEach((e, index) => {
        // console.log(e, index, this.$route.path.split('/')[2])
        if (e === this.$route.path.split('/')[2]) {
          type = newsCN[index]
        }
      })
      return type
    },
    catalog() {
      return this.$route.meta.catalog
    }
  }
}
</script>

<style lang="scss" scoped></style>
