<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-08 08:44:07
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
          <el-breadcrumb-item v-if="showLastBreadcrumb">
            {{ detailTittle }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #buttons>
        <md-button class="md-sm">所有发布消息</md-button>
        <md-button class="md-primary md-sm md-simple">新闻</md-button>
        <md-button class="md-warning md-sm md-simple">公告</md-button>
        <md-button class="md-success md-sm md-simple">购买</md-button>
        <md-button class="md-info md-sm md-simple">试用</md-button>
      </template>
      <template #text>
        <NewsElem
          :newsTypeIndex="0"
          tittle="这是一段测试文字"
          date="03/03"
          newsId="1"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="1"
          tittle="这是一段测试文字"
          date="03/03"
          newsId="1"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="2"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="2"
          tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="1"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="0"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="1"
          tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="0"
          tittle="这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
          date="03/03"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="12/13"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="12/13"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="12/13"
        ></NewsElem>
        <NewsElem
          :newsTypeIndex="3"
          tittle="这是一段测试文字"
          date="12/13"
        ></NewsElem>
        <pagination
          :class="`pagination-${infoColor}`"
          v-model="infoPagination"
          :page-count="10"
        >
        </pagination>
      </template>

      <!-- {{ $route.params.newsId }} -->
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from "../components/DetailTemplePage.vue";
import NewsElem from "../components/NewsElement.vue";
import { Pagination } from "@/components";

export default {
  name: "newsList",
  data() {
    return {
      infoColor: "info",
      showLastBreadcrumb: false,
      detailTittle: "新闻公告",
      infoPagination: 1
    };
  },
  components: {
    TemplePage,
    NewsElem,
    Pagination
  }
};
</script>

<style></style>
