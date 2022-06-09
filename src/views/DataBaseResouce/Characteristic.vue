<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 09:42:44
 * @LastEditTime: 2022-06-09 14:16:05
 * @LastEditors: 郑钊宇
 * @Description: 特色资源介绍页面
-->
<template>
  <div>
    <pageInfo catalog="特色资源" />
    <md-button class="md-info btn" href="/characteristic/achievement">点击前往</md-button>
  </div>
</template>

<script>
import pageInfo from '@/views/components/PageInformation'
export default {
  components: {
    pageInfo
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-left: -2rem;
  margin-top: 2rem;
}
</style>
