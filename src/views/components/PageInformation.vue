<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-07 16:43:34
 * @LastEditTime: 2022-04-07 17:33:37
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="container">
    <div v-if="picture" class="md-layout">
      <div class="md-layout-item md-size-30">
        <img class="md-image" style="width: 100%;height: auto" :src="picture" alt="主题图片">
      </div>

      <div class="md-layout-item md-size-70" v-html="content" />
    </div>
    <div v-else v-html="content" />
  </div>
</template>

<script>
import { fetchInfoByCatalog } from '@/api/pages'
export default {
  props: {
    catalog: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      title: '',
      content: '',
      picture: undefined
    }
  },
  created() {
    // console.log('this.catalog', this.catalog)
    fetchInfoByCatalog(this.catalog).then(res => {
      // console.log(res)
      this.content = res.data.text[0].content
      this.picture = res.data.text[0].picture
      this.title = res.data.text[0].title
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-right: 5vh;
  margin-left: -5vh;
}
</style>
