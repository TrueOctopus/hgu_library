<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-03-04 19:47:56
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告选项卡
-->
<template>
  <div id="newsTab">
    <span class="dateClass">{{ date }} |</span>
    <a href="#">
      <badge class="labelClass" :type="newsColor">{{ newsType }}</badge>
    </a>
    <span>
      <a href="#">{{ tittle }}</a>
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
      let colorTabs = ["primary", "info", "success", "warning"];
      return colorTabs[this.newsTypeIndex];
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
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#newsTab {
  line-height: 35px;
  font-size: 16px;

  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-left: 5px solid #00bcd4;
  a {
    color: black;
    text-decoration: none;
    margin-left: 5px;
    &:hover {
      color: #00bcd4;
    }
  }
}
.labelClass {
  position: relative;
  top: -1px;
}
.dateClass {
  padding: 0 0px 0 10px;
  line-height: 35px;
}
</style>
