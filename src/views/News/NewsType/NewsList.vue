<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-19 16:47:36
 * @LastEditTime: 2023-01-01 18:27:49
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div>
    <NewsElem
      v-for="item in list"
      :key="item.id"
      :news-type-index="newsOption.indexOf(item.catalog)"
      :tittle="item.title"
      :date="item.releasetime.substring(2, 10)"
      :news-id="item.id"
    />
    <pagination
      v-model="infoPagination.pageNo"
      :class="`pagination-${infoColor}`"
      :page-count="infoPagination.pageCount"
      @input="fetchList"
    />
  </div>
</template>

<script>
import NewsElem from '../components/NewsElement.vue'
import { Pagination } from '@/components'
import { fetchNewsByCatalog, newsOption } from '@/api/news'

export default {
  name: 'ALL',
  components: {
    NewsElem,
    Pagination
  },
  data() {
    return {
      newsOption,
      list: [],
      infoColor: 'info',
      infoPagination: {
        pageNo: 1,
        pageSize: 12,
        pageCount: 1
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to)
    if (from.params.newId) {
      to.params.isBack = true
    } else {
      to.params.isBack = false
    }
    next()
  },
  created() {
    if (this.$route.params.isBack) {
      this.infoPagination.pageNo = Number(window.sessionStorage.getItem('pageNo'))
    }
    this.fetchList()
  },
  methods: {
    fetchList() {
      fetchNewsByCatalog(
        this.infoPagination.pageNo,
        this.infoPagination.pageSize,
        '新闻'
      ).then(response => {
        // console.log(response)
        this.list = response.data.news.list
        this.infoPagination.pageCount = response.data.news.pages
        // console.log(this.list)
      })
    }
  }
}
</script>

<style></style>
