<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-03-05 15:32:03
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告选项卡
-->
<template>
  <div id="newsTab">
    <div class="dateClass">{{ date }} |</div>
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
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-left: 5px solid #00bcd4;
  a {
    font-weight: normal;
    font-family: "Microsoft Yahei", Times, serif;
    font-size: 15px;
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
