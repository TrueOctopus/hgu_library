<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:25:59
 * @LastEditTime: 2022-06-09 14:32:20
 * @LastEditors: 郑钊宇
 * @Description: 读者服务页面
-->
<template>
  <TemplePage :detail-tittle="detailTittle">
    <template #breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/service' }">
          读者服务
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ lastBreadcrumbTittle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #subNav>
      <SubNav :menu-list="menuList" menu-tittle="读者服务" />
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
      detailTittle: '读者服务',
      // TODO 修改名称
      menuList: [
        { title: '开馆时间', link: 'opentime' },
        { title: '馆藏分布', link: 'distribution' },
        {
          title: '借阅服务',
          children: [
            { title: '借阅规则', link: 'borrowRules' },
            { title: '借阅流程', link: 'borrowProcess' }
          ]
        },
        {
          title: '预约服务',
          children: [
            { title: '座位预约', link: 'seatOrder' },
            { title: '研修室预约', link: 'labOrder' },
            { title: '讲座预约', link: 'lectureOrder' }
          ]
        },
        { title: '捐赠', link: 'donation' }
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
