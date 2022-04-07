<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-08 09:04:07
 * @LastEditTime: 2022-04-07 17:43:56
 * @LastEditors: 郑钊宇
 * @Description: 图书馆概况
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
        <div v-if="picture" class="md-layout">
          <div class="md-layout-item md-size-30">
            <img class="md-image" style="height: auto" :src="picture" alt="主题图片">
          </div>

          <div class="md-layout-item md-size-70" v-html="content" />
        </div>
        <div v-else v-html="content" />
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { fetchInfoByCatalog } from '@/api/pages'
export default {
  components: { TemplePage },
  data() {
    return {
      detailTittle: '本馆概况',
      content: '',
      picture: undefined,
      title: ''
    }
  },
  created() {
    fetchInfoByCatalog(this.detailTittle).then(res => {
      console.log(res)
      this.content = res.data.text[0].content
      this.picture = res.data.text[0].picture
      this.title = res.data.text[0].title
    })
  }
}
</script>

<style></style>
