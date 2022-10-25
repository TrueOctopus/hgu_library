<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:25:59
 * @LastEditTime: 2022-04-09 15:44:39
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/commenthub' }">
          反馈中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="反馈中心" />
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
      detailTittle: '反馈中心',
      // TODO 修改名称
      menuList: [
        { title: '常见问题', link: 'common' },
        { title: '留言板', link: 'comment' }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
      const news = ['opentime', 'distribution', 'borrowRules', 'borrowProcess', 'seatOrder', 'labOrder',
        'lectureOrder', 'donation']
      const newsCN = ['开馆时间', '馆藏分布', '借阅规则', '借阅流程', '座位预约', '研修室预约',
        '讲座预约', '捐赠']
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
