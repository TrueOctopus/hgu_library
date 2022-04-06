<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-04-06 14:58:26
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告选项卡
-->
<template>
  <div id="newsTab" :style="tabColorStyle">
    <div class="dateClass">{{ date }} |</div>
    <router-link :to="`/announcement/${urlType}`">
      <badge class="labelClass" :type="newsColor">{{ newsType }}</badge>
    </router-link>
    <span>
      <router-link :to="`/announcement/${newsId}`">
        {{ tittle }}
      </router-link>
    </span>
  </div>
</template>

<script>
import { Badge } from '@/components'

export default {
  components: { Badge },
  props: {
    newsTypeIndex: {
      type: Number,
      required: true
    },
    tittle: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    newsId: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data() {
    return {}
  },
  computed: {
    newsType() {
      const news = ['新闻', '公告', '购买', '试用', '活动', '讲座']
      return news[this.newsTypeIndex]
    },
    urlType() {
      const news = ['news', 'notes', 'buy', 'try', 'activity', 'lecture']
      return news[this.newsTypeIndex]
    },
    newsColor() {
      const colorTabs = ['primary', 'warning', 'success', 'info', 'rose', 'danger']
      return colorTabs[this.newsTypeIndex]
    },
    tabColorStyle() {
      let tabColor = '#00bcd4'
      switch (this.newsTypeIndex) {
        case 0:
          tabColor = '#9c27b0'
          break
        case 1:
          tabColor = '#ff9800'
          break
        case 2:
          tabColor = '#2196f3'
          break
        case 3:
          tabColor = '#00bcd4'
          break
        case 4:
          tabColor = '#e91e63'
          break
        case 5:
          tabColor = '#f44336'
          break
      }
      return `border-left: 5px solid ${tabColor};`
    }
  }
}
</script>

<style lang="scss" scoped>
#newsTab {
  line-height: 35px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  a {
    font-weight: normal;
    font-family: "Microsoft Yahei", Times, serif;
    font-size: 15px;
    color: black;
    text-decoration: none;
    margin-left: 5px;
    &:hover {
      color: #00bcd4 !important;
    }
  }
}
.labelClass {
  position: relative;
  top: -0.05rem;
}
.dateClass {
  display: inline-block;
  text-align: center;
  width: 4rem;
  padding: 0 0 0 7px;
  line-height: 35px;
}
</style>
