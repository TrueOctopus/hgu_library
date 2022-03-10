<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-10 16:51:22
 * @LastEditors: 郑钊宇
 * @Description: 各类新闻公告列表 包括查询
-->
<template>
  <div>
    <TemplePage :detailTittle="detailTittle">
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/announcement' }">
            新闻公告
          </el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: '/announcement' }"
            v-if="isShowBreadcrub"
          >
            {{ lastBreadcrumbTittle }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #buttons>
        <md-button
          ref="all"
          class="md-sm"
          :class="{ 'md-simple': buttonClass.isAllActive }"
          @click="buttonShow('All')"
          >所有发布消息</md-button
        >
        <md-button
          ref="news"
          class="md-primary md-sm"
          :class="{ 'md-simple': buttonClass.isNewsActive }"
          @click="buttonShow('News')"
          >新闻</md-button
        >
        <md-button
          ref="notes"
          class="md-warning md-sm"
          :class="{ 'md-simple': buttonClass.isNotesActive }"
          @click="buttonShow('Notes')"
          >公告</md-button
        >
        <md-button
          ref="buy"
          class="md-success md-sm"
          :class="{ 'md-simple': buttonClass.isBuyActive }"
          @click="buttonShow('Buy')"
          >购买</md-button
        >
        <md-button
          ref="try"
          class="md-info md-sm"
          :class="{ 'md-simple': buttonClass.isTryActive }"
          @click="buttonShow('Try')"
          >试用</md-button
        >
      </template>
      <template #text>
        <div>
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

          <!-- {{ $route.params.newsId }} -->
        </div>
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
      isShowBreadcrub: false,
      infoColor: "info",
      detailTittle: "新闻公告",
      lastBreadcrumbTittle: "",
      infoPagination: 1,
      buttonClass: {
        newsType: "All",
        isAllActive: false,
        isNewsActive: true,
        isNotesActive: true,
        isBuyActive: true,
        isTryActive: true
      }
    };
  },
  components: {
    TemplePage,
    NewsElem,
    Pagination
  },
  methods: {
    buttonShow(newsType) {
      this.buttonClass.newsType = newsType;
      for (let key in this.buttonClass) {
        this.buttonClass[key] = true;
      }
      this.buttonClass["is" + newsType + "Active"] = false;
      switch (newsType) {
        case "All":
          this.isShowBreadcrub = false;
          break;
        case "News":
          this.lastBreadcrumbTittle = "新闻";
          this.isShowBreadcrub = true;
          break;
        case "Notes":
          this.lastBreadcrumbTittle = "公告";
          this.isShowBreadcrub = true;
          break;
        case "Buy":
          this.lastBreadcrumbTittle = "购买";
          this.isShowBreadcrub = true;
          break;
        case "Try":
          this.lastBreadcrumbTittle = "试用";
          this.isShowBreadcrub = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
