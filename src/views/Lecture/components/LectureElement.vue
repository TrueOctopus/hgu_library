<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-06-09 14:22:35
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
      <router-link :to="`/lecture/${lectureId}`">
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
    lectureId: {
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
      const news = ['活动', '讲座']
      return news[this.newsTypeIndex]
    },
    urlType() {
      const news = ['activity', 'lecture']
      return news[this.newsTypeIndex]
    },
    newsColor() {
      const colorTabs = ['rose', 'danger']
      return colorTabs[this.newsTypeIndex]
    },
    tabColorStyle() {
      let tabColor = '#00bcd4'
      switch (this.newsTypeIndex) {
        case 0:
          tabColor = '#e91e63'
          break
        case 1:
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
