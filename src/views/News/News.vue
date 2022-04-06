<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 19:11:53
 * @LastEditTime: 2022-04-06 19:28:13
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告页面
-->
<template>
  <div>
    <TemplePage
      :header-tittle="headerTittle"
      :detail-tittle="detailTittle"
      :date-tittle="dateTittle"
    >
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/announcement' }">
            新闻公告
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailTittle }}</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <div v-html="content" />
      </template>

    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { fetchNewsDetailById } from '@/api/news'

export default {
  name: 'News',
  components: {
    TemplePage
  },
  data() {
    return {
      headerTittle: '',
      detailTittle: '',
      dateTittle: '',
      picture: undefined,
      content: ''
    }
  },
  created() {
    console.log(this.$route.params.newId)
    if (this.$route.params.newId) {
      fetchNewsDetailById(this.$route.params.newId).then(response => {
        console.log(response)
        this.headerTittle = response.data.news.catalog
        this.detailTittle = response.data.news.title
        this.dateTittle = response.data.news.releasetime.substring(0, 10)
        // FIXME 图片与后台预览不一致,会有水平居中的情况
        this.content = response.data.news.content.replace(/wscnph/g, 'wscnph md-image')
        this.picture = response.data.news.picture
      })
    }
  }
}
</script>

<style></style>
