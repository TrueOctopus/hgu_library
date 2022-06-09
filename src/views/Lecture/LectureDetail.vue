<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-07 15:44:54
 * @LastEditTime: 2022-06-09 14:21:52
 * @LastEditors: 郑钊宇
 * @Description: 讲座详情页面
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
          <el-breadcrumb-item :to="{ path: '/announcement/lecture' }">
            讲座活动
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailTittle }} </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <div style="font-size: 18px; font-weight: bold;">开始时间:{{ lectureTime }}</div>
        <div v-if="picture" class="md-layout">
          <div class="md-layout-item md-size-30">
            <img class="md-image" style="height: auto" :src="picture" alt="主题图片">
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
import { fetchLectureById } from '@/api/lecture'

export default {
  name: 'News',
  components: {
    TemplePage
  },
  data() {
    return {
      headerTittle: '', // 主标题
      detailTittle: '', // 内容标题
      dateTittle: '', // 日期
      picture: undefined, // 图片
      lectureTime: '', // 讲座时间
      content: '' // 内容
    }
  },
  created() {
    // console.log(this.$route.params.lectureId)
    if (this.$route.params.lectureId) {
      fetchLectureById(this.$route.params.lectureId).then(response => {
        // console.log(response)
        this.headerTittle = response.data.lecture.catalog
        this.detailTittle = response.data.lecture.title
        this.lectureTime = response.data.lecture.lecturetime
        this.dateTittle = response.data.lecture.releasetime.substring(0, 10)
        // FIXME 图片与后台预览不一致,会有水平居中的情况
        this.content = response.data.lecture.content.replace(/wscnph/g, 'wscnph md-image')
        this.picture = response.data.lecture.picture
      })
    }
  }
}
</script>

<style></style>
