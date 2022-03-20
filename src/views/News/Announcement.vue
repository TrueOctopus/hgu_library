<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-19 17:38:49
 * @LastEditors: 郑钊宇
 * @Description: 各类新闻公告列表 包括查询
-->
<template>
  <div>
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

        <!-- <md-button
          ref="all"
          class="md-sm"
          :class="{ 'md-simple': buttonClass.isAllActive }"
          @click="buttonShow('All')"
        >所有发布消息</md-button>
        <md-button
          ref="news"
          class="md-primary md-sm"
          :class="{ 'md-simple': buttonClass.isNewsActive }"
          @click="buttonShow('News')"
        >新闻</md-button>
        <md-button
          ref="notes"
          class="md-warning md-sm"
          :class="{ 'md-simple': buttonClass.isNotesActive }"
          @click="buttonShow('Notes')"
        >公告</md-button>
        <md-button
          ref="buy"
          class="md-success md-sm"
          :class="{ 'md-simple': buttonClass.isBuyActive }"
          @click="buttonShow('Buy')"
        >购买</md-button>
        <md-button
          ref="try"
          class="md-info md-sm"
          :class="{ 'md-simple': buttonClass.isTryActive }"
          @click="buttonShow('Try')"
        >试用</md-button> -->
      </template>
      <template #text>
        <router-view />
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
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
      infoColor: 'info',
      detailTittle: '新闻公告',
      infoPagination: 1,
      buttonClass: {
        newsType: 'All',
        isAllActive: false,
        isNewsActive: true,
        isNotesActive: true,
        isBuyActive: true,
        isTryActive: true
      },
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
        { title: '讲座通知', link: 'lecture' }
      ]
    }
  },
  computed: {
    lastBreadcrumbTittle() {
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
  },
  methods: {
    // buttonShow(newsType) {
    //   this.buttonClass.newsType = newsType
    //   for (const key in this.buttonClass) {
    //     this.buttonClass[key] = true
    //   }
    //   this.buttonClass['is' + newsType + 'Active'] = false
    //   switch (newsType) {
    //     case 'All':
    //       this.isShowBreadcrub = false
    //       break
    //     case 'News':
    //       this.lastBreadcrumbTittle = '新闻'
    //       this.isShowBreadcrub = true
    //       break
    //     case 'Notes':
    //       this.lastBreadcrumbTittle = '公告'
    //       this.isShowBreadcrub = true
    //       break
    //     case 'Buy':
    //       this.lastBreadcrumbTittle = '购买'
    //       this.isShowBreadcrub = true
    //       break
    //     case 'Try':
    //       this.lastBreadcrumbTittle = '试用'
    //       this.isShowBreadcrub = true
    //       break
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped></style>
