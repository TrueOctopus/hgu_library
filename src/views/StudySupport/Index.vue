<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:25:59
 * @LastEditTime: 2022-06-09 14:37:10
 * @LastEditors: 郑钊宇
 * @Description: 学习支持页面
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/studysupport' }">
          学习支持
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="学习支持" />
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
      detailTittle: '学习支持',
      // TODO 修改名称
      menuList: [
        { title: '新生入馆教育', link: 'admissionEducation' },
        { title: '读者培训', link: 'readerTraining' },
        { title: '校外访问', link: 'VPNusage' }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      const news = ['admissionEducation', 'readerTraining', 'VPNusage']
      const newsCN = ['新生入馆教育', '读者培训', '校外访问']
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
