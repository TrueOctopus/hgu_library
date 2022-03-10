<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-03-08 15:39:16
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告选项卡
-->
<template>
  <div id="newsTab" :style="tabColorStyle">
    <div class="dateClass">{{ date }} |</div>
    <router-link to="#">
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
import { Badge } from "@/components";

export default {
  components: { Badge },
  data() {
    return {};
  },
  computed: {
    newsType() {
      let news = ["新闻", "公告", "购买", "试用"];
      return news[this.newsTypeIndex];
    },
    newsColor() {
      let colorTabs = ["primary", "warning", "success", "info"];
      return colorTabs[this.newsTypeIndex];
    },
    tabColorStyle() {
      let tabColor = "#00bcd4";
      switch (this.newsTypeIndex) {
        case 0:
          tabColor = "#9c27b0";
          break;
        case 1:
          tabColor = "#ff9800";
          break;
        case 2:
          tabColor = "#2196f3";
          break;
        case 3:
          tabColor = "#00bcd4";
          break;
      }
      return `border-left: 5px solid ${tabColor};`;
    }
  },
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
      type: String,
      require: true
    }
  },
  methods: {}
};
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
