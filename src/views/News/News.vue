<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 19:11:53
 * @LastEditTime: 2022-04-21 19:15:04
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告页面
-->
<template>
  <div>
    <TemplePage
      :header-tittle="headerTittle"
      :detail-tittle="detailTittle"
      :date-tittle="dateTittle"
    >
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/announcement' }">
            新闻公告
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailTittle }}</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <div v-if="picture" class="md-layout">
          <div class="md-layout-item md-size-30">
            <img class="md-image" style="height: auto" :src="picture" alt="主题图片">
          </div>

          <div class="md-layout-item md-size-70" v-html="content" />
          <div class="md-layout-item md-size-30" />
          <div class="md-layout-item md-size-70">
            <p v-if="appendix" class="appendix">附件：</p>
            <p v-for="(ele, index) in appendix" :key="index">
              <a @click="downloadAppendix(ele.link)">{{ ele.oldFileName }}</a>
            </p>
          </div>
        </div>

        <div v-else>
          <div v-html="content" />
          <p v-if="appendix" class="appendix">附件：</p>
          <p v-for="(ele, index) in appendix" :key="index">
            <a @click="downloadAppendix(ele.link)">{{ ele.oldFileName }}</a>
          </p>
        </div>
      </template>

    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { fetchNewsDetailById } from '@/api/news'
import { getPic, download } from '@/api/file'

export default {
  name: 'News',
  components: {
    TemplePage
  },
  data() {
    return {
      headerTittle: '',
      detailTittle: '',
      dateTittle: '',
      picture: undefined,
      content: '',
      appendix: ''
    }
  },
  created() {
    // console.log(this.$route.params.newId)
    if (this.$route.params.newId) {
      fetchNewsDetailById(this.$route.params.newId).then(response => {
        // console.log(response, download)
        this.headerTittle = response.data.news.catalog
        this.detailTittle = response.data.news.title
        this.dateTittle = response.data.news.releasetime.substring(0, 10)
        // FIXME 图片与后台预览不一致,会有水平居中的情况
        this.content = response.data.news.content.replace(/wscnph/g, 'wscnph md-image')
        if (response.data.news.appendix) this.appendix = JSON.parse(response.data.news.appendix)
        if (response.data.news.picture) this.picture = getPic + response.data.news.picture

        if (this.appendix && this.appendix !== []) {
          for (let index = 0; index < this.appendix.length; index++) {
            const link = download + '?fileName=' + this.appendix[index].response.data.newFileName
            const oldFileName = this.appendix[index].response.data.oldFileName
            this.appendix[index] = { link, oldFileName }
          }
        }
      })
    }
  },
  methods: {
    downloadAppendix(link) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: normal;
  font-family: "Microsoft Yahei", Times, serif;
  font-size: 15px;
  color: #3c4858 !important;
  text-decoration: none;
  margin-left: 5px;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: #00bcd4 !important;
  }
}
.appendix {
  margin-top: 5vh;
  font-size: 16px;
  font-weight: bold;
}
</style>
