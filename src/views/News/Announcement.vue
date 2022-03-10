<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-08 16:08:21
 * @LastEditors: 郑钊宇
 * @Description: 各类新闻公告列表 包括查询
-->
<template>
  <div>
    <TemplePage :detailTittle="detailTittle">
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">
            新闻公告
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #buttons>
        <md-button class="md-sm" @click="routeShow('all')"
          >所有发布消息</md-button
        >
        <md-button class="md-primary md-sm md-simple" @click="routeShow('news')"
          >新闻</md-button
        >
        <md-button
          class="md-warning md-sm md-simple"
          @click="routeShow('notes')"
          >公告</md-button
        >
        <md-button class="md-success md-sm md-simple" @click="routeShow('buy')"
          >购买</md-button
        >
        <md-button class="md-info md-sm md-simple" @click="routeShow('try')"
          >试用</md-button
        >
      </template>
      <template #text>
        <router-view></router-view>
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from "../components/DetailTemplePage.vue";

export default {
  name: "newsList",
  data() {
    return {
      infoColor: "info",
      detailTittle: "新闻公告"
    };
  },
  components: {
    TemplePage
  },
  methods: {
    routeShow(url) {
      this.$router.push({
        path: `${url}`
      });
    }
  },
  watch: {
    $route: {
      // handler: function(val, oldVal) {
      //   console.log(val);
      // }
    }
  }
};
</script>

<style></style>
