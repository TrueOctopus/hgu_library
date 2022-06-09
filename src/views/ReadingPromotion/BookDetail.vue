<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-07 10:09:23
 * @LastEditTime: 2022-06-09 14:32:56
 * @LastEditors: 郑钊宇
 * @Description: 图书详情页面
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
          <el-breadcrumb-item :to="{ path: '/reading' }">
            阅读推广
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailTittle }}</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <div v-if="picture" class="md-layout">
          <div class="md-layout-item md-size-30">
            <img class="md-image" style="width: 100%;height: auto" :src="picture" alt="主题图片">
            <div style="white-space: pre-wrap; font-size: 14px;">{{ bookinformation }}</div>
          </div>

          <div class="md-layout-item md-size-70" v-html="content" />
        </div>
        <div v-else v-html="content" />
      </template>

    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { fetchPublicityBookById } from '@/api/publicity'
import { getPic } from '@/api/file'

export default {
  name: 'News',
  components: {
    TemplePage
  },
  data() {
    return {
      headerTittle: '图书介绍', // 主标题
      detailTittle: '', // 内容标题
      dateTittle: '', // 日期
      picture: undefined, // 图片
      content: '', // 内容
      bookinformation: '' // 图书信息
    }
  },
  created() {
    // console.log(this.$route.params.bookId)
    if (this.$route.params.bookId) {
      fetchPublicityBookById(this.$route.params.bookId).then(response => {
        console.log(response)
        this.detailTittle = response.data.recommend.title
        this.dateTittle = response.data.recommend.releasetime.substring(0, 10)
        this.bookinformation = response.data.recommend.bookinformation
        // FIXME 图片与后台预览不一致,会有水平居中的情况
        this.content = response.data.recommend.introduction.replace(/wscnph/g, 'wscnph md-image')
        if (response.data.recommend.coverimage) this.picture = getPic + response.data.recommend.coverimage
      })
    }
  }
}
</script>

<style></style>

