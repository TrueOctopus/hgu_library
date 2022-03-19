<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-18 17:48:56
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
            v-if="isShowBreadcrub"
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
        <div>
          <NewsElem
            :news-type-index="0"
            tittle="这是一段测试文字"
            date="03/03"
            news-id="1"
          />
          <NewsElem
            :news-type-index="1"
            tittle="这是一段测试文字"
            date="03/03"
            news-id="1"
          />
          <NewsElem
            :news-type-index="2"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="2"
            tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="1"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="0"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="1"
            tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="0"
            tittle="这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
            date="03/03"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="12/13"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="12/13"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="12/13"
          />
          <NewsElem
            :news-type-index="3"
            tittle="这是一段测试文字"
            date="12/13"
          />
          <pagination
            v-model="infoPagination"
            :class="`pagination-${infoColor}`"
            :page-count="10"
          />

          <!-- {{ $route.params.newsId }} -->
        </div>
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import NewsElem from '../components/NewsElement.vue'
import { Pagination } from '@/components'
import SubNav from '../components/SubNav/Index.vue'

export default {
  name: 'NewsList',
  components: {
    TemplePage,
    NewsElem,
    Pagination,
    SubNav
  },
  data() {
    return {
      isShowBreadcrub: false,
      infoColor: 'info',
      detailTittle: '新闻公告',
      lastBreadcrumbTittle: '',
      infoPagination: 1,
      buttonClass: {
        newsType: 'All',
        isAllActive: false,
        isNewsActive: true,
        isNotesActive: true,
        isBuyActive: true,
        isTryActive: true
      },
      menuList: [
        {
          title: '新闻公告',
          children: [
            { title: '所有新闻', link: '' },
            { title: '菜单1-2', link: '' },
            { title: '菜单1-3', link: '' }
          ]
        },
        { title: '菜单2', link: '' },
        { title: '菜单3', link: '' }
      ]

    }
  },
  methods: {
    buttonShow(newsType) {
      this.buttonClass.newsType = newsType
      for (const key in this.buttonClass) {
        this.buttonClass[key] = true
      }
      this.buttonClass['is' + newsType + 'Active'] = false
      switch (newsType) {
        case 'All':
          this.isShowBreadcrub = false
          break
        case 'News':
          this.lastBreadcrumbTittle = '新闻'
          this.isShowBreadcrub = true
          break
        case 'Notes':
          this.lastBreadcrumbTittle = '公告'
          this.isShowBreadcrub = true
          break
        case 'Buy':
          this.lastBreadcrumbTittle = '购买'
          this.isShowBreadcrub = true
          break
        case 'Try':
          this.lastBreadcrumbTittle = '试用'
          this.isShowBreadcrub = true
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
