<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 21:23:49
 * @LastEditTime: 2022-03-08 15:21:11
 * @LastEditors: 郑钊宇
 * @Description: 各类新闻公告列表 包括查询
-->
<template>
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

<script>
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
    NewsElem,
    Pagination
  },
  methods: {
    routeShow() {
      this.$router.push({
        path: "announcement/news"
      });
    }
  }
};
</script>

<style></style>
