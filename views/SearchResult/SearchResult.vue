<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-08 08:36:46
 * @LastEditTime: 2022-04-24 19:52:16
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div>
    <TemplePage :detail-tittle="detailTittle">
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/introduction' }">
            {{ detailTittle }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <h3>共搜索到{{ newsList.length + lectureList.length }}条结果</h3>
        <ul v-if="newsList.length !==0">
          <li v-for="news in newsList" :key="news.id" :style="tabColorStyle(news.catalog)">
            <router-link :to="`/announcement/${news.id}`">
              <badge class="labelClass" :type="newsColor(news.catalog)">{{ news.catalog }}</badge>
              | {{ news.releasetime.substring(5, 10) }} | {{ news.title }}
            </router-link>
          </li>
        </ul>

        <ul v-if="lectureList.length !==0">
          <li v-for="lecture in lectureList" :key="lecture.id" :style="tabColorStyle(lecture.catalog)">
            <router-link :to="`/lecture/${lecture.id}`">
              <badge class="labelClass" :type="newsColor(lecture.catalog)">{{ lecture.catalog }}</badge>
              | {{ lecture.releasetime.substring(5, 10) }} | {{ lecture.title }}
            </router-link>
          </li>
        </ul>
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { globalSearch } from '@/api/search'
import { Badge } from '@/components'
export default {
  components: { TemplePage, Badge },
  data() {
    return {
      detailTittle: '搜索结果',
      lectureList: [],
      newsList: [],
      colorTabs: ['primary', 'warning', 'success', 'info', 'rose', 'danger'],
      catalogArray: ['新闻', '公告', '购买', '试用', '活动', '讲座']
    }
  },
  computed: {
    newsColor() {
      return function(catalog) {
        return this.colorTabs[this.catalogArray.indexOf(catalog)]
      }
    },
    tabColorStyle() {
      return function(catalog) {
        let tabColor = '#00bcd4'
        switch (this.catalogArray.indexOf(catalog)) {
          case 0:
            tabColor = '#9c27b0'
            break
          case 1:
            tabColor = '#ff9800'
            break
          case 2:
            tabColor = '#2196f3'
            break
          case 3:
            tabColor = '#00bcd4'
            break
          case 4:
            tabColor = '#e91e63'
            break
          case 5:
            tabColor = '#f44336'
            break
        }
        return `border-left: 5px solid ${tabColor};`
      }
    }
  },
  created() {
    globalSearch(this.$route.query.searchQuery).then(res => {
      // console.log(res)
      this.lectureList = res.data.lecture
      this.newsList = res.data.news
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    line-height: 32px;
    padding-left: 6px;
    .labelClass {
      position: relative;
      top: -0.05rem;
    }
    a {
      color: #000 !important;
      font-size: 16px;
      &:hover {
        color: #00bcd4 !important;
      }
    }

  }
}
</style>
