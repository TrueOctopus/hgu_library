<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-14 17:26:09
 * @LastEditTime: 2022-04-26 19:26:47
 * @LastEditors: 郑钊宇
 * @Description: 阅读推广
-->
<template>
  <!-- <el-carousel
    :interval="3000"
    type="card"
    height="434px"
    indicator-position="none"
  > -->
  <el-carousel
    :interval="3000"
    type="card"
    indicator-position="none"
  >
    <el-carousel-item v-for="book in bookList" :key="book.id">
      <div class="md-layout" @click="gotoBookDetail(book.id)">
        <div class="md-layout-item md-size-20" />
        <div class="md-layout-item md-size-60">
          <!-- <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            style="height:434px"
          > -->
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <img :src="getPic + book.coverimage" class="image">
            <div style="padding: 14px;">
              <span>{{ book.title }}</span>
              <div class="bottom clearfix" style="white-space: pre-wrap;">
                {{ book.bookinformation }}
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { fetchPublicityList } from '@/api/publicity'
import { getPic } from '@/api/file'
export default {
  data() {
    return {
      bookList: [],
      getPic
    }
  },
  created() {
    fetchPublicityList().then(response => {
      // console.log(response)
      this.bookList = response.data.recommend
    })
  },
  methods: {
    gotoBookDetail(id) {
      this.$router.push('/reading/bookDetail/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  font-size: 16px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 16px;
  height: 48px;
  overflow: hidden;
  font-size: 14px;
  color: #ababab;
}

.image {
  // height: 330px;
  height: 180px;
  display: block;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
