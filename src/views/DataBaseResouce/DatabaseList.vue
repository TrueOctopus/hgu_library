<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-08 09:04:07
 * @LastEditTime: 2022-03-08 11:18:09
 * @LastEditors: 郑钊宇
 * @Description: 数据库资源
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
        1
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
export default {
  components: { TemplePage },
  data() {
    return {
      detailTittle: '文献资源'
    }
  }
}
</script>

<style></style>
