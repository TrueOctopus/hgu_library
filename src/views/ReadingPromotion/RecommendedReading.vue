<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 16:01:50
 * @LastEditTime: 2022-04-26 21:26:07
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="waterfall">
    <div
      v-for="item in bookList"
      ref="waterfallItem"
      :key="item.id"
      class="item"
      @click="gotoBookDetail(item.id)"
    >
      <img :src="getPic + item.coverimage">
      <span>{{ item.title }}</span>
    </div>
  </div>
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
.waterfall {
  margin-left: 5%;
  width: 80%;
  column-count: 2;
  column-gap: 0;
}

.item {
  cursor: pointer;
  text-align: center;
  padding-right: 50px;
  img {
    width: 100%;
    height: auto;
  }
  span {
    display: inline-block;
    padding: 8px 0 20px;
  }
}
</style>
