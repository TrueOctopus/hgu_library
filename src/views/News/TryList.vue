<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-19 16:48:43
 * @LastEditTime: 2022-03-19 17:02:07
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div>
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
      news-id="1"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
      news-id="1"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
      date="03/03"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="12/13"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="12/13"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="12/13"
    />
    <NewsElem
      :news-type-index="3"
      tittle="这是一段测试文字"
      date="12/13"
    />
    <pagination
      v-model="infoPagination"
      :class="`pagination-${infoColor}`"
      :page-count="10"
    />

    <!-- {{ $route.params.newsId }} -->
  </div>
</template>

<script>
import NewsElem from '../components/NewsElement.vue'
import { Pagination } from '@/components'

export default {
  name: 'TryList',
  components: {
    NewsElem,
    Pagination
  },
  data() {
    return {
      infoColor: 'info',
      showLastBreadcrumb: false,
      detailTittle: '新闻公告',
      infoPagination: 1
    }
  }
}
</script>

<style></style>
